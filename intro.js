const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send('Hello from Reshul!');
})

app.get("/about",(req, res)=>{
    res.send("Hello made by Reshul!");
})

app.listen(8000, ()=>{
    console.log("Listening the port @8000");
})
// API are made with express
// get - read 
// post - create
// put - update
// delete - delete
