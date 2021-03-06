// 1) Задача "Треугольник в цикле": Напишите цикл, который за 7
// вызовов console.log выводит такой треугольник:
// *
// **
// ***
// **** и так далее
let trangle = '*';
// console.log(trangle)
for (let i = '*'; i.length <= 7; i += trangle) {
    console.log(i)
}


// 2) Задача "FizzBuzz": напишите программу, которая выводит через console.log все числа от 1 до 100,
// с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’,
// а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’
// Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3, и на 5.
for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
    } else if (i % 5 === 0) {
        console.log('Buzz')
    } else if (i % 3 === 0) {
        console.log('Fizz')
    } else {
        console.log(i)
    }
}
