'use strict';

String.prototype.isPalindrome = function isPalindrome(){
    let newString = this.toLocaleLowerCase().split(" ").join("");
    console.log(newString);
    // reverse работает только с массивами, а split возвращает массив. 
    // Может костыльно, но вроде работает :D 
    let newStringReversed = newString.split("").reverse().join("");
    console.log(newStringReversed);

    return newString === newStringReversed;
};

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    let sumMarks = 0;
    
    if (marks.length === 0) {
        return 0;
    };
       
    for (let i = 0; i < marks.length; i++) {
        sumMarks += marks[i];
      };
    
    let roundedAverage = Math.round(sumMarks / marks.length);
   
    return roundedAverage;
};

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    let now = Date.now();
    birthday = Number(new Date(birthday));

    let diff = now - birthday;
    console.log(diff)
    // округлим дополнительно, возраст обычно целое число
    let age = Math.floor(diff / (1000 * 3600 * 24 * 365.2425));
    console.log(age);
    return (age > 18);
};