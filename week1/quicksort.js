function quickSort(array1,i,j){
    if(i<j){
        
    }
}
function part(arr,i,j){
    
}

var array1 = [1, 4, 2, 7, 6, 3, 8, 20, 9, 15, 12, 10, 30 ];
var array2 = [1, 3, 5, 4, 8, 30, 20, 17, 7];

let i = 0, j = array1.length-1;
let p1 = array1[6], p2 = 3;
let temp = 0;
while(i!=j){
    if(array1[i]< p1){
        i++;
    }
    else{
        if(array1[j]>p2){
            j--;
        }
        else{
            temp = array1[i];
            array1[i]=array1[j]
            array1[j] = temp;
        }
    }
}


quickSort(array1)
console.log(array1)
