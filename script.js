let allGrades = [];


let decider = "fillerValue";




while(decider !== "quit"){

 decider = prompt("type 'new' or 'quit'")

 if (decider === "new"){

 allGrades.push({

 name: prompt("type name here"),
 grade: Number(prompt("type grade here"))

})

}






const passingGrades = allGrades.filter(n=>n.grade > 65)
.map(n=>({name: n.name, grade: n.grade}));

const failingGrades = allGrades.filter(n=>n.grade < 65)
.map(n=>({name: n.name, grade: n.grade}));

console.log(passingGrades);
console.log(failingGrades);
