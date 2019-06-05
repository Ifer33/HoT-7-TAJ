DMessage("helperFunctions: Start");
//let separator = java.io.File.separator;

function chance(percent){
	return randomInteger(1, 100) <= percent;
}

function edge(message=null,delay=-1,sender=1){
	if(message == null){
		startEdging("%Edge%",delay,sender);
	}else{
		startEdging(message,delay,sender);
	}
	SMessage("%stopstroking%", 0,sender);
    SMessage("%LetTheEdgeFade%",delay,sender);
	return;
}

function greenLight(){
	CMessage("<c=green b> GREEN LIGHT");
	setStrokingNoTaunt();
	return;
}

function redLight(){
	CMessage("<c=red b> RED LIGHT");
	stopStroking();
	stopAudio();
	stopVideo();
	return;
}

//Var needs to be set, if ballTorture is allowed
function ballTorture(){
	return getVar("ballTorture", false);
}

//Var needs to be set, if cockTorture is allowed
function cockTorture(){
	return getVar("cockTorture", false);
}

//Var needs to be set
function cbtBallLevel(lvl=3){
	return lvl==getVar("cbtBallLevel",3);
}

//Var needs to be set
function cbtCockLevel(lvl=3){
	return lvl==getVar("cbtCockLevel",3);
}
//combined cbt level
function cbtLevel(lvl=3){
	return lvl== Math.round(getVar("cbtBallLevel",3)+getVar("cbtCockLevel",3)/2 );
}

//cbt instructions
/**idea: cbt files as vocabs, calculate rounds here
* depending from moodApathyIndex?? or old mood/domlvl/apathylvl/cbtlvl
**/
function cbt(cockOrBalls = "both", delay = 0, sender = 1, rounds = 3){	
	//todo calc rounds
	DMessage("CBT: Beginning");
	setVar("sendDelay",delay);
	setVar("sendSender",sender);
	setTempVar("cbtActive",true);
	if( cockOrBalls == "both" ){
		cockOrBalls = random("cock","ball");
	}
	
	if( cockOrBalls == "cock" ){
		setTempVar("cbtCockActive",true);
		setTempVar("SessionCBTCock",getVar("SessionCBTCock",0)+1 );
		run("CBT" + java.io.File.separator + "CBTCock_First.js");
	} else {
		setTempVar("SessionCBTBalls",getVar("SessionCBTBalls",0)+1 );
		setTempVar("cbtBallActive",true);
		run("CBT" + java.io.File.separator + "CBTBalls_First.js");
	}
	answer0 = createInput(30);//.getAnswer();
	while (!(answer0.isLike("satisfied") || answer0.isLike("done") || answer0.isLike("no") || answer0.isLike("ready") || answer0.isLike("finished") || answer0.isLike("yes") ))
	{
		if (answer0.isTimeout())
		{
			break;
		}
		answer0 = getInput("yes done or no %SubName%?",10,delay, false, sender);
	}
	if (answer0.isLike("satisfied", "done", "ready", "finished", "yes"))
	{
		//CMessage("%Okay%");
	}
	else if (answer0.isLike("no"))
	{
		SMessage("You don\'t?",delay,sender);
		//maybe punish
	}
	for(var i = 1; i<rounds;i++){
		//CMessage("%"+task+"%");
		setVar("sendDelay",delay);
		setVar("sendSender",sender);
		if( cockOrBalls == "cock" ){
			run("CBT" + java.io.File.separator + "CBTCock.js");
		} else {
			run("CBT" + java.io.File.separator + "CBTBalls.js");
		}
		answer0 = createInput(30);//.getAnswer();
		while (!(answer0.isLike("satisfied") || answer0.isLike("done") || answer0.isLike("no") || answer0.isLike("ready") || answer0.isLike("finished") || answer0.isLike("yes") ))
		{
			if (answer0.isTimeout())
			{
				break;
			}
			answer0 = getInput("yes done or no %SubName%?",10,delay, false, sender);
		}
		if (answer0.isLike("satisfied", "done", "ready", "finished", "yes"))
		{
			//CMessage("%Okay%");
		}
		else if (answer0.isLike("no"))
		{
			SMessage("You don\'t?",delay,sender);
			//maybe punish
		}
		//wait for response or timeout passed
		//getInput while etc...
	}
	delVar("cbtActive");
	delVar("cbtCockActive");
	delVar("cbtBallActive");
	DMessage("CBT: End");
	return;
}

