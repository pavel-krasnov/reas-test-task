const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    location: String,
    property: String,
    name: String,
    email: String,
    tel: String
});

module.exports = mongoose.model("Client", clientSchema);