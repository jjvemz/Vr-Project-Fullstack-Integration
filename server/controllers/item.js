const item = require("../models/item");

function addItem(req, res){
    const body = req.body;
    const post = new Post(body);

    post.save((err, itemStored)=>{
        if(err){
            res.status(500).send({ code: 500, message:"Error del servidor."});
            if(!itemStored){
                res
                .status(400)
                .send({ code: 400, message:" No se ha podido crear el item"});
            }else{
                res
                .status(200)
                .send({ code: 200, message :"Post creado correctamente."});
            }
        }
    });
}

function getItems(req,res){
    const{page=1,limit=10}=req.query;

    const options={
      page,
      limit:parseInt(limit),
      sort:{date:"desc"}
    };

    Post.paginate({} ,options ,(err,postsStored)=>{
        if(err){
            res.status(500).send({code:500,message:"Error del servidor."});
        }else{
            if(!postsStored){
                res
                .status(404)
                .send({code:404,message:"No se ha encontrado ningun post."});
            }else{
            res.status(200).send({code:200,posts:postsStored});
            }
        }
    });
}

function updateItem(req, res){
    const itemData= req.body;
    const {id} = req.params;

    item.findByIdAndUpdate(id, itemData, (err, itemUpdate)=>{
        if(err){
            res.status(500).send({code:500, message:"Error del servidor."});
        }else{
            if(!itemUpdate){
                res
                .status(404)
                .send({ code: 404, message:"Nonse ha encontrado un dato con este id."})
            }else{
                res.status(200).send({ code:200, message:"Post actualizado correctamente"})
            }
        }
    });
}

function deleteItem(req,res){
    const {id} = req.params;

    item.findByIdAndRemove(id, (err, postDeleted)=>{
        if(err){
            res.status(500).send({ code: 500, message:"Error del servidor."});
        }else{
            if(!itemDeleted){
                res.status(404).send({code:404, message:"Item no encontrado."});
            }else{
                res.status(200).send({ code:200, message:"El item ha sido eliminado correctamente"});
            }
        }
    });
}

function getItem(req,res){
    const {url} = req.params;
    
    item.findOne({url}, (err, itemStored)=>{
        if(err){
            res.status(500).send({code: 500, message:"Error del servidor."});
        }else{
            if(!itemStored){
                res
                .status(404)
                .send({code:404, message:"No se ha encontrado ningun item."});
            }else{
                res
                .status(200)
                .send({code: 200, item:itemStored});
            }
        }
    })
}

module.exports = {
    getItems,
    updateItem,
    addItem,
    deleteItem,
    getItem
}