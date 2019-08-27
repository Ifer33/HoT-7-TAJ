DMessage("Serve: start");
main();
DMessage("Serve: end");
function main()
{
    if(getVar("AV_Mem_Serve_NotFirstTime", false))
    {
        AV_Mem_Serve_NotFirstTime();
        return;
    }
    setVar("AV_Mem_Serve", 0);
    setVar("AV_Mem_Serve_NotFirstTime", true);
    AV_Mem_Serve_NotFirstTime();
}
function AV_Mem_Serve_NotFirstTime()
{
    if (getVar("AV_Mem_Serve", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Mem_Serve", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Mem_Serve", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Mem_Serve", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Mem_Serve", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Mem_Serve", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Mem_Serve", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Mem_Serve", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Mem_Serve", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Mem_Serve", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Mem_Serve", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Mem_Serve", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Mem_Serve", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Mem_Serve", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Mem_Serve", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Mem_Serve", 0) == 1101)
    {
        Part1_16();
        return;
    }
    Mod1();
}
function Mod1()
{
    setVar("AV_Mem_Serve", getVar("AV_Mem_Serve", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Mem_Serve", getVar("AV_Mem_Serve", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Mem_Serve", getVar("AV_Mem_Serve", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Mem_Serve", getVar("AV_Mem_Serve", 0) + 1000);
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
    setVar("AV_Mem_Serve", 0);
    AV_Mem_Serve_NotFirstTime();
    return;
    return;
    Modulo1();
}
function Modulo1()
{
    CMessage("Now we are going to see just how " + random("submissive you want to become", "much you want to serve me"));
    CMessage("Go get me a bowl, plate or something like that");
    wait(30);
    CMessage("%KneelForMe%");
    CMessage("Now you are going to produce some pre-cum for me");
    delVar("AV_MEM_Serve");
    CMessage("or we will be having a major problem! Stare into my eyes...");
    CMessage("%StartStroking%");
    CMessage("I want you to stroke until you feel the urge to cum...");
    CMessage("Get that pathetic shaft to edge for me.");
    holdEdge();
    let answer0 = getInput("You didn\'t think about going over Edge did you?", 5);
    if (answer0.isTimeout())
    {
        t23gsd();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Bad Slut!");
        increaseAnger(3)
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%GoodBoy%");
        increaseAnger(-3)
    }
    t23gsd();
}
function t23gsd()
{
    CMessage("Edge for me again...I want your pathetic cock over the bowl, any juices that flow out of it belongs in the bowl!");
    holdEdge();
    TillDrop();
}
function TillDrop()
{
    let answer0 = getInput("Has any come out?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Good%");
        fim33489();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You don\'t?");
    }
    CMessage(random("Well too bad, edge again for me %PetName%", "Edge and try to squeeze out some pre-cum for me this time! Edge and try to squeeze out some pre-cum"));
    holdEdge();
    TillDrop();
    return;
    fim33489();
}
function fim33489()
{
    CMessage("So you have your pathetic pre-cum in the bowl? Good little slut!");
    if(!getVar("av_fetish_cei", false))
    {
        Lick99();
        return;
    }
    CMessage("You know what would really please me?");
    CMessage("You getting on all fours and licking all of it out of the bowl!");
    CMessage("You will do this now for me %PetName%!");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    CMessage("Anything less would be unacceptable!");
    CMessage("Mmmmmmmmm...So hot seeing you down on all fours!");
    CMessage("Was it good? HA...Doesn\'t matter if it was or not, you did it to please your Mistress.");
    Lick99();
}
function Lick99()
{
    CMessage("Now that we got some strain off of your balls by allowing a tad bit of cum to release");
    CMessage("we need to make them suffer more!");
    return;
    Modulo2();
}
function Modulo2()
{
    CMessage("Grab your string....");
    wait(20);
    CMessage("Wrap it around those balls for me, pulling it tight");
    delVar("AV_MEM_Serve");
    CMessage("then tying it off.");
    wait(20);
    if(getVar("av_fetish_humiliating", false))
    {
        CMessage("Do they feel strained? If not then tie them tighter you filthy pig.");
        wait(20);
    }
    if(!getVar("av_fetish_humiliating", false))
    {
        CMessage("Do they feel strained? If not then tie them tighter.");
        wait(20);
    }
    CMessage("Now go stand in the corner with your nose up against the wall and your arms crossed behind your back");
    setVar("AV_BallTied", true);
    CMessage("And wait till you hear the bell");
    wait(randomInt(30, 55));
    CMessage("Get back here %SubName%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Bell.mp3");
    return;
    Modulo3();
}
function Modulo3()
{
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        wait(20);
        setVar("AV_PinDone", true);
    }
    CMessage("Very good %PetName%!");
    delVar("AV_MEM_Serve");
    CMessage("Now just how eager are you to serve me?");
    CMessage("Only real men get to fuck me, others suffer for me.");
    CMessage("Grab your spoon!");
    CMessage("I want 10 swats on those balls for me...");
    CMessage("Now");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Belle10a.mp3");
    wait(15);
    CMessage("Feel Good? Hehe...");
    CMessage("10 more slut...");
    CMessage("Go");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Belle10b.mp3");
    wait(15);
    CMessage("Aww does it hurt? Too BAD...");
    CMessage("15 more...");
    CMessage("Go");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Spank15.mp3");
    wait(10);
    CMessage("I think that should be enough to make you feel your balls in your stomach!");
    CMessage("If not then you wasn\'t swatting hard enough!");
    CMessage("Is that cock still hard? Stroke it to another edge...FAST!");
    edge();
    CMessage("%GoodBoy%");
    return;
    Modulo4();
}
function Modulo4()
{
    CMessage("Careful what you promise");
    delVar("AV_MEM_Serve");
    CMessage("I might put that to the test, you know...");
    if(!getVar("av_fetish_cei", false))
    {
        CMessage("make you eat your own cum");
    }
    if(!getVar("av_fetish_pain", false))
    {
        CMessage("spank " + random("that ass", "those balls"));
    }
    if(!getVar("AV_LikeAnal", false))
    {
        CMessage("fucking that ass of yours.");
    }
    CMessage("You can becomes just a slave, merely a thing to serve me");
    return;
}