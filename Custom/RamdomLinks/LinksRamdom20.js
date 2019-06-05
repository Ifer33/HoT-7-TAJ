DMessage("LinksRandom20: start");
main();
DMessage("LinksRandom20: end");
function main()
{
    if(getVar("AV_Link20_NotFirstTime", false))
    {
        AV_Link20_NotFirstTime();
        return;
    }
    setVar("AV_Link20", 0);
    setVar("AV_Link20_NotFirstTime", true);
    AV_Link20_NotFirstTime();
}
function AV_Link20_NotFirstTime()
{
    if (getVar("AV_Link20", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_Link20", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_Link20", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_Link20", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_Link20", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_Link20", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_Link20", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_Link20", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_Link20", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_Link20", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_Link20", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_Link20", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_Link20", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_Link20", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_Link20", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_Link20", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_Link20", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_Link20", getVar("AV_Link20", 0) + 1);
    Link1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_Link20", getVar("AV_Link20", 0) + 10);
    Link2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_Link20", getVar("AV_Link20", 0) + 100);
    Link3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_Link20", getVar("AV_Link20", 0) + 1000);
    Link4();
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
    setVar("AV_Link20", 0);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_CrushBreakLink.js");
    setStrokingNoTaunt();
    return;
    Link1();
}
function Link1()
{
    if(getVar("AV_WantCumQuest", false))
    {
        Reforce();
        return;
    }
    CMessage("Let\'s do a little condition now");
    CMessage("I will condition your %Cock% and cum");
    CMessage("to obey only me...not you");
    TheCumQuestion();
	return;
}
function TheCumQuestion()
{
    CMessage("If I ask you \"Do you want to cum?\" And you will say \"no\"");
    CMessage("This will be your answer from now on");
    CMessage("And if I ask \"If you want to cum for Me?\" you say \"yes\"");
    let answer0 = getInput("Undestood?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Good%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You don\'t?");
        TheCumQuestion();
        return;
    }
    CMessage("Don\'t forget that %PetName%");
    setVar("AV_WantCumQuest", true);
    setStrokingNoTaunt();
    return;
    Reforce();
}
function Reforce()
{
    CMessage("Just to reminde you...");
    CMessage("If I ask you \"Do you want to cum?\" And you will say \"no\"");
    CMessage("And if I ask \"If you want to cum for Me?\" you say \"yes\"");
    setStrokingNoTaunt();
    return;
    Link2();
}
function Link2()
{
    CMessage("You can\'t help yourself. You gave it all away.");
    if(getVar("av_fetish_foot", false))
    {
        CMessage("You can\'t keep your eyes of feet.");
    }
    if(getVar("av_fetish_foot", false))
    {
        CMessage("Mine, my friends, girls at school...anybody.");
    }
    if(getVar("av_fetish_foot", false))
    {
        CMessage("I know. You have a foot fetish. Don\'t bother to deny it.");
    }
    if(getVar("av_fetish_foot", false))
    {
        CMessage("You are my footslave now and you will serve me.");
    }
    CMessage("I\'m sure if you knew  you\'d only be able to masturbate to me for the rest of your life");
    CMessage("that\'d still be worth it in the face of never cumming.");
    setStrokingNoTaunt();
    return;
    Link3();
}
function Link3()
{
    let answer0 = getInput("%LAPLookAtPictures_85% %Grin%");
    while (!(answer0.isLike("yes") || answer0.isLike("maybe") || answer0.isLike("umm") || answer0.isLike("know") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no %PetName%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Yay%");
    }
    else if (answer0.isLike("maybe", "umm", "know"))
    {
        CMessage("I\'ll take that as a yes %Lol%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%SuitYourself%");
        Decline_Offer();
        return;
    }
    CMessage("Let\'s see what I can find");
	showTeaseImage();
    lockImages();
    let answer1 = getInput("Do you like this one?");
    //--Command:ShowLocalImage
    while (!(answer1.isLike("yes") || answer1.isLike("yea") || answer1.isLike("yep") || answer1.isLike("yup") || answer1.isLike("do") || answer1.isLike("sexy") || answer1.isLike("hot") || answer1.isLike("amazing") || answer1.isLike("incredible") || answer1.isLike("crazy") || answer1.isLike("ache") || answer1.isLike("horny") || answer1.isLike("cum") || answer1.isLike("like") || answer1.isLike("beautiful") || answer1.isLike("yes") || answer1.isLike("maybe") || answer1.isLike("unsure") || answer1.isLike("dont know") || answer1.isLike("alright") || answer1.isLike("all right") || answer1.isLike("okay") || answer1.isLike("ok") || answer1.isLike("no") || answer1.isLike("nah") || answer1.isLike("not") || answer1.isLike("dont") || answer1.isLike("gross") || answer1.isLike("disgusting") || answer1.isLike("sick") || answer1.isLike("no")))
    {
        answer1 = getInput("A simple yes or no will suffice %PetName%");
    }
    if (answer1.isLike("yes", "yea", "yep", "yup", "do", "sexy", "hot", "amazing", "incredible", "crazy", "ache", "horny", "cum", "like", "beautiful"))
    {
        CMessage("%LAPIllSaveThisOne_86%");
        sortPicture(getImagePath(), 3);
    }
    else if (answer1.isLike("yes"))
    {
        CMessage("%LAPIllSaveThisOne_86%");
        sortPicture(getImagePath(), 3);
    }
    else if (answer1.isLike("maybe", "unsure", "dont know", "alright", "all right", "okay", "ok"))
    {
        CMessage("%LAPLookForSomethingElse_85%");
    }
    else if (answer1.isLike("no", "nah", "not", "dont", "gross", "disgusting", "sick"))
    {
        CMessage("%LAPScratchThatOne_85%");
        sortPicture(getImagePath(), 1);
    }
    else if (answer1.isLike("no"))
    {
        CMessage("%LAPScratchThatOne_85%");
        sortPicture(getImagePath(), 1);
    }
    CMessage("Hmmm");
    What_About_This_One();
	return;
}
function What_About_This_One()
{
	showTeaseImage();
    lockImages();
    let answer0 = getInput("%LAPWhatAboutThisOne_85%");
    while (!(answer0.isLike("yes") || answer0.isLike("yea") || answer0.isLike("yep") || answer0.isLike("yup") || answer0.isLike("do") || answer0.isLike("sexy") || answer0.isLike("hot") || answer0.isLike("amazing") || answer0.isLike("incredible") || answer0.isLike("crazy") || answer0.isLike("ache") || answer0.isLike("horny") || answer0.isLike("cum") || answer0.isLike("like") || answer0.isLike("beautiful") || answer0.isLike("yes") || answer0.isLike("maybe") || answer0.isLike("unsure") || answer0.isLike("dont know") || answer0.isLike("alright") || answer0.isLike("all right") || answer0.isLike("okay") || answer0.isLike("ok") || answer0.isLike("no") || answer0.isLike("nah") || answer0.isLike("not") || answer0.isLike("dont") || answer0.isLike("gross") || answer0.isLike("disgusting") || answer0.isLike("sick") || answer0.isLike("no")))
    {
        answer0 = getInput("A simple yes or no will suffice %PetName%");
    }
    if (answer0.isLike("yes", "yea", "yep", "yup", "do", "sexy", "hot", "amazing", "incredible", "crazy", "ache", "horny", "cum", "like", "beautiful"))
    {
        CMessage("%LAPIllSaveThisOne_86%");
        sortPicture(getImagePath(), 3);
    }
    else if (answer0.isLike("yes"))
    {
        CMessage("%LAPIllSaveThisOne_86%");
        sortPicture(getImagePath(), 3);
    }
    else if (answer0.isLike("maybe", "unsure", "dont know", "alright", "all right", "okay", "ok"))
    {
        CMessage("%LAPLookForSomethingElse_85%");
    }
    else if (answer0.isLike("no", "nah", "not", "dont", "gross", "disgusting", "sick"))
    {
        CMessage("%LAPScratchThatOne_85%");
        sortPicture(getImagePath(), 1);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%LAPScratchThatOne_85%");
        sortPicture(getImagePath(), 1);
    }
    if (randomInteger(1, 100) <= 20)
    {
        ImFinished();
        return;
    }
    What_About_This_One();
    return;
    ImFinished();
}
function ImFinished()
{
	unlockImages();
    CMessage("%ThatsEnough%");
    return;
    Decline_Offer();
}
function Decline_Offer()
{
    CMessage("%LAPYouNeedToSufferMore_85%");
    setStrokingNoTaunt();
    return;
    Link4();
}
function Link4()
{
    CMessage("Mmmm, it kinda makes me a %Little% jealous");
    CMessage("cause your hand could so easily be my %Pussy%");
    CMessage("But then I remember that all those strokes aren\'t making you feel good like my pussy would");
    CMessage("they\'re making you %Ache% and suffer");
    CMessage("and then I don\'t feel jealous anymore.");
    CMessage("%No%. Then it just starts turning me on");
    CMessage("cause I know that even though I might have to %Wait% a while");
    CMessage("sliding it back and forth as I suck you with my mouth");
    CMessage("eventually I\'m the one who gets to make all that %Ache% go away.");
    if (randomInteger(1, 100) <= 50)
    {
        AVRND09();
        return;
    }
    CMessage("I\'m the one who gets to wrap my warm lips around your %Cock%");
    CMessage("push my wet tongue beneath your shaft...");
    CMessage("waking up alllll that %Pleasure% buried beneath the ache");
    CMessage("until it all comes shooting through your entire %Cock%");
    CMessage("right into my hot, sucking mouth.");
    AVRND09();
	return;
}
function AVRND09()
{
    CMessage("That\'s why I\'ll never be jealous about your hand");
    CMessage("it will never make you %Feel% as good as I can.");
    let answer0 = getInput("Do you want to feel good for me?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Yes or no %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Yay%");
        bom1();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You don\'t?");
        mau1();
        return;
    }
    bom1();
}
function bom1()
{
    increaseAnger(-3)
    fim1();
    return;
    mau1();
}
function mau1()
{
    increaseAnger(3)
    fim1();
	return;
}
function fim1()
{
    CMessage("Then get ready to stroke while I slide these panties off");
    CMessage("and try not to lose control.");
    setStrokingNoTaunt();
    return;
}