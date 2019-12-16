/* ss Nie mieszać polskich nazw z angielskimi. */

let boxCount = 0;
let sumCount = 0.00;

window.onload = function () {


    let btn = document.getElementById('add');
    btn.addEventListener('click', function () {
        alert('Dziękujemy za zakupy. \n Kupiłeś› : ' + boxCount + ' przedmiotów,\n za łączną kwotę : ' + sumCount)
    });

    let btn1 = document.getElementById('clear');
    btn1.addEventListener('click', clearShopingCart);


    //let btn2 = document.getElementById('usun');
    // btn2.addEventListener('click',usun);


    const product = document.getElementsByClassName('cart-button');
    for (let i = 0; i < product.length; i++) {
        product[i].addEventListener('click', addProduct);
    }


        const remove = document.getElementById('basket');
        for(let i = 0; i <remove.length; i++) {
            remove[i].addEventListener('click', removeProduct);
            //console.log('usuwanie');
        }
    //let btnRemove = document.getElementById('basket');
        //btnRemove.addEventListener('click',removeProduct);
        //console.log("usuwanie");


    /* ss Nazwa metody w j. angielskim addProduct */
    /* ss Etapy: */
    /* ss 1. UtworzyÄ‡ div ustawiÄ‡ tylko class np. cart-product */
    /* ss 2. UtworzyÄ‡ poszczegĂłlne elementy: nazwa, cena, przycisk usuĹ„ i dodaÄ‡ do nich wartoĹ›ci */
    /* ss 3. Dla przycisku usun ustawiÄ‡ class np. remove-cart-product */
    /* ss 4. DodaÄ‡ wszystkie te elementy do div'a */
    /* ss 5. DodaÄ‡ ten div do elementu zbiorczego w Pana przypadku o klasie basket */
    function addProduct() {
        if (boxCount <= 7) {
            boxCount++;
            let price = parseFloat(this.value);
            let name = this.title;
            let newID = Math.random();
            console.log(price);
            console.log(name);
            console.log(newID);
            sumCount = sumCount + price;
            console.log(sumCount);
            document.getElementById('sumCount').innerHTML = sumCount.toFixed(2) + " PLN";
            let newP = document.createElement('div');
            newP.classList.add('cart-produkt');
            newP.setAttribute('id', 'card-product');
            let newName = document.createElement('p');
            newName.innerHTML = name;
            let newBtnClear = document.createElement('button');
            newBtnClear.classList.add('remove-cart-product');
            newBtnClear.setAttribute('value', price);
            newBtnClear.innerHTML = "USUN";
            //newName.innerHTML = name + newBtnClear;
            let newPrice = document.createElement('p');
            newPrice.setAttribute('id', 'price');
            newPrice.innerHTML = price + "PLN";
            newP.appendChild(newName);
            newP.appendChild(newBtnClear);
            newP.appendChild(newPrice);
            document.getElementById('basket').appendChild(newP);

        } else {
            alert('Możesz kupić tylko 8');
        }

    }

    /* ss Nazwa metody w j. angielskim clearShoppingCart */
    function clearShopingCart() {
        //let clearAll = document.getElementsByClassName('card-product');
        //let parentAll = document.getElementsByClassName('basket');
        //let parentAll = clearAll.parentNode;
        for(let i = 0; i<boxCount;i++) {
            let clearAll = document.getElementById('card-product');
            let parentAll = document.getElementById('basket');
            parentAll.removeChild(clearAll);
        }
        boxCount = 0;
        sumCount = 0.00;
        let newSumCount = document.getElementById('sumCount');
        newSumCount.innerText = '0,00 PLN';
        console.log(boxCount);
    }

    /* ss Nazwa metody w j. angielskim removeProduct */
    /* ss 6. UstawiÄ‡ eventLister na obiekcie o id basket a w nim sprawdzaÄ‡ czy klikniÄ™ty element ma klasÄ™ remove-cart-product */
    /* ss    jeĹ›li tak to odnosimy siÄ™ do rodzica, bÄ™dzie do div o klasie cart-product - usuwamy go */
    /* ss Od ceny koszyka odejmujemy cenÄ™ produktu usuniÄ™tego z koszyka */
    function removeProduct() {
        //let usunCena = document.getElementById('newCena');
        //sumCount = (sumCount - usunCena);
        //console.log(usunCena);
        // console.log(sumCount);
        //let usun = document.getElementById('koszyk');
        //let rodzic = document.getElementById('basket');
        //rodzic.removeChild(usun);
        //alert('go');
        console.log('usuwanie');
        let child = document.getElementsByClassName('remove-cart-product');
        let removePrice = child.value;
        console.log('usuwana cena : ' + removePrice);
        sumCount =- removePrice;
        console.log('aktualnie w koszyku : ' + sumCount);
        let newSumCount = document.getElementById('sumCount');
        newSumCount.innerText = sumCount + 'PLN';
        //boxCount--;
        //let child = document.getElementsByClassName('remove-cart-product');
        //let parrent = child.parentNode;
        //parrent.removeChild(child);
        //sumCount = sumCount - this.price;
    }
}
