'use strict' //Не позволяет использовать переменные без их предварительного объявления.

const myCity = {
    city: 'New York',
    info: {
        isPopular: true,
        country: 'USA'
    }
}
myCity.popular = true
console.log(myCity)

console.log(myCity.info.isPopular)

const countryPropertyName = 'country2'
myCity[countryPropertyName] = 'USA'

delete myCity.info.isPopular

console.log(myCity)

const post = {
    title: 'My post',
    likesQty:5
}

const postStringified = JSON.stringify(post)
console.log(postStringified)

console.log(JSON.parse(postStringified))

const person = {
    name: 'Bob',
    age: 25
}

const person2 = person //создание копии объекта, при изменении person2 будет меняться person тоже.
const personNew = Object.assign({}, person) //создание копии объекта, но он уже не будет менять изначально копируемый. Не отделяет вложенные объекты т.е. они будут изменть и исходный тоже.
const personNew2 = {...person} //создание копии объекта, три точки это оператор разделения объекта на свойства. копия уникальная  Но вложенные свойства будут меняться.
const personNewProperly = JSON.parse(JSON.stringify(person)) //создание нового объекта со всеми вложенными - они тоже будут новые.

personNewProperly.age = 22
personNew2.name = 'Alice'
person2.age = 26
person2.isAdult = true
personNew.age = 33
console.log(person.age)
console.log(person.isAdult)
console.log(personNew.age)
console.log(personNew2.name)
console.log(personNewProperly.age)

let a = 5
let b = 3

function sum(a, b) {
    const c = a + b
    console.log(c)
}

sum(a, b)

a = 8
b = 12

sum(a, b)

function myFn(a, b) {
    let c
    a = a + 1
    c = a + b
    return c //после этого оператора функция завершает свою работу, все ниже - не будет выполнено
}
console.dir(myFn)
console.log(myFn(2, 2))

const personOne = {
    name: 'Bob',
    age: 21
}

function increasePersonAge(person) {
    const updatedPerson = Object.assign({}, person)
    updatedPerson.age += 1
    return updatedPerson
}
const updatedPersonOne = increasePersonAge(personOne)
console.log(personOne.age)
console.log(updatedPersonOne.age)

function printMyName() {
    console.log('Sasha')
}
console.log('Start')
setTimeout(printMyName, 1000)

const a2 = 5 //пример про область видимости переменных - а1 видна всем вложенным функциям. если внутри функции будет переменная а1, то будет использоваться ее значение, а не глобальной

function myFn3() {
    function innerFn() {
        console.log(a2) //5
    }
    innerFn()
}
myFn3()

// ниже также про видимость переменных
let a4
let b4

function myFn4() {
    let b4 //переменные внутри функции всегда имеют приоритет перед общими переменными
    a4 = true
    b4 = 10
    console.log(a4) //true
}

myFn4()
console.log(a4) //true
console.log(b4) //undefined

console.log(Boolean('')) // перевод пустой строки в булевое значение  -всегда false
console.log(Boolean('Undefined')) //перевод неопределенного значения в булевый тип - всегда false
console.log(Boolean(0)) //перевод нуля в булевое значение - false

//typeof возвращает значение типа переменной

let b7 = 4
let b8

b7 && console.log('Выполнено') //оператор И если первое истино, то выполняет второе и возвращает его значение!!! получается можно вместо IF 

b8 = console.log('Выполнено') || b7 //оператор ИЛИ - тоже возвращает значение, но только первого истинного операнда.
console.log(b8) //то есть в этом случае переменная b8 имеет значение переменной b7 и равна 4

const button = {
    width: 200,
    text: 'Buy'
}

const redButton = {
    ...button, //копируется объект button
    color: 'red' //уже в новый добавляется свойство
}

console.table(redButton)

const buttonInfo = {
    text: 'Buy'
}

const buttonStyle = {
    color: 'yellow',
    width: 200,
    height: 300
}

const button2 = {
    ...buttonInfo,
    ...buttonStyle //скопируется последовательно два объекта в новый. Если у исходных есть вложенные объекты, то они Будут извеняться.
}
console.table(button2)

const myName2 = 'Sasha'
const myCity2 = 'Tbilisi'

const greeting = `Меня зовут ${myName2}. Я живу в городе ${myCity2}` //преобразует все в строку
console.log(greeting)

