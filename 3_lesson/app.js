function getFullname(user, age, user2) {
    if (age < 18) {
        console.log('Close')
    } else {
        console.log(`${user.full_name} ${user.last_name} open`)
    }
}

const user = {
    full_name: 'F',
    last_name: "s"
}

const age = prompt('Сколько вам лет?')

getFullname(user, age)

function number(num1, num2) {
    if (num1 < num2) {
        console.log(num2)
    } else if (num2 < num1) {
        console.log(num1)
    } else {
        console.log(num1, num2)
    }
}

const numbers = {
    num1: prompt('число'),
    num2: prompt('число'),

}
number(numbers.num1, numbers.num2)


function callback(){
}

const button = document.getElementsByClassName('button');
const input = document.getElementsByClassName('input');

button.onclick = function (){
    console.log(input.value)
}
