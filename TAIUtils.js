//let activeContacts = [];
let activeContacts = [0,0,0,0];
//delete did leave holes in the array and grows with every push
let lastTypeSpeed = null;

function setUpTAIUtils()
{
    //activeContacts.push(1);
	activeContacts[0]=1;
}

function setAFK(state)
{
    if (getVar("dommeafk", true) && state)
    {
        SMessage("<><c=coral b>%DomName% has gone afk.");
    }
    else
    {
        if (getVar("dommeafk", false))
        {
            SMessage("<><c=coral b>%DomName% is no longer afk.");
        }
    }
    setVar("dommeafk", state);
}

function addContact(contactNumber)
{
    //activeContacts.push(contactNumber);
	activeContacts[contactNumber-1]=contactNumber;
    switch (contactNumber)
    {
        case 1:
            SMessage("%DomName% has connected.");
			break;
        case 2:
            SMessage("%domfriend1name% has connected.");
			break;
        case 3:
            SMessage("%domfriend2name% has connected.");
			break;
        case 4:
            SMessage("%domfriend3name% has connected.");
			break;
    }
}
function removeContact(contactNumber)
{

    /*for (var i = 0; i < activeContacts.length; i++)
    {
        if (activeContacts[i] == contactNumber)
        {
            delete activeContacts[i];
        }
    }*/
	activeContacts[contactNumber-1]=0;
    switch (contactNumber) {
        case 1:
            SMessage("%DomName% has disconnected.");
			break;
        case 2:
            SMessage("%domfriend1name% has disconnected.");
			break;
        case 3:
            SMessage("%domfriend2name% has disconnected.");
			break;
        case 4:
            SMessage("%domfriend3name% has disconnected.");
			break;
    }
}

function inGroup(arguments=null)
{
	//DMessage("inGroup");
	//var other=0;
	if(arguments instanceof Array){
		for (var i = 0; i < arguments.length; i++)
		{
			var temp = false;
			var other=0;
			for (var j=0; j < activeContacts.length; j++)
			{
				if (activeContacts[j] === arguments[i])
				{
					temp = true;
					//DMessage("inGroup TempTrue array");
				}else if (activeContacts[j] >0){
					//DMessage("inGroup other++ j="+j);
					other++;
				}
			}
			if (!temp || other>arguments.length-1) {
				return false;
			}
		}
	} else {
		var other=0;
		var temp = false;
			for (var j=0; j < activeContacts.length; j++)
			{
				if (activeContacts[j] === arguments)
				{
					temp = true;
					//DMessage("inGroup TempTrue single");
				}else if (activeContacts[j] >0){
					other++;
				}
			}
			if (!temp || other>0) {
				return false;
			}
	}
	//DMessage("inGroup return true");
    return true;
}

function decideOrgasm()
{
    if (calculateOrgasm())
    {
        if (calculateRuin())
        {
            setDate("lastRuin");
            return 1;
        }
        else
        {
            setDate("lastOrgasm");
            return 2;
        }
    }
    else
    {
        return 0;
    }
}

function edgeToRuinHold(delay=-1,sender=1)
{
    //startEdging("%edge%",delay,sender);
	setTempVar("toOrgasm",true);
    holdEdge(delay,sender);
    let answer0 = getInput("%RuinYourOrgasm%",null,delay,true,sender);
    if (answer0.isLike("ruined", "did")) {
        SMessage("Good %Grin%",delay,sender);
    }
    else if (answer0.isLike("fuck")) {
        SMessage("%Grin%",delay,sender);
    }
    else {
        SMessage("Poor little thing... %Lol%",delay,sender);
    }
    if (getVar("AV_EatCum", false)) {
        SMessage("%AV_CumEat%",delay,sender);
        sleep(20);
    }
    SMessage("I love building up all that pleasure just to snatch it away from you",delay,sender);
}

function edgeToOrgasmHold(delay=-1,sender=1) {
    //startEdging("%edge%",delay,sender);
	setTempVar("toOrgasm",true);
    holdEdge(delay,sender);
    let answer0 = getInput("%CumForMe%",null,delay,true,sender);
    if (answer0.isLike("came", "finished", "did")) {
        SMessage("Good %Grin%",delay,sender);
    }
    else if (answer0.isLike("thank", "gracias", "merci", "grateful", "good", "amazing", "incredible")) {
        SMessage("You\'re welcome %PetName% %Grin%",delay,sender);
    }
    else {
        SMessage("Hehe just calm down now",delay,sender);
    }
    if (getVar("AV_EatCum", false)) {
        SMessage("%AV_CumEat%",delay,sender);
        sleep(20);
    }
    if (getVar("AV_EatCum", false)) {
        SMessage(random("You\'re going to swallow all of it", "Swallow all of it %PetName%"),delay,sender);
    }
}

function edgeToOrgasm(delay=-1,sender=1) {
    startEdging("%edge%",delay,sender);
	if (randomInteger(1, 100) <= 30) {
		setTempVar("toOrgasm",true);
        holdEdge(delay,sender);
    }
    let answer0 = getInput("%CumForMe%",null,delay,true,sender);
    if (answer0.isLike("came", "finished", "did")) {
        SMessage("Good %Grin%",delay,sender);
    }
    else if (answer0.isLike("thank", "gracias", "merci", "grateful", "good", "amazing", "incredible")) {
        SMessage("You\'re welcome %PetName% %Grin%",delay,sender);
    }
    else {
        SMessage("Hehe just calm down now",delay,sender);
    }
    if (getVar("AV_EatCum", false)) {
        SMessage("%AV_CumEat%",delay,sender);
        sleep(20);
    }
    if (getVar("AV_EatCum", false)) {
        SMessage(random("You\'re going to swallow all of it", "Swallow all of it %PetName%"),delay,sender);
    }
}

function edgeToRuin(delay=-1,sender=1) {
    startEdging("%edge%",delay,sender);
    if (randomInteger(1, 100) <= 30) {
		setTempVar("toOrgasm",true);
        holdEdge(delay,sender);
    }
    let answer0 = getInput("%RuinYourOrgasm%",null,delay,true,sender);
    if (answer0.isLike("ruined", "did")) {
        SMessage("Good %Grin%",delay,sender);
    }
    else if (answer0.isLike("fuck")) {
        SMessage("%Grin%",delay,sender);
    }
    else {
        SMessage("Poor little thing... %Lol%",delay,sender);
    }
    if (getVar("AV_EatCum", false)) {
        SMessage("%AV_CumEat%",delay,sender);
        sleep(20);
    }
    SMessage("I love building up all that pleasure just to snatch it away from you",delay,sender);
}

function setRapidText(state)
{
	lastTypeSpeed = getTypeSpeed();
    if (state)
    {
        //lastTypeSpeed = getTypeSpeed();
        setTypeSpeed("FASTEST");
    }
    else
    {
        setTypeSpeed(lastTypeSpeed);
    }
}