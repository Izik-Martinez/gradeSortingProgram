let allGrades = [];


let decider = "filler";
// prompt("type 'new grade' or 'quit'")



while(decider !== "quit"){

decider = prompt("type 'new' or 'quit'")

if (decider === "new"){

allGrades.push({

name: prompt("type name here"),
grade: Number(prompt("type grade here"))

})


}




console.log(allGrades);

}

console.log(decider);

const passingGrades = allGrades.filter(n=>n.grade > 65).map(n=>n.grade);
console.log(passingGrades);

// allGrades.forEach(element => {
//     element.name === "quit"
//         let decider = "quit"
//         console.log(decider);
//     }
// });