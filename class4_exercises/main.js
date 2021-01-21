const car = {
    brand: 'Volvo',
    year: 2018,
    color: 'red'
};

// EXERCISE 1 //
console.log(Object.keys(car));

// EXERCISE 2 //
Object.size = function (obj) {
    var size = 0,
        key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

var size = Object.size(car);
console.log(size);

console.log(Object.keys(car).length);