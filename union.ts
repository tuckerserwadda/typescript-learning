// specifies either a variable takes any of the types 
// consider a function that takes an argument that is either a string or a number

function unoinFunction(arg1:number | string):number| string{
// use type check to specify the type being use
if(typeof arg1 === 'number'){
return 50
}
return arg1.toLocaleUpperCase()
}

// consider a function that takes an argument that is either any of the interfaces 

interface Dog{
    bark():void,
    walk():void
}

interface Cat{
    meow():void,
    walk():void
}
 // add type check  type guard
 function isDog(pet:Dog | Cat): pet is Dog{
 return (<Dog>pet).bark !==undefined 
 }

// function to call the pet
function callMyPet(pet:Dog | Cat){ 
    if(isDog(pet)){
        pet.bark();
    }else{
        pet.meow()
    }
    
}