

const real = document.getElementById('true_1') as HTMLBodyElement;
const real2 = document.getElementById("true1") as HTMLBodyElement;
const point = document.getElementById('point') as HTMLBodyElement;
const started = document.getElementById('start') as HTMLBodyElement;
const bar = document.getElementById('parce') as HTMLBodyElement | any;


let pointer: number = 0;
let maker: number = 5;
// localStorage.setItem('ponto', pointer);
// point.innerHTML = pointer;


real.addEventListener('click', function () {
    real.style.backgroundColor = '#38B000';
    real2.style.backgroundColor = '#006400';
    bar.style.display = "block";


    localStorage.clear()


    let reste = point.innerText = `${pointer + maker}`;
    localStorage.setItem('ponto', reste);
    localStorage.getItem('ponto' + 5);

})

let puxa: Storage | any = localStorage.getItem('ponto');
point.innerHTML = puxa;


const eror1 = document.getElementById('false_1') as HTMLBodyElement;
const eror2 = document.getElementById('false1') as HTMLBodyElement;

const eror3 = document.getElementById('false_2') as HTMLBodyElement;
const eror4 = document.getElementById('false2') as HTMLBodyElement;

const eror5 = document.getElementById('false_3') as HTMLBodyElement;
const eror6 = document.getElementById('false3') as HTMLBodyElement;


eror1.addEventListener('click', function () {
    eror1.style.backgroundColor = '#C1121F';
    eror2.style.backgroundColor = '#780000';

    eror3.style.backgroundColor = '#C1121F';
    eror4.style.backgroundColor = '#780000';

    eror5.style.backgroundColor = '#C1121F';
    eror6.style.backgroundColor = '#780000';

    real.style.backgroundColor = '#38B000';
    real2.style.backgroundColor = '#006400';
})


// ___________________________________________________________

const reload = document.getElementById('reload') as HTMLButtonElement;

reload.addEventListener('click', function () {
    window.location.href = "entrada/entrada.html"

})

// ___________________________________________________________

const final = document.getElementById('final_score') as HTMLBodyElement| any;
let finish = localStorage.getItem('ponto');
final.innerText =  finish;

