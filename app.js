/** my first typescript program
 *  *npm install typescript
 install the typescript compiler ts-node / tsc
 in the terminal run
 download the live server
 */
var message;
message = "Hello Tucker";
var heading = document.createElement('h1');
heading.textContent = message;
document.body.appendChild(heading);
/**types in typescript
 * a type is a label that describes the different properties and method that a value has
 * categories
 *  1. primitive types(string, number, boolean, null, undefined,symbol )
 * 2. object types (functions, arrays, classes)
 */
// type annotations 
var age = 5; // nunmber
var name = "tucker"; //  string 
var isGay = true; // boolean
// array
var stringArray = ['a', 'b', 'c'];
var numberArray = [1, 2, 3, 4];
// object 
var person;
person = {
    name: 'tucker',
    age: 32
};
// explicitly specify properties
var employee;
// function arguments and return types 
var greeting; // define the function and its return type
greeting = function (name) {
    if (name === void 0) { name = 'Tucker'; }
    return "Hi ".concat(name);
};
// tuple
// number of elements is fixed
// the order of values is important 
var skill;
skill = ['tucker', 6];
// optional tuple numbers
var skill2;
skill2 = ['dana', 6];
//enum
// group of named constants
var gone;
(function (gone) {
    gone[gone["yes"] = 0] = "yes";
    gone[gone["no"] = 1] = "no";
})(gone || (gone = {}));
var days;
(function (days) {
    days[days["mon"] = 0] = "mon";
    days[days["tue"] = 1] = "tue";
    days[days["wed"] = 2] = "wed";
    days[days["thur"] = 3] = "thur";
    days[days["fri"] = 4] = "fri";
    days[days["sat"] = 5] = "sat";
    days[days["sun"] = 6] = "sun";
})(days || (days = {}));
// check if the day is sunny
var isSunny = function (day) {
    var isSunny;
    switch (day) {
        case days.fri:
        case days.sun:
            isSunny = true;
            break;
        default:
            isSunny = false;
            break;
    }
    return isSunny;
};
