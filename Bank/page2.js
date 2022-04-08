 const btn =  document.querySelector('#submit').onclick=function(){

        var price = prompt("Сума кредита");
        var pay = prompt("Перший платіж");
        var percent = prompt("Процентоваставка");
        var years = prompt("Термін кредита");
        
        
        var i = parseFloat( percent / 100 / 12 );
        var n = parseFloat( years * 12 );
        var ipoteka = ( price - pay ) * ( ( i * Math.pow( 1+i, n ) ) / ( Math.pow( 1+i, n ) - 1 ) );
        Math.floor(ipoteka);
        alert(ipoteka);
 

 }