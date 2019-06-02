DMessage("AV_Chastity: start");
main();
DMessage("AV_Chastity: end");
function main()
{
    if(getVar("AV_Talk003_NotFirstTime", false))
    {
        AV_Talk003_NotFirstTime();
        return;
    }
    if(getVar("pvMadeKeyholder", false))
    {
        CMessage("I\'m so happy you made me your keyholder, %Name%");
    }
    CMessage("Putting you in chastity...");
    CMessage("I am " + random("thinking ", "dreaming ") + "a lot about this...");
    setVar("AV_Talk003_NotFirstTime", true);
    AV_Talk003_NotFirstTime();
	return;
}
function AV_Talk003_NotFirstTime()
{
    if(!getVar("AV_TChastity01", false))
    {
        CMessage(random("So...about chastity", "Continuing about chastity", "So...about chastity", "Let\'s keep talking about chastity", "So...chastity", "Let\'s keep teasing with chastity"));
        a001();
        return;
    }
    if(!getVar("AV_TChastity02", false))
    {
        CMessage(random("So...about chastity", "Continuing about chastity", "So...about chastity", "Let\'s keep talking about chastity", "So...chastity", "Let\'s keep teasing with chastity"));
        a002();
        return;
    }
    if(!getVar("AV_TChastity03", false))
    {
        CMessage(random("So...about chastity", "Continuing about chastity", "So...about chastity", "Let\'s keep talking about chastity", "So...chastity", "Let\'s keep teasing with chastity"));
        a003();
        return;
    }
    if(!getVar("AV_TChastity04", false))
    {
        CMessage(random("So...about chastity", "Continuing about chastity", "So...about chastity", "Let\'s keep talking about chastity", "So...chastity", "Let\'s keep teasing with chastity"));
        a004();
        return;
    }
    if(!getVar("AV_TChastity05", false))
    {
        CMessage(random("So...about chastity", "Continuing about chastity", "So...about chastity", "Let\'s keep talking about chastity", "So...chastity", "Let\'s keep teasing with chastity"));
        a005();
        return;
    }
    End();
    return;
    
    a001();
}
function a001()
{
    CMessage("I am not punishing you");
    CMessage("I am  protecting you from your perfectly normal lack of self-control");
    setVar("AV_TChastity01", true);
    CMessage("I am not denying your sexual pleasure.");
    CMessage("In fact, when I do release you from your male chastity belt, sex will feel better for you and your orgasms will become much more intense");
    return;
    a002();
}
function a002()
{
    CMessage("While you\'re locked up you\'ll use your mouth and fingers to provide me with sexual satisfaction on a regular basis.");
    setVar("AV_TChastity02", true);
    CMessage("And, there are ways that I have satisfying penetrative sex while you\'re still under lock and key");
    if (getVar("chastityOn", false))
    {
        End2();
        return;
    }
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_ChastityTalk.js");
    return;
    a003();
}
function a003()
{
    CMessage("You probably will try to claim you need to have regular orgasms to stay healthy.");
    setVar("AV_TChastity03", true);
    CMessage("This simply isn\'t true.");
    CMessage("You do need to have ejaculations every so often");
    CMessage("but I can make this happen in a matter of minutes without you getting an erection or having an orgasm");
    return;
    a004();
}
function a004()
{
    CMessage("When done correctly, you will feel more loved by me than you did before");
    setVar("AV_TChastity04", true);
    CMessage("male chastity became a part of our life.");
    CMessage("In fact, most men eventually thank their dommes for insisting on the lifestyle");
    CMessage("While at first I\'ll only keep you locked up for a few days at a time");
    CMessage("eventually you should be restricted to eight to 12 orgasms a year.");
    CMessage("This is more than enough");
    if (getVar("chastityOn", false))
    {
        End2();
        return;
    }
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_ChastityTalk.js");
    return;
    a005();
}
function a005()
{
    CMessage("Over time you\'ll start to feel like more of a man");
    setVar("AV_TChastity05", true);
    CMessage("because you\'ll know that all of your sexual energy is going towards pleasing me.");
    CMessage("You will like the fact that you no longer feels like a little boy");
    CMessage("who can\'t help but play with your little pee-pee when I am not looking.");
    CMessage("Instead, you will be saving yourself for me");
    return;
    
    End();
}
function End()
{
    delVar("AV_TChastity01");
    delVar("AV_TChastity02");
    delVar("AV_TChastity03");
    delVar("AV_TChastity04");
    delVar("AV_TChastity05");
    return;
    
    End2();
}
function End2()
{
    return;
    
}