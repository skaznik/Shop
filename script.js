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
         let cena = parseFloat(this.value);
         console.log(cena);
         sumCount = sumCount + cena;
         console.log(sumCount);
         document.getElementById('sumCount').innerHTML = sumCount +" PLN";
         boxCount++;
         console.log(boxCount);

     } else {
         alert('Możesz kupić tylko 8');
     }

}
}


