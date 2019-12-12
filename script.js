let boxCount = 0;
let sumCount = 0.00;

window.onload = function () {


    let btn = document.getElementById('add');
    btn.addEventListener('click', function () {
        alert('Dziękujemy za zakupy. \n Kupiłeś : '+boxCount+' przedmiotów,\n za łączną kwotę : ' +sumCount)});

    let btn1 = document.getElementById('clear');
    btn1.addEventListener('click', usun_all);


    //let btn2 = document.getElementById('usun');
    // btn2.addEventListener('click',usun);


const produkt = document.getElementsByClassName('cart-button');
 for (let i = 0; i<produkt.length; i++) {
     produkt[i].addEventListener('click', dodaj);
 }
 const btn2 = document.getElementById('usun');
 for (let j = 0; j<boxCount.length; j++) {
     btn2[j].addEventListener('click', usun);
 }
 if (boxCount > 0) {

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
        let newNr = document.createElement('div');
        newNr.setAttribute('class', 'koszyk1');
        newNr.setAttribute('id', 'koszyk1');
        //newNr.innerHTML = name + '<p><button id="usun">USUN</button></p>';
        document.getElementById('koszyk').appendChild(newNr);
        let newName = document.createElement('p');
        newName.setAttribute('id', 'name');
        newName.innerHTML = name;
        document.getElementById('koszyk1').appendChild(newName);
         let newBtnUsun = document.createElement('button');
         newBtnUsun.setAttribute('id', 'usun');
         newBtnUsun.innerHTML = 'USUN';
         document.getElementById('koszyk1').appendChild(newBtnUsun);
        let newCena = document.createElement('div');
        newCena.setAttribute('id', 'newCena');
        newCena.innerHTML = cena + ' PLN';
        document.getElementById('koszyk').appendChild(newCena);
           } else {
         alert('Możesz kupić tylko 8');
     }

}
 function usun_all() {
     let usun_all = document.getElementById('koszyk');
     let rodzic_all = document.getElementById('basket');
     rodzic_all.removeChild(usun_all);
     boxCount = 0;
     sumCount = 0.00;
     let newSumCount = document.getElementById('sumCount');
     newSumCount.innerText = '0,00 PLN';
      }
 function usun() {
     //let usunCena = document.getElementById('newCena');
     //sumCount = (sumCount - usunCena);
     //console.log(usunCena);
    // console.log(sumCount);
    //let usun = document.getElementById('koszyk');
    //let rodzic = document.getElementById('basket');
    //rodzic.removeChild(usun);
     alert('go');
 }
}


