const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url  === '/'){
        res.write('Hello World');
        res.end();
    }
}); // events

server.on('connection', (socket) => {
    console.log('New connection...');
});

server.listen(3000);

console.log('Listening on port 3000...')

const path = require('path');

const os = require('os');
const fs = require('fs');

// const EventEmitter = require('events'); // class
// const emitter = new EventEmitter();


const Logger = require('./logger'); // require function imports module.exports
const logger = new Logger();

// Register a listener
logger.on('messageLogged', function(arg) { // e, eventArg
    console.log('listener called', arg);
    // logger.log(arg.url)
})

logger.log('message')


logger.log('message')

// Raise an event
// emitter.emit('messageLogged', { id: 1, url: 'http://'}) // emit: making a noise, produce - signalling
// emitter.emit('messageLogged') 

// sync or async
const files = fs.readdirSync('./');

console.log("files", files);

fs.readdir('./', function(err, files){
    if(err) console.log('Error', err);
    else console.log('Result', files);
});

let totalMemory = os.totalmem();
let freeMemory = os.freemem();

console.log(`total memory: ${totalMemory}, free memory: ${freeMemory}`)

let pathObj = path.parse(__filename);
console.log(pathObj)
// console.log(logger)
// logger.log('message');

// logger.log('message, event emitter')



// function sayHello(name) {
//     console.log('Hello!', name);
// }

// sayHello("hayoung")
// console.log(window)

// modules built into node
// os, fs, events, http

//global
// console.log();
// setTimeout();
// clearTimeout();
// setInterval();

// const message = "hello";

// console.log(global)

// console.log(module) // module object is not global