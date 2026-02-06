import * as z from "zod"
const ReservaEsquema = z.object(
    {
        lugar: z.string(),
        solicitante: z.string(),
        fecha_ini: z.iso.date(),
        fecha_fin: z.iso.date(),
        hora_ini: z.string(),
        hora_fin: z.string(),
    }
)

let reservas = [
    {
        id: 1,
        lugar: "Rakiura",
        nombre: "Enrique Godoy",
        fechaInicio: "2026-02-06",
        fechaFin: "2026-02-08",
        horaInicio: "11:00",
        horaFin: "08:00",
    }
]

export const mostrarTodo = function (peticion, respuesta) {
    respuesta.send(reservas)
}

export function reservar(peticion, respuesta) {
    const {
        lugar,
        solicitante,
        fecha_ini,
        fecha_fin,
        hora_ini,
        hora_fin
    } = peticion.body

    const datosComprobar = {
        lugar,
        solicitante,
        fecha_ini,
        fecha_fin,
        hora_ini,
        hora_fin
    }

    const datos = {
        lugar: lugar,
        nombre: solicitante,
        fechaInicio: fecha_ini,
        fechaFin: fecha_fin,
        horaInicio: hora_ini,
        horaFin: hora_fin
    }

    try {
        ReservaEsquema.parse(datosComprobar)

        reservas.push({
            id: reservas.length + 1,
            ...datos
        })

        respuesta.status(201).json(
            {
                "mensaje": "Reserva creada",
                "datos": {
                    solicitante: solicitante,
                    lugar,
                    id: reservas.length
                }
            }
        )
    } catch (error) {
            const detalles = JSON.parse(error.message)

            const detallesUsar = detalles.map(err => ({
                campo: err.path.join('.'),
                mensaje: err.message
            }))


            respuesta.status(400).json(
                {
                    "mensaje": "Petición incompleta",
                    "datos": {
                        error: detallesUsar
                    }
                }
            )
    }


}

export const detalleReserva = (peticion, respuesta) => {
    const { id } = peticion.params
    respuesta.send(
        ...reservas.filter((reserva) => id == reserva.id)
    )
}
export const quitarReserva = (peticion, respuesta) => {
    const { id } = peticion.params
    const posicion = reservas.findIndex((reserva) => id == reserva.id)
    reservas.splice(posicion, 1)
    respuesta.send(
        {
            mensaje: `Reserva #${id} eliminada`
        }
    )
}

export const actualizarReserva = (peticion, respuesta) => {
    const { id } = peticion.params
    const posicion = reservas.findIndex((reserva) => id == reserva.id)


    const {
        lugar,
        solicitante,
        fecha_ini,
        fecha_fin,
        hora_ini,
        hora_fin
    } = peticion.body


    reservas.splice(posicion, 1, {
        id,
        lugar,
        nombre: solicitante,
        fechaFin: fecha_fin,
        fechaInicio: fecha_ini,
        horaFin: hora_fin,
        horaInicio: hora_ini
    })
    respuesta.send(
        {
            mensaje: `Reserva #${id} modificada`
        }
    )
}