const express = require("express");
const app = express();
const fs = require("fs");

// to create folder
// fs.mkdir("./myfolder", function () {
//   console.log("folder created");
// });

// to delete folder
// fs.rmdir("./myfolder", function () {
//   console.log("deleted");
// });

let date = new Date().getUTCDate();
let month = new Date().getUTCMonth();
let year = new Date().getFullYear();
// console.log(`${date}/${month}/${year} `);

var d = new Date();
var time = d.toLocaleTimeString();
// console.log(time);

//to create file

app.post("/createfolder", (req, res) => {
    try {

        fs.writeFile(

            // `/newfolder/${date}.txt`,
            `./newfile/${date}.txt`,
            `today date is  ${date}/${month + 1}/${year} time : ${time}`,
            function (err) {
                if (err) throw err;
                console.log("created");
                res.json({ message: "created" })
            });
    }
    catch (err) {
        res.json({ message: "error" })
    }

})


// to read file
app.get("/readfile", (req, res) => {
    try {
        fs.readFile("./newfile/17.txt", "utf-8", function (err, data) {
            if (err) throw err;
            console.log(data);
            res.json(data);
        });
    }
    catch (err) {
        res.json({ message: "error" })
    }

})



// to read folder
app.get("/readfolder", (req, res) => {
    try {
        fs.readdir("./newfile", function (err, data) {
            if (err) throw err;
            console.log(data);
            res.json(data);
        });

    }

    catch (err) {
        res.json({ message: "error" })
    }

})




app.listen(3003);