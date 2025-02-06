'use strict';

// ЗАДАЧА ВТОРАЯ
{
    const rain = Math.random();

    console.log(Math.round(rain));

    if (Math.round(rain) === 1) {
        console.log('Пошёл дождь. Возьмите зонт!');
    } else if (Math.round(rain) === 0) {
        console.log('Дождя нет!');
    }
}

// ЗАДАЧА ТРЕТЬЯ
{
    const mathematics = Number(prompt("Введите кол-во баллов по математике:", ''));
    console.log(mathematics)

    const russian = Number(prompt("Введите кол-во баллов по русскому языку:", ''));
    console.log(russian)

    const informatics = Number(prompt("Введите кол-во баллов по информатике:", ''));
    console.log(informatics)

    const totalScore = (mathematics + russian + informatics);


    if (totalScore >= 265) {
        console.log('Поздравляю, вы поступили на бюджет!');
    } else if (totalScore < 265) {
        console.log('Не судьба');
    }
}


// ЗАДАЧА ЧЕТВЕРТАЯ
{
    const n = Number(prompt("Введите сумму"))

    if (n % 100 == 0) {
        console.log("Можете забрать деньги")
    } else {
        console.log("Такую сумму снять невозможно!")
    }
}









