// objetos

// se puede declarar asi pero podemos hacer interfaces para poder definir las key y value de un objeto
const firstObject = {
    name: 'Blas',
    lastName: 'Casale',
    age: 26
};

interface People {
    name: string;
    lastName: string;
    age: number;
    hobbies: Hobbie[];
};


// el extends permite no repetir codigo
interface Student extends People {
    isActive?: boolean;  // con el ? podemos hacer opcional este campo
    hello: (param: string) => void;
};


interface Hobbie {
    name: string
};

const object: People = {
    name: 'Blas',
    lastName: 'Casale',
    age: 26,
    hobbies: []
};

const norberto: Student = {
    name: 'Norberto',
    lastName: 'Perez',
    age: 70,
    isActive: false,
    hello: (param: string) => (console.log(param)),
    hobbies: [{ name: 'Jugar a la play' }]
};