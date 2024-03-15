interface Heroe {
    id: string
    name: string
    age: number
    saludar: () => void
}

const hero: Heroe = {
    id: 'spidey',
    name: 'Spiderman',
    age: 30,
    saludar: () => {
        console.log(hero.name)
    }
}


// las interfaces se pueden escribir dos veces
// y se extiende automaticamente
interface Producto {
    id: number
    name: string
    precio: number
    cantidad: number
}

interface Zapatilla extends Producto {
    taller: number
}

interface CarritoOps {
    add: (id: number) => void
    remove: (id: number) => void
    clear: () => void
}

// interface CarritoOps {
//     add(id: number): void
//     remove(id: number): void
//     clear(): void
// }

interface CarritoDeCompras {
    totalPrice: number
    productos: (Producto | Zapatilla)[]
}

const carrito: CarritoDeCompras = {
    totalPrice: 100,
    productos: [
        {
            id: 1,
            name: 'Leche',
            precio: 100,
            cantidad: 1
        }
    ]
}