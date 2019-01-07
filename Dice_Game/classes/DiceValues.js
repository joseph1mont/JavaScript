function DiceValues()
{
	var idForInterval;
//	var total;
	this.rnd1;
	this.rnd2;
	//------------------------------------------------------- 
	this.mReturnRandomNumber = function(smallNumber, largeNumber)	// return a random integer number between small number and largeNumber
	{
		return Math.floor((Math.random() * (largeNumber - smallNumber + 1) + smallNumber));
	}
//------------------------------------------------------- 

	//------------------------------------------------------- 	
	this.animate = function()
	{	
		if(oGameChoosen.pGameChoosen == 0) 							// If the user throw the Dice and no game has choosen 
		{
			document.getElementById("messages").innerHTML += "Choose a game to start...<br />";
		}
		else
		{
		oCalculation.mSetBet();
		idForInterval = setInterval("mStartAnimation1()", 200);					// change the 2 dice pictures every 200 ms, until the rnd3 == 6
		}
	}
	//------------------------------------------------------- 	
	mStartAnimation1 = function ()						// showing random image and values for dice and stop when rnd3 == 6 (so every time will stop after a different duration) 
	{	
		this.rnd1=0;
		this.rnd2=0;
		this.rnd1 = this.mReturnRandomNumber(1, 6);
		this.rnd2 = this.mReturnRandomNumber(1, 6);
		rnd3 = this.mReturnRandomNumber(1, 6);			// uses this variable as a third undisplayed Dice to use it with clearInterval   
				
		document.getElementById("apDiv1").innerHTML = '<img src="images/img_' + this.rnd1 + '.gif" width="200" height="200" />';
		document.getElementById("apDiv2").innerHTML = '<img src="images/img_' + this.rnd2 + '.gif" width="200" height="200" />';
		
		if (rnd3 == 6)											// uses this rnd3 variable to stop the setInterval (as a third unvisiable dice)   
		{
			clearInterval(idForInterval);
			oCalculation.pDice = parseInt(this.rnd1) + parseInt(this.rnd2);

			document.getElementById("messages").innerHTML += "your total is : " + oCalculation.pDice + "<br />";
			
			if (oGameChoosen.pGameChoosen == 1) oPassLine.mPassLineCalculation(); 							// go to game choosen and calculate this dice total 
				else if (oGameChoosen.pGameChoosen == 2) oFieldBet.mFieldBetCalculation();
					else oAny7.mAny7Calculation();
		}
	}
}

