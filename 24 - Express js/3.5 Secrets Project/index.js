//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";


// GET PATH DINAMICALLY
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });


app.use(bodyParser.urlencoded({ extended: true }));

function login_validation(req, res, next) {
    req.is_valid = false;
    if (req.body["password"] == "iloveprogramming"){
        req.is_valid = true;
    }
    next();
}
app.use(login_validation);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})
app.post("/check", (req, res) => {
    if (req.is_valid){
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        res.sendFile(__dirname + "/public/index.html");
    }
})

// function login_validation(req) {
//     let pass = "iloveprogramming";
//     if (req.body["password"] == pass) {
//         return true;
//     }
//     return false;
// }
