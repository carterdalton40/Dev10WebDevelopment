/*	
	Name: Dalton Carter
	Date Created: 09/28/18
	Most recent revision: 09/29/18
*/


//finds the dice roll 
function rollDice(){
	var d1 = Math.floor(Math.random() * 6) + 1;
	var d2 = Math.floor(Math.random() * 6) + 1;
	
	return d1 + d2;
}

function calculate(){
	
	//takes in the starting bet
	var startBet = document.forms["inputData"]["startingBet"].value;
	
	var highestAmount= startBet;
	var bet = startBet;
	
	var totalRolls= 0
	var rollCountAtHighest = 0;
	
	var dice;
	
	//prevents user from clicking play without changing the value
	if (startBet == ""){
		alert("Choose a value greater than 0!");
	}else{
		
		//plays the game until there is no more money
		while (bet > 0){
			
			dice = rollDice();
			totalRolls++;
			
			
			if (dice == 7){
				bet += 4;
			}else {
				bet--;
		    }
		
		//sets the highest amount at the current amount (if current amount is higher)
		  if (bet >= highestAmount){
			highestAmount = bet;
			rollCountAtHighest = totalRolls;
		  }
		
		}
	
	//Display Result Text
	document.getElementById("displayResults").style.display = "block";
	//Show Table
	 document.getElementById("results").style.display = "block";
	//Sets Starting Bet
	 document.getElementById("originalBet").innerText = startBet;
	//Sets Rolls Before Going Broke
	 document.getElementById("totalRolls").innerText = totalRolls;
	//Sets Highest Amount Won
	 document.getElementById("highestAmount").innerText = highestAmount;
	//Sets Roll Count at Highest
	document.getElementById("rollCountAtHighest").innerText = rollCountAtHighest;
	}
	
	return false;
	
}
