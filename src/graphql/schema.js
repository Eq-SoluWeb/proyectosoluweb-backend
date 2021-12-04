import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";

const typeDefs = `
    type Query {
        Usuarios : [Usuario],
        unUsuario(id:ID):Usuario
    }

    type Mutation {
        AgregarUsuario(usuario : UsuarioInput): Usuario
        ActualizarEstadoUsuario(id : String): Usuario
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
        email: String,
        identificacion: String,
        nombreCompleto: String,
        password: String,
        rol: String,
    }   
    
    input UnUsuarioInput {
        email: String,
        identificacion: String,
        nombreCompleto: String,
        password: String,
        rol: String,
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})