import express from 'express';
import ClientesRoutes from '../Routes/clientes.routes.js';
import MensualidadesRoutes from '../Routes/mensualidades.routes.js';
import Historial from '../Routes/historial.routes.js';
import cors from 'cors';

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

app.use("/gimnasio/clientes", ClientesRoutes)
app.use("/gimnasio/mensualidades", MensualidadesRoutes)
app.use(Historial)

export default app;