"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeruletTerulet = exports.Employee = void 0;
// 👇️ named export
class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}
exports.Employee = Employee;
// KErület terület
class KeruletTerulet {
    constructor(a, b) {
        this.a = a;
        this.b = b;
        this.a = a;
        this.b = b;
    }
    kerulet() {
        let operationK = this.a + this.b;
        return operationK;
    }
    terulet(a, b) {
        let operationT = this.a * this.b;
        return operationT;
    }
}
exports.KeruletTerulet = KeruletTerulet;