//Tasks like glittercbt first instruction from "taskFirst.js" every other from "task.js"
//files must be in custom/tasks
//call with customTask("Task");
function customTask(task = null, delay = -1, sender = 1, rounds = 3){
	DMessage("CustomTask: Beginning");
	//todo calc rounds
	if( task!= null){	//maybe also check if string
		setVar("sendDelay",delay);
		setVar("sendSender",sender);
		//CMessage("%"+task+"_First%");
		eval( run("Custom" + separator + "Tasks" + separator + task+"_First.js") );
		//let answer0 = getInput("", 30, delay, false, sender);
		answer0 = createInput(30);//.getAnswer();
		while (!(answer0.isLike("satisfied") || answer0.isLike("done") || answer0.isLike("no") || answer0.isLike("ready") || answer0.isLike("finished") || answer0.isLike("yes") ))
		{
			if (answer0.isTimeout())
			{
				break;
			}
			answer0 = getInput("yes done or no %SubName%?",10,delay, false, sender);
		}
		if (answer0.isLike("satisfied", "done", "ready", "finished", "yes"))
		{
			//CMessage("%Okay%");
		}
		else if (answer0.isLike("no"))
		{
			SMessage("You don\'t?",delay,sender);
			//maybe punish
		}
		for(var i = 1; i<rounds;i++){
			//CMessage("%"+task+"%");
			setVar("sendDelay",delay);
			setVar("sendSender",sender);
			eval( run("Custom" + separator + "Tasks" + separator + task+".js") );
			answer0 = createInput(30);//.getAnswer();
			while (!(answer0.isLike("satisfied") || answer0.isLike("done") || answer0.isLike("no") || answer0.isLike("ready") || answer0.isLike("finished") || answer0.isLike("yes") ))
			{
				if (answer0.isTimeout())
				{
					break;
				}
				answer0 = getInput("yes done or no %SubName%?",10,delay, false, sender);
			}
			if (answer0.isLike("satisfied", "done", "ready", "finished", "yes"))
			{
				//CMessage("%Okay%");
			}
			else if (answer0.isLike("no"))
			{
				SMessage("You don\'t?",delay,sender);
				//maybe punish
			}
			//wait for response or timeout passed
			//getInput while etc...
		}
		
	}
	DMessage("CustomTask: End");
	return;
}

/* find random line with condition true and then execute it
for vocabularies, customTasks, cbt,...
needs array of arrays with each entry needs a condition,message and command like:
	let lines = [ 
		[null,"Let's start with 5 smacks on either cheek",null],
		["av_know_00","For starters, give me 10 hard smacks",null],
		[null,"Give me 15 smacks, %PetName%", "playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"spank\" + java.io.File.separator + \"Spank15.mp3\")" ],
		[["av_know_00","av_know_04"],"Let's begin with 10 smacks across your ass",null] ];
*/
function execRndLine(lines=null){	//,delay=0, sender=-1){
	DMessage("execRndLine: Beginning");
	let delay= getVar("sendDelay");
	let sender= getVar("sendSender");
	if(lines instanceof Array){
		var found = false;
		while(!found){
			DMessage(lines);
			var i = randomInt(0,lines.length-1);
			if(lines[i][0]==null){	//check if line has condition
				found = true;
				DMessage("execRndLine: no Condition");
				DMessage("delay= "+delay);
				DMessage("sender= "+sender);
				if (delay == 0 && sender == -1){
				//if( typeof lines[i][1] === "string" ){
					CMessage(lines[i][1]);
					DMessage("execRndLine: lines[i][1] ist string");
				}else {
				//}else if( lines[i][1] instanceof Array ){
					//SMessage(lines[i][1][0],lines[i][1][1],lines[i][1][2]);
					SMessage(lines[i][1],delay,sender);
					DMessage("execRndLine: lines[i][1] ist array");
				}
				//CMessage(lines[i][1]);
				if(lines[i][2]!=null){	//check if line has command
					DMessage(lines[i][2]);
					DMessage("execRndLine: lines[i][2] ist command");
					eval(lines[i][2]);
				}
			}else if( lines[i][0].slice(lines[i][0].length-1)==")"){		//check if conditions is function call
				DMessage("execRndLine: eval Condition");
				//DMessage(eval(lines[i][0]));
				if( eval(lines[i][0]) ){
					found = true;
					DMessage("execRndLine: has Condition");
					DMessage("delay= "+delay);
					DMessage("sender= "+sender);
					if (delay == 0 && sender == -1){
					//if( typeof lines[i][1] === "string" ){
						CMessage(lines[i][1]);
						DMessage("execRndLine: lines[i][1] ist string");
					}else {
					//}else if( lines[i][1] instanceof Array ){
						//SMessage(lines[i][1][0],lines[i][1][1],lines[i][1][2]);
						SMessage(lines[i][1],delay,sender);
						DMessage("execRndLine: lines[i][1] ist array");
					}
					//CMessage(lines[i]);
					if(lines[i][2]!=null){
						DMessage(lines[i][2]);
						DMessage("execRndLine: lines[i][2] ist command");
						eval(lines[i][2]);
					}
				}
			}
		}
		setVar("sendDelay",0);
		setVar("sendSender",-1);
		DMessage("execRndLine: End");
		return;
	}
	setVar("sendDelay",0);
	setVar("sendSender",-1);
	DMessage("execRndLine: Error no array");
	DMessage("execRndLine: End");
	return;
}


