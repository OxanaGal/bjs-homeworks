'use strict'

class PrintEditionItem {
    constructor (name, releaseDate, pagesCount, state, type){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    };

    set state(state){
        this._state = state;
        if (this._state < 0){
            this._state = 0;
        } else if (this._state > 100){
            this._state = 100;
        };
    };

    get state(){
        return this._state
    };

    fix(){
        this.state = this.state * 1.5;
        return this.state
    };
};

/*const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state);*/

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state){
        super(name, releaseDate, pagesCount, state);
        this.type = "magazine";
    };
};

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount, state){
        super(name, releaseDate, pagesCount, state)
        this.author = author;
        this.type = "book";
    };
};

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount, state){
        super(author, name, releaseDate, pagesCount, state)
        this.type = "novel";
    };
};

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount, state){
        super(author, name, releaseDate, pagesCount, state)
        this.type = "fantastic";
    };
};

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount, state){
        super(author, name, releaseDate, pagesCount, state)
        this.type = "detective";
    };
};

/*const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15*/

class Library{
    constructor(name, books){
        this.name = name;
        this.books = [];
    };

    addBook(book){
        if (book._state > 30) {
            this.books.push(book);
        };
    };

    findBookBy(type, value){
        for (let key in this.books){
            if (this.books[key][type] === value){
                return this.books[key]
            };
        };
        return null
    };

    giveBookByName(bookName){
        for(let key in this.books){
            if (this.books[key].name === bookName){
                const givenBook = this.books[key];
                this.books.splice(key, 1);
                return givenBook
            };
        };
        return null
    };
};

/*const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3*/

