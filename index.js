const express = require("express");
const app = express();
const PORT = process.env.PORT || 1337;

//exapmle task
var task = ["do assignment", "drink juice"];
var complete = ["finish"]

//middleware
app.use(express.json());
app.use(express.urlencoded());

//set engile to make ejs file as html file
app.set('view engine','ejs');

//homepage
app.get("/",(req,res)=>{
    res.render("index",{task:task, complete:complete});
});

//post request
app.post("/addtask", (req,res) =>{
    //get value of newtask from input
    let newTask = req.body.newtask;

    //push new task to the array
    task.push(newTask);

    //go back to homepage
    res.redirect('/');
});

//post request
app.post("/deletetask", (req,res) =>{
    //check if any value
    let completeTask = req.body.check;

    //if any task done, add to complete
    if(typeof completeTask === "string"){
        complete.push(completeTask);
        //check if task is done, remove it from task list
        task.splice(task.indexOf(completeTask),1);
    }else if (typeof completeTask === "object"){
        for (let i = 0; i < completeTask.length; i++){
            complete.push(completeTask[i]);
            task.splice(task.indexOf(completeTask[i],i));
        }
    }
    res.redirect('/');

});

//http://localhost:1337
app.listen(PORT, () =>{
    console.log(`port ${PORT} is running`)
});