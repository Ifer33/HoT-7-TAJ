DMessage("AV_DommeBored: start");
main();
DMessage("AV_DommeBored: end");
function main()
{
    setTempVar("AV_DBoredDONE", true);
    if (getVar("AV_Sessions", 0) == 5)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Sessions", 0) == 15)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Sessions", 0) == 25)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Sessions", 0) == 35)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Sessions", 0) == 45)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Sessions", 0) == 55)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Sessions", 0) == 65)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Sessions", 0) == 75)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Sessions", 0) == 90)
    {
        Part1_1();
        return;
    }
	Part1_1();
    return;
    Part1_1();
}
function Part1_1()
{
    switch(random("Dom1", "Dom2", "Dom3"))
    {
        case "Dom1":
        Dom1();
        return;
        break;
        case "Dom2":
        Dom2();
        return;
        break;
        case "Dom3":
        Dom3();
        return;
        break;
    }
    
    Dom1();
}
function Dom1()
{
    if(getVar("AV_SubKnees", false))
    {
        CMessage("I hope your knees are starting to hurt");
        already_kneeling();
        return;
    }
    CMessage("Why don\'t you " + random("get down on your knees", "go ahead and kneel down", "kneel for me right now"));
    setTempVar("AV_SubKnees", true);
    already_kneeling();
	return;
}
function already_kneeling()
{
    sleep(10);
    CMessage("So there you are, " + random("kneeling before me", "on your knees", "kneeling like a true slave"));
    CMessage(random("Doing nothing except ", "Just ") + "waiting " + random("to receive ", "for me to give you ") + "your next " + random("instruction", "command"));
    CMessage("Your next assignment");
    CMessage("Well, " + random("maybe ", "what if ", "it could be that ") + "there isn\'t " + random("a next assignment ", "one ", "gonna be another command ", "anything to wait for ") + "...");
    CMessage(random("Maybe ", "What if ") + random("all I want is for you to be ", "I just leave you ") + random("on your knees ", "kneeling ") + "before me until your " + random("kneecaps ", "knees ") + random("start to hurt ", "are hurting ") + "like hell");
    CMessage("Put your hands behind your back");
    CMessage("I want your back straight, maybe arched a little bit");
    CMessage("Your knees should be at a perfect 90 degree angle");
    CMessage("Spread your knees a little bit further apart");
    CMessage("I want to see how long you can keep this up");
    //--Command:CustomMode(%pvCantTakeIt%,Goto,cannot take1)
    CMessage("If you stay in this exact position long enough,I will be a happy %DomHonorific%");
	//@CustomMode(%pvDontWantTo%,Goto,cannot take1)
    CMessage("You should say so if you can\'t take it any more, but I won\'t be happy");
    sleep(30);
    //--Command:ApathyLevel(1)
	if(getOldApathyLevel()==1 ){
		CMessage("Alright, that\'s enough");
		enough_kneeling();
		return;
	}
    sleep(30);
    //--Command:ApathyLevel(2)
    if(getOldApathyLevel()==2 ){
		CMessage("Alright, that\'s enough");
		enough_kneeling();
		return;
	}
    sleep(30);
    //--Command:ApathyLevel(3)
    if(getOldApathyLevel()==3 ){
		CMessage("Alright, that\'s enough");
		enough_kneeling();
		return;
	}
    sleep(30);
    //--Command:ApathyLevel(4)
    if(getOldApathyLevel()==4 ){
		CMessage("Alright, that\'s enough");
		enough_kneeling();
		return;
	}
    sleep(30);
    CMessage("Alright, that\'s enough");
    enough_kneeling();
}
function enough_kneeling()
{
    CMessage("You can sit down again, %PetName%");
    delVar("AV_SubKnees");
    //--Command:CustomMode(%pvCantTakeIt%,Normal)
    //--Command:CustomMode(%pvDontWantTo%,Normal)
    return;
    cannot_take1();
}
function cannot_take1()
{
    CMessage("Alright, you can sit down again, %PetName%");
    increaseAnger(3)
    delVar("AV_SubKnees");
    CMessage("But you aren\'t making it easier on yourself by acting this way");
    return;
    
    Dom2();
}
function Dom2()
{
    CMessage("You know, it\'s disappointing how uncreative you can be with that cock of yours.");
    CMessage("Day after day, jerking it off in *exactly* the same way...");
    CMessage("Now...");
    CMessage("I want you to twitch your %Cock% when you hear that sound");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "Suck.mp3");
    CMessage("You love this sound, don\'t you?!");
    CMessage("And I want you to twitch and hold when you hear that one");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "Deep.mp3");
    CMessage("Get used to it. I. Will. Control. Your. Cock!");
    CMessage("twitch");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "Suck.mp3");
    CMessage("Like it when I get more harsh?");
    CMessage("The more dominant i get the more your dick twitches");
    CMessage("twitch");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "Suck.mp3");
    CMessage("See... you are a fucking cockslave");
    CMessage("Twitch for me slaveboy");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "Deep.mp3");
    CMessage("Do you think we can even set a rhythm?");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "5Sucks.mp3");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "3S1D3S.mp3");
    CMessage("Even that is working...god...I will cockfuck your brain so hard slaveboy!");
    CMessage("Oh look at you...you get even more aroused when I talk all bossy to you.");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "3S3D.mp3");
    CMessage("Tingle, %PetName% you are completely helpless to me.");
    CMessage("But I am sure you already recognized that...");
    CMessage("I will use you and your new favourite sound till you explode");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "3Deep.mp3");
    CMessage("Up and down, twitching around");
    CMessage("I could do this all day long");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "Deep.mp3");
	sleep(2);
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "Suck.mp3");
	sleep(2);
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "3S1D3S.mp3");
    CMessage("And your cock twitches like a pendulum");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "3Deep.mp3");
	sleep(2);
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "3S3D.mp3");
    CMessage("It gets intense doesn\'t it?");
    CMessage("I want you throbbing, twisting and shivering with every sound");
	stopAudio();
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "GNMSounds" + java.io.File.separator + "5Sucks.mp3");
    CMessage("That felt sooo good...didnt it? I\'m sure your cock is still responding");
    return;
    
    Dom3();
}
function Dom3()
{
    CMessage("Why don\'t you go ahead and stand up");
    sleep(10);
    CMessage("So there you are, " + random("standing before me", "all exposed", "presenting yourself like a true slave"));
    CMessage(random("Doing nothing but ", "Just ") + "waiting " + random("to receive ", "for me to give you ") + "your next command");
    CMessage("Your next assignment");
    CMessage("Well, " + random("maybe ", "what if ", "it could be that ") + "there isn\'t " + random("a next assignment ", "one ", "gonna be another command ", "anything to wait for ") + "...");
    CMessage(random("Maybe ", "What if ") + random("all I want is for you to be ", "I just leave you ") + random("on your knees ", "kneeling ") + "before me until your legs " + random("start ", "begin ") + "to hurt");
    CMessage("%PetName%...");
    CMessage("Put your hands behind your back");
    CMessage("I want your back straight, maybe arched a little bit");
    CMessage("Stick your ass out");
    CMessage("Spread your legs a little bit further apart");
    CMessage("Now lift your heels of the floor, I want you on your tippy toes");
    CMessage("I want to see how long you can keep this up");
    CMessage("Let\'s be clear, I\'m not happy with your performance so far, %PetName%");
    CMessage("So here\'s your chance to redeem yourself");
    //--Command:CustomMode(%pvCantTakeIt%,Goto,cannot take)
    CMessage("If you stay in this exact position long enough,I will be a happy %DomHonorific% again");
	//@CustomMode(%pvDontWantTo%,Goto,cannot take)
    CMessage("You should say so if you can\'t take it any more, but I won\'t be happy");
    sleep(30);
    //--Command:ApathyLevel(1)
    if(getOldApathyLevel()==1 ){
		CMessage("Alright, that\'s enough");
		enough_standing();
		return;
	}
    sleep(30);
    //--Command:ApathyLevel(2)
    if(getOldApathyLevel()==2 ){
		CMessage("Alright, that\'s enough");
		enough_standing();
		return;
	}
    sleep(30);
    //--Command:ApathyLevel(3)
    if(getOldApathyLevel()==3 ){
		CMessage("Alright, that\'s enough");
		enough_standing();
		return;
	}
    sleep(30);
    //--Command:ApathyLevel(4)
    if(getOldApathyLevel()==4 ){
		CMessage("Alright, that\'s enough");
		enough_standing();
		return;
	}
    sleep(30);
    CMessage("Alright, that\'s enough");
    enough_standing();
	return;
}
function enough_standing()
{
    CMessage("You can sit down again, %PetName%");
    //--Command:CustomMode(%pvCantTakeIt%,Normal)
    //--Command:CustomMode(%pvDontWantTo%,Normal)
    return;
    cannot_take();
}
function cannot_take()
{
    CMessage("Alright, you can sit down again, %PetName%");
    increaseAnger(3)
    CMessage("But you aren\'t making it easier on yourself by acting this way");
    return;
}