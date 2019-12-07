let boxCount = 0;
let sumCount = 0.00;

window.onload = function () {


    let btn = document.getElementById('add');
    btn.addEventListener('click', function () {
        alert('Dziękujemy za zakupy. \n Kupiłeś : ' + boxCount + ' przedmiotów,\n za łączną kwotę : ' + sumCount)
    });

    let usun = document.getElementById('clear');
    usun.addEventListener('click', function () {
        alert('WYCZYSZONO');
        alert('GO');
    });
    let btn1 = document.getElementById('add1');
    let btn2 = document.getElementById('add2');
    let btn3 = document.getElementById('add3');
    let btn4 = document.getElementById('add4');
    let btn5 = document.getElementById('add5');
    let btn6 = document.getElementById('add6');
    let btn7 = document.getElementById('add7');
    let btn8 = document.getElementById('add8');
    let btn9 = document.getElementById('add9');
    let btn10 = document.getElementById('add10');
    let btn11 = document.getElementById('add11');

    btn1.addEventListener("click", dodaj);
    btn2.addEventListener("click", dodaj);
    btn3.addEventListener("click", dodaj);
    btn4.addEventListener("click", dodaj);
    btn5.addEventListener("click", dodaj);
    btn6.addEventListener("click", dodaj);
    btn7.addEventListener("click", dodaj);
    btn8.addEventListener("click", dodaj);
    btn9.addEventListener("click", dodaj);
    btn10.addEventListener("click", dodaj);
    btn11.addEventListener("click", dodaj);

    function dodaj() {
        if (boxCount <= 7) {
            p0 = document.querySelector('h1');
            p1 = p0.innerText;
            console.log(p1);
            c0 = document.querySelector('.price');
            c1 = c0.innerText;
            console.log(c1);
            let t1 = document.createElement('tr');
            t1.classList.add('tr1');
            t1.innerHTML = "<tr>"
            t1.setAttribute("id", "tr1");
            document.getElementById('table').appendChild(t1);
            console.log(t1);
            let td1 = document.createElement('td');
            td1.classList.add('td1');
            td1.innerHTML = "<td>test</td>";
            td1.setAttribute("id", "td1");
            document.getElementById('tr1').appendChild(td1);
            console.log(td1);
            let td2 = document.createElement('td');
            td2.classList.add('td2');
            td2.innerHTML = "<td><button>USUN</button></td>"
            td2.setAttribute("id", "td2");
            document.getElementById('tr1').appendChild(td2);
            console.log(td2);
            let tk1 = document.createElement('tr');
            tk1.classList.add('tr1');
            tk1.innerHTML = "</tr>"
            tk1.setAttribute("id", "tr1");
            document.getElementById('table').appendChild(tk1);
            let t2 = document.createElement('tr');
            t2.classList.add('tr2');
            t2.innerHTML = "<tr>"
            t2.setAttribute("id", "tr2");
            document.getElementById('table').appendChild(t2);
            console.log(t2);
            let td3 = document.createElement('td');
            td3.classList.add('td3');
            td3.innerHTML = "<td>Cena: </td>"
            td3.setAttribute("id", "td3");
            document.getElementById('tr2').appendChild(td3);
            console.log(td3);
            let tf1 = document.createElement('tfoot');
            tf1.classList.add('tf1');
            tf1.innerHTML = "<tfood></tfood>"
            tf1.setAttribute("id", "tf1");
            document.getElementById('tr2').appendChild(tf1);
            document.getElementById('table').appendChild(tk1);
            let tk2 = document.createElement('tr');
            tk2.classList.add('tr2');
            tk2.innerHTML = "</tr>";
            document.getElementById('table').appendChild(tk2);
            boxCount++;
            console.log(boxCount);
        } else {
            alert('Możesz kupić tylko 8');
        }
    }
}