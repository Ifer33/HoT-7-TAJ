DMessage("AV_ModGeneral23: start");
edged=false;
date=null;
main();
DMessage("AV_ModGeneral23: end");
function main()
{
	if(getVar("AV_ModGeneral23_AV_MasuDone",false) ){
		delVar("AV_ModGeneral23_AV_MasuDone");
		AV_MasuDone();
		return;
	}
	if(getVar("mod23_1",false)){
		Modulo1();
		return;
	}
	if(getVar("mod23_12",false)){
		a34gerrez();
		return;
	}
	if(getVar("mod23_13",false)){
		a34gerrez2();
		return;
	}
    if(getVar("AV_ModGeneral23_NotFirstTime", false))
    {
        AV_ModGeneral23_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral23", 0);
    setVar("AV_ModGeneral23_NotFirstTime", true);
    AV_ModGeneral23_NotFirstTime();
}
function AV_ModGeneral23_NotFirstTime()
{
    if (getVar("AV_ModGeneral23", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral23", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral23", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral23", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral23", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral23", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral23", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral23", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral23", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral23", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral23", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral23", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral23", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral23", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral23", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral23", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral23", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral23", getVar("AV_ModGeneral23", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral23", getVar("AV_ModGeneral23", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral23", getVar("AV_ModGeneral23", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral23", getVar("AV_ModGeneral23", 0) + 1000);
    Modulo4();
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
    setVar("AV_ModGeneral23", 0);
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    Modulo1();
}
function Modulo1()
{
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
	if(!getVar("mod23_1",false)){
		CMessage("That\'s how I like it.");
		CMessage("Admit, that you like to be told, what to do.");
		CMessage("There\'s no need to be shy. It\'s all natural");
		CMessage(random("You don\'t need to think about anything else anymore", "Forget about the world around you"));
		CMessage(random("Just listen to me and do what I say", "All what matters is here and now"));
		CMessage("Now...");
		CMessage("my slave...");
		CMessage("I am going to train you.");
		CMessage("And so I decided to train you being my edge-slave.");
		CMessage("Doesn\'t that sound great?");
		CMessage("You are going to get the privilege to be my little, mindless edge-slave.");
		CMessage("I know you like that.");
		//CMessage("%StartStroking%");
		setStrokingNoTaunt();
		CMessage("Come on, stroke that cock faster. I want you to edge soon.");
		CMessage("Are you already near?");
		CMessage("You should be.");
		edge("Get to the edge for me!");
		//edge()
		CMessage("Wasn\'t that nice?");
		CMessage("Calm down a bit. We have a lot more to do today.");
		CMessage("You know, I could let you cum right now.");
		CMessage("But I won\'t..");
		CMessage("You want to know why?");
		CMessage("Well, the most obvious reason why not is, that I don\'t want you to cum now.");
		CMessage("This alone should be reason enough.");
		CMessage("The only thing you want is to please your mistress.");
		CMessage("And when your mistress is happy, she\'ll make you happy.");
		CMessage("A man can edge the entire day long.");
		CMessage("But he can only cum once in a while..");
		CMessage("You see, why I don\'t want you to cum?");
		edge("Edge and think about it.");
		CMessage("I\'m not a cruel mistress. I just want you to feel good.");
		CMessage("I want to give you what you desire...");
		CMessage("And you desire to edge!");
		CMessage("You know, I am right..");
		CMessage("And you can\'t negate it..");
		edge("Edge again!");
		CMessage("You need me.");
		CMessage("You need your mistress to let you edge.");
		CMessage("And your mistress is willing to let you edge over and over again.");
		CMessage("\'Cause that\'s the only thing you want.");
		CMessage("I want you to get on all fours.");
		CMessage("This is going to be your new edging-position.");
		CMessage("Every time you edge for me in this trainning, I want you in exactly this position.");
		CMessage("Got that?");
		CMessage("You look so cute down there.");
		CMessage("Just like a little puppy, waiting for its mistress to command it.");
		CMessage("I just can\'t deny you any longer..");
		edge("Come on my little puppy, edge for your mistress.");
		CMessage("Now listen carfully.");
		CMessage("I\'ll ask you something and I want you to answer honestly.");
		edge("But first give me another edge!");
		CMessage("Do you want to cum or do you want to be a good boy and keep edging for your mistress?");
		edge("Why don\'t you edge, while you think about it?");
		let answer0 = getInput("Now tell me, do you still want to cum?");
		while (!(answer0.isLike("no") || answer0.isLike("yes")))
		{
			answer0 = getInput("%YesorNo% %SubName%?");
		}
		if (answer0.isLike("no"))
		{
			CMessage("That\'s how I like my slave.");
			increaseAnger(-3)
		}
		else if (answer0.isLike("yes"))
		{
			CMessage("Too bad slave, will not happen");
			increaseAnger(3)
		}
		CMessage("And I will let you edge even more..");
		edge("Come on. Get to the edge.");
		CMessage("You see, I fulfill your desires.");
		CMessage("All you have to do is, to obey me");
		CMessage("Say, that " + random("you are all mine", "your mistress is the only one who can give you what you need", "you are my edge-slave"));
		CMessage("Shout it out!");
		CMessage("And now beg me, to let you edge.");
		CMessage("%GoodBoy%");
		CMessage("I allow you.");
		edge("Edge again!");
		CMessage("That\'s enough for now my edge-slave.");
		CMessage("%SitDown%");
		CMessage("Your training is not over yet. There\'s still a lot to do.");
		CMessage("We will continue your training later.");
		CMessage("%domFriend1Name% will take care of you till there");
		addContact(2);
		CMessage("You can masturbate for her, but you are not allowed to edge.");
		//--Command:SetLink(AV_Glitter1EdgeTrain)
		setTempVar("linktorun", "Custom" + java.io.File.separator + "Link" + java.io.File.separator + "AV_Glitter1EdgeTrain.js");
		CMessage("Only I can give you permission to edge, got that?");
		removeContact(1);
		//--Command:BookmarkModule
		setTempVar("moduletorun", "Modules" + java.io.File.separator + "AV_ModGeneral23.js");
		setTempVar("mod23_1",true);
		setTempVar("dontDelMod",true);
		return;
	}
	delVar("mod23_1");
    CMessage("Go back to %DomName%. She is waiting to fulfill your desires.");
    addContact(1);
    SMessage("See you next time.", -1, 2);
    removeContact(2);
    CMessage("Hello back my slave.");
    CMessage("I hope you are well prepared now.");
    CMessage("I don\'t want you to jerk for me...");
    CMessage("No, you have jerked enough for today.");
    CMessage("I want you to edge.");
    CMessage("Of course you have to stroke your cock to get to the edge.");
    CMessage("I understand that.");
    CMessage("But from now on, every time you are here, you can only stroke to get to the edge for me.");
    CMessage("I don\'t want you to waste my time with useless stroking..");
    CMessage("Alright my little slave. Take out your cock.");
    CMessage("It must be waiting for these words so impatiently.");
    CMessage("You can\'t wait until I say the magic word, don\'t you?");
    CMessage("You want me to demand you to edge..");
    CMessage("Get on your edging position now!");
    sleep(10);
    CMessage("Hm...");
    CMessage("You know, I\'m not a cruel mistress..");
    edge("Go on. Edge for your mistress.");
    CMessage("That\'s what you like.");
    CMessage("And that\'s all you need.");
    CMessage("And I fulfill your desire.");
    edge("Edge again.");
    CMessage("Poor little slave..");
    CMessage("You would edge all day and all night long for your mistress, if you could.");
    CMessage("But I can\'t take care of you all the time.");
    CMessage("I have to fulfill my needs, too, you know?");
    edge("Get to the edge, slave.");
    CMessage(random("You should feel blessed, that I take at least some time for you", "You should be grateful every single time I let you edge"));
    CMessage("Are you grateful?");
    CMessage("Tell me how grateful you are.");
    CMessage("That\'s how it has to be.");
    edge("So edge!");
    CMessage("That feels wonderful, no?!");
    DoEdges(3, 3, 0);
    CMessage("Want some more?");
    CMessage("Oh, of course you want more.");
    CMessage("You are my little addicted edge-slave.");
    edge("Edge!");
    CMessage("Say, " + random("you want to edge more for your mistress", "that all you want is obeying your mistress"));
    CMessage(random("You don\'t want to cum", "You don\'t want to orgasm"));
    CMessage("All you want is edging.");
    edge("Do it!");
    CMessage("You don\'t feel the need to cum.");
    CMessage("Your mistress knows, what you need.");
    CMessage("Yes, and your mistress won\'t let you cum.");
    CMessage("No, she will let you edge..");
    CMessage("Over and over again.");
    CMessage("You want it!");
    CMessage("You need it!");
    edge("Edge, slave.");
    CMessage("I also know, that I have to let you cum sometimes.");
    CMessage("It\'s just natural that you orgasm every once in a while.");
    CMessage("I will let you cum.");
    CMessage("But not now.");
    edge("Give me another edge and think about how good it\'ll feel to cum for me.");
    CMessage("Deep inside you know, that you\'d rather keep edging for your mistress.");
    CMessage("You can keep edging for me.");
    CMessage("Just like you need to.");
    edge("Edge!");
    CMessage("We have to do much more today.");
    edge("Go on, edge again.");
    edge("And again!");
    CMessage("That\'s what you like.");
    edge("Do it again, my edge-slave.");
    CMessage("That\'s all you need.");
    edge("Give your mistress another edge, before we continue.");
    CMessage("%GoodBoy%");
    CMessage("Relax my slave.");
    CMessage("I wonder how many edges you can stand..");
    CMessage("I know.");
    CMessage("You can stand as much as I demand!");
    CMessage("You don\'t want to disappoint me.");
    CMessage("No, you\'re a good boy.");
    CMessage("And good boys do what they are told to do.");
    edge("Edge again.");
    CMessage("You want to be a good boy, don\'t you?");
    CMessage("And you want to edge.");
    edge("Do it!");
    CMessage("Just like that.");
    edge("Again.");
    CMessage("You can\'t get enough.");
    edge("Give me another edge.");
    CMessage("Your cock will get used to that feeling.");
    CMessage("You will get used to that ache.");
    CMessage("That ache you desperately crave for.");
    edge("Edge my slave.");
    CMessage("Mmmm, you love it.");
    CMessage("You love being denied.");
    CMessage("You love to edge all day long.");
    CMessage("Over and over again.");
    edge("Give me that edge.");
    CMessage("No orgasm.");
	setRapidText(true);
    CMessage("Just pure,");
    CMessage("intense");
    CMessage("Edging. Do it!");
	setRapidText(false);
	edge();
    edge("Again.");
    CMessage("Don\'t let me wait..");
    edge("Edge again.");
    CMessage("Do you have enough?");
    let answer1 = getInput("Or do you want more?", 10);
    if (answer1.isTimeout())
    {
        a5gre34es();
        return;
    }
    while (!(answer1.isLike("more") || answer1.isLike("enough")))
    {
        answer1 = getInput("%YesorNo%");
    }
    if (answer1.isLike("more"))
    {
        CMessage("I can see in your eyes, that you need much more.");
    }
    else if (answer1.isLike("enough"))
    {
        CMessage("Liar...I can see in your eyes, that you need much more.");
    }
    a5gre34es();
}
function a5gre34es()
{
    CMessage("Am I right?");
    CMessage("Oh, of course I am..");
    edge("Give me another edge my puppy.");
    CMessage("Now let\'s see, how long you can last without edging..");
    CMessage("I could let you edge, but you have to ask for it..");
    CMessage("You can stand longer than I thought.");
    CMessage("Oh, my puppy wants to edge?");
    CMessage("How much do you want to edge for your mistress?");
    CMessage("Come on, beg me to let you edge.");
    CMessage("Show me, how desperate you are.");
    CMessage("So sweet..");
    edge("I allow you to edge. Do it.");
    CMessage("It\'s no shame to have the need to edge.");
    CMessage("That\'s why you are here.");
    CMessage("I want you to edge one last time for now.");
    CMessage("One last intense edge..");
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "a34gerrez()");
	edged=false;
    CMessage("Get on the edge and stay there.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
    Loop23();
	return;
}
function Loop23()
{
	if(!edged){
		CMessage("Come on...");
	}if(!edged){
		sleep(10);
	}if(!edged){
		CMessage("Let me see that edge...");
		Loop23();
	}
	//a34gerrez();
    return;
}
function a34gerrez()
{
	if(!getVar("mod23_12",false)){
		edged=true;
		CMessage("Oh yes. Stay right on the brink of the edge.");
		CMessage("Suffer for your mistress.");
		CMessage("Ache for your mistress.");
		CMessage("Don't stop my slave.");
		setVar("edgingmode", "Normal");
		CMessage("Relish that feeling..");
		CMessage("Hands off..");
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
		CMessage("You did very well my slave.");
		CMessage("%SitDown%");
		CMessage("%domFriend2Name% will take care of you till there");
		addContact(3);
		CMessage("You can masturbate for her, but you are not allowed to edge.");
		//--Command:SetLink(AV_Glitter2EdgeTrain)
		CMessage("Only I can give you permission to edge, got that?");
		removeContact(1);
		//--Command:BookmarkModule
		setTempVar("linktorun", "Custom" + java.io.File.separator + "Link" + java.io.File.separator + "AV_Glitter2EdgeTrain.js");
		setTempVar("moduletorun", "Modules" + java.io.File.separator + "AV_ModGeneral23.js");
		setTempVar("mod23_12",true);
		setTempVar("dontDelMod",true);
		return;
	}
	delVar("mod23_12");
    CMessage("Go back to %DomName%.");
    addContact(1);
    SMessage("I think you are well prepared now.", -1, 3);
    removeContact(3);
    CMessage("I\'m sure you\'re already aching.");
    CMessage("Wishfully waiting to finally edge for your mistress.");
    CMessage("I know you want to. You are my little puppy.");
    CMessage("And what does well-behaved little puppies do?");
    CMessage("I know you want to. You are my little puppy.");
    CMessage("And what does well-behaved little puppies do?");
    CMessage("Oh yes. They get on all fours.");
    sleep(10);
    CMessage("%GoodBoy%");
    edge("Stroke your cock to the edge.");
    CMessage("I know, that the first edge may take some time. Enjoy it.");
    CMessage("The next edges won\'t take so long.");
    edge("Edge again.");
    CMessage("Wanna do it right again?");
    edge("Do it my addicted little edge-slave.");
    CMessage("Now I really want to prove your stamina.");
    CMessage("You\'re going to edge quite a lot and I will also let you hold it.");
    CMessage("But first we have to get this cock well prepared.");
    edge("Edge again.");
    CMessage("That\'s it.");
    edge("Another one.");
    CMessage("%GoodBoy%. Relax a while.");
    CMessage("Relax and enjoy the moment.");
    CMessage("Are you ready to hold an edge?");
    CMessage("I think it\'s time.");
    CMessage("At first I want you to hold it for 10 seconds.");
    holdEdgeWT("So get on the edge.",10);
    //--Command:EdgeHold(10)
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
    CMessage("You\'re doing good.");
    CMessage("Next time it\'ll be 15 seconds.");
    CMessage("Get ready my edge-slave.");
    holdEdgeWT("Now get back on the edge.",15);
    CMessage("This feels great, doesn\'t it?");
    CMessage("We will proceed until we reach one full minute.");
    CMessage("Prepare to hold this one 30 seconds.");
    holdEdgeWT("Back on the edge.",30);
    CMessage("Very well, my slave. Take a long break this time.");
    CMessage("Just kidding.");
    edge("Give me an edge in your break!");
    CMessage("Sorry, but sometimes I\'m a bit mean\" *giggle*");
    CMessage("Alright, back to our workout.");
    CMessage("Next edge will be 40 seconds.");
    CMessage("Get ready.");
    holdEdgeWT("On the edge!",40);
    CMessage("Good boy. We are almost at the finish line.");
    CMessage("Keep that effort.");
    CMessage("50 seconds now.");
    holdEdgeWT("Get on the edge!",50);
    CMessage("Relax");
    CMessage("One more time. And this time it\'ll be a full minute.");
    CMessage("Are you ready?");
    CMessage("Are you ready to make your mistress proud of you?");
    CMessage("Come on.");
    holdEdgeWT("Get on the edge.",60);
    CMessage("You made it to a full minute.");
    CMessage("I\'m really proud of you.");
    CMessage("I bet, I can bring you to hold an edge up to an hour.");
    CMessage("But first you can take a short rest.");
    sleep(25);
    CMessage("Now it\'s time to test your limits.");
    CMessage("You made a full minute, that\'s really impressive.");
    CMessage("But now you\'ll hold the edge up to 2 minutes.");
    CMessage("Don\'t worry, I wouldn\'t let you do it, when I didn\'t know you could.");
    CMessage("First I want some edges from you.");
    CMessage("Just to warm you up again.");
    edge("Do it.");
    CMessage("How do you feel, thinking about holding an edge 2 minutes long?");
    CMessage("Worried?");
    CMessage("Or can\'t you wait to do it for your mistress?");
    edge("Edge again for your mistress.");
    CMessage("%GoodBoy%");
    CMessage("We where at one minute.");
    CMessage("So you\'re going to hold the next one 1 minute and 15 seconds..");
    holdEdgeWT("Get on the edge my puppy.",75);
    CMessage("Say that you love to suffer for your Mistress.");
    CMessage("Your mistress knows that.");
    CMessage("And your mistress lets you suffer.");
    CMessage("That was 1 minute and 15 seconds.");
    CMessage("Take a short breath.");
    CMessage("Next one will be one and a half minute.");
    CMessage("Alright");
    holdEdgeWT("Get on the edge slave.",90);
    CMessage("Very well.");
    CMessage("Take your time to rest, my puppy.");
    CMessage("You know, what\'s coming next?");
    CMessage("Oh yes. The next time you\'ll hold it two full minutes.");
    CMessage("You\'d better be ready...");
    holdEdgeWT("Get on the edge one last time slave.",120);
    CMessage("You have done two minutes!");
    CMessage("What a good boy you are.");
    CMessage("I appreciate that.");
    CMessage("I\'m really proud of you.");
    CMessage("%SitDown%");
    CMessage("%domFriend3Name% will take care of you till there");
    addContact(4);
    CMessage("You can masturbate for her, but you are not allowed to edge.");
    //--Command:SetLink(AV_Glitter3EdgeTrain)
    CMessage("Only I can give you permission to edge, got that?");
    removeContact(1);
    //--Command:BookmarkModule
	setTempVar("linktorun", "Custom" + java.io.File.separator + "Link" + java.io.File.separator + "AV_Glitter3EdgeTrain.js");
	setTempVar("moduletorun", "Modules" + java.io.File.separator + "AV_ModGeneral23.js");
	setTempVar("mod23_13",true);
	setTempVar("dontDelMod",true);
    return;
}
function a34gerrez2()
{
	delVar("mod23_13");
    CMessage("Go back to %DomName%.");
    addContact(1);
    SMessage("See you next time.", -1, 4);
    removeContact(4);
    CMessage("It\'s not going to be easy now.");
    //--Command:WorshipOff
    CMessage("You will edge much more than you have before.");
    CMessage("You\'re looking forward?");
    CMessage("Are you glad, you can prove your behavior to your Mistress?");
    CMessage("Yes you are.");
    CMessage("Get down on all fours my puppy.");
    sleep(10);
    CMessage("I will let you edge very frequently now.");
    CMessage("You\'ll only have quite a moment to relax between them.");
    CMessage("But don\'t worry. I will prepare you good enough until then.");
    CMessage("Stroke your cock now.");
    edge("Stroke it to the edge.");
    CMessage("Relax my edge-slave.");
    CMessage("Think about how much you\'re going to edge for me later.");
    CMessage("It\'s going to be so frustrating.");
    CMessage("So intense..");
    CMessage("You will love it.");
    CMessage("Don\'t you think so, too?");
    edge("Edge and think how many edges are following.");
    CMessage("10? 20?..");
    CMessage("Maybe 50?");
    CMessage("Maybe even more?");
    edge("Edge again.");
    CMessage("I\'ll give you a little pretaste.");
    DoEdges(3, 3, 0);
    CMessage("Don\'t overdo yet.");
    CMessage("Tell me, how desperate are you to edge for your mistress?");
    CMessage("What would you do to get back to that edge?");
    CMessage("That intense");
	setRapidText(true);
    CMessage("fulfilling");
    CMessage("edge");
	setRapidText(false);
    CMessage("You would do anything, don\'t you?");
    CMessage("Anything to please your mistress.");
    edge("Come on. Edge again.");
    CMessage("Look, how trained you are already.");
    CMessage("You nearly edge as soon as I say so.");
    CMessage("You\'re such a good boy.");
    CMessage("It\'s time.");
    CMessage("Time to get serious.");
    CMessage("I want you to edge as fast as possible, when I say it.");
    CMessage("Get ready.");
    DoEdges(3, 3, 0);
    CMessage("You\'re doing good so far.");
    edge("Edge again.");
    CMessage("Such a good boy.");
    edge("Do it again.");
    CMessage("One last time before a short break.");
    edge("Do it again.");
    CMessage("How does my little edge-slave feel?");
    CMessage("Already exhausted?");
    CMessage("No, no. My puppy wants more.");
    CMessage("Beg me to let you edge again.");
    CMessage("That\'s how I like my puppy.");
    CMessage("Get ready for the next round.");
    edge("Now edge!");
    CMessage("You know the procedure.");
    DoEdges(4, 4, 0);
    CMessage("So many edges..");
    CMessage("Give me more!");
    edge("Edge!");
    CMessage("Three more times..");
    DoEdges(3, 3, 0);
    CMessage("So good. I like how you\'re doing.");
    CMessage("%SitDown%");
    CMessage("Ok, end of our training.");
    CMessage("Phew..");
    CMessage("Relax my edge-slave.");
    CMessage("That was intense, wasn\'t it?");
    CMessage("I hope you liked your training today.");
	delVar("dontDelMod");
    return;
    Modulo2();
}
function Modulo2()
{
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    CMessage(random("%PetName%", "%SubName%"));
    if(getVar("AV_MasuDone", false))
    {
        AV_MasuDone();
        return;
    }
    CMessage("I found that tease on Milovana other day...");
    CMessage("About Masu, where in medieval Japanese society women trained male slaves for extreme sexual endurance.");
    CMessage("Specifically the ability to perform extended, highly controlled masturbation sequences under the direct control of their owners.");
    CMessage("The sequences had to be completed without an orgasm.");
    CMessage("The men were then used by their powerful women owners to take part in formal competitions known as \"Masu!");
    CMessage("which means both \'to masturbate\' and \'more! more!");
    CMessage("I loved, and thought we could use some things from this tease in our sessions.");
    CMessage("You will also learn to love your mastery of the forms.");
    CMessage("Because the forms show your devotion and submission to me.");
    CMessage("The first form you will learn is the simplest of all and is known as Dog.");
    CMessage("It simply requires 4 complete strokes at regular intervals with a strong emphasis on the first beat.");
    CMessage("The first beat helps you keep count and retain your bearings.");
    CMessage("You should silently count 1, 2, 3, 4 to yourself until this becomes second nature.");
    CMessage("In Masu games the strokes are counted on wooden blocks and drums");
    CMessage("It will be performed twice and for now you should just listen and count along without stroking");
    CMessage("ONE two three four, ONE two three four");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "dog.wav");
    CMessage("Ah the magical sound of Dog.  The sound that tells me someone is honouring me.");
    CMessage("Ok, now it\'s time for you to try.");
    CMessage("The strokes should be strong and firm and cover the entire length of your penis.");
    CMessage("ONE two three four. STROKE stroke stroke stroke.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "dog.wav");
    CMessage("%GoodBoy%");
    CMessage("The second form you will learn is called \'Cat\'.");
    CMessage("Cat is Dog with an extra stroke between strokes 3 and 4 and I count it \"one two three and four\".");
    CMessage("It is written as 123+4.");
    CMessage("I will demonstrate Cat, Don\'t stroke but say \'1, 2, 3 and 4\' out loud.");
    CMessage("No stroking just count.");
    CMessage("ONE two three and four ONE two three and four");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "cat.wav");
    CMessage("%GoodBoy%");
    CMessage("And next we have Snake.");
    CMessage("Snake is written 1+23+4 and if you are paying attention you should be able to work out what that means.");
    CMessage("This time we count \'1 and 2, 3 and 4\' out loud.");
    CMessage("The modern way is 123 123 but I prefer the old ways");
    CMessage("ONE and two, THREE and four.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "snake.wav");
    CMessage("Now Stroking");
    CMessage("ONE and two, THREE and four.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "snake.wav");
    CMessage("Well done, %PetName%. You do have some natural talent it seems.");
    CMessage("You have pleased mistress with your performance, so we are going to move onto our first combo form Dog & Cat");
    CMessage("Stroke"); 
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "dogcat-80.mp3");
	sleep(30);
	//@PlayAudio[tease\Masu\dogcat-80.mp3] @sleep(30)
    //--UNINTERPRETED LINE:DOG & CAT. @PlayAudio[tease\Masu\dogcat-100.mp3] @sleep(30)
    //--UNINTERPRETED LINE:DOUBLE DOG, FASTER. @PlayAudio[tease\Masu\dogdog-120.mp3] @sleep(20)
    //--UNINTERPRETED LINE:DOG & CAT faster  @PlayAudio[tease\Masu\dogcat-switch140.mp3] @sleep(20)
	CMessage("DOG & CAT."); 
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "dogcat-100.mp3");
	sleep(30);
	stopAudio();
	CMessage("DOUBLE DOG, FASTER."); 
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "dogdog-120.mp3");
	sleep(20);
	stopAudio();
	CMessage("DOG & CAT faster"); 
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "dogcat-switch140.mp3");
	sleep(20);
	stopAudio();
    CMessage("%GoodBoy%");
    CMessage("There are variations, but we will try later...");
    setVar("AV_MasuDone", true);
    CMessage("It will be a good diversification");
    return;
    AV_MasuDone();
}
function AV_MasuDone()
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
    CMessage("Time for a proper Masu training session.");
    setVar("AV_MasuTrain", 0);
    CMessage("Follow my instructions without " + random("hesitate ", "question ") + "and make sure you have plenty of " + random("lubrication", "auto-control"));
    setVar("AV_MasuRounds", getVar("%Random6%, 10", 0));
    MasuLoop();
}
function MasuLoop()
{
    switch(random("Mas1", "Mas2", "Mas3", "Mas4", "Mas5", "Mas6", "Mas7", "Mas8", "Mas9", "Mas10", "Mas11"))
    {
        case "Mas1":
        Mas1();
        return;
        break;
        case "Mas2":
        Mas2();
        return;
        break;
        case "Mas3":
        Mas3();
        return;
        break;
        case "Mas4":
        Mas4();
        return;
        break;
        case "Mas5":
        Mas5();
        return;
        break;
        case "Mas6":
        Mas6();
        return;
        break;
        case "Mas7":
        Mas7();
        return;
        break;
        case "Mas8":
        Mas8();
        return;
        break;
        case "Mas9":
        Mas9();
        return;
        break;
        case "Mas10":
        Mas10();
        return;
        break;
        case "Mas11":
        Mas11();
        return;
        break;
    }
	return;
    Mas1();
}
function Mas1()
{
    CMessage(random("ONE two three four, ONE two three four", "ONE two three four", "Dog"));
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "dogdog120.wav");
    sleep(18);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas2();
}
function Mas2()
{
    CMessage(random("ONE two three and four ONE two three and four", "Cat", "ONE two three and four"));
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "catcat100.wav");
    sleep(25);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas3();
}
function Mas3()
{
    CMessage(random("ONE two three and four ONE two three and four", "Cat", "ONE two three and four"));
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "catcat120.wav");
    sleep(20);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas4();
}
function Mas4()
{
    CMessage(random("ONE two three and four ONE two three and four", "Cat", "ONE two three and four"));
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "catcat140.wav");
    sleep(15);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas5();
}
function Mas5()
{
    //--UNINTERPRETED LINE:DOG & CAT @PlayAudio[tease\Masu\dogcat80.wav] @sleep(25)
	CMessage("DOG & CAT"); 
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "dogcat80.wav");
	sleep(25);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas6();
}
function Mas6()
{
    //--UNINTERPRETED LINE:DOG & CAT @PlayAudio[tease\Masu\dogcat100.wav] @sleep(20)
	CMessage("DOG & CAT"); 
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "dogcat100.wav");
	sleep(20);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas7();
}
function Mas7()
{
    //--UNINTERPRETED LINE:DOG & CAT faster @PlayAudio[tease\Masu\dogcat140.wav] @sleep(15)
	CMessage("DOG & CAT faster"); 
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "dogcat140.wav");
	sleep(15);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas8();
}
function Mas8()
{
    //--UNINTERPRETED LINE:DOG & CAT switch @PlayAudio[tease\Masu\dogcat-switch140.mp3] @sleep(18)
	CMessage("DOG & CAT switch"); 
	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "dogcat-switch140.mp3");
	sleep(18);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas9();
}
function Mas9()
{
    CMessage(random("Snake", "ONE and two, THREE and four"));
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "snakesnake100.wav");
    sleep(20);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas10();
}
function Mas10()
{
    CMessage(random("Snake", "ONE and two, THREE and four"));
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "snakesnake120.wav");
    sleep(17);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    Mas11();
}
function Mas11()
{
    CMessage(random("Snake", "ONE and two, THREE and four"));
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Masu" + java.io.File.separator + "snakesnake140.wav");
    sleep(15);
    setVar("AV_MasuTrain", getVar("AV_MasuTrain", 0) + 1);
    MasuBreak();
    return;
    MasuBreak();
}
function MasuBreak()
{
	stopAudio();
    CMessage(random("Imagine if we played Masu for several hours at competition speed how much cum would have built up", "Knowing all this, knowing you will not be able to cum and dancing near the edge is the very essence of highlevel Masu play", "If you do it right you will enter a blisfull trance like state", "That\'s it. Keep your form. Work it hard", "Stroke is To Obey"));
    if (getVar("AV_MasuTrain", 0) >= getVar("AV_MasuRounds", 0))
    {
        MasuEnds();
        return;
    }
    MasuLoop();
    return;
    MasuEnds();
}
function MasuEnds()
{
    CMessage("%ThatsEnough%");
    return;
    Modulo3();
}
function Modulo3()
{
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    setVar("AV_EdglCo", 0);
    CMessage(random("So I was talking to some friends yesterday", "I had a discussion with some of my friends yesterday", "I had an interesting conversation yesterday"));
    CMessage(random("I was explaining how I could make you edge with just a snap of my fingers", "I told them I had complete control over your edges"));
    CMessage(random("But they claimed it wasn\'t that special", "But they didn\'t seem impressed"));
    CMessage(random("Can you believe that", "How dare they question my dominance over you"));
    CMessage(random("So I invited them over for this session", "So I told them they should come and take a look!"));
    addContact(2);
    addContact(3);
    addContact(4);
    CMessage(random("Hi girls", "Hello there unbelievers"));
    SMessage("Hello", -1, 4);
    SMessage("Howdy", -1, 3);
    SMessage("Hey!", -1, 2);
    CMessage(random("So, about our conversation yesterday", "So let\'s continue our discussion"));
    CMessage(random("Let me show you something", "Allow me to demonstrate my power"));
    holdEdge();
    CMessage(random("See, like it\'s nothing!", "You see how he just edged at my whim?"));
    CMessage("Anyone think they can do this as well?");
    SMessage(random("When he looks at me, he gets way hornier than any other woman!", "Bah, I\'m sure he thinks of me when he edges", "He would edge in half the time if he was with me!"), -1, 3);
    SMessage(random("He would edge way faster with me", "I could do it in half the time", "Took him long enough it seems..."), -1, 4);
    SMessage(random("He\'s so scared of me he would stroke his cock so fast it would go raw if I commanded him to edge", "I would just threaten him with pain if he didn\'t edge fast enough", "His fear of me would make him edge in seconds!"), -1, 4);
    SMessage(random("Aww, you do know guys get turned on from anything with breasts?", "He would edge for any woman", "cause he has a dick", "Edging is pretty much default behaviour for men though, not really your achievement..."), -1, 2);
    CMessage(random("Oh that\'s what you all think", "You really think so"));
    CMessage(random("Well let\'s find out who is the true master of %SubName% \'s edges", "Let\'s see who\'s right then!", "Only one way to find out who is right"));
    CMessage(random("How about a race", "We\'re having a race", "This will be a fun competition"));
    CMessage(random("Everyone gets 30 seconds to make his dick edge", "How about you all get 30 seconds to make %SubName% edge", "I think 30 seconds should be enough to make him edge since you all claim to be so adept at this"));
    CMessage(random("If you fail, he\'ll get 10 seconds to cool down", "%SubName% gets a 10 second pause between each attempt"));
    CMessage(random("So we don\'t just finish the other woman\'s job", "To make sure he edges for whoever has her turn"));
    let answer0 = getInput(random("Deal", "Everyone on board", "Agreed"),4);
	if (answer0.isLike("yes"))
    {
		av_saidyes();
	}
    //--Command:YesMode(Goto,av_saidyes)
    SMessage("Yep, sounds fun!",-1,2);
    SMessage("I love a challenge!", -1, 4);
    SMessage("Easy win for me!", -1, 3);
    efw65ugnf();
    return;
    av_saidyes();
}
function av_saidyes()
{
    CMessage(random("Oh be quiet, your consent is not needed", "Shut up, who cares if you agree, you\'re going to do as your told anyway"));
    //--Command:YesMode(Normal)
    efw65ugnf();
	return;
}
function efw65ugnf()
{
    CMessage(random("I've got a timer ready", "My stopwatch is ready", "Here we go!"));
    CMessage(random("Let\'s start with ", "And the first to take her turn is ") + "...");
    C1Try();
	return;
}
function C1Try()
{
    SMessage("%StartStroking%", -1, 2);
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "G1Win()");
	//--Command:CountVar(AV_EdglCo)
	edged=false;
	date = setDate();
	date.addSecond(30);
    LoopG1();
	return;
}
function LoopG1()
{
	if(edged){
		return;
	}
    //if (getVar("AV_EdglCo", 0) >= 30)
	if (date.hasPassed() && !edged)
    {
        G1Failed();
        return;
    }
	if(!edged){
    switch(random("g101", "g102", "g103", "g104", "g105", "g106", "g107", "g108", "g109", "g110"))
    {
        case "g101":
        g101();
        return;
        break;
        case "g102":
        g102();
        return;
        break;
        case "g103":
        g103();
        return;
        break;
        case "g104":
        g104();
        return;
        break;
        case "g105":
        g105();
        return;
        break;
        case "g106":
        g106();
        return;
        break;
        case "g107":
        g107();
        return;
        break;
        case "g108":
        g108();
        return;
        break;
        case "g109":
        g109();
        return;
        break;
        case "g110":
        g110();
        return;
        break;
    }
	}
	return;
    g101();
}
function g101()
{
	if(!edged){
    SMessage("C\'mon baby, jerk your cock for all the women you know", -1, 2);
	}if(!edged){
    LoopG1();
	}
    return;
    g102();
}
function g102()
{
	if(!edged){
    SMessage("Just give it everything you\'ve got right now!", -1, 2);
	}if(!edged){
    LoopG1();
	}
    return;
    g103();
}
function g103()
{
	if(!edged){
    SMessage("You\'ve jerked so many times for " + getVar("AV_Persona13", "") + "you know it feels great", -1, 2);
	}if(!edged){
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    LoopG1();
	}
    return;
    g104();
}
function g104()
{
	if(!edged){
    SMessage("You are a man, so prove it to me!", -1, 2);
	}if(!edged){
    LoopG1();
	}
    return;
    g105();
}
function g105()
{
	if(!edged){
    SMessage("Doesn\'t " + getVar("AV_Persona02", "") + "just want to make you squirt all over the place?", -1, 2);
	}if(!edged){
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    LoopG1();
	}
    return;
    g106();
}
function g106()
{
	if(!edged){
    SMessage("You can go faster, I know you can!", -1, 2);
	}if(!edged){
    LoopG1();
	}
    return;
    g107();
}
function g107()
{
	if(!edged){
    SMessage(getVar("AV_Persona01", "") + "is looking at you, you need to impress her with your fastest possible jerking!", -1, 2);
	}if(!edged){
    showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    LoopG1();
	}
    return;
    g108();
}
function g108()
{
	if(!edged){
    SMessage("Fast, faster, fastest! If you aren\'t edging while looking at her, I\'m not sure you are a man at all!", -1, 2);
	}if(!edged){
    LoopG1();
	}
    return;
    g109();
}
function g109()
{
	if(!edged){
    SMessage("You know you need it! All day and every day! Edge! Edge! Edge!", -1, 2);
	}if(!edged){
    LoopG1();
	}
    return;
    g110();
}
function g110()
{
	if(!edged){
    SMessage("Edging is what you were made for, just admit it and give me an edge!", -1, 2);
	}if(!edged){
    LoopG1();
	}
    return;
    C2Try();
}
function C2Try()
{
    SMessage("%StartStroking%", -1, 3);
    //--Command:CountVar(AV_EdglCo)
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "G2Win()");
	edged=false;
	date = setDate();
	date.addSecond(30);
    LoopG2();
	return;
}
function LoopG2()
{
	if(edged){
		return;
	}
    //if (getVar("AV_EdglCo", 0) >= 30)
	if (date.hasPassed() && !edged)
    {
        G2Failed();
        return;
    }
	if(!edged){
    switch(random("g201", "g202", "g203", "g204", "g205", "g206", "g207", "g208", "g209", "g210"))
    {
        case "g201":
        g201();
        return;
        break;
        case "g202":
        g202();
        return;
        break;
        case "g203":
        g203();
        return;
        break;
        case "g204":
        g204();
        return;
        break;
        case "g205":
        g205();
        return;
        break;
        case "g206":
        g206();
        return;
        break;
        case "g207":
        g207();
        return;
        break;
        case "g208":
        g208();
        return;
        break;
        case "g209":
        g209();
        return;
        break;
        case "g210":
        g210();
        return;
        break;
    }
	}
	return;
    g201();
}
function g201()
{
	if(!edged){
    SMessage("Just admit I\'m the one that turns you on the most!", -1, 3);
	}if(!edged){
    LoopG2();
	}
    return;
    g202();
}
function g202()
{
	if(!edged){
    SMessage("Edge that dick for me, you know I deserve it!", -1, 3);
	}if(!edged){
    LoopG2();
	}
    return;
    g203();
}
function g203()
{
	if(!edged){
    SMessage("You should feel honoured to jerk that pathetic penis for me!", -1, 3);
	}if(!edged){
    LoopG2();
	}
    return;
    g204();
}
function g204()
{
	if(!edged){
    SMessage("Prove your devotion to me!", -1, 3);
	}if(!edged){
    LoopG2();
	}
    return;
    g205();
}
function g205()
{
	if(!edged){
    SMessage("Edge for me, you know I\'m the only one that can make you feel this good", -1, 3);
	}if(!edged){
    LoopG2();
	}
    return;
    g206();
}
function g206()
{
	if(!edged){
    SMessage("Edge for me, like you\'ve done so many times!", -1, 3);
	}if(!edged){
    LoopG2();
	}
    return;
    g207();
}
function g207()
{
	if(!edged){
    SMessage("Worship my body!", -1, 3);
	}if(!edged){
    LoopG2();
	}
    return;
    g208();
}
function g208()
{
	if(!edged){
    SMessage("Cry out my name, that will help you edge!", -1, 3);
	}if(!edged){
    LoopG2();
	}
    return;
    g209();
}
function g209()
{
	if(!edged){
    SMessage("Imagine me touching you, that would make any man edge!", -1, 3);
	}if(!edged){
    LoopG2();
	}
    return;
    g210();
}
function g210()
{
	if(!edged){
    SMessage("You can go faster for me, can\'t you? I\'m not easy to impress so do your best", -1, 3);
	}if(!edged){
    LoopG2();
	}
    return;
    C3Try();
}
function C3Try()
{
    SMessage("%StartStroking%", -1, 4);
    //--Command:CountVar(AV_EdglCo)
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "G3Win()");
	edged=false;
	date = setDate();
	date.addSecond(30);
    LoopG3();
	return;
}
function LoopG3()
{
	if(edged){
		return;
	}
    //if (getVar("AV_EdglCo", 0) >= 30)
	if (date.hasPassed() && !edged)
    {
        G3Failed();
        return;
    }
	if(!edged){
    switch(random("g301", "g302", "g303", "g304", "g305", "g306", "g307", "g308", "g309", "g310"))
    {
        case "g301":
        g301();
        return;
        break;
        case "g302":
        g302();
        return;
        break;
        case "g303":
        g303();
        return;
        break;
        case "g304":
        g304();
        return;
        break;
        case "g305":
        g305();
        return;
        break;
        case "g306":
        g306();
        return;
        break;
        case "g307":
        g307();
        return;
        break;
        case "g308":
        g308();
        return;
        break;
        case "g309":
        g309();
        return;
        break;
        case "g310":
        g310();
        return;
        break;
    }
	}
	return;
    g301();
}
function g301()
{
	if(!edged){
    SMessage("%Stroke% that cock %Slave%!", -1, 4);
	}if(!edged){
    LoopG3();
	}
    return;
    g302();
}
function g302()
{
	if(!edged){
    SMessage("Faster! I want to see a blur!", -1, 4);
	}if(!edged){
    LoopG3();
	}
    return;
    g303();
}
function g303()
{
	if(!edged){
    SMessage("You will be sorry if you are not edging RIGHT NOW!", -1, 4);
	}if(!edged){
    LoopG3();
	}
    return;
    g304();
}
function g304()
{
    if(getVar("av_fetish_pain", false))
    {
		if(!edged){
        SMessage("Slap those balls while you jerk, a painslut like you will love that!", -1, 4);
		}if(!edged){
        LoopG3();
		}
        return;
    }
    else
    {
		if(!edged){
        SMessage("A painslut like you will love that!", -1, 4);
		}if(!edged){
        LoopG3();
		}
        return;
    }
    g305();
}
function g305()
{
	if(!edged){
    SMessage("Faster, I don\'t care if it hurts! In fact I love it when it hurts!", -1, 4);
    showTaggedImage(4, ["femdom"]);
	}if(!edged){
    LoopG3();
	}
    return;
    g306();
}
function g306()
{
	if(!edged){
    SMessage("It\'s not because your cock is so pathetic you can\'t edge for me!", -1, 4);
	}if(!edged){
    LoopG3();
	}
    return;
    g307();
}
function g307()
{
	if(!edged){
    SMessage("Feel the burn!", -1, 4);
	}if(!edged){
    LoopG3();
	}
    return;
    g308();
}
function g308()
{
	if(!edged){
    SMessage("If you won\'t edge NOW you will be crying the next time I have you to myself", -1, 4);
	}if(!edged){
    LoopG3();
	}
    return;
    g309();
}
function g309()
{
	if(!edged){
    SMessage("Do you think I\'m kidding? This is not a joke to me! Edge or suffer!", -1, 4);
    showTaggedImage(4, ["femdom"]);
	}if(!edged){
    LoopG3();
	}
    return;
    g310();
}
function g310()
{
	if(!edged){
    SMessage("If you won\'t edge that cock for me, I\'ll make sure it never edges again!", -1, 4);
	}if(!edged){
    LoopG3();
	}
    return;
    DomTry();
}
function DomTry()
{
    CMessage("%StartStroking%");
    //--Command:CountVar(AV_EdglCo)
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "DomWin()");
	edged=false;
	date = setDate();
	date.addSecond(30);
    LoopDom();
	return;
}
function LoopDom()
{
	if(edged){
		return;
	}
    //if (getVar("AV_EdglCo", 0) >= 30)
	if (date.hasPassed() && !edged)
    {
        DomFailed();
        return;
    }
	if(!edged){
    switch(random("Dom101", "Dom102", "Dom103", "Dom104", "Dom105", "Dom106", "Dom107", "Dom108", "Dom109", "Dom110"))
    {
        case "Dom101":
        Dom101();
        return;
        break;
        case "Dom102":
        Dom102();
        return;
        break;
        case "Dom103":
        Dom103();
        return;
        break;
        case "Dom104":
        Dom104();
        return;
        break;
        case "Dom105":
        Dom105();
        return;
        break;
        case "Dom106":
        Dom106();
        return;
        break;
        case "Dom107":
        Dom107();
        return;
        break;
        case "Dom108":
        Dom108();
        return;
        break;
        case "Dom109":
        Dom109();
        return;
        break;
        case "Dom110":
        Dom110();
        return;
        break;
    }
	}
	return;
    Dom101();
}
function Dom101()
{
	if(!edged){
    CMessage("You belong to me, as do your edges!");
	}if(!edged){
    LoopDom();
	}
    return;
    Dom102();
}
function Dom102()
{
	if(!edged){
    CMessage("Do not even think about dissapointing your Mistress!");
	}if(!edged){
    LoopDom();
	}
    return;
    Dom103();
}
function Dom103()
{
	if(!edged){
    CMessage("I don\'t know what I\'ll do to you if you edge with anyone else, but I do know you won\'t like it a bit!");
	}if(!edged){
    LoopDom();
	}
    return;
    Dom104();
}
function Dom104()
{
	if(!edged){
    CMessage("Edge for your Mistress!");
	}if(!edged){
    LoopDom();
	}
    return;
    Dom105();
}
function Dom105()
{
	if(!edged){
    CMessage("Remember I own you, there is no excuse for failing me");
	}if(!edged){
    LoopDom();
	}
    return;
    Dom106();
}
function Dom106()
{
	if(!edged){
    CMessage("Faster, or I\'ll lock it up for a month!");
	}if(!edged){
    LoopDom();
	}
    return;
    Dom107();
}
function Dom107()
{
	if(!edged){
    CMessage("You need to prove you are worthy of being my slave!");
	}if(!edged){
    LoopDom();
	}
    return;
    Dom108();
}
function Dom108()
{
	if(!edged){
    CMessage("You have given me countless edges dear slave, but your next one must be mine as well!");
	}if(!edged){
    LoopDom();
	}
    return;
    Dom109();
}
function Dom109()
{
	if(!edged){
    CMessage("I know your dick, it wants to edge for me, it NEEDS to edge for me!");
	}if(!edged){
    LoopDom();
	}
    return;
    Dom110();
}
function Dom110()
{
	if(!edged){
    CMessage("My slave, my dick, my edge.");
	}if(!edged){
    LoopDom();
	}
    return;
    G1Failed();
}
function G1Failed()
{
	edged=true
    CMessage(random("Your turn is over %domFriend1Name%, stop jerking %SubName%", "Stop! You failed %domFriend1Name%!", "Stop jerking, time for someone else!", "She failed, stop masturbating!", "Nope, not this turn! Hands off!"));
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    setVar("edgingmode", "Normal");
    //--Command:CountVar(AV_EdglCo,stop)
    CMessage(random("No edge this time,. relax a bit", "I guess making him edge isn't that easy after all huh?, relax %SubName%"));
	//@SetVar[AV_EdglCo]=[0]
    CMessage("%RelaxAndBreathe%");
    sleep(randomInt(30, 35));
    CMessage(random("%domFriend2Name%! Go!", "Your turn %domFriend2Name%", "Give it your best shot %domFriend2Name%", "%domFriend2Name% is up!", "You\'re up %domFriend2Name%"));
    C2Try();
    return;
    G2Failed();
}
function G2Failed()
{
	edged=true;
    CMessage(random("Your turn is over %domFriend2Name%, stop jerking %SubName%", "Stop! You failed %domFriend2Name%!", "Stop jerking, time for someone else!", "She failed, stop masturbating!", "Nope, not this turn! Hands off!"));
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    setVar("edgingmode", "Normal");
    //--Command:CountVar(AV_EdglCo,stop)
    //--UNINTERPRETED LINE:@RT(No edge this time,. relax a bit, I guess making him edge isn't that easy after all huh?, relax %SubName%) @SetVar[AV_EdglCo]=[0]
	CMessage(random("No edge this time,. relax a bit", "I guess making him edge isn't that easy after all huh?, relax %SubName%"));
    CMessage("%RelaxAndBreathe%");
    sleep(randomInt(30, 35));
    CMessage(random("%domFriend3Name%! Go!", "Your turn %domFriend3Name%", "Give it your best shot %domFriend3Name%", "%domFriend3Name% is up!", "You\'re up %domFriend3Name%"));
    C3Try();
    return;
    G3Failed();
}
function G3Failed()
{
	edged=true;
    CMessage(random("Your turn is over %domFriend3Name%, stop jerking %SubName%", "Stop! You failed %domFriend3Name%!", "Stop jerking, time for someone else!", "She failed, stop masturbating!", "Nope, not this turn! Hands off!"));
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    setVar("edgingmode", "Normal");
    //--Command:CountVar(AV_EdglCo,stop)
    //--UNINTERPRETED LINE:@RT(No edge this time,. relax a bit, I guess making him edge isn't that easy after all huh?, relax %SubName%) @SetVar[AV_EdglCo]=[0]
	CMessage(random("No edge this time,. relax a bit", "I guess making him edge isn't that easy after all huh?, relax %SubName%"));
    CMessage("%RelaxAndBreathe%");
    sleep(randomInt(30, 35));
    CMessage(random("I Go now!", "My turn", "I am up now"));
    DomTry();
    return;
    DomFailed();
}
function DomFailed()
{
	edged=true;
    SMessage(random("Your turn is over %domFriend2Name%, stop jerking %SubName%", "Stop! You failed %domFriend2Name%!", "Stop jerking, time for someone else!", "She failed, stop masturbating!", "Nope, not this turn! Hands off!"),-1,4);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    setVar("edgingmode", "Normal");
    //--Command:CountVar(AV_EdglCo,stop)
    //--UNINTERPRETED LINE:@Contact1 @RT(No edge this time,. relax a bit, I guess making him edge isn't that easy after all huh?, relax %SubName%) @SetVar[AV_EdglCo]=[0]
	SMessage(random("No edge this time,. relax a bit", "I guess making him edge isn't that easy after all huh?, relax %SubName%"),-1,2);
    SMessage("%RelaxAndBreathe%", -1, 3);
    sleep(randomInt(30, 35));
    CMessage(random("%domFriend1Name%! Go!", "Your turn %domFriend1Name%", "Give it your best shot %domFriend1Name%", "%domFriend1Name% is up!", "You\'re up %domFriend1Name%"));
    C1Try();
    return;
    G1Win();
}
function G1Win()
{
	edged=true;
    SMessage("%HoldTheEdge%", -1, 2);
    SMessage(random("Wow, I did it", "Yeah I won!", "You see", "he loves edging for me!"), -1, 2);
    CMessage(random("I guess I can\'t own every one of his edges", "Well, that was dissapointing...", "Well I never! I\'ll remember this %SubName%"));
    SMessage("%stopstroking%", 0,2);
    CMessage("I guess you deserve my apologies %domFriend1Name%");
    SMessage(random("It\'s okay, like I said, men just get aroused for anyone", "Sorry to burst your bubble %DomName%, but men are just that easy to turn on", "Well, anyone could have done this, that was my point"), -1, 2);
    SMessage(random("And it\'s not just edging, but for cumming as well", "He\'ll get turned on by all women, he\'ll edge for woman, and he\'ll cum for them", "If this had gone on longer, he would have cum as well...."), -1, 2);
    FimDoJogo();
    return;
    G2Win();
}
function G2Win()
{
	edged=true;
    SMessage("%HoldTheEdge%", -1, 3);
    SMessage(random("Wow, I did it", "Yeah I won!", "You see", "he loves edging for me!"), -1, 3);
    CMessage(random("I guess I can\'t own every one of his edges", "Well, that was dissapointing...", "Well I never! I\'ll remember this %SubName%"));
    SMessage("%stopstroking%", 0,3);
    /*if (randomInteger(1, 100) <= 50)
    {
        G2Session();
        return;
    }*/
    CMessage("I guess you deserve my apologies %domFriend2Name%");
    SMessage("I just wanted to prove once and for all how much he likes me", -1, 3);
    FimDoJogo();
    return;
    G3Win();
}
function G3Win()
{
	edged=true;
    SMessage("%HoldTheEdge%", -1, 4);
    SMessage(random("Wow, I did it", "Yeah I won!", "You see", "he loves edging for me!"), -1, 4);
    CMessage(random("I guess I can\'t own every one of his edges", "Well, that was dissapointing...", "Well I never! I\'ll remember this %SubName%"));
    CMessage("%stopstroking%", 0,4);
    /*if (randomInteger(1, 100) <= 50)
    {
        G3Session();
        return;
    }*/
    CMessage("I guess you deserve my apologies %domFriend3Name%");
    SMessage("I just wanted to prove once and for all how much he likes me", -1, 4);
    FimDoJogo();
    return;
    DomWin();
}
function DomWin()
{
	edged=true;
    CMessage("%stopstroking%", 0);
    CMessage(random("Like I said, I own his edges", "So now we can stop this silly argument, he is clearly my edge-whore", "There we go, another edge for me, as usual!"));
    FimDoJogo();
}
function FimDoJogo()
{
    CMessage(random("Now leave us, I\'ve got some plans for him now that don\'t include you!", "Now you are dismissed, I\'ve still got some unfinished business with %SubName%"));
	setEdgeMode();
    removeContact(2);
    removeContact(3);
    removeContact(4);
    return;
    Modulo4();
}
function Modulo4()
{
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    CMessage(random("%PetName%", "%SubName%"));
    CMessage("It\'s been a lot of hard work to get here.");
    if(getVar("av_fetish_cfnm", false))
    {
        CMessage("Let me inspect you naked body...");
    }
    SMessage("%DomName% turned on the mic");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "commands" + java.io.File.separator + "Stand*.mp3");
    CMessage("Turn slowly while I inspects your body with my eyes.");
    CMessage("Stand at attention while I inspects your body... arms bent behind your back");
    if(!getVar("av_fetish_pain", false))
    {
        f43gx9();
        return;
    }
    CMessage("Put your arms on the table and bend over at the waist.");
    CMessage("I am going to spank each of your ass cheeks until they\'re nice and red.");
    CMessage("ready?");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(15);
    CMessage("Your other cheek now, %PetName%");
    CMessage("ready?");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    sleep(15);
    f43gx9();
	return;
}
function f43gx9()
{
    CMessage("%KneelForMe%");
    CMessage("Arms bent behind your back.");
    CMessage("I am here to HELP you with your boner and your hurting cock.");
    CMessage("I know it\'s throbbing already and it hurts");
    CMessage("I know you can\'t wait to stroke your cock but this is not the way this works.");
    CMessage("I want you hold your load for me, so we both can enjoy a good session.");
    CMessage("Do you like having me rubbing my clit?");
    CMessage("What if I slide my finger inside my hole? It\'s wet already...");
    CMessage("And once my finger got inside me you will be able to stroke your dick up and down...");
    CMessage("Look... it\'s almost there...");
    CMessage("Look my finger dissapearing into my pussy... hmmm feels so good, now baby, now you can stroke");
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
	setStrokingNoTaunt();
    CMessage("Did you think you would be the only one having fun here?");
    CMessage("Oh no... I am going to play with you while you rub and stroke your hard dick for me");
    CMessage("because I can\'t help myself when I tell you to stroke your hard cock");
    CMessage("So... let\'s see... can you imagine me just there in front of you?");
    CMessage("%stopstroking%", 0);
	stopStrokingAll();
    CMessage("All naked and standing for you, watching your hard throbbing cock as I wish to touch it... stroke it... and lick it up and down.");
    CMessage("I bet you want to stroke it already, don\'t you?");
    CMessage("But you can\'t until I say.");
    CMessage("Instead... you can rub it with your hand, rub your shaft up and down. You can rub your balls too.");
    CMessage("That\'s it baby. Keep going as I watch you while I gently slid my hand down to caress my clit.");
    CMessage("Watching you really gets me wet already.");
	setStrokingNoTaunt();
    CMessage("I can see in your face that you are so close.");
    CMessage("You want to cum already, right?");
    CMessage("But this is just the beginning baby, you can\'t cum yet.");
    CMessage("I just started.");
    CMessage("Come on baby. I am going to get to the edge");
    CMessage("stroke ir faster now");
    CMessage("squeeze your cock hard for me and stroke it faster");
    edge("%Edge%");
    CMessage("Your cum is safe in your balls,");
    CMessage("You can still hold it.");
    CMessage("%SitDown%");
    return;
}