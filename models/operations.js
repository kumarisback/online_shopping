const User= require('./user.model');
const bcrypt =require('bcryptjs');
const bcryptjs = require('bcryptjs');
async function signup(data){
    data.password=await bcrypt.hash( data.password,10);
    let user= new User(data);
   await  user.save(function(err, x){
       if(err) return console.log(err);
       return console.log("saved"+ x);
   });
    // var array = [data];
    // User.create(
    //     array
    // ).then((docs) => {
    //     console.log("created");
    // });
    return 
}

async function authUser(email,password){
        let response = await User.findOne({email:email});
        let match=await bcrypt.compare(password,response.password);
        console.log(match);
        if(!response ||!match){
            return {message:"login failed"};
        }
        return {message:"login successfully" , response};

}

module.exports={
    signup:signup,
    authUser:authUser
}