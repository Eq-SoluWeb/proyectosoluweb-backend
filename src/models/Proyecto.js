const { Schema, model } = require("mongoose");
const UsuarioSchema = Schema({
    nombreProyecto : { type: String, required: true },
    objetivosGenerales : [],
    objetivosEspecificos : [],
    presupuesto : { type: Int, required: true },
    fechaInicio : { type: Date, require: true},
    fechaTerminacion : { type: Date, require: true },
    _idLider : { type: String, require: true },
    documentoLider : { type: Number, require: true },
    nombreLider : { type: String, require: true },
    estadoProyecto : { type: String, require: true },
    faseProyecto: { type: String, require: true },

})
module.exports = model("Proyecto", ProyectoSchema);
