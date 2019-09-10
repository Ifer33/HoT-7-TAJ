addResponseIndicator("you turn me on","aroused by you","you make me horny","you make me hard","you make my cock hard","you make my dick hard","turned on by you");
//run("allutils.js");

function youTurnMeOnResponse(message) {
    DMessage("youTurnMeOnResponse: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("youTurnMeOnResponse: EndResponse Response is Disabled");
        return false;
    }
	let found = false;
	while(!found){
		let thisRandom = randomInt(1, 8);
		switch (thisRandom){
			case 1:
				if(!getVar("pvBeta",false) ){
					CMessage("Keep drooling over my hot body, loser %Laugh%");
					found = true;
				}
				break;
			case 2:
				if(!getVar("pvBeta",false) ){
					CMessage("Too bad you could never have someone as hot as me");
					found = true;
				}
				break;
			case 3:
				CMessage("That's why it's so easy for me to "+random("tease","control","manipulate")+" you");
				found = true;
				break;
			case 4:
				CMessage("Aww... I know, %PetName% %Giggles%");
				found = true;
				break;
			case 5:
				CMessage("You're such an ass kisser %Lol%");
				found = true;
				break;
			case 6:
				CMessage("You're addicted to the sight of my body, %Name%");
				found = true;
				break;
			case 7:
				CMessage("I tend to have that effect of a certain kind of person %Laugh%");
				found = true;
				break;
			case 8:
				CMessage("Well, you could also respect me as a person, but I'll take it %EmoteWink%");
				found = true;
				break;
		}
	}
    DMessage("youTurnMeOnResponse: EndResponse");
    return true;
}