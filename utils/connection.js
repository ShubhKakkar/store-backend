const mongoose = require('mongoose');

const connection = async() => {
    try {
        if(mongoose.connection.readyState !== 1) {
            await mongoose
              .connect(process.env.Mongo_Db_URI)
              .then(() => {
                console.log("Connected to database successfully");
              })
              .catch((err) => {
                console.log(err);
              });
        }
    }
    catch(err) {
        console.log(err);
    }
}

module.exports = connection;