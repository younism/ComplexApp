const express = require ('express') ; // let vs const(can not be changes anyway)
const app = express();

 const router = require('./router') ;  // require our own files

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));

app.set('views', 'views');  //the next "views is ours"
app.set('view engine', 'ejs');

app.use('/', router); //base url - page



module.exports =app ;
