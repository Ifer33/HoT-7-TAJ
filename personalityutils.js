DMessage("PersonalityUtils: Beginning");
let timeLeftStroking;
let strokeTime;
let angereddate;
let strokingMethodsEnabled = false;
let orgasmModifyAmount = 0;
let ruinModifyAmount = 0;

/**
* setupVars method to setup variables used by the personality
**/
function setUpVars() {
	/*thought dommeLevel is how harsh/aggresive the dom is
	**and apathyLevel is more for decisions/how much dom is willing to do what you want/not want 
	**like want/dont want collar/kneeling/anal/...
	*/
	if (getVar("dommelevel", null) == null) {
        setVar("dommelevel", "Please enter a number between 1 and 10");
    }
    registerVariable("dommelevel", "Domme Level", "How mean/aggresive the dom will be. Can be a number between 1-10. WARNING: 8-10 will be very intense. Don't be afraid to start with a lower level like 3-6.");
	
	if (getVar("hasChastity", null) == null) {
        setVar("hasChastity", "Please enter true or false");
    }
    registerVariable("hasChastity", "Have chastity device", "Determines if you own a chastity device");
	
	if (getVar("ballTorture", null) == null) {
        setVar("ballTorture", "Please enter true or false");
    }
    registerVariable("ballTorture", "Ball torture", "Determines if you allow Ball torture");
	
	if (getVar("cockTorture", null) == null) {
        setVar("cockTorture", "Please enter true or false");
    }
    registerVariable("cockTorture", "Cock torture", "Determines if you allow cock torture");
	
	if (getVar("cbtBallLevel", null) == null) {
        setVar("cbtBallLevel", "Please enter a number between 1 and 5");
    }
    registerVariable("cbtBallLevel", "cbt Ball Level", "How mean/harsh the dom will be with ball torture. Can be a number between 1-5. WARNING: 5 will be very intense. Don't be afraid to start with a lower level like 2-3.");
	
	if (getVar("cbtCockLevel", null) == null) {
        setVar("cbtCockLevel", "Please enter a number between 1 and 5");
    }
    registerVariable("cbtCockLevel", "cbt cock Level", "How mean/harsh the dom will be with cock torture. Can be a number between 1-5. WARNING: 5 will be very intense. Don't be afraid to start with a lower level like 2-3.");
	
    if (getVar("apathylevel", null) == null) {
        setVar("apathylevel", "Please enter a number between 1 and 10");
    }
    registerVariable("apathylevel", "Apathy Level", "How mean/aggresive the dom will be. Can be a number between 1-10. WARNING: 8-10 will be very intense. Don't be afraid to start with a lower level like 3-6.");

    if (getVar("orgasmchance", null) == null) {
        setVar("orgasmchance", "Please enter a 2 digit percentage. Ex: 56");
    }
    registerVariable("orgasmChance", "Orgasm Chance", "The average percent chance the domme will allow an orgasm. NOTE: This isnt the exact percent chance. That will vary some with the domme's mood and apathy level.");

    if (getVar("ruinchance", null) == null) {
        setVar("ruinchance", "Please enter a 2 digit percentage. Ex: 56");
    }
    registerVariable("ruinChance", "Orgasm Ruined Chance", "The average percent chance the domme will ruin an orgasm. NOTE: This is the percentage an orgasm" +
        "will be ruined after the domme has decided you will cum. Basically, to have an orgasm ruined, first the dom would have to decide to let you cum. Furthermore, " +
        "if orgasm chance is 50% and orgasm ruined chance is 50%, 25% of the time you will get a ruined orgasm. This isnt the exact percent chance. That will vary some with the domme's mood and apathy level.");

    if (getVar("minsessionlength", null) == null) {
        setVar("minsessionlength", "Please enter a number in minutes");
    }
    registerVariable("minsessionlength", "Minimum Session Length", "The minimum time in minutes that a session will last. NOTE: Session length will vary between min and max length based on domme's mood" +
        "and apathy level. If either are left blank, the session will last the length as preferred tease duration.");

    if (getVar("maxsessionlength", null) == null) {
        setVar("maxsessionlength", "Please enter a number in minutes");
    }
    registerVariable("maxsessionlength", "Maximum Session Length", "The maximum time in minutes that a session will last. NOTE: Session length will vary between min and max length based on domme's mood" +
        "and apathy level. If either are left blank, the session will last the length as preferred tease duration.");

    if (getVar("minstrokinglength", null) == null) {
        setVar("minstrokinglength", "Please enter a number in minutes");
    }
    registerVariable("minstrokinglength", "Minimum Stroking Length", "The minimum time in minutes that a stroking cycle will last. NOTE: Stroking cycle length will vary between min and max length based on domme's mood" +
        "and apathy level.");

    if (getVar("maxstrokinglength", null) == null) {
        setVar("maxstrokinglength", "Please enter a number in minutes");
    }
    registerVariable("maxstrokinglength", "Maximum Stroking Length", "The maximum time in minutes that a stroking cycle will last. NOTE: Stroking cycle length will vary between min and max length based on domme's mood" +
        "and apathy level.");

    if (getVar("minholdinglength", null) == null) {
        setVar("minholdinglength", "Please enter a number followed by an 's' for s or an 'm' for m. ex: 56s or 5m If no s or m is provided will assume minutes.");
    }
    registerVariable("minholdinglength", "Minimum Edge Holding Length", "The minimum time in seconds or minutes (enter 'm' or 's' after the number) that an edge holding cycle will last. NOTE: Edge holding cycle length will vary between min and max length based on domme's mood" +
        "and apathy level. The domme will choose closer to the minimum most of the time unless they are pissed so make the maximum your absolute max limit.");

    if (getVar("maxholdinglength", null) == null) {
        setVar("maxholdinglength", "Please enter a number followed by an 's' for s or an 'm' for m. ex: 56s or 5m If no s or m is provided will assume minutes.");
    }
    registerVariable("maxholdinglength", "Maximum Edge Holding Length", "The maximum time in seconds or minutes (enter 'm' or 's' after the number) that an edge holding cycle will last. NOTE: Edge holding cycle length will vary between min and max length based on domme's mood" +
        "and apathy level. The domme will choose closer to the minimum most of the time unless they are pissed so make the maximum your absolute max limit.");
		
	if (getVar("minlongholdinglength", null) == null) {
        setVar("minlongholdinglength", "Please enter a number followed by an 's' for s or an 'm' for m. ex: 56s or 5m If no s or m is provided will assume minutes.");
    }
    registerVariable("minlongholdinglength", "Minimum Edge Long Holding Length", "The minimum time in seconds or minutes (enter 'm' or 's' after the number) that an edge holding cycle will last. NOTE: Edge holding cycle length will vary between min and max length based on domme's mood" +
        "and apathy level. The domme will choose closer to the minimum most of the time unless they are pissed so make the maximum your absolute max limit.");

    if (getVar("maxlongholdinglength", null) == null) {
        setVar("maxlongholdinglength", "Please enter a number followed by an 's' for s or an 'm' for m. ex: 56s or 5m If no s or m is provided will assume minutes.");
    }
    registerVariable("maxlongholdinglength", "Maximum Edge Long Holding Length", "The maximum time in seconds or minutes (enter 'm' or 's' after the number) that an edge holding cycle will last. NOTE: Edge holding cycle length will vary between min and max length based on domme's mood" +
        "and apathy level. The domme will choose closer to the minimum most of the time unless they are pissed so make the maximum your absolute max limit.");
		
	if (getVar("minextremholdinglength", null) == null) {
        setVar("minextremholdinglength", "Please enter a number followed by an 's' for s or an 'm' for m. ex: 56s or 5m If no s or m is provided will assume minutes.");
    }
    registerVariable("minextremholdinglength", "Minimum Edge Extrem Holding Length", "The minimum time in seconds or minutes (enter 'm' or 's' after the number) that an edge holding cycle will last. NOTE: Edge holding cycle length will vary between min and max length based on domme's mood" +
        "and apathy level. The domme will choose closer to the minimum most of the time unless they are pissed so make the maximum your absolute max limit.");

    if (getVar("maxextremholdinglength", null) == null) {
        setVar("maxextremholdinglength", "Please enter a number followed by an 's' for s or an 'm' for m. ex: 56s or 5m If no s or m is provided will assume minutes.");
    }
    registerVariable("maxextremholdinglength", "Maximum Edge Extrem Holding Length", "The maximum time in seconds or minutes (enter 'm' or 's' after the number) that an edge holding cycle will last. NOTE: Edge holding cycle length will vary between min and max length based on domme's mood" +
        "and apathy level. The domme will choose closer to the minimum most of the time unless they are pissed so make the maximum your absolute max limit.");

    if (getVar("tauntfrequency", null) == null) {
        setVar("tauntfrequency", "Please enter a number between 0 and 5.");
    }
    registerVariable("tauntfrequency", "Taunt Frequency", "The frequency of taunts (0-5) that the domme will say while you are stroking or edging. NOTE: Inputting 0 will disable taunts entirely");

    setTempVar("mood", 50);
    if (getVar("mood", null) != null) {
        //Register something for last session mood
    }
    timeLeftStroking = 0;
    let TeaseAI = Java.type("me.goddragon.teaseai.TeaseAI");
    let strokingMethodsFile = new java.io.File(TeaseAI.application.getSession().getActivePersonality().getFolder().getAbsolutePath() + java.io.File.separator + "strokingmethodutils.js");
    //strokingMethodsEnabled = strokingMethodsFile.exists();
    DMessage("Stroking Methods Enabled: " + strokingMethodsEnabled);
    if (strokingMethodsEnabled)
    {
        run("strokingmethodutils.js");
        setUpStrokingMethods();
    }
}

