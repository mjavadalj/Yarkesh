const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const sequelize = require('./api/models/database-connection');
require('./api/middlewares/passportJWTConfig')(passport);
const router = require('./api/routes/router')

//! --------------------------- MIDDLEWARES ---------------------------------------
app.use(passport.initialize());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());
app.use(cors());

//? ---------------------- ROUTES ------------------------------

app.use('/api', router)

//! ----------------------------------Database Sync--------------------------------

require('./api/models/databaseRelations')
sequelize.sync();

module.exports = app;