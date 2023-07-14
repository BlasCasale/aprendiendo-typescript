// let nombre = "blas"
// let nombre: string = "blas" -> hay que tratar de evitar decirle a TS lo que es (tipo de dato), el puede identificar con la inferencia de datos -> cuando no sabe lo que es se vuelve "any" y lo que pasa cuando se declara "any" es que no sabe que propiedades devolverte de la variable que le pusiste porque no sabe que tipo de dato es (se ignora el tipado de TS) y si se pone unknow no te deja usar las props de la variable porque no sabe que es
// nombre = 3 uno no puede redeclarar el tipo de dato que entra, si es string, queda asi siempre

// la inferencia de datos tiene la capacidad de darte las propiedades que tiene

// ejemplos de inferencia

// const a = 1
// const b = 2
// const c = a + b  numero

// let cadenaDeTexto = "hola"

// cadenaDeTexto.toUpperCase()

// cadenaDeTexto = 2  no se puede cambiar el tipo

// const persona = {
//     name: "blas",
//     age: 25,
// }

// estan los mismos tipos de datos que en JS null, undefined, number, string, boolean


// funciones y sus problemas con la inferencia en las funciones

// function saludar (name) {
//     console.log(`Hola ${name}`)
// }  esto esta mal porque el param no esta tipificado el dato

// en este caso que quiero hacer determinada accion, tengo que declarar el tipo de dato que va a entrar, como por ejemplo un string
// function saludar (name: string) {
//     console.log(`Hola ${name}`)
// }

// saludar("Pepe") esta funcion si cumple sin problemas
// saludar(2) esta funcion no anda

// esto funciona porque TS no se ejecuta, sino que se compila y cuando el navegador ejecuta todo desde JS, comprende como JS lo que se le esta pasando, pero en TS termina siendo un error no declarar y encima pasar mas las params a la funcion 

// function saludar({ name, age }) {
//     console.log(`Hola ${name}, tienes ${age} años`)
// }

// saludar({ name: 2, age: "Pepe" })


// esto se hace asi

// 1era forma
// function saludar({ name, age }: {name: string, age: number}) {
//     console.log(`Hola ${name}, tienes ${age} años`)
// }

// saludar({ name: "Pepe", age: 20})

// 2da forma

// const persona = {
//     name: "blas",
//     age: 25,
// }

// function saludar(persona: { name: string, age: number }) {
//     const { name, age } = persona
//     console.log(`Hola ${name}, tienes ${age} años`)
// }


// TS tiene inferencia del tipo que retorna
// function saludar({ name, age }: {name: string, age: number}): number /* aca ponemos que queremos que devuelven */ {
//     console.log(`Hola ${name}, tienes ${age} años`)

//     return age // esto nos va a decir que tipo de dato retorna, las funciones sin return, automaticamente retornar undefined
// }


// funciones que invocan funciones como parametro

// const sayHiFromFunction = (func: (name: string) => void) => {
//     // esta funcion recibe una funcion como parametro
//     // para tipar funciones tengo que poner que entra por la funcion y que me devuelve, por ejemplo las que tienen void no nos importa que retornen, no nos interesa que devuelva un objeto, valor, etc (ej sumar dos num)
//     func("Miguel")
// }

// const sayHi = (name: string) => {
//     console.log(`Hola ${name}`)
// }

// sayHiFromFunction(sayHi)

// tipar arrowFunction

// const sumar = (a: number, b: number): number => {
//     return a + b
// }

// const restar : (a: number, b: number) => number = (a, b) => {
//     return a - b
// }

// never
// estas funciones sabemos que no devuelven nada, nunca devuelve un valor o mejor dicho no tienen return
// function throwError (message: string): never {
//     throw new Error(message)
// }

// las funciones no tienen inferencia

// function logMessage (message: string) : void {
//     console.log(message)
// }

// const avengers = ["Spider-Man", "Hulk", "Iron-Man"]

// esto funciona automatico por la inferencia de TS, detecta automaticamente lo que tiene dentro el array, pasa con todos las funciones de array

// avengers.forEach(avenger => {
//     console.log(avenger.toUpperCase())
// })

// type alias

// los type son en PascalCase
// optional properties el ? antes de los : te permite poner una propiedad pero de manera opcional, o sea que puede estar como no
// esto ejecutado en JS es codigo mutable, por la compilacion y ejecucion
type HeroId = `${string}-${string}-${string}-${string}-${string}`

type HeroPowerScale = "local" | "planetray" | "galactic" | "universal" |"multiversal"

type HeroBasicInfo = {
    name: string,
    age: number,
}

type HeroProperties = {
    readonly id?: HeroId,
    isActive?: boolean,
    powerScale?: HeroPowerScale
}

// esto es una union de types, por el &
type Hero = HeroBasicInfo & HeroProperties

// | <-- esto es un tipo de union, es como el || , puede ser cualquiera de estos, mas ejemplos

// let annn: number | string // es una union de tipos en este caso
let annn: string | 3

annn = "Hola"
annn = 3

const hero: Hero = {
    name: "Thor",
    age: 1500
}

// cuando hago funciones y pretendo usar el type, tengo que estar atento a que si creo algo como aca lo hace midu, tengo que respetar los atributos del type
// const createHero = (name: string, age: number) : Hero => {
//     return { name, age }
// }

// el crypto.randomUUID() es nativo de la plataforma web
// esta segunda esta mejor hecha que la primera 
const createHero = (input: HeroBasicInfo): Hero => {
    const { name, age } = input
    return {
        id: crypto.randomUUID(),
        name,
        age,
        isActive: true,
    }
}

// para evitar mutar esto en JS, tengo que poner esto que Object.freeze y el objeto ya no puede cambiar mas

// const newThor = Object.freeze(createHero({ name: "Thor", age: 1500 })) // aca se haria true porque lo estoy creando con la funcion

const newThor = createHero({name: "Thor", age: 1600})

newThor.id?.toString() // poniendo el ? puedo evitar que se corran algunas cosas sin necesidad de poner un condicional, si existe lo que estoy buscando, se va a ejecutar el metodo que puse o lo que sea

newThor.powerScale = "universal"

// template union type (asi se puede validar algunas cosas)

// type HexadecimalColor = `#${string}`

// const color: HexadecimalColor = "0033ff" // hexadecimal, este no
// const color2: HexadecimalColor = "#0033ff" // hexadecimal, este si


