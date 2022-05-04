// syntax 
// /function name(param:Type, param2:type):return type{
//     do something 
// }, 

function add(a:number, b:number):number{
    return a + b;

}
let sum = add(2, 3);
console.log(sum)

// a function can also be void (doesnt return anything)

function writeOnScreen(message:String):void{
    console.log(message.toUpperCase())
}
writeOnScreen("tucker is handsome");
 // assign avariable to a function 
let addTwoNumbers =function  (x:number, y:number):number{
    return x + y;
 
}

let subtract:(x:number, y:number)=>number=
    function (params:number, param:number) {
        return params- param;
    }

    // optional parameters(parameters that are not defined)
    // in this function c is optional 
    // the optional param must come last
    function multiply(a:number, b:number, c?:number):number{
        if(typeof c !== 'undefined'){
            return a*b*c
        }
        return a*b
    }
    
    // apply default values

    function applyDiscount(price:number, discount = 0.05):number{
        return price -(price*discount);
    }
    // if discount is not defined the default value is used 
    console.log(applyDiscount(100))

    // rest parameters
    /**
     * rules
     * afunction has; only one rest parameter
     * the rest parameter appears last in the parameter list
     * the type of the rsst parameter is an array type
     * to declare a rest param,   you prefix the param name with three dots and array type
     */
    function getTotal(...restParam:[]):number{
        let total = 0;
        restParam.forEach(num => total += num)
        return total
    }

    // function overloads
    // the function can accept both string and numbers
    // optiional paraams can also bee used in function overload

    function funOverLoad(a:number, b:number):number;
    function funOverLoad(a:string, b:string):string;
    function funOverLoad(a:any, b:any):any{
        return a +b;
    }
    funOverLoad("tucker", "serwadda")
    funOverLoad(3, 4);