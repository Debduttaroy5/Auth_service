const dotenv = require('dotenv');
const brypt = require ('bcrypt');
dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    SALT: brypt.genSaltSync(10)
};