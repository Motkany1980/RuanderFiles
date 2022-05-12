// 👇️ named export
export class Employee {
    constructor(public id: number, public name: string, public salary: number) {
      this.id = id;
      this.name = name;
      this.salary = salary;
    }
  
    getSalary() {
      return this.salary;
    }
  }
// KErület terület
export class KeruletTerulet {
    constructor(public a:number,public b:number) {
        this.a=a;
        this.b=b;
    }
    kerulet(){
        let operationK:number=this.a+this.b;
        return operationK;
    }
    terulet(a:number,b:number){
        let operationT:number=this.a*this.b;
        return operationT;
    }
}

