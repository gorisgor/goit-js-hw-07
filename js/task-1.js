// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:
// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).


const categories = document.getElementById("categories")
console.log("🚀 ~ categories:", categories)
const elements = categories.getElementsByClassName("item")
console.log("🚀 ~ elements:", elements)
const numberOfElements = elements.length;
console.log("Number of categories:", numberOfElements);









