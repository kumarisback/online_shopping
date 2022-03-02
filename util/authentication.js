const session = require("express-session");

async function  createSession(req, user, data,action){
    
    req.session.uid=user._id.toString();

    req.session.isAdmin=user._doc.isAdmin;
    if(!data || data.length===0){
        req.session.cart=[]; 
    }
    else req.session.cart=data;
    req.session.save(action);
    

}

function destroySession(req ){
    req.session.uid="";
    req.session.isAdmin="";
    req.session=null;
}

module.exports={
    createSession:createSession,
    destroySession:destroySession
};