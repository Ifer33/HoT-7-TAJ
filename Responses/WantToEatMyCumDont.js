addResponseIndicator("don't want to eat my cum", "don't want to eat cum", "don't want to swallow", "don't let me eat my cum", "don't let me eat cum", "don't let me swallow", "don't make me eat my cum", "don't make me eat my cum", "don't make me swallow","don't want to lick up my cum","don't want to lick up cum");
//run("allutils.js");

function wantToEatMyCumDontResponse(message) {
    DMessage("wantToEatMyCumDont: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("wantToEatMyCumDont: EndResponse Response is Disabled");
        return false;
    }
    let found = false;
	while(!found){
		let thisRandom = randomInt(1,5);
		switch (thisRandom){
			case 1:
				if(getVar("pthevCEI_Yes", false) || getVar("av_fetish_cei", false))
				{
					CMessage("You\'ve already said you will, so... you will %Grin%");
					found = true;
				}
				break;
			case 2:
				if(getVar("pthevCEI_Yes", false) || getVar("av_fetish_cei", false))
				{
					CMessage("I don\'t care what you say - if I want it, you will do it");
					found = true;
				}
				break;
			case 3:
				if(getVar("pthevCEI_No", false))
				{
					CMessage("Don\'t worry, I won\'t make you %Smile%");
					found = true;
				}
				break;
			case 4:
				if(getVar("pthevCEITraining", false))
				{
					CMessage("We\'ll see about that %Grin%");
					found = true;
				}
				break;
			case 5:
				if(getVar("pthevCEITraining", false))
				{
					CMessage("I do like a challenge... %Grin%");
					found = true;
				}
				break;
		}
	}
    DMessage("wantToEatMyCumDont: EndResponse");
    return true;
}