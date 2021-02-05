function getResult(a, b, c) {
    'use strict';
    // код для задачи №1 писать здесь
    //Вычислите дискриминант для решения уравнения.
    let d = (b ** 2) - (4 * a * c);
    //Результатом функции должен быть **массив**.
    let x = [];

    if (d < 0) {
        return x;
    };

    if (d == 0) {
        x.push((-b) / 2 * a);
    };

    if (d > 0) {
        x.push((-b + Math.sqrt(d)) / (2 * a));
        x.push((-b - Math.sqrt(d)) / (2 * a));
    };

    return x;
};
/*
function getAverageMark(marks){
    // код для задачи №2 писать здесь
    // создаем массив для хранения оценок
    let marks = [];
    // Проверить количество введенных оценок    
    if (marks.length === 0) {
        return `0`
    };
    
    if (marks.length > 5) {
        console.log('Cчитаются только первые 5')
        marks.slice(0, 4);
    };
    // считаем количество оценок
    for (let i = 0; i < marks.lengh; i++) {
        SumMarks += marks[i];
    };
    // вычисляем среднее
    averageMark = sumMarks / marks.length;
    
    return averageMark;
    // return averageMark;
};

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    let name = '';
    let currentDate = new Date();
    let personAge = currentDate.getFullYear() - dateOfBirthday.getFullYear();
    let text;

    if (personAge >= 18) {
        text = `Не желаете ли олд-фэшн, ${name}?`;    
      } else {
        text = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;        
      };
    
    return text;
};
*/