const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = Schema({
    name: String,
    lastname: String,
    email:{
        type: String,
        unique: true
    },
    password: String,
    active: Boolean,
    isAdmin: String
});



module.exports= mongoose.model("Admin",AdminSchema)