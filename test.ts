class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        console.log("Greeting");
        return "Hello, " + this.greeting;
    }
}

/* Decorator and generic examples: */

function f() {
    console.log('f() has been evaluated');
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
        console.log('f() has been called');
    }
}

function g() {
    console.log('g() has been evaluated');
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
        console.log('g() has been called');
    }
}

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

function create<T>(c: {new(): T; }): T {
    return new c();
}

class C {
    @f()
    @g()
    method() {}
}

let greeter = new Greeter("world");
let c = new C();

let button = document.createElement('button');
button.textContent = "Print greeting";
button.onclick = function() {
    alert(greeter.greet());
    c.method();
}

document.body.appendChild(button);
console.log("Rendering done")
