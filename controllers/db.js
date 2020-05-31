const mongodb = require ("mongodb");
const connectionString = 'mongodb+srv://younis05@gmail.com:khaledyounis>@cluster0-upte7.mongodb.net/ComplexApp?retryWrites=true&w=majority'; 

mongodb.connect(connectionString,{useNewUrlParser: true, useUnifiedTopology: true} , function(err,client){

 module.exports = client.db();
  const app = require('./app');
  app.listen(3000);
});