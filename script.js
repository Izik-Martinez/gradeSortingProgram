let allGrades = [];


let decider = prompt("type 'new grade' or 'quit'")



while(decider !== "quit"){



if (decider === "new grade"){

allGrades.push({

name: prompt("type name here"),
grade: Number(prompt("type grade here"))

})

allGrades.forEach(element => {
    if (element.name === "quit"){
        let decider = "quit"
    }
});

}




console.log(allGrades);

}
