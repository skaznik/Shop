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

         let i1 = document.createElement('span');
         i1.classList.add('name');
        i1.innerHTML = boxCount+". Produkt : ";
        document.getElementById('info1').appendChild(i1);
        let i2 = document.createElement('button');
        i2.classList.add('del');
        i2.innerHTML = "USUN";
        document.getElementById('info1').appendChild(i2);
        let i3 = document.createElement('p');
        i3.classList.add('cena');
        i3.innerHTML = "Cena";
        document.getElementById('info2').appendChild(i3);
         alert('Dodano'+boxCount)
         console.log(boxCount);
     } else {
         alert('Możesz kupić tylko 8');
     }

}
}


