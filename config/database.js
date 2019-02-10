//Set up mongoose connection
console.log('in db config');
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

module.exports = mongoose;