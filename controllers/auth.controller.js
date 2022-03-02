const cartModel = require("../models/cart.model");
const { authUser } = require("../models/operations");
const userDatabase = require("../models/operations");
const {createSession,destroySession} = require("../util/authentication");


function getSignup(req, res) {
  res.render("customer/auth/signup");
}

function signup(req, res) {
  userDatabase.signup({
    name: req.body.fullname,
    address: req.body.street + req.body.city + req.body.postal,
    password: req.body.password,
    email: req.body.email,
  });

  res.redirect('/login');
}

function getLogin(req, res) {
  res.render('customer/auth/login');
}

async function login(req,res){
  // console.log(req.body);
  let response=await authUser(req.body.email,req.body.password);
 let data=await cartModel.find();
  // console.log(response.response);
  // console.log(data);
  // let finaldata={}
  if(response.message==="login successfully"){
    createSession(req,await  response.response,await data[0].Items ,function(){
      res.redirect('/');
    })    
    
    return;
  }
  res.redirect('/login');
}

function logout(req, res){
  destroySession(req);
  res.redirect('/login');
}

module.exports = {
  getSignup: getSignup,
  getLogin: getLogin,
  signup: signup,
  login:login,
  logout:logout
};
