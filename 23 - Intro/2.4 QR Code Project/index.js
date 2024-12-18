// 1. Use the inquirer npm package to get user input.
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'node:fs'


const question = [
    {
        type: 'input',
        name: 'URL',
        message: "Please insert an URL you want to convert into QR",
    }
]
inquirer.prompt(question)
    .then(
        // 2. Use the qr-image npm package to turn the user entered URL into a QR code image.
        (ans) => {
            const url = ans.URL;
            let image = qr.image(url, {type: "png"})
            image.pipe(fs.createWriteStream('image.png'));
            // 3. Create a txt file to save the user input using the native fs node module.
            // IT DOESNT WORK WITHOUT const or variable set previously
            fs.writeFile("URL.txt", url, (err) => {
                if (err) throw err;
                console.log("The file has been saved!");
              });
        }
    )
    .catch((error) => {
        console.log(error.code);
    })





