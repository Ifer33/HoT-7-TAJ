addResponseIndicator("want you to hurt me","please hurt me","hurt me please");
//run("allutils.js");

function wantYouToHurtMeResponse(message) {
    DMessage("wantYouToHurtMe: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("wantYouToHurtMe: EndResponse Response is Disabled");
        return false;
    }
	if (isStrokingAll())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 5);
			switch (thisRandom){
				case 1:
					if(ballTorture()){
						CMessage("If you're actually asking me to hurt you...");
						run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_CBTBallsStroking.js");
						found = true;
					}
					break;
				case 2:
					CMessage("Don't be silly, just %JerkOff% for me now, %PetName%");
					found = true;
					break;
				case 3:
					answer0= getInput("Why, have you been a bad boy?",5);
					if (answer0.isLike("yes", "yea", "yep"))
					{
						beenBadResponse();
					}
					found = true;
					break;
				case 4:
					answer0= getInput("Really? What, you can't handle all this %JerkingOff% anymore?",5);
					if (answer0.isLike("no", "not", "nope"))
					{
						can_Handle_notResponse();
					}
					found = true;
					break;
				case 5:
					CMessage("%AV_Mem_HurtMe%");
					found = true;
					break;
			}
		}
    }
    else {		//not stroking
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 7);
			switch (thisRandom){
				case 1:
					CMessage("Oh c'mon, you're begging me to hurt you? That's just pathetic, %SubName% %Lol%");
					found = true;
					break;
				case 2:
					CMessage("You're such a pain slut %Laugh%");
					found = true;
					break;
				case 3:
					CMessage("I'll hurt you when I feel like it's necessary, %PetName%");
					found = true;
					break;
				case 4:
					if(getVar("AV_SubKnees",false) ){
						CMessage("Well, if you stay on your knees long enough, they're probably going to hurt at some point");
						found = true;
					}
					break;
				case 5:
					if(getVar("AV_Short32",false) ){
						CMessage("What, that plug in your ass isn't uncomfortable enough? *rolls eyes*");
						found = true;
					}
					break;
				case 6:
					CMessage("%AV_Mem_HurtMe%");
					found = true;
					break;
				case 7:
					CMessage("%AV_Mem_HurtMe%");
					found = true;
					break;
			}
		}
    }
    DMessage("wantYouToHurtMe: EndResponse");
    return true;
}