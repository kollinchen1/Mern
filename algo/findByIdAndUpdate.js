// findByIdAndUpdate(id, updateObject, arr)

// Given an id, an object that has keys with corresponding updated values, and an array of objects

// Find the object by "id" key that matches the given id value and then update that object's
// keys with the provided new values.

// Return the updated object, or null if no object was found

// var myObj = {
//     id: 1,
//     name: "student1",
//     isLateToday: false,
//     lateCount: 15,
//     redBeltStatus: false
// }

// //  O(1)
// myObj.hasOwnProperty("id") // ? T/F

// Object.keys() // [keys]



const students = [{
    id: 1,
    name: "student1",
    isLateToday: false,
    lateCount: 15,
    redBeltStatus: false
},
{
    id: 2,
    name: "student2",
    isLateToday: false,
    lateCount: 1,
    redBeltStatus: false
},
{
    id: 3,
    name: "student3",
    isLateToday: false,
    lateCount: 0,
    redBeltStatus: false
}
];

function findByIdAndUpdate(id, updatedVals, collection) { 
    var arrId = collection.filter(p => p.id === id)
    // console.log(arrId)
    for (const [key, value] of Object.entries(updatedVals)) {
        // console.log(key,value)
        if(arrId[0].hasOwnProperty(key)){
            arrId[0][key] = value
        }
    }
    return arrId[0]
    
}

// function findByIdAndUpdate(id, updatedVals, collection) { 

//     updatedObjects = Object.keys(updatedVals); // Setting all the keys in an array 

//     for ( let object of collection) { // Looping through collection 
//         if( object.id === id ){ // Checking to see if the object exists and has a matching id 
//             for( let key of updatedObjects){
//                 if(object.hasOwnProperty(key)){
//                     object[key] = updatedVals[key]; // updating the objects key
//                 }
//             }
//             return object;
//         }
//     } 
// }



// Input: 3, { redBeltStatus: true }, students
console.log(findByIdAndUpdate(3, { redBeltStatus: true }, students))
// Output: {
//   id: 3,
//   name: "student3",
//   isLateToday: false,
//   lateCount: 0,
//   redBeltStatus: true
// }

// Input: 1, { isLateToday: true, lateCount: 16, randomKey: "randomValue"  }, students
console.log(findByIdAndUpdate(1, { isLateToday: true, lateCount: 16, randomKey: "randomValue" }, students))
// Output: {
//   id: 1,
//   name: "student1",
//   isLateToday: true,
//   lateCount: 16,
//   redBeltStatus: false
// }

// Input: 5, {}, students
console.log(findByIdAndUpdate(1, {}, students))
// Output: null