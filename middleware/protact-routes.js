function protect(req ,res, next){
 if(!res.locals.isAuth){
     res.redirect('/401');
 }

 if(req.path.startsWith('/admin') &&     !res.locals.isAdmin){
    res.redirect('/403');
}
next();
}

module.exports=protect;