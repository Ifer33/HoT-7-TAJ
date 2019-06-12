addResponseIndicator("I am dripping", "Im dripping", "dripping", "precum", "I am wet", "I have a lot of precum");
//run("allutils.js");

function drippingResponse(message) {
    DMessage("dripping: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("dripping: EndResponse Response is Disabled");
        return false;
    }
	if(getVar("firstRun",false)) {
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 2);
			switch (thisRandom){
				case 1:
					CMessage("This is what we want, right? %EmoteRandom%");
					found = true;
					break;
				case 2:
					CMessage("Not as bad as you're about to be %EmoteRandom%");
					found = true;
					break;
			}
		}
	}
	else if(getVar("chastityOn", false)){
		
	}
	else if(getVar("cbtCockActive", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 5);
			switch (thisRandom){
				case 1:
					CMessage("Good, I want that %Cock% to ache %EmoteRandom%");
					found = true;
					break;
				case 2:
					CMessage("Even if I let you stop smacking it around, you think that ache's going to get any better? %EmoteRandom%");
					found = true;
					break;
				case 3:
					CMessage("Can you feel your %Balls% filling up with cum?");
					setTempVar("AV_MEM_Drip", true);
					found = true;
					break;
				case 4:
					CMessage("I hope those %Balls% are absolutely swollen with cum for me.");
					setTempVar("AV_MEM_Drip", true);
					found = true;
					break;
				case 5:
					CMessage("Your %Balls% have to get full before the REAL fun starts.");
					setTempVar("AV_MEM_Drip", true);
					found = true;
					break;
			}
		}
	}
	else if(getVar("cbtBallActive", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 6);
			switch (thisRandom){
				case 1:
					CMessage("Even if you go back to stroking, one way or another you cock are going to ache %EmoteRandom%");
					found = true;
					break;
				case 2:
					CMessage("We'll need to get those balls nice and full before we continue");
					setTempVar("AV_MEM_Drip", true)
					found = true;
					break;
				case 3:
					CMessage("Let me take a look, I'll tell you if its wet enough");
					setTempVar("AV_MEM_Drip", true);
					found = true;
					break;
				case 4:
					CMessage("Can you feel your %Balls% filling up with cum?");
					setTempVar("AV_MEM_Drip", true);
					found = true;
					break;
				case 5:
					CMessage("I hope those %Balls% are absolutely swollen with cum for me.");
					setTempVar("AV_MEM_Drip", true);
					found = true;
					break;
				case 6:
					CMessage("Aren't they adorable when they're all swelled up like that?!?");
					setTempVar("AV_MEM_Drip", true);
					found = true;
					break;
			}
		}
	}
	else if(getVar("cbtActive", false)){
		
	}
	else if(getVar("holdingedge", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 8);
			switch (thisRandom){
				case 1:
					CMessage("Mmmmm keep holding it and make it hurts even more");
					found = true;
					break;
				case 2:
					CMessage("Good stay right there and let the pains drive you crazy");
					setTempVar("AV_MEM_Drip", true)
					found = true;
					break;
				case 3:
					CMessage("Why do you think I'm keeping you on the edge %EmoteRandom%");
					found = true;
					break;
				case 4:
					CMessage("We'll need to get those balls nice and full before we continue");
					setTempVar("AV_MEM_Drip", true);
					found = true;
					break;
				case 5:
					CMessage("Show me how wet can get %PetName%");
					found = true;
					break;
				case 6:
					CMessage("Can you feel your %Balls% filling up with cum?");
					setTempVar("AV_MEM_Drip", true);
					found = true;
					break;
				case 7:
					CMessage("Your %Balls% have to get full before the REAL fun starts.");
					setTempVar("AV_MEM_Drip", true);
					found = true;
					break;
				case 8:
					CMessage("Aren't they adorable when they're all swelled up like that?!? ");
					setTempVar("AV_MEM_Drip", true);
					found = true;
					break;
			}
		}
	}
    else if (isEdging())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 9);
			switch (thisRandom){
				case 1:
					CMessage("Good, keep getting closer so you can ache some more %EmoteRandom%");
					found = true;
					break;
				case 2:
					CMessage("Awww I thought your %Cock% would feel better if I let it get close");
					setTempVar("AV_MEM_Drip", true)
					found = true;
					break;
				case 3:
					CMessage("Good, I hope every single edge makes the ache even worse %EmoteRandom%");
					found = true;
					break;
				case 4:
					CMessage("Just think how much worse it will be when you get close for me %EmoteRandom%");
					found = true;
					break;
				case 5:
					CMessage("Show me how wet can get %PetName%");
					setTempVar("AV_MEM_Drip", true);
					found = true;
					break;
				case 6:
					CMessage("Let me take a look, I'll tell you if is wet enough");
					setTempVar("AV_MEM_Drip", true);
					found = true;
					break;
				case 7:
					CMessage("Can you feel your %Balls% filling up with cum?");
					setTempVar("AV_MEM_Drip", true);
					found = true;
					break;
				case 8:
					CMessage("I hope those %Balls% are absolutely swollen with cum for me. ");
					setTempVar("AV_MEM_Drip", true);
					found = true;
					break;
				case 9:
					CMessage("Aren't they adorable when they're all swelled up like that?!? ");
					found = true;
					break;
			}
		}
    }
    else if (isStrokingAll())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 23);
			switch (thisRandom){
				case 1:
					CMessage("dripping is what we want, right?");
					setTempVar("AV_MEM_Drip", true)
					found = true;
					break;
				case 2:
					CMessage("Mmmm keep stroking and ache even more");
					setTempVar("AV_MEM_Drip", true)
					found = true;
					break;
				case 3:
					CMessage("You can handle it %PetName%, keep stroking");
					setTempVar("AV_MEM_Drip", true)
					found = true;
					break;
				case 4:
					CMessage("That precum is going to stay with you until I let it leave that");
					found = true;
					break;
				case 5:
					CMessage("Yeah? I bet I can make that %Cock% ache even worse %EmoteRandom%");
					found = true;
					break;
				case 6:
					CMessage("Mmmm I love knowing how much agony that %Balls% is in ");
					setTempVar("AV_MEM_Drip", true);
					found = true;
					break;
				case 7:
					CMessage("That's what I'm here for %PetName% %EmoteRandom%");
					found = true;
					break;
				case 8:
					CMessage("I love knowing how much ache you're suffering for me %EmoteRandom%");
					found = true;
					break;
				case 9:
					CMessage("That %Cock% was made to ache for me");
					setTempVar("AV_MEM_Drip", true);
					found = true;
					break;
				case 10:
					CMessage("I'm going to fill every last inch of that %Cock% with ache %EmoteRandom%");
					found = true;
					break;
				case 11:
					CMessage("That just makes me want to tease you even more %EmoteRandom%");
					found = true;
					break;
				case 12:
					if(getVar("av_fetish_pain", false))
					{
						CMessage("Good... smack your %Cock% a few times, but dont stop %Stroking%");
						found = true;
					}
					break;
				case 13:
					if(getVar("av_fetish_rough", false))
					{
						CMessage("Good... smack your %Cock% a few times, but dont stop %Stroking%");
						found = true;
					}
					break;
				case 14:
					CMessage("Show me how wet your cock can get %PetName%");
					found = true;
					break;
				case 15:
					CMessage("Can you feel your %Balls% filling up with cum?");
					setTempVar("AV_MEM_Drip", true)
					found = true;
					break;
				case 16:
					CMessage("I hope those %Balls% are absolutely swollen with cum for me.");
					setTempVar("AV_MEM_Drip", true)
					found = true;
					break;
				case 17:
					CMessage("Your %Balls% have to get full before the REAL fun starts.");
					setTempVar("AV_MEM_Drip", true)
					found = true;
					break;
				case 18:
					CMessage("Aren't your %Balls% adorable when they're all swollen up like that?!?");
					setTempVar("AV_MEM_Drip", true)
					found = true;
					break;
				case 19:
					if(!getVar("av_fetish_cei", false))
					{
						CMessage("That's what we want, right? %EmoteHappy%");
						run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_DrippingPrecum.js");
						found = true;
					}
					break;
				case 20:
					if(getVar("av_fetish_cei", false))
					{
						CMessage("Scoop up that precum and lick it up, %PetName%");
						found = true;
					}
					break;
				case 21:
					if(getVar("av_fetish_cei", false))
					{
						CMessage("Don't let that precum go to waste, lick it up");
						found = true;
					}
					break;
				case 22:
					if(getVar("av_fetish_cei", false))
					{
						CMessage("I want you to taste that precum, %Name%");
						found = true;
					}
					break;
				case 23:
					if(getVar("av_fetish_cei", false))
					{
						CMessage("Lick that precum off your hand");
						setTempVar("AV_MEM_Drip", true)
						found = true;
					}
					break;
			}
		}
    }
    else {		//not stroking
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 10);
			switch (thisRandom){
				case 1:
					CMessage("Just think how much worse it will be when I make you start stroking again %EmoteRandom%");
					found = true;
					break;
				case 2:
					CMessage("And you're going to ache even more when I make you start stroking again %EmoteRandom%");
					found = true;
					break;
				case 3:
					if(getVar("av_fetish_pain", false))
					{
						CMessage("Good... smack your %Cock% a few times, but dont stop %Stroking%");
						setTempVar("AV_MEM_Drip", true);
						found = true;
					}
					break;
				case 4:
					if(getVar("av_fetish_rough", false))
					{
						CMessage("Good... smack your %Cock% a few times, but dont stop %Stroking%");
						setTempVar("AV_MEM_Drip", true);
						found = true;
					}
					break;
				case 5:
					CMessage("We'll need to get those balls nice and full before we continue");
					setTempVar("AV_MEM_Drip", true);
					found = true;
					break;
				case 6:
					CMessage("Let me take a look, I'll tell you if is wet enough");
					setTempVar("AV_MEM_Drip", true);
					found = true;
					break;
				case 7:
					CMessage("Can you feel your %Balls% filling up with cum?");
					setTempVar("AV_MEM_Drip", true);
					found = true;
					break;
				case 8:
					CMessage("I hope those %Balls% are absolutely swollen with cum for me. ");
					setTempVar("AV_MEM_Drip", true);
					found = true;
					break;
				case 9:
					CMessage("Your %Balls% have to get full before the REAL fun starts.");
					setTempVar("AV_MEM_Drip", true);
					found = true;
					break;
				case 10:
					CMessage("Aren't they adorable when they're all swelled up like that?!? ");
					setTempVar("AV_MEM_Drip", true);
					found = true;
					break;
			}
		}
    }
    DMessage("dripping: EndResponse");
    return true;
}