/*|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
* STROKING METHODS: SORTED BY MOST LIKELY TO USE -> LEAST LIKELY TO USE |
*///|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

/**
* Internal method to call customstrokingmethods
**/
function StartStrokingMethod() {
    StrokeOtherMethods();
}

/**
* Stroking method to have the sub start stroking. This is the method you will primarily want to
* call in scripts.
**/
function Stroking(delay=0,sender=1) {
    if (strokingMethodsEnabled) {
        StartStrokingMethod();
    }
    else {
		//if(activeContacts[0]==1){
		if(sender!=1){
			SMessage("%startStroking%", delay,sender);
		}else{
			CMessage("%startStroking%");
		}
        let strokeMinimum = getMinStrokingLength();
        let strokeMaximum = getMaxStrokingLength();
        let apathyMoodIndex = getApathyMoodIndex();
        let random = randomInteger(1, 10);
        DMessage("random: " + random, 0);
        let percentSession = (getMillisPassed() / 1000) / (getMinSessionLength() * 60);
        //y = 52.2810035121697 + 6.42273993825994 * r * pS + 0.873930004197032 * r ^ 2 + 0.00137857491687123 * r * x ^ 2 - 0.00439450398010755 * x ^ 2
        let bpm = 52.2810 + 6.4227 * random * percentSession + 0.8739 * Math.pow(random, 2) + 0.0014 * random * Math.pow(apathyMoodIndex, 2) - 0.0044 * Math.pow(apathyMoodIndex, 2);
        let percentFromMinToMax = 0.00112 * bpm + (22.68182 / bpm) + .0000723 * apathyMoodIndex * bpm + .000098 * Math.pow(apathyMoodIndex, 2) - 0.29386 - .00000053 * Math.pow(apathyMoodIndex, 3) - .000000376389651825041 * apathyMoodIndex * Math.pow(bpm, 2);
        DMessage("bpm: " + bpm, 0);
        let duration = ((strokeMaximum - strokeMinimum) * 60) * percentFromMinToMax + (strokeMinimum * 60);
        if (rapidTesting) {
            duration = 5;
        }
        DMessage("duration: " + duration, 0);
        //stroke 1000 for testing
        customStroke(duration, Math.floor(bpm));
    }
	if(sender!=1){
		SMessage("%stopstroking%", delay,sender);
	}else{
		CMessage("%stopstroking%");
	}
	stopStroking();
}

