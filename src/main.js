console.log('JS #1. Домашнє завдання. Основи JavaScript: Працюємо зі змінними, типами даних')

/*
 * Завдання #1
 *
 * Створіть змінні наступних типів даних зі вказаними значеннями:
 * - число (number)
 * - рядок (string)
 * - булеве значення (boolean)
 * - масив (array)
 * - об'єкт (object)
 */

// ім'я змінної: myNum (тип number), значення: 10
// ім'я змінної: myStr (тип string), значення: 'some string'
// ім'я змінної: myBool (тип boolean), значення: true
// ім'я змінної: myArr (тип array), значення: [1, 2, 3, 4, 5]
// ім'я змінної: myObj (тип object), значення: {first: 'First Name', last: 'Last Name'}
let myNum = 10
let myStr = 'some string'
let myBool = true
let myArr = [1, 2, 3, 4, 5]
let myObj = {
  first: 'First Name', 
  last: 'Last Name'
}

/*
 * Завдання #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, 
 * щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */

// ім'я змінної: decimal2, містить число myNum з 2 знаками після коми
let decimal2 = myNum.toFixed(2)

/*
 * Завдання #3
 *
 * Створіть змінну myBigInt і запишіть в неї число 123n (тип BigInt).
 * Потім збільшіть його на 1 та запишіть результат в цю ж змінну.
 */

// ім'я змінної: myBigInt (тип BigInt), початкове значення: 123n, потім збільшене на 1n
let myBigInt = 123n
myBigInt = myBigInt + 1n

// Перевірка
console.log('decimal2:', decimal2)
console.log('myBigInt:', myBigInt)