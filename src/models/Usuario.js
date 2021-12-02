const { Schema, model } = require("mongoose");
const UsuarioSchema = Schema({
    _idUsuario : { type: String, required: true },
    email : { type: String, required: true },
    identificacion : { type: Number, require: true },
    nombreCompleto : { type: String, required: true },
    password : { type: String, required: true },
    estado : { type: String, required: true },
    rol : { type: String, required: true },
})
module.exports = model("Usuario", UsuarioSchema);