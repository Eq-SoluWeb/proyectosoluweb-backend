import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";

const typeDefs = `
    type Query {
        Usuarios : [Usuario],
        unUsuario(id:ID):Usuario,
        Proyectos : [Proyecto],
        unProyecto(id:ID):Proyecto,
    }

    type Mutation {
        AgregarUsuario(usuario : UsuarioInput): Usuario
        ActualizarEstadoUsuario(id : ID!, input : UsuarioInputEstado): Usuario
        ActualizarDatosUsuario(id : ID!, input : UsuarioInputDatos): Usuario
        AgregarProyecto(proyecto : ProyectoInput): Proyecto
    }

    type Usuario {
        id: ID,
        email: String,
        identificacion: String,
        nombreCompleto: String,
        password: String,
        estado: String,
        rol: String,
    }

    type UnUsuario {
        id: ID,
        email: String,
        identificacion: String,
        nombreCompleto: String,
        password: String,
        estado: String,
        rol: String,
    }

    input UsuarioInput {
        id: String,
        email: String,
        identificacion: String,
        nombreCompleto: String,
        estado: String,
        password: String,
        rol: String,
    } 

    input UsuarioInputEstado {
        estado: String,
    }

    input UsuarioInputDatos {
        email: String,
        identificacion: String,
        nombreCompleto: String,
    }

    type Proyecto {
        id: ID,
        nombreProyecto : String,
        objetivosGenerales : [String],
        objetivosEspecificos : [String],
        presupuesto : Int,
        fechaInicio : String,
        fechaTerminacion : String,
        lider : String,
        estadoProyecto : String,
        faseProyecto: String,
    }

    type unProyecto {
        id: ID,
        nombreProyecto : String,
        objetivosGenerales : [String],
        objetivosEspecificos : [String],
        presupuesto : Int,
        fechaInicio : String,
        fechaTerminacion : String,
        lider : String,
        estadoProyecto : String,
        faseProyecto: String,
    }

    input ProyectoInput {
        id: ID,
        nombreProyecto : String,
        objetivosGenerales : [String],
        objetivosEspecificos : [String],
        presupuesto : Int,
        fechaInicio : String,
        fechaTerminacion : String,
        lider : String,
        estadoProyecto : String,
        faseProyecto: String,
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})