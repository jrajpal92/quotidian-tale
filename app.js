const express = require("express");
const bodyParser = require("body-parser");
const app = express();
//const configRoutes = require("./routes");
const exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
const static = express.static(__dirname + '/public');
app.use("/public", static);
app.use(bodyParser.json());
var hbs = require('handlebars');
//hardik chheddhahaa
//hardik chheda new changes
//hardik new changes done jasmeet bhenchod
//configRoutes(app);
//Jasmeet New changes done 
app.listen(3000, () => {
    console.log("We've now got a server!");
    console.log("Your routes will be running on http://localhost:3000");
});