/**
* checks one or an array of flags with "and"
* if or = true checks an array of flags with "or"
* for and/or use multiple calls like: 
* if( flag(["av_fetish_cei","av_fetish_cfnm"], true) && !flag("av_know_00") ){do...}
* = if ("av_fetish_cei" or "av_fetish_cfnm" = true) and not "av_know_00"
**/
function flag(flags = null, or = false){	
	DMessage("flags: Beginning");
	let bool = true;
	if (typeof flags === "string"){
		DMessage("flags: SingleFlag");
		if(getVar(flags, false)){
			bool = true;
		}else {
			bool = false;
		}
		DMessage("flags = " + flags);
		DMessage("bool = " + bool);
		DMessage("flags: End");
		return bool;
	}else if(or){
		DMessage("flags: FlagOr");
		if(flags instanceof Array){
			bool = false;
			for (var i = 0; i <= flags.length -1; i++){
				DMessage("flags["+i+"] = " + flags[i]);
				if (flags[i] instanceof Array){	//check if multiple flag[i] has a not	
					if(flags[i][1] == "not"){
						DMessage("flags: ArrayFlagNot");
						DMessage("getVar(flags["+i+"]) = " + getVar(flags[i], false));
						if(!getVar(flags[i][0], false)){	//flags mit and verknüpft hier auf nicht flag geprüft
							bool = true;
							DMessage("bool= " + bool);
							DMessage("flags: End");
							return bool;
						}
						DMessage("bool= " + bool);
					}
				}
				else if(typeof flags[i] === "string"){	//if string => singleFlagNot or multipleFlag with and
					DMessage("flags: StringFlag");
					if(i==0 && flags[1]=="not"){		//only one flag with not
						DMessage("flags: SingleFlagNot");
						if(!getVar(flags[i], false)){	
							bool = true;
							DMessage("getVar(flags["+i+"]) = " + getVar(flags[i], false));
							DMessage("bool= " + bool);
							DMessage("flags: End");
							return bool;
						}
						i++
					}else if(getVar(flags[i], false)){		//flags connected with and
						bool = true;
						DMessage("flags: End");
						return bool;
					}
				}
			}
			DMessage("flags: End");
			return bool;
		}
	}else if(flags instanceof Array){
		DMessage("flags: FlagArray");
		for (var i = 0; i <= flags.length -1; i++){
			DMessage("flags["+i+"] = " + flags[i]);
			if (flags[i] instanceof Array){	//check if multiple flag[i] has a not	
				if(flags[i][1] == "not"){
					DMessage("flags: ArrayFlagNot");
					DMessage("getVar(flags["+i+"]) = " + getVar(flags[i], false));
					if(getVar(flags[i][0], false)){	//flags mit and verknüpft hier auf nicht flag geprüft
						bool = false;
						DMessage("bool= " + bool);
						DMessage("flags: End");
						return bool;
					}
					DMessage("bool= " + bool);
				}
			}
			else if(typeof flags[i] === "string"){	//if string => singleFlagNot or multipleFlag with and
				DMessage("flags: StringFlag");
				if(i==0 && flags[1]=="not"){		//only one flag with not
					DMessage("flags: SingleFlagNot");
					if(getVar(flags[i], false)){	
						bool = false;
						DMessage("getVar(flags["+i+"]) = " + getVar(flags[i], false));
						DMessage("bool= " + bool);
						DMessage("flags: End");
						return bool;
					}
					i++
				}else if(!getVar(flags[i], false)){		//flags connected with and
					bool = false;
					DMessage("flags: End");
					return bool;
				}
			}
		}
		DMessage("flags: End");
		return bool;
	}
	DMessage("flags: ERROR No String Or Array");
	DMessage("flags: End");
	return false;
}

function decideEdge(){	//decide holdEdge or stop atm just stop
	//todo real decision
	DMessage("decideEdge: Beginning");
	if(isStroking() ){
		DMessage("decideEdge: isStroking");
		CMessage("%stopstrokingedge%", null, false);
		CMessage("%lettheedgefade%");
	}
	DMessage("decideEdge: End");
	return;
}

/**
* simple helper method to calculate the time passed since the given date
* or beginning of the session in minutes
**/
function getMinutesPassed(timeVar = "startDate") {
	DMessage("getMinutesPassed: Beginning");
    let startedAt = getVariable(timeVar).getTimeInMillis();	//get time from var and convert to milliSec
	startedAt = Math.round( startedAt/1000/60 );		//convert millis to minutes
	DMessage("startedAt = " + startedAt);
    let n = Math.round( new Date().getTime()/1000/60 );		//get current time in minutes
	DMessage("n = " + n);
	DMessage("n - startedAt = " + (n - startedAt) );
	DMessage("getMinutesPassed: End");
    return n - startedAt;
}

