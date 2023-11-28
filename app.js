const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();


const items = [ "Buy Food","Cook Food","Eat Food"];
const workItems = [];
// using ejs to create a template
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
    // import the date function from date.js
    const day = date.getDate();
    res.render("list", {
        listTitle: day, 
        newItems: items
    });
    
});

app.post("/", function(req, res) {
    //console.log(req.body);
    const item = req.body.newItem;

    if(req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
    
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newItems: workItems});
});

app.post("/work", function(req, res){
    const item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});

app.listen(process.env.PORT || 3000, function(req, res){
    console.log("The server is up and running on port 3000")
});

