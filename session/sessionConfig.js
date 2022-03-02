const express =require('express');
const exsession=require('express-session');
var mongoDBStore = require('connect-mongodb-session');

function createSession(){
    var MongoDBStore =mongoDBStore(exsession);
    var store = new MongoDBStore({
        uri: 'mongodb+srv://KOILA:koila@cluster0.oxape.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        databaseName:'myFirstDatabase',
        collection: 'mySessions'
      });
    return store;
}

function createSessionConfig(){
    return {
        secret: 'mysecrettoken',
    cookie: {
      maxAge: 1000 * 60 * 60
    },
    store: createSession(),
    // Boilerplate options, see:
    // * https://www.npmjs.com/package/express-session#resave
    // * https://www.npmjs.com/package/express-session#saveuninitialized
    resave: false,
    saveUninitialized: false
    }
}

module.exports=createSessionConfig;