/**
* simple helper method to calculate the time passed since the given date in seconds/minutes/hours/...
* or beginning of the session in minutes
* format = "auto" return an array with the time passed and if its seconds/minutes/hours/...
**/
function getTimePassed(timeVar = "startDate", format = "minutes") {//stdValue: startDate,minute 
	DMessage("getTimePassed: Beginning");
	if(getVariable(timeVar,0)!=0){
		if(format == "minutes"){
			let startedAt = getVariable(timeVar).getTimeInMillis();	//get time from var and convert to milliSec
			startedAt = Math.round( startedAt/1000/60 );		//convert millis to minutes
			DMessage("startedAt = " + startedAt);
			let n = Math.round( new Date().getTime()/1000/60 );		//get current time in minutes
			DMessage("n = " + n);
			DMessage("n - startedAt = " + (n - startedAt) );
			DMessage("getTimePassed: End_minute");
			return n - startedAt;
		} else if(format == "hours"){
			let startedAt = getVariable(timeVar).getTimeInMillis();
			startedAt = Math.round( startedAt/1000/60/60 );	
			let n = Math.round( new Date().getTime()/1000/60/60 );
			DMessage("getTimePassed: End_hours");		
			return n - startedAt;
		}else if(format == "seconds"){
			let startedAt = getVariable(timeVar).getTimeInMillis();
			startedAt = Math.round( startedAt/1000 );
			let n = Math.round( new Date().getTime()/1000 );
			DMessage("getTimePassed: End_seconds");
			return n - startedAt;
		}else if(format == "days"){
			let startedAt = getVariable(timeVar).getTimeInMillis();
			startedAt = Math.round( startedAt/1000/60/60/24 );
			let n = Math.round( new Date().getTime()/1000/60/60/24 );
			DMessage("getTimePassed: End_days");
			return n - startedAt;
		}else if(format == "weeks"){
			let startedAt = getVariable(timeVar).getTimeInMillis();
			startedAt = Math.round( startedAt/1000/60/60/24/7 );
			let n = Math.round( new Date().getTime()/1000/60/60/24/7 );
			DMessage("getTimePassed: End_weeks");
			return n - startedAt;
		}else if(format == "auto"){
			let startedAt = getVariable(timeVar).getTimeInMillis();
			startedAt = Math.round( startedAt/1000);
			let n = Math.round( new Date().getTime()/1000);	
			if( n - startedAt < 120 ){
				DMessage("getTimePassed: End_auto_seconds");
				return [n - startedAt,"seconds"];
			}else {
				n = Math.round(n/60);
				startedAt = Math.round( startedAt/60);
				if(n - startedAt <120){
					DMessage("getTimePassed: End_auto_minutes");
					return [n - startedAt,"minutes"];
				}else {
					n = Math.round(n/60);
					startedAt = Math.round( startedAt/60);
					if(n - startedAt <120){
						DMessage("getTimePassed: End_auto_hours");
						return [n - startedAt,"hours"];
					}else {
						n = Math.round(n/24);
						startedAt = Math.round( startedAt/24);
						if(n - startedAt <14){
							DMessage("getTimePassed: End_auto_days");
							return [n - startedAt,"days"];
						}else {
							n = Math.round(n/7);
							startedAt = Math.round( startedAt/7);
							DMessage("getTimePassed: End_auto_weeks");
							return [n - startedAt,"weeks"];
						}
					}
				}
			}
		}
	}else{
		return 0;
	}
	DMessage("getTimePassed: End_Error");
	return false;
}

function setEdgeMode(mode = "Normal", jump = null){	
	//set/enable edgemode ("normal,goto,video", )
	//jump needs to be a function as string like setEdgeMode("Goto", "toEarly()"); caseSensitive
	//seems unsafe dont know any better
	//handle in response ImClose.js(typed: on the edge, ...)
	DMessage("SetEdgeMode: Beginning");
	if(mode == "Normal"){
		DMessage("SetEdgeMode: setNormal");
		setVar("edgingmode", "Normal");	//normal mode
		delVar("edginggoto");
	}else if (mode == "Goto"){
		setVar("edgingmode", "Goto");	//goto mode
		setVar("edginggoto", jump)	//goto mark
		DMessage("SetEdgeMode: setGoto: " + getVar("edginggoto", "error") );
	}else if (mode == "Video"){
		setVar("edgingmode", "Video");	//video mode, stop video and goto
		setVar("edginggoto", jump)	//goto mark*/
		DMessage("SetEdgeMode: setVideo" + getVar("edginggoto", "error") );
	}else {
		DMessage("SetEdgeMode: No mode found");
	}
	DMessage("SetEdgeMode: End");
	return;
}

function jumpOldApathy(){	//jump to apathylevel 1-5
	DMessage("jumpOldApathy: Beginning");
	let aLevel = getApathyLevel();
	//setVar("oldApathy","ApathyLevel3()");
	//setVar("oldApathy2","test");
	if(aLevel<=2 ){
		return ApathyLevel1();
	}else if(aLevel<=4 ){
		return ApathyLevel2();
	}else if(aLevel<=6 ){
		return ApathyLevel3();
		//return eval(getVar("oldApathy"));
	}else if(aLevel<=8 ){
		return ApathyLevel4();
	}else {
		return ApathyLevel5();
	}
	DMessage("jumpOldApathy: End");
	return;
}

