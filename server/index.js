if(process.env.NODE_ENV!=='production') {
    require('dotenv').config();//read .env file for dev enviroment
}
const express = require('express');//server package
const morgan = require('morgan');//show petitions from server on cmd
const multer = require('multer');//help for upload images on server;
const path = require('path');//nodejs library to handle paths
const cors = require('cors');//allow connection between different ports front-back connection

//Initializations
const app = express();
require('./database');
const routes_books = require('./routes/routes_books');

//Settings server
app.set('port',process.env.PORT||3000);

//Pre-configurations middlewares
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename(req,file,callback) {
        callback(null,new Date().getTime() + path.extname(file.originalname));
    }
});

// Middlewares
app.use(morgan('dev'));
app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extended: false}));//handle form type
app.use(express.json());//handle json files
app.use(cors());//communications between 2 servers

//Routes
app.use('/api/books',routes_books);

//Static files
app.use(express.static(path.join(__dirname,'public')));

//Start server
app.listen(app.get('port'),()=>{
    console.log('Server on port',app.get('port'));
});