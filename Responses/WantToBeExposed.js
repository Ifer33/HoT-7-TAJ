addResponseIndicator("want to be exposed","publicly humiliated","humiliated in public", "humiliated", "humiliation");
//run("allutils.js");

function WantToBeExposedResponse(message) {
    DMessage("WantToBeExposed: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("WantToBeExposed: EndResponse Response is Disabled");
        return false;
    }
	let found = false;
	while(!found){
		let thisRandom = randomInt(1, 4);
		switch (thisRandom){
			case 1:
				run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short10.js");
				found = true;
				break;
			case 2:
				CMessage("You're such a slut! %Lol%");
				setTempVar("AV_MEM_Humil",true);
				found = true;
				break;
			case 3:
				CMessage("Mmm I should figure out some way to use that against you... ");
				setTempVar("AV_MEM_Humil",true);
				found = true;
				break;
			case 4:
				CMessage("Maybe I should pimp you out for money... %Smile%");
				setTempVar("AV_MEM_Humil",true);
				found = true;
				break;
			case 5:
				CMessage("That would make an interesting coming-out party... %Laugh%");
				setTempVar("AV_MEM_Humil",true);
				found = true;
				break;
			case 6:
				CMessage("Maybe I should take you to the park and walk you like a dog");
				setTempVar("AV_MEM_Humil",true);
				found = true;
				break;
			case 7:
				CMessage("%AV_Mem_Humiliate%");
				found = true;
				break;
		}
    }
    DMessage("WantToBeExposed: EndResponse");
    return true;
}