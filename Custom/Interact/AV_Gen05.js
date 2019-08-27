DMessage("AV_Gen05: start");
main();
DMessage("AV_Gen05: end");
function main()
{
    if(getVar("av_intera_017", false))
    {
        av_intera_017();
        return;
    }
    if(getVar("av_intera_018", false))
    {
        av_intera_018();
        return;
    }
    CMessage("And I\'ve decided to punish you for having that dirty crush for me");
    CMessage("That\'s right, bitch. I\'m in charge.");
    CMessage("You love being dominated, you little slut!");
    CMessage("It\'s good to know that I turn you on");
    CMessage("Hit your balls " + (java.lang.Math.round(randomInt(10, 20) / 10.0) * 10) + "times with the spoon");
    CMessage("And make each hit louder than the last.");
    return;
    //not sure if it should return here or go on
    av_intera_017();
}
function av_intera_017()
{
    SMessage("Too many edges %SubName%?",-1,2);
    let answer0 = getInput(random("What is the problem", "What is", "What", "Say", "you can talk to me", "yes", "what happened"),null, -1, true, 2);
    while (!(answer0.isLike("cum") || answer0.isLike("cumming") || answer0.isLike("much") || answer0.isLike("intense") || answer0.isLike("hard") || answer0.isLike("pause") || answer0.isLike("break") || answer0.isLike("rest")))
    {
        answer0 = getInput("what %SubName%?",null, -1, true, 2);
    }
    if (answer0.isLike("cum", "cumming"))
    {
        SMessage("oh...", -1, 2);
        CheckCum1();
        return;
    }
    else if (answer0.isLike("much", "intense", "hard"))
    {
        CheckMood1();
        return;
    }
    else if (answer0.isLike("pause", "break", "rest"))
    {
        CheckPause1();
        return;
    }
    CheckCum1();
}
function CheckCum1()
{
    SMessage("Did you cum or you are about to cum",-1,2);
    let answer0 = getInput("To be clear, did you came?",null, -1, true, 2);
	while (!(answer0.isLike("yes") || answer0.isLike("no") ))
    {
        answer0 = getInput("%YesOrNo%",null, -1, true, 2);
    }
    if (answer0.isLike("yes"))
    {
        SMessage("Oh noo...", -1, 2);
        run("Interrupt"+seperator+"OpiateNPC.js");
    }
    else if (answer0.isLike("no"))
    {
        SMessage("%Good%", -1, 2);
        CheckMood1();
        return;
    }
    CheckMood1();
}
function CheckMood1()
{
    SMessage(random("Here\'s what I\'ve decided", "%SubName%", "I don\'t have a problem with your desires"), -1, 2);
    SMessage("After all here you are " + random("naked in front of me", "totally at my mercy"), -1, 2);
    if (randomInteger(1, 100) <= 50)
    {
        CBT1();
        return;
    }
    SMessage(random("I\'m really being %Mean% to that %Cock% of yours %GeneralTime%, aren\'t I? ", "Ok %PetName% ", "Does your whole body want to cum? ") + random("You ", "We ") + "can stop...for " + random("a while", "now"),-1,2);
    addContact(1);
    removeContact(2);
    run("Interrupt"+seperator+"AV_Cancela.js");
    return;
    CBT1();
}
function CBT1()
{
    SMessage("Maybe " + random("a few ", "some ") + "pain will " + random("help you to take it", "make it easy", "help you to keep that cum inside"), -1, 2);
    LoopCBT1();
}
function LoopCBT1()
{
    if(getVar("av_fetish_pain", false))
    {
        cbt("ball",-1,2);
    }
    cbt("ball",-1,2);
    let answer0 = getInput("Enough?",null, -1, true, 2);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%",null, -1, true, 2);
    }
    if (answer0.isLike("yes"))
    {
        SMessage("%Okay%", -1, 2);
    }
    else if (answer0.isLike("no"))
    {
        SMessage("Another round then", -1, 2);
        LoopCBT1();
        return;
    }
    SMessage("Let\'s continue", -1, 2);
    return;
    CheckPause1();
}
function CheckPause1()
{
    SMessage(random("I\'ll try to keep your limits in mind a little better ", "I think ") + "I can let you rest for a while", -1, 2);
    if (randomInteger(1, 100) <= 50)
    {
        Position1();
        return;
    }
    SMessage("enjoy", -1, 2);
    sleep(randomInt(100, 200));
    SMessage("%ThatsEnough%", -1, 2);
    return;
    Position1();
}
function Position1()
{
    SMessage("But I want you to stay in this position", -1, 2);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "all" + java.io.File.separator + "*.jpg");
    lockImages();
    SMessage("enjoy", -1, 2);
    sleep(randomInt(100, 200));
    SMessage("%ThatsEnough%", -1, 2);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    unlockImages();
    SMessage("%SitDown%", -1, 2);
    return;
    av_intera_018();
}
function av_intera_018()
{
    SMessage("Too many edges %SubName%?",-1,3);
    let answer0 = getInput(random("What is the problem", "What is", "What", "Say", "you can talk to me", "yes", "what happened"),null, -1, true, 3);
    while (!(answer0.isLike("cum") || answer0.isLike("cumming") || answer0.isLike("much") || answer0.isLike("intense") || answer0.isLike("hard") || answer0.isLike("pause") || answer0.isLike("break") || answer0.isLike("rest")))
    {
        answer0 = getInput("what %SubName%?",null, -1, true, 3);
    }
    if (answer0.isLike("cum", "cumming"))
    {
        SMessage("oh...", -1, 3);
        CheckCum2();
        return;
    }
    else if (answer0.isLike("much", "intense", "hard"))
    {
        CheckMood2();
        return;
    }
    else if (answer0.isLike("pause", "break", "rest"))
    {
        CheckPause2();
        return;
    }
    CheckCum2();
}
function CheckCum2()
{
    SMessage("Did you cum or you are about to cum",-1,3);
    let answer0 = getInput("To be clear, did you came?",null, -1, true, 3);
	while (!(answer0.isLike("yes") || answer0.isLike("no") ))
    {
        answer0 = getInput("%YesOrNo%",null, -1, true, 3);
    }
    if (answer0.isLike("yes"))
    {
        SMessage("Oh noo...", -1, 3);
        run("Interrupt"+seperator+"OpiateNPC.js");
    }
    else if (answer0.isLike("no"))
    {
        SMessage("%Good%", -1, 3);
        CheckMood2();
        return;
    }
    CheckMood2();
}
function CheckMood2()
{
    SMessage(random("Here\'s what I\'ve decided", "%SubName%", "I don\'t have a problem with your desires"), -1, 3);
    SMessage("After all here you are " + random("naked in front of me", "totally at my mercy"), -1, 3);
    if (randomInteger(1, 100) <= 50)
    {
        CBT2();
        return;
    }
    SMessage(random("I\'m really being %Mean% to that %Cock% of yours %GeneralTime%, aren\'t I? ", "Ok %PetName% ", "Does your whole body want to cum? ") + random("You ", "We ") + "can stop...for " + random("a while", "now"),-1,3);
    addContact(1);
    removeContact(3);
    run("Interrupt"+seperator+"AV_Cancela.js");
    return;
    CBT2();
}
function CBT2()
{
    SMessage("Maybe " + random("a few ", "some ") + "pain will " + random("help you to take it", "make it easy", "help you to keep that cum inside"), -1, 3);
    LoopCBT2();
}
function LoopCBT2()
{
    if(getVar("av_fetish_pain", false))
    {
        cbt("ball",-1,3);
    }
    cbt("ball",-1,3);
    let answer0 = getInput("Enough?",null, -1, true, 3);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%",null, -1, true, 3);
    }
    if (answer0.isLike("yes"))
    {
        SMessage("%Okay%", -1, 3);
    }
    else if (answer0.isLike("no"))
    {
        SMessage("Another round then", -1, 3);
        LoopCBT2();
        return;
    }
    SMessage("Let\'s continue", -1, 3);
    return;
    CheckPause2();
}
function CheckPause2()
{
    SMessage(random("I\'ll try to keep your limits in mind a little better ", "I think ") + "I can let you rest for a while", -1, 3);
    if (randomInteger(1, 100) <= 50)
    {
        Position2();
        return;
    }
    SMessage("enjoy", -1, 3);
    sleep(randomInt(100, 200));
    SMessage("%ThatsEnough%", -1, 3);
    return;
    Position2();
}
function Position2()
{
    SMessage("But I want you to stay in this position", -1, 3);
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "all" + java.io.File.separator + "*.jpg");
    lockImages();
    SMessage("enjoy", -1, 3);
    sleep(randomInt(100, 200));
    SMessage("%ThatsEnough%", -1, 3);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    unlockImages();
    SMessage("%SitDown%", -1, 3);
    return;
}