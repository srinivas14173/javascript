const PI=3.14;
console.log(PI);
// Const Array
const state=["california","texas","arizona"];
console.log(state);
console.log(state[0])
state.push("ohio");
console.log(state);
            // ****** error **** state=["california","texas","arizona"];

// Const Objects
const person={
    name: 'tom',
    age: 30,
    gender: 'male',
}
console.log(person);
person.name='tom wilson';
person.age='31';
console.log(person);
                /* error person={
                    name: 'tom',
                    age: 30,
                    gender: 'male',
                }*/
                /*const person={
                    name: 'tom',
                    age: 30,
                    interests: ['music', 'skiing'],
                    gender: 'male',
                }*/

//bracket notation
                /*person.age
                person['age']
                person['name']['first']*/
