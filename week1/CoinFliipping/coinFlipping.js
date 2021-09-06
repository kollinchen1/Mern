function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeadsSync() {
    let headsCount = 0;
    let attempts = 0;
    while(headsCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if(result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
    }
    return `It took ${attempts} tries to flip five "heads"`;
}
// const noMondays = new Promise( (resolve, reject) => {
//     // console.log(new Date().getDay())
//     if(new Date().getDay() !== 0) {
//         resolve("Good, it's not Sunday!");
//     } else {
//         reject("Someone has a case of the Sundays!");
//     }
// });
// console.log( fiveHeadsSync() );
// console.log( "This is run after the fiveHeadsSync function completes" );


// noMondays
//     .then( res => console.log(res) )
//     .catch( err => console.log(err) );

function fiveHeads() {
    return new Promise( (resolve, reject) => {
        // your code here!
        let headsCount = 0;
        let attempts = 0;
        while(attempts<100) {
            attempts++;
            let result = tossCoin();
            console.log(`Attempt #${attempts}: ${result} was flipped`);
            if(result === "heads") {
                headsCount++;
                if(headsCount === 5){
                    resolve( `It took ${attempts} tries to flip five "heads"`);
                    break;
                }
            } else {
                headsCount = 0;
            }
            

        }
        reject("Over 100 attempts");
        
    });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?" );