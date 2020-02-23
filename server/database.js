// const mongoose = require('mongoose');

// const devMode = process.env.NODE_ENV !== 'production';

// connect();

// //connect db
// async function connect() {
//     try{
//         await mongoose.connect(process.env.MONGODB_URI,{
//             useNewUrlParser:true,    
//             useUnifiedTopology: true
//         });
//         console.log('DB is connected');
//     }
//     catch(error){
//         console.log(error);
//     }
// }

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser:true,    
    useUnifiedTopology: true
}) 
    .then(db => console.log(`DB is connected`))
    .catch(err => console.error(err));