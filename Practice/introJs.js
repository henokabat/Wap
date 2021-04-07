

window.onload=function () {


    console.log("hello world");
    let num1 = 98;
    let num2 = 78;
    let num3 = num1 + num2;
    console.log(num3);
    let name = "Henok";
    console.log(name);
    let a = 67;
    let pi = 45;
    pi = function () {
        return (45);
    };

    console.log(pi());

    const student = {
        studentName: "henok", age: 54
    }
    console.log(student.age)
    let hello = [54, 3, 2, 7, 9, 2];
    let sum = 0;
    let even = hello.reduce((sum, n, i,)=> {
        return sum + n;
    });

    console.log(even);

    for (let i in hello){
        console.log(hello[i])
    }
    for (let item of hello){
        console.log(item)
    }


    function printF(a,...more) {

    }

    const bb={
        b:"name",
        age:25,
        sex:this.age,
        v:function (){
            return this.age;
        }
    }

    console.log(bb.v());

    function printHello(){
        bbb=45;
    }
   printHello();
    console.log(bbb)

    function helloB(a,c){
        return a*c;
    }

    const helloc=helloB.bind(null, 2);
    console.log(helloc(4))



    let Student= {
        name: "henok",
        age: 100,
        printName:function (){
            console.log(this.name)

        }
    }

    let henok={
        country:"Ethiopia",
        __proto__:Student
    }

    henok.printName();
   console.log( Object.keys(henok))

    for (let pro in henok){
        let isOwn=henok.hasOwnProperty(pro)
        if (pro){
            console.log("own " +pro)

        }else {
            console.log("inherited "+pro);
        }
    }


    let People=function (name){
        this.name=name;
    }

  let Abebe=new People("abebe");
    Abebe.__proto__=Student;
}



