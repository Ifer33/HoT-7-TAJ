DMessage("AV_BadMood: start");
main();
DMessage("AV_BadMood: end");
function main()
{
    if(getVar("av_AV_BMFirst", false))
    {
        av_AV_BMFirst();
        return;
    }
    setTempVar("av_AV_BMFirst", true);
    switch(random("Dom1", "Dom2", "Dom3", "Dom4", "Dom5"))
    {
        case "Dom1":
        Dom1();
        return;
        break;
        case "Dom2":
        Dom2();
        return;
        break;
        case "Dom3":
        Dom3();
        return;
        break;
        case "Dom4":
        Dom4();
        return;
        break;
        case "Dom5":
        Dom5();
        return;
        break;
    }
    
    av_AV_BMFirst();
}
function av_AV_BMFirst()
{
    setTempVar("AV_BMDONE", true);
    if(getVar("AV_BM01", false))
    {
        switch(random("Dom2", "Dom3", "Dom4", "Dom5"))
        {
            case "Dom2":
            Dom2();
            return;
            break;
            case "Dom3":
            Dom3();
            return;
            break;
            case "Dom4":
            Dom4();
            return;
            break;
            case "Dom5":
            Dom5();
            return;
            break;
        }
    }
    if(getVar("AV_BM02", false))
    {
        switch(random("Dom1", "Dom3", "Dom4", "Dom5"))
        {
            case "Dom1":
            Dom1();
            return;
            break;
            case "Dom3":
            Dom3();
            return;
            break;
            case "Dom4":
            Dom4();
            return;
            break;
            case "Dom5":
            Dom5();
            return;
            break;
        }
    }
    if(getVar("AV_BM03", false))
    {
        switch(random("Dom1", "Dom2", "Dom4", "Dom5"))
        {
            case "Dom1":
            Dom1();
            return;
            break;
            case "Dom2":
            Dom2();
            return;
            break;
            case "Dom4":
            Dom4();
            return;
            break;
            case "Dom5":
            Dom5();
            return;
            break;
        }
    }
    if(getVar("AV_BM04", false))
    {
        switch(random("Dom1", "Dom2", "Dom3", "Dom5"))
        {
            case "Dom1":
            Dom1();
            return;
            break;
            case "Dom2":
            Dom2();
            return;
            break;
            case "Dom3":
            Dom3();
            return;
            break;
            case "Dom5":
            Dom5();
            return;
            break;
        }
    }
    if(getVar("AV_BM05", false))
    {
        switch(random("Dom1", "Dom2", "Dom3", "Dom4"))
        {
            case "Dom1":
            Dom1();
            return;
            break;
            case "Dom2":
            Dom2();
            return;
            break;
            case "Dom3":
            Dom3();
            return;
            break;
            case "Dom4":
            Dom4();
            return;
            break;
        }
    }
    switch(random("Dom1", "Dom2", "Dom3", "Dom4", "Dom5"))
    {
        case "Dom1":
        Dom1();
        return;
        break;
        case "Dom2":
        Dom2();
        return;
        break;
        case "Dom3":
        Dom3();
        return;
        break;
        case "Dom4":
        Dom4();
        return;
        break;
        case "Dom5":
        Dom5();
        return;
        break;
    }
    
    Dom1();
}
function Dom1()
{
    CMessage("Don\'t you dare touch your %Cock%.");
    setTempVar("AV_BM01", true);
    CMessage(random("You\'ll have to earn every single stroke now", "I think your ready to begin the real agony..."));
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon, rubber bands and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("lets see if we can get your cock to drip.");
        switch(random("a001", "a002"))
        {
            case "a001":
            a001();
            return;
            break;
            case "a002":
            a002();
            return;
            break;
        }
    }
    if(!getVar("av_fetish_pain", false))
    {
        a004();
        return;
    }
    a001();
}
function a001()
{
    CMessage("Snap the shaft of your cock 20 times with a rubber band before tightly wrapping it around it\'s base.");
    a003();
    return;
    a002();
}
function a002()
{
    CMessage("Now take a band and snap your head once.");
    CMessage("Since I\'m only having you snap it once, you better pull it back as far as you fucking can.");
    a003();
}
function a003()
{
    sleep(15);
    CMessage("Good, taken like a true bitch.");
    a004();
}
function a004()
{
    CMessage("Now wrap that band tightly beneath the head.");
    CMessage("Oh fuck, I could hear you yelping from here!");
    if(getVar("av_fetish_cei", false))
    {
        CMessage("I know what could solve that. Smear any precum you might have into your mouth. That should help those pathetic whines!");
    }
    CMessage("you may stroke JUST your shaft 5 times.");
    sleep(15);
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Before move on, place a clothes peg on each nipple and on each ball.");
        sleep(20);
    }
    CMessage("Now that your all squeezed in the right places...");
    //CMessage("%StartStroking%");
	stroking();
    CMessage("Nothing complex now, just a small fleeting glimpse of pleasure in the larger tease.");
    if(!getVar("av_fetish_pain", false))
    {
        a005();
        return;
    }
    CMessage("However, when you reach the edge");
    CMessage("snap your cock head as hard as you can with one of the bands.");
    CMessage("I don\'t care if you already snapped that hard earlier");
    CMessage("I want this to hurt like none other.");
    a005();
}
function a005()
{
    CMessage("ready?");
    CMessage("%Edge%");
	startEdging();
	CMessage("%stopstrokingedge%", null, false);
	CMessage("%lettheedgefade%");
    CMessage("You really are becoming a mess aren\'t you %PetName%?");
    CMessage("Now that were nearing the end of your torment...");
    CMessage("I think it\'d only be right to abuse you a bit more");
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Take your tender cock and give it 10 snaps with a rubber band.");
        sleep(20);
    }
    CMessage("I need you to stroke as slow as you can to not come anywhere near an edge.");
    CMessage("Give me 25 strokes, full hand and all.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("Bare across your cock.");
    CMessage("This is only to keep your hard, I can\'t have you having too much fun.");
    sleep(20);
    return;
    
    Dom2();
}
function Dom2()
{
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage(random("You need to learn to obey, %PetName%", "You need to learn to be a good boy and do whatever the fuck I say"));
    if(getVar("AV_Beta", false))
    {
        beta05();
        return;
    }
    CMessage("It\'s obvious that you have some trouble seeing it that way");
    CMessage("So I need to help you see the light...");
    at_my_feet();
    return;
    beta05();
}
function beta05()
{
    let answer0 = getInput("You understand why this is necessary, right?");
    if (answer0.isLike("yes", "yea", "yep"))
    {
        //aV_YesGoodResponse("AV_YesGood");
		aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
        return;
    }
    CMessage("It\'s because you are worthless to me otherwise");
    CMessage("I mean you\'re not a real man anyway, so what use could you possibly be to someone like me...");
    CMessage("You know your rightful place is at my feet");
    at_my_feet();
}
function at_my_feet()
{
    if(getVar("AV_SubKnees", false))
    {
        CMessage("And stay the fuck down on your knees while you do so");
    }
    if(!getVar("pvWillNotKneel", false))
    {
        CMessage("%KneelForMe%");
    }
    CMessage("So... what can I do strengthen you submission to me...");
    setTempVar("AV_BM02", true);
    CMessage("Get ready to stroke at my pace...");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Count" + java.io.File.separator + "d30.mp3");
    sleep(08);
    CMessage("%Stop%");
    if (randomInteger(1, 100) <= 40)
    {
        mi87g();
        return;
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "Spank ") + "your balls");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(20);
    }
    if (randomInteger(1, 100) <= 50)
    {
        ds3gh();
        return;
    }
    mi87g();
}
function mi87g()
{
    CMessage("Stroke");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Count" + java.io.File.separator + "d40.mp3");
    sleep(08);
    CMessage("%Stop%");
    if (randomInteger(1, 100) <= 50)
    {
        ds3gh();
        return;
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "Spank ") + "your balls");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(20);
    }
    ds3gh();
}
function ds3gh()
{
    CMessage("Stroke");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Count" + java.io.File.separator + "d50.mp3");
    sleep(07);
    CMessage("%Stop%");
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "Spank ") + "your balls");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(20);
    }
    return;
    
    Dom3();
}
function Dom3()
{
    CMessage("What if I wanted to destroy not just your orgasms");
    setTempVar("AV_BM03", true);
    CMessage("but your actual balls as well.");
    CMessage("It would be so easy to tie you up");
    CMessage("slip off the cage and slip on an elastrator band, wouldn\'t it?");
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "Spank ") + "your balls");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(20);
    }
    CMessage("I can make a promise to you and I want to keep that promise...");
    CMessage("and I mean to destroy every orgasm I ever let you have again...");
    if(getVar("av_fetish_pain", false))
    {
        CMessage(random("Hit ", "Spank ") + "your balls");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
        sleep(20);
    }
    return;
    
    
    Dom4();
}
function Dom4()
{
    setTempVar("AV_BM04", true);
    if(getVar("pvPermanentChastityFantasyYes", false))
    {
        pvPermanentChastityFantasyYes();
        return;
    }
    if(getVar("pvPermanentChastityFantasyNo", false))
    {
        pvPermanentChastityFantasyNo();
        return;
    }
    if(getVar("pvPermanentDenialFantasyYes", false))
    {
        pvPermanentDenialFantasyYes();
        return;
    }
    if(getVar("pvPermanentDenialFantasyNo", false))
    {
        pvPermanentDenialFantasyNo();
        return;
    }
    CMessage("Whenever I make you stop...");
    CMessage("You know that at some point, I\'ll let you %JerkOff% again");
    CMessage("Not now, but soon... probably...");
    CMessage("I wonder if knowing that makes waiting for it easier or more difficult");
    CMessage("I guess if you\'d never get to touch it again, that would take some of the pressure off");
    CMessage("You wouldn\'t have to worry about anymore");
    CMessage("The way you\'ve been behaving makes me think that maybe that would be for the best");
    CMessage("We both know you wouldn\'t be able to go without masturbation entirely");
    CMessage("But still, I wonder...");
    //--Command:DoesNotHaveChastity
	if(!getVar("hasChastity",false) ){
		permanent_denial();
		return;
	}
    let answer0 = getInput("Do you secretly fantasize about being put in permanent chastity without any chance of release?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Interesting fantasies you have, %PetName% %Laugh%");
        setVar("pvPermanentChastityFantasyYes", true);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("I guess you just like %JerkingOff% too much %Laugh%");
        setVar("pvPermanentChastityFantasyNo", true);
    }
    CMessage("It turns me on to think about it, %PetName%");
    continue_talking_denial();
    return;
    permanent_denial();
}
function permanent_denial()
{
    let answer0 = getInput("Do you secretly fantasize about being permanently denied without any chance of release?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Interesting fantasies you have, %PetName% %Laugh%");
        setVar("pvPermanentDenialFantasyYes", true);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("I guess you just like %JerkingOff% too much %Laugh%");
        setVar("pvPermanentDenialFantasyNo", true);
    }
    CMessage("It turns me on to think about it, %PetName%");
    continue_talking_denial();
}
function continue_talking_denial()
{
    CMessage("Maybe some day I\'ll simply decide never to allow you the pleasure of orgasm again");
    CMessage("Maybe we\'ll get there in stages");
    CMessage("First I would decide to only let you have ruined orgasms");
    CMessage("The I\'d reduce your orgasms to once a month");
    CMessage("Then to twice a year");
    CMessage("And then one day, you\'ll have your very last orgasm ever");
    CMessage("After that I\'d still let you %JerkOff% at first");
    CMessage("But without orgasms, what would be the point... so then I put an end to that as well...");
    CMessage("You\'d never ever get to %JerkOff% again from that day forward");
    CMessage("%EmoteMoan%");
    CMessage("That really got me excited %Smile%");
    return;
    pvPermanentChastityFantasyYes();
}
function pvPermanentChastityFantasyYes()
{
    CMessage("It " + random("gets ", "makes ") + "me so " + random("horny ", "turned on ", "wet ") + "thinking about how I can lock that %Cock% in that cage whenever I want to");
    CMessage("I like it so much I might never let you out again next time you\'re locked up");
    CMessage("Especially given the way you\'ve been acting...");
    return;
    pvPermanentChastityFantasyNo();
}
function pvPermanentChastityFantasyNo()
{
    CMessage("I\'m not sure why I don\'t lock you in chastity right now");
    CMessage("We both know that you deserve it right now, the way you\'ve been acting...");
    CMessage("Prove to me that you can be a good %PetName% and I maybe I won\'t lock you up");
    return;
    pvPermanentDenialFantasyYes();
}
function pvPermanentDenialFantasyYes()
{
    CMessage("It " + random("gets ", "makes ") + "me so " + random("horny ", "turned on ", "wet ") + "thinking about how you\'re so desperate to start %JerkingOff%");
    CMessage("I like it so much I might never let you do it again...");
    CMessage("Especially give the way you\'ve been acting, I don\'t even think you deserve to ever %JerkOff% again");
    return;
    pvPermanentDenialFantasyNo();
}
function pvPermanentDenialFantasyNo()
{
    CMessage("I think I want to let you masturbate just as bad as you want to masturbate");
    CMessage("But we both know that you don\'t deserve it right now, the way you\'ve been acting...");
    CMessage("Prove to me that you can be a good %PetName% and I might let you %JerkOff% again");
    return;
}
function Dom5()
{
    //--Command:BallTorture
	if(ballTorture() ){
		Ball_Torture();
		return;
	}
    CMessage("You\'re lucky I don\'t bust your %Balls% for your recent behaviour, %PetName%");
    setTempVar("AV_BM05", true);
    CMessage("In fact, I\'m thinking I might have to reconsider our no-ballbusting agreement");
    CMessage("Because you\'re getting off way to easy");
    CMessage("If only you made me a happy %DomHonorific% all the time, this wouldn\'t even be an issue");
    CMessage("But that\'s not how it is, is it?");
    CMessage("You\'re being a disobedient %PetName% who needs his %Balls% beaten");
    CMessage("But no ballbusting was the deal, so I won\'t");
    CMessage("Maybe someday you\'ll reconsider that arrangement");
    return;
    Ball_Torture();
}
function Ball_Torture()
{
    if(getVar("pthevShoelace", false))
    {
        pthevShoelace();
        return;
    }
    CMessage("%PetName%... I want to tie up those poor %Balls% of yours");
    setTempVar("AV_BM05", true);
    let answer0 = getInput("Can you go get a shoelace?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Great, go get it then");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("That\'s too bad");
        without_shoelace();
        return;
    }
    let answer1 = getInput("Let me know when you\'re ready, but don\'t make me wait too long...");
    setVar("pthevShoelace", true);
    while (!(answer1.isLike("ready")))
    {
        answer1 = getInput("Let me know when you\'re ready");
    }
    if (answer1.isLike("ready"))
    {
        CMessage("Good");
    }
    pthevShoelace();
}
function pthevShoelace()
{
    if(!getVar("AV_BallTied", false))
    {
        CMessage("I want you to tie off your %Balls% for me right now");
        balls_already_tied();
        return;
    }
    CMessage("Go ahead and untie your %Balls%");
    delVar("AV_BallTied");
    CMessage("I want them to taste the freedom they\'ve been lacking lately");
    CMessage("They suffer so much for me, don\'t they?");
    CMessage("Grab your %Balls% and start rubbing them");
    CMessage("Rub them gently, massage them, squeeze them a bit but not too hard");
    CMessage("They\'ve been tied up so tight, they deserve a little love don\'t you think? %Smile%");
    CMessage("Now tie them back up again, but tighter than before %Grin%");
    balls_already_tied();
}
function balls_already_tied()
{
    CMessage("I\'m going to have some fun with those poor %Balls%");
    setTempVar("AV_BallTied", true);
    CMessage("Hurry the fuck up, I don\'t like to be kept waiting, %PetName%");
    without_shoelace();
}
function without_shoelace()
{
    if(getVar("AV_SubKnees", false))
    {
        CMessage("%SitDown%");
    }
    CMessage("I want you to slide up to the edge of your seat so those %Balls% are exposed");
    CMessage("Spread your legs apart as far as you can");
    if(getVar("pvSpoon", false))
    {
        CMessage("You better have the wooden spoon ready, go get it quickly if you don\'t");
    }
    setTempVar("AV_BM05", true);
    CMessage("You know what\'s going to happen now, don\'t you?");
    CMessage("And you know it\'s going to hurt...");
    increaseAnger(4)
    CMessage("But that\'s how it is with me, if you\'re bad you get hurt");
    //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
	cbt("ball");
    CMessage("Now let me ask you a question, %PetName%");
    CMessage("I think you will understand that there\'s only one right answer to the question");
    let answer0 = getInput("Do you want more?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Good %PetName%");
        want_more();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("That\'s not the answer I wanted to hear, %PetName%");
        increaseAnger(3)
    }
    CMessage("So let me try again...");
    let answer1 = getInput("Do you want more, %SubName%?");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("%YesOrNo%");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("Good %PetName%");
        want_more();
        return;
    }
    else if (answer1.isLike("no"))
    {
        CMessage("Alright then");
    }
    CMessage("I thought you wanted to make me happy, but apparently I\'m not all that important to you");
	changeDommeLevel(-2);
    //--Command:DommeLevelDown
	setMood("worst");
    //--Command:MoodWorst
    return;
    want_more();
}
function want_more()
{
    CMessage("I know you want nothing more than to make me happy");
	changeDommeLevel(-2);
    //--Command:DommeLevelDown
    CMessage("It\'s just too bad that making me happy sometimes involves getting your %Balls% busted %Laugh%");
	cbt("ball");
    //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
    if(getVar("AV_BallTied", false))
    {
        CMessage("Go ahead and untie those poor %Balls% now");
        delVar("AV_BallTied");
	}
    CMessage("I almost want to say I hope it doesn't hurt too bad, but the truth is I don't care");
	//@SetMood(%Random%(%DomMoodMin%,%DomMoodMax%))
	setMood("random");
    CMessage("In fact, why would I make you beat them if I didn\'t want it to hurt...");
    CMessage("That wouldn\'t make any sense now would it %Laugh%");
    return;
}