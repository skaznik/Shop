/* ss Nie mieszać polskich nazw z angielskimi. */

let boxCount = 0;
let sumCount = 0.00;

window.onload = function () {


    let btn = document.getElementById('add');
    btn.addEventListener('click', function () {
        alert('Dziękujemy za zakupy. \n Kupiłeś : ' + boxCount + ' przedmiotów,\n za łączną kwotę : ' + sumCount)
    });

    document.getElementById('basket').addEventListener('click', function (e) {
        if (e.target.classList.contains('remove-cart-product')) {
            removeElement(e.target);
        }
    });

    let btn1 = document.getElementById('clear');
    btn1.addEventListener('click', clearShopingCart);




    const product = document.getElementsByClassName('cart-button');
    for (let i = 0; i < product.length; i++) {
        product[i].addEventListener('click', addProduct);
    }

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
            console.log(price);
            console.log(name);
            sumCount = sumCount + price;
            console.log(sumCount);
            document.getElementById('sumCount').innerHTML = sumCount.toFixed(2);
            let newP = document.createElement('div');
            newP.classList.add('cart-produkt');
            newP.setAttribute('id', 'card-product');
            let newName = document.createElement('p');
            newName.innerHTML = name;
            let newBtnClear = document.createElement('button');
            newBtnClear.classList.add('remove-cart-product');
            newBtnClear.setAttribute('value', price);
            newBtnClear.innerHTML = "USUN";
            let newLine = document.createElement('p');
            newLine.innerHTML = "<hr>"
            let newPrice = document.createElement('p');
            newPrice.setAttribute('id', 'price');
            newPrice.innerHTML = price;
            newP.appendChild(newName);
            newP.appendChild(newPrice);
            newP.appendChild(newBtnClear);
            newP.appendChild(newLine);
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
        //let newSumCount = document.getElementById('sumCount');
        //newSumCount.innerText = '0,00';
        updateSum(sumCount);
        console.log(boxCount);
    }
    function updateSum(value) {
        document.getElementById('sumCount').innerHTML = sumCount.toFixed(2);
    }

    /* ss Nazwa metody w j. angielskim removeProduct */
    /* ss 6. UstawiÄ‡ eventLister na obiekcie o id basket a w nim sprawdzaÄ‡ czy klikniÄ™ty element ma klasÄ™ remove-cart-product */
    /* ss    jeĹ›li tak to odnosimy siÄ™ do rodzica, bÄ™dzie do div o klasie cart-product - usuwamy go */
    /* ss Od ceny koszyka odejmujemy cenÄ™ produktu usuniÄ™tego z koszyka */
    function removeElement(clickedElement) {
        let elementToRemove = clickedElement.parentElement;
        document.getElementById('basket').removeChild(elementToRemove);
        sumCount -= parseFloat(clickedElement.value);
        updateSum(sumCount);
        boxCount --;
    }
}
