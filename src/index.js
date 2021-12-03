import express from "express";
import { graphqlHTTP } from "express-graphql";
import { dbConnection } from "./database/config";
import schema from "./graphql/schema"


const app = express();
dbConnection();
app.use("/graphql", graphqlHTTP({
    graphiql: true,
    schema: schema
}));

app.listen(process.env.PORT || 4000, () => {
    console.log("Servidor conectado en el puerto 4000");
})