const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.write('<h1>hello there!</h1>')
    res.end()
})

// server 3000 portda ekranga hello there  textini chiqarmoqda va end() bn res ni toxtatmoqda 
server.listen(3000, () => {
    console.log('server started');
})

// server 3000 portda server started ni log qily....
