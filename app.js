const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    res.setHeader("Content-Type", "text-html")

        if (url === '/') {
            res.write('<html>');
            res.write('<head><title>Enter a message</title></head>');
            res.write('<body><form action = "/message" method = "post"><input type = "text"><button type="submit">Send</button></form></body>');
            res.write('</html>');
            return res.end();
        }


        res.write('<html>');
        res.write('<head><title>My Awesome Page</title></head>');
        res.write('<body><h1>Hello from Node Server</h1></body>');
        res.write('</html>');
        res.end()
});

server.listen(3000)
