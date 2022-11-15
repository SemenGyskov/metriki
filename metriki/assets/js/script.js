// // Работа с классами
// let elem = document.getElementById('elem');

// // 1

// elem.classList.add('www.');
// console.log(elem);

// // 2

// elem.classList.remove('www.');
// console.log(elem);

// // 3

// let contains = elem.classList.contains('www.');
// console.log(contains);

// // 4

// elem.classList.add('www');
// elem.classList.remove('www');
// console.log(elem);

// // 5
// let values = elem.classList.length;
// console.log(values);

// // 6 
// elem.classList.add('aaa');
// elem.classList.add('bbb');
// elem.classList.add('ccc');

// let classNames = elem.classList
// for (let className of classNames){
//     console.log(className)
// }

// // работа с CSS

// // 1
// elem.style.cssText = 'color: red; font-size: 30px; border: 3px solid black;'

// // tagName

// // 1
// function func(){
//     console.log(elem.tagName)
// };
// elem.addEventListener('click', func);

// // 2
// function funclower(){
//     console.log(elem.tagName.toLowerCase())
// };
// elem.addEventListener('click', funclower);

// // 3
// let www = document.getElementsByClassName('ff');
// for (i = 0;i < www.length; i++){
//     console.log(www[i])
//     www[i].innerHTML += ' ' + www[i].tagName.toLowerCase()
// }

// // appendChild

// // 1
// let ol = document.getElementById('list');
// let li = document.createElement('li');
// li.innerHTML = 'пункт';
// ol.appendChild(li);

// // 2
// let arr = ['first','second','third'];
// for (i = 0; i < arr.length; i++){
//     let ul = document.getElementById('test');
//     let li = document.createElement('li');
//     li.innerHTML = arr[i];
//     ul.appendChild(li);
// }

// // insertAdjacentHTML

// // 1
// let elem2 = document.getElementById('elem2');
// let elemspan = document.getElementById('span');
// let newSpan = document.createElement('span');
// newSpan.innerHTML = '!!!';
// elem2.before(newSpan);

// // 2
// elem2 = document.getElementById('elem2');
// elemspan = document.getElementById('span');
// let newSpan1 = document.createElement('span');
// newSpan1.innerHTML = '!!!';
// elem2.after(newSpan1);

// // 3
// elem2 = document.getElementById('elem2');
// elemspan = document.getElementById('span');
// let newSpan2 = document.createElement('span');
// newSpan2.innerHTML = '!!!';
// elem2.append(newSpan2);

// // 4
// elem2 = document.getElementById('elem2');
// elemspan = document.getElementById('span');
// let newSpan3 = document.createElement('span');
// newSpan3.innerHTML = '!!!';
// elem2.prepend(newSpan3);

// // удаление и клонирование

// // 1

// let child = document.getElementById('child')
// function del(){
//     if (child.parentNode) {
//         child.parentNode.removeChild(child);
//       }
// }
// btnremove.addEventListener('click', del)

// // 2

// let parent = document.getElementById('parent2');
// child = document.getElementById('child2');
// let btn = document.querySelector('.btn');

// btn.addEventListener('click',func)

// function func(){
//     console.log(parent.lastChild)
//     parent.removeChild(parent.lastChild)
// }

// // 3

// function func(){
//     let d = document.getElementById("d")
//     d.parentElement.removeChild(d);
// }

// // 4
// const parent4 = document.querySelector('.parent4');
// parent4.addEventListener('click',function(f){
//     let targetItem = f.target;
//     targetItem.remove()
// })
// // не решил

// // 5

// const parent = document.querySelector('.parent');
// parent.addEventListener('click',function(e){
//     let targetItem = e.target;
//     console.log(targetItem)
// })

// const buttonAdd = document.querySelector('.btn__add');
// buttonAdd.addEventListener('click', function(e){
//     parent.insertAdjacentHTML('beforeend','<button class="btn">Кнопка</button>')
// })

// // потомки

// // 1,2,3

// let elem = document.getElementById('parent4')

// function func(){
//     elem.firstElementChild.style.color = 'red';
//     elem.lastElementChild.style.color = 'red';
//     elem.children.innerHTML = '!'
//     let elems = elem.children;

