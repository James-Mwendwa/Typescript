"use strict";
// Basic Types
let id = 5;
let company = 'Kings Worth';
let isPublished = true;
let x = 'Hello tsc';
let ids = [1, 2, 3];
let arr = [1, 2, 'three'];
// Tuple
let person = [1, 'James', 'james', true];
// Tuple array
let employees;
employees = [
    [1, 'james'],
    [2, 'jane'],
    [3, 'john']
];
//Union
let pid;
pid = '12';
// Enums
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "up";
    Direction1["Down"] = "down";
    Direction1["Left"] = "left";
    Direction1["Right"] = "right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: 'John',
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
customerId = 3;
// Functions
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(2,2));
// Void
function log(message) {
    // console.log(message);
}
log(1);
const user1 = {
    id: 1,
    name: 'John',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
// const james = new Person(1, 'James')
// console.log(james.register());
// Extending Classes
// SubClass
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(2, 'James', 'Snr Developer');
console.log(emp.register());
