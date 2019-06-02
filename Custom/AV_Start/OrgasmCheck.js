DMessage("OrgasmCheck: Beginning");
main();
DMessage("OrgasmCheck: End");
function main()
{
    if(getVar("AV_TimeCalculed", false))
    {
        CalculoEnd();
        return;
    }
    setTempVar("AV_TimeCalculed", true);
    setVar("AV_DaysOfDenial", 0);
    if (getTimePassed("AVLastSession","days") > 7)
    {
        OverWeek();
        return;
    }
    if (getTimePassed("AVLastSession","days") == 7)
    {
        a7_days();
        return;
    }
    if (getTimePassed("AVLastSession","days") == 6)
    {
        a6_days();
        return;
    }
    if (getTimePassed("AVLastSession","days") == 5)
    {
        a5_days();
        return;
    }
    CalByLastEnd();
    return;
    CalculoEnd();
    return;
    a2_days();
}
function a2_days()
{
    setVar("AV_DaysOfDenial", getVar("AV_DaysOfDenial", 0) + 2);
    CalculoEnd();
    return;
    a3_days();
}
function a3_days()
{
    setVar("AV_DaysOfDenial", getVar("AV_DaysOfDenial", 0) + 3);
    CalculoEnd();
    return;
    a4_days();
}
function a4_days()
{
    setVar("AV_DaysOfDenial", getVar("AV_DaysOfDenial", 0) + 4);
    CalculoEnd();
    return;
    a5_days();
}
function a5_days()
{
    setVar("AV_DaysOfDenial", getVar("AV_DaysOfDenial", 0) + 5);
    CalculoEnd();
    return;
    a6_days();
}
function a6_days()
{
    setVar("AV_DaysOfDenial", getVar("AV_DaysOfDenial", 0) + 6);
    CalculoEnd();
    return;
    a7_days();
}
function a7_days()
{
    setVar("AV_DaysOfDenial", getVar("AV_DaysOfDenial", 0) + 7);
    CalculoEnd();
    return;
    OverWeek();
}
function OverWeek()
{
    setVar("AV_DaysOfDenial", getVar("AV_DaysOfDenial", 0) + getTimePassed("AVLastSession","days"));
    CalculoEnd();
    return;
    CalculoEnd();
}
function CalculoEnd()
{
    if (getTimePassed("AVLastSession","days") > 6)
    {
        Long();
        return;
    }
    if (getTimePassed("AVLastSession","days") > 3)
    {
        Some();
        return;
    }
    if (getTimePassed("AVLastOrgasm","days") > 3)
    {
        DeniedByDomme();
        return;
    }
    if(getVar("AV_End_Result", false))
    {
        AV_End_Result();
        return;
    }
    setVar("AV_EndCum", 0);
    setVar("AV_EndDenied", 0);
    setVar("AV_EndRuin", 0);
    setVar("AV_End_Result", true);
    AV_End_Result();
	return;
}
function AV_End_Result()
{
    if (getVar("AV_EndDenied", 0) == 1)
    {
        Denied1();
        return;
    }
    if (getVar("AV_EndDenied", 0) == 2)
    {
        Denied2();
        return;
    }
    if (getVar("AV_EndDenied", 0) >= 3)
    {
        Denied3();
        return;
    }
    if (getVar("AV_EndRuin", 0) >= 1)
    {
        Ruined1();
        return;
    }
    if (getVar("AV_EndCum", 0) >= 1)
    {
        Cum1();
        return;
    }
    Fim();
    return;
    Cum1();
}
function Cum1()
{
    CMessage("After all I did let you come for me last " + random("session", "time"));
    return;
    Ruined1();
}
function Ruined1()
{
    CMessage(random("And you had to ruin an orgasm for me last time anyway", "And you ruined an orgasm for me last time"));
    CMessage("So I know you\'re %Probably% feeling pretty " + random("frustrated ", "desperate ") + "all ready");
    CMessage("So this is going to be a lot of fun for me");
    return;
    Denied1();
}
function Denied1()
{
    CMessage("And since I denied you last time");
    CMessage("I %Know% that you\'re %Probably% feeling pretty " + random("frustrated ", "desperate ") + "anyway");
    CMessage("So this is going to be a lot of fun for me");
    return;
    Denied2();
}
function Denied2()
{
    CMessage("You " + random("was denied ", "didn\'t came ") + "the last 2 sessions, " + random("%PetName%", "%SubName%"));
    CMessage(random("You think you get a choice in when you can cum? No, %Name%, you gave up that right when you let me control you. You are mine now", "Well...but it\'s really your problem, you are frustrated by the denial %SubName%. I still can and will have fun. And your frustration is pleasure me for me"));
    return;
    Denied3();
}
function Denied3()
{
    CMessage("I can\'t remember the last time I let you cum");
    CMessage("I know you are %Aching% for me");
    CMessage("I\'m not saying you\'ll never cum again. I\'m just saying it might help you if that was your expectation from now on");
    return;
    
    
    Long();
}
function Long()
{
    switch(random("L01", "L02", "L03"))
    {
        case "L01":
        L01();
        return;
        break;
        case "L02":
        L02();
        return;
        break;
        case "L03":
        L03();
        return;
        break;
    }
    
    L01();
}
function L01()
{
    CMessage("It\'s been over a week, %SubName%");
    CMessage("But I knew that eventually you\'d come back");
    CMessage("You\'re helpless to resist me and you know it");
    LongContinue();
    return;
    L02();
}
function L02()
{
    CMessage("It\'s been over a week since I last saw you, %SubName%");
    CMessage("I can barely remember our last session, actually...");
    CMessage("But I\'m glad you\'re here %Smile%");
    LongContinue();
    return;
    L03();
}
function L03()
{
    CMessage("I can barely remember the last time I got to tease you");
    CMessage("Must have been some session... %EmoteWink%");
    CMessage("But you\'re back again, that\'s the important thing");
    CMessage("I guess it was only a matter of time");
    LongContinue();
    return;
    
    Some();
}
function Some()
{
    switch(random("S01", "S02", "S03"))
    {
        case "S01":
        S01();
        return;
        break;
        case "S02":
        S02();
        return;
        break;
        case "S03":
        S03();
        return;
        break;
    }
    S01();
}
function S01()
{
    CMessage("I haven\'t seen you in a while");
    let answer0 = getInput("Did you miss me?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Aww that\'s sweet %Giggles%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("And yet here you are, back for more");
    }
    CMessage("Since it\'s been such a long time since I last teased you");
    CMessage("I\'m going to have to tease you twice as hard %GeneralTime%");
    LongContinue();
    return;
    S02();
}
function S02()
{
    CMessage("So you decided to come back after all");
    CMessage("I was starting to think you wouldn\'t come back at all, %SubName%");
    CMessage("But I guess the power I have over you is still unbroken %Smile%");
    CMessage("I\'m not surprised");
    CMessage("You need " + random("this, %Name%", "me to tell you how to %JerkOff%", "to stare at my hot body", "me to put you in your place and control you"));
    CMessage("So here you are");
    CMessage("Ready to serve me once again");
    LongContinue();
    return;
    S03();
}
function S03()
{
    CMessage("It\'s been some time since I last say you, %Name%");
    CMessage("That\'s okay, I\'m glad you\'re here now");
    LongContinue();
    return;
    
    HalfControl();
}
function HalfControl()
{
    CMessage("I love controlling your orgasms but,");
    CMessage("I think I will allow you to %Stroke% between our sessions...");
    CMessage("This will help to build " + random("your level of frustration", "your ache", "your desperation"));
    let answer0 = getInput("Would you like that?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("That\'s no surprise...");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Really? That\'s hard to believe, but OK");
        Fim();
        return;
    }
    CMessage("%Okay%, now you\'re allowed to %Stroke% whatever you like");
    setVar("AV_AllowMasturb", true);
    CMessage("But remember, don\'t cum...");
    CMessage("By doing so, after all, you will only make the teasing I put you through harder.");
    CMessage("That\'s why I\'m fine with it.");
    CMessage("You can never cum to porn, of course, unless given a special permission by me.");
    Fim();
    return;
    
    LongContinue();
}
function LongContinue()
{
    if(getVar("AV_AllowMasturb", false))
    {
        fdhujds();
        return;
    }
    if(getVar("pthevCompleteControlYES", false))
    {
        HalfControl();
        return;
    }
    fdhujds();
}
function fdhujds()
{
    let answer0 = getInput("You\'ve probably been %JerkingOff% a lot since last time, right?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("That\'s no surprise...");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Really? That\'s hard to believe %Name%");
    }
    let answer1 = getInput("Did you cum?");
    if (answer1.isLike("yes"))
    {
        CMessage("%EmoteSad%");
        did_cum();
        return;
    }
    else if (answer1.isLike("no"))
    {
        CMessage("%GoodBoy%");
    }
    setVar("AV_Denied", true);
    if (getTimePassed("AVLastSession","days") > 7)
    {
        OverWeek2();
        return;
    }
    if (getTimePassed("AVLastSession","days") > 5)
    {
        a5_daysa();
        return;
    }
    Fim();
    return;
    a5_daysa();
}
function a5_daysa()
{
    CMessage(random("This means ", "That means ", "So... ") + "you are a few days without cumming.");
    CMessage("That\'s must " + random("feel so frustrating", "be so hard", "make you ache so much"));
    Fim();
    return;
    OverWeek2();
}
function OverWeek2()
{
    CMessage(random("This means ", "That means ", "So... ") + "you are over a week without cumming.");
    CMessage("That\'s must " + random("feel so frustrating", "be so hard", "make you ache so much"));
    Fim();
    return;
    
    did_cum();
}
function did_cum()
{
    if(getVar("pthevCompleteControlYES", false))
    {
        run("Custom" + java.io.File.separator + "CallFromLink" + java.io.File.separator + "pvHadOrgasmStart.js");
        return;
    }
    if (randomInteger(1, 100) <= 30)
    {
        CallControl();
        return;
    }
    CMessage("I don\'t like it when you cum without my permission, %SubName%");
    CMessage("At least decided to do the right thing and told me");
    return;
    
    DeniedByDomme();
}
function DeniedByDomme()
{
    CMessage("It\'s been " + random("a few ", "some ") + "time since I " + random("allow ", "let ") + "you came, %Name%");
    CMessage("And here you are " + random("helpless to resist me and you know it", "ready to serve me once again"));
    LongContinue();
    return;
    
    CallControl();
}
function CallControl()
{
    run("Custom" + java.io.File.separator + "CallFromLink" + java.io.File.separator + "pvHadOrgasmStart.js");
    return;
    
    Fim();
}
function Fim()
{
    return;
    
    CalByLastEnd();
}
function CalByLastEnd()
{
    if (getTimePassed("AVLastOrgasm","days") > 7)
    {
        OverWeek();
        return;
    }
    if (getTimePassed("AVLastOrgasm","days") == 7)
    {
        a7_days();
        return;
    }
    if (getTimePassed("AVLastOrgasm","days") == 6)
    {
        a6_days();
        return;
    }
    CalculoEnd();
    return;
    
    
    //Removed
    CMessage("Line 176");
    if (getTimePassed("AVLastOrgasm","days") == 5)
    {
        a5_days();
        return;
    }
    if (getTimePassed("AVLastOrgasm","days") == 4)
    {
        a4_days();
        return;
    }
    if (getTimePassed("AVLastOrgasm","days") == 3)
    {
        a3_days();
        return;
    }
    if (getTimePassed("AVLastOrgasm","days") == 2)
    {
        a2_days();
        return;
    }
    
    CMessage("Line 9");
    if (getTimePassed("AVLastSession","days") == 4)
    {
        a4_days();
        return;
    }
    if (getTimePassed("AVLastSession","days") == 3)
    {
        a3_days();
        return;
    }
}