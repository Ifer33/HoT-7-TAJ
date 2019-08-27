DMessage("Hurtme2: start");
main();
DMessage("Hurtme2: end");
function main()
{
    if(getVar("AV_Mem_HurtmeDois_NotFirstTime", false))
    {
        AV_Mem_HurtmeDois_NotFirstTime();
        return;
    }
    setVar("AV_Mem_HurtmeDois", 0);
    setVar("AV_Mem_HurtmeDois_NotFirstTime", true);
    AV_Mem_HurtmeDois_NotFirstTime();
}
function AV_Mem_HurtmeDois_NotFirstTime()
{
    if (getVar("AV_Mem_HurtmeDois", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Mem_HurtmeDois", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Mem_HurtmeDois", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Mem_HurtmeDois", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Mem_HurtmeDois", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Mem_HurtmeDois", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Mem_HurtmeDois", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Mem_HurtmeDois", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Mem_HurtmeDois", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Mem_HurtmeDois", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Mem_HurtmeDois", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Mem_HurtmeDois", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Mem_HurtmeDois", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Mem_HurtmeDois", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Mem_HurtmeDois", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Mem_HurtmeDois", 0) == 1101)
    {
        Part1_16();
        return;
    }
    Mod1();
}
function Mod1()
{
    setVar("AV_Mem_HurtmeDois", getVar("AV_Mem_HurtmeDois", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Mem_HurtmeDois", getVar("AV_Mem_HurtmeDois", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Mem_HurtmeDois", getVar("AV_Mem_HurtmeDois", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Mem_HurtmeDois", getVar("AV_Mem_HurtmeDois", 0) + 1000);
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
    setVar("AV_Mem_HurtmeDois", 0);
    AV_Mem_HurtmeDois_NotFirstTime();
    return;
    return;
    Modulo1();
}
function Modulo1()
{
    CMessage("I will torture you slowly...");
    CMessage("You will suffer more and more");
    CMessage("Place a clothespin on your right nipple");
    wait(12);
    CMessage("Place a clothespin on your left nipple");
    wait(12);
    CMessage("Now clamp another clothespin on top of the left clothespin on the top away from the nipple");
    wait(12);
    CMessage("Now do the same thing on the right side");
    wait(12);
    CMessage("While the clamps may begin to contribute to your pain as you wait");
    CMessage("I would love it if you inflict more pain");
    CMessage("Now slide the top clothespin on the left nipple down as far as possible towards the nipple");
    wait(15);
    CMessage("What are you looking at? Now do the same thing on the right side!");
    wait(15);
    if(getVar("av_fetish_rough", false) || getVar("av_fetish_humiliating", false))
    {
        CMessage("You still look miserable but you\'re only a %Slave% so I can\'t expect much out of you.");
    }
    CMessage("Are your nipple burning?");
    CMessage("You can push both clamps on the clothespins back to the top now");
    wait(15);
    CMessage("Now take the clamp off of the left clothespin");
    wait(15);
    CMessage("Now take off the one on the right side");
    wait(15);
    CMessage("Now quickly take off both clamps");
    wait(15);
    CMessage("Rub the nipples between your thumb and finger");
    CMessage("Now you can relax.");
    return;
    Modulo2();
}
function Modulo2()
{
    if(getVar("av_fetish_pegging", false) || getVar("AV_LikeAnal", false))
    {
        CMessage("Go fetch me a dildo and lube");
        wait(40);
    }
    CMessage("you will suffer for it more and more");
    if(getVar("av_fetish_pegging", false) || getVar("AV_LikeAnal", false))
    {
        CMessage("Get your dildo lubed and ready");
        wait(45);
    }
    if(getVar("av_fetish_pegging", false) || getVar("AV_LikeAnal", false))
    {
        CMessage("Now insert the lubed dildo");
    }
    CMessage("Place a clothespin on your right nipple");
    wait(15);
    CMessage("Now place a clothespin on your left nipple");
    wait(15);
    CMessage("Hmm, I am forgetting something");
    if(getVar("av_fetish_pegging", false) || getVar("AV_LikeAnal", false))
    {
        CMessage("Pump you ass 2 times!");
    }
    CMessage("%Stroke% " + (java.lang.Math.round(randomInt(20, 40) / 10.0) * 10) + "times");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    wait(30);
    CMessage("%TieYourBalls%");
    setTempVar("AV_BallTied", true);
    CMessage("Now put another clothespin on top of the one on the left nipple at the top away from the nipple");
    wait(15);
    CMessage("Now do the same on the right side");
    wait(15);
    if(getVar("av_fetish_pegging", false) || getVar("AV_LikeAnal", false))
    {
        CMessage("Pump two more times!");
    }
    CMessage("Are your nipples burning now?");
    setTempVar("AV_Pins", true);
    CMessage("put " + randomInt(2, 4) + "clothespins on your %Balls%");
    wait(30);
    return;
    Modulo3();
}
function Modulo3()
{
    CMessage("Now, " + random("we will have an amazing combo of pain and pleasure", "We will be doing a series alternating between pain and pleasure", "You will have pleasure and pain mixed"));
    CMessage(random("Spank ", "hit ", "Smack ") + random("your ", "these ") + "%Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    wait(15);
	stopAudio();
    edge("%Edge%");
    CMessage(random("Spank ", "hit ", "Smack ") + random("your ", "these ") + "%Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    wait(15);
	stopAudio();
    edge("%Edge%");
    if(getVar("AV_DommeMistress", false))
    {
        CMessage(random("Spank ", "hit ", "Smack ") + random("your ", "these ") + "%Balls%");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        wait(15);
		stopAudio();
    }
    if(getVar("AV_DommeMistress", false))
    {
        DoEdges(2, 3, 0);
    }
    CMessage(random("Spank ", "hit ", "Smack ") + random("your ", "these ") + "%Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    wait(15);
	stopAudio();
    edge("%Edge%");
    CMessage(random("Spank ", "hit ", "Smack ") + random("your ", "these ") + "%Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    wait(15);
	stopAudio();
    edge("%Edge%");
    CMessage(random("Spank ", "hit ", "Smack ") + random("your ", "these ") + "%Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    wait(15);
	stopAudio();
    edge("%Edge%");
    if(getVar("AV_DommeMistress", false))
    {
        CMessage(random("Spank ", "hit ", "Smack ") + random("your ", "these ") + "%Balls%");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        wait(15);
		stopAudio();
    }
    if(getVar("AV_DommeMistress", false))
    {
        DoEdges(2, 3, 0);
    }
    CMessage(random("Spank ", "hit ", "Smack ") + random("your ", "these ") + "%Balls%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
    wait(15);
	stopAudio();
    edge("%Edge%");
    CMessage(random("Wow, that was so cool", "What a show babe", "Spectacular"));
    return;
    Modulo4();
}
function Modulo4()
{
	setTempVar("AV_PunishRND_RNDPunish",true);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_PunishRND.js");
    return;
}