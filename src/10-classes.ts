class Person {
    // properties
  private name: string;
  protected age: number;
  public email: string;
 
  // constructor
  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  // methods
   public introduce(): string {
    return `Hi, I'm ${this.name} and I'm ${this .age} years old`;
  }
 // getter
 public getName():string{
    return this.name
 }

 //setter
  public setName():string{
    return this.name
 }

  get displayName(): string {
    return this.name;
  }
}

///// **** this can be written as a shotter way 
class Employee {
  constructor(
    private id: number,
    public name: string,
    protected department: string,
  ) {}
 
  getDetails(): string {
    return `${this.name} works in ${this.department}`;
  }
}

let pratip = new Employee (101, "Pratip", "Engineering")
console.log(pratip.getDetails())

// inheritance in ts
class Manager extends Employee {
  constructor(
    id: number,
    name: string,
    department: string,
    private teamSize: number,
  ) {
    super(id, name, department);
  }
 
  getTeamInfo(): string {
    return `${this.name} manages a team of ${this.teamSize}`;
  }
}