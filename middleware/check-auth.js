function chechAuth(req ,res, next){
    const uid=req.session.uid;
    if(!uid){
        return next();
    }
    res.locals.uid=uid.toString();
    res.locals.isAuth=true;
    res.locals.isAdmin=req.session.isAdmin;
    // console.log("==============");
    // console.log(req.session);
    // console.log(res.locals);
    // console.log("==============");
    next();
}

module.exports=chechAuth;