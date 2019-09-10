addResponseIndicator("may i edge", "can i edge", "let me edge", "please can i edge", "please may i edge", "please let me edge", "am i allowed to edge", "would like to edge", "i'd like to edge", "want to edge", "want an edge", "permission to edge");
//run("allutils.js");

function opiate_BeggingEdgeResponse(message) {
    DMessage("opiate_Begging-Edge: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("opiate_Begging-Edge: EndResponse Response is Disabled");
        return false;
    }
	if(getVar("firstRun",false)) {
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 24);
			switch (thisRandom){
				case 1:
					CMessage("%OhNo%");
					found = true;
					break;
				case 2:
					CMessage("Not yet, %PetName%%");
					found = true;
					break;
				case 3:
					CMessage("Maybe later");
					found = true;
					break;
				case 4:
					CMessage("Not so impatient, we'll get to that %Smile%");
					found = true;
					break;
				case 5:
					if (goodMood()){
						run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "pvMs_EdgeAllowed.js");
						found = true;
					}
					break;
				case 6:
					CMessage("You're already going to cum? You are too quick %Slave%.");
					found = true;
					break;
				case 7:
					CMessage("Yes %Name% edge for me");
					edge();
					found = true;
					break;
				case 8:
					CMessage("Yes, %Edge%");
					edge();
					found = true;
					break;
				case 9:
					CMessage("%EmoteRandom%");
					run("Interrupt" + java.io.File.separator + "OpiatePTE1.js");
					found = true;
					break;
				case 10:
					if(checkOldApathyLevel(1)){
						CMessage("%EmoteRandom%");
						run("Interrupt" + java.io.File.separator + "OpiatePTE1.js");
						found = true;
					}
					break;
				case 11:
					if(checkOldApathyLevel(2)){
						CMessage("%EmoteRandom%");
						run("Interrupt" + java.io.File.separator + "OpiatePTE1.js");
						found = true;
					}
					break;
				case 12:
					if(checkOldApathyLevel(3)){
						CMessage("Quit begging %Name%");
						found = true;
					}
					break;
				case 13:
					if(checkOldApathyLevel(4)){
						CMessage("Quit begging %Name%");
						found = true;
					}
					break;
				case 14:
					if(checkOldApathyLevel(5)){
						CMessage("Quit begging %Name%");
						found = true;
					}
					break;
				case 15:
					if(checkOldApathyLevel(1)){
						CMessage("%EmoteRandom%");
						run("Interrupt" + java.io.File.separator + "OpiatePTE1.js");
						found = true;
					}
					break;
				case 16:
					if(checkOldApathyLevel(2)){
						CMessage("%EmoteRandom%");
						run("Interrupt" + java.io.File.separator + "OpiatePTE1.js");
						found = true;
					}
					break;
				case 17:
					if(checkOldApathyLevel(3)){
						CMessage("%Shh%");
						found = true;
					}
					break;
				case 18:
					if(checkOldApathyLevel(4)){
						CMessage("%Shh%");
						found = true;
					}
					break;
				case 19:
					if(checkOldApathyLevel(5)){
						CMessage("%Shh%");
						found = true;
					}
					break;
				case 20:
					if(checkOldApathyLevel(1)){
						CMessage("%EmoteRandom%");
						run("Interrupt" + java.io.File.separator + "OpiatePTE1.js");
						found = true;
					}
					break;
				case 21:
					if(checkOldApathyLevel(2)){
						CMessage("%EmoteRandom%");
						run("Interrupt" + java.io.File.separator + "OpiatePTE1.js");
						found = true;
					}
					break;
				case 22:
					if(checkOldApathyLevel(3)){
						CMessage("%Shh%");
						found = true;
					}
					break;
				case 23:
					if(checkOldApathyLevel(4)){
						CMessage("%Shh%");
						found = true;
					}
					break;
				case 24:
					if(checkOldApathyLevel(5)){
						CMessage("%Shh%");
						found = true;
					}
					break;
			}
		}
	}
	else if(getVar("chastityOn", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 8);
			switch (thisRandom){
				case 1:
					CMessage("%EmoteRandom% As if I would let you edge! You're not allowed to <i>touch</i> %Name%");
					found = true;
					break;
				case 2:
					CMessage("%EmoteRandom% I think not %Name%");
					found = true;
					break;
				case 3:
					CMessage("%EmoteRandom% Quit begging %Name%");
					found = true;
					break;
				case 4:
					CMessage("%EmoteRandom% %Shh%");
					found = true;
					break;
				case 5:
					CMessage("%Shh%");
					found = true;
					break;
				case 6:
					CMessage("%OhNo%");
					found = true;
					break;
				case 7:
					if(getVar("hasChastity",false) ){
						CMessage("With that cage on? I don't see how you could %Laugh%");
						found = true;
					}
					break;
				case 8:
					if(!getVar("hasChastity",false) ){
						CMessage("No %Name%, you're not even allowed to touch it right now");
						found = true;
					}
					break;
			}
		}
	}
	else if(getVar("cbtActive", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 28);
			switch (thisRandom){
				case 1:
					if(checkOldApathyLevel(1)){
						CMessage("Sorry %Name%, no %Stroking% %Yourself% right now");
						found = true;
					}
					break;
				case 2:
					if(checkOldApathyLevel(2)){
						CMessage("Sorry %Name%, no %Stroking% %Yourself% right now");
						found = true;
					}
					break;
				case 3:
					if(checkOldApathyLevel(3)){
						CMessage("Sorry %Name%, no %Stroking% %Yourself% right now");
						found = true;
					}
					break;
				case 4:
					if(checkOldApathyLevel(4)){
						CMessage("No, you're not allowed to %Stroke% %Yourself% right now");
						found = true;
					}
					break;
				case 5:
					if(checkOldApathyLevel(5)){
						CMessage("Not a chance, you're not allowed to %Stroke% %Yourself% right now");
						found = true;
					}
					break;
				case 6:
					if(checkOldApathyLevel(1)){
						CMessage("Sorry %Name%, I don't %Want% for you to be %Stroking% %Yourself% right now");
						found = true;
					}
					break;
				case 7:
					if(checkOldApathyLevel(2)){
						CMessage("Sorry %Name%, I don't %Want% for you to be %Stroking% %Yourself% right now");
						found = true;
					}
					break;
				case 8:
					if(checkOldApathyLevel(3)){
						CMessage("Sorry %Name%, I don't %Want% for you to be %Stroking% %Yourself% right now");
						found = true;
					}
					break;
				case 9:
					if(checkOldApathyLevel(4)){
						CMessage("I don't think so, I %Want% for you to %Ache% for it %Name%");
						found = true;
					}
					break;
				case 10:
					if(checkOldApathyLevel(5)){
						CMessage("I don't think so, I %Want% for you to %Ache% for it %Name%");
						found = true;
					}
					break;
				case 11:
					CMessage("Mmm, I think you can wait");
					found = true;
					break;
				case 12:
					CMessage("Mmm, I think you should wait");
					found = true;
					break;
				case 13:
					CMessage("Mmm, I think you need to wait");
					found = true;
					break;
				case 14:
					CMessage("Maybe in a minute %Name% %Smile%");
					found = true;
					break;
				case 15:
					CMessage("Not yet, wait for it %Name%");
					found = true;
					break;
				case 16:
					CMessage("%EmoteRandom% %LetMeThinkAboutIt%");
					found = true;
					break;
				case 17:
					CMessage("%EmoteRandom% Quit begging %Name%");
					found = true;
					break;
				case 18:
					CMessage("%EmoteRandom% %Shh%");
					found = true;
					break;
				case 19:
					CMessage("%Shh%");
					found = true;
					break;
				case 20:
					CMessage("Mmm, I think you can wait");
					found = true;
					break;
				case 21:
					CMessage("Mmm, I think you should wait");
					found = true;
					break;
				case 22:
					CMessage("Mmm, I think you need to wait");
					found = true;
					break;
				case 23:
					CMessage("Maybe in a minute %Name% %Smile%");
					found = true;
					break;
				case 24:
					CMessage("Not yet, wait for it %Name%");
					found = true;
					break;
				case 25:
					CMessage("I can see how that would be preferable, but no");
					found = true;
					break;
				case 26:
					CMessage("%OhNo%");
					found = true;
					break;
				case 27:
					CMessage("No, I want to hurt you instead");
					found = true;
					break;
				case 28:
					if (goodMood()){
						run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "pvMs_EdgeAllowed.js");
						found = true;
					}
					break;
			}
		}
	}
	else if(getVar("holdingedge", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 5);
			switch (thisRandom){
				case 1:
					CMessage("You should already be edging!");
					found = true;
					break;
				case 2:
					CMessage("You should be on the edge already");
					found = true;
					break;
				case 3:
					CMessage("C'mon, %Name%, you should already be on the edge %EmoteFlustered%");
					found = true;
					break;
				case 4:
					if(badMood() ){
						CMessage("You should already be on the edge!");
						//@AddEdgeHoldTime @MiniScript(pvMs_PunishmentLight_Stroking)
						//run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "pvMs_PunishmentLight_Stroking.js");
						found = true;
					}
					break;
				case 5:
					CMessage("Yes %Name%. %EdgeN%. %HoldTheEdge%");
					found = true;
					break;
			}
		}
	}
    else if (isEdging())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 10);
			switch (thisRandom){
				case 1:
					if(badMood() ){
						CMessage("Didn't I just tell you to!? %EmoteFlustered%");
						//run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "pvMs_PunishmentLight_Stroking.js");
						found = true;
					}
					break;
				case 2:
					if(badMood() ){
						CMessage("Yes %Name%, I already told you %EmoteFlustered%");
						//run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "pvMs_PunishmentLight_Stroking.js");
						found = true;
					}
					break;
				case 3:
					if(badMood() ){
						CMessage("I already told you %EmoteFlustered%");
						//run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "pvMs_PunishmentLight_Stroking.js");
						found = true;
					}
					break;
				case 4:
					CMessage("Yes, %PetName%, edge for me now");
					found = true;
					break;
				case 5:
					CMessage("Oh yes %Smile%");
					found = true;
					break;
				case 6:
					CMessage("Yes");
					found = true;
					break;
				case 7:
					CMessage("Go ahead then, edge for me");
					found = true;
					break;
				case 8:
					CMessage("I <i>do</i> want you to edge...");
					found = true;
					break;
				case 9:
					CMessage("Yes, %EdgeN% for me now");
					found = true;
					break;
				case 10:
					CMessage("I already told you that I %Want% you to %EdgeN% %Smile%");
					found = true;
					break;
			}
		}
    }
    else if (isStrokingAll())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 68);
			switch (thisRandom){
				case 1:
					if(goodMood() ){
						run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "pvMs_EdgeAllowed.js");
						found = true;
					}
					break;
				case 2:
					if(goodMood() ){
						run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "pvMs_EdgeAllowed.js");
						found = true;
					}
					break;
				case 3:
					if(goodMood() ){
						run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "pvMs_EdgeAllowed.js");
						found = true;
					}
					break;
				case 4:
					if(goodMood() ){
						CMessage("No, keep stroking for me");
						setTempVar("AV_AskedEdge",true);
						found = true;
					}
					break;
				case 5:
					if(goodMood() ){
						CMessage("Maybe later");
						setTempVar("AV_AskedEdge",true);
						found = true;
					}
					break;
				case 6:
					if(neutralMood() ){
						CMessage("%OhNo%");
						setTempVar("AV_AskedEdge",true);
						found = true;
					}
					break;
				case 7:
					if(neutralMood() ){
						CMessage("%OhNo%");
						setTempVar("AV_AskedEdge",true);
						found = true;
					}
					break;
				case 8:
					if(neutralMood() ){
						CMessage("Nope, just keep stroking");
						setTempVar("AV_AskedEdge",true);
						found = true;
					}
					break;
				case 9:
					if(!getVar("AV_AskedEdge",false) ){
						CMessage("If I remember I am the one who tells you what to do and when you do it right?");
						setTempVar("AV_AskedEdge",true);
						found = true;
					}
					break;
				case 10:
					if(neutralMood() ){
						run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "pvMs_EdgeAllowed.js");
						found = true;
					}
					break;
				case 11:
					if(neutralMood() ){
						run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "pvMs_EdgeAllowed.js");
						found = true;
					}
					break;
				case 12:
					if(neutralMood() ){
						CMessage("Not now, %Name%");
						setTempVar("AV_AskedEdge",true);
						found = true;
					}
					break;
				case 13:
					if(neutralMood() ){
						CMessage("Maybe later");
						setTempVar("AV_AskedEdge",true);
						found = true;
					}
					break;
				case 14:
					if(badMood() ){
						CMessage("%OhNo%");
						setTempVar("AV_AskedEdge",true);
						found = true;
					}
					break;
				case 15:
					if(badMood() ){
						CMessage("%OhNo% just keep stroking");
						setTempVar("AV_AskedEdge",true);
						found = true;
					}
					break;
				case 16:
					if(badMood() ){
						CMessage("Don't even think about it, %Name%");
						run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "pvMs_PunishmentLight_Stroking.js");
						found = true;
					}
					break;
				case 17:
					if(badMood() ){
						CMessage("Don't even think about it, %Name%");
						setTempVar("AV_AskedEdge",true);
						found = true;
					}
					break;
				case 18:
					if(badMood() ){
						CMessage("Don't you fucking edge, %PetName%");
						setTempVar("AV_AskedEdge",true);
						found = true;
					}
					break;
				case 19:
					if(badMood() ){
						CMessage("You are NOT allowed to edge, %PetName%");
						run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "pvMs_PunishmentLight_Stroking.js");
						found = true;
					}
					break;
				case 20:
					if(badMood() ){
						CMessage("You are NOT allowed to edge, %PetName%");
						setTempVar("AV_AskedEdge",true);
						found = true;
					}
					break;
				case 21:
					if(!getVar("AV_AskedEdge",false) ){
						CMessage("Yes %Name% %Edge% for me");
						edge();
						found = true;
					}
					break;
				case 22:
					if(!getVar("AV_AskedEdge",false) ){
						CMessage("Yes, %Edge%");
						edge();
						found = true;
					}
					break;
				case 23:
					if(!getVar("AV_AskedEdge",false) ){
						CMessage("%EmoteRandom% %LetMeThinkAboutIt%");
						setTempVar("AV_AskedEdge",true);
						found = true;
					}
					break;
				case 24:
					CMessage("%EmoteRandom%");
					run("Interrupt" + java.io.File.separator + "OpiatePTE1.js");
					found = true;
					break;
				case 25:
					if(checkOldApathyLevel(1)){
						CMessage("%EmoteRandom%");
						run("Interrupt" + java.io.File.separator + "OpiatePTE1.js");
						found = true;
					}
					break;
				case 26:
					if(checkOldApathyLevel(2)){
						CMessage("%EmoteRandom%");
						run("Interrupt" + java.io.File.separator + "OpiatePTE1.js");
						found = true;
					}
					break;
				case 27:
					if(checkOldApathyLevel(3)){
						CMessage("Quit begging %Name%");
						setTempVar("AV_AskedEdge",true);
						found = true;
					}
					break;
				case 28:
					if(checkOldApathyLevel(4)){
						CMessage("Quit begging %Name%");
						setTempVar("AV_AskedEdge",true);
						found = true;
					}
					break;
				case 29:
					if(checkOldApathyLevel(5)){
						CMessage("Quit begging %Name%");
						setTempVar("AV_AskedEdge",true);
						found = true;
					}
					break;
				case 30:
					if(checkOldApathyLevel(1)){
						CMessage("%EmoteRandom%");
						run("Interrupt" + java.io.File.separator + "OpiatePTE1.js");
						found = true;
					}
					break;
				case 31:
					if(checkOldApathyLevel(2)){
						CMessage("%EmoteRandom%");
						run("Interrupt" + java.io.File.separator + "OpiatePTE1.js");
						found = true;
					}
					break;
				case 32:
					if(checkOldApathyLevel(3)){
						CMessage("%Shh%");
						setTempVar("AV_AskedEdge",true);
						found = true;
					}
					break;
				case 33:
					if(checkOldApathyLevel(4)){
						CMessage("%Shh%");
						setTempVar("AV_AskedEdge",true);
						found = true;
					}
					break;
				case 34:
					if(checkOldApathyLevel(5)){
						CMessage("%Shh%");
						setTempVar("AV_AskedEdge",true);
						found = true;
					}
					break;
				case 35:
					if(checkOldApathyLevel(1)){
						CMessage("%EmoteRandom%");
						run("Interrupt" + java.io.File.separator + "OpiatePTE1.js");
						found = true;
					}
					break;
				case 36:
					if(checkOldApathyLevel(2)){
						CMessage("%EmoteRandom%");
						run("Interrupt" + java.io.File.separator + "OpiatePTE1.js");
						found = true;
					}
					break;
				case 37:
					if(checkOldApathyLevel(3)){
						CMessage("%Shh%");
						setTempVar("AV_AskedEdge",true);
						found = true;
					}
					break;
				case 38:
					if(checkOldApathyLevel(4)){
						CMessage("%Shh%");
						setTempVar("AV_AskedEdge",true);
						found = true;
					}
					break;
				case 39:
					if(checkOldApathyLevel(5)){
						CMessage("%Shh%");
						setTempVar("AV_AskedEdge",true);
						found = true;
					}
					break;
				case 40:
					if(goodMood() ){
						run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "pvMs_EdgeAllowed.js");
						found = true;
					}
					break;
				case 41:
					if(goodMood() ){
						run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "pvMs_EdgeAllowed.js");
						found = true;
					}
					break;
				case 42:
					if(goodMood() ){
						run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "pvMs_EdgeAllowed.js");
						found = true;
					}
					break;
				case 43:
					if(goodMood() ){
						CMessage("No, keep stroking for me");
						setTempVar("AV_AskedEdge",true);
						found = true;
					}
					break;
				case 44:
					if(goodMood() ){
						CMessage("Maybe later");
						setTempVar("AV_AskedEdge",true);
						found = true;
					}
					break;
				case 45:
					if(neutralMood() ){
						CMessage("%OhNo%");
						setTempVar("AV_AskedEdge",true);
						found = true;
					}
					break;
				case 46:
					if(neutralMood() ){
						CMessage("%OhNo%");
						setTempVar("AV_AskedEdge",true);
						found = true;
					}
					break;
				case 47:
					if(neutralMood() ){
						CMessage("Nope, just keep stroking");
						setTempVar("AV_AskedEdge",true);
						found = true;
					}
					break;
				case 48:
					if(!getVar("AV_AskedEdge",false) ){
						CMessage("If I remember I am the one who tells you what to do and when you do it right?");
						setTempVar("AV_AskedEdge",true);
						found = true;
					}
					break;
				case 49:
					if(neutralMood() ){
						run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "pvMs_EdgeAllowed.js");
						found = true;
					}
					break;
				case 50:
					if(neutralMood() ){
						run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "pvMs_EdgeAllowed.js");
						found = true;
					}
					break;
				case 51:
					if(neutralMood() ){
						CMessage("Not now, %Name%");
						setTempVar("AV_AskedEdge",true);
						found = true;
					}
					break;
				case 52:
					if(neutralMood() ){
						CMessage("Maybe later");
						setTempVar("AV_AskedEdge",true);
						found = true;
					}
					break;
				case 53:
					if(badMood() ){
						CMessage("%OhNo%");
						setTempVar("AV_AskedEdge",true);
						found = true;
					}
					break;
				case 54:
					if(badMood() ){
						CMessage("%OhNo% just keep stroking");
						setTempVar("AV_AskedEdge",true);
						found = true;
					}
					break;
				case 55:
					if(badMood() ){
						CMessage("Don't even think about it, %Name%");
						run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "pvMs_PunishmentLight_Stroking.js");
						found = true;
					}
					break;
				case 56:
					if(badMood() ){
						CMessage("Don't even think about it, %Name%");
						setTempVar("AV_AskedEdge",true);
						found = true;
					}
					break;
				case 57:
					if(badMood() ){
						CMessage("Don't you fucking edge, %PetName%");
						setTempVar("AV_AskedEdge",true);
						found = true;
					}
					break;
				case 58:
					if(badMood() ){
						CMessage("You are NOT allowed to edge, %PetName%");
						run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "pvMs_PunishmentLight_Stroking.js");
						found = true;
					}
					break;
				case 59:
					if(badMood() ){
						CMessage("You are NOT allowed to edge, %PetName%");
						setTempVar("AV_AskedEdge",true);
						found = true;
					}
					break;
				case 60:
					if(getVar("AV_AskedEdge",false) ){
						CMessage("Don't try my patience %PetName%");
						found = true;
					}
					break;
				case 61:
					if(getVar("AV_AskedEdge",false) ){
						CMessage("Stop asking me if you can edge, it's not happening");
						found = true;
					}
					break;
				case 62:
					if(getVar("AV_AskedEdge",false) ){
						CMessage("No means no %EmoteRandom%");
						found = true;
					}
					break;
				case 63:
					if(getVar("AV_AskedEdge",false) ){
						CMessage("How many times you %Gonna% ask me %PetName%?");
						found = true;
					}
					break;
				case 64:
					if(getVar("AV_AskedEdge",false) ){
						CMessage("My answer hasn't changed");
						found = true;
					}
					break;
				case 65:
					if(getVar("AV_AskedEdge",false) ){
						CMessage("I told you %PetName%, you're not allowed to edge yet");
						found = true;
					}
					break;
				case 66:
					if(getVar("AV_AskedEdge",false) ){
						CMessage("I'll tell you when I want you to edge %PetName%");
						found = true;
					}
					break;
				case 67:
					if(getVar("AV_AskedEdge",false) ){
						CMessage("I'm not %Gonna% change my mind");
						found = true;
					}
					break;
				case 68:
					if(getVar("AV_AskedEdge",false) ){
						CMessage("You're not %Gonna% edge %PetName%, stop asking me");
						found = true;
					}
					break;
			}
		}
    }
    else {		//not stroking
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 2);
			switch (thisRandom){
				case 1:
					CMessage("%OhNo%");
					found = true;
					break;
				case 2:
					if (goodMood()){
						run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "pvMs_EdgeAllowed.js");
						found = true;
					}
					break;
			}
		}
    }
    DMessage("opiate_Begging-Edge: EndResponse");
    return true;
}