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
         let cena = parseFloat(this.value);
         let name = this.title;
         let newID = Math.random();
         console.log(cena);
         console.log(name);
         console.log(newID);
         sumCount = sumCount + cena;
         console.log(sumCount);
         document.getElementById('sumCount').innerHTML = sumCount.toFixed(2) +" PLN";
        let newEl = document.createElement('div');
        newEl.setAttribute('id', 'koszyk');
        newEl.classList.add('koszyk');
        document.getElementById('basket').appendChild(newEl);
        let newNr = document.createElement('p');
        newNr.innerHTML = name;
        document.getElementById('koszyk').appendChild(newNr);
        let newUsun = document.createElement('button');
        newUsun.innerText = 'USUN';
        document.getElementById('koszyk').appendChild(newUsun);
        let newCena = document.createElement('p');
        newCena.innerHTML = cena;
        document.getElementById('koszyk').appendChild(newCena);
        console.log(newEl);
        console.log(newNr);
        console.log(newNr);
        console.log(newUsun);
        console.log(newCena);
        console.log('TADAM');
         console.log(boxCount);

     } else {
         alert('Możesz kupić tylko 8');
     }

}
}


