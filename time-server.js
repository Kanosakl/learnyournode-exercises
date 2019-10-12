const net = require('net');
const datefns = require('date-fns');

const port = process.argv[2];
const server = net.createServer(listener)
server.listen(port);

function listener(socket){  
    socket.end(`${datefns.format(new Date(), 'yyyy-MM-dd HH:mm')}\n`);  
}