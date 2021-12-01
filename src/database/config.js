import mongoose from "mongoose";

export const dbConnection = async () =>{
    try {
        await mongoose.connect("mongodb+srv://soluweb-ciclo4:soluweb@cluster0.nsvwq.mongodb.net/gestorProyectos?retryWrites=true&w=majority");
        console.log("base conectada")
        
    } catch (error) {
        console.log(error)
        
    }
}
 

