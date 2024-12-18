const fs = require('node:fs/promises');

// WRITE FILE
// fs.writeFile("message.txt", "Hola gil")
//     .then(() => {
//         console.log("File was saved");
//     })
//     .catch((error) => {
//         console.error("Error:", error);
//     });

// Read file and as it is an async func with the returnal of a promise, I must
// catch it with a .then()
// fs.readFile('./message.txt', {encoding: 'utf-8'})
//     .then((content) => console.log(content))
//     .catch((error) => {console.log(error)})


