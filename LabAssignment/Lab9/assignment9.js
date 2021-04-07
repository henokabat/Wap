



"use restrict"





window.onload=function (){


//question number one
    let person= {
        name:"",
        dateOfBirth:"",
        getName:function () {
            return this.name;
        },

        setName:function (name) {
            this.name=name;
        }
    }

    let john=Object.create(person)
    john.setName("john");
    john.dateOfBirth="December 10, 1998";

    console.log("The person name is "+john.getName());
    console.log(john.getName()+"was born on "+john.dateOfBirth);





    //question number two

    let employee=Object.create(person);
    employee.salary=0;
    employee.hireDate=Date.now();
    employee.doJob=function (jobTitle){
        console.log(this.name+" is a "+jobTitle+" who earns $"+this.salary);
    }

    let Anna=Object.create(employee);
    Anna.name="Anna";
    Anna.salary=249995.50;
    Anna.doJob("programmer");


    //question number three

let Person2=function (){
    this.name="";
    this.dateOfBirth="";
    this.getName=function () {
        return this.name;
    }

    this.setName=function (name) {
        this.name=name;
    }
    this.toString=function () {
        return "{Name: "+this.getName()+", DateOfBirth "+this.dateOfBirth+"}";
    }
}

let peter=new Person2();
peter.setName("peter");
peter.dateOfBirth="November 10, 1985";

//test
    console.log(peter.toString());
}
