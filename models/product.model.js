const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema({
    Title:{
        type:String,
        required:true,
    },
    Price:{
        type:Number,
    },
    Summary:{
        type:String,
        required:true,
        unique:true,
    },
    Description:{
        type:String,
        required:true,
    },
    Path:{
        type:String,
        required:true,
    },
    Filename:{
        type:String,
        required:true,
    }
});

//Export the model
module.exports = mongoose.model('Product', productSchema);