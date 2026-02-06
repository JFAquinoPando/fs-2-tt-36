import rapido from "express";
import permitirIntercambioDeRecursos from "cors";
import { ReservaRuta } from "./rutas/ReservaRoutes.js";
export const app = rapido()

app.use(permitirIntercambioDeRecursos())
app.use(rapido.urlencoded({extended: true}))


app.get("/", (peticion, respuesta) => {
    respuesta.send("Hola, de momento 😀")
})

app.use("/reservas", ReservaRuta)