const myFunction = function(a, b) { //анонимное функциональное выражение - можно присвоить переменной и использовать как функцию. если нет return, то вернет undefined
    let c
    a = a + 1
    c = a + b
    return c
}
console.log(myFunction(5, 3))

const myFunction10 = (a, b) => { //присвоение стрелочной функции - переменной.
    let c
    a = a + 1
    c = a + b
    return c
}
myFunction10(5, 3)

setTimeout(() => {
    console.log('Отложенное сообщение')
}, 1000) //'Отложенное сообщение' будет выведено через 1 сек

setTimeout(function() {
    console.log('Отложенное сообщение 2')
}, 1000) //Отложенное сообщение 2 будет выведено через 1 сек

const myFn7 = (a, b) => a + b
//фигурные скобки можно не писать если функция состоит из одного выражения. в таком случае нет return, но фун-я автоматом возвращает результат значения которое получится

function multByFactor(value, multiplier = 1) {
    return value * multiplier
}
multByFactor(10, 2) // результат 20
multByFactor(5) // результат 5 т.к. нет второго параметра, он задан по умолчанию 1

const myFn5 = (value, multiplier = 1) => { // повторил предыдущее через стрелочную функцию
    return value * multiplier
}
console.log(myFn5(7))
console.log(myFn5(7, 2))

const newPost = (post, addedAt = Date()) => ({ //важно именно обычные скобки плюс фигурные чтобы функция вернула объект!
    ...post,
    addedAt,
})

const firstPost = {
    id: 1,
    author: 'Sasha'
}
console.table(newPost(firstPost))

const fnWithError = () => {
    throw new Error('Some error') //функция, которая намеренно дает ошибку.
}

try {
    fnWithError() //блок, в который нужно помещать функцию с потенциальной ошибкой
} catch (error) { //ошибка будет присвоена как значение переменной error
    console.error(error) //напечатать в консоль ошибку целиком - фактически Some error
    console.log(error.message) //выводится только сообщение оошибки - в нашем примере это 'Some error'
} //обычно используется один из способов выводв ошибки.

console.log('Continue...') //когда ошибка поймана через try - catch, то выполнение кода продолжится

//инструкции, обычно заканчиваются символом ; примеры:

let a9;

const b9 = 5;

if (a9 > b9) {
    console.log('a9 is larger');
} // if - это тоже инструкция, но т.к. есть закрывающая скобка круглая, то нет ;

for (let i = 0; i++; i < 5) {
    console.log(i);
} // цикл for - тоже инструкция и тоже нет ;
// ; - можно опускать т.к. так код читается удобнее!!!

const myArray = [1, 2, 3]
console.log(myArray)

const myArray2 = new Array(1, 2, 3)
console.log(myArray2)
// важно, что myArray не равен myArray2 потому что ссылочный тип - содержат ссылки на разные массивы т.е. разные ссылки, поэтому не равны

const myArray3 = [1, true, 'Sasha']
console.log(myArray3)
console.log(myArray3.length) //вывести на экран кол-во элементов массива

const myArray4 = [1, true, 'Sasha'] //создал массив с такими же значениями как myArray3

console.log(myArray3 === myArray4) // false т.к. это разные объекты, которые хранятся в разных местах памяти

const myArray5 = myArray4
console.log(myArray5 === myArray4) // true т.к. сейчас скопирована ссылка на объект т.е. обе переменные ссылаются на один и тот же кусок памяти

console.log(myArray4[0]) // выведется 1. нумерация эл-ов массива с нуля
console.log(myArray4[1]) // выведется true

myArray4[3] = 'abc' //добавляю новый элемент массива в конец
console.log(myArray4) //вывожу все элементы массива
console.log(myArray4.length) //вывожу кол-во эл-ов массива

myArray4.push(99) //добавит значение false в конец массива myArray4
console.log(myArray4)

myArray4.pop() //удалит последний элемент массива и возвращает это удаленное значение
console.log(myArray4)

const removedElement = myArray4.pop() //удаление последнего элемента массива и одновременно присваивание удаляемого значения новой переменной
console.log(myArray4)
console.log(removedElement)

myArray4.unshift(true) //добавление нового элемента в начало массива
console.log(myArray4)

myArray4.unshift('abc')
console.log(myArray4)

myArray4.shift() //удаляет первый элемент массива и возвращает его значение т.е. это значение можно присвоить, например
console.log(myArray4)

const removedElement2 = myArray4.shift()
console.log(myArray4)
console.log(removedElement2)

