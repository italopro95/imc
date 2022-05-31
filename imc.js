function calc () {
    var pe = parseFloat("");
    var alt = parseFloat("");
    var tot;
    
    pe = document.getElementById('peso').value;
    alt = document.getElementById('altura').value;

    if (pe <= 0 || alt <= 0) {
       document.getElementById('resultado').innerHTML = "Digite um número válido"
    }

    else {
        
        tot = pe /(alt*alt);
    
        if (tot < 18.5)  {
           document.getElementById('resultado').innerHTML = ("Abaixo do peso: " + tot.toFixed(2)); 
        }
    
        else if (tot >= 18.5 &&  tot < 25) {
            document.getElementById('resultado').innerHTML = ("Peso ideal: " + tot.toFixed(2));
        }
    
        else if (tot >= 25 && tot < 30) {
           document.getElementById('resultado').innerHTML = ('Sobrepeso: ' + tot.toFixed(2));
        }
    
        else if (tot >= 30 && tot < 40) {
           document.getElementById('resultado').innerHTML = ("Obesidade: " + tot.toFixed(2));
        }
    
        else if (tot >= 40) {
           document.getElementById('resultado').innerHTML = ("Obesidade Mórbida: " + tot.toFixed(2));
        }
    
    }

}