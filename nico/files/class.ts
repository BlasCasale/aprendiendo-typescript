class Persona {
    // por defecto son públicas
    name: string;
    private age: number; // * aca se pone string y entra por parametro un number
    protected mail: string;
    constructor(name: string, age: number, mail: string) {
        this.name = name;
        this.age = age;
        // this.age = age.toString(); esto lo podemos hacer si * nos entra un number y lo guardo como string
        this.mail = mail;
    };

    getAge = (): number => {
        return this.age;
    };
};

class Estudiante extends Persona {
    isActive: boolean;
    constructor(name: string, age: number, mail: string) {
        super(name, age, mail);
        this.isActive = false;
    };

    funcAge = () => {
        // aca no podemos acceder a la age debido a que es private y le pertenece a persona
        // solamente podemos usar las de protected porque son las compartidas (y publicas)
        return this.getAge();
    };

    // podemos acceder a las protected de esta manera
    funcMail = (): void => {
        return console.log(`tu mail es ${this.mail}`);
    };
};

const juan = new Persona('Juan', 30, 'cosito@mail.com');
juan.name // publico
// juan.age // privada
juan.getAge(); // asi podemos acceder al private

const pedro = new Estudiante('Pedro', 25, 'pedro@mail.com');
pedro.funcMail();