// function saludar(name: string) {
//     console.log(`Hola ${name}`)
// }

// ✔ saludar('Pepe')
// ❌ saludar(2)

// function saludar({ name, age }: { name: string, age: number }) {
//     console.log(`Hola ${name}, tienes ${age} años`)
// }

// function saludar(persona: { name: string, age: number }) {
//     const { name, age } = persona
//     console.log(`Hola ${name}, tienes ${age} años`)
// }

// saludar({ name: 'Blas', age: 26 })

// function saludar({ name, age }: { name: string, age: number }): number {
//     console.log(`Hola ${name}, tienes ${age} años`)
//     return age
// }

// const sayHiFromFunc = (fn: (name: string) => void) => {
//     return fn('Miguel')
// }

// const sayHi = (name: string) => {
//     console.log(`Hola ${name}`)
// }

// sayHiFromFunc(sayHi)


// tipar las arrow function
// const sumar = (a: number, b: number): number => {
//     return a + b
// }

// const restar: (a: number, b: number) => number = (a, b) => {
//     return a - b
// }

// son funciones que sabemos que nunca retornan nada
// function throwError(message: string): never {
//     throw new Error(message)
// }

// function logMessage(message: string): void {
//     console.log(message)
// }
