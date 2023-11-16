const { Clientes }= require("./Models/clientes.model");
const { Mensualidades }= require("./Models/mensualidades.model");

Clientes.hasMany(Mensualidades);
Mensualidades.belongsTo(Clientes);