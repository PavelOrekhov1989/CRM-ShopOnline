'use strict';


const productName = prompt("Наименование товара");

const kollichestvoTovara = Number(prompt("Количество товара", ''));

const category = prompt("Категория товара", '');

const price = Number(prompt("Цена товара", ''));

const sum = (kollichestvoTovara * price);




console.log('Наименование товара:', productName);

console.log(typeof kollichestvoTovara)
console.log('Колличество товара:', kollichestvoTovara);

console.log('Категория товара:', category)

console.log(typeof price)
console.log('Цена:', price);

console.log('Общая сумма:', sum);


console.log(`"На складе ${kollichestvoTovara} единицы товара "${productName}" на сумму ${sum} деревянных"`);



















