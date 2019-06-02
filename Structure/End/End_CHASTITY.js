DMessage("End_CHASTITY: start");
main();
DMessage("End_CHASTITY: end");
function main()
{
    CMessage("You can remove your %ChastityCage%");
    //--Command:ChastityOff
	setVar("chastityOn",false);
    sleep(30);
    run("Stroke" + java.io.File.separator + "End" + java.io.File.separator + "Extended_End.js");
    return;
    if(getVar("AV_DecOrg", false))
    {
        increaseOrgasmChance(8);
    }
    if(getVar("AV_IncRuin", false))
    {
        increaseRuinChance(-8);
    }
    if(getVar("AV_IncOrg", false))
    {
        increaseOrgasmChance(-8);
    }
    if(getVar("AV_DecRuin", false))
    {
        increaseRuinChance(8);
    }
    delVar("AV_CrashReport");
    CMessage("We\'ve finally reached my favorite part of teasing you");
    CMessage("Deciding if you get to cum!");
    CMessage("Now let\'s see...");
    CMessage("Oh yeah, you\'re still locked in that cage aren\'t you? %Lol%");
    CMessage("Oh well, I guess there\'s nothing else I can do");
    CMessage("You just won\'t be able to cum %GeneralTime%");
    CMessage("I was feeling so generous too %Grin%");
    CMessage("Oh well %PetName%");
    CMessage("I guess there\'s always next time");
    CMessage("Until then, you\'ll just have to keep that %Cock% locked up for me");
    CMessage("Good bye for now %EmoteHappy%");
    endSession();
    return;
}