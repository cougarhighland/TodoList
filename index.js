const express = require("express");
const app = express();
const PORT = process.env.PORT || 1337;

//middleware
app.use(express.json());

//serving my static
app.use(express.static("./public"));

app.listen(PORT, () =>{
    console.log(`port ${PORT} is running`)
});