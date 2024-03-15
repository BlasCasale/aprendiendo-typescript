// funciones

function add(a: number, b: number, c?: number): number /* aca va el tipado de lo que retorna */ {
    return a + b * c;
};

function concat(a: number | string, b: number | string): number | string | void {
    if (typeof a === 'number' && typeof b === 'number') return a + b;
    if (typeof a === 'string' && typeof b === 'string') return a + b;
};

function onlyAdd(a: string | number, b: string | number): number {
    if (typeof a === 'string') a = parseInt(a);
    if (typeof b === 'string') b = parseInt(b);
    return a + b;
};

function consologed(): void {
    console.log('Hola pa');
    // cuando se setea estado en react, se usa void
};

function throwError(msg: string): never {
    // el never su utiliza cuando vamos a tirar un error, porque se corta la ejecución de la funcion y no retorna nada
    throw new Error(msg);
};

// tampoco se le puede comenzar a pasar mas parametros a las funciones
const result = add(2, 3); // en la variable se almacena el tipado de lo que retorna la funcion
const result2 = add(2, 3, 5);