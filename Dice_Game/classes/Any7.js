function Any7 () {																// Field Bet game 

	this.mStartAny7 = function()												// if point field != 0 in Pass Line game user can not start this game
	{
		if (oCalculation.mPointIsEmpty())
		{
			var r = confirm("Do you want to start a new Any 7 game ?");
			if (r == true)
			{
				oGameChoosen.mReturnDivs();										// to return the div choosen before to its place
				oGameChoosen.animate3();										// moving this game div to toward Choosen game div
				oCalculation.mSetAmount();										// Enter a valid amount to start the game
				document.getElementById("bet").value = "";
				// ==========================================================================How to play Any 7 game
				document.getElementById("Help").innerHTML = "<h3>ANY 7</h3>  In this game you roll the dice just once.<br />If the total is rqual to 7, then you win quadruple the bet.<br />For any other total of the dice, you lose the amount of the bet.<br />";
// ==========================================================================Welcome message								
				document.getElementById("messages").innerHTML = "Enjoy with Any 7 <br />Roll the dice to start<br />";
			}
		}

	}
// ==========================================================================Calculation method
	this.mAny7Calculation = function()
	{
		var intDice = parseInt(oCalculation.pDice);
		var intBet = parseInt(oCalculation.pBet);
		var intAmount = parseInt(oCalculation.pAmount);
		if (intDice == 7) 																				// if total dice equal to 7 user win 4 * bet
		{
			intBet *= 5;
			document.getElementById("messages").innerHTML += "You win quadruple of your bet<br />";
			intAmount += intBet;
			document.getElementById("bankRoll").value = intAmount;
			oCalculation.pAmount = intAmount;			
		}
		else																							// otherwise user loose
		{
			document.getElementById("messages").innerHTML += "Totat dice is not equal to 7.....  You loose your bet: " + intBet + "<br />";
		}
		document.getElementById("bet").value = 0;
		if (oCalculation.pAmount ==0) document.getElementById("messages").innerHTML += "... GAME OVER ...<br />";
	}
}