function strokeDuration(duration, message,delay=-1,sender=1)
{
    if (message == null)
    {
        message = "%startStroking%";
    }
    let strokeMinimum = getMinStrokingLength();
    let strokeMaximum = getMaxStrokingLength();
    let apathyMoodIndex = getApathyMoodIndex();
    let random = randomInteger(1, 10);
    DMessage("random: " + random, 0);
    let percentSession = (getMillisPassed() / 1000) / (getMinSessionLength() * 60);
    //y = 52.2810035121697 + 6.42273993825994 * r * pS + 0.873930004197032 * r ^ 2 + 0.00137857491687123 * r * x ^ 2 - 0.00439450398010755 * x ^ 2
    let bpm = 52.2810 + 6.4227 * random * percentSession + 0.8739 * Math.pow(random, 2) + 0.0014 * random * Math.pow(apathyMoodIndex, 2) - 0.0044 * Math.pow(apathyMoodIndex, 2);
    DMessage("duration: " + duration, 0);
    customSetStroking(duration, Math.floor(bpm), message, delay, sender);
}

/**
* customStroking method to have the sub start stroking with a custom message. This is the method you will primarily want to
* call in scripts when you want a message other than the default.
**/
function customStroking(message,delay=-1,sender=1) {
    if (strokingMethodsEnabled)
    {
        StartStrokingMethod();
    }
    else
    {
        if (message == null) {
			message = "%startStroking%";
		}
		//CMessage(message, 0);
		if(sender!=1){
			SMessage(message, delay,sender);
		}else{
			CMessage(message);
		}
        let strokeMinimum = getMinStrokingLength();
        let strokeMaximum = getMaxStrokingLength();
        let apathyMoodIndex = getApathyMoodIndex();
        let random = randomInteger(1, 10);
        DMessage("random: " + random, 0);
        let percentSession = (getMillisPassed() / 1000) / (getMinSessionLength() * 60);
        //y = 52.2810035121697 + 6.42273993825994 * r * pS + 0.873930004197032 * r ^ 2 + 0.00137857491687123 * r * x ^ 2 - 0.00439450398010755 * x ^ 2
        let bpm = 52.2810 + 6.4227 * random * percentSession + 0.8739 * Math.pow(random, 2) + 0.0014 * random * Math.pow(apathyMoodIndex, 2) - 0.0044 * Math.pow(apathyMoodIndex, 2);
        let percentFromMinToMax = 0.00112 * bpm + (22.68182 / bpm) + .0000723 * apathyMoodIndex * bpm + .000098 * Math.pow(apathyMoodIndex, 2) - 0.29386 - .00000053 * Math.pow(apathyMoodIndex, 3) - .000000376389651825041 * apathyMoodIndex * Math.pow(bpm, 2);
        DMessage("bpm: " + bpm, 0);
        let duration = ((strokeMaximum - strokeMinimum) * 60) * percentFromMinToMax + (strokeMinimum * 60);
        if (rapidTesting) {
            duration = 5;
        }
        DMessage("duration: " + duration, 0);
        customStroke(duration, Math.floor(bpm));
    }
	if(sender!=1){
		SMessage("%stopstroking%", delay,sender);
	}else{
		CMessage("%stopstroking%");
	}
	stopStroking();
}

/**
* isStroking method that will check if the sub is stroking. Note, if the sub is edging, this will return false.
**/
/*function isStroking() {
    if (timeLeftStroking <= 0) {
        return false;
    }
    return true;
}*/

