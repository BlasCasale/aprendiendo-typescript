var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(name, age, mail) {
        var _this = this;
        this.getAge = function () {
            return _this.age;
        };
        this.name = name;
        this.age = age;
        // this.age = age.toString(); esto lo podemos hacer si * nos entra un number y lo guardo como string
        this.mail = mail;
    }
    ;
    return Persona;
}());
;
var Estudiante = /** @class */ (function (_super) {
    __extends(Estudiante, _super);
    function Estudiante(name, age, mail) {
        var _this = _super.call(this, name, age, mail) || this;
        _this.funcAge = function () {
            // aca no podemos acceder a la age debido a que es private y le pertenece a persona
            // solamente podemos usar las de protected porque son las compartidas (y publicas)
            return _this.getAge();
        };
        // podemos acceder a las protected de esta manera
        _this.funcMail = function () {
            return console.log("tu mail es ".concat(_this.mail));
        };
        _this.isActive = false;
        return _this;
    }
    ;
    return Estudiante;
}(Persona));
;
var juan = new Persona('Juan', 30, 'cosito@mail.com');
juan.name; // publico
// juan.age // privada
juan.getAge(); // asi podemos acceder al private
var pedro = new Estudiante('Pedro', 25, 'pedro@mail.com');
pedro.funcMail();
