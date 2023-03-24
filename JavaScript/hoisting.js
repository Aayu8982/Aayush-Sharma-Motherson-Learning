console.log(x); // undefined
getName(); //Aayush
console.log(getName); // ƒ getName(){   console.log('Aayush');}
console.log(y); // Reference error : Y is not defined
getAge(); // Type error : getAge() is not a function
console.log(getAge); // undefined
getId(); // Reference error : getId() is not a function
console.log(getId); // undefined

var x=7;

function getName(){
    console.log('Aayush');
} 

var getAge = () =>{
    console.log(25);
}


var getId = function(){
    console.log('16430MCA002');
}

console.log(x); // 7
console.log(y); // Reference error : Y is not defined
getName(); // Aayush
console.log(getName); // f getName() { console.log("Aayush"); }
getAge(); // 25
console.log(getAge); // () => { console.log(25);}
getId(); // 16430MCA002
console.log(getId); // f(){ console.log("16430MCA002");}