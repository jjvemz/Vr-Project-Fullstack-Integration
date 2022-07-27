const mongoose = require("mongoose");
const app = require("./app");
const PORT_SERVER= process.env.PORT || 3977
const portDb = 27017;
const {API_VERSION, IP_SERVER, PORT_DB} = require("./config");

//mongoose.set("useFindAndModify", false);

mongoose.connect(`mongodb://${IP_SERVER}:${PORT_DB}/aframeproject`, 
{useNewUrlParser: true},(err, res)=>{
    try{
        console.log(`Conexión exitosa en el puerto: ${portDb}`);

        app.listen(portDb, ()=>{
            console.log('#######################')
            console.log('######### API REST#####')
            console.log('#######################')
            console.log(`http://${IP_SERVER}:${PORT_SERVER}/api/${API_VERSION}`)
        })
    }catch(err){
        throw err;
    }
})