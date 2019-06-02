DMessage("AV_ModGeneral47: start");
main();
DMessage("AV_ModGeneral47: end");
function main()
{
    if(getVar("AV_ModGeneral47_NotFirstTime", false))
    {
        AV_ModGeneral47_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral47", 0);
    setVar("AV_ModGeneral47_NotFirstTime", true);
    AV_ModGeneral47_NotFirstTime();
}
function AV_ModGeneral47_NotFirstTime()
{
    if (getVar("AV_ModGeneral47", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral47", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral47", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral47", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral47", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral47", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral47", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral47", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral47", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral47", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral47", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral47", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral47", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral47", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral47", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral47", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral47", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral47", getVar("AV_ModGeneral47", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral47", getVar("AV_ModGeneral47", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral47", getVar("AV_ModGeneral47", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral47", getVar("AV_ModGeneral47", 0) + 1000);
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
    setVar("AV_ModGeneral47", 0);
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    
    Modulo1();
}
function Modulo1()
{
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    
    Modulo2();
}
function Modulo2()
{
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    
    Modulo3();
}
function Modulo3()
{
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStroking();
    }
    CMessage("Who doesn\'t love a good let down?");
    CMessage("I get you all hot and bothered while torturing you");
    CMessage("with the reality that I\'m probably not letting you cum.");
    CMessage("Every single bit of arousal you receive");
    CMessage("will be torture in the end.");
    CMessage("It\'s my favorite way to control you, knowing there is no happy ending.");
    //CMessage("%StartStroking%");
	Stroking();
    CMessage("I\'m just so happy to be with you when you are like this.");
    CMessage("I love it when your mind is open to suggestion.");
    CMessage("Open to my words. It makes me so happy.");
    CMessage("And you\'ve been such a good boy for me.");
    CMessage("You\'ve followed all of my commands and have been so responsive to my words.");
    CMessage("But I don\'t want you to get too excited too fast.");
    CMessage("After all, this would be no fun if it didn\'t last.");
    CMessage("I want to spend as much time as possible with you");
    CMessage("and you want to spend as much time as possible with me.");
    CMessage("I am the one who is guiding you.");
    CMessage("%stopstroking%", 0);
	stopStroking();
    CMessage("Now, I\'m going to give your body some commands. I hope you\'re ready...");
    CMessage("Whenever i say the word \"Pulse\"");
    CMessage("all of that blood in your veins will be pumped to that %Cock%");
    CMessage("That\'s right.");
    CMessage("Whenever i say the \"Pulse\", You will feel your shaft start to expand");
    CMessage("as it thickens and lengthens, being filled.");
    CMessage("Getting harder.");
    CMessage("I think i might need to calm you down a little.");
    CMessage("You seem to be getting quite excited down there");
    CMessage("and i haven\'t even said my special word yet...");
    CMessage("Remember to BREATHE");
    CMessage("inhale");
	//@RTOn
	setRapidText(true);
    CMessage("1");
    CMessage("2");
    CMessage("3");
    CMessage("4");
    CMessage("5"); 
	setRapidText(false);
    CMessage("And exhale.");
    CMessage("Good.");
    CMessage("Just slow down, and give in to my words");
    sleep(randomInt(10, 20));
    CMessage("Now... PULSE for me!");
    CMessage("Feel the blood flowing in your veins redirecting into your cock");
    CMessage("PULSE");
    CMessage("Your shaft growing wider and thicker");
    CMessage("PULSE");
    CMessage("Feel your cock shift as it grows");
    CMessage("PULSE");
    CMessage("The head of your dick starting to swell");
    CMessage("PULSE");
    CMessage("Growing and lengthening in size");
    CMessage("PULSE");
    CMessage("Feel it throb and twitch as it fills with your blood");
    CMessage("PULSE for me");
    CMessage("Mmmmmmm i bet that just feels so good. You love it when i tell you to");
    CMessage("PULSE!");
    CMessage("PULSE for me!");
    CMessage("Your cock is hard and PULSING with blood.");
    CMessage("It just feels so good doesn\'t it?");
    CMessage("Having your cock grow with just one word, one command?");
    CMessage("PULSE");
    CMessage("Mmmmm, your cock is so responsive to my words.");
    CMessage("PULSE");
    CMessage("Does it turn you on, knowing that " + random("I\'ve been here with you, watching your cock growing, expanding?", "I am not only in control of your mind and body, but now your COCK too?"));
    let answer0 = getInput("Does it make you horny?",10);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("I know it makes me feel good.");
    CMessage("The fact that just by saying PULSE, I can make your dick hard");
    CMessage("and with only the SNAP of my fingers, i can make it twitch and convulse?");
    CMessage("Me Having power over your COCK is such a pleasure. For me, and for you. So..");
    CMessage("PULSE.");
    CMessage("Your cock is so fucking hard right now, it looks like it could just explode!");
    CMessage("PULSE.");
    CMessage("it\'s twitching and throbbing and PULSING away, just hovering above your stomach now.");
    CMessage("I\'m watching it... god it just looks so good....");
    //CMessage("%StartStroking%");
	Stroking();
    CMessage("Your cock is just aching and throbbing and i know you love it.");
    CMessage("You can feel the THROB as drops of precum start to travel up your shaft.");
    CMessage("Now, because I am in control, I am going to command your %Cock% to edge for me.");
    CMessage("And you will want this to happen, because I am the one who is telling you to do it.");
    let answer1 = getInput("Tell me, Who is commanding your cock now?", 10);
    if (answer1.isTimeout())
    {
        mcxs568j();
        return;
    }
    while (!(answer1.isLike("you") || answer1.isLike("mistress") || answer1.isLike("domme") || answer1.isLike("miss")))
    {
        answer1 = getInput("Who?");
    }
    if (answer1.isLike("you"))
    {
        CMessage("Hmm...");
    }
    else if (answer1.isLike("mistress", "domme", "miss"))
    {
        CMessage("%GoodBoy%");
        increaseAnger(-3)
    }
    increaseAnger(3)
    mcxs568j();
}
function mcxs568j()
{
    DoEdges(1, 3, 0);
    return;
    
    Modulo4();
}
function Modulo4()
{
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStroking();
    }
    CMessage("you are such a good boy for Me.");
    CMessage("so I\'m going to do what I do best.");
    setTempVar("AV_Begging", true);
    CMessage("I\'m going to make you BEG to stroke for Me.");
    //CustomMode(%AV_Beg%,Goto,Begging9);
    CMessage("Minutes and minutes of begging and throbbing and leaking.");
    CMessage("And just when you can\'t take anymore begging");
    CMessage("I\'ll let you stroke.");
    CMessage("So...");
    CMessage("Beg me for %Stroke%");
    CMessage("Beg me to take control of your cock.");
    CMessage("You long to be obedient. A good boy.");
    CMessage("It just gets so hard for you sometimes when all you can focus on is your needy little dick.");
    CMessage("I know it\'s hard but I have a way to adjust your priorities.");
    CMessage("I am going to deny you access to your dick.");
    //CustomMode(ModeText,Normal);
    return;
    
    Begging9();
}
function Begging9()
{
    CMessage("%GoodBoy%");
    //CustomMode(ModeText,Normal);
    CMessage("Just look at me, already you want to jerk your dick.");
    CMessage("You already want to cum for me.");
    CMessage("It\'s so easy to do, I could just show you my ass and your dick is hard.");
    if(getVar("av_fetish_cei", false))
    {
        CMessage("And I know you think about eating your cum all the time for %DomName%.");
    }
    CMessage("You think about it so much that it just consumes your thoughts.");
    //CMessage("%StartStroking%");
	Stroking();
    CMessage("You want to cum for me so bad.");
    CMessage("%Stop%", 0);
	stopStroking();
    CMessage("I want to build that orgasm through some hot tease and denial.");
    CMessage("Over and over.");
    CMessage("Your dick feels so good");
    if(getVar("av_fetish_cei", false))
    {
        CMessage("and all you can think about is eating your cum.");
    }
    CMessage("How much edging can you take?");
    CMessage("You know I don\'t care about your orgasm.");
    CMessage("I would rather see you suffer.");
    DoEdges(2, 3, 0);
    CMessage("Keeping a man on the edge for as long as possible is as fun as it is frustrating for him.");
    CMessage("I\'m going to take my time, make you sweat.");
    DoEdges(1, 3, 0);
    CMessage("I know it\'s difficult to believe because you\'re looking at Me now");
    CMessage("and your dick is getting harder and harder.");
    return;
}