const array = [
    {
        username: 'Jack',
        full_name: "Koin"
    },
    {
        username: 'Jack',
        full_name: "Koin"
    },
    {
        username: 'Jack',
        full_name: "Koin"
    },
    {
        username: 'Jack',
        full_name: "Koin"
    },
]
// инкреминтация
for (let i = 0; i < array.length; i++) {
    if (i === 2) {
        break;
    } else {
        console.log(array[i])
    }
}

for (let user of array) {
    console.log(user)
}

const obj = {
    key1: 'b1',
    key2: 'b2',
    key3: 'b3',
    key4: 'b4',
    key5: 'b5',
    key6: 'b6',
}

for (let key in obj) {
    console.log(obj[key])
}
users = [
    {
        user: 'p',
        salary: 200
    },
    {
        user: 'p',
        salary: 2050
    },
    {
        user: 'p',
        salary: 500
    },
    {
        user: 'p',
        salary: 2000
    },
    {
        user: 'p',
        salary: 10000
    }

]
const FiltrUser = users.filter(user => user.salary > 500)
console.log(FiltrUser)

const destruct = users.map(user => ({
    name: users.salary,
    salary: users.user
}))
console.log(destruct)

for (let user of users) {
    if (users.salary > 500) {
        user.push(users)
    }
}

const robot = [
    {
        name: 'Jo',
        damage: 200
    },
    {
        name: 'Oikawa',
        damage: 2000
    },
    {
        name: 'Greg',
        damage: 1000
    },
    {
        name: 'Aoi',
        damage: 500
    },
    {
        name: 'John',
        damage: 700
    }
]
const filterRobot = robot.filter(rob => rob.damage >= 1000)
console.log(filterRobot)
