const { Schema, model } = require("mongoose");
const InscripcionSchema = Schema({
    "idProyecto" : { type: String, required: true },
    "idUsuario" : { type: String, required: true },
    "estadoInscripcion" : { type: String, required: true },
    "fechaIngreso" : { type: Date, require: true},
    "fechaEgreso" : { type: Date, require: true },
})
module.exports = model("Inscripcion", InscripcionSchema);
