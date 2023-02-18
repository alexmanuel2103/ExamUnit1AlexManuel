const express = require ("express");
const bodyparser = require ("body-parser");
const app = express();
const cors = require("cors");
const env = require("dotenv");

env.config({
    path: "./config.env",
})


app.use(cors());
app.use(bodyparser.json({limit: "100mb"}));
app.all("*", function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*", "GET", "POST", "PATCH", "DELETE", "PUT");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
})



const db_array = [
    {
        id: "1",
        username: "Alex",
        passkey: "1234",
    },
    {
        id: "2",
        username: "Manuel",
        passkey: "asdf",
    },
    {
        id: "3",
        username: "Melanie",
        passkey: "asdf.1234"
    },
    {
        id: "4",
        username: "Miguel",
        passkey: "4321.fdsa",
    },
    {
        id: "5",
        username: "Ivan",
        passkey: "4321",
    },
    {
        id: "6",
        username: "Jose",
        passkey: "01010"
    }
];

/*
Insert Student
Update Student
Delete Student
Show all students (at least 5 students)
Show one specific student
Register (bcrypt)
Login (bcrypt)
*/


//Pushes an element into the array and add new user with JSON
//This endpoint works :)
app.post('/insertstudent', function(req, res){
    let bodyreq = req.body;
    db_array.push(bodyreq);
    res.send(db_array);
});


//updates the element of an array
//This endpoint works :)
app.put('/updatestudent', function(req, res){
    let bodyreq = req.body;
    db_array.splice(0,1, bodyreq);
    res.send(db_array);
});


//This endpoint works :)
//Deletes an element from the position 0 which will be the first element
//The element Alex was deleted
app.delete('/deletestudent', function(req, res){
    db_array.splice(0,1);
    res.send(db_array);
});


//This one works :)
//Shows all the elements inside of the local array
app.get('/showall', function(req, res){
    res.send(db_array);
});

//Type in an element of the array and it will show one
app.get('/showone', function(req, res){
    let bodyreq = req.body;
    res.send(req.body);
});



app.post('/register', function(req, res){
    let bodyreq = req.body;
    db_array.push(bodyreq);
    res.send(db_array);
});

app.get('/login', function(req, res){
    let bodyreq = req.body;

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`API working successfully on PORT: ${PORT}`)
})