function getDommeLevel() {		//needs to be set by your personality, no standard of TAJ
	DMessage("getDommeLevel: Beginning");
    let dommeLevel = getVar("dommelevel", 5);
    if (typeof dommeLevel == "number") {
        if (dommeLevel >= 1 && dommeLevel <= 10) {
			DMessage("getDommeLevel: End");
            return dommeLevel;
        }
    }
	DMessage("Error no DommeLevel set");
	DMessage("getDommeLevel: End");
    //Returns 5 if the domme level has not been set or is invalid
    return 5;
}

function changeDommeLevel(amount){
	setVar("dommelevel",getVar("dommelevel")+amount )
	return;
}

function changeApathyLevel(amount){
	setVar("apathylevel",getVar("apathylevel")+amount )
	return;
}

function getOldDommeLevel(){	//get old Dommelevel 1-5
	DMessage("getOldDommeLevel: Beginn/End");
	return Math.round(getDommeLevel()/2);
}

function checkOldDommeLevel(lvl=3){
	return lvl==getOldDommeLevel();
}

function getOldApathyLevel(){	//get old apathylevel 1-5
	DMessage("getOldApathy: Beginn/End");
	return Math.round(getApathyLevel()/2);
}

function checkOldApathyLevel(lvl=3){
	return lvl==getOldApathyLevel();
}

function getOldMoodLevel(){	//get old mood 1-10
	DMessage("getOldMoodLevel: Beginn/End");
	return Math.round(getMood()/10);
}

//you can use a number(setMood(30) ) or the moods as string(setMood("best"),setMood("random") )
function setMood(mood=null){
	DMessage("setMood: Begin/");
	if (mood === parseInt(mood, 10)){
		smood=mood;
	} else {
		smood = 50;
		switch(mood){
			case "best":
				smood=10;
				break;
			case "good":
				smood=30;
				break;
			case "neutral":
				smood=50;
				break;
			case "bad":
				smood=70;
				break;
			case "worst":
				smood=90;
				break;
			case "random":
				smood=randomInteger(1,100);
				break;
		}
	}
	setTempVar("mood", smood);
    DMessage("Mood: " + smood, 0);
	//from increaseAnger(amount) dont think needed here
    angereddate = setDate();
    angereddate.addMinute(3);
	DMessage("setMood: End");
	return;
}

//check mood md="worst","bad","neutral","good","best" or= "lower","same","higher"
//returns true/false
function checkOldMood(md = "neutral", or = "same"){
	DMessage("checkOldMood: md = " + md);
	let mdLVL = getOldMoodLevel();
	if( md == "best"){
		DMessage("checkOldMood: checkBestMood");
		if( or == "same"){
			DMessage("checkOldMood: checkBestSame");
			if( mdLVL <= 2 ){
				DMessage("checkOldMood: BestTrue");
				return true;
			}
		}else if( or == "higher"){
			DMessage("checkOldMood: checkBestHigher");
			if( mdLVL >= 0 ){
				DMessage("checkOldMood: BestTrue");
				return true;
			}
		}else if( or == "lower"){
			DMessage("checkOldMood: checkBestLower");
			if( mdLVL <= 2 ){
				DMessage("checkOldMood: BestTrue");
				return true;
			}
		}
	} else if( md == "good"){
		DMessage("checkOldMood: checkGoodMood");
		if( or == "same"){
			DMessage("checkOldMood: checkGoodSame");
			if( mdLVL > 2 && mdLVL <= 4 ){
				DMessage("checkOldMood: GoodTrue");
				return true;
			}
		}else if( or == "higher"){
			DMessage("checkOldMood: checkGoodHigher");
			if( mdLVL > 2 ){
				DMessage("checkOldMood: GoodTrue");
				return true;
			}
		}else if( or == "lower"){
			DMessage("checkOldMood: checkGoodLower");
			if( mdLVL <= 4 ){
				DMessage("checkOldMood: GoodTrue");
				return true;
			}
		}
	}else if( md == "neutral"){
		DMessage("checkOldMood: checkNeutralMood");
		if( or == "same"){
			DMessage("checkOldMood: checkNeutralSame");
			if( mdLVL > 4 && mdLVL <= 6 ){
				DMessage("checkOldMood: NeutralTrue");
				return true;
			}
		}else if( or == "higher"){
			DMessage("checkOldMood: checkNeutralHigher");
			if( mdLVL > 4 ){
				DMessage("checkOldMood: NeutralTrue");
				return true;
			}
		}else if( or == "lower"){
			DMessage("checkOldMood: checkNeutralLower");
			if( mdLVL <= 6 ){
				DMessage("checkOldMood: NeutralTrue");
				return true;
			}
		}
	}else if( md == "bad"){
		DMessage("checkOldMood: checkBadMood");
		if( or == "same"){
			DMessage("checkOldMood: checkBadSame");
			if( mdLVL > 6 && mdLVL <= 8 ){
				DMessage("checkOldMood: BadTrue");
				return true;
			}
		}else if( or == "higher"){
			DMessage("checkOldMood: checkBadHigher");
			if( mdLVL > 6 ){
				DMessage("checkOldMood: BadTrue");
				return true;
			}
		}else if( or == "lower"){
			DMessage("checkOldMood: checkBadLower");
			if( mdLVL <= 8 ){
				DMessage("checkOldMood: BadTrue");
				return true;
			}
		}
	}else if( md == "worst"){
		DMessage("checkOldMood: checkWorstMood");
		if( or == "same"){
			DMessage("checkOldMood: checkWorstSame");
			if( mdLVL > 8 && mdLVL <= 10 ){
				DMessage("checkOldMood: WorstTrue");
				return true;
			}
		}else if( or == "higher"){
			DMessage("checkOldMood: checkWorstHigher");
			if( mdLVL > 8 ){
				DMessage("checkOldMood: WorstTrue");
				return true;
			}
		}else if( or == "lower"){
			DMessage("checkOldMood: checkWorstLower");
			if( mdLVL <= 10){
				DMessage("checkOldMood: WorstTrue");
				return true;
			}
		}
	}
	DMessage("checkOldMood: mood doesn't match");
	return false;
}

