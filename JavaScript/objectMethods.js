// Methods
// Functions insdie objects



const user = {
    firstName: 'Johnny',
    lastName: 'Depp',
    age: 30,    
    aboutMe: function(){
        return this.firstName + ' ' + this.lastName;
    }
}

console.log(user.aboutMe());


const personInfo = function(){
    return this.firstName+' '+this.lastName;
} 

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,    
    about: personInfo
}

const person1 = {
    firstName: 'Luke',
    lastName: 'Skywalker',
    age: 23,
    about: personInfo
}

const person2 = {
    firstName: 'Leia',
    lastName: 'Hall',
    age: 25,
    about: personInfo
}


console.log(person.about());
console.log(person1.about());
console.log(person2.about());