// findObjectsFilter(searchFor, items)

// given a 'search for' object with primitive values and a list of objects
// return a new list of objects containing the same key value pairs as the search for

// given searchFor and items
const searchFor = {
    firstName: "Bob",
    age: 31
};

const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "White", age: 31 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

// return a new list of objects containing the same key pair values
const output = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 }
];

function findObjectsFilter(searchObj, itemsArr) {
    let newArr = []
    let fa = true;
    // for (const [key, value] of Object.entries(searchObj)) {
    //     for(let i = 0; i<itemsArr.length;i++){
    //         // if (key in itemsArr[i] && value == )
    //         console.log(itemsArr[i][key],itemsArr[i]);
    //         // if(itemsArr[i].firstName === value && )
    //             // console.log(`${key}: ${value}`);
    //     }
    //     console.log("newLine")
    // }
    // console.log(Object.keys(searchObj))
    // console.log(Object.values(searchObj))
    for(let i = 0; i<itemsArr.length;i++){
        for (const [key, value] of Object.entries(searchObj)) {
            // if(key in itemsArr[i] && itemsArr[i][key] ===value &&!newArr.includes(itemsArr[i])){

            if(!(key in itemsArr[i]) || itemsArr[i][key] !=value ){
                // &&!newArr.includes(itemsArr[i])
                fa = false
                break;
                // { firstName: 'Bob', lastName: 'Bobbert', age: 31 },
                // { firstName: 'Bob', lastName: 'Bobbert', age: 31 },
                // { firstName: 'Bob', lastName: 'White', age: 31 },
                // { firstName: 'Bob', lastName: 'White', age: 31 },
                // { firstName: 'Bob', lastName: 'Smith', age: 27 }
                
            }
                

        }
        if(fa)
            newArr.push(itemsArr[i])
        fa = true;
    }
    return newArr;
}

console.log(findObjectsFilter(searchFor,items))