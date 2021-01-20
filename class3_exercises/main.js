// EXERCISE 2 //
function fissBuzz(){
    for(let i = 1; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("Fizz Buzz");
        }else if(i % 5 === 0){
            console.log("Buzz");
        }else if(i % 3 === 0){
            console.log("Fizz");
        }else {
            console.log(i);
        }
    }
}
fissBuzz();

// EXERCISE 3 //
function pattern(){
    let myArray = [];
    for(let i = 0; i < 5; i++){
        myArray.push("*");
        for(let x = 0; x < 1; x++){
            myArray.push(" ");
        }
        console.log(myArray.toString().replace(/,/g, ""));
    }
}
pattern();