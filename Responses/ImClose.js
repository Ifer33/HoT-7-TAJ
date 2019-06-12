addResponseIndicator("edge", "close", "there");

let timesClose;
function imCloseResponse(message) {
    DMessage("ImClose: BeginningResponse");
	//handle edgeMode "Normal", "Goto", "Video"
	//seems unsafe dont know better
	let mode = getVar("edgingmode", "Normal");
	if( mode == "Normal" ){
		//go on
	}else if( mode == "Goto" ){
		DMessage("ImClose: edgeMode: Goto: " + getVar("edginggoto", "error") );
		DMessage("ImClose: EndResponse");
		return eval(getVar("edginggoto") );
		//eval(getVar("edginggoto") );
		//return;
		//return throwEdge();
	}else if( mode == "Video" ){
		if(isPlayingVideo()) {
			stopVideo();
		}
		DMessage("ImClose: edgeMode: Video: " + getVar("edginggoto", "error") );
		DMessage("ImClose: EndResponse");
		return eval(getVar("edginggoto") );
		//eval(getVar("edginggoto") );
		//return eval("return");
	}
	
    if (getResponsesDisabled()) {
        DMessage("ImClose: EndResponse Response is Disabled");
        return false;
    }
    if (timesClose == null) {
        timesClose = 0;
    }
    if (isEdging())
    {
        timesClose++;
        setTempVar("edging", false);
    }
    else if (isStrokingAll())//||stroking)
    {
        timesClose++;
        let apmIndex = getApathyMoodIndex();
        let random = randomInteger(1, 5);
        let percentStroking = getStrokingPercent();
		if(!percentStroking>=0 && !percentStroking<=100){
			percentStroking=randomInteger(1,100);
		}
        let decision = 1.054196 + (0.004457 * apmIndex * random) + (0.470061 * percentStroking * Math.pow(random, 2)) - (0.105613 * random) - (1.553526 * percentStroking * random)
        if (decision < 0) {
            decision = 0;
        }
		if (decision > 4) {//new
            decision = randomInteger(0,4);
        }
        DMessage("random " + random + " apm " + apmIndex + " percentstroke " + percentStroking, 0);
        DMessage(decision, 0);
		
		/*CMessage("This is really hard for you %petname%.");
		CMessage("Strangely though, I'm feeling generous...")
		//CMessage("%stopstroking%");
		//if(isStroking()){
			//stopStroking();
			//endStroking();
		stopStrokingAll();	
		//}
		*/
        switch (Math.round(decision))
        {
            case 0:
                CMessage("This is really hard for you %petname%.");
                CMessage("Strangely though, I'm feeling generous...")
                //endStroking();
				//CMessage("%stopstroking%");
				//stopStroking();
				stopStrokingAll();
                break;
            case 1:
                CMessage("I can't have you edging so easily %petname%.");
                CMessage("%strokeslower%");
                slowStroking(2);
                break;
            case 2:
                CMessage("Oh, you are on the edge?");
                CMessage("It's funny that you think that I care...");
                CMessage("Keep stroking %petname%");
                break;
            case 3:
                CMessage("I bet you want to cum so badly %grin%.");
                CMessage("Too bad you can't");
                CMessage("Keep stroking %petname%");
                CMessage("Oh...", 2);
                CMessage("And to make it harder for you...");
                CMessage("Stare at this while you keep stroking %grin%.");
                getTeasePicture(4);
                break;
            case 4:
                CMessage("The fact that you are on the edge right now means that I haven't been hard enough on you");
                CMessage("I'm very sorry about that %petname%. I'll make sure to go harder on you %grin%.");
                CMessage("Why don't you keep stroking while you stare at this");
                getTeasePicture(4);
                CMessage("Oh and also...", 2);
                CMessage("%strokefaster%");
                speedUpStroking(3);
                break;
        }
    }
    else
    {
        CMessage("You shouldnt even be stroking %petname%");
    }
    DMessage("ImClose: EndResponse");
    return true;
}