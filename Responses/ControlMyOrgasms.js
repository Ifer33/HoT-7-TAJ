addResponseIndicator("control my orgasm","limit my orgasm","decide whether I get to cum","control over my orgasm","orgasm should be your decision","orgasm should be up to you");


function controlMyOrgasmsResponse(message) {
    DMessage("controlMyOrgasm: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("controlMyOrgasm: EndResponse Response is Disabled");
        return false;
    }
	if(!getVar("startDate").addMinute(5).hasPassed()) {
		if(getVar("pthevCompleteControlYES",false) ){
			CMessage(random("Whether or not you get to cum is <i>always up to me, %Name%",
				"I love controlling your orgasms %Giggles%",
				"Yes... that must be so frustrating for you %Smile%",
				"Yes and I wouldn't want it any other way, %Name%",
				"I <i>do control your orgasms, and that's the way it should be %Smile%") );
		}else{
			CMessage("Interesting, but let's talk about that another time, okay?");
			setVar("pvWantCoCo",true);
		}
	}
	else if(getVar("chastityOn", false)){
		if(getVar("pthevCompleteControlYES",false) ){
			CMessage(random("Whether or not you get to cum is <i>always up to me, %Name%",
				"I love controlling your orgasms %Giggles%",
				"Yes... that must be so frustrating for you %Smile%",
				"Yes and I wouldn't want it any other way, %Name%",
				"I <i>do control your orgasms, and that's the way it should be %Smile%") );
		}else{
			CMessage("Interesting, but let's talk about that another time, okay?");
			setVar("pvWantCoCo",true);
		}	
	}
	else if(getVar("holdingedge", false)){
		if(getVar("pthevCompleteControlYES",false) ){
			CMessage(random("Whether or not you get to cum is <i>always up to me, %Name%",
				"I love controlling your orgasms %Giggles%",
				"Yes... that must be so frustrating for you %Smile%",
				"Yes and I wouldn't want it any other way, %Name%",
				"I <i>do control your orgasms, and that's the way it should be %Smile%") );
		}else{
			CMessage("Interesting, but let's talk about that another time, okay?");
			setVar("pvWantCoCo",true);
		}
	}
    else if (isEdging())
    {
        if(getVar("pthevCompleteControlYES",false) ){
			CMessage(random("Whether or not you get to cum is <i>always up to me, %Name%",
				"I love controlling your orgasms %Giggles%",
				"Yes... that must be so frustrating for you %Smile%",
				"Yes and I wouldn't want it any other way, %Name%",
				"I <i>do control your orgasms, and that's the way it should be %Smile%") );
		}else{
			CMessage("Interesting, but let's talk about that another time, okay?");
			setVar("pvWantCoCo",true);
		}
    }
    else if (isStroking())
    {
        if(getVar("pthevCompleteControlYES",false) ){
			CMessage(random("Whether or not you get to cum is <i>always up to me, %Name%",
				"I love controlling your orgasms %Giggles%",
				"Yes... that must be so frustrating for you %Smile%",
				"Yes and I wouldn't want it any other way, %Name%",
				"I <i>do control your orgasms, and that's the way it should be %Smile%") );
		}else{
			CMessage("Interesting, but let's talk about that another time, okay?");
			run("Interrupt" + java.io.File.separator + "pvIn_WantOrgasmControl.js");
		}
    }
    else {		//not stroking
        if(getVar("pthevCompleteControlYES",false) ){
			CMessage(random("Whether or not you get to cum is <i>always up to me, %Name%",
				"I love controlling your orgasms %Giggles%",
				"Yes... that must be so frustrating for you %Smile%",
				"Yes and I wouldn't want it any other way, %Name%",
				"I <i>do control your orgasms, and that's the way it should be %Smile%") );
		}else{
			CMessage("Interesting, but let's talk about that another time, okay?");
			setVar("pvWantCoCo",true);
		}
    }
    DMessage("controlMyOrgasm: EndResponse");
    return true;
}