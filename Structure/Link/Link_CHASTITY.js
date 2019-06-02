DMessage("Link_CHASTITY: Start");
main();
DMessage("Link_CHASTITY: End");
function main()
{
    if(getVar("AV_SubKnees", false))
    {
        CMessage("%SitDown%");
        delVar("AV_SubKnees");
        sleep(20);
    }
    if(getVar("AV_Pins", false))
    {
        CMessage("You can remove all clothespins");
        delVar("AV_Pins");
        sleep(20);
    }
    if(getVar("av_GagOn", false))
    {
        CMessage("%BallGagOff%");
        delVar("av_GagOn");
        sleep(20);
    }
    if(getVar("AV_BallTied", false))
    {
        CMessage("You " + random("can ", "may ") + random("untie your %Balls% ", "remove the shoelace from your %Balls% ") + random("now", "%PetName%", "%SubName%"));
        delVar("AV_BallTied");
        sleep(10);
    }
    if(getVar("AV_OneRoundIn", false))
    {
        StartNormal();
        return;
    }
    setTempVar("AV_OneRoundIn", true);
    RandChastLink();
    return;
    StartNormal();
}
function StartNormal()
{
    CMessage("I know you are desperate to unlock that %Cock%");
    if (getMood() >= 70)
    {
        if (randomInteger(1, 100) <= 33)
        {
            bad_mood();
            return;
        }
        not_going_to_unlock();
        return;
    }
    if (getMood() > 30 && getMood() < 70)
    {
        CMessage(random("I love having the power to lock or unlock it ", "The decision is still mine to take though ", "Let me think about it ", "Such a difficult decision ") + "... %Smile%");
        end_cycle();
        return;
    }
    CMessage("So I\'m going to be " + random("merciful ", "nice to you ", "kind and let you do it ") + "%Smile%");
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_ChastityOff.js");
    CMessage("We should make that %Cock% nice and hard right away");
    //CMessage("%StartStroking%");
    Stroking();
    return;
    not_going_to_unlock();
}
function not_going_to_unlock()
{
    CMessage("But I\'m not going to let you just yet");
    CMessage("Be a good boy for me and maybe I\'ll " + random("reconsider", "change my mind"));
    //--Command:StartTaunts
    return;
    end_cycle();
}
function end_cycle()
{
    setAFK(true);
    //--Command:BadMood(bad mood)
	if (getMood() >= 70)
    {
		bad_mood();
		return;
	}
	if (getMood() <= 30)
    {
		good_mood();
		return;
	}
    //--Command:GoodMood(good mood)
    //--Command:ApathyLevel(1)
	if(getOldApathyLevel()==1 ){
		a90chance();
		return;
	} else if(getOldApathyLevel()==2 ){
		//--Command:ApathyLevel(2)
		a70chance();
		return;
	} else if(getOldApathyLevel()==3 ){
		//--Command:ApathyLevel(3)
		a60chance();
		return;
	} else if(getOldApathyLevel()==4 ){
		//--Command:ApathyLevel(4)
		a40chance();
		return;
	} else if(getOldApathyLevel()==5 ){
		//--Command:ApathyLevel(5)
		a20chance();
		return;
	else{
		a60chance();
		return;
	}
	return;
    bad_mood();
}
function bad_mood()
{
	if(getOldApathyLevel()==1 ){
		a40chance();
		return;
	} else if(getOldApathyLevel()==2 ){
		//--Command:ApathyLevel(2)
		a30chance();
		return;
	} else if(getOldApathyLevel()==3 ){
		//--Command:ApathyLevel(3)
		a20chance();
		return;
	} else if(getOldApathyLevel()==4 ){
		//--Command:ApathyLevel(4)
		a10chance();
		return;
	} else if(getOldApathyLevel()==5 ){
		//--Command:ApathyLevel(5)
		a01chance();
		return;
	else{
		a20chance();
		return;
	}
	return;
    good_mood();
}
function good_mood()
{
	if(getOldApathyLevel()==1 ){
		a99chance();
		return;
	} else if(getOldApathyLevel()==2 ){
		//--Command:ApathyLevel(2)
		a90chance();
		return;
	} else if(getOldApathyLevel()==3 ){
		//--Command:ApathyLevel(3)
		a80chance();
		return;
	} else if(getOldApathyLevel()==4 ){
		//--Command:ApathyLevel(4)
		a70chance();
		return;
	} else if(getOldApathyLevel()==5 ){
		//--Command:ApathyLevel(5)
		a60chance();
		return;
	else{
		a80chance();
		return;
	}
	return;
    a01chance();
}
function a01chance()
{
    if (randomInteger(1, 100) <= 01)
    {
        yes();
        return;
    }
    no();
    return;
    a10chance();
}
function a10chance()
{
    if (randomInteger(1, 100) <= 10)
    {
        yes();
        return;
    }
    no();
    return;
    a20chance();
}
function a20chance()
{
    if (randomInteger(1, 100) <= 20)
    {
        yes();
        return;
    }
    no();
    return;
    a30chance();
}
function a30chance()
{
    if (randomInteger(1, 100) <= 30)
    {
        yes();
        return;
    }
    no();
    return;
    a40chance();
}
function a40chance()
{
    if (randomInteger(1, 100) <= 40)
    {
        yes();
        return;
    }
    no();
    return;
    a50chance();
}
function a50chance()
{
    if (randomInteger(1, 100) <= 50)
    {
        yes();
        return;
    }
    no();
    return;
    a60chance();
}
function a60chance()
{
    if (randomInteger(1, 100) <= 60)
    {
        yes();
        return;
    }
    no();
    return;
    a70chance();
}
function a70chance()
{
    if (randomInteger(1, 100) <= 70)
    {
        yes();
        return;
    }
    no();
    return;
    a80chance();
}
function a80chance()
{
    if (randomInteger(1, 100) <= 80)
    {
        yes();
        return;
    }
    no();
    return;
    a90chance();
}
function a90chance()
{
    if (randomInteger(1, 100) <= 90)
    {
        yes();
        return;
    }
    no();
    return;
    a99chance();
}
function a99chance()
{
    if (randomInteger(1, 100) <= 99)
    {
        yes();
        return;
    }
    no();
    return;
    yes();
}
function yes()
{
    CMessage(random("Alright ", "Okay ", "I suppose ", "I guess ") + "it\'s " + random("about time for ", "time for ") + "you to %JerkOff% again, %Name%");
    setAFK(false);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_ChastityOff.js");
    CMessage("Let\'s make that %Cock% nice and hard again");
    //CMessage("%StartStroking%");
    Stroking();
    return;
    no();
}
function no()
{
    setAFK(false);
    continue_cycle();
    return;
    return;
    continue_cycle();
}
function continue_cycle()
{
    run("Custom" + java.io.File.separator + "pvLinkChastityYes" + java.io.File.separator + "*.js");
    //--Command:StartTaunts
    return;
    
    RandChastLink();
}
function RandChastLink()
{
    if(getVar("AV_LinkChastity01_NotFirstTime", false))
    {
        AV_LinkChastity01_NotFirstTime();
        return;
    }
    setVar("AV_LinkChastity01", 0);
    setVar("AV_LinkChastity01_NotFirstTime", true);
    AV_LinkChastity01_NotFirstTime();
	return;
}
function AV_LinkChastity01_NotFirstTime()
{
    if (getVar("AV_LinkChastity01", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_LinkChastity01", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_LinkChastity01", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_LinkChastity01", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_LinkChastity01", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_LinkChastity01", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_LinkChastity01", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_LinkChastity01", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_LinkChastity01", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_LinkChastity01", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_LinkChastity01", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_LinkChastity01", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_LinkChastity01", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_LinkChastity01", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_LinkChastity01", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_LinkChastity01", 0) == 1101)
    {
        Part1_16();
        return;
    }
    Mod1();
}
function Mod1()
{
    setVar("AV_LinkChastity01", getVar("AV_LinkChastity01", 0) + 1);
    Link01();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_LinkChastity01", getVar("AV_LinkChastity01", 0) + 10);
    Link02();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_LinkChastity01", getVar("AV_LinkChastity01", 0) + 100);
    Link03();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_LinkChastity01", getVar("AV_LinkChastity01", 0) + 1000);
    Link04();
    return;
    Part1_1();
}
function Part1_1()
{
    switch(random("Mod1", "Mod2", "Mod3", "Mod4"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_2();
}
function Part1_2()
{
    switch(random("Mod2", "Mod3", "Mod4"))
    {
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_3();
}
function Part1_3()
{
    switch(random("Mod1", "Mod3", "Mod4"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_4();
}
function Part1_4()
{
    switch(random("Mod1", "Mod2", "Mod4"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_5();
}
function Part1_5()
{
    switch(random("Mod1", "Mod2", "Mod3"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
    }
    Part1_6();
}
function Part1_6()
{
    switch(random("Mod3", "Mod4"))
    {
        case "Mod3":
        Mod3();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_7();
}
function Part1_7()
{
    switch(random("Mod2", "Mod4"))
    {
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_8();
}
function Part1_8()
{
    Mod4();
    return;
    Part1_9();
}
function Part1_9()
{
    switch(random("Mod1", "Mod4"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_10();
}
function Part1_10()
{
    switch(random("Mod2", "Mod3"))
    {
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
    }
    Part1_11();
}
function Part1_11()
{
    Mod3();
    return;
    Part1_12();
}
function Part1_12()
{
    Fim();
    return;
    Part1_13();
}
function Part1_13()
{
    switch(random("Mod1", "Mod3"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
    }
    Part1_14();
}
function Part1_14()
{
    Mod1();
    return;
    Part1_15();
}
function Part1_15()
{
    switch(random("Mod1", "Mod2"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod2":
        Mod2();
        return;
        break;
    }
    Part1_16();
}
function Part1_16()
{
    Mod2();
    return;
    Fim();
}
function Fim()
{
    setVar("AV_LinkChastity01", 0);
    CMessage("Normally I\'d be getting ready to let you start stroking for me");
    CMessage("But you can\'t can you? Not with that cage in the way");
    CMessage("Guess I\'ll have to find other ways to torment you for now %EmoteHappy%");
    //--Command:StartTaunts
    return;
    return;
    
    Link01();
}
function Link01()
{
    CMessage("Each time I make you twitch into that %ChastityCage%");
    CMessage("Each time it hurts because you are becoming hard inside id");
    CMessage("Each time you beg me to take it off");
    CMessage("My power over you is getting stronger");
    CMessage("Until one day");
    CMessage("A fateful day where nothing will matters anymore");
    CMessage("Just me");
    CMessage("Just my pleasure");
    CMessage("So let\'s make my power stronger by teasing you some more %Grin%");
    //--Command:StartTaunts
    return;
    
    Link02();
}
function Link02()
{
    CMessage("You\'d think I\'d get bored since you are locked up");
    CMessage("But you couldn\'t be more wrong");
    CMessage("I might even start to think that torturing you in that %ChastityCage% is even more fun than when you are free %Grin%");
    CMessage("But why I am wasting time telling you this when I could be playing with you %lol%");
    //--Command:StartTaunts
    return;
    
    Link03();
}
function Link03()
{
    CMessage("I am so happy to have locked you up");
    CMessage("You can\'t imagine how %Horny% it makes me %Grin%");
    CMessage("Sometimes I think of all the things I could do to you");
    CMessage("To make sure you are mine forever");
    CMessage("I wonder if you would flush the keys in the toilets if I asked you to do it %lol%");
    CMessage("Maybe I\'ll try that one day %Grin%");
    CMessage("But for now I\'d rather just tease you");
    CMessage("After all you are so %hot% when you still think I might free you soon %Emote%");
    //--Command:StartTaunts
    return;
    
    Link04();
}
function Link04()
{
    if(getVar("AV_SubKnees", false))
    {
        AV_SubKnees();
        return;
    }
    CMessage("You know what I find %Hot%?");
    CMessage("Seeing you kneeling for me! %Grin%");
    CMessage("So get on your knees before I start teasing you again");
    setTempVar("AV_SubKnees", true);
    //--Command:StartTaunts
    return;
    AV_SubKnees();
}
function AV_SubKnees()
{
    let answer0 = getInput("Are you still kneeling for me %PetName%?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("are you kneeling yes or no?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Good!");
        kneeling();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("I don\'t remember telling you to get up...");
        punishment();
        return;
    }
	return;
    kneeling();
}
function kneeling()
{
    CMessage("I like it when you are an obedient %PetName%");
    CMessage("Now should I let you get up or not? I wonder...");
    if (randomInteger(1, 100) <= 66)
    {
        get_up();
        return;
    }
    CMessage("%No% you are too cute on your knees %Grin%");
    CMessage("I\'d rather have you stay there %lol%");
    CMessage("Let\'s start the teasing again");
    //--Command:StartTaunts
    return;
    punishment();
}
function punishment()
{
    CMessage("I\'ll have to punish you!");
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_PunishRND.js");
    CMessage("Next time I might make you kneel on them until the end of our session %Grin%");
    CMessage("And now you better stay on your knees until I say otherwise!");
    CMessage("Already let\'s tease this caged cock a little more");
    //--Command:StartTaunts
    return;
    get_up();
}
function get_up()
{
    CMessage("Alright, I\'ll let you get back on your chair for now");
    delVar("AV_SubKnees");
    CMessage("But I might change my mind so keep this pillow close by %Grin%");
    CMessage("And let\'s tease this caged cock a little more");
    //--Command:StartTaunts
    return;
}