/**SlideShow use:
*	first: setSlideShow("BOOBS"), setSlideShow(["BOOBS","BUTTS"],"fast",4)
*	second: slideShowOn()
*	last: slideShowOff()
**/
function setSlideShow(category = "all", speed = "medium", teaseType = 3){
	DMessage("setSlidShow: Begin");
	//if()
	if( (category instanceof Array || category === "all" || category === "HARDCORE" || category === "SOFTCORE" ||category === "LESBIAN" || category === "BLOWJOB" || category === "LEZDOM" ||category === "FEMDOM" ||category === "HENTAI" ||category === "GAY" || category === "MALEDOM" || category === "CAPTIONS" || category === "GENERAL" || category === "BOOBS" || category === "BUTTS" || category === "TEASE") && (speed === "medium" || speed=== "slow" || speed=== "fast") ) {
		setVar("SlideShowCategory", category);
		setVar("SlideShowSpeed", speed);
		if(1 <= Number(teaseType) && Number(teaseType)<= 4 ) {
			setVar("SlideShowTeaseType", teaseType);
		}else {
			DMessage("setSlidShow Error: teaseType no Int between 1 and,4");
			setVar("SlideShowTeaseType", 3);
		}
		DMessage("setSlidShow: End");
		return;
	}
	delVar("SlideShowCategory");
	delVar("SlideShowSpeed");
	delVar("SlideShowTeaseType");
	delVar("SlideShowOn");
	//DMessage("setSlidShow Error: No category or speed found");
	EMessage("setSlidShow Error: No category or speed found");
	DMessage("setSlidShow: End");
	return;
}

function slideShowOn(){
	DMessage("SlidShow: Begin");
	
	var TeaseRunnable = Java.type("me.goddragon.teaseai.api.runnable.TeaseRunnable");
	var show;
	var slideShow = Java.extend(TeaseRunnable , {
		run: function() {
			if(!getVar("SlideShowOn",false) ){
				unlockImages();
				show.cancel();
				delVar("SlideShowCategory");
				delVar("SlideShowSpeed");
				delVar("SlideShowTeaseType");
				delVar("SlideShowOn");
				return;
			}
			category=getVar("SlideShowCategory");
			if(category instanceof Array){
				DMessage("SlidShow: Array");
				//showCategoryImage(String(random(category)) ); dont work type problem
				showCategoryImage(category[randomInteger(0, category.length-1)] );
			}else if(category==="TEASE" ){
			//if(category==="TEASE" ){
				let pic = getTeasePicture(getVar("SlideShowTeaseType"));
			}else {
				if(category==="all" ){
					showCategoryImage(random("HARDCORE","SOFTCORE","LESBIAN","BLOWJOB","LEZDOM","FEMDOM","HENTAI","CAPTIONS","GENERAL","BOOBS","BUTTS","GAY","MALEDOM") );
				}else {
					showCategoryImage(category );
				}
			}
		}
	});
	var category = getVar("SlideShowCategory",null);
	var speed = getVar("SlideShowSpeed"); 
	if( (category instanceof Array || category === "all" || category === "HARDCORE" || category === "SOFTCORE" ||category === "LESBIAN" || category === "BLOWJOB" || category === "LEZDOM" ||category === "FEMDOM" ||category === "HENTAI" ||category === "GAY" || category === "MALEDOM" || category === "CAPTIONS" || category === "GENERAL" || category === "BOOBS" || category === "BUTTS" || category === "TEASE") && (speed === "medium" || speed=== "slow" || speed=== "fast") ) {
		if(category instanceof Array ){
			for(var i=0; i<category.length;i++){
				if( !(category[i] === "HARDCORE" || category[i] === "SOFTCORE" ||category[i] === "LESBIAN" || category[i] === "BLOWJOB" || category[i] === "LEZDOM" ||category[i] === "FEMDOM" ||category[i] === "HENTAI" ||category[i] === "GAY" || category[i] === "MALEDOM" || category[i] === "CAPTIONS" || category[i] === "GENERAL" || category[i] === "BOOBS" || category[i] === "BUTTS" || category[i] === "TEASE")  ) {
					EMessage("SlidShow Error: category contains wrong IamgeCategory");
					delVar("SlideShowCategory");
					delVar("SlideShowSpeed");
					delVar("SlideShowTeaseType");
					delVar("SlideShowOn");
					return;
				}
			}
		}
		lockImages();
		show = new slideShow();
		switch(speed){
			case "slow":
				setVar("SlideShowOn",true);
				show.runTimer(0,5000);
				break;
			case "medium":
				setVar("SlideShowOn",true);
				show.runTimer(0,2500);
				break;
			case "fast":
				setVar("SlideShowOn",true);
				show.runTimer(0,333);
				break;
			default:
				DMessage("SlidShow Error: NoSpeed");
				return;
		}
	}else {
		EMessage("SlidShow Error: No category or speed found");
		//DMessage("SlidShow Error: No category or speed found");
	}
	DMessage("SlidShow: End");
	return;
}

