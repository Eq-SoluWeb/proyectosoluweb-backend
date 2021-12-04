import { args } from "commander";
import Usuario from "../models/Usuario";

export const resolvers = {
    Query: {
        Usuarios() {
            return Usuario.find();
        },
        unUsuario(parents, args) {
            return Usuario.findById(args.id)
        },
    },

    Mutation: {
        async AgregarUsuario(_,{usuario}){
            const nUsuario = new Usuario({
                email: usuario.email,
                identificacion: usuario.identificacion,
                nombreCompleto: usuario.nombreCompleto,
                password: usuario.password,
                rol: usuario.rol,
            });
            return await nUsuario.save();
        },
        async ActualizarEstadoUsuario(_, args) {
            Usuario = Usuario.findByIdAndUpdate(
                {"_id": args.id},
                {"$set":{estado:"ACTIVO"}}
                );
            return await Usuario();
        }
    }
}