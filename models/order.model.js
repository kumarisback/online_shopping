const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var Orders = new mongoose.Schema({
    
    userData:{
        type:mongoose.Schema.Types.ObjectId, 
        ref: 'data'
    }
    ,
    Items:{
        type:Array,
        required:true,
    },
    
});

//Export the model
module.exports = mongoose.model('orders', Orders);