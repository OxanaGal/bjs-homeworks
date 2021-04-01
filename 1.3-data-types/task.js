'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    if (typeof percent === 'Nan' || contribution === 'Nan' || amount === 'Nan') {
        return `Неверное значение параметра`;
    }
    
    let primaryLoan = amount - contribution;
    let monthAmount = (date.getFullYear() - new Date().getFullYear()) * 12 - new Date().getMonth() + date.getMonth();
    let monthPercent = percent / 100 / 12 ;
    let monthlyPay = primaryLoan *(monthPercent + monthPercent /(((1 + monthPercent)**monthAmount)-1));
    let totalAmount = monthlyPay * monthAmount;
    return Number(totalAmount.toFixed(2));
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    let greeting;
    if (typeof name == 'undefined' || !name.length) {
        greeting = 'Аноним';
    } else {
        greeting = name;
    }
    console.log(greeting);
    return `Привет, мир! Меня зовут ${greeting}.`;
}