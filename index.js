const express = require("express");
// const xata   = require("@xata.io/client");
const app = express();
const port = 3000;
const xata = "./src/xata.js"



app.get("/",  (req, res) => {

    
    res.send("hello world")

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
