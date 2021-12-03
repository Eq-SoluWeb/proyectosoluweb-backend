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
        _idUsuario: ID,
        nombreCompleto: String,
        email: String,
        password: String,
        estado: String,
        rol: String,
    }

    input UsuarioInput {
        _idUsuario: ID,
        nombreCompleto: String,
        email: String,
        password: String,
        rol: String,
    }    
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})