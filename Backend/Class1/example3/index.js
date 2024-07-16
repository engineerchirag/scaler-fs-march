const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write(`
            <html>
                <body>
                    <h1>
                        Home Page
                    </h1>
                </body>
            </html>
        `);
        res.end();
    }

    if (req.url === '/contact') {
        res.write(`
            <html>
                <body>
                    <h1>
                        Contact Page
                    </h1>
                </body>
            </html>
        `);
        res.end();
    }

    if (req.url === '/api/products') {
        const products = [{
            id: 1,
            title: 'Product1'
        },{
            id: 2,
            title: 'Product2'
        },{
            id: 3,
            title: 'Product3'
        }];

        try {
            // throw new Error('Something went wrong');
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify(products));
            res.end();
        } catch(e) {
            res.statusCode = 500;
            res.write(e.message);
            res.end();
        }

        
    }
    
});

server.listen(5003, () => {
    console.log('Server is running at http://localhost:5003');
})