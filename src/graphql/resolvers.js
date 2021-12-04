import { args } from "commander";
import Proyecto from "../models/Proyecto";
import Usuario from "../models/Usuario";

export const resolvers = {
    Query: {
        Usuarios() {
            return Usuario.find();
        },
        unUsuario(parents, args) {
            return Usuario.findById(args.id)
        },
        Proyectos() {
            return Proyecto.find();
        },
        unProyecto(parents, args) {
            return Proyecto.findById(args.id)
        }
    },

    Mutation: {
        async AgregarUsuario(_, { usuario }) {
            const nUsuario = new Usuario({
                email: usuario.email,
                identificacion: usuario.identificacion,
                nombreCompleto: usuario.nombreCompleto,
                password: usuario.password,
                rol: usuario.rol,
            });
            return await nUsuario.save();
        },
        async ActualizarEstadoUsuario(_, { id, input }) {
            return await Usuario.findByIdAndUpdate(id, input, { new: true });
        },
        async ActualizarDatosUsuario(_, { id, input }) {
            return await Usuario.findByIdAndUpdate(id, input, { new: true });
        },

        async AgregarProyecto(_, { proyecto }) {
            const nProyecto = new Proyecto({
                nombreProyecto: proyecto.nombreProyecto,
                objetivosGenerales: proyecto.objetivosGenerales,
                objetivosEspecificos: proyecto.objetivosEspecificos,
                presupuesto: proyecto.presupuesto,
                fechaInicio: proyecto.fechaInicio,
                fechaTerminacion: proyecto.fechaTerminacion,
                lider: proyecto.lider,
                estadoProyecto: proyecto.estadoProyecto,
                faseProyecto: proyecto.faseProyecto
            });
            return await nProyecto.save();
        }
    }
}