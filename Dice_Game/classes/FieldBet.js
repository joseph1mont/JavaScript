function FieldBet () {																// Field Bet game 

	this.mStartFieldBet = function()												// if point field != 0 in Pass Line game user can not start this game
	{
		if (oCalculation.mPointIsEmpty())
		{	
			var r = confirm("Do you want to start a new Field Bet game ?");
			if (r == true)
			{
				oGameChoosen.mReturnDivs();									// to return the div choosen before to its place
				oGameChoosen.animate2();									// moving this game div to toward Choosen game div
				oCalculation.mSetAmount();									// Enter a valid amount to start the game
				document.getElementById("bet").value = 0;
// ==========================================================================How to play Field Bet game
				document.getElementById("Help").innerHTML = "<h3>FIELD BET</h3>  In this game you roll the dice just once.<br />If the total is 3,4,9,10 or 11, then you win the amount of the bet.<br />If the total is 12, then you win triple the bet.<br />For any other total of the dice, you lose the amount of the bet.<br />";
// ==========================================================================Welcome message				
				document.getElementById("messages").innerHTML = "Enjoy with Field Bet <br/>Roll the dice to start<br />";
			}
		}

	}
// ==========================================================================Calculation method
	this.mFieldBetCalculation = function()
	{
		var intDice = parseInt(oCalculation.pDice);
		var intBet = parseInt(oCalculation.pBet);
		var intAmount = parseInt(oCalculation.pAmount);
		if (intDice == 3 || intDice == 4 || (intDice >=9 && intDice <= 11))						// user win the bet
		{
			intBet *= 2;
			document.getElementById("messages").innerHTML += "You win your bet<br />";
		}
		else if (intDice == 2)																	// user win double of the bet
		{
			intBet *= 3;
			document.getElementById("messages").innerHTML += "You win double your bet<br />";
		}
		else if (intDice == 12)																	// user win triple of the bet
		{
			intBet *= 4;
			document.getElementById("messages").innerHTML += "You win triple your bet<br />";
		}
		else																					// otherwise user loose the bet
		{
			intBet = 0;
			document.getElementById("messages").innerHTML += "You loose your bet<br />";
		}
		intAmount += intBet;

		document.getElementById("bankRoll").value = intAmount;									// modify amount and bet values on the screen
		oCalculation.pAmount = intAmount;			
		document.getElementById("bet").value = 0;
		if (oCalculation.pAmount ==0) document.getElementById("messages").innerHTML += "... GAME OVER ...<br />";
	}
	
}