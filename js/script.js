"use strict";

/* if (4 == 9) {
    console.log('Ok!');
} else {
    console.log ('Error');
}



if (num <49) {
    console.log('Error');
} else if (num >100) {
    console.log('Many');
} else {
    console.log('ok');
}

(num === 50) ? console.log('ok!') : console.log('error');
 */
/* const num = 50;

switch (num) {
    case 49:
        console.log('neverno');
        break;
    case 100:
        console.log('neverno');
        break;
    case 50:
        console.log('tochno');
        break;
    default:
        console.log('ne v etot raz');
        break;
} */


/* let num = 50; */
/* 
while (num <= 55) {
    console.log(num);
    num++;
} */

/* do {
    console.log(num);
    num++;
}
while (num <55); */
/* 
for (let i = 1; i < 8; i++) {
    if (i === 6) {
        continue;
        break;
    }
    console.log(i);
} */
/* Задание на урок:
1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя 
на вопрос:
'Сколько фильмов вы уже посмотрели?'
2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false
3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }
Проверить, чтобы все работало без ошибок в консоли */



const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genges: [],
    privat: false
}; 


for (let i = 0; i<2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

          if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done!');
          } else {
              console.log('error');
              i--;
          }
}

if (personalMovieDB < 10) {
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}

console.log(personalMovieDB);






/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/



// Код возьмите из предыдущего домашнего задания






//016

let num = 20;

function showFirstMessage(text, arg) {
    console.log(text, arg);
    let num = 10;
    console.log(num);
}

showFirstMessage("Ni Hao", "bu hao");
console.log(num);




function calc(a, b) {
    return (a + b);
}

console.log(calc(4 ,3));
console.log(calc(5 ,6));
console.log(calc(10 ,6));




function ret () {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);



const logger = function() {
    console.log("hello");
};

logger();



const calc = (a, b) => a + b;

const calc = (a, b) => {
    console.log('1');
    return a + b;
};




const str = "test;";


console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);



const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));


const logg = "Hello world";

/* console.log(logg.slice(6, 11));

console.log(logg.substring(6, 11)); */

console.log(logg.substr(6, 5));



const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));