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
