// array y tuplas

// Tuplas es una estructura de datos de TS, a diferencia del array, las tuplas no son de largo variable y en cada posicion tienen un tipo de dato en particular

// ejemplos: en la bdd donde se guardan los datos en la filas, son tuplas, porque permiten que entre un determinado dato
// useState en react => [estado, la funcion]

const tuple: [string, number] = ['Blas', 26];

const arrayNumber: number[] = [1, 2, 3, 4];
// arrayNumber.push('Blas'); // error porque no se le puede enviar otro tipo de dato que no sea un number

const arrayString: string[] = ['Blas', 'Agostina'];

const blas = arrayString.shift(); // al hacer esto, le podemos asignar el valor de una funcion a una variable para guardar el dato

blas.toUpperCase();

console.log(blas);

const newArray: Array<number> = [2, 3, 4, 5];