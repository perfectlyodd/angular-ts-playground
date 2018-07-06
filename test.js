var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        console.log("Greeting");
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
/* Decorator and generic examples: */
function f() {
    console.log('f() has been evaluated');
    return function (target, propertyKey, descriptor) {
        console.log('f() has been called');
    };
}
function g() {
    console.log('g() has been evaluated');
    return function (target, propertyKey, descriptor) {
        console.log('g() has been called');
    };
}
function getProperty(obj, key) {
    return obj[key];
}
function create(c) {
    return new c();
}
var C = /** @class */ (function () {
    function C() {
    }
    C.prototype.method = function () { };
    __decorate([
        f(),
        g(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], C.prototype, "method");
    return C;
}());
var greeter = new Greeter("world");
var c = new C();
var button = document.createElement('button');
button.textContent = "Print greeting";
button.onclick = function () {
    alert(greeter.greet());
    c.method();
};
document.body.appendChild(button);
console.log("Rendering done");
