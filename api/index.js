
const express = require('express');
const cors = require('cors');
const app = express();

const mongooseConfige = require('./config/configMongoose');
const routes = require('./routes/routes');
const { development } = require('./config/config');
const port = development.PORT;

app.use(express.json());
app.use(cors());
app.use(routes);
mongooseConfige(app);


app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});


