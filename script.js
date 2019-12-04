let boxCount = 0;
let sumCount = 0.00;

window.onload = function () {


    let btn = document.getElementById('add');
    btn.addEventListener('click', function () {
        alert('Dziękujemy za zakupy. \n Kupiłeś : '+boxCount+' przedmiotów,\n za łączną kwotę : ' +sumCount)});

    let btn1 = document.getElementById('clear');
    btn1.addEventListener('click', function () {
        alert('WYCZYSZONO');
        alert('GO');
    });
const produkt = document.getElementsByClassName('cart-button');
 for (let i = 0; i<produkt.length; i++) {
     produkt[i].addEventListener('click', dodaj);
 }
function dodaj() {
     if (boxCount <= 7) {
         boxCount++;
         let element1 = document.createElement('div');
         element1.textContent='1';
         element1.id = 'info1';
         element1.classList.add('info1');
         document.getElementById('info').appendChild(element1);
         let e1 = document.createElement('p');
         e1.innerHTML = 'Produkt';
         e1.classList.add('name');
         document.getElementById('info1').appendChild(e1);
         let e2 = document.createElement('button');
         e2.innerHTML = 'USUN';
         document.getElementById('info1').appendChild(e2);
         let end = document.createElement('div');
         document.getElementById('info').appendChild(end);
         console.log(boxCount);
     } else {
         alert('Możesz kupić tylko 8');
     }

}
}


