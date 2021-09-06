const a = [1,3,4,5,6,7,8,9,0,18]
const arr = [88, 22, 44, 12, 99, 111, 9, 15, 49];


function mergeSort(arr){
    if(arr.length< 2) return arr;
    let mid = Math.floor(arr.length/2 )
    // let left = arr.slice(0,mid);
    // let right = arr.slice(mid,arr.length);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid,arr.length));
    return mergeSortedArrays(left,right);
}
function mergeSortedArrays(leftArr, rightArr) {
    // setup
    let sortedArr = []
    let leftIdx = 0;
    let rightIdx = 0;
    // logic
    // push to sortedArr
    console.log('18',leftArr)
    console.log('19',rightArr)

    while(sortedArr.length !== leftArr.length+rightArr.length){
        if( leftArr[0] < rightArr[0] ||rightArr[0]){
            sortedArr.push(leftArr.shift()); // Shift removes the element and inserts into sortedArr
        }else if(rightArr[0] < leftArr[0] ||leftArr[0]){
            sortedArr.push(rightArr.shift()); 
        }
    }
    console.log('58',sortedArr)
    // return
    return sortedArr 
}//NOT WORKING YET
mergeSort(arr);
