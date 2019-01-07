function PassLine () {														// Pass Line game 
	
	this.mStartPassLine = function()
	{
		if (oCalculation.mPointIsEmpty())									// if point field != 0 user can not start a new game
		{	
			var r=confirm("Do you want to start a new Pass Line game?");
			if (r==true)
			{
				oGameChoosen.mReturnDivs();									// to return the div choosen before to its place
				oGameChoosen.animate1();									// moving this game div to toward Choosen game div
				oCalculation.mSetAmount();									// Enter a valid amount to start the game
				document.getElementById("bet").value = 0;
				
// ==========================================================================How to play Pass Line game
				document.getElementById("Help").innerHTML = "<h3>PASS LINE</h3>In this game you roll the dice and look at the total.<br />If the total equal to 7 or 11, then you win the amount of the bet.<br />Any other total becomes the 'point'...<br />and you continue to roll the dice until you either<br />   a- roll the point total again, in which case you win the amount of the bet<br />   b- roll the total of 7, in which case you lose the amount of the bet<br />if the total not 7 and not equal to the point, then you roll again, and continue the roll until either condition (a) or (b) is met";
				
// ==========================================================================Welcome message				
				document.getElementById("messages").innerHTML = "Enjoy with Pass Line <br/>Roll the dice to start<br />";
			}
		}

	}
// ==========================================================================Calculation method
	this.mPassLineCalculation = function()
	{
		var intDice = parseInt(oCalculation.pDice);
		var intBet = parseInt(oCalculation.pBet);
		var intAmount = parseInt(oCalculation.pAmount);
		var intPoint = parseInt(oCalculation.pPoint);
// this block work when no point rest
		if (oCalculation.pPoint == 0)
		{
			if (intDice == 7 || intDice == 11)										// if total 7 or 11 user win the bet
			{
				intBet *= 2;
				document.getElementById("messages").innerHTML += "You win your bet<br />";
				document.getElementById("point").value = 0;
				document.getElementById("bet").value = 0;
				intAmount += intBet;
				document.getElementById("bankRoll").value = intAmount;					// modify the amount on the screen
				oCalculation.pAmount = intAmount;
			}
			else if (intDice == 2 || intDice == 3 || intDice == 12)					// if total 2,3 or 12 user lose the bet
			{
				//intBet = 0;
				document.getElementById("messages").innerHTML += "You loose your bet<br />";
				document.getElementById("point").value = 0;
				document.getElementById("bet").value = 0;
				//intAmount += intBet;
				//document.getElementById("bankRoll").value = intAmount;					// modify the amount on the screen
				oCalculation.pAmount = intAmount;
			}
			else 																	// otherwise the total moved too the point field
			{																		
				document.getElementById("point").value = intDice;				// in this case user can not start a newgame while point != 0
				oCalculation.pPoint = intDice;									// now there is a point so will keep rolling until point is empty (will move to the next block (***) 
				document.getElementById("messages").innerHTML += "You have point: " + intDice + "<br />Keep throwing the roll until get your point or get 7<br /><small>You cannot start a new game at this status<br />";
			}
													// modify the property of the amount
		}

// =================================================this else work when we have a point already (so the roll conditions will change)								(***)
		else 													
		{
				if (intDice == 7)                           						// if point !=0 and dice total = 7      user loose the bet
				{
					intBet = 0;
					document.getElementById("messages").innerHTML += "You loose your bet<br />";
					document.getElementById("point").value = 0;
					oCalculation.pPoint = 0;
					//intAmount -= intBet;
					//document.getElementById("bankRoll").innerHTML = intAmount;
					//oCalculation.pAmount = intAmount;			
					document.getElementById("bet").value = 0;
				}
				else if (intDice == intPoint)										// if point !=0 and dice total = point      user win the bet
				{
					document.getElementById("messages").innerHTML += "You win your bet<br />";
					document.getElementById("point").value = 0;
					oCalculation.pPoint = 0;
					intBet *= 2;
					intAmount += intBet;
					document.getElementById("bankRoll").value = intAmount;
					oCalculation.pAmount = intAmount;			
					document.getElementById("bet").value = 0;
				}
		}
	if (oCalculation.pAmount ==0) document.getElementById("messages").innerHTML += "... GAME OVER ...<br />";
	}
}