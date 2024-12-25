import express from 'express'

// GET PATH DINAMICALLY
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const port = 3000;
const app = express();

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });


app.get("/", (req, res) => {
    const date = new Date() 
    const day = date.getDay()
    let type = "weekend"
    let timeTo = "have fun!" 
    if(day !== 0 && day !== 6) {
        type = "weekday"
        timeTo = "work hard!"
    }
    res.render(__dirname + "/views/index.ejs",
        {
            type: type,
            timeTo : timeTo,
        }
    )
})

