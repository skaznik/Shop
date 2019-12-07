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
         let cena = parseFloat(this.value)
         p0 = document.querySelector('h1');
         p1 = p0.innerText;
         console.log(p1);
         c0 = document.querySelector('.price');
         c1 = c0.innerText;
         console.log(c1);
         let t1 = document.createElement('tr');
         t1.classList.add('tr1');
         t1.setAttribute("id", "tr1");
         document.getElementById('table').appendChild(t1);
         console.log(t1);
        let td1 = document.createElement('td');
        td1.classList.add('td1');
        td1.innerHTML = "test"
        td1.setAttribute("id", "td1");
        document.getElementById('tr1').appendChild(td1);
        console.log(td1);
         let td2 = document.createElement('td');
         td2.classList.add('td2');
         td2.setAttribute("id", "td2");
         document.getElementById('tr1').appendChild(td2);
         console.log(td2);
         let t2 = document.createElement('tr');
         t2.classList.add('tr2');
         t2.setAttribute("id", "tr2");
         document.getElementById('table').appendChild(t2);
         console.log(t2);
         let td3 = document.createElement('td');
         td3.classList.add('td3');
         td3.innerHTML = " Cena :"+cena;
         td3.setAttribute("id", "td3");
         document.getElementById('tr2').appendChild(td3);
         console.log(td3);
         let tf1 = document.createElement('tfoot');
         tf1.classList.add('tf1');
         tf1.setAttribute("id", "tf1");
         document.getElementById('tr2').appendChild(tf1);
         boxCount++;
         console.log(boxCount);
     } else {
         alert('Możesz kupić tylko 8');
     }

}
}


