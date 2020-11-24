//jshint esversion:6


const express = require("express");
const app = express();

app.get("/profile",function(requst, response){
response.sendFile(__dirname + "/index.html");
})
app.listen(3000,function(){
    console.log("server started on port 3000")
});
