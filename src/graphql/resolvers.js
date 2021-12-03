import Usuario from "../models/Usuario";
import bcryp from "bcrypt";
import { generarJwt } from "../helpers/jwt";

export const resolvers = {
    Query: {
        Usuarios() {
            return Usuario.find();
        },

        /*async Login(_, { email, password }) {

            const usuario = await Usuario.findOne({
                email
            })
            if (!usuario) {
                return "Usuario o contraseña incorrecto";
            }

            const validarPassword = bcryp.compareSync(password, usuario.password)
            if (validarPassword) {
                const token = await generarJwt(usuario.id, usuario.nombre)
                return token;
            }
            else {
                return "Usuario o contraseña incorrecto";
            }*/
        }
    },
    Mutation: {
        async AgregarUsuario(_, { usuario }) {
            console.log(usuario);
            let nUsuario = new Usuario(usuario);
            nUsuario.password = usuario.password;
            return await nUsuario.save();
        }
    }
}