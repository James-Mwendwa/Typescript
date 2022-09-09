// Basic Types

let id: number = 5;
let company: string = 'Kings Worth'
let isPublished: boolean = true
let x: any = 'Hello tsc'

let ids: number[] = [1,2,3]
let arr: any[] = [1,2,'three']


// Tuple

let person: [number, string, string, boolean] = [1, 'James', 'james', true]

// Tuple array

let employees: [number, string][]

employees = [
    [1, 'james'],
    [2, 'jane'],
    [3, 'john']
]

//Union
let pid: string | number 
pid = '12'

// Enums

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

enum Direction1 {
  Up ='up',
  Down ='down',
  Left ='left',
  Right ='right',
}

// console.log(Direction1.Up)

// Objects

type User = {
    id: number
    name: string
}

const user: User = {
    id: 1,
    name: 'John',
}

// Type Assertion

let cid: any = 1
// let customerId = <number>cid

let customerId = cid as number

customerId = 3


// Functions
function addNum(x: number, y: number): number {
    return x + y
}

// console.log(addNum(2,2));

// Void

function log(message: string | number): void {
    // console.log(message);
    
}

log(1)


// Interfaces

interface UserInterface {
    readonly id: number
    name: string
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: 'John',
}


// Interface with Functions

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number) => x + y
const sub: MathFunc = (x: number, y: number) => x - y



interface PersonInterface {
    readonly id: number
    name: string
    register(): string
}
// Classes

class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
      this.id = id
      this.name = name          
    }

    register() {
        return `${this.name} is now registered`
    }
}

// const james = new Person(1, 'James')
// console.log(james.register());

// Extending Classes
    
   // SubClass
class Employee extends Person {
    position: string

    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(2, 'James', 'Snr Developer')

console.log(emp.register())



