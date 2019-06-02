DMessage("AV_Int_Tease: start");
main();
DMessage("AV_Int_Tease: end");
function main()
{
    switch(random("Intro01", "Intro02", "Intro03"))
    {
        case "Intro01":
        Intro01();
        return;
        break;
        case "Intro02":
        Intro02();
        return;
        break;
        case "Intro03":
        Intro03();
        return;
        break;
    }
    Intro01();
}
function Intro01()
{
    CMessage("The hornier you gets, the more desperately willing you will be to do anything and everything I say.");
    CMessage("The truth is, a certain amount of sexual frustration on your part is what gives me power.");
    CMessage("Sexual control really is the basis for all domination/submission foreplay.");
    StartPlay();
    return;
    Intro02();
}
function Intro02()
{
    CMessage("Trust me – you will be constantly aroused.");
    CMessage("And, frankly, associating arousal with pain and frustration is very much what I want to achieve.");
    CMessage("I want to train your mind more than you body.");
    StartPlay();
    return;
    Intro03();
}
function Intro03()
{
    CMessage("Constantly remind you how you\'re given yourself to me");
    CMessage("and how I cherish the sacrifice");
    CMessage("but you needs this training to really become mine.");
    //--UNINTERPRETED LINE:And doesn’t you really want my satisfaction in your servitude? @ResponseYes(AV_YesGood) @ResponseNo(AV_NoBad)
	let answer0 = getInput("And doesn’t you really want my satisfaction in your servitude?",6);
    if (answer0.isLike("yes"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no"))
    {
        aV_NoBadResponse();
    }
    StartPlay();
	return;
}
function StartPlay()
{
    switch(random("Tease01", "Tease02"))
    {
        case "Tease01":
        Tease01();
        return;
        break;
        case "Tease02":
        Tease02();
        return;
        break;
    }
    Tease01();
}
function Tease01()
{
    CMessage("Let\'s make you frustrated...");
    CMessage("%Stroke%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(randomInt(3, 5));
    CMessage("%stopstroking%", 0);
	stopAudio();
    sleep(randomInt(4, 7));
    CMessage("%Stroke%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(randomInt(3, 5));
    CMessage("%stopstroking%", 0);
	stopAudio();
    sleep(randomInt(4, 7));
    CMessage("%Stroke%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(randomInt(3, 5));
    CMessage("%stopstroking%", 0);
	stopAudio();
    sleep(randomInt(4, 7));
    if (randomInteger(1, 100) <= 30)
    {
        a001();
        return;
    }
    CMessage("%Stroke%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(randomInt(3, 5));
    CMessage("%stopstroking%", 0);
	stopAudio();
    sleep(randomInt(4, 7));
    a001();
	return;
}
function a001()
{
    CMessage("%Stroke%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(randomInt(3, 5));
    CMessage("%stopstroking%", 0);
	stopAudio();
    sleep(randomInt(4, 7));
    CMessage("%Stroke%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(randomInt(3, 5));
    CMessage("%stopstroking%", 0);
	stopAudio();
    sleep(randomInt(4, 7));
    if (randomInteger(1, 100) <= 50)
    {
        a002();
        return;
    }
    CMessage("%Stroke%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(randomInt(3, 5));
    CMessage("%stopstroking%", 0);
	stopAudio();
    sleep(randomInt(4, 7));
    a002();
	return;
}
function a002()
{
    CMessage("%Stroke%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(randomInt(3, 5));
    CMessage("%stopstroking%", 0);
	stopAudio();
    sleep(randomInt(4, 7));
    if (randomInteger(1, 100) <= 70)
    {
        a003();
        return;
    }
    CMessage("%Stroke%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(randomInt(3, 5));
    CMessage("%stopstroking%", 0);
	stopAudio();
    sleep(randomInt(4, 7));
    a003();
}
function a003()
{
    CMessage("%Stroke%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "bite.mp3");
    sleep(randomInt(3, 5));
    CMessage("%stopstroking%", 0);
	stopAudio();
    sleep(randomInt(4, 7));
    if(getVar("AV_MEM_CBT", false))
    {
        CMessage("%PetName%, get ready to spank your %Balls%...");
    }
    if(getVar("AV_MEM_CBT", false))
    {
        CMessage(random("Hit ", "Spank ") + "your balls");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Belle10*.mp3");
        sleep(20);
    }
    CMessage("%ThatsEnough%");
    sleep(20);
    delVar("AV_MEM_Submissive");
	delVar("AV_MEM_Submit");
	delVar("AV_MEM_Serve");
	delVar("AV_MEM_Used");
	delVar("AV_MEM_LikeTeased");
    return;
    Tease02();
}
function Tease02()
{
    CMessage("I should orgasm much more than you does.");
    CMessage("That goes without question, your submissiveness definitely translates into me cumming more.");
    edge("%Edge%");
    CMessage("I need to teach you how to orally please me better, and as often as I like.");
    CMessage("Good thing is, I don\'t have to do it for you.");
    return;
}