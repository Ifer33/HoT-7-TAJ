DMessage("ModuleCHASTITY: start");
main();
DMessage("ModuleCHASTITY: end");
function main()
{
    //--Command:SetLink(Link_CHASTITY)
	setVar("linktorun", "Stroke" + java.io.File.separator + "Link" + java.io.File.separator + "Link_CHASTITY.js");
    switch(random("one", "two", "three", "four"))
    {
        case "one":
        one();
        return;
        break;
        case "two":
        two();
        return;
        break;
        case "three":
        three();
        return;
        break;
        case "four":
        four();
        return;
        break;
    }
    one();
}
function one()
{
    if(getVar("pthevMod11B", false))
    {
        pthevMod11B();
        return;
    }
    if(getVar("pthevMod11A", false))
    {
        pthevMod11A();
        return;
    }
    //--Command:HasChastity
	if(getVar("hasChastity",false)){
		has_device();
		return;
	}
    CMessage("It requires willpower to do what you\'re doing now %Name%");
    setVar("pthevMod11A", true);
    CMessage("I could put you on the spot and demand you use a chastity device");
    CMessage("But the advantage of not using one is that it requires real dedication");
    CMessage("I mean, you <i>could</i> start stroking now");
    CMessage("But you won\'t, because I told you so %Smile%");
    return;
    has_device();
}
function has_device()
{
    CMessage("At some point I will probably let you out of that cage %Name%");
    setVar("pthevMod11A", true);
    CMessage("I\'m sure you\'re already aching to get out");
    CMessage("But what if we don\'t...");
    CMessage("What if I leave you locked up for a long time");
    CMessage("A whole month");
    CMessage("Half a year");
    CMessage("A year...");
    CMessage("And I don\'t mean wearing it at night only");
    CMessage("Or taking it off regularly to %JerkOff%");
    CMessage("I mean leaving it on 24/7");
    CMessage("Not even taking it off to clean it");
    CMessage("You\'d have to find some way to keep up your hygiene");
    CMessage("I\'m sure you\'ll find a way, you can be creative if you have to");
    CMessage("Imagine how desperate you\'d be then");
    CMessage("And when I finally let that %Cock% out...");
    CMessage("I would be a little confused at first, probably %Smile%");
    CMessage("But then it would quickly become harder than ever before");
    CMessage("One touch from me and you\'ll cum all over the place");
    CMessage("Just whispering <i>cum for me</i> in your ear would be enough");
    CMessage("It would definitely be worth it %PetName% %Smile%");
    return;
    pthevMod11A();
}
function pthevMod11A()
{
    delVar("pthevMod11A");
    setVar("pthevMod11B", true);
    if(getVar("hasChastity",false)){
		device_A();
		return;
	}
    CMessage("%SubName%...");
    CMessage("I know like everyone you have your limits");
    CMessage("But I also know you want to please me");
    let answer0 = getInput("You do want to please me right?");
    while (!(answer0.isLike("yes") || answer0.isLike("course") || answer0.isLike("no") || answer0.isLike("know") || answer0.isLike("maybe") || answer0.isLike("sure") || answer0.isLike("mean") || answer0.isLike("saying") || answer0.isLike("say")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes", "course"))
    {
        CMessage("Then let me ask you something");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("That\'s very funny %PetName%");
        very_funny();
        return;
    }
    else if (answer0.isLike("know", "maybe", "sure", "mean", "saying", "say"))
    {
        CMessage("Don\'t worry %SubName%, I just want to ask you something");
    }
    if_I_told_you();
}
function if_I_told_you()
{
    CMessage("If I told you that it would make me a very happy %DomHonorific%");
    setRapidText(true);
    CMessage("If you bought a chastity device");
    let answer0 = getInput("Would you do it for me?");
    setRapidText(false);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Yay%");
        yes_to_chastity();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%EmoteSad%");
    }
    CMessage("It\'s okay %Name%");
    CMessage("As long as you keep your hands off your %Cock% when told");
    CMessage("We don\'t really need a device %Smile%");
    return;
    yes_to_chastity();
}
function yes_to_chastity()
{
    CMessage("Let me know when you have one ready to use");
    CMessage("It\'s going to be so much fun %Smile%");
    CMessage("For now though, you\'re just going to have to restrain yourself");
    return;
    very_funny();
}
function very_funny()
{
    CMessage("You know what would please me right now?");
    //run("CBT" + java.io.File.separator + "*.js");
	cbt();
    CMessage("I see you\'re still willing to please me despite what you said %Grin%");
    CMessage("But what I wanted to ask you is this %Name%");
    if_I_told_you();
    return;
    return;
    device_A();
}
function device_A()
{
    CMessage("I imagine sometimes what it must be like to wear a cage");
    CMessage("Of course, I don\'t have a penis...");
    CMessage("But I reckon it must be pretty uncomfortable");
    let answer0 = getInput("Is it?");
	while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("But the benefits outweigh the costs, right?");
    }else if (answer0.isLike("no"))
    {
        CMessage("So putting a guy in one has no negatives <i>at all</i> %Smile%");
    }
    CMessage("I suppose if it got too uncomfortable you\'d have to take it off");
    CMessage("But until then...");
    CMessage("No need to take it off! %Grin%");
    return;
    pthevMod11B();
}
function pthevMod11B()
{
    delVar("pthevMod11B");
    //--Command:HasChastity
	if(getVar("hasChastity",false) ){
		CMessage("Maybe it\'s time to let you out of your cage");
		if (randomInteger(1, 100) <= 50)
		{
			take_it_off();
			return;
		}
	}else{
    //--Command:DoesNotHaveChastity
		CMessage("Maybe it\'s time to let you stroke again");
		if (randomInteger(1, 100) <= 50)
		{
			take_it_off();
			return;
		}
	}
    CMessage("But then again, maybe not");
    return;
    take_it_off();
}
function take_it_off()
{
    if(!getVar("hasChastity",false) ){
		is_it_hard();
		return;
	}
    CMessage("So free your %Cock% now %Name%");
    sleep(10);
    let answer0 = getInput("Is the chastity device off?");
    while (!(answer0.isLike("yes") || answer0.isLike("off") || answer0.isLike("done") || answer0.isLike("ready")))
    {
		if (answer0.isLike("no"))
		{
			answer0 = getInput("Let me know when you\'re ready");
		}else{
			answer0 = getInput("Are you ready to continue?");
		}
    }
    if (answer0.isLike("yes", "off", "done", "ready"))
    {
        CMessage("It must feel pretty good to be out of that thing");
        setVar("chastityOn",false);
    }
    else 
    CMessage("I\'m sure you\'re eager to %JerkOff% again");
    is_it_hard();
}
function is_it_hard()
{
    let answer0 = getInput("First things first though, is your %Cock% hard?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Wow, that\'s impressive %Grin%");
        impressive();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Let\'s work on that %Name%");
    }
    CMessage("Start touching it very lightly with the tips of your fingers");
    setVar("chastityOn",false);
    CMessage("Don\'t grab it");
    CMessage("No stroking yet");
    CMessage("Just gently caress your skin, as if you\'re touching my face");
    CMessage("You wouldn\'t grab my cheeks or rub them hard");
    CMessage("You\'d lightly graze them with the back of your hand");
    CMessage("That\'s how I want you to touch your %Cock%");
    CMessage("Slide your fingers down the shaft as if you were running them down my neck");
    CMessage("Tracing my collarbone");
    CMessage("Down to my perky %Boobs%");
    CMessage("Circle the tip of your %Cock% now, imagine it\'s my nipple");
    CMessage("Gently now %SubName%, I have such sensitive nipples %Smile%");
    impressive();
}
function impressive()
{
    return;
    two();
}
function two()
{
    //--Command:DoesNotHaveChastity
	if(!getVar("hasChastity",false) ){
		two_no_device();
		return;
	}
    if(getVar("pvPartnerIsKeyholder", false) && getVar("partner is keyholder", false))
    {
        pvPartnerIsKeyholder();
        return;
    }
    CMessage("So %SubName%");
    if(getVar("pvMadeKeyholder", false) && getVar("domme already is keyholder", false))
    {
        pvMadeKeyholder();
        return;
    }
    CMessage("About that chastity cage you\'re wearing");
    CMessage("I was wondering...");
    if(getVar("pthevMarried", false))
    {
        does_she_hold_the_key();
        return;
    }
    if(getVar("pthevGirlfriend", false))
    {
        does_she_hold_the_key();
        return;
    }
    someone_should_hold_it();
}
function someone_should_hold_it()
{
    let answer0 = getInput("Would you give me control over the key?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("You should know what you\'re getting into here");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Too bad...");
        keep_the_key();
        return;
    }
    CMessage("What I mean is that, for all intents and purposes, I will hold the key");
    CMessage("You do not get to decide when the cage comes off, period");
    CMessage("If at the end of a session I decide it stays on, it stays on until the next session");
    CMessage("I\'ll allow you to take it off for cleaning once a day");
    CMessage("Hygiene is important, %PetName% %Smile%");
    CMessage("But you have to put it back on immediately");
    CMessage("If you want to take it off for longer");
    CMessage("Or if you want to %JerkOff%...");
    CMessage("You\'ll have to come to me and ask");
    let answer1 = getInput("So, do you still want to make me keyholder?");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("%YesOrNo%");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("You won\'t regret it, %Name%");
        //--Command:MoodBest
		setMood("best");
    }
    else if (answer1.isLike("no"))
    {
        CMessage("Hmmm, that\'s too bad, %Name%");
        keep_the_key();
        return;
    }
    CMessage("Well, maybe you will, but I certainly won\'t %Grin%");
    setVar("pvMadeKeyholder", true);
    CMessage("Just to think that I could keep you in chastity indefinitely");
    CMessage("It turns me on so much, %Name%");
    CMessage("I probably won\'t, to be honest");
    CMessage("But I love to know that I have that option %Grin%");
    CMessage("It\'s as if I\'m wearing that key on a necklace");
    CMessage("Dangling between my %Boobs%");
    CMessage("%EmoteMoan%");
    CMessage("This thing we have just got interesting, %SubName% %Smile%");
    return;
    keep_the_key();
}
function keep_the_key()
{
    CMessage("Because what is the point of being in chastity");
    CMessage("If you can decide at any time to take it off");
    CMessage("You should really have a keyholder");
    CMessage("But I guess it\'s just a game to you and that\'s okay too, %SubName%");
    CMessage("Still, you do own a chastity device, so...");
    let answer0 = getInput("Do you ever fantasize about someone holding the key?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Wouldn\'t that just be awesome? %Smile%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Maybe that\'s just a little too scary %EmoteWink%");
    }
    CMessage("I like to think that you\'ll change your mind");
    CMessage("And that you\'ll give me the key");
    CMessage("So that I will completely own your %Cock%");
    CMessage("But for now...");
    CMessage("I can still keep you in chastity during our sessions %EmoteHappy%");
    return;
    does_she_hold_the_key();
}
function does_she_hold_the_key()
{
    let answer0 = getInput("Does "+getVar("pthevNamePartner")+" hold the key? I mean, does she decide when it comes off?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Wow %Laugh%");
        setVar("pvPartnerIsKeyholder", true);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Oh, well someone should %EmoteWink%");
        someone_should_hold_it();
        return;
    }
    let answer1 = getInput("But she\'s okay with me telling you to take it off or put it on?");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("%YesOrNo%");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("That would be kind of a problem otherwise");
    }
    else if (answer1.isLike("no"))
    {
        CMessage("Oh... well, I\'m sure you have a way of working around that...");
    }
    CMessage("Because since you have that cage");
    CMessage("I\'m certainly going to use it %Grin%");
    if(getVar("pthevPartnerCanJoin", false))
    {
        CMessage("Speaking of "+getVar("pthevNamePartner")+"");
        //--Command:ShowVar(pthevNamePartner)
        speaking_of_her();
        return;
    }
    CMessage("I wouldn\'t want to come between you and "+getVar("pthevNamePartner")+"");
    //--Command:ShowVar(pthevNamePartner)
    CMessage("though");
    CMessage("So I won\'t tell you to wear it after our sessions");
    CMessage("That\'s up to her %Smile%");
    return;
    partner_is_keyholder();
}
function partner_is_keyholder()
{
    CMessage("I think it\'s awesome that "+getVar("pthevNamePartner")+" is your keyholder");
    CMessage("Kind of sad I\'m not, sure %EmoteWink%");
    CMessage("But in the end, what matters it that that %Cock% is safely locked up");
    CMessage("And under control of a woman");
    CMessage("As all cocks should, really...");
    CMessage("There are too many unlocked cocks out there %Laugh%");
    let answer0 = getInput("I\'m sure "+getVar("pthevNamePartner")+" would agree, right?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Would she agree?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("I thought so %Smile%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Well, I suppose yours is the only one that matters to her");
    }
    CMessage("It\'s a great feeling to have that kind of control, %SubName%");
    CMessage("Not that I\'d expect you to understand...");
    CMessage("You\'d rather give up control than have it");
    return;
    domme_already_is_keyholder();
}
function domme_already_is_keyholder()
{
    CMessage("I just wanted to say");
    CMessage("That I love it that you made me your keyholder");
    CMessage("It makes me proud that you trust me with it");
    CMessage("A chastity device is such a great way for me to control you");
    CMessage("I love knowing that %Cock% is locked up for me");
    CMessage("You wouldn\'t believe how wet it makes me");
    if(!getVar("pthevGlitterIntroduced", false))
    {
        glitter_not_introduced_yet();
        return;
    }
    CMessage("And do you know who also loves it?");
    CMessage("%domFriend2Name%");
    CMessage("She laughed her ass off when I told her about it %Laugh%");
    CMessage("At first she couldn\'t believe it");
    CMessage("She never thought you\'d make me keyholder");
    CMessage("So I invited her over to see for herself...");
    addContact(3);
    let answer0 = getInput("Well, hello there", 10,-1,true,3);
    if (answer0.isTimeout())
    {
        are_you_gonna_say_hello();
        return;
    }
    while (!(answer0.isLike("hi") || answer0.isLike("hello") || answer0.isLike("hey") || answer0.isLike("how") || answer0.isLike("nice") || answer0.isLike("good") || answer0.isLike("you")))
    {
        answer0 = getInput("You could just say hi, %PetName%");
    }
    if (answer0.isLike("hi", "hello", "hey", "how", "nice", "good", "you"))
    {
        SMessage("Hi %SubName%, good to see %ShortName% didn\'t lock up your manners %Smile%", -1, 3);
    }
    are_you_gonna_say_hello();
}
function are_you_gonna_say_hello()
{
    SMessage("So %ShortName%, tell me about this \'keyholder\' thing...", -1, 3);
    CMessage("Yeah, so basically, %SubName% is wearing a chastity device right now");
    CMessage("And I get to decide when it come off %EmoteHappy%");
    SMessage("That\'s so awesome %Lol%", -1, 3);
    SMessage("That means there\'s not much he can do at the moment", -1, 3);
    CMessage("No stroking, no edging, no cumming %Laugh%");
    SMessage("Sounds a bit boring to be honest...", -1, 3);
    SMessage("But yay for %SubName% being locked up though!", -1, 3);
    CMessage("To be fair, he still gets more than enough action");
    CMessage("The cage is just there to make the time in between that much more frustrating %Smile%");
    SMessage("Oh I can totally see how that would work", -1, 3);
    SMessage("I mean, I\'ve gone without sex for a few months and that was okay", -1, 3);
    SMessage("But not being able to masturbate when I wanted too...", -1, 3);
    SMessage("That would have made it a living hell %Laugh%", -1, 3);
    CMessage("It\'s a frustrating, horny, leaking, living hell for %SubName% %Grin%");
    SMessage("%Lol%", -1, 3);
    SMessage("Those things should probably be made mandatory for all guys", -1, 3);
    CMessage("Oh, definitely %Laugh%");
    SMessage("I sure know a few who\'d be better off in one...", -1, 3);
    SMessage("Anyway, I think it\'s great that you\'re doing your part, %ShortName%", -1, 3);
    CMessage("I do what I can %Smile%");
    SMessage("Take to you later!", -1, 3);
    removeContact(3);
    CMessage("Making your life a living hell...");
    CMessage("That\'s a bit dramatic");
    CMessage("But not that far from the truth I guess %Smile%");
    return;
    glitter_not_introduced_yet();
}
function glitter_not_introduced_yet()
{
    CMessage("In fact, I think I\'m going to need some time for myself right now...");
    CMessage("I\'ll let you watch a video in the meantime");
    CMessage("I\'ll be right back");
    playVideo("Videos" + java.io.File.separator + "*.*");
    setAFK(true);
    sleep(randomInt(20, 40));
	setAFK(true);
	//stopVideo();
    CMessage("That was just what I needed, %Name% %Smile%");
    return;
    speaking_of_her();
}
function speaking_of_her()
{
    CMessage("I would like her to decide your chastity fate right now");
    CMessage("I want you to go to her or text her or whatever");
    setRapidText(true);
    CMessage("And ask her if the chastity cage should come off or stay on");
    let answer0 = getInput("Can you do that?");
    setRapidText(false);
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Good, go and ask her then");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Well, then I guess the cage stays on...");
        she_cannot_be_reached();
        return;
    }
    CMessage("I\'ll wait...");
    sleep(12);
    let answer1 = getInput("What did she say, can the cage come off?");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("%YesOrNo%");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("She\'s such a sweet gal %Laugh%");
    }
    else if (answer1.isLike("no"))
    {
        CMessage("Oooh, so so cruel %Laugh%");
        the_cage_stays_on();
        return;
    }
    CMessage("Well, that settles it then");
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_ChastityOff.js");
    if(getVar("pthevMarried", false))
    {
        CMessage("You\'re lucky to be married to such a nice girl");
    }
    if(getVar("pthevGirlfriend", false))
    {
        CMessage("You\'re lucky to have such a nice girlfriend");
    }
    CMessage("And I\'m lucky that she lets me play with you %Smile%");
    return;
    she_cannot_be_reached();
}
function she_cannot_be_reached()
{
    CMessage("You\'re going to have to endure a little longer");
    CMessage("Who knows how long %Grin%");
    CMessage("Of course, you can always ask "+getVar("pthevNamePartner")+" to release you later");
    CMessage("But right now it\'s up to me");
    CMessage("And I want you to stay locked up %Grin%");
    return;
    the_cage_stays_on();
}
function the_cage_stays_on()
{
    CMessage("I\'m sorry %Name%, but the chastity cage stays on");
    CMessage("No stroking for you yet");
    CMessage("You\'re going to have to endure a little longer");
    CMessage("Who knows how long %Grin%");
    CMessage("Of course, you can always ask "+getVar("pthevNamePartner")+" to release you later");
    CMessage("But right now it\'s up to me");
    CMessage("And I want you to stay locked up %Grin%");
    return;
    two_no_device();
}
function two_no_device()
{
    CMessage("I\'m going to find a nice video for you to watch");
    CMessage("But remember, no stroking!");
    CMessage("Just sit on your hand or bite on your fingers");
    CMessage("If you feel like you can\'t control yourself");
    CMessage("Let\'s see...");
    sleep(7);
    CMessage("Alright, found one");
    CMessage("Have fun, %PetName%");
    playVideo("Videos" + java.io.File.separator + "*.*");
    return;
    three();
}
function three()
{
    //--Command:DoesNotHaveChastity
	if(!getVar("hasChastity",false) ){
		three_no_device();
		return;
	}
    CMessage("Oh sweet %PetName% what have you gotten yourself into");
    CMessage("Sitting there with your %Cock% locked in a cage");
    CMessage("Horny as hell but nowhere to take that arousal");
    CMessage("And only me to decide if you get to alleviate the pressure building in your %Balls%");
    CMessage("It\'s not an easy life you lead");
    CMessage("But you know that it has its rewards");
    CMessage("You know that warm fuzzy feeling when you go to bed at night after being denied");
    CMessage("Feeling grateful that you have someone to take control of your desires");
    CMessage("That must be why you bought that cage in the first place");
    CMessage("You must have had the hope that someone would come along");
    CMessage("Someone to give the key the cage and to your arousal");
    CMessage("The key to your orgasm and to a world of frustration");
    CMessage("And now your %Cock% is locked in that cage...");
    CMessage("You\'ll just have to wait and see when it gets released again %Grin%");
    return;
    three_no_device();
}
function three_no_device()
{
    CMessage("I\'m going to pay you one of your videos, %Name%");
    CMessage("And although you\'re not allowed to %JerkOff% I do expect you to stay hard");
    CMessage("So you\'re allowed to touch yourself...");
    CMessage("But only as much as is needed to keep my %Cock% firmly appointed at the sky %Smile%");
    if(getVar("pvBallsTied", false) && getVar("three balls tied", false))
    {
        pvBallsTied();
        return;
    }
    if(getVar("pthevShoelace", false))
    {
        CMessage("And there\'s something else you need to do...");
        run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_TieMyBalls.js");
    }
    if(getVar("pthevShoelace", false))
    {
        CMessage("That should keeping my %Cock% hard a little bit easier");
        three_balls_tied();
        return;
    }
    CMessage("I want to make sure you enjoy the video %Smile%");
    three_balls_not_tied();
    return;
    three_balls_tied();
}
function three_balls_tied()
{
    CMessage("I love seeing a hard %Cock% with a pair of tied up %Balls% %Smile%");
    three_balls_not_tied();
}
function three_balls_not_tied()
{
    CMessage("And want you to be at least as horny at the end of the video as you are now");
    CMessage("So, good luck with that, %PetName% %EmoteHappy%");
    playVideo("Videos" + java.io.File.separator + "*.*");
    CMessage("After that I bet you\'re just aching to start stroking again");
    CMessage("But I want to keep you denied a little bit longer");
    //--Command:BallTorture
	if(ballTorture()){
		CMessage("Those %Balls% by the way look so big and enticing %Grin%");
		//run("CBT" + java.io.File.separator + "CBTBalls_First.js");
		cbt("balls");
	}
	CMessage("I guess you\'re just going to have to deal with denial a little longer");
    return;
    four();
}
function four()
{
    CMessage("This must be so hard on you");
    CMessage("Locked up in that tight little cage");
    CMessage("Seeing sexy little pictures like this");
    getTeasePicture();
    CMessage("Or this");
    getTeasePicture();
    CMessage("Never knowing what I\'m %Gonna% find online next...");
    CMessage("To torment your %Cock% with %Grin%");
    getTeasePicture();
    CMessage("I suppose I could let you out for a little bit");
    CMessage("Give you a chance for a little relief");
    CMessage("But I won\'t");
    CMessage("Not just yet anyway %Lol%");
    return;
}