DMessage("AV_ModFetish5: start");
main();
DMessage("AV_ModFetish5: end");
function main()
{
    if(getVar("AV_ModFetish5_NotFirstTime", false))
    {
        AV_ModFetish5_NotFirstTime();
        return;
    }
    setVar("AV_ModFetish5", 0);
    setVar("AV_ModFetish5_NotFirstTime", true);
    AV_ModFetish5_NotFirstTime();
}
function AV_ModFetish5_NotFirstTime()
{
    if (getVar("AV_ModFetish5", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModFetish5", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModFetish5", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModFetish5", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModFetish5", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModFetish5", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModFetish5", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModFetish5", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModFetish5", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModFetish5", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModFetish5", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModFetish5", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModFetish5", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModFetish5", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModFetish5", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModFetish5", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModFetish5", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModFetish5", getVar("AV_ModFetish5", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModFetish5", getVar("AV_ModFetish5", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModFetish5", getVar("AV_ModFetish5", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModFetish5", getVar("AV_ModFetish5", 0) + 1000);
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
    setVar("AV_ModFetish5", 0);
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
    CMessage("%AV_Break1%");
    CMessage("%AV_Luxury%");
    CMessage("%AV_Break2%");
    CMessage("Hey %domFriend3Name%");
    addContact(4);
    SMessage("Hi %EmoteLaugh%", -1, 2);
    CMessage("%AV_Break3%");
    SMessage("%AV_Break4%", -1, 4);
    removeContact(1);
    CMessage("Here you are again, glued to your computer screen, cock in hand.");
    CMessage("Weak for beautiful women like me telling you what to do");
    CMessage("You could watch porn of hot chicks fucking, like a NORMAL guy, but you know your place.");
    CMessage("I guess I can give you a little treat");
    CMessage("Now get on your knees!!!");
    CMessage("You are my good little %Slave%.");
    CMessage("c\'mon make me proud! do as I say.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt(null,-1,4);
    let answer0 = getInput("Do you think you deserve to be my little pet?");
    if (answer0.isLike("yes", "yea", "yep"))
    {
        iWillDoWhateverResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoNeutralResponse();
    }
    CMessage("Well, for a wanker like you, I have something special planned.");
    CMessage("I love teasing you and confusing your cock.");
    CMessage("You`re very good at this.");
    CMessage("%stopstroking%", 0);
	stopStrokingAll();
    if(!getVar("AV_PinDone", false))
    {
        setVar("AV_PinDone", true);
        run("Custom" + separator + "Miniscripts" + separator + "AV_GetPins");
    }
    CMessage("You are nothing but a toy to me");
    CMessage("and I feel like playing rough with you today.");
    CMessage("Aren\'t you so lucky to be my pain slut.");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Put 1 clothespin on each of your nipples");
        sleep(20);
    }
    CMessage("I\'m a big sadist and I love torturing your pathetic little cock.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt(null,-1,4);
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Now grab yourself by the balls");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("and squeeze as hard as you can.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Harder, make yourself cry.");
    }
    CMessage("I know you\'ll suffer for me.");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Now let go and slap your balls really hard.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("I want you to be so sore that it hurts next time you jerk off.");
    }
    CMessage("%stopstroking%", 0);
	stopStrokingAll();
    CMessage("Now slap your cock.");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Right on the head where it hurts the most.");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Do it over and over and over again.");
    }
    CMessage("Make it bounce.");
    CMessage("Make it sting.");
    CMessage("I just love knowing that you are hurting your own dick for me.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt(null,-1,4);
    CMessage("I\'m going to put you in so much pain today.");
    CMessage(random("I don\'t care how much it hurts", "you\'ll do anything for me", "I love taking advantage of you"));
    CMessage("It\'s time for you to be honest.");
    CMessage("You need to acknowledge your craving for domination.");
    CMessage("You need a woman to take control of you.");
    CMessage("%stopstroking%", 0);
	stopStrokingAll();
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Put " + randomInt(3, 4) + "clothespins on your %Balls%");
        sleep(20);
    }
    CMessage("You want me to control your cock");
    CMessage("Don\'t bother to deny it.");
    CMessage("Perhaps a few snaps of my whip will convince you to confess.");
    CMessage("No? That\'s alright.");
    CMessage("If pain won\'t break you, I know pleasure will.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt(null,-1,4);
    CMessage("I\'m going to tease your dick until your begging me to own it.");
    CMessage("Go ahead and touch it for me.");
    CMessage("Go ahead and admit just how badly you want me to dominate you.");
    //CMessage("%Edge%");
    startEdging("%Edge%",-1,4);
    DoEdges(2, 2, 0,-1,4);
    CMessage("No pleasure for you today %Slave%.");
    let answer1 = getInput("Why? Cause we both know you don\'t deserve it, don\'t you?");
    if (answer1.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer1.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("You only deserve pain and suffering.");
	CMessage("%SitDown%");
    CMessage("and remove all clothespins");
    SMessage("Look who is back", -1, 4);
    addContact(1);
    CMessage("Hi %PetName%, miss me?");
    removeContact(4);
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
    CMessage("%AV_Break1%");
    CMessage("%AV_Luxury%");
    CMessage("%AV_Break2%");
    CMessage("Hey %domFriend1Name%");
    addContact(2);
    SMessage("Hi %EmoteLaugh%", -1, 2);
    CMessage("%AV_Break3%");
    SMessage("%AV_Break4%", -1, 2);
    removeContact(1);
    CMessage("It\'s ok to admit it");
    CMessage("I know you\'ve always wanted to try letting go of control");
    CMessage("letting a beautiful woman tell you what to do.");
    CMessage("There\'s nothing wrong with " + random("it just because you\'re a guy doesn\'t mean you need to be in control", "giving into your desires and letting a woman be in control of you"));
    CMessage("It\'s actually very freeing, most men love it.");
    CMessage("You can just give in to your submissive desires.");
    CMessage("I\'ll start off slow.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt(null,-1,2);
    CMessage("All you have to do is follow my instructions");
    CMessage("Doesn\'t that sound nice?");
    CMessage("I will tell you exactly what to do.");
    CMessage("Starting now your cock is under my control.");
    CMessage("I bet it excites you to be under my control");
    CMessage("I want you to touch yourself while thinking of how powerless you are right now.");
    CMessage("You have given up everything to me, I have full control of your body.");
    CMessage("Keep stroking your cock as I caress my body.");
    CMessage("I know how much you want to touch me right now but you don\'t have permission for that");
    CMessage("Go all the way up and down as you think about how you HAVE to stroke your cock for me.");
    CMessage("You don\'t have a choice, you have to jerk off for me");
    CMessage("because it\'s what I want you to do");
    CMessage("You\'re going to keep stroking your cock for me but remember");
    CMessage("since I am in control, don\'t get too excited too fast.");
    CMessage("Remember, you do everything that I say.");
    let answer0 = getInput("And isn\'t it so relaxing, so much better to not have to think for yourself?");
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("It\'s so much better when I tell you to stroke your cock, it\'s much more fun that way.");
    CMessage("It\'s going to give you much more pleasure to do what I say.");
    CMessage("keep stroking your cock and you can play with your balls a little for extra stimulation.");
    CMessage("I want you to get really excited now so you can fantasize about touching my beautiful body");
    CMessage("but you still have to prove that you can be a good boy before you can touch me.");
    CMessage("All you have to do is listen to me.");
    CMessage("You have no other responsibilities, nothing else matters.");
    CMessage("Now I want you to start stroking faster and get yourself close to orgasm.");
    CMessage("Squeeze your cock tight enough to feel real good but without cumming yet.");
    let answer1 = getInput("Isn\'t it better this way, letting go and having someone else be in control?");
    if (answer1.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer1.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("I know you will want to keep giving yourself to me.");
    DoEdges(3, 3, 0,-1,2);
    CMessage("Good boy.");
    let answer2 = getInput("Isn\'t it so much better to have a woman telling you to edge instead of just jerking off to porn?");
    if (answer2.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer2.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("I know you enjoyed it and you are going to want me to control you more and more.");
    CMessage("It\'s perfectly natural, you should just give in and enjoy yourself.");
    SMessage("Look who is back", -1, 2);
    addContact(1);
    CMessage("Hi %PetName%, miss me?");
    removeContact(2);
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
    CMessage("%AV_Break1%");
    CMessage("%AV_Luxury%");
    CMessage("%AV_Break2%");
    CMessage("Hey %domFriend2Name%");
    addContact(3);
    SMessage("Hi %EmoteLaugh%", -1, 3);
    CMessage("%AV_Break3%");
    SMessage("%AV_Break4%", -1, 3);
    removeContact(1);
    CMessage("Your whole purpose is to to serve me.");
    let answer0 = getInput("Want to please me? Want to become my favorite pet?");
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("Then listen closely and follow my instructions.");
    CMessage("If you want to be in my good books you are going to have to work hard");
    CMessage("because to be a good pet you have to put my happiness before yours.");
    CMessage("Ready to really serve me %Slave%?");
    CMessage("Then let\'s begin.");
    CMessage("So JOI... Jerk Off Instruction...");
    CMessage("That\'s what you want!!!");
    CMessage("It\'s no secret.");
    CMessage("You reallllly like jerking off.");
    CMessage("I know how you guys are. You get so worked up... cock as hard as a rock...");
    CMessage("imagining I\'m there with you.");
    CMessage("Not this time.");
    let answer1 = getInput("You like to be insulted, right?");
    if (answer1.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer1.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("So take out your cock and do what you do best.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt(null,-1,3);
    CMessage("I know what I\'m doing to you");
    CMessage("you know what I am doing to you.");
    CMessage("Let\'s strip away the pretense for this one shall we?");
    CMessage("I\'ve trapped you inside your own brain");
    CMessage("used up every ounce of manipulation I had and shoved it in to you");
    CMessage("Now you\'re nothing but a modifiable sack");
    CMessage("so eager to please me");
    CMessage("to do anything for goddess.");
    CMessage("You would do the sickest things at a drop of a hat for me wouldn\'t you %Slave%?");
    CMessage("%stopstroking%", 0);
	stopStrokingAll();
    if(!getVar("AV_PinDone", false))
    {
        run("Custom" + separator + "Miniscripts" + separator + "AV_GetPins");
    }
    CMessage("%KneelForMe%");
    setVar("AV_PinDone", true);
    CMessage("I\'ve turned you in to a toy, one I love to come and play with every so often, rattling the chains where you sleep.");
    CMessage("How does it feel to know I have this control over you");
    CMessage("that I can take a leash and clip it on to your collar and you would walk willingly by my side.");
    CMessage("Does it fuck you up? Or does it turn you on?");
    CMessage("We both know the answer pet, it\'s just time you admitted it.");
    CMessage("I own you.");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Put " + randomInt(3, 4) + "clothespins on your %Balls%");
        sleep(20);
    }
    //CMessage("%StartStroking%");
	setStrokingNoTaunt(null,-1,3);
    CMessage("and don\'t forget");
    CMessage("I\'m smarter than you and I know better than you what belongs in your life");
    CMessage("and what doesn\'t");
    CMessage("I know that you want it.");
    CMessage("I know you love me telling you what to do " + random("and how to do it", "and when to do it"));
    CMessage("I have programmed you to the point where you can not live without it!");
    CMessage("you yearn for My control and dream of serving at My feet.");
    CMessage("It is so much better when you are doing it for Me.");
    CMessage("%Edge%");
    startEdging("%Edge%",-1,3);
	CMessage("%stopstroking%", 0);
    CMessage("I expect you on your knees with your cock standing at attention.");
    CMessage("%SitDown% and remove all clothespins");
    SMessage("Look who is back", -1, 3);
    addContact(1);
    CMessage("Hi %PetName%, miss me?");
    removeContact(3);
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
    CMessage("I am granting you a rare privilege now");
    CMessage("I\'m going to let you stroke yourself at my command.");
    CMessage("You must do it my way and follow my orders with exactness");
    let answer0 = getInput("Can you maintain control of yourself for your mistress?");
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("You\'re doing well so far.");
    CMessage("What I want you to do now is lift your hips just a little in your seat.");
    CMessage("You\'re going to take your dominant hand and do your best to cup your testicles through your pants in it.");
    CMessage("Try to fit as much of them as possible.");
    CMessage("Your other hand is going to feel it\'s way around the outline of your shaft.");
    CMessage("You should make sure that your hand is only on the shaft, and not the tip or head.");
    CMessage("Then what you\'re going to do is carefully knead at your balls with your fingers in a rolling motion.");
    CMessage("While you do this, you\'re going to squeeze at your shaft from the top.");
    CMessage("You may start.. now.");
    CMessage("Keep going.");
    sleep(15);
    CMessage("You\'re doing well.");
    CMessage("Okay. You can stop.");
    CMessage("You can relax your hips and stop squeezing for now. ");
    CMessage("Now we\'re going to do something a little more intense.");
    CMessage("Take one of your hands and feel your balls.");
    CMessage("Find one and feel it gently between your fingers.");
    CMessage("Massage it and caress it in your fingertips.");
    CMessage("You can alternate between them if you like.");
    CMessage("With your other hand, I want you to take your index finger and your thumb again.");
    CMessage("Put your thumb just underneath the little lip part on the back of the head.");
    CMessage("Now take your index fingertip and touch your slit");
    CMessage("and make sure you gather up as much precome as you can on it.");
    CMessage("Then slide your finger down until its in that sensitive part on the underside.");
    CMessage("Press your thumb firm into the back of your shaft");
    CMessage("and then press your index finger against the underside.");
    CMessage("Use your thumb to keep it still, and move your index finger in a circle shape on that sensitive spot.");
    CMessage("Spread that precome around, and keep moving it in circles.");
    CMessage("Move it up and down to, if you want, but let\'s pay lots of attention to that spot...");
    CMessage("I bet that feels good, doesn\'t it?");
    CMessage("Its your most sensitive place, and I\'m rubbing right up against it..");
    CMessage("I bet your balls feel nice and heavy too.");
    CMessage("Make sure you\'re not forgetting to rub them and feel them.");
    CMessage("We want them nice and tight up underneath you..");
    CMessage("You can handle it.");
    CMessage("Make sure you\'re putting on the pressure..");
    CMessage("Okay, now you can stop.");
    CMessage("How are you feeling right now? A bit tense?");
    CMessage("I bet you\'d like a handjob from me, wouldn\'t you?");
    CMessage("I have soft, smooth hands..");
    CMessage("I bet you\'d just love to have all that stress and tension worked up out of you.");
    CMessage("Would you like it if I emptied those big balls of yours?");
    CMessage("Would you like it if I milked you dry?");
    CMessage("Let\'s work on that a little then..");
    CMessage("We\'ll pick up our pace a little bit.");
    CMessage("We need to get you nice and bothered..");
    CMessage("So let\'s take one hand and put it back on your balls.");
    CMessage("Cup as much of it as you can..");
    CMessage("Take your other hand and slide it back down onto yourself.");
    CMessage("Now you\'re going to lightly squeeze those balls, really gently");
    CMessage("curl your other hand tightly and slowly pump it onto yourself, as though it was mine. Move very slowly.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("Make sure you\'ve got your fingers tight.");
    CMessage("Work your way down to the bottom, making sure your other hand is giving those balls light little squeezes..");
    CMessage("Now you\'re going to stroke yourself for a little while.");
    CMessage("Nice and slow, but with lots of pressure.");
    CMessage("I\'m not going to let you off easy, after all..");
    CMessage("Now slowly move top to bottom, back and forth.");
    CMessage("Don\'t move your hips just yet.");
    CMessage("Keep going until I tell you to do something differently.");
    CMessage("You\'re doing well. It\'s a nice, slow milk..");
    CMessage("I want to churn up everything inside of you and fill you up nicely.");
    CMessage("Keep going..");
    CMessage("Make sure you\'re feeling those balls. I want them aching.");
    CMessage("You can keep going for just a bit longer.");
    CMessage("Bite your lip a bit if you need to..");
    CMessage("Groan, grunt.. it\'s okay.");
    CMessage("Make as much noise as you need to.");
    CMessage("Alright, now keep doing what you\'re doing..");
    CMessage("Now I want you to squeeze a bit harder on your balls.");
    CMessage("Not super tightly, but enough where you can feel each one outlined in your palm.");
    CMessage("Use your thumb and move them around inside you a bit if you like.");
    CMessage("I want you to start moving your hips a little now.");
    CMessage("Upward, like you were thrusting toward me.");
    CMessage("You can stroke a bit faster now. Once per second, but no faster.");
    CMessage("Don\'t get any looser.");
    CMessage("You can twist and shift as much as you need to, but no faster than one stroke a second.");
    CMessage("Move your hips up.. and down..");
    CMessage("Desperately trying to feel all of your big, hard cock in my soft, warm hands.");
    CMessage("You\'re doing so well.");
    CMessage("I can tell by the look on your face that you\'re starting to feel a little uneasy.");
    CMessage("But that\'s okay, because you\'re going to keep going..");
    CMessage("That\'s it. Make sure those balls are getting fuller and closer to the base of your shaft..");
    CMessage("Alright, now.. again, don't stop what you're doing..");
    CMessage("We\'re going to make things a little difficult now.");
    CMessage("A little endurance.");
    CMessage("I want you to stop playing around with your balls and give them some serious attention.");
    CMessage("I want you to start squeezing them as hard as you possibly can without hurting yourself.");
    CMessage("Keep that squeeze and hold it.");
    CMessage("Don\'t hurt yourself.");
    CMessage("Get yourself as far as you can, and then hold that squeeze.");
    CMessage("Now I want you to move your hips faster.");
    CMessage("You should time your thrusts so that they meet with your hand on your stroke.");
    CMessage("I wanna hear a nice slapping sound.");
    CMessage("You can stroke faster now. Twice a second if you like.");
    CMessage("Make sure you\'re lifting your hips and bucking up nice, thrusting into my hands..");
    CMessage("Look at you, helplessly pounding away into them.");
    CMessage("You\'re so desperate. But it\'s cute..");
    CMessage("I can see how hard it\'s getting for you to keep going.");
    CMessage("You want so badly to have control over yourself right now.");
    CMessage("I can tell. It\'s written all over your red face..");
    CMessage("Keep thrusting. Keep squeezing.");
    CMessage("I'll tell you when you can stop. Not yet.");
    CMessage("Be a good boy and fuck my hands. Put all the strength you can into those hips.");
    CMessage("Alright. Give your balls a final squeeze, and slow your hips a little.");
    CMessage("Don\'t slow down your strokes.");
    CMessage("Keep stroking..");
    let answer1 = getInput("You want to satisfy me, don\'t you?");
    if (answer1.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer1.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("You wouldn\'t want to leave me disappointed.");
    CMessage("Stop");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    return;
}