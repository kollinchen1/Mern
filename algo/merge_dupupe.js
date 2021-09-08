// given two sorted arrays that may have duplicate values, merge them and remove any duplicates

var arr1 = [1, 3, 3, 5, 8, 10,];
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

function mergeDedupe(arr1, arr2) {
    let a = 0,b = 0, x=0, len1 = arr1.length, len2=arr2.length;
    //make an new array with length = arr1.length + arr2.length
    // var arr3 = new Array(len1+len2);
    var arr3 = []
    //check if current index of arr1 or arr2 smaller,
    //the smaller value get to add to the new array
    while(a<len1 && b<len2){
        console.log(arr1[a],arr2[b])

        if(arr1[a] === arr2[b]){
            if(!arr3.includes(arr2[b]))
                arr3.push(arr2[b])
            b++;
            a++;
        }else if(arr1[a]<arr2[b])
        {   
            if(!arr3.includes(arr1[a])){
                arr3.push(arr1[a])
            }
            a++;
        }else arr3.push(arr2[b++])

        //arr3[x++] = arr1[a]<arr2[b]? arr1[a++]:arr2[b++]
    }
    //one of the condition has met for the previous while loop
    //now add the remaining items of both arrays
    //one of these two loops will not even meet the first condition
    while(a<len1){
        if(!arr3.includes(arr1[a])){
            console.log("here")
            arr3.push(arr1[a])
        }
        a++
    }
    while(b<len2){
        if(!arr3.includes(arr2[b])){
            console.log("here1")
            arr3.push(arr2[b])
        }
        b++
    }
    console.log(arr3);
    return arr3;
}


mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]) // [ 1, 3, 4, 5, 8, 10 ]
mergeDedupe([2,3,3,5,8,10,12], [1,3,4,6]) // [1, 2, 3, 4, 5, 6, 8, 10, 12]