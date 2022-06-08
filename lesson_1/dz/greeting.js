const name = prompt("Введите ваше имя:")
alert(`Пpивет ${name} я рад познакомится с тобой !!!`)
console.log(`Пpивет ${name} я рад познакомится с тобой !!!`)

//--------------------------------------------------------------

const tuple = [12, 321, 32, 432, 23]
const tuple2 = [12, 12, 12, 12, 12, 12, 12,]
console.log((function(tuple,tuple2){}).length);

if (tuple >= tuple2) {
    console.log(`${tuple} больше ${tuple2}`)
} else if (tuple <= tuple2) {
    console.log(`${tuple} меньше ${tuple2}`)
} else {
    console.log(`${tuple} равны ${tuple2}`)
}

//----------------------------------------------------------------

const Traffic_light = prompt("зелёный, красный или жёлтый")
switch (Traffic_light) {
    case 'зеленый':
        alert('Переходите дорогу!');
        break;
    case 'красный':
        alert('Стоп!');
        break;
    case 'желтый':
        alert('Готовьтесь!');
        break;
    default:
        alert('Нет таких цветов в светофоре!')
}
// if (Traffic_light === 'зелёный'){
//     console.log(Traffic_light+' GO!!!!')
// }else if (Traffic_light === 'красный'){
//     console.log(Traffic_light+' STOP!!!!')
// }else if (Traffic_light==='жёлтый'){
//     console.log(Traffic_light+'get ready')
// }else {
//     console.log(Traffic_light+ ' что это такое? ЗАЧЕМ ТЫ ЭТО ВЕЛ')
// }

//-----------------------------------------------------------------

const j = [[[[[[[[[[[[[[[5]]]]]]]]]]]]]]];
console.log(j[0][0][0][0][0][0][0][0][0][0][0][0][0][0][0]);