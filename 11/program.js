var http = require('http')
var fs = require('fs')

const filePath = process.argv[3]
var server = http.createServer(function (req, res) {
    // request handling logic...  
    const stream = fs.createReadStream(filePath)

    stream.pipe(res)
})
server.listen(process.argv[2])  
