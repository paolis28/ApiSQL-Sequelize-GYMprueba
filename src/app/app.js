import express from 'express';
import ClientesRoutes from '../Routes/clientes.routes.js';
import MensualidadesRoutes from '../Routes/mensualidades.routes.js';
import Historial from '../Routes/historial.routes.js';
const app = express();

//middlewares
app.use(express.json());

app.use(ClientesRoutes)
app.use(MensualidadesRoutes)
app.use(Historial)

export default app;