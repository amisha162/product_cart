const http = require('http');
const express = require('express');
const config = require('./config');
const logger = require('./utils/logger');
const routes = require('./routes/index');
const middlewares = require('./middlewares/index');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoutes = require('./routes/products');
app.set('port', config.get('server.port'));

middlewares(app);

routes(app);

// Server Creation
const server = http.createServer(app);
server.listen(app.get('port'), function (err) {
    if (err) {
        logger.error(err);
    }
    else {
        logger.info(`server started with port : ${config.get('server.port')}`);
        logger.info(`Environment: ${config.get('env')}`);
    }
});


process.on('unhandledRejection', (reason, p) => {
    logger.error(`Unhandled Rejection at: ${p},reason::${reason}`);
});

// To handle Uncaught Exception
process.on('uncaughtException', (error) => {
    logger.error(`Uncaught exception: ${error}`);
});



app.use(cors());
app.use(bodyParser.json());
app.use('/api/products', productRoutes);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose.connect('mongodb://your-connection-string', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
