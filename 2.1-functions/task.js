'use strict';
//задача 1
function getSolutions(a, b, c ){
    let D = (b ** 2) - (4 * a * c);

    if (D < 0){
        return { D: D, roots: [] }
    } else if (D == 0) {
        let x1 = -b / 2 * a;
        return { D: D, roots: [x1] };
    } else if (D > 0){
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        return { D: D, roots: [x1, x2] };
    };
};

function showSolutionsMessage (a, b, c ){
    let result = getSolutions(a, b, c );

    console.log(`Вычисляем корни квадратного уравнения: ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`)


    if(!result.roots.length){
        console.log(`Уравнение не имеет вещественных корней`);
    }else if(result.roots != undefined && result.roots[1] == undefined){
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    }else if(result.roots[0] != undefined && result.roots[1] != undefined){
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    };

};

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

//задача 2
function getAverageMark(marks){

    let sumMarks = 0;
    
    if (marks.length === 0) {
        return 0;
    };
       
    for (let i = 0; i < marks.length; i++) {
        sumMarks += marks[i];
      };
    
    return sumMarks / marks.length;
};

function getAverageScore(data){
    let averageMarks = {};
    let objectLength = 0;
    let sumMarks = 0;

    for (let key in data) {
        averageMarks[key] = getAverageMark(data[key]);
        sumMarks += averageMarks[key]
        objectLength++;
    };

    if (Object.keys(data).length === 0) {
        averageMarks['average'] = 0;
        return averageMarks;
    };

    averageMarks.average = sumMarks / objectLength;
    

    return averageMarks;
};

console.log(getAverageScore({}));

/*console.log(getAverageScore({
    algebra : [4, 5, 5, 4],
    geometry : [2, 5],
    russian : [3, 3, 4, 5],
    physics : [5, 5],
    music : [ 2, 2, 5],
    english : [4, 4, 3, 3],
    poetry : [5, 3, 4],
    chemistry : [2],
    french : [4, 4]
    
}));*/

//задача 3
function getDecodedValue(secret) {

    if (secret == 1) {
        return 'Эмильо';
    } else if (secret == 0){
        return 'Родриго';
    };
        
};

function getPersonData(secretData) {
    let pirate = {
        firstName: getDecodedValue(secretData.aaa),
        lastName: getDecodedValue(secretData.bbb),
    }
    return pirate;
};

console.log(getPersonData({
    aaa: 0,
    bbb: 0
}));
console.log(getPersonData({
    aaa: 1,
    bbb: 0
}));
console.log(getPersonData({
    aaa: 0,
    bbb: 1
}));
console.log(getPersonData({
    aaa: 1,
    bbb: 1
}));