function errhandler(error, req, res, next){
    if(error){
        console.log(error);
        res.status(500).render('shared/500');

    }
}

module.exports=errhandler;