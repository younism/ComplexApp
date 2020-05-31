
const User = require('../modules/User');

exports.login = function(){

} 

exports.logout = function(){
    
}  

exports.register = function(req,res){
  let user = new User(req.body);
  user.register();
  if(user.errors.length){    // any num> 0  -> true
    res.send(user.errors);

  }else{
  res.send ("Congrats");
  }
}  

exports.home = function(req,res){
  res.render('home-guest');  
}  