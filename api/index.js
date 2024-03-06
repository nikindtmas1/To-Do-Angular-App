// let Express = require("express");
// let MongoClient = require('mongodb').MongoClient;
// let cors = require('cors');
// const multer = require("multer");

// let app = Express();
// app.use(cors());

// let CONNECTION_STRING="mongodb+srv://nikindtmas1:niki548444@cluster0.jgtvday.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// let DATABASENAME = "todoappdb";
// let database;

// app.listen(5038, () => {
//     MongoClient.connect(CONNECTION_STRING,(error, client)=>{
//         database=client.db(DATABASENAME);
//         console.log("Mongodb Connection successful");
//     })
// });

// app.get('/api/todoapp/GetNotes', (request, response)=>{
//     database.collection('todoappcollection').find({}).toArray((error, result)=>{
//         response.send(result);
//     })
// })

const mongoos = require("mongoos");