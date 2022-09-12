const mongoose = require('mongoose');

const connectDB = (uri) =>{ 
      console.log(mongoose.connect(uri)); 
      return mongoose.connect(uri) 
      .then(() => console.log("database connect established"))
      .catch((err) => console.log(err))
}

module.exports = connectDB; 