import Hapi from '@hapi/hapi';
import routes from './routes';

const start = async() => {
    const server = Hapi.server({
        port:8000,
        host:'localhost',

    });

    routes.forEach(element=>{
        server.route(element);
    });

    await server.start();
    console.log(`server is listening on ${server.info.uri})`);

}

process.on('unhandledRejection',err =>{
    console.log(err);
    process.exit(1);
})
 
start();