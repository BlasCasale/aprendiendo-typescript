// inferencia de funciones anonimas segun el contexto
// const avengers = ['Spidey', 'Hulk', 'Avengers']

// pasa con todas las funciones de array
// avengers.forEach((avenger) => console.log(avenger.toUpperCase()))

// objetos

// const hero: Hero = {
//     name: 'Thor',
//     age: 1500
// }

// hero.power = 100 => esto no se puede porque no esta creado en el hero

function createHero(input: HeroBasicInfo): Hero {
    const { name, age } = input
    return {
        id: crypto.randomUUID(),
        name,
        age,
        isActive: true
    }
}

const thor = createHero({ name: 'Thor', age: 1500 })

// Type alias

type HeroBasicInfo = {
    name: string
    age: number
}

type HeroProperties = {
    readonly id?: HeroId
    isActive?: boolean
    powerScale?: HeroPowerScale
}

type AdressHero = {
    adress: {
        planet: string
        city: string
    }
}

// template union types

type HeroId = `${string}-${string}-${string}-${string}-${string}`

// type HexadecimalColor = `#${string}`
// const color: HexadecimalColor = '0033ff'
// const color2: HexadecimalColor = '#fafafa'

// union types

type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal'

// intersection type

type Hero = HeroBasicInfo & HeroProperties

// type indexing

// accedemos a las propiedades y la creamos
// const adressHero: HeroProperties['adress'] = {
//     city: 'Madrid',
//     planet: 'Earth'
// }

// type from value

// const adress = {
//     planet: 'Earth',
//     city: 'Madrid'
// }

// type Adress = typeof adress

// const adressTwitch: Adress = {
//     planet: 'Mars',
//     city: 'Twitch'
// }


// type from function return

// const createAdress = () => {
//     return {
//         planet: 'Tierra',
//         city: ''
//     }
// }

// type Adress = ReturnType<typeof createAdress>
