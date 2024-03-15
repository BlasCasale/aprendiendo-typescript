// const enum ErrorTypes {
//     notFound, // 0
//     unauthorized, // 1
//     forbidden // 2
// } con el const se genera menos codigo que con el enum solo

enum ErrorTypes {
    notFound, // 0
    unauthorized, // 1
    forbidden // 2
}

const throwMessage = (message: ErrorTypes): void => {
    switch (message) {
        // se carga el string desde el enum con su indice
        case ErrorTypes.notFound /* === 0 */:
            console.log('No se encontro')
            break;

        case ErrorTypes.unauthorized /* === 1 */:
            console.log('No esta autorizado')
            break;

        case ErrorTypes.forbidden /* === 2 */:
            console.log('No esta autorizado')
            break;

        default:
            console.log('Intente de nuevo')
            break;
    }
}