addResponseIndicator("will not do anything","not just do anything","won't do anything","won't just do anything");


function i_Will_Do_Anything_NotResponse(message) {
    DMessage("i_Will_Do_Anything_Not: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("i_Will_Do_Anything_Not: EndResponse Response is Disabled");
        return false;
    }else{
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 6);
			switch (thisRandom){
				case 1:
					if (getMood() > 30 && getMood() < 70)
					{
						CMessage("Hm... somehow I\'m not surprised...");
						found = true;
						break;
					}
				case 2:
					if (getMood() > 30 && getMood() < 70)
					{
						CMessage("That\'s a little disappointing, %PetName%");
						found = true;
						break;
					}
				case 3:
					if (getMood() > 30 && getMood() < 70)
					{
						CMessage("Well, we\'ll see about that, won\'t we...");
						found = true;
						break;
					}
				case 4:
					if (getMood() >= 70)
					{
						CMessage("Yeah, I figured as much from your behaviour %GeneralTime%");
						found = true;
						break;
					}
				case 5:
					if (getMood() <= 30)
					{
						CMessage("We\'ll just see about that... %Grin%");
						found = true;
						break;
					}
				case 6:
					found=true;
					answer0=getInput("The correct answer is \"Yes, Mistress, I am ready to serve you\".",5);
					if (answer0.isLike("yes", "yea", "yep"))
					{
						aV_YesGoodResponse();
					}
					if (answer0.isLike("no"))
					{
						aV_NoBadResponse();
					}
					break;
			}
		}
	}
	
	DMessage("i_Will_Do_Anything_Not: EndResponse");
    return true;
}