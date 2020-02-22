const mongoose = require('mongoose');

connect();

//connect db
async function connect() {
    try{
        await mongoose.connect("mongodb+srv://admin:1234@cluster0-5mgk3.azure.mongodb.net/test?retryWrites=true&w=majority",{
            useNewUrlParser:true,    
            useUnifiedTopology: true
        });
        console.log('DB is connected');
    }
    catch(error){
        console.log(error);
    }
}