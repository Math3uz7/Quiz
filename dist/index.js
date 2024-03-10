"use strict";
const real = document.getElementById('true_1');
const real2 = document.getElementById("true1");
const point = document.getElementById('point');
const started = document.getElementById('start');
const bar = document.getElementById('parce');
const final = document.getElementById('final_score');
let pointer = 0;
let maker = 5;
let pointex = "0";
if (localStorage.getItem('ponto') == undefined) {
    localStorage.setItem('ponto', pointex);
    point.innerHTML = pointex;
}
real.addEventListener('click', function () {
    real.style.backgroundColor = '#38B000';
    real2.style.backgroundColor = '#006400';
    bar.style.display = "block";
    localStorage.getItem('ponto' + 5);
    let reste = point.innerText = `${pointer + maker}`;
    localStorage.setItem('ponto', reste);
});
window.onload = function () {
    let storedSize = localStorage.getItem('divSize');
    if (storedSize) {
        const take = document.getElementById('parce');
        take.style.width = storedSize;
    }
};
real.addEventListener('click', function resizeDiv() {
    let div = document.getElementById('parce');
    let currentSize = window.getComputedStyle(div).width;
    if (currentSize === '1px') {
        div.style.width = '50px';
    }
    else if (currentSize === '50px') {
        div.style.width = '100px';
    }
    else if (currentSize === '100px') {
        div.style.width = '150px';
    }
    else if (currentSize === '150px') {
        div.style.width = '210px';
    }
    else {
        div.style.width = '230px';
    }
    localStorage.setItem('divSize', div.style.width);
});
let puxa = localStorage.getItem('ponto');
point.innerHTML = puxa;
const eror1 = document.getElementById('false_1');
const eror2 = document.getElementById('false1');
const eror3 = document.getElementById('false_2');
const eror4 = document.getElementById('false2');
const eror5 = document.getElementById('false_3');
const eror6 = document.getElementById('false3');
eror1.addEventListener('click', function () {
    eror1.style.backgroundColor = '#C1121F';
    eror2.style.backgroundColor = '#780000';
    eror3.style.backgroundColor = '#C1121F';
    eror4.style.backgroundColor = '#780000';
    eror5.style.backgroundColor = '#C1121F';
    eror6.style.backgroundColor = '#780000';
    real.style.backgroundColor = '#38B000';
    real2.style.backgroundColor = '#006400';
});
// ___________________________________________________________
//EXIBIR OS PONTOS FINAIS
let pointer2 = 0;
let maker2 = 5;
let pointex2 = "0";
let reste2 = final.innerText = `${pointer2 + maker2}`;
localStorage.getItem('ponto' + 5);
let puxa2 = localStorage.getItem('ponto');
final.innerHTML = puxa2;
if (localStorage.getItem('ponto') == undefined) {
    localStorage.setItem('ponto', pointex2);
    final.innerHTML = pointex2;
}
// ___________________________________________________________
// RESET BAR AND POINTS
function reset() {
    localStorage.clear();
}
