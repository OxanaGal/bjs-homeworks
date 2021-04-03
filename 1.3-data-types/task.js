'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    if (percent.isNaN || !percent.length || percent <= 0 || percent > 100) {
        alert `Параметр «Процентная ставка» содержит неправильное значение`;
    };
    
    if (contribution.isNaN || !percent.length || contribution < 0) {
        alert `Параметр «Процентная ставка» содержит неправильное значение`;
    };
    
    if (amount.isNaN || !percent.length || amount <= 0) {
        alert `Параметр «Общая стоимость» содержит неправильное значение`;
    };
    
    if (date.isNaN || date < new Date()) {
        alert `Параметр «Срок ипотеки» содержит неправильное значение`;
    };
    
    let primaryLoan = amount - contribution;
    let monthAmount = (date.getFullYear() - new Date().getFullYear()) * 12 - new Date().getMonth() + date.getMonth();
    let monthPercent = percent / 100 / 12 ;
    let monthlyPay = primaryLoan *(monthPercent + monthPercent /(((1 + monthPercent)**monthAmount)-1));
    let totalAmount = monthlyPay * monthAmount;
    return Number(totalAmount.toFixed(2));
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