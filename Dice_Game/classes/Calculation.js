function Calculation()
{	
	this.pAmount;
	this.pBet;
	this.pPoint;
	this.pDice;
//	this.messageToDisplay = function(divName , message)			// ====================================================
//	{															// Method to clear and put a new message will use to :
//	document.getElementById(divName).innerHTML = message;		// 1- Welcome message
//	}															// 2- describe the game choosen
																// ====================================================	

	this.mPointIsEmpty = function()								// enable to change the game only when point field text is empty
	{															// point is used only in Pass Line game
		if (!this.pPoint == 0)
		{
			document.getElementById("messages").innerHTML += "<small>point not equal to 0 ...You Cannot change the game right now</small><br/>";
			return false;
		}
		else
		{
			return true;
		}

	}

	this.mSetBet = function()									// asking user to put the bet for every roll 
	{
		if (oCalculation.pPoint == 0)
		{	
			var valid = false;
			do
			{
				var intBet = prompt("Enter your bet...",10);	// 10 is a default bet value	
				//var intBet = parseInt(sBet);
				var intAmount = parseInt(oCalculation.pAmount);	
			
				if(intBet <= 0 || intBet > intAmount) alert("Not a valid bet...\nPlease try again");		// bet entered by user have to be more tha 0 and less than RollBank
					else valid = true;
			}
			while (valid == false);																			// repeat while bet not valid
			document.getElementById("bet").value = intBet;													// assign the bet value
			intAmount -= intBet;
			oCalculation.pAmount = intAmount;
			document.getElementById("bankRoll").value = intAmount;
			oCalculation.pBet = intBet;
		}
	}
	

	this.mSetAmount = function()																	// method to assign the bank roll at the begining of the game
	{
				var amount=0;
				validAmount = false;
				
				do{
					amount=prompt("Please enter your amount...\n        maximum 100000",1000);		//have to be between 1 and 100000
					if (amount>100000 || amount <=0) 
					{
						alert("invalid number... please reenter");
					}
					else 
					{
						validAmount = true;
					}		
				}while (!validAmount)
				oCalculation.pAmount = amount;
				document.getElementById("bankRoll").value = amount;
				
	}
//==========================================================================
	this.intialize = function()												// assign 0 for bankroll ,bet and point    will execute when loading the html page
	{
	oCalculation.pPoint = 0;
	document.getElementById("point").value = 0;
	document.getElementById("bankRoll").value = 0;
	document.getElementById("bet").value = 0;
	}
}