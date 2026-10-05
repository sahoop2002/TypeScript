"use strict";
class Person {
    // constructor
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    // methods
    introduce() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old`;
    }
    // getter
    getName() {
        return this.name;
    }
    //setter
    setName() {
        return this.name;
    }
    get displayName() {
        return this.name;
    }
}
///// **** this can be written as a shotter way 
class Employee {
    constructor(id, name, department) {
        this.id = id;
        this.name = name;
        this.department = department;
    }
    getDetails() {
        return `${this.name} works in ${this.department}`;
    }
}
let pratip = new Employee(101, "Pratip", "Engineering");
console.log(pratip.getDetails());
// inheritance in ts
class Manager extends Employee {
    constructor(id, name, department, teamSize) {
        super(id, name, department);
        this.teamSize = teamSize;
    }
    getTeamInfo() {
        return `${this.name} manages a team of ${this.teamSize}`;
    }
}
