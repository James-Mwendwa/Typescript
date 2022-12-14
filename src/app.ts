let message: string = 'Hello World';

console.log(message)

let heading = document.createElement('h1')

heading.textContent = message

document.body.appendChild(heading)


//object type

let employee: {
    name: string;
    age: number;
    jobTitle: string;
};

employee = {
    name: 'James',
    age: 25,
    jobTitle: 'SWE'
}


//storing mixed type
let scores : (string | number )[] = [ 5, 'Design']

console.log(scores)

// Tuple type
   // number of elements in tuple is fixed
   // Order is very important
  
 let skill: [string, number];
 skill = ['design', 5,]  

 console.log(skill);
 

 // enum
   // group of named constants

   enum Month {
    Jan = 1,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec

   };

   function isItSummer(month: Month) {
    let isSummer: boolean;

    switch(month){
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
          isSummer = true
          break;    
        default:
            isSummer = false      
    }
    return isSummer
   }

   console.log(isItSummer(6));

   // void
    // return type of functions that do not return any value
   

// Type union

function add(a: any, b: any){
    if(typeof a === 'number' && typeof b === 'number')
      return a + b
    if(typeof a === 'string' && typeof b === 'string') 
      return a.concat(b)
    throw new Error('parameters must be numbers or strings')
}

console.log(add(6,6));


// Typescript Functions

// function name (parameter: type, parameter: type): returnType {
//  // do something
// }

function multiply(x: number, y: number): number {
  return x * y
}

console.log(multiply(2,3))


// void

function echo(message: string): void {
  console.log(message.toUpperCase())
}

// tsc optional parameters

function multiplyNum(a: number, b: number, c?: number): number {
  if( typeof c !=='undefined') {
   return a * b * c
  } 
  return a * b 
}

console.log(multiplyNum(2,2));

// tsc Default Parameters

function applyDiscount (price:number, discount: number = 0.05): number {
  return price * (1 - discount)
}

console.log(applyDiscount(100));


// Rest parameter

function getTotal( ...numbers: number[]): number {
  let total = 0
  numbers.forEach((num) => total+=num);
   return total
}

console.log(getTotal(20,40));


// tsc Function overloading
  // enable you to establish the r/ship btw 
  // parameter types and function return types

function addNum(a: number, b: number): number;
function addNum(a: string, b: string): string;
function addNum(a: any, b: any): any {
   return a + b;
}

console.log(addNum(20,30));
console.log(addNum('hello','james'));

// tsc classes

  // Access modifiers
    // Private
    // Protected
    // Public

    // Private modifier
     // Access that property or method within the same class


     class Person {
      private ssn: string;
      private firstName: string;
      private lastName: string;

       constructor (ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn
        this.firstName = firstName
        this.lastName = lastName
       }

       getFullName(): string {
        return `${this.firstName} ${this.lastName}`
       }

  
     }

     // error: firstName is private only accessible within the class Person
     
//  const person = new Person('123', 'James', 'Mwendwa')
//  console.log(person.firstName)



// Interface

interface Person {
  name: string
  jobTitle: string
}

function getName(person: Person) {
  return `${person.name} is a ${person.jobTitle}`;

}

 let james = {
    name: 'James',
    jobTitle: 'Software Engineer'
  }

//console.log(getName(james));


//tsc Generics
  // allow you to use types as formal parameters
  // it is type safe
  // use to avoid code duplication or drawback

  function getRandomNumberElement(items: any[]): any {
    let randomIndex = Math.floor(Math.random() * items.length)
    return items[randomIndex]
  }

  //console.log(getRandomNumberElement([4,'apple', 1,3,'mango', 'dates','orange']))



  
  // USE GENERICS

  function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length)
    return items[randomIndex]
  }

  // use letter T as the type variable which is a convention

  // CALLING A GENERICS FUNCTION

  let numbers = [1,2,3,4,5]

  let randomEle = getRandomElement<number>(numbers)
  console.log(randomEle)