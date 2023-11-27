import app from './app/app.js';
import {sequelize} from './Connection/conexion.js';

async function main(){
    try{
        await sequelize.sync()
        app.listen(9000)
        console.log("Server is listen on port", 9000)
    }catch(error){
        console.log("Fallo la conexion a la base de datos", error)
    }
}

main();