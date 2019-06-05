DMessage("AV_Int_Pain: start");
main();
DMessage("AV_Int_Pain: end");
function main()
{
	if(getVar("AV_IntPain_a28huj38dop", false))
    {
        a28huj38dop()
        return;
    }
	
    if(getVar("AV_IntPain_Once", false))
    {
        AV_IntPain_Once();
        return;
    }
    switch(random("Intro01", "Intro02"))
    {
        case "Intro01":
        Intro01();
        return;
        break;
        case "Intro02":
        Intro02();
        return;
        break;
    }
    Intro01();
}
function Intro01()
{
    CMessage("I think youre having a little too much fun %PetName%");
    CMessage("Get ready, the real pain hasn\'t even started yet.");
    switch(random("P02", "P09"))
    {
        case "P02":
        P02();
        return;
        break;
        case "P09":
        P09();
        return;
        break;
    }
    Intro02();
}
function Intro02()
{
    CMessage("Pain is a funny thing, %PetName%");
    CMessage("Your body is telling you something\'s wrong an yet you crave it somehow");
    switch(random("P02", "P09"))
    {
        case "P02":
        P02();
        return;
        break;
        case "P09":
        P09();
        return;
        break;
    }
    P02();
}
function P02()
{
    if(!getVar("AV_MEM_Contact2", false) && !getVar("AV_MEM_Contact3", false))
    {
        RealStart();
        return;
    }
    if(getVar("AV_MEM_Contact2", false))
    {
        CMessage("Since you " + random("asked for ", "wanted ") + "%domFriend2Name% in the chat, I think I will let her " + random("give you some pain ", "make you suffer ") + "...");
    }
    if(getVar("AV_MEM_Contact3", false))
    {
        CMessage("Since you " + random("asked for ", "wanted ") + "%domFriend3Name% in the chat, I think I will let her " + random("give you some pain ", "make you suffer ") + "...");
    }
    if(getVar("AV_MEM_Contact2", false))
    {
        CMessage("Have fun %domFriend2Name%");
        addContact(3);
    }
    if(getVar("AV_MEM_Contact3", false))
    {
        CMessage("Have fun %domFriend3Name%");
        addContact(4);
    }
    removeContact(1);
    RealStart();
	return;
}
function RealStart()
{
    CMessage("You want it so badly yet as soon as it starts you want it to stop...");
    setTempVar("AV_IntPain_Once", true);
    CMessage("That\'s why I like hurting you so much");
    CMessage("I love knowing how much it confuses that submissive little brain of yours %Grin%");
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        setVar("AV_PinDone", true);
    }
    CMessage("And 10 rubber bands");
    sleep(20);
    CMessage("First of all %Slave%, you will put a rubber band around each of the following body parts:");
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("each upper arm");
        sleep(20);
    }
    CMessage("each forearm");
    sleep(20);
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("each asscheek");
        sleep(10);
    }
    CMessage("each thigh");
    sleep(20);
    CMessage("and each calf");
    sleep(20);
    if(!getVar("AV_BallTied", false))
    {
        CMessage("%TieYourBalls%");
    }
    CMessage("%KneelForMe%");
    CMessage("If it is too loose to stay on properly, double it up %Slave%!");
    CMessage("his will allow us to spread the pain all around that body of yours!");
    CMessage("you will stretch the rubber band and release it so it give you a fast, sharp bite.");
    sleep(10);
    CMessage("your left forearm");
    sleep(10);
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("your left upper arm");
        sleep(10);
    }
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("your left asscheek");
        sleep(10);
    }
    CMessage("your left thigh");
    sleep(10);
    CMessage("your left calf");
    sleep(10);
    CMessage("your right calf");
    sleep(10);
    CMessage("your right thigh");
    sleep(10);
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("your right asscheek");
        sleep(10);
    }
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("your right upper arm");
        sleep(10);
    }
    CMessage("your right forearm.");
    sleep(10);
    CMessage("Remain kneeling!");
    CMessage("Now take your thumb and forefinger and make a ring around your balls, pulling them away from your body.");
    CMessage("I want 10 lashings with the spool to those balls %Slave%!");
    CMessage(random("Hit ", "Spank ") + "your balls");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Belle10*.mp3");
    sleep(20);
    DoEdges(3, 5, 0);
    if(getVar("av_fetish_rough", false) || getVar("AV_DommeMistress", false))
    {
        CMessage("How does it feel have your pathetic manhood choked as you kneel there drooling like an animal?");
    }
    if(!getVar("av_fetish_rough", false) && !getVar("AV_DommeMistress", false))
    {
        CMessage("How does it feel have your %Cock% choked as you kneel there drooling for me?");
    }
    CMessage(random("Let\'s continue your agony", "I am here for 1 simple reason, to administer pain"));
    CMessage("give me 10 hard smacks to each nipple.");
    CMessage("Now %Slave%!");
    sleep(20);
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("Now 30 to those %Balls%");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Spank15.mp3");
        sleep(20);
    }
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("Hurt it %Slave%!");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Spank15.mp3");
        sleep(20);
    }
    if(!getVar("AV_DommeMistress", false))
    {
        CMessage("Now 10 to those %Balls%");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Spank10.mp3");
        sleep(20);
    }
    CMessage("Now 10 to the top of that %Cock%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Belle10*.mp3");
    sleep(20);
    edge("%Edge%");
    edge("%Edge%");
    CMessage("Now attach 6 clothespins to your %Balls%");
    sleep(25);
    CMessage("and 2 to each nipple");
    sleep(20);
    CMessage("Do it now %Slave%!");
    sleep(20);
    if(getVar("av_fetish_rough", false) || getVar("AV_DommeMistress", false))
    {
        CMessage("Now hold your arms straight out to the outside of your body.");
    }
    if(getVar("av_fetish_rough", false) || getVar("AV_DommeMistress", false))
    {
        CMessage("Do not bend your elbows and do not let your arms drop.");
    }
    if(getVar("av_fetish_rough", false) || getVar("AV_DommeMistress", false))
    {
        CMessage("I think it\'s time I just let you stand there for a bit");
        sleep(15);
    }
    CMessage("Look at yourself.");
    if(getVar("av_fetish_humiliating", false))
    {
        CMessage("You\'re a such a pathetic %Slave%.");
    }
    edge("%Edge%");
    edge("%Edge%");
    edge("%Edge%");
    edge("%Edge%");
    CMessage(random("I need to violate you a bit more", "I don\'t care if it hurts", "my only goal is to violate every aspect of your body."));
    edge("%Edge%");
    edge("%Edge%");
    CMessage("Hurts, doesn\'t it %Slave%?!");
    sleep(20);
    DoEdges(8, 8, 0);
    CMessage("%ThatsEnough%");
    if(getVar("AV_MEM_Contact2", false) || getVar("AV_MEM_Contact3", false))
    {
        addContact(1);
    }
    if(getVar("AV_MEM_Contact2", false))
    {
        removeContact(3);
    }
    if(getVar("AV_MEM_Contact3", false))
    {
        removeContact(4);
    }
    delVar("AV_MEM_HurtMe");
	delVar("AV_MEM_CBT");
    return;
    
    AV_IntPain_Once();
}
function AV_IntPain_Once()
{
    delVar("AV_MEM_HurtMe");
	delVar("AV_MEM_CBT");
    return;
    
    P09();
}
function P09()
{
    if(getVar("AV_DommeMistress", false))
    {
        setVar("AV_Cane", random(25, 30));
    }
    if(getVar("AV_DommeMistress", false))
    {
        cane();
        return;
    }
    switch(random("Dm01", "Dm02", "Dm03"))
    {
        case "Dm01":
        Dm01();
        return;
        break;
        case "Dm02":
        Dm02();
        return;
        break;
        case "Dm03":
        Dm03();
        return;
        break;
    }
    Dm01();
}
function Dm01()
{
    CMessage("%domFriend1Name% really need to learn how to be more sadistic, so...");
    setVar("AV_Cane", getVar("%Random9%, 11", 0));
    CMessage("Let\'s call her");
    addContact(2);
    CMessage("%Hi% %domFriend1Name% ready for it?");
    SMessage("%Okay% %DomName%", -1, 2);
    CMessage("Just remember our early conversation");
    removeContact(1);
    cane();
    return;
    Dm02();
}
function Dm02()
{
    CMessage("%domFriend2Name% have a idea for how to hurt you...");
    setVar("AV_Cane", getVar("%Random20%, 26", 0));
    CMessage("Let\'s call her");
    addContact(3);
    CMessage("%Hi% %domFriend2Name% ready for it?");
    SMessage("%OfCourse% %DomName% Go take a break", -1, 3);
    removeContact(1);
    cane();
    return;
    Dm03();
}
function Dm03()
{
    CMessage("%domFriend3Name% will make you suffer");
    setVar("AV_Cane", getVar("%Random27%, 30", 0));
    CMessage("Let\'s call her");
    addContact(4);
    CMessage("%Hi% %domFriend3Name% ready for it?");
    SMessage("%OfCourse% %DomName% Go take a break", -1, 4);
    removeContact(1);
    cane();
    return;
    cane();
}
function cane()
{
    CMessage(random("Fetch some ", "Go get some ") + "rubber bands %SubName%");
    setTempVar("AV_IntPain_Once", true);
    let answer0 = getInput("Let me know when you\'re ready to continue");
    while (!(answer0.isLike("yes") || answer0.isLike("ready") || answer0.isLike("got") || answer0.isLike("have")))
    {
        answer0 = getInput("Ready?");
    }
    if (answer0.isLike("yes", "ready", "got", "have"))
    {
    }
    CMessage("I want you to put a rubber band around each of the following body parts:");
    CMessage("each " + random("upper arm", "forearm"));
    sleep(20);
    CMessage("each " + random("asscheek", "thigh", "calf"));
    sleep(20);
    CMessage("If it is too loose to stay on properly, double it up %Slave%!");
    if (randomInteger(1, 100) <= 40)
    {
        skip_kneeling();
        return;
    }
    if(!getVar("AV_SubKnees", false))
    {
        CMessage("%KneelForMe%");
    }
    let answer1 = getInput("Hands behind your back", 18);
    if (answer1.isTimeout())
    {
        hands_behind_back();
        return;
    }
    if (answer1.isLike("anything"))
    {
        CMessage("I said hands behind your back %SubName%");
    }
    else
    {
        CMessage("I said hands behind your back %SubName%");
    }
    CMessage("You really have it learn to listen to me");
    sleep(12);
    hands_behind_back();
	return;
}
function hands_behind_back()
{
    DoEdges(2, 3, 0);
    CMessage("I think you\'re ready for your punishment now");
    CMessage("you will stretch the rubber band and release it so it give you a fast, sharp bite.");
    skip_kneeling();
	return;
}
function skip_kneeling()
{
    if(getVar("AV_SubKnees", false))
    {
        CMessage("Get off your knees");
        delVar("AV_SubKnees");
        delVar("pvKneeling");
    }
    CMessage("I want you to bend over your chair, go get one if you need to");
    sleep(6);
    CMessage("Place your hands on the seat");
    CMessage("You will match every swish and crack of the cane you hear");
    CMessage("Each time you will hit alternately one of the rubber bands as hard as you can");
    CMessage("I want red stripes across your skin, %Name%");
    CMessage("And I want you to count them out loud");
    top_caning();
	return;
}
function top_caning()
{
    CMessage("Get ready...");
    sleep(8);
    setRapidText(true);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    setVar("PtheVCaneCount", 1);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) + 1);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) + 1);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) + 1);
    CMessage("%pthevCaningTaunts%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) + 1);
    CMessage("%pthevCaningTaunts%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) + 1);
    CMessage("%pthevCaningTaunts%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) + 1);
    CMessage("%pthevCaningTaunts%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) + 1);
    CMessage("%pthevCaningTaunts%");
    another_one();
	return;
}
function another_one()
{
	sleep(1);
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) + 1);
    if (getVar("PtheVCaneCount", 0) == getVar("AV_Cane", 0))
    {
        caning_done();
        return;
    }
    if (randomInteger(1, 100) <= 90)
    {
        another_one();
        return;
    }
    caning_done();
	return;
}
function caning_done()
{
    CMessage("That\'s enough, sit down");
    setRapidText(false);
    let answer0 = getInput("How many, %SubName%?");
    if (answer0.isLike("8", "eight"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 8);
    }
    else if (answer0.isLike("9", "nine"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 9);
    }
    else if (answer0.isLike("10", "ten"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 10);
    }
    else if (answer0.isLike("11", "eleven"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 11);
    }
    else if (answer0.isLike("12", "twelve"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 12);
    }
    else if (answer0.isLike("13", "thirteen"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 13);
    }
    else if (answer0.isLike("14", "fourteen"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 14);
    }
    else if (answer0.isLike("15", "fifteen"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 15);
    }
    else if (answer0.isLike("16", "sixteen"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 16);
    }
    else if (answer0.isLike("17", "seventeen"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 17);
    }
    else if (answer0.isLike("18", "eighteen"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 18);
    }
    else if (answer0.isLike("19", "nineteen"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 19);
    }
    else if (answer0.isLike("20", "twenty"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 20);
    }
    else if (answer0.isLike("21"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 21);
    }
    else if (answer0.isLike("22"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 22);
    }
    else if (answer0.isLike("23"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 23);
    }
    else if (answer0.isLike("24"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 24);
    }
    else if (answer0.isLike("25"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 25);
    }
    else if (answer0.isLike("26"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 26);
    }
    else if (answer0.isLike("27"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 27);
    }
    else if (answer0.isLike("28"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 28);
    }
    else if (answer0.isLike("29"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 29);
    }
    else if (answer0.isLike("30"))
    {
        setVar("PtheVCaneCount", getVar("PtheVCaneCount", 0) - 30);
    }
    else if (answer0.isLike("know", "count"))
    {
        wrong_number();
        return;
    } 
	if (getVar("PtheVCaneCount", 0) == 0)
    {
        right_number();
        return;
    }
    else
    {
        CMessage("Nope");
        wrong_number();
        return;
    }
    
    wrong_number();
	return;
}
function wrong_number()
{
    if(getVar("pthevPunish01NotAgain", false))
    {
        pthevPunish01NotAgain();
        return;
    }
    CMessage("I guess we\'re going to have to do that again");
    setTempVar("pthevPunish01NotAgain", true);
    CMessage("Get back into the position");
    setVar("PtheVCaneCount", 0);
    top_caning();
    return;
    right_number();
}
function right_number()
{
    CMessage("Good, then we can move on %Smile%");
    punishment_ending();
    return;
    return;
    pthevPunish01NotAgain();
}
function pthevPunish01NotAgain()
{
    CMessage("Wrong number again");
    CMessage("But I guess you\'ve learned your lesson, so let\'s move on");
    punishment_ending();
    return;
    return;
    punishment_ending();
}
function punishment_ending()
{
    addContact(1);
    removeContact(2);
    removeContact(3);
    removeContact(4);
    return;
    a28huj38dop();
}
function a28huj38dop()
{
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStroking();
    }
    if(getVar("AV_MEM_Crush", false))
    {
        setTempVar("AV_AltMetro", true);
    }
    if(getVar("AV_MEM_Crush", false))
    {
        run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AlternativeStroking.js");
        return;
    }
    if(getVar("AV_MEM_Contact1", false) || getVar("AV_MEM_Contact2", false) || getVar("AV_MEM_Contact3", false))
    {
        setTempVar("AV_AltMetro", true);
    }
    if(getVar("AV_MEM_Contact1", false) || getVar("AV_MEM_Contact2", false) || getVar("AV_MEM_Contact3", false))
    {
        run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AlternativeStroking.js");
        return;
    }
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
}