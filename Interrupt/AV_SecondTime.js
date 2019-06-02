DMessage("AV_SecondTime: start");
main();
DMessage("AV_SecondTime: end");
function main()
{
    if(getVar("av_quest_done", false))
    {
        av_quest_done();
        return;
    }
    if(getVar("av_quest_17", false))
    {
        av_quest_17();
        return;
    }
    if(getVar("av_quest_16", false))
    {
        av_quest_16();
        return;
    }
    if(getVar("av_quest_15", false))
    {
        av_quest_15();
        return;
    }
    if(getVar("av_quest_14", false))
    {
        av_quest_14();
        return;
    }
    if(getVar("av_quest_13", false))
    {
        av_quest_13();
        return;
    }
    if(getVar("av_quest_12", false))
    {
        av_quest_12();
        return;
    }
    if(getVar("av_quest_11", false))
    {
        av_quest_11();
        return;
    }
    if(getVar("av_quest_10", false))
    {
        av_quest_10();
        return;
    }
    if(getVar("av_quest_09", false))
    {
        av_quest_09();
        return;
    }
    if(getVar("av_quest_08", false))
    {
        av_quest_08();
        return;
    }
    if(getVar("av_quest_07", false))
    {
        av_quest_07();
        return;
    }
    if(getVar("av_quest_06", false))
    {
        av_quest_06();
        return;
    }
    if(getVar("av_quest_05", false))
    {
        av_quest_05();
        return;
    }
    if(getVar("av_quest_04", false))
    {
        av_quest_04();
        return;
    }
    if(getVar("av_quest_03", false))
    {
        av_quest_03();
        return;
    }
    if(getVar("av_quest_02", false))
    {
        av_quest_02();
        return;
    }
    if(getVar("av_quest_01", false))
    {
        av_quest_01();
        return;
    }
    if(getVar("av_quest_00", false))
    {
        av_quest_00();
        return;
    }
    av_quest_00();
}
function av_quest_00()
{
    CMessage("Before we continue I\'d like to ask you a few things");
    CMessage("That way I can know you better");
    CMessage("And the better I know you the more I can use all that knowledge to tease you %Grin%");
    let answer0 = getInput("Do you enjoy footjob?");
    setVar("av_quest_01", true);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("yes or no?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Mmm, we have a foot slave here");
        setVar("av_fetish_foot", true);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("It\'s %Okay%");
        av_quest_01();
        return;
    }
    CMessage("%_TheThingsICanDoToYou%");
    showTaggedImage(4, ["FEET"]);
    //--Command:TagFeet
    av_quest_01();
    return;
    av_quest_01();
}
function av_quest_01()
{
    CMessage("I want to look at your posture.");
    setVar("av_quest_02", true);
    CMessage("Move forward, until you are on the edge of your seat.");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02.jpg");
    lockImages();
    CMessage("Spread your legs apart.");
    CMessage("Place your feet securely on the ground.");
    CMessage("Sit upright with a straight back.");
    CMessage("Your %Balls% should be hanging freely");
    CMessage("and you should be reasonably comfortable.");
    CMessage("This is your \"Basic Position\"");
    CMessage("From now on you will assume this position");
    CMessage("for exercising and stay in this position during our session");
    setVar("av_basic_position", true);
    CMessage("unless told otherwise");
    unlockImages();
    return;
    av_quest_02();
}
function av_quest_02()
{
    CMessage("%PetName%");
    let answer0 = getInput("Do you enjoy bondage?");
    setVar("av_quest_03", true);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("yes or no?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("I think that %Cock% could use a little bondage.");
        setVar("av_fetish_bondage", true);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("It\'s %Okay%");
        av_quest_03();
        return;
    }
    CMessage("I hope you are prepared to be tied soon.");
    av_quest_03();
    return;
    av_quest_03();
}
function av_quest_03()
{
    let answer0 = getInput("Are you into playing with hot wax?");
    setVar("av_quest_04", true);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("yes or no?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Hmm");
        setVar("av_fetish_hothax", true);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("It\'s %Okay%");
        EndQuestions();
        return;
    }
    CMessage("%_TheThingsICanDoToYou%");
    EndQuestions();
    return;
    av_quest_04();
}
function av_quest_04()
{
    let answer0 = getInput("Do you enjoy pegging?");
    setVar("av_quest_05", true);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("yes or no?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("I\'m gonna train you to be a good anal whore.");
        setVar("av_fetish_pegging", true);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%Okay%");
        EndQuestions();
        return;
    }
    let answer1 = getInput("Do you rather a 50% chance to cum or 100% to ruin your orgasm?");
    while (!(answer1.isLike("50") || answer1.isLike("cum") || answer1.isLike("ruin") || answer1.isLike("100")))
    {
        answer1 = getInput("ruin or cum %Slave%");
    }
    if (answer1.isLike("50", "cum"))
    {
        CMessage("A gambler, huh?");
        EndQuestions();
        return;
    }
    else if (answer1.isLike("ruin", "100"))
    {
        CMessage("%Okay%");
        setVar("av_fetish_ruin", true);
    }
    CMessage("%_TheThingsICanDoToYou%");
    EndQuestions();
    return;
    av_quest_05();
}
function av_quest_05()
{
    CMessage("The next thing I want you to learn");
    setVar("av_quest_06", true);
    lockImages();
    CMessage("is the \"Standing Position\".");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01.jpg");
    CMessage("Guess what...");
    CMessage("... right. Stand up straight");
    CMessage("feet slightly apart,");
    setVar("av_standing_position", true);
    CMessage("hands behind your back!");
    unlockImages();
    return;
    av_quest_06();
}
function av_quest_06()
{
    let answer0 = getInput("Do you like receiving pain?");
    setVar("av_quest_07", true);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("yes or no?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("I already knew it");
        setVar("av_fetish_pain", true);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%Okay%");
    }
    av_quest_07();
	return;
}
function av_quest_07()
{
    CMessage("The next thing I will introduce you to today is \"Twitching\"");
    setVar("av_quest_08", true);
    CMessage("\"Twitching\" is when you contract your pelvic muscles and your cock jumps up.");
    CMessage("Try it once.");
    CMessage("Actually \"Twitching\" consist of two actions:");
    CMessage("Contraction of your muscles");
    CMessage("and relaxation of your muscles.");
    CMessage("On the command \"Tense\" you will contract");
    CMessage("and on \"Release\" you will relax.");
    CMessage("For now, we will \"Tense\" and immediate \"Release\"");
    CMessage("Later, when you are better trained,");
    CMessage("I will make you hold \"Tense\".");
    CMessage("Let\'s see how well you perform in practice");
    setVar("av_fetish_twitching", true);
    return;
    av_quest_08();
}
function av_quest_08()
{
    let answer0 = getInput("Do you like being handled roughly?");
    setVar("av_quest_09", true);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("yes or no?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Yes%, you like that %Slave%");
        setVar("av_fetish_rough", true);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("It\'s %Okay%");
    }
    av_quest_09();
	return;
}
function av_quest_09()
{
    CMessage("The next topic for today is");
    setVar("av_quest_10", true);
    CMessage("the \"Submissive Position\"");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04.jpg");
    lockImages();
    CMessage("Listen carefully.");
    CMessage("I want you %KneelForMe%");
    CMessage("bend forward and rest your head on your hands.");
    CMessage("Your ass should stick up,");
    CMessage("your legs will be slightly apart");
    setVar("av_submissive_position", true);
    CMessage("so that your %Balls% are hanging nicely.");
    unlockImages();
    EndQuestions();
    return;
    return;
    av_quest_10();
}
function av_quest_10()
{
    let answer0 = getInput("Do you like CEI (cum eating)?");
    setVar("av_quest_11", true);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("yes or no?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("I\'m gonna train you to be a good slut.");
        setVar("av_fetish_cei", true);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("It\'s %Okay%");
    }
    av_quest_11();
	return;
}
function av_quest_11()
{
    CMessage("This position is called \'kneel\'");
    setVar("av_quest_12", true);
    CMessage("So when I tell you \'Kneel %PetName% \' I want you on your knees");
    CMessage("Your knees and ankles touching each others");
    CMessage("Your back straight");
    CMessage("Your hands crossed being your back, palms outward");
    CMessage("Your head bowed down");
    setVar("png__position_kneel", true);
    CMessage("If I want you to keep this one for a long time I\'ll tell you to get a pillow for under your knees");
    CMessage("And if you get punished the pillow can be replaced by rice or frozen peas");
    CMessage("Trust me after a few minutes kneeling on rice you\'ll be a lot more obedient %lol%");
    CMessage("Let\'s try it");
    CMessage("Don\'t worry, the classical one, not in punishment mode %Grin%");
    setRapidText(true);
    CMessage("Kneel %PetName%");
    sleep(20);
    CMessage("With some training you\'ll be able to keep it a lot longer without any pillow");
    sleep(10);
    CMessage("Alright you can sit down");
    setRapidText(false);
    EndQuestions();
    return;
    return;
    av_quest_12();
}
function av_quest_12()
{
    let answer0 = getInput("Do you like Titjobs?");
    setVar("av_quest_13", true);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("yes or no?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Mmm, we have a tit slave here");
        setVar("av_fetish_titjob", true);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("It\'s %Okay%");
    }
    av_quest_13();
	return;
}
function av_quest_13()
{
    CMessage("The next one is the \'worship\' position");
    setVar("av_quest_14", true);
    CMessage("You\'ll do this one each time I tell you to worship me or you pray to me");
    setVar("png__position_worship", true);
    CMessage("It\'s basicly the praying position of the muslims");
    CMessage("Kneeling, knees together");
    CMessage("Back and head down, your forehead touching ground");
    CMessage("Your arms stretched in front of your reaching far");
    CMessage("Your hands together palm down touching the floor");
    getLocalTeasePicture("Images" + java.io.File.separator + "png" + java.io.File.separator + "worship.jpg");
    unlockImages();
    CMessage("Let\'s try it");
    CMessage("Worship me by saying out loud \"I will always obey, love and worship %DomHonorific% %DomName%\" 20 times");
	sleep(20);
    CMessage("I know you will %PetName% %Grin%");
    CMessage("And in exchange I promise that I will always make you ache for me! %lol%");
    EndQuestions();
    return;
    return;
    av_quest_14();
}
function av_quest_14()
{
    let answer0 = getInput("Do you like CFNM? (clothed female, nude male)");
    setVar("av_quest_15", true);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("yes or no?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Mmm, good thing is, you are already naked for me");
        setVar("av_fetish_cfnm", true);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("It\'s %Okay%");
    }
    av_quest_15();
	return;
}
function av_quest_15()
{
    let answer0 = getInput("Do you like Gag?");
    setVar("av_quest_16", true);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("yes or no?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Mmm, shut up %Lol%");
        setVar("av_fetish_gag", true);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("It\'s %Okay%");
        EndQuestions();
        return;
    }
    return;
    av_quest_16();
}
function av_quest_16()
{
    CMessage("This one is the \'beg\' position");
    setVar("av_quest_17", true);
    CMessage("It\'s also a kneeling position");
    setVar("png__position_beg", true);
    CMessage("But this time Your knees are slighly apart around 10 inches/25 centimeters");
    CMessage("Sitting on your heels, back straight");
    CMessage("Hands on your laps, palms up");
    CMessage("And head up, eyes looking down");
    CMessage("Each time you have something to ask of me or if I tell you to beg me I want you in this position! %Grin%");
    getLocalTeasePicture("Images" + java.io.File.separator + "png" + java.io.File.separator + "beg.jpg");
    lockImages();
    CMessage("Let\'s try it");
    setRapidText(true);
    CMessage("Beg me orally to let you stroke %PetName%");
    sleep(10);
    CMessage("Not convincing enough, beg harder");
    sleep(10);
	unlockImages();
    CMessage("Alright, good enough you can sit down again");
    setRapidText(false);
    av_quest_17();
	return;
}
function av_quest_17()
{
    let answer0 = getInput("Do you like facesitting?");
    setVar("av_quest_done", true);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("yes or no?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("So this is the kind of stuff that turns you on huh?");
        setVar("av_fetish_facesitting", true);
        EndQuestions();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("It\'s %Okay%");
        EndQuestions();
        return;
    }
    return;
    av_quest_done();
}
function av_quest_done()
{
    CMessage("%PetName%");
    if (randomInteger(1, 100) <= 40)
    {
        Basic();
        return;
    }
    CMessage("Now..");
    if (randomInteger(1, 100) <= 50)
    {
        Standing();
        return;
    }
    Submissive();
	return;
}
function Submissive()
{
    CMessage("You will now get into the Submissive Position");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04.jpg");
    lockImages();
    CMessage("and wait until you hear a stroking beat.");
    CMessage("Stroke to the beat and return when it stops.");
    unlockImages();
    return;
    Standing();
}
function Standing()
{
    CMessage("You will now get into the Standing Position");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01.jpg");
    lockImages();
    CMessage("and wait until you hear a stroking beat.");
    CMessage("Stroke to the beat and return when it stops.");
    unlockImages();
    return;
    Basic();
}
function Basic()
{
    CMessage("You will now get into the Basic Position");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02.jpg");
    lockImages();
    CMessage("and wait until you hear a stroking beat.");
    CMessage("Stroke to the beat and return when it stops.");
    unlockImages();
    return;
    EndQuestions();
}
function EndQuestions()
{
    CMessage("%ThatsEnough%");
    return;
}