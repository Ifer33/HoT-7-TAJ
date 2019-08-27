DMessage("End_1_RESTRICTED: start");
main();
DMessage("End_1_RESTRICTED: end");
function main()
{
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
    setDate("AVLastSession")
    delVar("AV_CrashReport");
    delVar("AV_DecOrg");
    delVar("AV_IncRuin");
    delVar("AV_IncOrg");
    delVar("AV_DecRuin");
    setVar("AV_EndDenied", getVar("AV_EndDenied", 0) + 1);
    setVar("AV_EndCum", 0);
    setVar("AV_EndRuin", 0);
    CMessage("Normally this would be the time I decide if you get to cum");
    CMessage("But you\'re not even allowed to cum right now, are you %Lol%");
    CMessage("I do want to leave you with something to remember me with though");
    CMessage("So why don\'t you start stroking one last time for me");
    setRapidText(true);
    CMessage("All the way to the edge");
    CMessage("And I\'ll let you hold it before I send you away %Grin%");
    holdEdge();
    setRapidText(false);
    CMessage("That\'s all you get %GeneralTime% %SubName%");
    CMessage("I look forward to teasing you again soon");
    CMessage("Just like I bet you look forward to finally being able to cum again %Lol%");
    CMessage("Goodbye for now %EmoteHappy%");
    setRapidText(true);
    SMessage("<b>END SESSION REPORT</b>");
	showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    SMessage("The Domme mood ended in %DomMood%");
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    SMessage("The Domme level ended in %DomLevel%");
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    SMessage("The Domme apathy ended in %DomApathy%");
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("Mistress Mode actived in this session");
        showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
        setRapidText(false);
    }
    SMessage("That Status will be reseted in the next session");
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    sleep(10);
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "System.jpg");
    endSession();
    return;
    //The domme points out that you're not allowed to cum, but lets you hold one last edge for her before you leave. Written by 1885.
}