class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    getTitle() {
        return this._title;
    }

    getIsCheckedOut() {
        return this._isCheckedOut;
    }

    setIsCheckedOut(newIsCheckedOut) {
        this._isCheckedOut = newIsCheckedOut;
    }

    getRatings() {
        return this._ratings;
    }

    toggleCheckOutStatus() {
        this._isCheckedOut = !this.checkedOutStatus;
    }

    getAverageRating() {
        let ratingsLength = this._ratings.length;
        let ratingSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
        return ratingSum / ratingsLength;
    }

    addRating(rating) {
        this._ratings.push(rating);
    }
}

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    getAuthor() {
        return this._author;
    }

    getPages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    getDirector() {
        return this._director;
    }
    
    getRunTime() {
        return this._runTime;
    }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything._isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);

speed.toggleCheckOutStatus();
console.log(speed._isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());