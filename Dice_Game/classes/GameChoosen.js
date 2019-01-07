	function GameChoosen()
	{
		var idForInterval;
		this.pGameChoosen;
//------------------------------------------------------- 
		mReturnSinValue = function(angle)
		{
			return Math.sin(angle * (Math.PI/180));
		}
		//------------------------------------------------------- 
		mReturnCosValue = function(angle)
		{
			return Math.cos(angle * (Math.PI/180));
		}
		//------------------------------------------------------- 
		mReturnSinAndCosValues = function(angle)
		{
			return [this.mReturnSinValue(angle), this.mReturnCosValue(angle)];
		}
		//------------------------------------------------------- 
		mReturnRandomNumber = function(smallNumber, largeNumber)		// return a random integer number between small number and largeNumber
		{
			return Math.floor((Math.random() * (largeNumber - smallNumber + 1) + smallNumber));
		}
//--------------------------------------------------------------------
	this.animate1 = function()						// moving the Pass Line Game when select
	{
		posX = 0;
		posY = 0;
		this.pGameChoosen = 1;

		idForInterval = setInterval("startAnimation1()", 5);	
	}

	startAnimation1 = function()
	{
		posX += (mReturnSinAndCosValues(57)[0] * 2);
		posY += (mReturnSinAndCosValues(57)[1] * 2);

		document.getElementById("Game1Img").style.left = (posX + "px");
		document.getElementById("Game1Img").style.top = (posY + "px");
		
		if (posY > 200)								// div position is exactly on game choosen div 
		{		
			clearInterval(idForInterval);
			
		}
	}
//--------------------------------------------------------------------
	this.animate2 = function()						// moving the Field Bet Game when select
	{
		posX = 0;
		posY = 200;
		this.pGameChoosen = 2;

		idForInterval = setInterval("startAnimation2()", 5);	
	}
	
	startAnimation2 = function()
	{
		posX += (mReturnSinAndCosValues(90)[0] * 2);	// moving only horizantly
		posY = 200;
		document.getElementById("Game2Img").style.left = (posX + "px");
		document.getElementById("Game2Img").style.top = (posY + "px");
		if (posX > 309)								// div position is exactly on game choosen div 
		{		
			clearInterval(idForInterval);
			
		}
	}
//--------------------------------------------------------------------
	this.animate3 = function()						// moving the Any 7 game when select
	{
		posX = 0;
		posY = 400;
		this.pGameChoosen = 3;
		idForInterval = setInterval("startAnimation3()", 5);	
	}
	
	startAnimation3 = function()
	{
		posX += (mReturnSinAndCosValues(57)[0] * 2);
		posY += (mReturnSinAndCosValues(57)[1] * -2);
		//alert(posX);
		document.getElementById("Game3Img").style.left = (posX + "px");
		document.getElementById("Game3Img").style.top = (posY + "px");
		
		if (posY < 200)
		{		
			clearInterval(idForInterval);
			
		}
		
	}
//----------------------------------------return Div's games to their previous possitions to choose a new game
	this.mReturnDivs = function()						
	{
		pos1 = 0;
		pos2 = 200;
		pos3 = 400;
		if (this.pGameChoosen != 0)
		{
			document.getElementById("Game1Img").style.left = (pos1 + "px");
			document.getElementById("Game1Img").style.top = (pos1 + "px");	
			document.getElementById("Game2Img").style.left = (pos1 + "px");
			document.getElementById("Game2Img").style.top = (pos2 + "px");	
			document.getElementById("Game3Img").style.left = (pos1 + "px");
			document.getElementById("Game3Img").style.top = (pos3 + "px");	
		}
	}
//	this.messageToDisplay = function(divName , message)
//	{
//	document.getElementById(divName).innerHTML = message;	
//		
//	}
}