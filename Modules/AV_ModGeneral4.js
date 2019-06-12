DMessage("AV_ModGeneral4: start");
main();
DMessage("AV_ModGeneral4: end");
function main()
{
    if(getVar("AV_ModGeneral4_NotFirstTime", false))
    {
        AV_ModGeneral4_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral4", 0);
    setVar("AV_ModGeneral4_NotFirstTime", true);
    AV_ModGeneral4_NotFirstTime();
}
function AV_ModGeneral4_NotFirstTime()
{
    if (getVar("AV_ModGeneral4", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral4", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral4", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral4", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral4", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral4", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral4", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral4", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral4", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral4", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral4", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral4", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral4", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral4", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral4", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral4", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral4", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral4", getVar("AV_ModGeneral4", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral4", getVar("AV_ModGeneral4", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral4", getVar("AV_ModGeneral4", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral4", getVar("AV_ModGeneral4", 0) + 1000);
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
    setVar("AV_ModGeneral4", 0);
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
    if(getVar("AV_DommeMistress", false))
    {
        AV_DommeMistress();
        return;
    }
    CMessage("What I want is a slave, a toy that I can play with, someone who will do ANYTHING I demand");
    CMessage("I may have something a little different planned for you");
    let answer0 = getInput("You need to make a decision do you want to commit to being my slave today?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Ok, I am glad you have agreed");
        setTempVar("AV_DommeMistress", true);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You don\'t?");
        skip2();
        return;
    }
    AV_DommeMistress();
}
function AV_DommeMistress()
{
    CMessage("I want you to put clothes pins 1 on each nipple.");
    CMessage("Then Tie your ball\'s up with Rubber-bands 2 oh maybe 3?");
    CMessage("After that you will attach 2 pins to each side of your ball\'s");
    CMessage("Pinched ball\'s and enjoy rubbing them feel how tight they are.");
    CMessage("And grab an ice cube %EmoteWink%");
    let answer0 = getInput("Tell me when you are done.");
    while (!(answer0.isLike("yes") || answer0.isLike("ready") || answer0.isLike("done") || answer0.isLike("no")))
    {
        answer0 = getInput("I don\'t care about your vague answers! Slap your cock 2 times!");
    }
    if (answer0.isLike("yes", "ready", "done"))
    {
        CMessage("Alright %Grin%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Well you should be if you are back on your computer... Slap your cock 5 times and then hurry up");
    }
    CMessage("%KneelForMe%, Spread legs apart stroke around them pins");
    CMessage("Up and down on the shaft 100 strokes, flick that swelled head!");
    CMessage("Enjoy all that %Stroking% the tender jerks!");
    CMessage("As you feel your nipples burn!");
    sleep(10);
    CMessage("Do try to pleasure your %Cock%!");
    CMessage("Orgasm\'s are not allowed right now.");
    //run("Custom" + java.io.File.separator + "Tasks" + java.io.File.separator + "AV_StrokeNumber.js");
	customTask("AV_StrokeNumber");
    CMessage("Since your so desperate");
    CMessage("Get an Ice Cube push it up in your ass far!");
    CMessage("That\'s it you want to please me so I can see your cum right?");
    CMessage("Way Up deep in your ass for Mistress now!");
    let answer1 = getInput("Tell me when you are done.");
    while (!(answer1.isLike("yes") || answer1.isLike("ready") || answer1.isLike("done") || answer1.isLike("no")))
    {
        answer1 = getInput("I don\'t care about your vague answers! Slap your cock 2 times!");
    }
    if (answer1.isLike("yes", "ready", "done"))
    {
        CMessage("Alright %Grin%");
    }
    else if (answer1.isLike("no"))
    {
        CMessage("Well you should be if you are back on your computer... Slap your cock 5 times and then hurry up");
    }
    CMessage((java.lang.Math.round(randomInt(50, 100) / 10.0) * 10) + "strokes to your shaft, no cum sorry, enjoy the strokes!");
    sleep(15);
    CMessage("Hold it inside.");
    sleep(15);
    CMessage("That is so hot keep in in there bending over whip your ass");
    CMessage("20 on the left cheek, 20 on the right cheek.");
    CMessage("Look at me and whip it.");
    sleep(10);
    CMessage("Tug at your cock lightly " + (java.lang.Math.round(randomInt(10, 30) / 10.0) * 10) + "times. Oh No cumming but you can feel it.");
    sleep(15);
    CMessage("I\'m sure your not fit for any woman your done after.");
    CMessage("%Stroking% only for a Mistress obeying every instruction.");
    CMessage("Keeping that wet ass full too.");
    CMessage("Wow what a good slave I think you still got something on the floor");
    CMessage("%Edge%");
	startEdging();
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%");
    CMessage("Pull 1 pin off your nipple!");
    CMessage("No cum no way.");
    sleep(10);
    CMessage("Rest 30 seconds...");
    sleep(15);
    CMessage("%Edge%");
    startEdging();
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%");
    CMessage("Pull the other pin off your 2nd nipple.");
    CMessage("Perfect denied by pain!");
    CMessage("Oh Slave you were so close..");
    CMessage("I wonder how close?");
    if(getVar("av_fetish_cei", false))
    {
        CMessage("Take that finger taste that precum from your tip.");
    }
    if(getVar("av_fetish_cei", false))
    {
        CMessage("Again tasting more do it eat that filthy precum.");
    }
    CMessage("All you think about is blowing that load.");
    if (randomInteger(1, 100) <= 50)
    {
        AVRND05();
        return;
    }
    CMessage("%Edge%");
    startEdging();
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%");
    CMessage("Pull 1 pin off your %Balls%!");
    if (randomInteger(1, 100) <= 60)
    {
        AVRND05();
        return;
    }
    CMessage("%Edge%");
    startEdging();
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%");
    CMessage("Pull 1 pin off your %Balls%!");
    AVRND05();
}
function AVRND05()
{
    CMessage("Take off all pins from your ball\'s.");
    CMessage("Now bounce your sore ball\'s up and down");
    CMessage("Am I finished?");
    CMessage("I guess I can let you wank do it till your getting to the edge.");
    CMessage("I know it\'s so difficult to get fully hard after abusing yourself.");
    CMessage("That\'s ok no choice stroke right till you feel that edge...");
    CMessage("%Edge%");
    startEdging();
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%");
    CMessage("Your going to do it beg I love to hear your cumless cries");
    CMessage("%SitDown%");
    return;
    skip2();
}
function skip2()
{
    if (randomInteger(1, 100) <= 50)
    {
        Brava();
        return;
    }
    skip();
    return;
    Brava();
}
function Brava()
{
    increaseAnger(3)
    return;
    skip();
}
function skip()
{
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
    CMessage("Remember when I talked about the level of ache I want you to feel?");
    CMessage("The thing is...");
    CMessage("It takes more than " + random("waving a sexy picture in front of your face", "my teasing little words worming their way into your ear while you stroke"));
    CMessage("No");
    CMessage("In order to get to the level of ache I want");
    CMessage("You\'re %Gonna% have to spend a little time on the edge %PetName% %Grin%");
    if(getVar("AV_DommeMistress", false))
    {
        if (randomInteger(1, 100) <= 50)
        {
            AVRND10();
            return;
        }
    }
    if(getVar("AV_DommeMistress", false))
    {
        CMessage("But first,");
        //run("CBT" + java.io.File.separator + "*.js");
		cbt();
    }
    AVRND10();
}
function AVRND10()
{
    CMessage("Edge for me right now");
    startEdging();
	CMessage("%stopstroking%", 0);
    CMessage("%LetTheEdgeFade%");
    CMessage("Stopping like that when you're so close");
    CMessage("Is enough to make a ruined orgasm feel three times as worse as it would have");
    CMessage("So you can imagine how much worse it\'s %Gonna% feel");
    CMessage("After I make you edge again %Grin%");
    CMessage("Get to the edge right now");
    startEdging();
	CMessage("%stopstroking%", 0);
    CMessage("%LetTheEdgeFade%");
    CMessage("%EmoteMoan%");
    CMessage("Starting and stopping like that");
    CMessage("It\'s just so frustrating I know %EmoteHappy%");
    CMessage("So when I make you edge again for me in a second");
    CMessage("I won't make you stop");
    CMessage("I\'ll just make you hold it this time %Grin%");
    //CMessage("Edge");
    //startEdging();
    holdEdge();
    //CMessage("%LetTheEdgeFade%");
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
    run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_GlittersTest.js");
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
    CMessage("Time for some edging practice.");
    CMessage("This is about edging you into a frenzy.");
    CMessage("You\'re going to love it.");
    CMessage("%Edge%");
	setTempVar("edging", true);
    setTempVar("holdingedge", false);
	setEdgeMode("Goto", "hit()");
	//startEdge();
    //startEdging();
	//CMessage("%stopstrokingedge%", null, false);
	//CMessage("%lettheedgefade%");
    CMessage("Probably you won\'t this time, but don\'t worry, you\'ll have plenty of opportunities.");
    //sleep(20);
	for(var i=0;i<20;i++){
		sleep(990,"MILLISECONDS" );
	}
	if(isEdging() ){
		hit();
	}
    CMessage("Time will go by fast, don\'t worry.");
    //sleep(20);
	for(var i=0;i<20;i++){
		sleep(990,"MILLISECONDS" );
	}
    CMessage("%Edge%");
    setTempVar("edging", true);
    setTempVar("holdingedge", false);
    CMessage("You know what I love more than anything? Frustrating you into a sexual frenzy.");
    //sleep(10);
	for(var i=0;i<10;i++){
		sleep(990,"MILLISECONDS" );
	}
    CMessage("When the frustration is so intense it\'s all you can think about. That\'s just pure fun.");
    //sleep(9);
	for(var i=0;i<9;i++){
		sleep(990,"MILLISECONDS" );
	}
    //CMessage("%stopstroking%", 0);
	if(isEdging() ){
		hit();
	}
    CMessage("That %Great% state when you are so focused on your %Cock%.");
    //sleep(10);
	for(var i=0;i<10;i++){
		sleep(990,"MILLISECONDS" );
	}
    CMessage("On what you are feeling in that moment.");
    //sleep(9);
	for(var i=0;i<9;i++){
		sleep(990,"MILLISECONDS" );
	}
    CMessage("%Edge%");
    setTempVar("edging", true);
    setTempVar("holdingedge", false);
    CMessage("The world fades away. All that matters to you is that feeling.");
    //sleep(10);
	for(var i=0;i<10;i++){
		sleep(990,"MILLISECONDS" );
	}
    CMessage("The %Great% feeling of sexual frustration that you crave so much.");
    //sleep(7);
	for(var i=0;i<7;i++){
		sleep(990,"MILLISECONDS" );
	}
    //CMessage("%stopstroking%", 0);
	if(isEdging() ){
		hit();
	}
    CMessage("I\'m happy to give you that feeling.");
    //sleep(7);
	for(var i=0;i<7;i++){
		sleep(990,"MILLISECONDS" );
	}
    CMessage("You %Love% being frustrated and that\'s perfect, because I %Love% frustrating you.");
    //sleep(10);
	for(var i=0;i<10;i++){
		sleep(990,"MILLISECONDS" );
	}
    CMessage("%Edge%");
	setTempVar("edging", true);
    setTempVar("holdingedge", false);
    CMessage("So that\'s what we are going to do.");
    //sleep(5);
	for(var i=0;i<5;i++){
		sleep(990,"MILLISECONDS" );
	}
    CMessage("We are going to frustrate you and frustrate you and frustrate you.");
    //sleep(5);
	for(var i=0;i<5;i++){
		sleep(990,"MILLISECONDS" );
	}
    CMessage("Just talking about it makes you %Horny% doesn\'t it. Me to.");
    //sleep(6);
	for(var i=0;i<6;i++){
		sleep(990,"MILLISECONDS" );
	}
    //CMessage("%stopstroking%", 0);
	if(isEdging() ){
		hit();
	}
    CMessage("So let's try to maximize the frustration today. Edge and stop and edge and stop.");
    //sleep(10);
	for(var i=0;i<10;i++){
		sleep(990,"MILLISECONDS" );
	}
    CMessage("This time is going to be a little different than before.");
    //sleep(6);
	for(var i=0;i<6;i++){
		sleep(990,"MILLISECONDS" );
	}
    CMessage("%Edge%");
	setTempVar("edging", true);
    setTempVar("holdingedge", false);
    CMessage("We are going to get you into a state of pure sexual frustration.");
    //sleep(10);
	for(var i=0;i<10;i++){
		sleep(990,"MILLISECONDS" );
	}
    CMessage("It\'s going to feel so amazing.");
    //sleep(5);
	for(var i=0;i<5;i++){
		sleep(990,"MILLISECONDS" );
	}
    //CMessage("%stopstroking%", 0);
	if(isEdging() ){
		hit();
	}
    CMessage("That sounds %Great% doesn\'t it. It is. You are going to love it.");
    //sleep(15);
	for(var i=0;i<15;i++){
		sleep(990,"MILLISECONDS" );
	}
    CMessage("%Edge%");
	setTempVar("edging", true);
    setTempVar("holdingedge", false);
    CMessage("Do you like %Stroking% for me? I like when you %Stroke% for me to.");
    //sleep(7);
	for(var i=0;i<7;i++){
		sleep(990,"MILLISECONDS" );
	}
    CMessage("But you know what I also like?");
    //sleep(7);
	for(var i=0;i<7;i++){
		sleep(990,"MILLISECONDS" );
	}
    //CMessage("%stopstroking%", 0);
	if(isEdging() ){
		hit();
	}
    CMessage("I like making you stop. Just sit there waiting to %Stroke% again.");
    //sleep(14);
	for(var i=0;i<14;i++){
		sleep(990,"MILLISECONDS" );
	}
    CMessage("%Edge%");
	setTempVar("edging", true);
    setTempVar("holdingedge", false);
    CMessage("You can %Feel% that orgasm almost there. It\'s %Great% isn\'t it?");
    //sleep(13);
	for(var i=0;i<13;i++){
		sleep(990,"MILLISECONDS" );
	}
    //CMessage("%stopstroking%", 0);
	if(isEdging() ){
		hit();
	}
    CMessage("What\'s the matter? Don\'t you like this part? Sure you do. %RelaxAndBreathe%");
    //sleep(13);
	for(var i=0;i<13;i++){
		sleep(990,"MILLISECONDS" );
	}
    CMessage("%Edge%");
	setTempVar("edging", true);
    setTempVar("holdingedge", false);
    CMessage("Oooo you\'re really starting to get there now aren\'t you.");
    //sleep(6);
	for(var i=0;i<6;i++){
		sleep(990,"MILLISECONDS" );
	}
    CMessage("%Feel% that approaching orgasm. So good. So close.");
    //sleep(6);
	for(var i=0;i<6;i++){
		sleep(990,"MILLISECONDS" );
	}
    //CMessage("%stopstroking%", 0);
	if(isEdging() ){
		hit();
	}
    CMessage("Does your %Cock% twitch a little when you stop? ");
    //sleep(6);
	for(var i=0;i<6;i++){
		sleep(990,"MILLISECONDS" );
	}
    CMessage("It hasn\'t been very long yet. This should be easy.");
    //sleep(6);
	for(var i=0;i<6;i++){
		sleep(990,"MILLISECONDS" );
	}
    CMessage("%Edge%");
	setTempVar("edging", true);
    setTempVar("holdingedge", false);
    CMessage("This is just the warm-up. Go stop. Go stop. So much fun.");
    //sleep(6);
	for(var i=0;i<6;i++){
		sleep(990,"MILLISECONDS" );
	}
    CMessage("Don\'t you just %Love% it? I know I do.");
    //sleep(5);
	for(var i=0;i<5;i++){
		sleep(990,"MILLISECONDS" );
	}
    //CMessage("%stopstroking%", 0);
	if(isEdging() ){
		hit();
	}
    CMessage("Relax. Recharge. Get ready for another sprint to the edge.");
    //sleep(11);
	for(var i=0;i<11;i++){
		sleep(990,"MILLISECONDS" );
	}
    CMessage("%Edge%");
	setTempVar("edging", true);
    setTempVar("holdingedge", false);
    CMessage("You're so %Submissive% . Doing everything I tell you to; when I tell you.");
	//sleep(5);
	for(var i=0;i<5;i++){
		sleep(990,"MILLISECONDS" );
	}
    CMessage("That\'s good. You enjoy it. Enjoy knowing how good your %Obedience% makes me feel.");
    //sleep(5);
	for(var i=0;i<5;i++){
		sleep(990,"MILLISECONDS" );
	}
    //CMessage("%stopstroking%", 0);
	if(isEdging() ){
		hit();
	}
    CMessage("I tell you to stop and you stop.");
    CMessage("You want to keep going I know, but you want to %Please% me more.");
    //sleep(5);
	for(var i=0;i<5;i++){
		sleep(990,"MILLISECONDS" );
	}
    CMessage("To %Please% me you need to do exactly what I say.");
    //sleep(5);
	for(var i=0;i<5;i++){
		sleep(990,"MILLISECONDS" );
	}
    CMessage("%Edge%");
	setTempVar("edging", true);
    setTempVar("holdingedge", false);
    CMessage("You are getting to the edge faster and faster.");
    //sleep(9);
	for(var i=0;i<9;i++){
		sleep(990,"MILLISECONDS" );
	}
    //CMessage("%stopstroking%", 0);
	if(isEdging() ){
		hit();
	}
    CMessage("Just a little break. These stops take almost no time at all.");
    //sleep(9);
	for(var i=0;i<9;i++){
		sleep(990,"MILLISECONDS" );
	}
    CMessage("%Edge%");
	setTempVar("edging", true);
    setTempVar("holdingedge", false);
    CMessage("You don\'t need to CUM anyways. This is better than cumming.");
    //sleep(5);
	for(var i=0;i<5;i++){
		sleep(990,"MILLISECONDS" );
	}
    CMessage("This is way more fun for both of us.");
    //sleep(3);
	for(var i=0;i<3;i++){
		sleep(990,"MILLISECONDS" );
	}
    //CMessage("%stopstroking%", 0);
	if(isEdging() ){
		hit();
	}
    CMessage("If you\'re really good you might get to CUM at the end.");
    //sleep(8);
	for(var i=0;i<8;i++){
		sleep(990,"MILLISECONDS" );
	}
    CMessage("%Edge%");
	setTempVar("edging", true);
    setTempVar("holdingedge", false);
    CMessage("Could you go through all this and then stop and put your %Cock% back in your pants?");
    //sleep(7);
	for(var i=0;i<7;i++){
		sleep(990,"MILLISECONDS" );
	}
    //CMessage("%stopstroking%", 0);
	if(isEdging() ){
		hit();
	}
    CMessage("If that\'s what I tell you to do, then you\'d better do it.");
    //sleep(7);
	for(var i=0;i<7;i++){
		sleep(990,"MILLISECONDS" );
	}
    CMessage("%Edge%");
	setTempVar("edging", true);
    setTempVar("holdingedge", false);
    CMessage("How are those edges coming? Feels so great right?");
    //sleep(6);
	for(var i=0;i<6;i++){
		sleep(990,"MILLISECONDS" );
	}
    //CMessage("%stopstroking%", 0);
	if(isEdging() ){
		hit();
	}
    CMessage("Edge, stop, edge, stop. You must be in heaven.");
    //sleep(6);
	for(var i=0;i<6;i++){
		sleep(990,"MILLISECONDS" );
	}
    CMessage("%Edge% Five seconds now!");
	setTempVar("edging", true);
    setTempVar("holdingedge", false);
    //sleep(5);
	for(var i=0;i<5;i++){
		sleep(990,"MILLISECONDS" );
	}
    //CMessage("%stopstroking% %Crazy% fast right?", 0);
	if(isEdging() ){
		hit();
	}
    //sleep(5);
	for(var i=0;i<5;i++){
		sleep(990,"MILLISECONDS" );
	}
    CMessage("%Edge% Can you take it?");
	setTempVar("edging", true);
    setTempVar("holdingedge", false);
    //CMessage("%stopstroking%", 0);
	if(isEdging() ){
		hit();
	}
    CMessage("%Edge% So close now!");
	startEdging();
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%");
    sleep(5);
    CMessage("%ThatsEnough%");
	setEdgeMode("Normal");
    return;
}

function hit(){
	CMessage("%stopstrokingedge%", null, false);
	setTempVar("edging", false);
    setTempVar("holdingedge", false);
	return;
}