https://www.youtube.com/watch?v=TlB_eWDSMt4&t=800s&ab_channel=ProgrammingwithMoshhttps://www.youtube.com/watch?v=TlB_eWDSMt4&t=800s&ab_channel=ProgrammingwithMosh

- Module: in node, every file is module

- [docs]https://nodejs.org/dist/latest-v14.x/docs/api/
  - File System, Http, os, path, process, query strings, stream, 
  - path
    ```javascript
        const path = require('path');
        let pathObj = path.parse(__filename);
        console.log(pathObj)
    ```
  - os 

    ```javascript
        const os = require('os');

        let totalMemory = os.totalmem();
        let freeMemory = os.freemem();

        console.log(`total memory: ${totalMemory}, free memory: ${freeMemory}`)
    ```
   - file system
    ```javascript
    const fs = require('fs');

    // sync or async
    const files = fs.readdirSync('./');

    console.log("files", files);

    fs.readdir('./', function(err, files){
        if(err) console.log('Error', err);
        else console.log('Result', files);
    });
    ```
   - events
    ``` javascript
    const EventEmitter = require('events'); // class
    const emitter = new EventEmitter();

    // Register a listener
    emitter.on('messageLogged', function(arg) { // e, eventArg
        console.log('listener called', arg);
    })
    // Raise an event
    emitter.emit('messageLogged', { id: 1, url: 'http://'}) // emit: making a noise, produce - signalling
    // emitter.emit('messageLogged') 
    ```

    - HTTP
    ```javascript
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
    ```

