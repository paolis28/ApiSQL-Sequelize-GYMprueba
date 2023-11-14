import app from './app/app.js';
import {sequelize} from './Connection/conexion.js';

async function main(){
    try{
        await sequelize.sync({force:false})
        app.listen(3001)
        console.log("Server is listen on port", 3001)
    }catch(error){
        consolo.log("Fallo la conexion a la base de datos", error)
    }
}

main();