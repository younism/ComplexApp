// Here, we open a connection with our DB
const mongodb = require('mongodb');

const connectionString='mongodb+srv://<moayad>:<abuarab67>@cluster0-upte7.mongodb.net/ComplexApp?retryWrites=true&w=majority'  ;
mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true},function( err, client){
module.exports = client.db();
const app = require('./app');
app.listen(3000);
});