var mongoose = require("mongoose");

//Set up default mongoose connection


 const dbconn = () => {
    var mongoDB =
    "mongodb+srv://KOILA:koila@cluster0.oxape.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
  
  console.log("done");
  //Get the default connection
  var db = mongoose.connection;
  
  //Bind connection to error event (to get notification of connection errors)
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
};


module.exports = dbconn;