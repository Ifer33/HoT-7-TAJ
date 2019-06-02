addResponseIndicator("I will be your little bitch", "I will be your bitch", "I will be your slut", "I will be your slave", "I am your little bitch", "I am your bitch", "I am your slut", "I am your slave", "Call me your little bitch", "Call me your bitch", "Call me your slut", "Call me your slave", "Call me your little bitch", "Call me your bitch", "Call me your slut", "Call me your slave");
//run("allutils.js");

function call_MeResponse(message) {
    DMessage("callMe: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("callMe: EndResponse Response is Disabled");
        return false;
    }
	if(getVar("firstRun",false)) {
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 6);
			switch (thisRandom){
				case 1:
					CMessage("Oh...really? Those words are very degrading. AND hot.");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short36.js");
					found = true;
					break;
				case 2:
					CMessage("I know how much you love being my bitch.");
					found = true;
					break;
				case 3:
					CMessage("Is that what I heard slave?");
					found = true;
					break;
				case 4:
					CMessage("Oh you are, you know you are. And you will enjoy it.");
					found = true;
					break;
				case 5:
					answer0=getInput("And as my bitch you will do anything I want, right?",5);
					if (answer0.isLike("yes", "yea", "yep"))
					{
						wantToEatMyCumResponse();
					}
					else if (answer1.isLike("no", "nope", "nah", "not"))
					{
						pvRs_AnythingNoResponse();
					}
					found = true;
					break;
				case 6:
					if(!getVar("pvCollared", false))
					{
						answer0=getInput("And as my bitch you will do anything I want, right?",5);
						if (answer0.isLike("yes", "yea", "yep"))
						{
							wantToWearCollarResponse();
						}
						found = true;
					}
					break;
			}
		}
	}
	else if(getVar("chastityOn", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 3);
			switch (thisRandom){
				case 1:
					CMessage("I know how much you love being my bitch.");
					found = true;
					break;
				case 2:
					CMessage("Is that what I heard slave?");
					found = true;
					break;
				case 3:
					CMessage("Oh you are, you know you are. And you will enjoy it.");
					found = true;
					break;
			}
		}
	}
	else if(getVar("cbtCockActive", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 4);
			switch (thisRandom){
				case 1:
					CMessage("I know how much you love being my bitch.");
					found = true;
					break;
				case 2:
					CMessage("Is that what I heard slave?");
					found = true;
					break;
				case 3:
					CMessage("Oh you are, you know you are. And you will enjoy it.");
					found = true;
					break;
				case 4:
					CMessage("Is that what I heard slave?");
					run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_Kneel_Short.js");
					found = true;
					break;
			}
		}
	}
	else if(getVar("cbtBallActive", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 8);
			switch (thisRandom){
				case 1:
					CMessage("Is that what I heard slave?");
					setTempVar("AV_Mistress_promise",true);
					run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Mistress.js"); //, promise)
					found = true;
					break;
				case 2:
					if (getMood() >= 70)
					{
						CMessage("Is that what I heard slave?");
						run("Interrupt" + java.io.File.separator + "AV_Pegging.js");
						found = true;
					}
					break;
				case 3:
					if(getVar("AV_DommeHornie1", false))
					{
						CMessage("Is that what I heard slave?");
						setTempVar("AV_Mistress_promise",true);
						run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Mistress.js"); //, promise)
						found = true;
					}
					break;
				case 4:
					CMessage("I know how much you love being my bitch.");
					found = true;
					break;
				case 5:
					CMessage("Is that what I heard slave?");
					run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_Kneel_Short.js");
					found = true;
					break;
				case 6:
					CMessage("Oh you are, you know you are. And you will enjoy it.");
					found = true;
					break;
				case 7:
					CMessage("Is that what I heard slave?");
					found = true;
					break;
				case 8:
					CMessage("Oh...really? Those words are very degrading. AND hot.");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short36.js");
					found = true;
					break;
			}
		}
	}
	else if(getVar("holdingedge", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 10);
			switch (thisRandom){
				case 1:
					CMessage("I know how much you love being my bitch.");
					found = true;
					break;
				case 2:
					CMessage("Is that what I heard slave?");
					found = true;
					break;
				case 3:
					CMessage("Oh you are, you know you are. And you will enjoy it.");
					found = true;
					break;
				case 4:
					if(getVar("av_fetish_pegging", false))
					{
						CMessage("%Yes% and I will make good use of you now.");
						run("Interrupt" + java.io.File.separator + "AV_Pegging.js");
						found = true;
					}
					break;
				case 5:
					if(getVar("av_fetish_pain", false))
					{
						CMessage("%Yes% and I will make good use of you now.");
						run("Interrupt" + java.io.File.separator + "AV_Pain.js");
						found = true;
					}
					break;
				case 6:
					if(getVar("av_fetish_foot", false))
					{
						CMessage("%Yes% and I will make good use of you now.");
						run("Interrupt" + java.io.File.separator + "AV_Feet.js");
						found = true;
					}
					break;
				case 7:
					if(getVar("av_fetish_rough", false))
					{
						CMessage("%Yes% and I will make good use of you now.");
						run("Interrupt" + java.io.File.separator + "AV_Rough.js");
						found = true;
					}
					break;
				case 8:
					if(getVar("av_fetish_hothax", false))
					{
						CMessage("%Yes% and I will make good use of you now.");
						run("Interrupt" + java.io.File.separator + "AV_Wax.js");
						found = true;
					}
					break;
				case 9:
					if(getVar("av_fetish_titjob", false))
					{
						CMessage("%Yes% and I will make good use of you now.");
						run("Interrupt" + java.io.File.separator + "AV_Titjob.js");
						found = true;
					}
					break;
				case 10:
					if(getVar("av_fetish_cei", false))
					{
						CMessage("%Yes% and I will make good use of you now.");
						run("Interrupt" + java.io.File.separator + "AV_CEI.js");
						found = true;
					}
					break;
			}
		}
	}
    else if (isEdging())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 4);
			switch (thisRandom){
				case 1:
					CMessage("I know how much you love being my bitch.");
					found = true;
					break;
				case 2:
					CMessage("Is that what I heard slave?");
					found = true;
					break;
				case 3:
					CMessage("Oh you are, you know you are. And you will enjoy it.");
					found = true;
					break;
				case 4:
					CMessage("Oh you are, you know you are. And you will enjoy it.");
					run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_Kneel_Short.js");
					found = true;
					break;
			}
		}
    }
    else if (isStroking())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 25);
			switch (thisRandom){
				case 1:
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short06.js");
					found = true;
					break;
				case 2:
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short07.js");
					found = true;
					break;
				case 3:
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short08.js");
					found = true;
					break;
				case 4:
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short09.js");
					found = true;
					break;
				case 5:
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short11.js");
					found = true;
					break;
				case 6:
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short12.js");
					found = true;
					break;
				case 7:
					setTempVar("AV_Call01", true);
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short10.js");
					found = true;
					break;
				case 8:
					CMessage("Oh...really? Those words are very degrading. AND hot.");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short36.js");
					found = true;
					break;
				case 9:
					CMessage("I know how much you love being my bitch. Keep %Stroking%");
					found = true;
					break;
				case 10:
					CMessage("Is that what I heard slave? Keep %Stroking%");
					found = true;
					break;
				case 11:
					CMessage("Oh you are, you know you are. And you will enjoy it.");
					found = true;
					break;
				case 12:
					answer0=getInput("And as my bitch you will do anything I want, right?",5);
					if (answer0.isLike("yes", "yea", "yep"))
					{
						wantToEatMyCumResponse();
					}
					else if (answer1.isLike("no", "nope", "nah", "not"))
					{
						pvRs_AnythingNoResponse();
					}
					found = true;
					break;
				case 13:
					if(!getVar("pvCollared", false))
					{
						answer0=getInput("And as my bitch you will do anything I want, right?",5);
						if (answer0.isLike("yes", "yea", "yep"))
						{
							wantToWearCollarResponse();
						}
						found = true;
					}
					break;
				case 14:
					CMessage("Oh you are, you know you are. And you will enjoy it.");
					run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_Kneel_Short.js");
					found = true;
					break;
				case 15:
					CMessage("Is that what I heard slave?");
					setTempVar("AV_Mistress_promise",true);
					run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Mistress.js"); //, promise)
					found = true;
					break;
				case 16:
					if (getMood() >= 70)
					{
						CMessage("Is that what I heard slave?");
						run("Interrupt" + java.io.File.separator + "AV_Pegging.js");
						found = true;
					}
					break;
				case 17:
					if(getVar("AV_DommeHornie1", false))
					{
						CMessage("Is that what I heard slave?");
						setTempVar("AV_Mistress_promise",true);
						run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Mistress.js"); //, promise)
						found = true;
					}
					break;
				case 18:
					if(getVar("av_fetish_pegging", false))
					{
						CMessage("%Yes% and I will make good use of you now.");
						run("Interrupt" + java.io.File.separator + "AV_Pegging.js");
						found = true;
					}
					break;
				case 19:
					if(getVar("av_fetish_pain", false))
					{
						CMessage("%Yes% and I will make good use of you now.");
						run("Interrupt" + java.io.File.separator + "AV_Pain.js");
						found = true;
					}
					break;
				case 20:
					if(getVar("av_fetish_foot", false))
					{
						CMessage("%Yes% and I will make good use of you now.");
						run("Interrupt" + java.io.File.separator + "AV_Feet.js");
						found = true;
					}
					break;
				case 21:
					if(getVar("av_fetish_rough", false))
					{
						CMessage("%Yes% and I will make good use of you now.");
						run("Interrupt" + java.io.File.separator + "AV_Rough.js");
						found = true;
					}
					break;
				case 22:
					if(getVar("av_fetish_hothax", false))
					{
						CMessage("%Yes% and I will make good use of you now.");
						run("Interrupt" + java.io.File.separator + "AV_Wax.js");
						found = true;
					}
					break;
				case 23:
					if(getVar("av_fetish_titjob", false))
					{
						CMessage("%Yes% and I will make good use of you now.");
						run("Interrupt" + java.io.File.separator + "AV_Titjob.js");
						found = true;
					}
					break;
				case 24:
					if(getVar("av_fetish_cei", false))
					{
						CMessage("%Yes% and I will make good use of you now.");
						run("Interrupt" + java.io.File.separator + "AV_CEI.js");
						found = true;
					}
					break;
				case 25:
					if(getVar("AV_DommeMistress", false))
					{
						CMessage("Is that what I heard slave?");
						run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "Kneel.js");
						found = true;
					}
					break;
			}
		}
    }
    else {		//not stroking
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 9);
			switch (thisRandom){
				case 1:
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short06.js");
					found = true;
					break;
				case 2:
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short07.js");
					found = true;
					break;
				case 3:
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short08.js");
					found = true;
					break;
				case 4:
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short09.js");
					found = true;
					break;
				case 5:
					CMessage("Oh...really? Those words are very degrading. AND hot.");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short36.js");
					found = true;
					break;
				case 6:
					CMessage("I know how much you love being my bitch.");
					found = true;
					break;
				case 7:
					CMessage("Is that what I heard slave?");
					found = true;
					break;
				case 8:
					CMessage("Oh you are, you know you are. And you will enjoy it.");
					found = true;
					break;
				case 9:
					CMessage("Oh you are, you know you are. And you will enjoy it.");
					found = true;
					break;
			}
		}
    }
    DMessage("callMe: EndResponse");
    return true;
}