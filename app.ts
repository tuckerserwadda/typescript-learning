/** my first typescript program
 *  *npm install typescript
 install the typescript compiler ts-node / tsc 
 in the terminal run 
 download the live server
 */
let message: string;
message = "Hello Tucker"
let heading = document.createElement('h1');
heading.textContent = message;
document.body.appendChild(heading);

/**types in typescript
 * a type is a label that describes the different properties and method that a value has
 * categories
 *  1. primitive types(string, number, boolean, null, undefined,symbol )
 * 2. object types (functions, arrays, classes)
 */

// type annotations 
let age: number  = 5; // nunmber
let name: string  = "tucker"; //  string 
let isGay: boolean  = true; // boolean

// array
let stringArray: string[] = ['a', 'b', 'c'];
let numberArray: number[] = [1, 2, 3, 4];

// object 
let person:object;
 person= {
     name: 'tucker',
     age: 32

 }
 // explicitly specify properties
let employee:{
    name:string,
    age:number
}

 // function arguments and return types 
 let greeting :(name:string ) => string // define the function and its return type
 greeting = (name ='Tucker') =>{
     return `Hi ${name}`
 }

  // tuple
  // number of elements is fixed
  // the order of values is important 
  let skill:[string, number]
  skill = ['tucker', 6]
 // optional tuple numbers
 let skill2:[ string, number, number?];
 skill2 = ['dana', 6] 

 //enum
 // group of named constants
 enum gone{
     yes, no
 }
 enum days{
     mon, tue, wed, thur, fri, sat, sun 
 }
 // check if the day is sunny
 let isSunny = (day:days)=>{
     let isSunny: boolean
    switch(day){
        case days.fri:
        case days.sun:
            isSunny = true;
            break;
            default:
                isSunny = false;
                break;
    }
    return isSunny;
 }