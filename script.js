window.onload = function () {
    let boxCount = 0;
    let sumCount = 0.00;

    let btn = document.getElementById('add');
    btn.addEventListener('click', function () {
        alert('Dziękujemy za zakupy. \n Kupiłeś : '+boxCount+' przedmiotów,\n za łączną kwotę : ' +sumCount)});

    let btn1 = document.getElementById('clear');
    btn1.addEventListener('click', function () {
        alert('WYCZYSZONO');
        alert('GO');
    });


}


