function mostrarLongitud(objeto: number | string) {
    if (typeof objeto === 'string') return objeto.length
    else return objeto.toString().length
}

// interface Mario {
//     company: 'nintendo', // obligas a que siempre sea esto
//     name: string,
//     saltar: () => void
// }

// interface Sonic {
//     company: 'sega',
//     name: string,
//     correr: () => void
// }

// type Personaje = Mario | Sonic

// function jugar(personaje: Personaje) {
//     if (personaje.company === 'nintendo') return personaje.saltar()
//     else personaje.correr()
// }

interface Mario {
    name: string,
    saltar: () => void
}

interface Sonic {
    name: string,
    correr: () => void
}

type Personaje = Mario | Sonic

// type guard

// dejame comprobar si personaje es sonic
// y esta function determina si es sonic o no
// el personaje is Sonic te determina si es sonic o no, con un boolean
function checkSonic(personaje: Personaje): personaje is Sonic {
    // se una asersion para determinar que es Sonic y si se puede
    // acceder a correr != undefined
    return (personaje as Sonic).correr !== undefined
}

// hay que evitar los type guard, hay que hacer muchas comprobaciones
function jugar(personaje: Personaje) {
    if (checkSonic(personaje)) personaje.correr()
    else personaje.saltar()
}

// never
function fn(x: string | number) {
    if (typeof x === 'string') console.log(x.toUpperCase())
    else if (typeof x === 'number') console.log(x.toFixed(2))
    else x
}
