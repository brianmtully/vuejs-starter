//import dependencies
const dotenv = require('dotenv');;
dotenv.config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

require('./auth/passport');

// define the Express app
const app = express();



// enhance your app security with Helmet
app.use(helmet());

// use bodyParser to parse application/json content-type
app.use(bodyParser.json());

// enable all CORS requests
app.use(cors());

// log HTTP requests
app.use(morgan('combined'));

// ... other require statements
require('./routes')(app);

// start the server
app.listen(8081, () => {
  console.log('listening on port 8081');
});

//app.set('appPath', path.join(config.root, 'client'));
