// imports
const app = require('express')();
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

//setup environment
dotenv.config();

// setup CORS
const corsOptions = {
    origin: process.env.CORS_WHITELIST
}

// middleware
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// setup port
const PORT = process.env.PORT || 4000;

// controllers 
const rebootCtrl = require('./controllers/rebootCtrl');

// root route
app.get('/', (req, res) => res.send('Hello World'));

//api routes 
app.use('/api/v1/reboot', rebootCtrl);


// start server
app.listen(PORT, () => console.log(`Server connected on port ${PORT}`))