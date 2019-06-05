DMessage("DoAnalNight: start");
main();
DMessage("DoAnalNight: end");
function main()
{
    CMessage(random("Anal time!", "fuck time...for me %Lol%", "time to fuck your ass", "how about we put your ass to the test?", "I think it\'s time to give your ass hole some attention"));
    CMessage(random("Make sure you get that dildo nice and lubed ", "Now get your asspussy wet ", "Lube up your dildo and your butt ") + random("because you know where it is going next", "I want you to get that dildo in there", "and prepare to be fucked"));
    sleep(30);
    if (randomInteger(1, 100) <= 40)
    {
        pthevDildo();
        return;
    }
    CMessage(random("Stand and bend over the desk", "put your legs over the table...open it"));
    sleep(15);
    if(!getVar("AV_AshDone", false))
    {
        if (randomInteger(1, 100) <= 30)
        {
            AshAnal();
            return;
        }
    }
    if(getVar("AV_DommeMistress", false) && getVar("av_fetish_rough", false))
    {
		if (randomInteger(1, 100) <= 30)
        {
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
	stopAudio();
    CMessage("Stop for now");
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
	return;
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
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "commands" + java.io.File.separator + "Fuck*.mp3",true);
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
	return;
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
	return;
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
	return;
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
		stopAudio();
        CMessage("%stopstroking%", 0);
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
    delVar("av_55");
    delVar("av_75");
    delVar("av_Stroking");
    CMessage(random("You made me very happy ", "I\'m proud of you ", "We\'re just getting into a groove here ") + "%SubName% %EmoteHappy%");
    CMessage("You can remove everything, clean yourself and sit " + "...you have 1 minute to recover");
    sleep(60);
    return;
    AshAnal();
}
function AshAnal()
{
    CMessage("So, my other friend Ashley love pegging...");
    CMessage("So, now you are roleplay a strapon fucking with her");
    CMessage("Get ready");
    sleep(20);
    if(getVar("av_Ashanal02", false))
    {
        av_Ashanal02();
        return;
    }
    if(getVar("av_Ashanal01", false))
    {
        av_Ashanal01();
        return;
    }
    playVideo("Videos" + java.io.File.separator + "AshleyAlban" + java.io.File.separator + "Ash01.mp4");
    setVar("av_Ashanal01", true);
    End();
    return;
    av_Ashanal01();
}
function av_Ashanal01()
{
    playVideo("Videos" + java.io.File.separator + "AshleyAlban" + java.io.File.separator + "Ash02.mp4");
    setVar("av_Ashanal02", true);
    End();
    return;
    av_Ashanal02();
}
function av_Ashanal02()
{
    playVideo("Videos" + java.io.File.separator + "AshleyAlban" + java.io.File.separator + "Ash03.mp4");
    setVar("AV_AshDone", true);
    End();
    return;
    return;
    
    
    
    pthevDildo();
}
function pthevDildo()
{
    if(getVar("pthevPlugged", false))
    {
        run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_PlugOut.js");
    }
    if(getVar("pvCFAA1", false))
    {
        pvCFAA1();
        return;
    }
    if(getVar("pvCFAB1", false))
    {
        pvCFAB1();
        return;
    }
    if(getVar("pvCFAC1", false))
    {
        pvCFAC1();
        return;
    }
    switch(random("d_one", "d_two", "d_three"))
    {
        case "d_one":
        d_one();
        return;
        break;
        case "d_two":
        d_two();
        return;
        break;
        case "d_three":
        d_three();
        return;
        break;
    }
    pvCFAA1();
}
function pvCFAA1()
{
    if(getVar("pvCFAB2", false))
    {
        delVar("pvCFAA1");
        setVar("pvCFAA2", true);
        delVar("pvCFAB2");
        d_three();
        return;
    }
    if(getVar("pvCFAC2", false))
    {
        delVar("pvCFAA1");
        setVar("pvCFAA2", true);
        delVar("pvCFAC2");
        d_two();
        return;
    }
    delVar("pvCFAA1");
    setVar("pvCFAA2", true);
    switch(random("d_two", "d_three"))
    {
        case "d_two":
        d_two();
        return;
        break;
        case "d_three":
        d_three();
        return;
        break;
    }
    pvCFAB1();
}
function pvCFAB1()
{
    if(getVar("pvCFAA2", false))
    {
        delVar("pvCFAB1");
        setVar("pvCFAB2", true);
        delVar("pvCFAA2");
        d_three();
        return;
    }
    if(getVar("pvCFAC2", false))
    {
        delVar("pvCFAB1");
        setVar("pvCFAB2", true);
        delVar("pvCFAC2");
        d_one();
        return;
    }
    delVar("pvCFAB1");
    setVar("pvCFAB2", true);
    switch(random("d_one", "d_three"))
    {
        case "d_one":
        d_one();
        return;
        break;
        case "d_three":
        d_three();
        return;
        break;
    }
    pvCFAC1();
}
function pvCFAC1()
{
    if(getVar("pvCFAA2", false))
    {
        delVar("pvCFAC1");
        setVar("pvCFAC2", true);
        delVar("pvCFAA2");
        d_two();
        return;
    }
    if(getVar("pvCFAB2", false))
    {
        delVar("pvCFAC1");
        setVar("pvCFAC2", true);
        delVar("pvCFAB2");
        d_one();
        return;
    }
    delVar("pvCFAC1");
    setVar("pvCFAC2", true);
    switch(random("d_one", "d_two"))
    {
        case "d_one":
        d_one();
        return;
        break;
        case "d_two":
        d_two();
        return;
        break;
    }
    d_one();
}
function d_one()
{
    CMessage("You know, %Name%");
    setVar("pvCFAA1", true);
    CMessage("It\'s a good thing I\'m not there in the room with you");
    CMessage("I mean, we\'re not going have sex");
    CMessage("And what am I going to do, watch you %JerkOff%...?");
    CMessage("I don\'t think so %Laugh%");
    CMessage("But there is one thing I\'d want to do to you in person");
    CMessage("I\'d love to have you on all fours on my floor");
    CMessage("Walk up behind you with my strapon...");
    CMessage("And thrust that big black cock <i>deep</i> into your ass");
    CMessage("But you\'re not here on the floor with me");
    CMessage("So what can we do...");
    CMessage("Get on all fours, %PetName%");
    CMessage("Give your ass a nice smack");
    CMessage("I would smack the hell out of it if I were there %Laugh%");
    CMessage("Now stick that dildo in it");
    CMessage("Push it in deeper, %SubName%");
    CMessage("As deep as you can...");
    CMessage("Now leave it there, put both your hands on the floor");
    sleep(9);
    CMessage("So, there you are");
    CMessage("My little strapon bitch %Smile%");
    CMessage("You\'re lucky that\'s not really my strapon, %PetName%");
    CMessage("I would wear you out");
    CMessage("You\'re going to have to do that yourself now...");
    CMessage("So take that dildo, pull it up");
    CMessage("And give me 5 deep thrusts");
    CMessage("Wait a second though, I will count them for you %EmoteWink%");
    CMessage("Get ready...");
    sleep(5);
    CMessage("1");
    CMessage("2");
    CMessage("3");
    CMessage("4");
    CMessage("5 and don\'t pull it back out");
    CMessage("Slap your ass");
    CMessage("Get ready for another 5 thrusts...");
    sleep(5);
    CMessage("1");
    CMessage("2");
    CMessage("3");
    CMessage("4");
    CMessage("5");
    CMessage("Leave the dildo in your ass, %PetName%");
    CMessage("Now take that %Cock% in your hand");
    edge("And edge for me");
    CMessage("Four to the floor, %PetName%");
    sleep(randomInt(8, 15));
    CMessage("I want 5 more deep thrusts from you, so get ready");
    CMessage("1");
    sleep(5);
    CMessage("2");
    sleep(3);
    CMessage("3");
    CMessage("4");
    CMessage("5");
    CMessage("And take that cock out of your ass, %Name%");
    CMessage("Get up off your knees");
    CMessage("That\'s enough of that for now, put the dildo away");
    let answer0 = getInput("Do you need a moment?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Do you need a minute to get ready?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Okay, no problem");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Good!");
        then_move_on();
        return;
    }
    let answer1 = getInput("Let me know when you\'re ready");
    while (!(answer1.isLike("ready") || answer1.isLike("yes") || answer1.isLike("done") || answer1.isLike("continue")))
    {
        answer1 = getInput("Ready?");
    }
    if (answer1.isLike("ready", "yes", "done", "continue"))
    {
        CMessage("Alright");
    }
    then_move_on();
	return;
}
function then_move_on()
{
    CMessage("Let\'s move on then %Smile%");
    return;
    
    d_two();
}
function d_two()
{
    CMessage("Sit back and lift your legs for me");
    CMessage("Show me your ass, %Name%");
    CMessage("Rub it for me, get that ass ready for my big strapon %Grin%");
    //--UNINTERPRETED LINE:@ImageTag(Strapon) 
	CMessage("%EmoteMoan% Strapons are <i>so</i> sexy");
	showTaggedImage(4,["dildo"]);
    CMessage("I\'d much prefer to fuck you myself, %Name%");
    CMessage("Looking you in the eyes as I penetrate you deeper and deeper");
    CMessage("But you\'re going to have to do it yourself");
    let answer0 = getInput("Is your ass ready for it?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Then let\'s get to it");
        ass_is_ready_for_it_now();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You can keep rubbing a little bit longer");
    }
    CMessage("Put some lube on it, massage it");
    CMessage("Stick a finger in your ass, %Name%");
    CMessage("Deeper...");
    CMessage("Maybe try 2 fingers %Smile%");
    //--Command:Tag(AnalSex)
	showTaggedImage(4,["anal"]);
    CMessage("You can\'t tell me this isn\'t " + random("hot", "sexy"));
    CMessage("Your ass should be ready now");
    CMessage("So...");
    ass_is_ready_for_it_now();
	return;
}
function ass_is_ready_for_it_now()
{
    CMessage("Slide that dildo into your ass, %SubName%");
    is_it_in();
	return;
}
function is_it_in()
{
    let answer0 = getInput("Is it in?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Feel how it fills you up");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Oh...");
        are_you_going_to_do_it();
        return;
    }
    CMessage("Start fucking yourself with it slowly");
    CMessage("One thrust every 5 seconds or so");
    sleep(12);
    CMessage("Keep " + random("that pace ", "going ", "doing it just like that ") + "%PetName%");
    CMessage(random("Speed up a little bit ", "A little faster now ") + "one thrust every 3 seconds");
    sleep(10);
    CMessage("Play with your %Balls%");
    CMessage("Fuck yourself as fast as you can now");
    CMessage("Come on, give me a good show, %PetName%");
    //--Command:ImageTag(AnalSex)
	showTaggedImage(4,["anal"]);
    CMessage("%EmoteMoan%");
    //--Command:ImageTag(AnalSex)
	showTaggedImage(4,["anal"]);
    //--Command:ImageTag(AnalSex)
	showTaggedImage(4,["anal"]);
    another_tagged_image();
	return;
}
function another_tagged_image()
{
    //--Command:ImageTag(AnalSex)
	showTaggedImage(4,["anal"]);
    if (randomInteger(1, 100) <= 75)
    {
        another_tagged_image();
        return;
    }
    let answer0 = getInput("Do you want to be a good %PetName% for me?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Of course you do %Grin%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("No?");
        not_a_good_pet();
        return;
    }
    CMessage("So grab that %Cock%");
    CMessage("And while you keep fucking that ass...");
    edge("%Edge%");
    CMessage("Good %PetName%");
    take_the_dildo_out_good_or_bad();
    return;
    not_a_good_pet();
}
function not_a_good_pet()
{
    CMessage("Then you need to be punished, %SubName%");
    //run("CBT" + java.io.File.separator + "*.js");
	cbt();
    take_the_dildo_out_good_or_bad();
	return;
}
function take_the_dildo_out_good_or_bad()
{
    CMessage("Take that dildo out of your ass");
    CMessage("That was pretty " + random("hot", "sexy"));
    CMessage("Put away the dildo now, we\'re done with it for now");
    return;
    are_you_going_to_do_it();
}
function are_you_going_to_do_it()
{
    let answer0 = getInput("Are you going to do it?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Then do it, %PetName%");
        increaseAnger(3)
        is_it_in();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Ah...");
        increaseAnger(3)
    }
    CMessage("So you just let me sit here giving instructions you\'re never going to follow...");
    increaseAnger(3)
    let answer1 = getInput("Do you think I\'m stupid, %PetName%?");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("%YesOrNo%");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("Fuck you, %Name%");
        //--Command:MoodWorst
		setMood("worst");
        setTempVar("pvDommeAngryEnd", true);
        //run("Stroke" + java.io.File.separator + "End" + java.io.File.separator + "pthev_Endscript.js");
		endSession();
        return;
    }
    else if (answer1.isLike("no"))
    {
        CMessage("Then don\'t treat me like I am");
    }
    let answer2 = getInput("So are you still into anal stuff, yes or no?");
    while (!(answer2.isLike("yes") || answer2.isLike("no")))
    {
        answer2 = getInput("%YesOrNo%");
    }
    if (answer2.isLike("yes"))
    {
        CMessage("Alright");
        still_into_anal_stuff();
        return;
    }
    else if (answer2.isLike("no"))
    {
        CMessage("Then why didn\'t you say so earlier %EmoteFlustered%");
    }
	delVar("pthevAnal");
    CMessage("Communication is very important, %PetName%");
    CMessage("So let me communicate this to you...");
    run("Interrupt" + java.io.File.separator + "pvInt_Punishment.js");
    return;
    still_into_anal_stuff();
}
function still_into_anal_stuff()
{
    CMessage("Some other time then...");
    CMessage("Still, I\'m not letting you off so easy, %PetName%");
    run("Interrupt" + java.io.File.separator + "pvInt_Punishment.js");
    return;
    
    d_three();
}
function d_three()
{
    CMessage("Lean back so I have better access to your ass");
    CMessage("%PetName%...");
    CMessage("Shove that cock into your ass for me");
    CMessage("Don\'t do anything yet, just put it in");
    let answer0 = getInput("Can you push it a little deeper?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Then push it deeper, %Name% %Smile%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Just try to gently push it deeper, %Name% %Smile%");
    }
    CMessage("Until you think it can\'t go any deeper");
    CMessage("And now...");
    CMessage("Pull it all the way out very slowly");
    sleep(8);
    CMessage("%EmoteMoan% That is " + random("hot", "sexy", "amazing", "incredible"));
    CMessage("Let\'s do that again");
    CMessage("Push it in as deep as you can");
    CMessage("Until it starts to feel slightly uncomfortable");
    CMessage("Or until it\'s all the way in %EmoteWink%");
    let answer1 = getInput("Is your %Cock% still hard, %Name%?");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("%YesOrNo%");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("%Grin%");
    }
    else if (answer1.isLike("no"))
    {
        CMessage("Aww it can\'t stay up %Giggles%");
    }
    CMessage("%StartStroking%");
    CMessage("Slowly pull out the dildo while you stroke");
    CMessage("And when it\'s all the way out...");
    CMessage("Shove it back in");
    run("CBT" + java.io.File.separator + "CBTCock_First.js");
	cbt("cock");
    edge("%Edge%");
    CMessage("And pull the dildo out again");
    CMessage("I love it when you fuck yourself and edge at the same time %Smile%");
    CMessage("Having control over your %Cock% and your ass at the same time...");
    CMessage("That just made me <i>so</i> fucking wet, %SubName%");
    CMessage("I think I\'ll be typing with one hand from now on %Laugh%");
    CMessage("We\'re going to have to do that again soon...");
    CMessage("But for now I have something else in mind");
    CMessage("So put the dildo away, %Name%");
    return;
    dildo_not_possible();
}
function dildo_not_possible()
{
    let answer0 = getInput("You do have a dildo, right?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Then make sure you can use it... %EmoteFlustered%");
        make_sure_you_do();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("I thought you did...");
        delVar("pthevDildo");
    }
    CMessage("So, are you still into anal play?");
    let answer1 = getInput("Are you still into anal play?");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("%YesOrNo%");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("You should probably get yourself a dildo then %Smile%");
    }
    else if (answer1.isLike("no"))
    {
        CMessage("Oh... well, that\'s okay %SubName%");
        delVar("pthevAnal");
        setVar("pthevNoAnal", true);
    }
    CMessage("Now where were we...");
    return;
    make_sure_you_do();
}
function make_sure_you_do()
{
    let answer0 = getInput("Are you still into anal play?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Good %EmoteHappy%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Oh... well, that\'s okay %SubName%");
        delVar("pthevAnal");
        setVar("pthevNoAnal", true);
    }
    CMessage("Now where were we...");
    return;
    
}