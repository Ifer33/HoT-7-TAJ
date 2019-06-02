addResponseIndicator("you control me","you control my","am controlled by you","I'm controlled by you","under your control");
//run("allutils.js");

function youControlMeResponse(message) {
    DMessage("youControlMe: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("youControlMe: EndResponse Response is Disabled");
        return false;
    }
    else {		//not stroking
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 10);
			switch (thisRandom){
				case 1:
					CMessage("That\'s right, never forget it %Name%");
					setTempVar("AV_MEM_MenNControl", true);
					found = true;
					break;
				case 2:
					CMessage("I control you more then you are even aware of %Grin%");
					setTempVar("AV_MEM_MenNControl", true);
					found = true;
					break;
				case 3:
					if(!getVar("AV_Beta", false))
					{
						CMessage("Damn right you are");
						run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_Beta.js");
						found = true;
					}
					break;
				case 4:
					if(!getVar("AV_Beta", false))
					{
						run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_Beta.js");
						found = true;
					}
					break;
				case 5:
					if(!getVar("AV_TotalControl", false))
					{
						CMessage("Really?");
						run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_TotalControl.js");
						found = true;
					}
					break;
				case 6:
					if(!getVar("AV_TotalControl", false))
					{
						run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_TotalControl.js");
						found = true;
					}
					break;
				case 7:
					CMessage("I love hearing that %Smile%");
					setTempVar("AV_MEM_MenNControl", true);
					found = true;
					break;
				case 8:
					CMessage("Damn right you are");
					setTempVar("AV_MEM_MenNControl", true);
					found = true;
					break;
				case 9:
					CMessage("Yes... that must be so frustrating for you %Smile%");
					setTempVar("AV_MEM_MenNControl", true);
					found = true;
					break;
				case 10:
					CMessage("Yes and I wouldn\'t want it any other way, %Name%");
					setTempVar("AV_MEM_MenNControl", true);
					found = true;
					break;
			}
		}
    }
    DMessage("youControlMe: EndResponse");
    return true;
}