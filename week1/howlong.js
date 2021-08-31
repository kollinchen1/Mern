//Calculating prime numbers
Number.prototype.isPrime = function() {
    for( let i=2; i<=Math.sqrt(this); i++ ) {
        if( this % i === 0 ) {
            return false;
        }
    }
    return true;
}
const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while( primeCount < 1e4 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}

console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

/* 
(base) Kunluns-MBP:week1 kollin$ node howlong.js 
The 10,000th prime number is 104729
This took 55436.07656478882 milliseconds to run
(base) Kunluns-MBP:week1 kollin$ node howlong.js 
The 10,000th prime number is 104729
This took 365.64703130722046 milliseconds to run 
The 100,000th prime number is 1299709
This took 11110.915913581848 milliseconds to run
The 1,000,000th prime number is 15485863
This took 363993.2417860031 milliseconds to run

*/

//Fibonacci

// recursive
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
// const start1 = performance.now();
// rFib(20);
// console.log(`Recursive took ${performance.now() - start1} milliseconds to run`);

// iterative
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
const start2 = performance.now();
iFib(20);
console.log(`Iterative took ${performance.now() - start2} milliseconds to run`);

//iterative because recursive uses O(n) time. while recursive uses log (n), values being stored and easily accessible. 


//Reversing a string
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join(""); //O(n) <= 3n
console.log(reversed1);
let reversedNew = "";
for(let i = story.length-1; i>-1;i--){ //O(n) = n
    reversedNew+=story[i];
}
console.log(reversedNew);