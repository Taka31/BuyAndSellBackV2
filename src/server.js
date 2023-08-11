import Hapi from '@hapi/hapi';
import routes from './routes';
import { db } from './database';

let server;

const start = async() => {
    const server = Hapi.server({
        port:8000,
        host:'localhost',

    });

    routes.forEach(element=>{
        server.route(element);
    });

    db.connect();


    await server.start();
    console.log(`server is listening on ${server.info.uri})`);

}

process.on('unhandledRejection',err =>{
    console.log(err);
    process.exit(1);
});

process.on('SIGINT',async()=>{
    console.log('Stopping server...');   
    await server.stop({timeout:10000}); 
    db.end();
    console.log('Server stoped');
    process.exit(0);
});
 
start();