// used to combine multiple types into one
// example combine two interfaces and objects

interface IA{
    a:'one',
}
interface IB{
    b:'two'
}
// combine IA and IB into single object
function objX(obj:IA & IB){
    return obj.a + obj.b
}

// complex example 
/**
 * write a function that takes two objects and return a single object
 */

function combineObjects<objA extends object, objB extends object>(objA:objA, objB:objB):objA&objB{
    return{...objA, ...objB}

}
const A ={a:1}
const B = {b:1}
const AandB = combineObjects(A, B)