/**
* slowStroking method that will slow the pace of the stroking down. The arguments are 1-5. 1 will slow down a small amount,
* and 5 will slow down a lot.
**/
function slowStroking(amount) {
    if (isStroking()) {
        if (amount <= 0) {
            amount = 1;
        }
        switch (amount) {
            case 1:
                addStrokingBPM(-10);
                break;
            case 2:
                addStrokingBPM(-20);
                break;
            case 3:
                addStrokingBPM(-30);
                break;
            case 4:
                addStrokingBPM(-40);
                break;
            case 5:
                addStrokingBPM(-50);
                break;
            default:
                addStrokingBPM(-30);
        }
    }
}

/**
* speedUpStroking method that will speed up the pace of the stroking down. The arguments are 1-5. 1 will speed up a small amount,
* and 5 will speed up a lot.
**/
function speedUpStroking(amount) {
    if (isStroking()) {
        if (amount <= 0) {
            amount = 1;
        }
        switch (amount) {
            case 1:
                addStrokingBPM(10);
                break;
            case 2:
                addStrokingBPM(20);
                break;
            case 3:
                addStrokingBPM(30);
                break;
            case 4:
                addStrokingBPM(40);
                break;
            case 5:
                addStrokingBPM(50);
                break;
            default:
                addStrokingBPM(30);
        }
    }
}

/**
* setStroking method that allows the developer to set the duration and
* bpm manually. Normally, it's better to use Stroking.
**/
function setStroking(duration, bpm,delay=-1,sender=1) {
    //CMessage("%startStroking%", 0);
	if(sender!=1){
		SMessage("%startStroking%", delay,sender);
	}else{
		CMessage("%startStroking%");
	}
    customStroke(duration, bpm);
	if(sender!=1){
		SMessage("%stopstroking%", delay,sender);
	}else{
		CMessage("%stopstroking%");
	}
	stopStroking();
}


function setStrokingNoTaunt(message,delay=-1,sender=1)
{
    if (message == null) {
        message = "%startStroking%";
    }
    //CMessage(message, 0);
	if(sender!=1){
		SMessage(message, delay,sender);
	}else{
		CMessage(message);
	}
    let strokeMinimum = getMinStrokingLength();
    let strokeMaximum = getMaxStrokingLength();
    let apathyMoodIndex = getApathyMoodIndex();
    let random = randomInteger(1, 10);
    DMessage("random: " + random, 0);
    let percentSession = (getMillisPassed() / 1000) / (getMinSessionLength() * 60);
    //y = 52.2810035121697 + 6.42273993825994 * r * pS + 0.873930004197032 * r ^ 2 + 0.00137857491687123 * r * x ^ 2 - 0.00439450398010755 * x ^ 2
    let bpm = 52.2810 + 6.4227 * random * percentSession + 0.8739 * Math.pow(random, 2) + 0.0014 * random * Math.pow(apathyMoodIndex, 2) - 0.0044 * Math.pow(apathyMoodIndex, 2);
    let percentFromMinToMax = 0.00112 * bpm + (22.68182 / bpm) + .0000723 * apathyMoodIndex * bpm + .000098 * Math.pow(apathyMoodIndex, 2) - 0.29386 - .00000053 * Math.pow(apathyMoodIndex, 3) - .000000376389651825041 * apathyMoodIndex * Math.pow(bpm, 2);
    DMessage("bpm: " + bpm, 0);
    let duration = ((strokeMaximum - strokeMinimum) * 60) * percentFromMinToMax + (strokeMinimum * 60);
    if (rapidTesting) {
        duration = 5;
    }
    startStroking(Math.floor(bpm));
}

/**
* customSetStroking method that allows the developer to set the duration, bpm,
* and message manually. Normally, it's better to use Stroking or customStroking.
**/
function customSetStroking(duration, bpm, message,delay=-1,sender=1) {
    //CMessage(message, 0);
	if(sender!=1){
		SMessage("%startStroking%", delay,sender);
	}else{
		CMessage("%startStroking%");
	}
    customStroke(duration, bpm);
	if(sender!=1){
		SMessage("%stopstroking%", delay,sender);
	}else{
		CMessage("%stopstroking%");
	}
	stopStroking();
}

/**
* getStrokingPercent method that will check the percent of time that the sub has stroked for out of this stroke cycle.
**/
function getStrokingPercent() {
    if (isStroking()) {
        return (strokeTime - timeLeftStroking) / strokeTime;
    }
    return null;
}

/*||||||||||||||||||||||
* END STROKING METHODS |
*///||||||||||||||||||||


