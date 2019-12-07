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
        let i0 = document.createElement('div');
        i0.classList.add('info');
        document.getElementById('basket').appendChild(i0);
         let i1 = document.createElement('div');
         i1.classList.add('info');
         i1.setAttribute("id", "info1");
         document.getElementById('info').appendChild(i1);
         let i2 = document.createElement('div');
         i2.classList.add('info1');
         document.getElementById('info').appendChild(i2);
         let i3 = document.createElement('div');
         i3.classList.add('name');
        i3.innerHTML = boxCount+". Produkt : ";
        document.getElementById('info1').appendChild(i3);
        let i4 = document.createElement('button');
        i4.classList.add('del');
        i4.innerHTML = "USUN";
        document.getElementById('info1').appendChild(i4);
        let i5 = document.createElement('p');
        i5.classList.add('cena');
        i5.innerHTML = "Cena";
        document.getElementById('info2').appendChild(i5);
         boxCount++;
         console.log(boxCount);
     } else {
         alert('Możesz kupić tylko 8');
     }

}
}