function slideShowOff(){
	setVar("SlideShowOn",false);
	return;
}

//todo change edge functions to use it
function setLongHold(chance=0){
	setVar("LongHold",chance);
	return;
}

//todo change edge functions to use it
function setExtremeHold(chance=0){
	setVar("ExtremeHold",chance);
	return;
}

function writingTask(sentence=null, delay = -1, sender= 1, rounds=5){
	//todo like cbt/customTask calc rounds etc...
	DMessage("writingTask: Start");
	if(typeof sentence === "string"){
		var match=0;
		var fail=0;
		for(var i=0;i<rounds;i++){
			SMessage("Type the following sentence :",delay,sender);
			let answer0 = getInput(sentence,null,delay,true,sender);
			if(answer0.matchesRegex(sentence)){
				DMessage("writingTask: match round "+i);
				SMessage("That was correct, next one",delay,sender);
				match++;
			}
			else {
				DMessage("writingTask: fail round "+i);
				SMessage("That was incorrect, next one",delay,sender);
				fail++;
			}
		}
		if(match>2*fail){
			SMessage("Congrats you have passed your writing task",delay,sender);
			DMessage("writingTask: End");
			return true;
		}else {
			SMessage("I'm not amused you have failed your writing task",delay,sender);
			DMessage("writingTask: End");
			return false;
		}
	}else{
		EMessage("writingTask: NoString found");
	}
	DMessage("writingTask: End");
	return true;
}

/**
*		Missing Features
**/

function addEdgeHoldTime(amount=15){
	return;
}

function restrictOrgasm(amount=1,unit="day"){
	//todo
	return;
}


function showLocalTeasePicture(){
	//todo
	showTeaseImage();
	return;
}

function addTeaseTime(time=null){
	//todo add/sub teaseTime
	return;
}

function worshipMode(on=false){
	return;
}

/**
* holdEdge method to make the sub hold an edge. This is the method you will want to call most of the time to make
* the sub hold an edge.
**/
function holdEdgeMT(message=null, time=null, delay=-1, sender=1) {
    if (!getVar("edging", false))
    {
        //SMessage("%edge%", delay, sender);
		if(message==null){
			startEdging("%edge%", delay, sender);
		}else{
			startEdging("%edge%", delay, sender);
		}
    }
    SMessage("%holdtheedge%", 0,sender);
    let timeHolding = 0;
    setTempVar("edging", false);
    setTempVar("holdingedge", true);
    let tauntFreq = getTauntFrequency();
    let tauntIncrement = 1;
    switch (tauntFreq) {
        case 5:
            tauntIncrement = randomInteger(1, 3);
            break;
        case 4:
            tauntIncrement = randomInteger(2, 5);
            break;
        case 3:
            tauntIncrement = randomInteger(4, 10);
            break;
        case 2:
            tauntIncrement = randomInteger(7, 15);
            break;
        case 1:
            tauntIncrement = randomInteger(10, 30);
            break;
        default:
            tauntIncrement = 0;
    }
    let amiIndex = getApathyMoodIndex();
    let lengthPercent = 0.00091684 * amiIndex + .00000083317 * Math.pow(amiIndex, 3);
    if (lengthPercent < 0) {
        lengthPercent = 0;
    }
    if(time==null){
		let length = lengthPercent * (getMaxHoldingLength() - getMinHoldingLength()) + getMinHoldingLength();
	}else{
		let length = time;
	}

    let tauntTime = tauntIncrement;
    if (rapidTesting) {
        tauntTime = 1;
    }
    while (timeHolding < length) {
        sleep(.5);
        timeHolding += .5;
        if (tauntTime == timeHolding) {
            SMessage("%edgingholdtaunts1%", delay, sender);
            switch (tauntFreq) {
                case 5:
                    tauntIncrement = randomInteger(1, 3);
                    break;
                case 4:
                    tauntIncrement = randomInteger(2, 5);
                    break;
                case 3:
                    tauntIncrement = randomInteger(4, 10);
                    break;
                case 2:
                    tauntIncrement = randomInteger(7, 15);
                    break;
                case 1:
                    tauntIncrement = randomInteger(10, 30);
                    break;
                default:
                    tauntIncrement = 0;
            }
            tauntTime += tauntIncrement;
        }
    }
    SMessage("%stopstrokingedge%", 0,sender);
    stopEdging();
    SMessage("%lettheedgefade%", 0,sender);
}


