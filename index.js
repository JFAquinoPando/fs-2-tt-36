import 'dotenv/config';
import { app } from "./app.js";

const { PUERTO } = process.env

console.log(PUERTO);

app.listen(PUERTO, () => {
    console.log(`Hola estamos escuchando la app desde el puerto ${PUERTO}: http://localhost:${PUERTO}`);
})