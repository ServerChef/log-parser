import express from 'express';
import routes from './routes/main.routes';
import fs from 'fs';

const app = express();
const listenOn=process.env.ON || 3000;

app.use('/', routes);

if(typeof listenOn != "number" && fs.existsSync(listenOn)){
    fs.unlinkSync(listenOn);
}
const server = app.listen(listenOn, () => {
    let addr = server.address();
    if (typeof addr === "string"){
        //likely UNIX port. update permissions
        fs.chmodSync(listenOn, '766');
    }else{
        addr = `http://${addr.address}:${addr.port}`;
    }
    
    console.log(`Listening at ${addr}`);
});
