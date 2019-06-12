addResponseIndicator("collar me","wear a collar","wear collar","collar on","be collared");
//run("allutils.js");

function wantToWearCollarResponse(message) {
    DMessage("wantToWearCollar: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("wantToWearCollar: EndResponse Response is Disabled");
        return false;
    }
	if(getVar("firstRun",false)) {
		if(getVar("pvCollared", false))
		{
			CMessage("You should be collared already, %Name%");
		}
		if(!getVar("pvCollared", false))
		{
			run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_CollarDecide.js");
		}
	}
	else if(getVar("chastityOn", false)){
		if(getVar("pvCollared", false))
		{
			CMessage("You should be collared already, %Name%");
		}
		if(!getVar("pvCollared", false))
		{
			run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_CollarDecide.js");
		}
	}
	else if(getVar("cbtActive", false)){
		if(getVar("pvCollared", false))
		{
			CMessage("You should be collared already, %Name%");
		}
		else
		{
			CMessage("Don\'t change the subject, %Name%");
			setVar("AV_WantCollar", true);
		}
	}
	else if(getVar("holdingedge", false)){
		if(getVar("pvCollared", false))
		{
			CMessage("You should be collared already, %Name%");
		}
		else
		{
			CMessage("Shut up and keep edging %EmoteRandom%");
			setVar("AV_WantCollar", true);
		}
	}
    else if (isEdging())
    {
        if(getVar("pvCollared", false))
		{
			CMessage("You should be collared already, %Name%");
		}
		else
		{
			CMessage("Just get to the edge for me now, %Name%");
			setVar("AV_WantCollar", true);
		}
    }
    else if (isStrokingAll())
    {
        if(getVar("pvCollared", false))
		{
			CMessage("You should be collared already, %Name%");
		}
		if(!getVar("pvCollared", false))
		{
			run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_CollarDecide.js");
		}
    }
    else {		//not stroking
        if(getVar("pvCollared", false))
		{
			CMessage("You should be collared already, %Name%");
		}
		else
		{
			CMessage("Not now, %Name%");
			setVar("AV_WantCollar", true);
		}
    }
    DMessage("wantToWearCollar: EndResponse");
    return true;
}