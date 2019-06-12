DMessage("AV_WantToRuin: start");
main();
DMessage("AV_WantToRuin: end");
function main()
{
    if (isStrokingAll())
    {
        Sub_Stroking();
        return;
    }
    else
    {
        Sub_Not_Stroking();
        return;
    }
    Sub_Stroking();
}
function Sub_Stroking()
{
    CMessage("%stopstroking%", 0);
    stopStrokingAll();
    Sub_Not_Stroking();
}
function Sub_Not_Stroking()
{
    CMessage("Since you are so horny...");
    CMessage("I\'ve been thinking about something %PetName%");
    CMessage("The thing is, it would really turn me on if");
    CMessage("You let me ruin your orgasm %Grin%");
    CMessage("Will be easier for you to continue our session after that");
    let answer0 = getInput("Will you let me do that to you?");
    while (!(answer0.isLike("yes") || answer0.isLike("no") ))//|| answer0.isLike("I don't know") || answer0.isLike("dunno") || answer0.isLike("maybe") || answer0.isLike("scared")))
    {
		if (answer0.isLike("I don't know", "dunno", "maybe", "scared"))
		{
			CMessage("Just think about how happy you\'ll make me %EmoteHappy%");
			answer0.loop();
		}else {
			answer0 = getInput("C\'mon %PetName%, yes or no. Will you let me ruin your orgasm?");
		}
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Oh thank you, you just made me so happy %EmoteHappy%");
        Now_Im_Gonna_Make_You_Ache();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("I see");
    }
    CMessage("Well, I do understand that it\'s beyond your limits");
    CMessage("So I don\'t mind giving you one of my usual tease sessions %EmoteHappy%");
    CMessage("Either way I know you\'re about to ache like crazy %Grin%");
    return;
    Now_Im_Gonna_Make_You_Ache();
}
function Now_Im_Gonna_Make_You_Ache()
{
    CMessage("And now I'm %Gonna% make you <i>ache</i> %Grin%");
	setTempVar("AV_RuinHorny",true);
    CMessage("But before I can ruin you like I really want");
    setVar("AV_RuinHorny", 0);
    CMessage("I'm %Gonna% have to build you up so bad that it will absolutely <i>kill</i> you to have to take your hand away");
    CMessage("Only when you're <i>that</i> desperate");
    CMessage("Will I let you ruin it all for me %Grin%");
    switch(random("OpRu1", "OpRu2", "OpRu3"))
    {
        case "OpRu1":
        OpRu1();
        return;
        break;
        case "OpRu2":
        OpRu2();
        return;
        break;
        case "OpRu3":
        OpRu3();
        return;
        break;
    }
    OpRu1();
}
function OpRu1()
{
    //setVar("moduletorun", "AV_RuinHorny1")
	setTempVar("moduletorun", "Custom" + java.io.File.separator + "Modules" + java.io.File.separator + "AV_RuinHorny1.js")
    DONE();
    return;
    OpRu2();
}
function OpRu2()
{
    //setVar("moduletorun", "AV_RuinHorny2")
	setTempVar("moduletorun", "Custom" + java.io.File.separator + "Modules" + java.io.File.separator + "AV_RuinHorny2.js")
    DONE();
    return;
    OpRu3();
}
function OpRu3()
{
    //setVar("moduletorun", "AV_RuinHorny3")
	setTempVar("moduletorun", "Custom" + java.io.File.separator + "Modules" + java.io.File.separator + "AV_RuinHorny3.js")
    DONE();
}
function DONE()
{
    return;
}