//not working
function customMode(mode = "Normal", trigger, jump = null, timeout, disableResponses=true)
{
	DMessage("CustomMode: Beginning");
	if(mode == "Normal"){
		DMessage("CustomMode: setNormal");
		setVar("CustomMode", "Normal");	//normal mode
		setVar("CustomModeSet", false);
		delVar("CustomGoto");
		//unregisterResponse(new Response("customMode") );
		run("Responses" + separator + "CustomMode.js");
		delVar("CustomGotoTrigger");
		delVar("CustomMode");
		delVar("CustomModeSet");
	}else if (mode == "Goto"){
		setVar("CustomMode", "Goto");	//goto mode
		setVar("CustomGoto", jump)	//goto mark
		setVar("CustomModeSet", true);
		setVar("CustomModeTrigger", trigger);
		run("Responses" + separator + "CustomMode.js");
		//registerResponse(new Response("customMode") );
		DMessage("CustomMode: setGoto: " + getVar("CustomGoto", "error") );
	}else if (mode == "Video"){
		setVar("CustomMode", "Video");	//video mode, stop video and goto
		setVar("CustomGoto", jump)	//goto mark*/
		setVar("CustomModeSet", true);
		setVar("CustomModeTrigger", trigger);
		run("Responses" + separator + "CustomMode.js");
		//registerResponse(new Response("customMode") );
		DMessage("CustomMode: setVideo" + getVar("CustomGoto", "error") );
	}else {
		DMessage("CustomMode: No mode found");
	}
	
	return;
	//registerResponse(new Response("customMode") );
	DMessage("CustomMode: End");
	return;
}


/*return if a picture with given tagges exists
* needs an imageType and imageTags
*/
function hasTaggedImage(imageType, imageTags){
	DMessage("hasTaggedImage: Start");
	

    //TODO add functionality for what if there isnt an image with all of the tags but there is one with all but one...?
    let localpath = "";
    let imageInt;
    switch (imageType) {
        case 2:
        case "Normal":
            imageInt = 2;
            localpath = "Images" + separator + "Normal";
            break;
        case 3:
        case "Liked":
            imageInt = 3;
            localpath = "Images" + separator + "Liked";
            break;
        case 4:
        case "Loved":
            imageInt = 4;
            localpath = "Images" + separator + "Loved";
            break;
        default:
            localpath = "Images" + separator + "Normal";
    }
    let path = teasePath + separator + localpath;
    let pictureHandler = Java.type("me.goddragon.teaseai.api.picture.PictureHandler");
    DMessage("path " + path);
    DMessage("imageTags " + imageTags);
    let matchingImages = pictureHandler.getHandler().getTaggedPicturesExact(new java.io.File(path), imageTags);
    DMessage("matchingImages " + imageInt + " " + matchingImages);
    //DMessage(matchingImages.toString());
    while(matchingImages == null)
    {
        if (imageInt <= 2)
        {
			DMessage("hasTaggedImage: False End");
            return false;
        }
        else
        {
            imageInt--;
            switch (imageInt) {
                case 2:
                    localpath = "Images" + separator + "Normal";
                    break;
                case 3:
                    localpath = "Images" + separator + "Liked";
                    break;
                case 4:
                    localpath = "Images" + separator + "Loved";
                    break;
                default:
                    localpath = "Images" + separator + "Normal";
            }
            path = teasePath + separator + localpath;
            matchingImages = pictureHandler.getHandler().getTaggedPicturesExact(new java.io.File(path), imageTags);
            DMessage("matchingImages " + imageInt + " " + matchingImages);
        }
    }
    //let randomImage = matchingImages.get(randomInteger(0, matchingImages.length - 1));

    //let toReturn = showImage(randomImage.getFile().getPath());
    //return toReturn;
	
	DMessage("hasTaggedImage: True End");
	return true;
}


//meaned to be like ResponseYes/No from TAI for taunts
function question(message=null, yes=null, no =null, delay=0, sender=-1){
	DMessage("question: Start");
	
	let answer0 = getInput(message, 10, delay, true, sender)
	if (answer0.isLike("yes", "yeah", "course", "sure"))
	{
		if(yes != null && yes.slice(yes.length-1)==")" ){
			DMessage("question: evalYes");
			eval(yes);
		}else {
			DMessage("question: evalYes NoCommand");
		}
	}
	else if (answer0.isLike("no", "nope", "sure"))
	{
		if(no != null && no.slice(no.length-1)==")" ){
			DMessage("question: evalNo");
			eval(no);
		}else {
			DMessage("question: evalNo NoCommand");
		}
	}
	
	//SMessage(message,delay,sender);
	DMessage("question: End");
	return;
}


DMessage("helperFunctions: End");