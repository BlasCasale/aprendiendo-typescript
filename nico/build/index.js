"use strict";
let nombre = 'blas';
let otroNombre = 'agostina'; // esto va a ser any como tipado
let edad;
edad = 30;
let num = 2.9;
let verdadero = false;
verdadero = true;
// verdadero = 2 <== esto no se puede, no se puede cambiar el tipo de datos que se le asigno
let ejemploNull = null; // solo puede ser null
let ejemploNum = null; // esto se puede hacer pero cambiando el strictNullChecks a false
let ejemploUndefined = undefined; // solo puede ser undefined
let ejemploNom = undefined; // esto se puede hacer pero cambiando el strictNullChecks a false
var Fases;
(function (Fases) {
    Fases[Fases["Primero"] = 0] = "Primero";
    Fases[Fases["Segundo"] = 1] = "Segundo";
    Fases[Fases["Tercero"] = 2] = "Tercero"; // 2
})(Fases || (Fases = {}));
;
Fases.Primero; // esto vale 0
var UserActions;
(function (UserActions) {
    UserActions["fetchUser"] = "FETCH_USER";
    UserActions["postUser"] = "POST_USER";
})(UserActions || (UserActions = {}));
;
UserActions.fetchUser; // esto puede servir para comparar en el reducer de redux los strings
// como compilar?
// tsc --> npm i -g typescript
// npx tsc nombreArchivo.ts
// para hacerlo bien hay que hacer tsc --init ---> creamos un archivo de configuracion
console.log(UserActions.fetchUser);
// any
let changingType = 'Blas';
changingType = 26;
changingType = true;
// unknown
let idk = 'Blas';
idk = 30;
idk = false;
let anyValue = 'Agostina'; // te deshabilita todos los chequeos de typescript
let unkValue = 'Agostina';
let str1 = anyValue; // se puede hacer
// let str2: string = unkValue; // Type 'unknown' is not assignable to type 'string'
let str3 = unkValue; // explicit cast
anyValue.method(); // todo bien. Falla en el tiempo de ejecucion si el metodo no existe
// unkValue.method() // no se permite, no se puede llamar metodos con unknown
// unknow te tira error, cuando existe la posibilidad de error en tiempo de ejecucion
