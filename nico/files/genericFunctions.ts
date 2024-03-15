// generic functions

const numbers = [1, 2, 3, 4];
const strings = ['a', 'b', 'c'];

// const firstElement = (arr: any[]) => {
//     return arr[0];
// };

// aca se pierde el tipado y queda como tipado any
// const first = firstElement(numbers);
// const two = firstElement(strings);

// el Type es por tipado inferido del valor que retorne
// function firstElement<Type>(arr: Type[]): Type {
//     return arr[0];
// }

const firstElement = <Type>(arr: Type[]): Type => {
    return arr[0];
};

// ahora si conservamos el tipado de la funcion
// por tipado explicito
const first = firstElement(numbers); // implicito
const two = firstElement<string>(strings); // explicito


// pluck function => recibe un array de objetos y te devuelve un array de objetos con una determinada propiedad

// con el extends le decimos que lo que se le va a pasar como argumento va a ser un objeto o array para evitar futuros problemas
const merge = <V extends object, U extends object>(obj1: V, obj2: U) => {
    return {
        ...obj1,
        ...obj2
    };

    // las actions en redux son generic functions
    // axios.post o get tambien son funciones genericas
    // porque el get nos da un response
    // res.data => informacion de data es T
    // axios.get<Persona> => res.data => va a estar persona y nos va a dar el tipado

    // useState de react tambien utiliza generic functions => cuando no se le pone estado inicial, hay que hacer como aca
    // firstElement<string>(strings)
};

merge({ name: "Blas" }, { age: 26 });