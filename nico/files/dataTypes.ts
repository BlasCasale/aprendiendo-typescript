let nombre: string = 'blas';

let otroNombre = 'agostina'; // esto va a ser any como tipado

let edad: number;

edad = 30;

let num: number = 2.9;

let verdadero: boolean = false;

verdadero = true;

// verdadero = 2 <== esto no se puede, no se puede cambiar el tipo de datos que se le asigno

let ejemploNull: null = null; // solo puede ser null
let ejemploNum: number = null; // esto se puede hacer pero cambiando el strictNullChecks a false

let ejemploUndefined: undefined = undefined; // solo puede ser undefined
let ejemploNom: string = undefined; // esto se puede hacer pero cambiando el strictNullChecks a false

enum Fases {
    Primero, // 0
    Segundo, // 1
    Tercero  // 2
};

Fases.Primero; // esto vale 0

enum UserActions {
    fetchUser = 'FETCH_USER',
    postUser = 'POST_USER',
};

UserActions.fetchUser; // esto puede servir para comparar en el reducer de redux los strings

// como compilar?
// tsc --> npm i -g typescript
// npx tsc nombreArchivo.ts
// para hacerlo bien hay que hacer tsc --init ---> creamos un archivo de configuracion

console.log(UserActions.fetchUser);

// any
let changingType: any = 'Blas';
changingType = 26;
changingType = true;

// unknown
let idk: unknown = 'Blas';
idk = 30;
idk = false;


let anyValue: any = 'Agostina'; // te deshabilita todos los chequeos de typescript
let unkValue: unknown = 'Agostina';

let str1: string = anyValue; // se puede hacer
// let str2: string = unkValue; // Type 'unknown' is not assignable to type 'string'

let str3: string = unkValue as string; // explicit cast

// anyValue.method() // todo bien. Falla en el tiempo de ejecucion si el metodo no existe
// unkValue.method() // no se permite, no se puede llamar metodos con unknown
// unknow te tira error, cuando existe la posibilidad de error en tiempo de ejecucion
