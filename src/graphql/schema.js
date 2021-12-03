import { makeExecutableSchema } from "@graphql-tools/schema";
import { resolvers } from "./resolvers";

const typeDefs = `
    type Query {
        Usuarios : [Usuario]
        Login(email : String!, password : String!): String
    }

    type Mutation {
        AgregarUsuario(usuario : UsuarioInput): Usuario
    }

    type Usuario {
        id: ID,
        nombreCompleto: String,
        email: String,
        password: String,
        estado: String,
        rol: String,
    }

    input UsuarioInput {
        nombreCompleto: String,
        email: String,
        password: String,
        rol: String,
    }

    type Curso {
        id: ID,
        nombre: String,
        lenguajes: [Lenguaje],
        fecha: String,
    } 

    type Lenguaje {
        lenguaje: String
    }

    input CursoInput {
        nombre: String,
        lenguajes: [LenguajeInput],
        fecha: String,
    }

    input LenguajeInput {
        lenguaje: String
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})