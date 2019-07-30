var net = require('net')
var server = net.createServer(function (socket) {
    // socket handling logic  

    const date = new Date()
    const year = date.getFullYear()  
    const month = date.getMonth() + 1     // starts at 0  
    const day = date.getDate()      // returns the day of month  
    const hour = date.getHours()  
    const mins = date.getMinutes()
    const formattedMonth = month > 9 ? month : `0${month}`

    socket.end(`${year}-${formattedMonth}-${day} ${hour}:${mins}\n`)
})
server.listen(process.argv[2]) 