addResponseIndicator("Anal play", "fuck me", "fuck me in the ass", "get my ass", "my ass is yours", "want to be fucked", "fuck my ass", "want anal", "want to do anal", "like to do anal", "do anal");
//run("allutils.js");

function AV_WantAnalResponse(message) {
    DMessage("aV_WantAnal: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("aV_WantAnal: EndResponse Response is Disabled");
        return false;
    }
	if(getVar("firstRun",false)) {
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 2);
			switch (thisRandom){
				case 1:
					run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_WantAnal.js");
					found = true;
					break;
				case 2:
					run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_AnalPlay.js");
					found = true;
					break;
			}
		}
	}
	else if(getVar("chastityOn", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 6);
			switch (thisRandom){
				case 1:
					run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_WantAnal.js");
					found = true;
					break;
				case 2:
					CMessage("I know that you have been wanting Me to peg you for a while");
					run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AskAnalNight.js");
					found = true;
					break;
				case 3:
					CMessage("I've been waiting for just the right time. I think that time has finally come.");
					run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_AnalPlay.js");
					found = true;
					break;
				case 4:
					CMessage("So, you want to get fucked in the ass?");
					run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AskAnalNight.js");
					found = true;
					break;
				case 5:
					CMessage("So, you want to get fucked in the ass?");
					setTempVar("AV_PunishRND_Punish03",true);
					run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_PunishRND.js");
					found = true;
					break;
				case 6:
					if(!getVar("AV_LikeAnal",false) ){
						run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_AnalPlay.js");
						found = true;
					}
					break;
			}
		}
	}
	else if(getVar("cbtActive", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 3);
			switch (thisRandom){
				case 1:
					if(!getVar("pvWA",false) ){
						CMessage("Hmm interesting... %Grin%");
						setTempVar("pvWA",true);
						found = true;
					}
					break;
				case 2:
					if(getVar("pvWA",false) ){
						CMessage("Yeah, you've told me already");
						found = true;
					}
					break;
				case 3:
					CMessage("No, now is time for ball slap.");
					found = true;
					break;
			}
		}
	}
	else if(getVar("holdingedge", false)){
		run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_AnalPlay.js");
	}
    else if (isEdging())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 7);
			switch (thisRandom){
				case 1:
					if(!getVar("pvWA",false) ){
						CMessage("Hmm interesting... %Grin%");
						setTempVar("pvWA",true);
						found = true;
					}
					break;
				case 2:
					if(getVar("pvWA",false) ){
						CMessage("Yeah, you've told me already");
						found = true;
					}
					break;
				case 3:
					CMessage("I know that you have been wanting Me to peg you for a while");
					run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AskAnalNight.js");
					found = true;
					break;
				case 4:
					CMessage("I've been waiting for just the right time. I think that time has finally come.");
					run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_AnalPlay.js");
					found = true;
					break;
				case 5:
					CMessage("So, you want to get fucked in the ass?");
					run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AskAnalNight.js");
					found = true;
					break;
				case 6:
					CMessage("So, you want to get fucked in the ass?");
					setTempVar("AV_PunishRND_Punish03",true);
					run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_PunishRND.js");
					found = true;
					break;
				case 7:
					if(!getVar("AV_LikeAnal",false) ){
						run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_AnalPlay.js");
						found = true;
					}
					break;
			}
		}
    }
    else if (isStrokingAll())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 6);
			switch (thisRandom){
				case 1:
					run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_WantAnal.js");
					found = true;
					break;
				case 2:
					CMessage("I know that you have been wanting Me to peg you for a while");
					run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AskAnalNight.js");
					found = true;
					break;
				case 3:
					CMessage("I've been waiting for just the right time. I think that time has finally come.");
					run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_AnalPlay.js");
					found = true;
					break;
				case 4:
					CMessage("So, you want to get fucked in the ass?");
					run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AskAnalNight.js");
					found = true;
					break;
				case 5:
					CMessage("So, you want to get fucked in the ass?");
					setTempVar("AV_PunishRND_Punish03",true);
					run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_PunishRND.js");
					found = true;
					break;
				case 6:
					if(!getVar("AV_LikeAnal",false) ){
						run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_AnalPlay.js");
						found = true;
					}
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
					if(!getVar("pvWA",false) ){
						CMessage("Hmm interesting... %Grin%");
						setTempVar("pvWA",true);
						found = true;
					}
					break;
				case 2:
					if(getVar("pvWA",false) ){
						CMessage("Yeah, you've told me already");
						found = true;
					}
					break;
				case 3:
					CMessage("I know that you have been wanting Me to peg you for a while");
					run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AskAnalNight.js");
					found = true;
					break;
				case 4:
					CMessage("I've been waiting for just the right time. I think that time has finally come.");
					run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_AnalPlay.js");
					found = true;
					break;
				case 5:
					CMessage("So, you want to get fucked in the ass?");
					run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AskAnalNight.js");
					found = true;
					break;
				case 6:
					CMessage("So, you want to get fucked in the ass?");
					setTempVar("AV_PunishRND_Punish03",true);
					run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_PunishRND.js");
					found = true;
					break;
				case 7:
					if(!getVar("AV_LikeAnal",false) ){
						run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_AnalPlay.js");
						found = true;
					}
					break;
			}
		}
    }
    DMessage("aV_WantAnal: EndResponse");
    return true;
}