const myArray7 = [1, 2, 3] //создал массив
console.log(myArray7) // вывел его

myArray7.forEach(el => console.log(el * 2)) // фактически - цикл, который проходит по всем элементам массива и что-то делает. Аргумент - функция. НЕ меняет значения в массиве

console.log(myArray7) //вывел еще раз массив, чтобы убедиться, что он Не изменился

const newArray7 = myArray7.map(el => el * 3) //пробегает по всем элементам массива и умножает каждый на 3, при этом можно создать новый массив, что здесь и происходит. Передаем call back функцию, как здесь
// ниже тоже самое по функционалу, что в строке выше, только через функцию
//const newArray7 = myArray.map((el) => {
//    return el * 3
//})

console.log(newArray7) //оригинальный массив Не изменится.

//деструктуризация объектов
const userProfile = {
    name0: 'Sasha7',
    commentsQty: 23,
    hasSignedAgreement: false,
}

const { name0, commentsQty } = userProfile //создание двух переменных, которые получат значения из объекта userProfile
const { hasSignedAgreement } = userProfile

console.log(name0)
console.log(commentsQty)

//деструктуризация массивов
const fruits = ['Apple', 'Banana']

const [fruitOne, fruitTwo] = fruits //переменным в квадратных скобках последовательно будут присваиваться значения из массива fruit

console.log(fruitOne) //Apple
console.log(fruitTwo) //Banana

//деструктуризация функций

const userInfo = ({ name, commentsQty }) => { //функция, которая деструктурирует параметры получаемого объекта т.е. создается две переменные, которые получают соответствующие значения из передаваемого объекта
    if (!commentsQty) {
        return `User ${name} has no comments`
    }
    return `User ${name} has ${commentsQty} comments`
}

userInfo(userProfile)

// условный оператор IF

let val = 10

if (val > 5) {
    val += 20
}

console.log(val) // будет 30

const person9 = {
    age: 20
}

if(!person.name9) {
    console.log('Имя не указано') // if с отрицанием. если свойства name у объекта person нет, то выведется сообщение
}

// IF ELSE

let val2 = 10

if (val2 < 5) {
    val2 += 20
} else {
    val2 -= 20
}

console.log(val2) // -10

// IF ELSE IF

const age = 7

if (age > 18) {
    console.log('Is adult')
} else if (age >= 12) {
    console.log('Is teenager')
} else {
    console.log('Is child')
}

// использование IF в функциях

const sumPositiveNumbers = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'One of the arguments is not a number'
    }
    if (a <= 0 || b <= 0) {
        return 'Numbers are not positive'
    }
    return a + b
}

// инструкция switch

const month = 2

switch (month) {
    case 12:
        console.log('Декабрь')
        break
    case 1:
        console.log('Январь')
        break
    case 2:
        console.log('Февраль')
        break
    default:
        console.log('Это не зимний месяц') // выполняется в случае если остальные условия Не выполнились. Может сработать нескоько условий, поэтому важно break
}

//тренарный оператор

let value = 11

value //здесь может быть любое булевое значение, например с &&, ||
    ? console.log('Условие истино') //если истина значение выше, то выполняется это
    : console.log('Условие ложно') //если ложь, то это

console.log(value >= 0 ? value : -value) //если выполняется условие, то вывод просто value, если ложно, то -value, здесь результатом будет 11.

value = -5
const res = value >= 0 ? value : -value
console.log(res) // здесь будет 5

// ЦИКЛЫ
// FOR

for (let i = 0; i < 5; i++) {
    console.log(i)
}

//for для массивов лучше не использовать, но если очень надо:

const myArray111 = ['first', 'second', 'third']

for (let i = 0; i < myArray111.length; i++) {
    console.log(myArray111[i])
}

// цикл для переборки эл-ов массива:

myArray111.forEach((element, index) => { //index - не обязательно, это будет доступ к номеру элемента в массиве
    console.log(element, index) //forEach будет вызываться столько раз, сколько элементов в массиве, возвращает undefined т.е. нет смысла присваивать результат этой функции какой-то переменной
})

// while

let i2 = 0

while (i2 < 5) { //если условие изначально ложно, то цикл ни разу не сработает
    console.log(i2)
    i2++ //важно самому следить за условием и изменять переменную
}

//DO WHILE - нужно использовать тогда, когда нужно выполнить содержимое цикла хотя бы 1 раз

// FOR IN для объектов

