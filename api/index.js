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

const express = require('express');
const cors = require('cors');
const app = express();

const mongooseConfige = require('./config/configMongoose');
// const routes = require('./routes/routes');
const { development } = require('./config/config');
const port = development.PORT;

app.use(express.json());
app.use(cors());
// app.use(routes);
mongooseConfige(app);

const { Notes } = require('./models/notesModel');

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});


app.get('/api/todoapp',  (request, response)=>{
  const allNotes = Notes
  response.status(200).json(allNotes)
})