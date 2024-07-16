const fs = require('fs');

const demoFileData = fs.readFileSync('./demo.txt');
console.log(demoFileData.toString());

fs.appendFileSync('./demo.txt', '\n --Chirag');
const demoFileData2 = fs.readFileSync('./demo.txt');
console.log(demoFileData2.toString());

fs.mkdirSync('dist');
fs.writeFileSync('./dist/index.html', `
    <html>
        <body>
            <h1>
                Demo Page
            </h1>
        </body>
    </html>

`);