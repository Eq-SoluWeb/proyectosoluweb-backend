const { Schema, model } = require("mongoose");
const AvenceSchema = Schema({
    _idAvance: { type: String, required: true },
    _idProyecto: { type: String, required: true },
    fechaAvance: { type: Date, required: true },
    descripcionAvance: { type: String, required: true },
    observacionAvance: { type: String, require: true },
})
module.exports = model("Avance", AvanceSchema);