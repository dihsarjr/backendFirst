//jshint esversion:6


const express = require("express");
const bodyparser = require("body-parser");
const app = express();

app.use(bodyparser.urlencoded({extended: true}));

app.get("/",function(requst, response){
response.sendFile(__dirname + "/index.html");
});

app.post("/",function(reg,res){
   console.log(reg.body);

   var num1 = Number(reg.body.n1);
   var num2 = Number(reg.body.n2);

 var total = num1+num2;
    res.send("gooo"+total);
} );
app.listen(3000,function(){
    console.log("server started on port 3000")
});
