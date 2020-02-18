const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const Client = require("./models/client");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "build")));
app.use(cors());

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

mongoose.connect(process.env.DBPATH || "mongodb://localhost/pavel_krasnov_test_task");

app.post("/clients", (req, res) => {
    Client.create({
        location: req.body.location,
        property: req.body.property,
        name: req.body.name,
        email: req.body.email,
        tel: req.body.tel
    }, (err, client) => {
        if (err) {
            console.log(err);
        } else {
           res.json({client: client});
        }
    });
});

app.listen(process.env.PORT || 3000, process.env.IP, () => {
    console.log("Listening on port 3000");
});