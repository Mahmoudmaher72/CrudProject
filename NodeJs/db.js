const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CrudDB', (err) => {
    if (!err)
        console.log("MongoBD Connection Succeeded.")
    else
        console.log('Error In BD Connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;