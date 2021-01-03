const EventEmitter = require('events'); // class
// const emitter = new EventEmitter();
// (function (exports, require, module, __filename, __dirname) { // 실제로 node가 위의 내용으로 감쌈, module wrapper function
 
console.log("filename", __filename); // file 경로
console.log("direname", __dirname); // dir 경로

let url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
        // Send an HTTP request
        console.log("logger", message);
        this.emit('messageLogged', { id: 1, url: 'http://'}) // emit: making a noise, produce - signalling
    }
    
    // to make log function visible, we have to export it
    
    // module.exports.log = log;
    // module.exports = log;
}

module.exports= Logger; // exports 는 module.exports

    // module.exports.endPoint = url; 
    // console.log(module)
// })
