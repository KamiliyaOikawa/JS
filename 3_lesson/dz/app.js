// Задание 1:
// Сделать функцию котороя принимает 2 number аргумента
// И вычисляет какой из них меньше
function hw(num1, num2) {
    if (num1 < num2) {
        console.log(`${num1} < ${num2}`)
    } else if (num1 > num2) {
        console.log(`${num2}< ${num1}`)
    }else {
        console.log(`${num1}=${num2}`)
    }
}

const num1= prompt('Number1:')
const num2=prompt('Number2:')
hw(num1,num2)

// Задание 2: 
// Написать функцию countChar
// Которая может считать длину переданной как аргумент


function countChar(lenght){
    console.log(lenght.length)
}
//     if (lenght.length === 0){
//         console.log(`zero`)
//     } else {
//         console.log(lenght.length)
//     }
// }

const g = prompt('Введите что-то ')
countChar(g)
