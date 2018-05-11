function readInput(){    
        var numberReaded = document.getElementById("number").value;
        var resultSpan = document.getElementById("result");
        
        // Czyszczenie pola przed ewentualnym ponownym nadpisaniem.
        resultSpan.textContent = "";
    
       
        // Sprawdzanie poprawności wpisanego numeru
        // oraz zamian ewentualnych wielkich liter na małe.
        if(numberReaded.length === 11){
            var number = [], decodedNumber;
 
            if(numberReaded.charAt(3) === "-" && numberReaded.charAt(7) === "-" && numberReaded.length === 11){
                for (i = 0; i < 11; i++) {  
                    number[i] = numberReaded.charAt(i).toLowerCase();             
                } 
            }   
                
            // Podmiana liter na cyfry. 
            
             for (i = 0; i < 11; i++) {
                 
                 if(number[i] == "a" || number[i] == "b" || number[i] == "c")
                     number[i] = 2;
                 
                if(number[i] == "d" || number[i] == "e" || number[i] == "f")
                    number[i] = 3;
                 
                if(number[i] == "g" || number[i] == "h" || number[i] == "i")
                    number[i] = 4;
              
                if(number[i] == "j" || number[i] == "k" || number[i] == "l")
                    number[i] = 5;
                  
                if(number[i] == "m" || number[i] == "n" || number[i] == "o")
                    number[i] = 6;
                   
                if(number[i] == "p" || number[i] == "q" || number[i] == "r" || number[i] == "s")
                    number[i] = 7;               

                if(number[i] == "t" || number[i] == "u" || number[i] == "v")
                    number[i] = 8;
                   
                if(number[i] == "w" || number[i] == "x" || number[i] == "y" || number[i] == "z")
                    number[i] = 9;
                 
                // Wypisanie "odszyfrowanego" numeru.
                resultSpan.textContent += number[i];              
             }         
        }
        
        else 
            resultSpan.textContent = "Wprowadzony numer jest niepoprawny lub nie jest w prawidłowym formacie.";
}

