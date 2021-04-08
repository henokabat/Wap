export default class Person {
    constructor(name, dateOfBirth) {
        this.name=name;
        this.dateOfBirth=dateOfBirth
    }

    getName(){
        return this.name;
    }
    setName(name){
        this.name=name;
    }
    setDateOfBirth(dateOfBirth){
        this.dateOfBirth=dateOfBirth;
    }

    getDateOfBirth(){
        return this.dateOfBirth;
    }
    toString(){
        return "Name: "+this.name+"' DateOfBirth: "+this.dateOfBirth;
    }
}