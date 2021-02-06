'use strict';

function getResult(a, b, c) {
    // код для задачи №1 писать здесь
    //Вычислите дискриминант для решения уравнения.
    let d = (b ** 2) - (4 * a * c);
    //Результатом функции должен быть **массив**.
    let x = [];

    if (d == 0) {
        x.push((-b) / 2 * a);
    };

    if (d > 0) {
        x.push((-b + Math.sqrt(d)) / (2 * a));
        x.push((-b - Math.sqrt(d)) / (2 * a));
    };
    
    return x;
};

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    // создаем массив для хранения оценок 
    let sumMarks = 0;
            
    // Проверить количество введенных оценок
    if (marks.length === 0) {
        return 0
    };

    if (marks.length > 5) {
        console.log('Cчитаются только первые 5');
        marks = marks.splice(5);
    };
        // считаем количество оценок
        
    for (let i = 0; i < marks.length; i++) {
        sumMarks += marks[i];
      };
    
    return sumMarks / marks.length;
};

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    
    let personAge = new Date().getFullYear() - dateOfBirthday.getFullYear();
    
    if (personAge >= 18) {
        return `Не желаете ли олд-фэшн, ${name}?`;    
      } else {
        return `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;        
      };
};
