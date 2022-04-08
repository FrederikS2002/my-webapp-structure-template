import http, {Server} from 'http';
import 'dotenv/config';
import * as fs from "fs";
import * as path from "path";
import ip from 'ip'
import https from "https";

import app from '../app';

const port:number = getPort(process.env.PORT || 'p1');
const port2:number = getPort(process.env.HTTPSPORT || 'p2');

const httpsOptions: {cert: Buffer, key: Buffer} = {
    cert: fs.readFileSync(path.join(__dirname, "../..", "ssl/certs", "server.crt")),
    key: fs.readFileSync(path.join(__dirname, "../..", "ssl/certs", "server.key"))
}

const server:Server = http.createServer(app);
const HTTPSServer = https.createServer(httpsOptions, app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

HTTPSServer.listen(port2);
HTTPSServer.on('error', onError2);
HTTPSServer.on('listening', onListeningHTTPS);


function getPort(val:string) {
    const port = parseInt(val);

    if (isNaN(port)) {
        switch (val) {
            case "p1":
                return 3001;
                break;
            case "p2":
                return 3002;
                break;
            default:
                throw Error();
        }
    }

    if (port >= 0) {
        return port;
    }

    throw Error();
}

//COPIED
function onError(error:Error) {
    switch (error.name) {
        case 'EACCES':
            console.error(port + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(port + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onError2(error:Error) {
    switch (error.name) {
        case 'EACCES':
            console.error(port2 + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(port2 + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    console.info('Listening on http://' + ip.address()+":"+port);
}

function onListeningHTTPS() {
    console.info('Listening on https://' + ip.address()+":"+port2);
}
