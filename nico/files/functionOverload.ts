// function overloads

// los overload son las maneras de llamar a la funcion
// con esto podemos hacer un control mejor de dependiendo como se llame la funcion con sus argumentos es lo que voy a retornar

function suma(a: number, b: string): string;
function suma(a: string, b: string): string;
function suma(a: string, b: number): string;
function suma(a: number, b: number): number {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else {
        return a.toString() + b.toString();
    }
}

const value2 = suma(2, '3');
const value3 = suma('2', '3');
const value4 = suma('3', 2);
const value = suma(2, 3);