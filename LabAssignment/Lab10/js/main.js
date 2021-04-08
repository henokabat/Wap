import Person from "./Person.js";
import Employee from "./Employee.js"

let peoples=[new Person("Ana Smith","1998-12-15"),
new Person("Bob Jone","1945-11-16"),
new Person("Carlos Slim Helu","1976-09-24")];

for (let person of peoples ){
    console.log(person.toString())
}


//for question two

let jim=new Employee("Jim Hanson","unknown",245990.00,"unknown")
jim.doJob("Software Engineer")