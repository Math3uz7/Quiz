"use strict";
// const bt = document.getElementById('button') as HTMLButtonElement;
// bt.addEventListener('click', function(){
//      window.location.href ="../index.html"
// })
// _________________________________________________________________________
const real = document.getElementById('true_1');
const real2 = document.getElementById("true1");
let pointer = 0;
const point = document.getElementById('point');
point.innerText = `${pointer}`;
let init = 1;
const quest = document.getElementById('start');
quest.innerText = `${init}`;
real.addEventListener('click', function () {
    real.style.backgroundColor = '#38B000';
    real2.style.backgroundColor = '#006400';
    point.innerText = `${pointer = 5}`;
});
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
const reload = document.getElementById('reload');
reload.addEventListener('click', function () {
    window.location.href = "/entrada/entrada.html";
});
