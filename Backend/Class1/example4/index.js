const fs = require('fs');
const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send(`
            <html>
                <body>
                    <h1>
                        Home Page
                    </h1>
                </body>
            </html>
        `);
});

app.get('/contact', (req, res) => {
    res.send(`
            <html>
                <body>
                    <h1>
                        Contact Page
                    </h1>
                </body>
            </html>
        `);
});

app.get('/api/products', (req, res) => {
    const productData = fs.readFileSync('./data/products.json');

    try {
        // throw new Error('Something went wrong');
        res.setHeader('Content-Type', 'application/json');
        res.send(productData.toString());
    } catch(e) {
        res.statusCode = 500;
        res.send(e.message);
    }
});

app.get('*', (req, res) => {
    res.send(`
            <html>
                <body>
                    <h1>
                        Page Not Found!
                    </h1>
                </body>
            </html>
        `);
});


app.listen(5005, () => {
    console.log('Server is running at 5005');
})