//видна всем
var perem = 'string';
//не изменяемая
const perem2 = 'string';
//не всем видна и изеняемая
let perem3 = 'string';
//вывод в консоль
console.log(perem3);
//пишем perem2.log и жмем таб - выходит сразу строка ниже
console.log(perem2);

let someBoolean = true;

let person = someBoolean ? 'Ivan' : 'Matvey';

console.log(person);

let someArr = ['Ivan', 'Matvey', 123];
someArr.forEach(function (item, index) {
    console.log(item, index);
});

let someObf = {
    name: 'Ivan',
    age: 0.7,
    may: ['say aaaaaaa', 'stay head', 'eat']
};

//пишем someObf.forin и tab
for (let someObfKey in someObf) {
    console.log(someObf[someObfKey]);
}

//вот так можно преобразовать
Object.entries(someObf).forEach(function (item) {
    console.log(item);
});

//прикольно, каждая переменная это в js в конце концов объект

//доллар в начале делаем если работаем с домом
let $box = document.querySelector('.box');
console.log($box);

//еще в названиях тоже используется верблюд, и если функция написана как сейчас, она везде доступна, а если в переменной, то только по ходу выполнения
function sayHello() {
    $box.remove()
}


let obj = {
    name: "Vanya",
    age: 0.7,
    sayHello: function () {
        console.log("Hello");
    }
};

console.log(obj.name);

obj.sayHello();