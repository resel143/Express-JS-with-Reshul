const express = require("express");
const app = express();


app.get("/",(req, res)=>{
    res.send("Welcome to HOME PAGE!!");
});

app.get("/about",(req, res)=>{
    res.send("Welcome to ABOUT PAGE!!");
});

app.get("/contact",(req, res)=>{
    res.send("Welcome to CONTACT PAGE");
});

app.get("/information",(req, res)=>{
    res.send("Welcome to the INFORMATION PAGE!!");
});

app.listen(8000,()=>{
    console.log("Welcome par phail KUM");
})
