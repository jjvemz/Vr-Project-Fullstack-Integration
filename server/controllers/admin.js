const bcrypt = require("bcrypt-nodejs");
const jwt = require("../services/jwt");
const admin = require("../models/admin");

function signUp(req,res){
    const admin = new Admin();

    const {email, password, repeatPassword} = req.body;
    admin.email = email;
    admin.password = password;
    admin.active = false;

    if(!password ||!repeatPassword){
        res.status(404).send({message:"Las contraseñas son obligatorias."});
      }else{
        if(password!== repeatPassword){
          res.status(404).send({message:"Las contraseñas no son iguales."});
        }else{
          bcrypt.hash(password,null,null,function(err,hash){
            if(err){
              res
                .status(500)
                .send({message:"El usuario ya existe"});
            }
          });
       }
  }
};

function signIn(req, res){
  console.log('Login succesful...');
  const params = req.body();
  const email = params.email.toLowerCase();
  const password = params.password;

  admin.findOne({email}, ()=>{
    if(err){
      res.status(500).send({message:"Error del servidor."});
    }else{
      if(!adminStored){
        res.status(404).send({message:"Usuario no encontrado."});
      }else{
        bcrypt.compare(password, adminStored.password, (err,check)=>{
          if(!err){
            res.status(500).send({message:"Error del servidor."});
          }else if(!check){
              res.status(404).send({message:"contraseña incorrecta"});
            }else{
            if(!adminStored.active){
              res.status(200).send({code:200, message:"El usuario no esta activo"});
            }else{
              res.status(200).send({
                accesToken: jwt.creatAccestoken(adminStored),
                refreshToken: jwt.createRefreshToken(adminStored)
              });
            }
          }
        })
      }
    }
  })
}

function getAdmins(req, res) {
  admin.find().then(users => {
    if (!users) {
      res.status(404).send({ message: "No se ha encontrado ningun usuario." });
    } else {
      res.status(200).send({ users });
    }
  });
}

function getSuperAdminActive(req, res) {
  const query = req.query;

  admin.find({ active: query.active }).then(admin => {
    if (!admin) {
      res.status(404).send({ message: "No se ha encontrado ningun usuario." });
    } else {
      res.status(200).send({ admin });
    }
  });
}
async function updateAdmin(req, res) {
  let adminData = req.body;
  adminData.email = req.body.email.toLowerCase();
  const params = req.params;

  if (adminData.password) {
    await bcrypt.hash(adminData.password, null, null, (err, hash) => {
      if (err) {
        res.status(500).send({ message: "Error al encriptar la contraseña." });
      } else {
        adminData.password = hash;
      }
    });
  }

  Admin.findByIdAndUpdate({ _id: params.id }, adminData, (err, userUpdate) => {
    if (err) {
      res.status(500).send({ message: "Error del servidor." });
    } else {
      if (!userUpdate) {
        res
          .status(404)
          .send({ message: "No se ha encontrado ningun usuario." });
      } else {
        res.status(200).send({ message: "Usuario actualizado correctamente." });
      }
    }
  });
}

function activateUser(req, res) {
  const { id } = req.params;
  const { active } = req.body;

  admin.findByIdAndUpdate(id, { active }, (err, userStored) => {
    if (err) {
      res.status(500).send({ message: "Error del servidor." });
    } else {
      if (!userStored) {
        res.status(404).send({ message: "No se ha encontrado el usuario." });
      } else {
        if (active === true) {
          res.status(200).send({ message: "Usuario activado correctamente." });
        } else {
          res
            .status(200)
            .send({ message: "Usuario desactivado correctamente." });
        }
      }
    }
  });
}
function getAdmins(req, res) {
  User.find().then(users => {
    if (!users) {
      res.status(404).send({ message: "No se ha encontrado ningun usuario." });
    } else {
      res.status(200).send({ users });
    }
  });
}

function getAdminActive(req, res) {
  const query = req.query;

  User.find({ active: query.active }).then(users => {
    if (!users) {
      res.status(404).send({ message: "No se ha encontrado ningun usuario." });
    } else {
      res.status(200).send({ users });
    }
  });
}

function deleteAdmin(req, res) {
  const { id } = req.params;

  admin.findByIdAndRemove(id, (err, userDeleted) => {
    if (err) {
      res.status(500).send({ message: "Error del servidor." });
    } else {
      if (!userDeleted) {
        res.status(404).send({ message: "Usuario no encontrado." });
      } else {
        res
          .status(200)
          .send({ message: "El usuario ha sido eliminado correctamente." });
      }
    }
  });
}

async function updateAdmin(req, res) {
  let userData = req.body;
  userData.email = req.body.email.toLowerCase();
  const params = req.params;

  if (userData.password) {
    await bcrypt.hash(userData.password, null, null, (err, hash) => {
      if (err) {
        res.status(500).send({ message: "Error al encriptar la contraseña." });
      } else {
        userData.password = hash;
      }
    });
  }
}

module.exports = {
    signUp,
    signIn,
    getSuperAdminActive,
    deleteAdmin,
    activateUser,
    getAdmins,
    getAdminActive,
    updateAdmin
};