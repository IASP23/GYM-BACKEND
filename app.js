import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import usersRouters from './router/usersRoutes.js';
import testRouters from './router/testRoutes.js';
import rutinesRoutes from './router/rutinesRoutes.js';
import cors from "cors";

dotenv.config()


const app = express();
app.use(cors())
const port = process.env.PORT || 3525;
const DB = process.env.DB || GYM2

/* Conexion  */

main().catch(err => console.log(err));
async function main() {
	try {
		await mongoose.connect(`mongodb://127.0.0.1:27017/${DB}`);
		console.log("Database connected : ", DB)
	} catch (error) {
		console.log("Error: ", error)
	}
}



app.use(bodyParser.json()) //Se prepara el servidor para recibir la data 
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
	console.log(`Server running in http://localhost:${port}`);
});

app.use(usersRouters);
app.use(testRouters);
app.use(rutinesRoutes);