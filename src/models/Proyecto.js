const { Schema, model } = require("mongoose");
const Usuario = require("./Usuario");

const ProyectoSchema = Schema({
    "nombreProyecto" : { type: String, required: true },
    "objetivosGenerales" : [String],
    "objetivosEspecificos" : [String],
    "presupuesto": { type: Number, required: false, default: 0 },
    "fechaInicio" : { type: Date, require: true},    
    "fechaTerminacion" : { type: Date, require: true },
    "lider" : { type: String, require: true },
    //"idLider" : { type: String, require: true },
    //"documentoLider" : { type: String, require: true },
    //"nombreLider" : { type: String, require: true },
    "estadoProyecto" : { type: String, require: true },
    "faseProyecto": { type: String, require: true },
})
module.exports = model("Proyecto", ProyectoSchema);
