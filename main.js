let randomnumber = Math.floor((Math.random() * 10)) + 1;
let guess1 = Number(prompt("Guess lucky number from 1 to 10"));
let userWin = false;

//---------------------------------------------------------------------------------------------

    //PIRVELI CDA 

if (guess1 === randomnumber){
    userWin = true;
    alert("congratulations you guessed");
}
else{

    if (randomnumber < guess1){
        alert("low");
    } else{
        alert("high");
    }

//-------------------------------------------------------------------------------------------

    // MEORE CDA 

    let guess2 = Number(prompt("second guess"));

       if (guess2 === randomnumber){
        userWin = true;
        alert("congratulations u guessed ");
         }
       else{

        if (randomnumber < guess2){
            alert("low");
        } else{
            alert("high");
        }

//-----------------------------------------------------------------------------------------------
      
         // MESAME CDA

        let guess3 = Number(prompt("Last guess"));

        if (guess3 === randomnumber){
            userWin = true;
            alert("congratulations, you guessed it");
        }
        else{ 
            alert("all guessed ended. Right answer: " + randomnumber);
        }
    }
}