/*|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
* EDGING METHODS: SORTED BY MOST LIKELY TO USE -> LEAST LIKELY TO USE |
*///|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/**
* DoEdges method that will make the sub do some number of edges. holdChancePerEdge is the chance of doing a edgehold for each edge.
**/
function DoEdges(minEdges, maxEdges, holdChancePerEdge, delay=-1, sender=1)
{
    if (holdChancePerEdge <= 1)
    {
        holdChancePerEdge = holdChancePerEdge * 100;
    }
    let ap = getApathyMoodIndex();
    let r = randomInteger(1, 5);
    let edgesPercent = 0.004027 * ap + 0.00235 * ap * r + 0.016498 * Math.pow(r, 2) - 0.086467 - 0.0003822 * ap * Math.pow(r, 2);
    let numEdges = edgesPercent * (maxEdges - minEdges) + minEdges;
    for (let i = 0; i < Math.round(numEdges) ; i++)
    {
        if (i != 0)
        {
            let random = randomInteger(1, 3);
            switch (random) {
                case 1:
                    SMessage("The question is...", 2, sender);
                    SMessage("Should I make you edge again?", delay, sender);
                    SMessage("Just kidding. Thats not a question at all %lol%", delay, sender);
                    break;
                case 2:
                    SMessage("I'm going to roll a 12 sided dice.", 1, sender);
                    SMessage("If it lands on 1, I'm going to make you edge again.", delay, sender);
                    SMessage("Good odds right? Lets roll...", delay, sender);
                    SMessage("Yay! It was a 1 %petname% %grin%", delay, sender);
                case 3:
                    SMessage("That last edge wasnt so great %subname%", delay, sender);
                    SMessage("Thankfully, I believe in second chances %petname%", delay, sender);
                    break;
            }
        }
        //startEdging("%startEdging%");
		//startEdging("%Edge%", delay, sender);
        if (randomInteger(1, 100) <= holdChancePerEdge) {
            let random = randomInteger(1, 3);
            switch (random)
            {
                case 1:
                    SMessage("Youre lucky that I let you get to the edge %petname%", delay, sender);
                    SMessage("I might just make you do that again... %grin%", delay, sender);
                    SMessage("But first...", delay, sender);
                    break;
                case 2:
                    SMessage("You did a pretty good job getting to the edge %petname%", delay, sender);
                    SMessage("Lets see how good of a job you do while I make you stay there %lol%", delay, sender);
                    break;
                case 3:
                    SMessage("That was a good edge %petname%", delay, sender);
                    SMessage("Now you're going to hold that edge", delay, sender);
                    break;

            }           
            holdEdge(delay, sender);
        //}
		} else {
			startEdging("%Edge%", delay, sender);
		}
		SMessage("%stopstrokingedge%", delay, sender);
		SMessage("%lettheedgefade%", delay, sender);
        //TODO: make these messages actually use a variable file
    }
}
/**
* startEdging method that will make the sub edge.
**/
function startEdging(message, delay=-1, sender=1)
{
    /*if (rapidTesting) {
        CMessage(message);
        sleep(2);
        return;
    }*/
    if (strokingMethodsEnabled) {
        if (message != undefined && message != null)
        {
            //CMessage(message, 0);
        }
        EdgingMethod();
    }
    else {
        let apathyMoodIndex = getApathyMoodIndex();
        let random = randomInteger(1, 5);
        let bpm = 174.69905 + (30.99765 * random) + (0.0002257 * Math.pow(apathyMoodIndex, 3)) + (0.10081895 * apathyMoodIndex * Math.pow(random, 2)) - (0.477098 * apathyMoodIndex * random) - (0.0325047 * Math.pow(apathyMoodIndex, 2)) - (3.1204935 * Math.pow(random, 2));
        startEdgingBPM(bpm, message, delay, sender);
    }
}

