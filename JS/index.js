'use strict';


const productName = prompt("Наименование товара");
console.log('Наименование товара:', productName);





const totalProduct = Number(prompt("Количество товара", ''));

if (isNaN(totalProduct))
    alert('Вы ввели некорректные данные')


console.log(typeof totalProduct)
console.log('Колличество товара:', totalProduct);




const category = prompt("Категория товара", '');
console.log('Категория товара:', category);





const price = Number(prompt("Цена товара", ''));

// ЗАДАЧА ПЕРВАЯ
if (isNaN(price)) {
    alert('Вы ввели некорректные данные')
}

console.log(typeof price);
console.log('Цена:', price);




const sum = (totalProduct * price);
console.log('Общая сумма:', sum);




console.log(`"На складе ${totalProduct} единицы товара "${productName}" на сумму ${sum} деревянных"`);




















