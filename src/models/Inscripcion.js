const { Schema, model } = require("mongoose");
const InscripcionSchema = Schema({
    _idInscripcion : { type: String, required: true },
    _idProyecto : { type: String, required: true },
    _idUsuario : { type: String, required: true },
    estadoInscripcion : { type: String, required: true },
    fechaIngreso : { type: Date, require: true},
    fechaEgreso : { type: Date, require: true },
})
module.exports = model("Inscripcion", InscripcionSchema);
