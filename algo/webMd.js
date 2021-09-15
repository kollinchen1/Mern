/*
  Given an array of ailments (illnesses), and an array of medication objects that have a nested array of treatedSymptoms
  return the medication name(s) that treats the most given symptoms
*/

const medications = [
    {
        name: "Sulforaphane",
        treatableSymptoms: [
            "dementia",
            "alzheimer's",
            "inflammation",
            "neuropathy",
        ],
    },
    {
        name: "Longvida Curcumin",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "depression",
            "arthritis",
            "anxiety",
        ],
    },
    {
        name: "Hericium erinaceus",
        treatableSymptoms: [
            "anxiety",
            "cognitive decline",
            "depression"],
    },
    {
        name: "Nicotinamide mononucleotide",
        treatableSymptoms: [
            "ageing",
            "low NAD",
            "obesity",
            "mitochondrial myopathy",
            "diabetes",
        ],
    },
    {
        name: "PainAssassinator",
        treatableSymptoms: [
            "pain",
            "inflammation",
            "cramps",
            "headache",
            "toothache",
            "back pain",
            "fever",
        ],
    },
];

/*
Input: ["pain"], medications
Output: ["PainAssassinator", "Longvida Curcumin"]
*/

/*
Input: ["pain", "inflammation", "depression"], medications
Output: ["Longvida Curcumin"]
*/

/*
Input: ["existential dread"], medications
Output: []
*/

function webMD(ailments, meds) { 
    const ts = meds.map(p => p.treatableSymptoms)
    const names = meds.map(p => p.name)
    var newMeds = [];
    for(let a = 0; a < ts.length; a++){
        if(ailments.every(r=> ts[a].includes(r)))
            newMeds.push(names[a])
    }
    return newMeds
}

console.log(webMD(["pain"],medications))
console.log(webMD(["pain", "inflammation", "depression"],medications))
console.log(webMD(["existential dread"],medications))

const webMDfunctional = (ailments, medications) =>
                medications
                        .filter(medicine =>  // filter medications, look at each
                            ailments.every(sym => // loop our ailments, test each one with .every
                                medicine.treatableSymptoms.includes(sym) // => check if treatable
                            )
                        )
                        .map(({name}) => name); // map the result and only keep names

// .every checks each element with a test and returns true if all the elements pass
// think questions like "does every number divide by 5 in this list of numbers?"
// function webMD(ailments, meds) { 
//     const ts = meds.map(p => p.treatableSymptoms)
//     const names = meds.map(p => p.name)
//     var newMeds = [];
//     var flag = true;
//     for(let a = 0; a < ts.length; a++){
//         for(let b = 0; b < ailments.length; b++){
//             if(!ts[a].includes(ailments[b])){
//                 flag = false;
//                 break;
//             }
//         } 
//         if(flag)newMeds.push(names[a])
//         flag = true;
//     }
//     return newMeds
// }