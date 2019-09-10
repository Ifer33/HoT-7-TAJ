DMessage("AV_Glitters: start");
var edged=false;
edged2=false;
main();
DMessage("AV_Glitters: end");
function main()
{
    if(getVar("AV_MEM_Contact1", false))
    {
        Gltter01();
        return;
    }
    if(getVar("AV_MEM_Contact2", false))
    {
        Gltter02();
        return;
    }
    if(getVar("AV_MEM_Contact3", false))
    {
        Gltter03();
        return;
    }
    return;
    
    Gltter01();
}
function Gltter01()
{
    if (getApathyMoodIndex() >= 75)
    {
        CMessage("I would " + random("call ", "let you %Stroke% for ") + "%domFriend1Name%");
    }
    if (getApathyMoodIndex() >= 75)
    {
        CMessage("But you had being a bad boy %GeneralTime%");
        End2();
        return;
    }
    CMessage("So... " + random("%domFriend1Name% made your %Cock% %Ache%", "you miss %domFriend1Name%", "you want %domFriend1Name% to tease you"));
    CMessage("Let\'s call her");
    addContact(2);
    SMessage(random("Hi %DomName%!", "Hello %ShortName%!", "Hi! How are you %DomName%?"), -1, 2);
    CMessage(random("here is she!", "Hi sweet!", "Hi!", "Hi girl!"));
    CMessage(random("%SubName% said he needs you", "%SubName% miissed you", "%SubName% really need your touch right now", "%SubName% want to be tease by you"));
    SMessage(random("Hi %SubName%! How are you?", "Nice to see you %SubName%!", "Hello %SubName%!"), -1, 2);
    removeContact(1);
    CMessage("Yes you are a horny little one aren\'t you?");
    CMessage("So...let\'s start");
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "bdr583()");
	edged=false;
    CMessage("Let me know if you edge...");
    CMessage("Start Stroking");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    sleep(01);
    CMessage("%Stroke% it baby!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
    sleep(randomInt(15, 17));
	if(!edged){
		CMessage("Are you holding out on me?");
		stopAudio();
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
	} if(!edged){
		CMessage("%Yes%");
		sleep(02);
		sleep(02);
		sleep(02);
	} if(!edged){
		CMessage("Just give it everything you\'ve got right now!");
		stopAudio();
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
		sleep(randomInt(15, 17));
	} if(!edged){
		CMessage("%Stroke% for me and I\'ll make sure today will be a good day for you!");
		stopAudio();
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
	} if(!edged){
		CMessage("%Lol%");
		sleep(02);
		sleep(02);
		sleep(02);
	} if(!edged){
		CMessage("You can go better, I know you can!");
		stopAudio();
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
		sleep(randomInt(15, 17));
	} if(!edged){
		CMessage("Come on, just a bit more for me!");
		stopAudio();
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
		sleep(randomInt(15, 17));
	} if(!edged){
		CMessage("You like to stroke, you want to stroke, you NEED to stroke, so just do it now!");
		stopAudio();
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
		sleep(randomInt(15, 17));
		bdr583();
	}
	return;
}
function bdr583()
{
	edged=true;
	stopAudio();
    CMessage("%stopstroking%", 0);
    setVar("edgingmode", "Normal");
    CMessage("Break time");
    sleep(20);
    switch(random("a01", "a02"))
    {
        case "a01":
        a01();
        return;
        break;
        case "a02":
        a02();
        return;
        break;
    }
    a01();
}
function a01()
{
    CMessage("Let\'s try a few edges...");
    DoEdges(3, 7, 0);
    EndContact1();
    return;
    a02();
}
function a02()
{
    CMessage("Let\'s try a few overdrives");
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "we4tgt5()");
	edged2=false;
    CMessage(random("Give me ", "I want to see ", "Follow ") + "an Overdrive");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "StrokePattern" + java.io.File.separator + "overdrive*.mp3");
    sleep(05);
    sleep(05);
    sleep(03);
    sleep(05);
    if(!edged2){
		CMessage("Keep " + random("stroking", "going"));
		sleep(03);
		sleep(03);
		sleep(05);
	} if(!edged2){
		CMessage(random("Almost there", "just a bit more"));
		sleep(05);
	} if(!edged2){
		CMessage("%stopstroking%", 0);
		sleep(randomInt(20, 25));
	} if(!edged2){
		CMessage(random("Give me ", "I want to see ", "Follow ") + "another Overdrive");
		stopAudio();
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "StrokePattern" + java.io.File.separator + "overdrive*.mp3");
		sleep(05);
		sleep(05);
		sleep(03);
		sleep(05);
	} if(!edged2){
		CMessage("Keep " + random("stroking", "going"));
		sleep(03);
		sleep(03);
		sleep(05);
		sleep(05);
	} if(!edged2){
		CMessage("%stopstroking%", 0);
		sleep(randomInt(20, 30));
	} if(!edged2){
		CMessage(random("Give me ", "I want to see ", "Follow ") + "a last Overdrive");
		stopAudio();
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "StrokePattern" + java.io.File.separator + "overdrive*.mp3");
		sleep(05);
		sleep(05);
		sleep(03);
		sleep(05);
		sleep(03);
		sleep(03);
	} if(!edged2){
		CMessage(random("Almost there", "just a bit more"));
		sleep(05);
		sleep(05);
		we4tgt5();
	}
	return;
}
function we4tgt5()
{
	edged2=true;
	stopAudio();
    CMessage("%stopstroking%", 0);
    EndContact1();
}
function EndContact1()
{
    CMessage("%ThatsEnough%");
    setVar("edgingmode", "Normal");
    addContact(1);
    removeContact(2);
    return;
    
    Gltter02();
}
function Gltter02()
{
    if (getApathyMoodIndex() >= 75)
    {
        CMessage("I would " + random("call ", "let you %Stroke% for ") + "%domFriend1Name%");
    }
    if (getApathyMoodIndex() >= 75)
    {
        CMessage("But you had being a bad boy %GeneralTime%");
        End2();
        return;
    }
    CMessage("So... " + random("%domFriend2Name% made your %Cock% %Ache%", "you miss %domFriend2Name%", "you want %domFriend2Name% to tease you"));
    CMessage("Let\'s call her");
    addContact(3);
    SMessage(random("Hi %DomName%!", "Hello %ShortName%!", "Hi! How are you %DomName%?"), -1, 3);
    CMessage(random("here is she!", "Hi sweet!", "Hi!", "Hi girl!"));
    CMessage(random("%SubName% said he needs you", "%SubName% miissed you", "%SubName% really need your touch right now", "%SubName% want to be tease by you"));
    SMessage(random("Hi ", "Hello ") + random("%SubName%", "%PetName%"), -1, 3);
    removeContact(1);
    CMessage("I don\'t " + random("mind ", "have a problem with ") + "your " + random("lust", "desires"));
    CMessage("After all here you are " + random("naked in front of me", "totally at my mercy"));
    CMessage("So...let\'s start");
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "er4yio()");
	edged=false;
    CMessage("Let me know if you edge...");
    CMessage("Start Stroking");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    sleep(01);
    CMessage("%Stroke% it baby!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
    sleep(randomInt(15, 17));
	if(!edged){
		CMessage("Are you holding out on me?");
		stopAudio();
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
	} if(!edged){
		CMessage("%Yes%");
		sleep(02);
		sleep(02);
		sleep(02);
	} if(!edged){
		CMessage("Just give it everything you\'ve got right now!");
		stopAudio();
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
		sleep(randomInt(15, 17));
	} if(!edged){
		CMessage("%Stroke% for me and I\'ll make sure today will be a good day for you!");
		stopAudio();
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
	} if(!edged){
		CMessage("%Lol%");
		sleep(02);
		sleep(02);
		sleep(02);
	} if(!edged){
		CMessage("You can go better, I know you can!");
		stopAudio();
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
		sleep(randomInt(15, 17));
	} if(!edged){
		CMessage("Come on, just a bit more for me!");
		stopAudio();
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
		sleep(randomInt(15, 17));
	} if(!edged){
		CMessage("You like to stroke, you want to stroke, you NEED to stroke, so just do it now!");
		stopAudio();
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
		sleep(randomInt(15, 17));
		er4yio();
	}
	return;
}
function er4yio()
{
	edged=true;
	stopAudio();
    CMessage("%stopstroking%", 0);
    setVar("edgingmode", "Normal");
    CMessage("Break time");
    sleep(20);
    if(getVar("av_doanalnight", false))
    {
        switch(random("b03", "b02"))
        {
            case "b03":
            b03();
            return;
            break;
            case "b02":
            b02();
            return;
            break;
        }
    }
    switch(random("b01", "b02"))
    {
        case "b01":
        b01();
        return;
        break;
        case "b02":
        b02();
        return;
        break;
    }
    
    b01();
}
function b01()
{
    CMessage("Now, " + random("we will have an amazing combo of pain and pleasure", "We will be doing a series alternating between pain and pleasure", "You will have pleasure and pain mixed"));
    CMessage(random("Spank ", "hit ", "Smack ") + random("your ", "these ") + "%Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G2Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
    CMessage("%Edge%");
    startEdging();
    CMessage(random("Spank ", "hit ", "Smack ") + random("your ", "these ") + "%Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G2Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
	stopAudio();
    CMessage("%Edge%");
    startEdging();
    if(getVar("AV_DommeMistress", false))
    {
        CMessage(random("Spank ", "hit ", "Smack ") + random("your ", "these ") + "%Balls%");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G2Spank" + java.io.File.separator + "*.mp3");
        sleep(20);
		stopAudio();
    }
    if(getVar("AV_DommeMistress", false))
    {
        DoEdges(2, 3, 0);
    }
    CMessage(random("Spank ", "hit ", "Smack ") + random("your ", "these ") + "%Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G2Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
	stopAudio();
    edge("%Edge%");
    CMessage(random("Spank ", "hit ", "Smack ") + random("your ", "these ") + "%Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G2Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
	stopAudio();
    edge("%Edge%");
    CMessage(random("Spank ", "hit ", "Smack ") + random("your ", "these ") + "%Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G2Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
	stopAudio();
    edge("%Edge%");
    if(getVar("AV_DommeMistress", false))
    {
        CMessage(random("Spank ", "hit ", "Smack ") + random("your ", "these ") + "%Balls%");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G2Spank" + java.io.File.separator + "*.mp3");
        sleep(20);
		stopAudio();
    }
    if(getVar("AV_DommeMistress", false))
    {
        DoEdges(2, 3, 0);
    }
    CMessage(random("Spank ", "hit ", "Smack ") + random("your ", "these ") + "%Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G2Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
	stopAudio();
    edge("%Edge%");
    CMessage(random("Wow, that was so cool", "What a show babe", "Spectacular"));
    EndContact2();
    return;
    
    b02();
}
function b02()
{
    CMessage("Let\'s try a few overdrives");
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "3987hhh()");
	edged2=false;
    CMessage(random("Give me ", "I want to see ", "Follow ") + "an Overdrive");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "StrokePattern" + java.io.File.separator + "overdrive*.mp3");
    sleep(05);
    sleep(05);
    sleep(03);
    sleep(05);
	if(!edged2){
		CMessage("Keep " + random("stroking", "going"));
		sleep(03);
		sleep(03);
		sleep(05);
	} if(!edged2){
		CMessage(random("Almost there", "just a bit more"));
		sleep(05);
	} if(!edged2){
		CMessage("%stopstroking%", 0);
		sleep(randomInt(20, 25));
	} if(!edged2){
		CMessage(random("Give me ", "I want to see ", "Follow ") + "another Overdrive");
		stopAudio();
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "StrokePattern" + java.io.File.separator + "overdrive*.mp3");
		sleep(05);
		sleep(05);
		sleep(03);
		sleep(05);
	} if(!edged2){
		CMessage("Keep " + random("stroking", "going"));
		sleep(03);
		sleep(03);
		sleep(05);
		sleep(05);
	} if(!edged2){
		CMessage("%stopstroking%", 0);
		sleep(randomInt(20, 30));
	} if(!edged2){
		CMessage(random("Give me ", "I want to see ", "Follow ") + "a last Overdrive");
		stopAudio();
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "StrokePattern" + java.io.File.separator + "overdrive*.mp3");
		sleep(05);
		sleep(05);
		sleep(03);
		sleep(05);
		sleep(03);
		sleep(03);
	} if(!edged2){
		CMessage(random("Almost there", "just a bit more"));
		sleep(05);
		sleep(05);
		a3987hhh();
	}
	return;
}
function a3987hhh()
{
	edged2=true;
	stopAudio();
    CMessage("%stopstroking%", 0);
    EndContact2();
    return;
    b03();
}
function b03()
{
    CMessage(random("Anal time!", "fuck time...for me %Lol%", "time to fuck your ass", "how about we put your ass to the test?", "I think it\'s time to give your ass hole some attention"));
    CMessage(random("Make sure you get that dildo nice and lubed ", "Now get your asspussy wet ", "Lube up your dildo and your butt ") + random("because you know where it is going next", "I want you to get that dildo in there", "and prepare to be fucked"));
    sleep(30);
    CMessage(random("Stand and bend over the desk", "put your legs over the table...open it"));
    sleep(15);
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_rough", false))
    {
        if(randomInteger(1, 100) <= 30){
			CMessage("Oh,that\'s right you little bitch,prepare to take the whole thing up your ass");
		}
    }
    CMessage("Good boy. " + random("Now find a way to get that lubed dildo into your ass", "Place the tip against your butt...Now slide the dildo into your butt", "Slide it into your once tight little ass hole"));
    sleep(20);
    CMessage(random("Go on and force that diddo into your ass", "Can you feel it filling your most private hole?", "I wan\'t it to go all the way in", "Now I want you to moan loudly while you insert more of it in", "Keep on going until your dildo is all filled up"));
    CMessage("Fuck your ass following the beat");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "b055.mp3");
    CMessage(random("Nice and slow", "Ugh. Does that feel good %Slave%? I bet it does", "mmmm", "that\'s right, take it all", "Do you feel it stretching you?"));
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_rough", false))
    {
        CMessage(random("That\'s a tiny little asshole you have, let\'s make it bigger", "You look so pathetic with a dildo up your ass", "You\'re nothing more than my slave and I can do whatever I want to you"));
    }
    CMessage("Stop for now");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    if(!getVar("av_fetish_pain", false))
    {
        SkipDor();
        return;
    }
    if(getVar("AV_DommeMistress", false))
    {
        if (randomInteger(1, 100) <= 30)
        {
            SkipDor();
            return;
        }
    }
    if(!getVar("AV_DommeMistress", false))
    {
        if (randomInteger(1, 100) <= 50)
        {
            SkipDor();
            return;
        }
    }
    CMessage("I want you to put 2 clothespins on your nipples and " + randomInt(3, 5) + "on your %Balls%");
    sleep(30);
    SkipDor();
}
function SkipDor()
{
    if (randomInteger(1, 100) <= 50)
    {
        NoAudioFuck();
        return;
    }
    CMessage(random("Back to fucking", "start fucking yourself again"));
    SMessage("%DomName% turned on the mic");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "commands" + java.io.File.separator + "Fuck*.mp3");
    AudioGoHere();
    return;
    NoAudioFuck();
}
function NoAudioFuck()
{
    CMessage(random("Back to fucking", "start fucking yourself again"));
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "b055.mp3");
    CMessage(random("fuck yourself in a slow pace", "yeah thats it", "I wan\'t it to go all the way out and then all the way back in", "exactly! like that"));
    AudioGoHere();
}
function AudioGoHere()
{
    let answer0 = getInput("Do you think you can " + random("go ", "fuck ") + "faster?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Great%");
        setTempVar("av_75", true);
        a075();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("It\'s %Okay% %SubName%");
        setTempVar("av_55", true);
        a055();
        return;
    }
    a055();
}
function a055()
{
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "b055.mp3");
    Fase1();
    return;
    a075();
}
function a075()
{
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "b075.mp3");
    Fase1();
}
function Fase1()
{
    if (randomInteger(1, 100) <= 30)
    {
        NoStrokingYet();
        return;
    }
    CMessage("%StartStroking%");
    setTempVar("av_Stroking", true);
    CMessage("at the same speed.");
    NoStrokingYet();
}
function NoStrokingYet()
{
    CMessage(random("I wan\'t you to moan through every thrust", "yeah, keep going like that, all the way out and ram it back in", "relentlessly fucking your sorry ass", "Imagine me with a strap on and im fucking you", "I want you to moan while I fuck you"));
    if(getVar("av_75", false))
    {
		stopAudio();
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "b075.mp3");
    }
    if(getVar("av_55", false))
    {
		stopAudio();
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "b055.mp3");
    }
    if(!getVar("av_Stroking", false))
    {
        CMessage("%StartStroking%");
    }
    CMessage(random("Good boy", "Brutalize your little ass for me", "Wow it feels so good doesn\'t it?"));
    if (randomInteger(1, 100) <= 50)
    {
        End();
        return;
    }
	stopAudio();
    edge("%Edge%");
    End();
    return;
    CMessage("%stopstroking%", 0);
    End();
}
function End()
{
	stopAudio();
	setEdgeMode();
    delVar("av_55");
    delVar("av_75");
    delVar("av_Stroking");
    CMessage(random("You made me very happy ", "I\'m proud of you ", "We\'re just getting into a groove here ") + "%SubName% %EmoteHappy%");
    CMessage("You can remove everything, clean yourself and sit " + "...you have 1 minute to recover");
    sleep(60);
    EndContact2();
}
function EndContact2()
{
    CMessage("%ThatsEnough%");
    setVar("edgingmode", "Normal");
    addContact(1);
    removeContact(3);
    return;
    
    Gltter03();
}
function Gltter03()
{
    if (getApathyMoodIndex() >= 75)
    {
        CMessage("Since you had being a bad boy %GeneralTime%");
    }
    if (getApathyMoodIndex() >= 75)
    {
        CMessage("I will call %domFriend3Name% to punish you");
        G3Punish();
        return;
    }
    CMessage("So... " + random("%domFriend3Name% made your %Cock% %Ache%", "you miss %domFriend3Name%", "you want %domFriend3Name% to tease you"));
    CMessage("Let\'s call her");
    addContact(4);
    SMessage(random("Hi %DomName%!", "Hello %ShortName%!", "Hi! How are you %DomName%?"), -1, 4);
    CMessage(random("here is she!", "Hi sweet!", "Hi!", "Hi girl!"));
    CMessage(random("%SubName% said he needs you", "%SubName% miissed you", "%SubName% really need your touch right now", "%SubName% want to be tease by you"));
    SMessage(random("How is it going %PetName%?", "Are you ready for %Me%, worthless toy?", "Are you ready for %Me%, worthless %PetName%?", "I will tease and edge the hell out of you %PetName%!"), -1, 4);
    removeContact(1);
    CMessage("I don\'t " + random("mind ", "have a problem with ") + "your " + random("lust", "desires"));
    CMessage("After all here you are " + random("naked in front of me", "totally at my mercy"));
    CMessage("So...let\'s start");
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "3eg32dxx()");
	edged=false;
    CMessage("Let me know if you edge...");
    CMessage("Start Stroking");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    sleep(01);
    CMessage("%Stroke% it baby!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
    sleep(randomInt(15, 17));
	if(!edged){
		CMessage("Are you holding out on me?");
		stopAudio();
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
	} if(!edged){
		CMessage("%Yes%");
		sleep(02);
		sleep(02);
		sleep(02);
	} if(!edged){
		CMessage("Just give it everything you\'ve got right now!");
		stopAudio();
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
		sleep(randomInt(15, 17));
	} if(!edged){
		CMessage("%Stroke% for me and I\'ll make sure today will be a good day for you!");
		stopAudio();
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
	} if(!edged){
		CMessage("%Lol%");
		sleep(02);
		sleep(02);
		sleep(02);
	} if(!edged){
		CMessage("You can go better, I know you can!");
		stopAudio();
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
		sleep(randomInt(15, 17));
	} if(!edged){
		CMessage("Come on, just a bit more for me!");
		stopAudio();
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
		sleep(randomInt(15, 17));
	} if(!edged){
		CMessage("You like to stroke, you want to stroke, you NEED to stroke, so just do it now!");
		stopAudio();
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
		sleep(randomInt(15, 17));
		a3eg32dxx();
	}
	return;
}
function a3eg32dxx()
{
	edged=true;
	stopAudio();
    CMessage("%stopstroking%", 0);
    setVar("edgingmode", "Normal");
    CMessage("Break time");
    sleep(20);
    Contact3Part2();
    return;
    
    G3Punish();
}
function G3Punish()
{
    CMessage("I need you to tie up those %Balls% for me, %SubName%");
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    if(!getVar("AV_BallTied", false))
    {
        CMessage("%TieYourBalls%");
    }
    CMessage("Go get your wooden spoon for me, %PetName%");
    CMessage("Your %Balls% are going to be so sore when I\'m done with you %Grin%");
    if(!getVar("pvKneeling", false))
    {
        CMessage("On your knees");
        setTempVar("pvKneeling", true);
    }
    CMessage("You will smack your %Balls% to my count, %PetName%");
    CMessage("And you will not hold back, this is supposed to hurt");
    CMessage("Get ready");
    sleep(randomInt(5, 15));
    CMessage("Spank your %Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
	stopAudio();
    CMessage("I feel like I should be able to spank your ass");
    CMessage("I can\'t actually bend you over my knee and spank you from here, obviously");
    CMessage("So you\'re going to have to do the spanking yourself");
    CMessage("You\'re going to spank yourself, so get down on your knees");
    //run("Custom" + java.io.File.separator + "Tasks" + java.io.File.separator + "Spanking.js");
	customTask("Spanking");
    CMessage("Sit back down, %PetName%");
    Contact3Part2();
}
function Contact3Part2()
{
    CMessage("Now, " + random("we will have an amazing combo of pain and pleasure", "We will be doing a series alternating between pain and pleasure", "You will have pleasure and pain mixed"));
    CMessage(random("Spank ", "hit ", "Smack ") + random("your ", "these ") + "%Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
	stopAudio();
    edge("%Edge%");
    CMessage(random("Spank ", "hit ", "Smack ") + random("your ", "these ") + "%Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
	stopAudio();
    edge("%Edge%");
    if(getVar("AV_DommeMistress", false))
    {
        CMessage(random("Spank ", "hit ", "Smack ") + random("your ", "these ") + "%Balls%");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
        sleep(20);
		stopAudio();
    }
    if(getVar("AV_DommeMistress", false))
    {
        DoEdges(2, 3, 0);
    }
    CMessage(random("Spank ", "hit ", "Smack ") + random("your ", "these ") + "%Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
	stopAudio();
    edge("%Edge%");
    CMessage(random("Spank ", "hit ", "Smack ") + random("your ", "these ") + "%Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
	stopAudio();
    edge("%Edge%");
    CMessage(random("Spank ", "hit ", "Smack ") + random("your ", "these ") + "%Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
	stopAudio();
    edge("%Edge%");
    if(getVar("AV_DommeMistress", false))
    {
        CMessage(random("Spank ", "hit ", "Smack ") + random("your ", "these ") + "%Balls%");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
        sleep(20);
		stopAudio();
    }
    if(getVar("AV_DommeMistress", false))
    {
        DoEdges(2, 3, 0);
    }
    CMessage(random("Spank ", "hit ", "Smack ") + random("your ", "these ") + "%Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
    sleep(20);
	stopAudio();
    edge("%Edge%");
    CMessage(random("Wow, that was so cool", "What a show babe", "Spectacular"));
    EndContact3();
    return;
    EndContact3();
}
function EndContact3()
{
	stopAudio();
    CMessage("%ThatsEnough%");
    setVar("edgingmode", "Normal");
    addContact(1);
    removeContact(4);
    return;
    
    End2();
}
function End2()
{
    return;
}