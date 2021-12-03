import { args } from "commander";
import Usuario from "../models/Usuario";

export const resolvers = {
    Query: {
        Usuarios() {
            return Usuario.find();
        },

    },

    Mutation: {
        async AgregarUsuario(_,{usuario}){
            console.log(usuario)
            const nUsuario = new Usuario({
                nombreCompleto: usuario.nombreCompleto,
                email: usuario.email,
                password: usuario.password,
                rol: usuario.rol,
            });
            return await nUsuario.save();
        }     
    }
}