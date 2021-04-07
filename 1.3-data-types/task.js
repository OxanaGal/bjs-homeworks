'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    if (isNaN(percent) ||  percent <= 0 || percent > 100) {
        return `Параметр «Процентная ставка» содержит неправильное значение ${percent}`;
    };
    
    if (isNaN(contribution) || contribution < 0) {
        return `Параметр «Начальный взнос» содержит неправильное значение ${contribution}`;
    };
    
    if (isNaN(amount) ||  amount <= 0 ) {
        return `Параметр «Общая стоимость» содержит неправильное значение ${amount}`;
    };
    
    if (isNaN(Date.parse(date)) || date < new Date()) {
        let dateFinal = date.toLocaleDateString()
        return `Параметр «Срок ипотеки» содержит неправильное значение ${dateFinal}`
    };
    
    let primaryLoan = amount - contribution;
    let monthAmount = (date.getFullYear() - new Date().getFullYear()) * 12 - new Date().getMonth() + date.getMonth();
    let monthPercent = percent / 100 / 12 ;
    let monthlyPay = primaryLoan *(monthPercent + monthPercent /(((1 + monthPercent)**monthAmount)-1));
    let totalAmount = monthlyPay * monthAmount;
    return parseFloat(totalAmount.toFixed(2));
};

function getGreeting(name) {
    // код для задачи №2 писать здесь
    let greeting;
    if (typeof name == 'undefined' || !name.length || name.trim() === '') {
        greeting = 'Аноним';
    } else {
        greeting = name;
    }
    console.log(greeting);
    return `Привет, мир! Меня зовут ${greeting}.`;
}