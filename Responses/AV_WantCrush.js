addResponseIndicator(getVar("AV_Persona13", "gdfhcvnvb"),getVar("AV_Persona01", "gdfhcvnvb"),getVar("AV_Persona02", "gdfhcvnvb"),getVar("AV_Persona04", "gdfhcvnvb"),getVar("AV_Persona50", "gdfhcvnvb"),getVar("AV_Persona51", "gdfhcvnvb"),getVar("AV_Persona52", "gdfhcvnvb"),getVar("AV_Persona53", "gdfhcvnvb"),getVar("AV_Persona54", "gdfhcvnvb"),getVar("AV_Persona55", "gdfhcvnvb"),getVar("AV_Persona56", "gdfhcvnvb"),getVar("AV_Persona57", "gdfhcvnvb"),getVar("AV_Persona58", "gdfhcvnvb"),getVar("AV_Persona59", "gdfhcvnvb"));
//run("allutils.js");

function AV_WantCrushResponse(message) {
    DMessage("aV_WantCrush: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("aV_WantCrush: EndResponse Response is Disabled");
        return false;
    }
	let found = false;
	while(!found){
		let thisRandom = randomInt(1, 3);
		switch (thisRandom){
			case 1:
				if(!getVar("AV_MEM_Crush",false) ){
					CMessage("So you "+random("want to", "just love")+" jerking off to your crushes...");
					run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushQuest.js");
					found = true;
				}
				break;
			case 2:
				if(!getVar("AV_MEM_Crush",false) ){
					CMessage("You love looking at their pictures and "+random("stroking", "tugging")+" your %Cock%, huh?");
					run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushQuest.js");
					found = true;
				}
				break;
			case 3:
				if(getVar("AV_MEM_Crush",false) ){
					CMessage(random("I know","We will see that later"));
					found = true;
				}
				break;
		}
	}
	DMessage("aV_WantCrush: EndResponse");
    return true;
}