const myObject777 = {
    x: 10,
    y: true,
    z: 'abc'
}

for (const key in myObject777) { // в key будет меняться от x до z
    console.log(key, myObject777[key])
}

// FOREACH для объектов

Object.keys(myObject777).forEach(key => { //делает тоже самое, что цикл выше
    console.log(key, myObject777[key]) //Object.keys - даст массив свойств x,y,z
})

Object.values(myObject777).forEach(value => { //перебирает сразу значения свойств объекта
    console.log(value) //дает массив из значений объекта т.е. 10, true, abc в данном случае
})

// FOR OF для строк и массивов

const myString = 'Hey'

for (const letter of myString) {
    console.log(letter)
}

const myArray0 = [true, 10, 'abc', null]

for (const element of myArray0) { //это пример для ассивов. НО его лучше не использовать, а использовать тот, что ниже
    console.log(element)
}

myArray0.forEach(element => { // предпочтительно для использования с массивами!
    console.log(element)
})

// классы!

class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }
}

const firstComment = new Comment('First comment') // создаем первый экземпляр класса комментарий, используя слово new и должны передать значение для параметра text

firstComment.upvote()
console.log(firstComment.votesQty) // 1
firstComment.upvote()
console.log(firstComment.votesQty) // 2

// Проверка принадлежности свойств экземпляру объекта

firstComment.hasOwnProperty('text') // true
firstComment.hasOwnProperty('votesQty') // true
firstComment.hasOwnProperty('upvote') // false
firstComment.hasOwnProperty('hasOwnProperty') // false

// создаем еще два комментария с новыми текстами:

const secondComment = new Comment('Second comment')
const thirdComment = new Comment('Third comment')

secondComment.upvote() //увеличим на 1 в соответствующем экземпляре класса комментарии

class Comment2 {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }

    static mergeComments(first, second) { //в этом случае метод merge будет работать только как метод объекта Comment2
        return `${first} ${second}`
    }
}

const myComment2 = new Comment2('Awesome comment')

console.log(Comment2.mergeComments('Some text.', 'Some other text.'))

// Расширение других классов:

class NumbersArray extends Array {
    sum() { // добавляем метод sum - будет доступен как метод любого экземпляра NumbersArray
        return this.reduce((el, acc) => acc += el, 0) //суммируем элементы массива. 0 - начальное значение acc
    }
}

const myArray10 = new NumbersArray(2, 5, 7)

console.log(myArray10)
console.log(myArray10.sum())

const hisName = 'Bogdan'

console.log(hisName.toUpperCase()) //переменная ведет себя как объект, давая вызывать методы

// промис - это обещание предоставить результат позже, чтобы можно было продолжать работу приложения пока осуществляется запрос на сервер, например.
// промис может вернуть либо результат, либо ошибку.
// состояния промиса: 1. ожидание(сразу после создания) 2. результат получен - исполнен. 3. получил ошибку - отклонен.
// промис это объект

const myPromise = new Promise((resolve, reject) => { //создание нового класса promise
//выполнение асинхронных действий
// внутри этой функции нужно в результате вызвать одну из функций: resolve или reject
// resolve - если все ок, reject - если ошибка.
})

// получение результата промиса
myPromise
    .then(value => {
// действия в случае успешного исполнения промиса
// значение value - это значение, переданное в вызове фун. resolve внутри промиса
    })
    .catch(error => {
        // действия в случае отклонения промиса
        // значение error - это значение, переданное в вызове фун. reject внутри промиса
    })

//fetch('https://jsonplaceholder.typicode.com/todos') //возвращает промис, сначала он будет в сотоянии panding
  //.then(response => response.json()) возвращает тоже промис
  //.then(json => console.log(json))
  //.catch(error => console.error(error)) это на случай если один из верхних then выдал ошибку

  //fetch('https://jsonplaceholder.typicode.com/todos//55') //вернется 1 объект с id 55 

  fetch('https://jsonplaceholder.typicode.com/todos') //возвращает промис, сначала он будет в сотоянии panding
  .then(response => {
      console.log(response)
      return response.json()
  }) 
  .then(json => console.log(json))
  .catch(error => console.log(error.message)) //это на случай если один из верхних then выдал ошибку

  //вызов fetch внутри промиса

  const getData = (url) =>
  new Promise((resolve, reject) =>
    fetch(url) 
        .then(response => response.json()) //возвращает тоже промис
        .then(json => resolve(json))
        .catch(error => reject(error))
  )