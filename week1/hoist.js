// console.log(example);
// let example = "I'm the example!";    



/* 1 */
var hello;
console.log(hello);                                   
hello = 'world';             
// undefined


/* 2 */
var needle;
needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// magnet

/* 3 */
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//super cool
/* 4 */
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// chicken 
// half-chicken

/* 5 */
// var mean;
// mean();
// console.log(food);//error
// mean = function() {
//     var food;//declared
//     food = "chicken";
//     console.log(food);
//     food = "fish";
//     console.log(food);
// }
// console.log(food);//error

//complier issue
/* 6 */
var genre;
console.log(genre); //undefined
genre = "disco";
rewind();
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre);//error
/* 7 */
var dojo;
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    var dojo;//initialize here
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);//san jose

/* 8 */
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";//this line doesnt set to a correct variable(dict), and it is a const 
    }
    return dojo;
}

