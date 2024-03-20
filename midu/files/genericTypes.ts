// function getArray(items: any[]): any[] {
//   return new Array().concat(items)
// }

function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items)
}

const numberArray = getArray([1, 2, 3, 4])
const stringArray = getArray(['hola', 'mundo'])
const mixedArray = getArray<number | string>([1, 'hola'])
// const mixedArray = getArray([1, "hola"])

// numberArray.push('midu') // no pasa porque es para number
// stringArray.push(4) // no pasa porque es para string

// function identity<T, U>(value: T, message: U): T {
//   console.log(message)
//   return value
// }


type ValidTypes = string | number

// function identity<T extends ValidTypes, U>(value: T, message: U): T {
//   let result: T = value + value // sigue dando error
//   console.log(message)
//   return value
// }


// function identity<T extends ValidTypes, U>(value: T, message: U): T {
//   let result: ValidTypes = ""

//   if (typeof value === 'number') {
//     result = value + value
//   } else if (typeof value === 'string') {
//     result = value + value
//   }

//   console.log(message)
//   return value
// }

// const blas = identity('Blas Casale', 'Hola Blas Casale')
// const numbers = identity(1, 2)

// interface Identity<T, U> {
//   value: T
//   message: U
// }

// const object: Identity<number, string> = {
//   value: 1,
//   message: 'Hola blas'
// }

// interface ProcessIdentity<T, U> {
//   (value: T, message: U): T
// }

// const process: ProcessIdentity<number, string> = (value, message) => {
//   console.log(message)
//   return value
// }

// const processor = (value: number, message: string): number => {
//   console.log(message)
//   return value
// }

// const processWithInterface: ProcessIdentity<number,string> = processor

// interface ProcessIdentity<T, U> {
//   value: T
//   message: U
//   process(): T
// }

// class processIdentity<X, Y> implements ProcessIdentity<X, Y> {
//   value: X
//   message: Y;

//   constructor(value: X, message: Y) {
//     this.value = value
//     this.message = message
//   }

//   process(): X {
//     return this.value
//   }
// }

// const one = new processIdentity<string, string>('Blas', 'Twitch')
// const two = new processIdentity(1, 2)

// one.process()

class ProcessIdentity<X, Y> {
  value: X
  message: Y;

  constructor(value: X, message: Y) {
    this.value = value
    this.message = message
  }

  process(): X {
    return this.value
  }
}