//     for (let i = 0; i < elems.length; i += 1) {
//         elems[i].innerHTML = `${elems[i].innerHTML}!`;
//     }
// }
// elem.addEventListener('click',func)

// // Соседи

// // 1,2,3

// let inp = document.getElementById('inpguest')

// function guest(){
//     inp.previousElementSibling.innerHTML = '!';
//     inp.nextElementSibling.innerHTML = '!';
//     inp.nextElementSibling.nextElementSibling.innerHTML = '!';
// }


// inp.addEventListener('click',guest)

// // Родители

// // 1,2

// const getSpan25 = document.querySelector('.elem251');
// const elem25 = getSpan25.parentElement;
// const elem26 = elem25.parentElement

// function parentred(){
//     elem25.style.backgroundColor = 'red';
//     elem26.style.backgroundColor = 'black';
// };

// elem25.addEventListener('click', parentred );

// // На величину границы

// // 1

// let elem75 = document.getElementById('elem75');

// function border(){
//     alert('top border = ' + elem75.clientTop + 'px')
//     alert('left border = ' + elem75.clientLeft + 'px')
// }

// elem75.addEventListener('click',border)

// На полный размер элемента

// 1,2

// let elem76 = document.getElementById('elem76');

// function border(){
//     alert('Width = ' + elem76.offsetWidth + 'px')
//     alert('Height = ' + elem76.offsetHeight + 'px')
// }

// elem76.addEventListener('click',border)

// // На размер элемента без границ, но с padding

// // 1,2

// let elem77 = document.getElementById('elem77');

// function client(){
//     alert('Width = ' + elem77.clientWidth + 'px')
//     alert('Height = ' + elem77.clientHeight + 'px')
// }

// //Работа с getComputedStyle

// let elem78 = document.getElementById('elem78');
// let comp = getComputedStyle(elem78)
// function dkc(){
//     var computedStyle = getComputedStyle(elem78)
//     var width = parseInt(computedStyle.getPropertyValue('width'));
//     var height = parseInt(computedStyle.getPropertyValue('height'));
//     alert('width = ' + width + 'px')
//     alert('width = ' + height + 'px')
// }

// elem78.addEventListener('click',dkc)

// // Прокрутка элемнтов

// // 1,2

// let elem79 = document.getElementById('elem79');


// function scroll(){
//     var a = Math.trunc(elem79.scrollTop)
//     var b = Math.trunc(elem79.scrollLeft)
//     alert(a + 'px')
//     alert(b + 'px')
// }

// elem79.addEventListener('click',scroll);

// function prokrut(){
//     var a = Math.trunc(elem79.scrollTop)
//     elem79.scrollTo( a + 100, 0);
// }

// elembtn.addEventListener('click',prokrut)

// 4

let elem34 = document.querySelector('#elem34');
function scroll34() 
{
    elem34.scrollTop = -100;
}

// 5

let elem35 = document.querySelector('#elem35');
function scroll35() 
{
    elem35.scrollTop = 100;
}

// Прокрутка Элемента

// 1

var elem38 = document.getElementById('elem38');
function func38() {
	var total_height = elem38.scrollHeight;
	elem38.scrollTop = total_height - 100;
}

// Прокрутка страницы

// 1
var elem39 = document.getElementById('elem39');
function func39() {
    alert(elem40.pageYOffset)
}

// 2

var elem40 = document.getElementById('elem40');
function func40() {
    alert(elem40.pageXOffset)
}

// Прокрутка страницы

// 1

var elem41 = document.getElementById('elem41');
function func41() {
	window.scrollTo(300, 500);
}

// 2

function func42() {
    window.scrollBy(0, 300);
}

// Практика

// 1

function func43(){
    window.scrollTo(0,document.body.clientHeight)
}

// 2

function func44() {
	window.scrollTo(0, 400);
}

// 3

var button44 = document.getElementById('button44');
function func44() {
	var body = document.documentElement;
	if (body.scrollHeight - body.scrollTop == body.clientHeight) {
		window.scrollTo(0, 100);
	}
}

// 4

function func45() {
	let elem45 = document.getElementById("elem45");
    elem45.style.width * 2;
    elem45.style.heigth * 2;
}
