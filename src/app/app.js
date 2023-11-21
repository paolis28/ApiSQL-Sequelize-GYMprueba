import express from 'express';
import ClientesRoutes from '../Routes/clientes.routes.js';
import MensualidadesRoutes from '../Routes/mensualidades.routes.js';
import AdministradoresRotes from '../Routes/administradores.routes.js';
import cors from 'cors';

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

app.use("/gimnasio/clientes", ClientesRoutes)
app.use("/gimnasio/mensualidades", MensualidadesRoutes)
app.use("/gimnasio/administradores", AdministradoresRotes)

export default app;