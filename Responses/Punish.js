addResponseIndicator("punish", "can you punish me", "punish me", "bad boy", "punished", "i was bad", "i've been bad", "ive been bad", "want to be punished", "need to be punished");
//run("allutils.js");

function punishResponse(message) {
    DMessage("punish: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("punish: EndResponse Response is Disabled");
        return false;
    }
	if(getVar("firstRun",false)) {
		CMessage("Already? OK. %stopstroking%");
		stopStrokingAll();
		cbt();
	}
	else if(getVar("cbtActive", false)){
		run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "pvMs_PunishMePlease.js");
	}
	else if(getVar("holdingedge", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 7);
			switch (thisRandom){
				case 1:
					run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "pvMs_PunishMePlease.js");
					found = true;
					break;
				case 2:
					CMessage("If you're actually <i>asking</i> me to %Torture% you. %HoldTheEdge%");
					sleep(30);
					found = true;
					break;
				case 3:
					CMessage("If you want to be punished so bad I'm not %Gonna% stop you %PetName%.  %HoldTheEdge%");
					sleep(30);
					found = true;
					break;
				case 4:
					CMessage("You're so impatient to start be %Hurting% for me %PetName%. %HoldTheEdge%");
					sleep(30);
					found = true;
					break;
				case 5:
					if(!getVar("av_standing_position",false) ){
						CMessage("You will now get into the Standing Position until I say to stop edging");
						showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01.jpg");
						found = true;
					}
					break;
				case 6:
					if(!getVar("av_submissive_position",false) ){
						CMessage("You will now get into the Submissive Position until I say to stop edging");
						showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04.jpg");
						found = true;
					}
					break;
				case 7:
					if(!getVar("av_basic_position",false) ){
						CMessage("You will now get into the Basic Position until I say to stop edging");
						showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02.jpg");
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
			let thisRandom = randomInt(1, 3);
			switch (thisRandom){
				case 1:
					CMessage("If you're actually <i>asking</i> me to %Torture% you. %HoldTheEdge%");
					sleep(30);
					found = true;
					break;
				case 2:
					CMessage("If you want to be punished so bad I'm not %Gonna% stop you %PetName%.  %HoldTheEdge%");
					sleep(30);
					found = true;
					break;
				case 3:
					CMessage("You're so impatient to start be %Hurting% for me %PetName%. %HoldTheEdge%");
					sleep(30);
					found = true;
					break;
			}
		}
    }
    else if (isStrokingAll())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 24);
			switch (thisRandom){
				case 1:
					CMessage("If you're actually <i>asking</i> me to %Torture% you.");
					edge();
					found = true;
					break;
				case 2:
					CMessage("If you want to be punished so bad I'm not %Gonna% stop you %PetName%.");
					edge();
					found = true;
					break;
				case 3:
					CMessage("You're so impatient to start be %Hurting% for me %PetName%.");
					edge();
					found = true;
					break;
				case 4:
					CMessage("If you want to be punished so bad I'm not %Gonna% stop you %PetName%.");
					CMessage("%stopstroking%", 0);
					stopStrokingAll();
					cbt();
					found = true;
					break;
				case 5:
					CMessage("You're so impatient to start be %Hurting% for me %PetName%.");
					CMessage("%stopstroking%", 0);
					stopStrokingAll();
					cbt();
					found = true;
					break;
				case 6:
					CMessage("If you're actually <i>asking</i> me to %Torture% you.");
					CMessage("%stopstroking%", 0);
					stopStrokingAll();
					cbt();
					found = true;
					break;
				case 7:
					CMessage("If you're actually <i>asking</i> me to %Torture% you.");
					run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_Punish1.js");
					found = true;
					break;
				case 8:
					CMessage("If you want to be punished so bad I'm not %Gonna% stop you %PetName%.");
					run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_Punish2.js");
					found = true;
					break;
				case 9:
					CMessage("OK I will %Hurting% you");
					CMessage("%stopstroking%", 0);
					stopStrokingAll();
					cbt();
					found = true;
					break;
				case 10:
					if(!getVar("av_standing_position",false) ){
						CMessage("You will now get into the Standing Position until I say to stop edging");
						showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01.jpg");
						found = true;
					}
					break;
				case 11:
					if(!getVar("av_submissive_position",false) ){
						CMessage("You will now get into the Submissive Position until I say to stop edging");
						showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04.jpg");
						found = true;
					}
					break;
				case 12:
					if(!getVar("av_basic_position",false) ){
						CMessage("You will now get into the Basic Position until I say to stop edging");
						showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02.jpg");
						found = true;
					}
					break;
				case 13:
					CMessage("If you want to be punished so bad I'm not %Gonna% stop you %PetName%.");
					run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_PunishRND.js");
					found = true;
					break;
				case 14:
					CMessage("If you're actually <i>asking</i> me to %Torture% you.");
					run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_PunishRND.js");
					found = true;
					break;
				case 15:
					CMessage("In this case, a punishment must be applied");
					run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_PunishRND.js");
					found = true;
					break;
				case 16:
					CMessage("If you want to be punished so bad I'm not %Gonna% stop you %PetName%.");
					run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_Punish1.js");
					found = true;
					break;
				case 17:
					CMessage("If you're actually <i>asking</i> me to %Torture% you.");
					run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_Punish1.js");
					found = true;
					break;
				case 18:
					CMessage("In this case, a punishment must be applied");
					run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_Punish1.js");
					found = true;
					break;
				case 19:
					CMessage("If you want to be punished so bad I'm not %Gonna% stop you %PetName%.");
					run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_Punish2.js");
					found = true;
					break;
				case 20:
					CMessage("If you're actually <i>asking</i> me to %Torture% you.");
					run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_Punish2.js");
					found = true;
					break;
				case 21:
					CMessage("In this case, a punishment must be applied");
					run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_Punish2.js");
					found = true;
					break;
				case 22:
					CMessage("If you want to be punished so bad I'm not %Gonna% stop you %PetName%.");
					run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_Punish3.js");
					found = true;
					break;
				case 23:
					CMessage("If you're actually <i>asking</i> me to %Torture% you.");
					run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_Punish3.js");
					found = true;
					break;
				case 24:
					CMessage("In this case, a punishment must be applied");
					run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_Punish3.js");
					found = true;
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
					CMessage("If you're actually <i>asking</i> me to %Torture% you.");
					edge();
					found = true;
					break;
				case 2:
					CMessage("If you want to be punished so bad I'm not %Gonna% stop you %PetName%.");
					edge();
					found = true;
					break;
				case 3:
					CMessage("You're so impatient to start be %Hurting% for me %PetName%.");
					edge();
					found = true;
					break;
				case 4:
					CMessage("If you want to be punished so bad I'm not %Gonna% stop you %PetName%.");
					cbt();
					found = true;
					break;
				case 5:
					CMessage("You're so impatient to start be %Hurting% for me %PetName%.");
					cbt();
					found = true;
					break;
				case 6:
					CMessage("If you're actually <i>asking</i> me to %Torture% you.");
					cbt();
					found = true;
					break;
				case 7:
					run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "pvMs_PunishMePlease.js");
					found = true;
					break;
				case 8:
					CMessage("OK I will %Hurting% you");
					cbt();
					found = true;
					break;
				case 9:
					CMessage("OK I will %Hurting% you");
					run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_Punish3.js");
					found = true;
					break;
			}
		}
    }
    DMessage("punish: EndResponse");
    return true;
}