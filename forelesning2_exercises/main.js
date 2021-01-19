// FIRST EXERCISE //
function displayLarger(int1, int2) {
    if (int1 > int2) {
        return int1;
    } else {
        return int2;
    }
}

function alertSign(int1, int2, int3) {
    if (int1 * int2 * int3 < 0) {
        alert("The sign is -");
    } else {
        alert("The sign is +");
    }
}

function oddOrEven() {
    for (var i = 0; i < 15; i++) {
        if ((i % 2) == 0) {
            console.log(`${i} is even.`);
        } else {
            console.log(`${i} is odd.`);
        }
    }
}

console.log(displayLarger(1, 7));
console.log(alertSign(-1, -5, 3));
console.log(oddOrEven());

// SECOND EXERCISE //
function toUpperCase(string) {
    return string.toUpperCase();
}

function returnType(argument) {
    return typeof argument;
}

function checkIfPrime(number) {
    {

        if (number === 1) {
            return `${number} is not prime`;
        }
        else if (number === 2) {
            return `${number} is prime`;
        } else {
            for (var x = 2; x < number; x++) {
                if (number % x === 0) {
                    return `${number} is not prime`;
                }
            }
            return `${number} is prime`;
        }
    }
}

console.log(toUpperCase("heisann"));
console.log(returnType(12));
console.log(checkIfPrime(33));

// EXERCISE 3 //
let array1 = [1,2,3];
const checkArray = array => { return (Array.isArray(array))}

let array2 = [1,2,3,4]
const cloneArray = oldArray => {
    return newArray = [...oldArray];
}

let array3 = ['Hello', 'World', '!'];
const writeArray = array => {
    return array.join(' ');
    //return array3.toString();
}

console.log(checkArray(array1));
console.log(cloneArray(array2));
console.log(writeArray(array3));