const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate-v2');

const Schema = mongoose.Schema;

const ItemSchema = Schema({
    id:{
      type: mongoose.Types.ObjectId  
    },
    name: String,
    author: String,
    description: String,
    image: {
        type: String,
        unique: true
    },
    date: Date
});

module.exports = mongoose.model("item", ItemSchema);