function startEdgingBPM(bpm, message, delay=-1, sender=1) {
    /*if (rapidTesting) {
        CMessage(message);
        sleep(2);
        return;
    }*/
    setTempVar("edging", true);
    setTempVar("holdingedge", false);
    DMessage("bpm: " + bpm, 0);
    if (message != undefined && message != null)
    {
        SMessage(message, 0,sender);
    }
    if (!isStroking()) {
        startStroking(Math.floor(bpm));
    }
    else {
        stopStroking();
        startStroking(Math.floor(bpm));
    }
    let timeSoFar = 0;
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

    let tauntTime = tauntIncrement;
    while (isEdging()) {
        sleep(.5);
        timeSoFar += .5;
        if (tauntTime == timeSoFar) {
            SMessage("%edgingtaunts1%", delay, sender);
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
    stopStroking();
}

/**
* isEdging method to check if the sub is edging
**/
function isEdging() {
    return getVar("edging", false);
}

/**
* holdEdge method to make the sub hold an edge. This is the method you will want to call most of the time to make
* the sub hold an edge.
**/
function holdEdge(delay=-1, sender=1) {
    if (!getVar("edging", false))
    {
        //SMessage("%edge%", delay, sender);
        startEdging("%edge%", delay, sender);
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
    let length = lengthPercent * (getMaxHoldingLength() - getMinHoldingLength()) + getMinHoldingLength();

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

/**
* startHoldEdge method to start holding an edge. Note: this will never end unless you call stopEdging!
**/
function startHoldEdge() {
    setTempVar("edging", false);
    setTempVar("holdingedge", true);
}

/*||||||||||||||||||||
* END EDGING METHODS |
*///||||||||||||||||||


/*|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
* ORGASM METHODS: SORTED BY MOST LIKELY TO USE -> LEAST LIKELY TO USE |
*///|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

/**
* calculateOrgasm method to calculate if the sub will cum right now
**/
function calculateOrgasm() {
    let defChance = getOrgasmChance() / 100;
    let mood = getMood();
    let chance = 1.39117 * defChance + 0.006631 * mood * Math.pow(defChance, 3) - 0.0083217 - 0.006919 * mood * defChance - 0.37457 * Math.pow(defChance, 3);
    let random = randomInteger(1, 100);
    if (random <= (chance * 100)) {
        return true;
    }
    return false;
}

/**
* calculateRuin method to call after calculateOrgasm has been called and is true. This method calculates if the orgasm will be
* ruined
**/
function calculateRuin() {
    let defChance = getRuinChance() / 100;
    let mood = getMood();
    let chance = 0.456827 * defChance + 0.009303 * mood * defChance + 0.50545 * Math.pow(defChance, 2) - 0.008689 * mood * Math.pow(defChance, 2);
    let random = randomInteger(1, 100);
    if (random <= (chance * 100)) {
        return true;
    }
    return false;
}

/*||||||||||||||||||||
* END ORGASM METHODS |
*///||||||||||||||||||


/*|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
* MOOD METHODS: SORTED BY MOST LIKELY TO USE -> LEAST LIKELY TO USE |
*///|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

/**
* increaseAnger method to change the dommes current mood value. Use a negative value to make the domme happier. 
* CAUTION: It's important to note that the higher the value of the mood, the more angry/upset the domme is. 
* A low value means the domme is happy. 50 is neutral.
**/
function increaseAnger(amount) {
    let mood = getMood();
    switch (amount) {
        case 1:
            mood += 5;
            break;
        case 2:
            mood += 7;
            break;
        case 3:
            mood += 8;
            break;
        case 4:
            mood += 12;
            break;
        case 5:
            mood += 14;
            break;
        case -1:
            mood -= 5;
            break;
        case -2:
            mood -= 7;
            break;
        case -3:
            mood -= 8;
            break;
        case -4:
            mood -= 12;
            break;
        case -5:
            mood -= 14;
            break;
        default:
            WMessage("increaseAnger called with invalid args");
            return;
    }
    if (mood > 100) {
        mood = 100;
    }
    if (mood < 0) {
        mood = 0;
    }
    if (mood > 70 && mood < 85)
    {
        CMessage("You're really starting to annoy me %badpetname%");
    }
    else if (mood > 85)
    {
        CMessage("You've really pissed me off now %awfulpetname%");
    }
    setTempVar("mood", mood);
    DMessage("Mood: " + mood, 0);
    angereddate = setDate();
    angereddate.addMinute(3);
    return mood;
}

/**
* Calculates the current apathyMoodIndex. This value is used everywhere to figure out how harsh the domme will be when she is 
* edging/stroking/holdingtheedge the sub. You may use this method to figure out how harsh the domme will be. It may take some
* experimentation to figure out the apathyMoodIndex value thresholds you need for your application.
* DO NOT MODIFY this function. The formula is very complex and even a slight change to it will have drastic effects and may
* cause errors.
**/
function getApathyMoodIndex() {
    let apathy = getApathyLevel();
    let mood = getMood();
    let newApathyMoodIndex = 5.8329 + (3.0536 * apathy) - (95.3855 / mood) + (0.0951 * apathy * mood) - (0.0029 * mood * Math.pow(apathy, 2))
    if (newApathyMoodIndex < 1) {
        newApathyMoodIndex = 1;
    }
    else if (newApathyMoodIndex > 100) {
        newApathyMoodIndex = 100;
    }
    //DMessage("apathyMoodIndex: " + newApathyMoodIndex, 0);
    return newApathyMoodIndex;
}

/**
* getMood getter method to get the dommes current mood value. CAUTION: It's important to note that the higher the value of
* the mood, the more angry/upset the domme is. A low value means the domme is happy. 50 is neutral.
**/
function getMood() {
    if (angereddate != null && angereddate.hasPassed()) {
        angereddate = setDate().addMinute(3);
        increaseAnger(-2);
    }
    let mood = getVar("mood", 50);
    if (typeof mood == "number") {
        if (mood >= 1 && mood <= 100) {
            //DMessage("Mood:" + mood);
            return mood;
        }
        else {
            setTempVar("mood", 50);
        }
    }
    else {
        setTempVar("mood", 50);
    }
    return 50;
}

/**
* getMoodTypeAmount getter method to get the dommes current moodtype amount value. 
**/
function getMoodTypeAmount() {
    return getVar("moodtypeamount", null);
}

/**
* getMoodTypeAmount getter method to get the dommes current moodtype amount value. 
**/
function setMoodTypeAmount() {
    setTempVar("moodtypeamount", moodTypeAmount);
}

/**
* setMoodType getter method to set the dommes current moodtype value. 
**/
function getMoodType(moodTypeAmount) {
    return getVar("moodtype", null);
}

/**
* setMoodType getter method to set the dommes current moodtype value. 
**/
function setMoodType(moodType) {
    setTempVar("moodtype", moodType);
}

/**
* getApathyLevel getter method to get the personality variable "apathylevel". If you are wanting to figure out how mean the
* domme should be for something, use getApathyMoodIndex instead which will also factor in the domme's mood as well as his/her
* apathy level. You can use this method to figure out how aggressive the domme will be when typing things to the sub or something
* like that.
**/
function getApathyLevel() {
    let apathyLevel = getVar("apathylevel", 5);
    if (typeof apathyLevel == "number") {
        if (apathyLevel >= 1 && apathyLevel <= 10) {
            return apathyLevel;
        }
    }
    //Returns 5 if the apathy level has not been set or is invalid
    return 5;
}

/*||||||||||||||||||
* END MOOD METHODS |
*///||||||||||||||||

//Helper methods:

/**
* simple helper method to calculate the time passed since the beginning of the session
**/
function getMillisPassed() {
    let startedAt = getVariable("startDate").getTimeInMillis();
    let n = new Date().getTime();
    return n - startedAt;
}
//lowest inclusive to highest inclusive
function randomInteger(lowest, highest) {
    return Math.floor(Math.random() * (highest - lowest + 1)) + lowest;
}

function continueSession()
{
    let secsPassed = (getMillisPassed() / 1000);
    if (getMinSessionLength() * 60 <= secsPassed)
    {
        if (getMaxSessionLength() * 60 <= secsPassed)
        {
            DMessage("overmax session return true");
            return false;
        }
        let percMinToMax = (secsPassed - (getMinSessionLength() * 60)) / ((getMaxSessionLength() * 60) - (getMinSessionLength() * 60));
        let random = randomInteger(1, 5);
        let api = getApathyMoodIndex();
        let percThreshold = 0.3657209 + 0.00629 * api + 0.03762 * Math.pow(random, 2) + 0.000102 * api * Math.pow(random, 3) - 0.044676 * random - 0.00826 * Math.pow(random, 3) -
            0.00056 * api * Math.pow(random, 2);
        DMessage("percmintomax: " + percMinToMax + " out of percthreshold " + percThreshold);
        if (percMinToMax > percThreshold)
        {
            return false;
        }
    }
    return true;
}


/*||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
* INTERNAL METHODS: DON'T USE THESE UNLESS YOU KNOW WHAT YOU'RE DOING! |
*///||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

/**
* CustomStroke internal stroking method. Do not call this directly!
**/
function customStroke(duration, bpm) {
	strokingCycle=true;
    startStroking(bpm);
    lockImages();
    let tauntFreq = getTauntFrequency();
    let tauntIncrement = 1;
    let currentTime;
    switch (tauntFreq) {
        case 5:
            tauntIncrement = randomInteger(2, 4);
            break;
        case 4:
            tauntIncrement = randomInteger(3, 6);
            break;
        case 3:
            tauntIncrement = randomInteger(5, 11);
            break;
        case 2:
            tauntIncrement = randomInteger(8, 16);
            break;
        case 1:
            tauntIncrement = randomInteger(11, 31);
            break;
        default:
            tauntIncrement = 0;
    }

    currentTime = getMillisPassed() / 1000;
    let tauntTime = tauntIncrement + currentTime;
    timeLeftStroking = duration;
    strokeTime = duration;
    let secThreshold = currentTime + duration;
    while (currentTime < secThreshold && timeLeftStroking != -1) {
        sleep(.5);
        currentTime = getMillisPassed() / 1000;
		if (timeLeftStroking == -1)
        {
            break;
        }
        timeLeftStroking = secThreshold - currentTime;
        if (timeLeftStroking == -1)
        {
            break;
        }
        if (currentTime > (tauntTime - .2) && currentTime < (tauntTime + .2)) {
            CMessage("%stroketaunt1%")
            switch (tauntFreq) {
                case 5:
                    tauntIncrement = randomInteger(2, 4);
                    break;
                case 4:
                    tauntIncrement = randomInteger(3, 6);
                    break;
                case 3:
                    tauntIncrement = randomInteger(5, 11);
                    break;
                case 2:
                    tauntIncrement = randomInteger(8, 16);
                    break;
                case 1:
                    tauntIncrement = randomInteger(11, 31);
                    break;
                default:
                    tauntIncrement = 0;
            }
            tauntTime = currentTime + tauntIncrement;
        }
    }
	strokingCycle=false;
    timeLeftStroking = 0;
    strokeTime = 0;
    unlockImages();
}

/**
* endstroking internal method that will end stroking. Do not call this directly unless you know what you are doing!
**/
function endStroking() {
    if (timeLeftStroking <= 0) {
        WMessage("error: user was not stroking");
    }
    timeLeftStroking = -1;
}

/**
* getMaxHoldingLength getter method to get the personality variable "maxholdinglength". You probably won't want to call this 
* directly.
**/
function getMaxHoldingLength() {
    let maxHoldingLength = getVar("maxholdinglength", "3m");
    if (typeof maxHoldingLength == "number") {
        if (maxHoldingLength >= 1 && maxHoldingLength > getMinHoldingLength()) {
            return maxHoldingLength * 60;
        }
    }
    else {
        let regEx = new RegExp("^([0-9]+)[s,m]")
        if (regEx.test(maxHoldingLength)) {
            if (maxHoldingLength.search("s") != -1 && (parseInt(maxHoldingLength.substr(0, maxHoldingLength.length - 1))) > getMinHoldingLength()) {
                return parseInt(maxHoldingLength.substr(0, maxHoldingLength.length - 1));
            }
            else if (maxHoldingLength.search("m") != -1 && (60 * parseInt(maxHoldingLength.substr(0, maxHoldingLength.length - 1))) > getMinHoldingLength()) {
                return 60 * parseInt(maxHoldingLength.substr(0, maxHoldingLength.length - 1));
            }
        }
    }

    //Returns 3m if the max holding length has not been set or is invalid
    if (180 > getMinHoldingLength()) {
        return 180;
    }
    else {
        return 2 * getMinHoldingLength();
    }
}

/**
* getMaxSessionLength getter method to get the personality variable "maxsessionlength". You probably won't want to call this 
* directly.
**/
function getMaxSessionLength() {
    let maxSessionLength = getVar("maxsessionlength", 40);
    if (typeof maxSessionLength == "number") {
        if (maxSessionLength > 0 && maxSessionLength > getMinSessionLength()) {
            return maxSessionLength;
        }
    }
    //Returns 40 if the max session length has not been set or is invalid
    if (40 > getMinSessionLength()) {
        return 40;
    }
    else {
        return 2 * getMinSessionLength();
    }
}

/**
* getMaxStrokingLength getter method to get the personality variable "maxstrokinglength". You probably won't want to call this 
* directly.
**/
function getMaxStrokingLength() {
    let maxStrokingLength = getVar("maxstrokinglength", 4);
    if (typeof maxStrokingLength == "number") {
        if (maxStrokingLength > 0 && maxStrokingLength > getMinStrokingLength()) {
            return maxStrokingLength;
        }
    }
    //Returns 4 if the max stroking length has not been set or is invalid
    if (4 > getMinStrokingLength()) {
        return 4;
    }
    else {
        return 2 * getMinStrokingLength();
    }
}

/**
* getMinHoldingLength getter method to get the personality variable "minholdinglength". You probably won't want to call this 
* directly.
**/
function getMinHoldingLength() {
    let minHoldingLength = getVar("minholdinglength", "10s");
    if (typeof minHoldingLength == "number") {
        if (minHoldingLength >= 1) {
            return minHoldingLength * 60;
        }
    }
    else {
        let regEx = new RegExp("^([0-9]+)[s,m]")
        if (regEx.test(minHoldingLength)) {
            if (minHoldingLength.search("s") != -1) {
                return parseInt(minHoldingLength.substr(0, minHoldingLength.length - 1));
            }
            else if (minHoldingLength.search("m") != -1) {
                return 60 * parseInt(minHoldingLength.substr(0, minHoldingLength.length - 1));
            }
        }
    }


    //Returns 10s if the min holding length has not been set or is invalid
    return 10;
}

/**
* getMinSessionLength getter method to get the personality variable "minsessionlength". You probably won't want to call this 
* directly.
**/
function getMinSessionLength() {
    let minSessionLength = getVar("minsessionlength", 20);
    if (typeof minSessionLength == "number") {
        if (minSessionLength > 0) {
            return minSessionLength;
        }
    }
    //Returns 20 if the min session length has not been set or is invalid
    return 20;
}

/**
* getMinStrokingLength getter method to get the personality variable "minstrokinglength". You probably won't want to call this 
* directly.
**/
function getMinStrokingLength() {
    let minStrokingLength = getVar("minstrokinglength", 1);
    if (typeof minStrokingLength == "number") {
        if (minStrokingLength > 0) {
            return minStrokingLength;
        }
    }
    //Returns 1 if the min stroking length has not been set or is invalid
    return 1;
}

/**
* getRuinChance getter method to get the personality variable "ruinchance". You probably won't want to call this directly.
**/
function getRuinChance() {
    let ruinChance = getVar("ruinchance", 20);
    if (typeof ruinChance == "number") {
        if (ruinChance >= 0 && ruinChance <= 100) {
            return ruinChance + ruinModifyAmount;
        }
    }
    //Returns 20% if the ruin chance has not been set or is invalid
    return 20;
}

function increaseOrgasmChance(amount)
{
    orgasmModifyAmount += amount;
}

function increaseRuinChance(amount) {
    ruinModifyAmount += amount;
}

/**
* getOrgasmChance getter method to get the personality variable "orgasmchance". You probably won't want to call this directly.
**/
function getOrgasmChance() {
    let orgasmChance = getVar("orgasmchance", 70);
    if (typeof orgasmChance == "number") {
        if (orgasmChance >= 0 && orgasmChance <= 100) {
            return orgasmChance + orgasmModifyAmount;
        }
    }
    //Returns 70% if the orgasm chance has not been set or is invalid
    return 70;
}

/**
* getTauntFrequency getter method to get the personality variable "tauntFrequency". You probably won't want to call this 
* directly.
**/
function getTauntFrequency() {
    let tauntFrequency = getVar("tauntFrequency", 3);
    if (typeof tauntFrequency == "number") {
        if (tauntFrequency >= 0 && tauntFrequency <= 5) {
            return tauntFrequency;
        }
    }
    //Returns 3 if the taunt frequency has not been set or is invalid
    return 3;
}

function addStrokeTime (amount)
{
    strokeTime += amount;
}

/**
* stopEdging method to stop edging or holdingTheEdge. You probably won't want to call this directly.
**/
function stopEdging() {
    stopStroking();
    setTempVar("holdingedge", false);
    setTempVar("edging", false);
}
DMessage("PersonalitUtils: End");
