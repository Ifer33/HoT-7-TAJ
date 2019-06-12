DMessage("AV_TotalControl: start");
main();
DMessage("AV_TotalControl: end");
function main()
{
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    if(getVar("pthevGlitterIntroduced", false) )
    {
        continue_with_cc_script()
        return;
    }
    not_ready_for_CC();
    return;
    continue_with_cc_script();
}
function continue_with_cc_script()
{
    if(getVar("pthevCompleteControlYES", false))
    {
        pthevCompleteControlYES();
        return;
    }
    if(getVar("pthevCompleteControlNO", false))
    {
        pthevCompleteControlNO();
        return;
    }
    CMessage("I was talking to %domFriend1Name% the other day");
    CMessage("I would love it if you´d let me control when you masturbate");
    CMessage("Not only during our sessions but in between as well");
    CMessage("You will not be allowed to watch porn unless I allow it");
    CMessage("And no %JerkingOff% unless I give you explicit permission");
    CMessage("But the most important rule is this:");
    CMessage("You will only cum when I say you can cum");
    let answer0 = getInput("What do you think %SubName%, will you do that for me?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Yay%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("That\'s okay %PetName% I now it\'s not easy");
        noteasy();
        return;
    }
    theconsequences();
}
function theconsequences()
{
    //--Command:Glitter(pthevGlitterCC01)
    repeatmyself();
}
function repeatmyself()
{
    CMessage("I need to know that you are serious about this, %SubName%");
    let answer0 = getInput("Do you promise not to cum unless I say so?");
    while (!(answer0.isLike("no") || answer0.isLike("can't") || answer0.isLike("cannot") || answer0.isLike("won't") || answer0.isLike("will not") || answer0.isLike("i promise")))
    {
		if (answer0.isLike("yes"))
		{
			answer0 = getInput("Say it, %PetName%");
			//--Command:LoopAnswer
		}
		else{
			answer0 = getInput("I want you to type it: I promise %DomHonorific% %DomName%");
		}
    }
    if (answer0.isLike("no", "can't", "cannot", "won't", "will not"))
    {
        CMessage("Alright forget about it then");
        changedmind();
        return;
    }
    else if (answer0.isLike("i promise"))
    {
        CMessage("Good");
    }
    CMessage("If you break this promise there will be consequences %Name%");
    CMessage("So better make sure that doesn\'t happen %Grin%");
    CMessage("Of course, this arrangement only works when you are completely honest");
    CMessage("So you should tell me when you\'ve disobeyed me");
    let answer1 = getInput("Is that clear?");
    while (!(answer1.isLike("yes") || answer1.isLike("okay") || answer1.isLike("alright") || answer1.isLike("agreed") || answer1.isLike("understood") || answer1.isLike("understand") || answer1.isLike("clear") || answer1.isLike("don't want") || answer1.isLike("changed my mind")))
    {
		if (answer1.isLike("no"))
		{
			answer1 = getInput("%pthevCoCo1%");
			//--Command:LoopAnswer
		}
		else{
			answer1 = getInput("%YesOrNo%");
		}
    }
    if (answer1.isLike("yes", "okay", "alright", "agreed", "understood", "understand", "clear"))
    {
        CMessage("Great %Smile%");
    }
    else  if (answer1.isLike("don't want", "changed my mind"))
    {
        CMessage("Alright forget about it then");
        changedmind();
        return;
    }
    CMessage("I love knowing you'll <i>only stroke to <i>my commands");
    CMessage("It will make you ache for me even more");
    CMessage("You\'ll be counting the minutes until I let you %JerkOff% again");
    CMessage("It won\'t be easy %PetName%");
    CMessage("But you\'ll do it for me %Smile%");
    setVar("pthevCompleteControlYES", true);
    //--Command:Glitter(pthevGlitterCC02)
    setVar("AV_TotalControl", true);
    return;
    changedmind();
}
function changedmind()
{
    CMessage("You might regret it though");
    CMessage("Stroking your %Cock% will feel so much better when you have to wait for it");
    let answer0 = getInput("Are you sure you don\'t want give me control over how much you %JerkOff%?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("okay no problem %Smile%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Okay let\'s go over it again: you may not %JerkOff% without my permission");
        repeatmyself();
        return;
    }
    noteasy();
}
function noteasy()
{
    //--Command:Glitter(pthevGlitterCC03)
    CMessage("At least I can still tell you what to do right now");
    setVar("pthevCompleteControlNO", true);
    return;
    pthevCompleteControlYES();
}
function pthevCompleteControlYES()
{
    CMessage(random("Take a look at ", "Check out ") + "this picture I " + random("found ", "came across ", "found online ") + "earlier %GeneralTime%");
    let answer0 = getInput("That\'s " + random("fucking hot ", "amazing ", "really hot ", "so sexy ") + random("don\'t you think ", "isn\'t it ") + "%Grin%");
    getTeasePicture();
    while (!(answer0.isLike("yes") || answer0.isLike("no") || answer0.isLike("not") || answer0.isLike("okay") || answer0.isLike("all right") || answer0.isLike("sort of") || answer0.isLike("sorta") || answer0.isLike("alright") || answer0.isLike("hot") || answer0.isLike("sexy") || answer0.isLike("horny") || answer0.isLike("on") || answer0.isLike("on")))
    {
        answer0 = getInput("Yes or no %PetName%, is it hot or not?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("I\'m glad you " + random("agree", "think so", "think so too", "and I are on the same page on this one"));
        sortPicture(getImagePath(), 3);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Wow I " + random("really thought ", "figured ", "was sure ", "was certain ") + "you\'d like this one");
        sortPicture(getImagePath(), 1);
        Cc_maybe_this_will();
        return;
    }
    else if (answer0.isLike("not", "okay", "all right", "sort of", "sorta", "alright"))
    {
        CMessage("Wow I " + random("thought ", "figured ", "was sure ", "was certain ") + "you\'d " + random("love ", "really like ") + "this one");
        Cc_maybe_this_will();
        return;
    }
    else if (answer0.isLike("hot", "sexy", "horny", "turns me on", "turn on"))
    {
        CMessage("I\'m glad you " + random("agree", "think so", "think so too"));
    }
    CMessage("Because I wanted to get you squirming in that chair before we even started %EmoteRandom%");
    let answer1 = getInput("Are you squirming yet?");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("Yes or no %PetName%?");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("Mmmmm you know what that means");
    }
    else if (answer1.isLike("no"))
    {
        CMessage("So you\'re not that " + random("horny ", "turned on ", "aroused ") + "yet?");
        Cc_maybe_this_will();
        return;
    }
    CMessage("It means we\'re about ready to get started %Grin%");
    return;
    Cc_maybe_this_will();
}
function Cc_maybe_this_will()
{
    CMessage("That\'s okay");
    CMessage("I'll just find one that <i>will drive you insane %Lol%");
    Cc_do_you_like_it();
}
function Cc_do_you_like_it()
{
    let answer0 = getInput("Do you like this one?");
    getTeasePicture();
    while (!(answer0.isLike("no") || answer0.isLike("not") || answer0.isLike("okay") || answer0.isLike("all right") || answer0.isLike("sort of") || answer0.isLike("sorta") || answer0.isLike("alright") || answer0.isLike("yes")))
    {
        answer0 = getInput("Yes or no %PetName%?");
    }
    if (answer0.isLike("no"))
    {
        CMessage("I\'m not giving up");
        sortPicture(getImagePath(), 1);
        Cc_do_you_like_it();
        return;
    }
    else if (answer0.isLike("not", "okay", "all right", "sort of", "sorta", "alright"))
    {
        CMessage("I\'m not giving up");
        sortPicture(getImagePath(), 1);
        Cc_do_you_like_it();
        return;
    }
    else if (answer0.isLike("yes"))
    {
        CMessage("I knew I would get you with a little persistence %Grin%");
        sortPicture(getImagePath(), 3);
    }
    CMessage("And since you <i>did</i> make me have to persist in finding a sexy picture");
    CMessage("I'm going to make <i>you</i> persist in stroking that %Cock% until you're begging me for mercy %EmoteRandom%");
    return;
    pthevCompleteControlNO();
}
function pthevCompleteControlNO()
{
    let answer0 = getInput("Did you %JerkOff% since last time?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("You are such an addict %Laugh%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("It\'s just so much better when I tell you to isn\'t it %Smile%");
    }
    CMessage("I know I\'ve asked you this before");
    CMessage("But I\'d really love it if you gave me control over when you %JerkOff%");
    CMessage("So that you are only allowed to %JerkOff% with my permission");
    let answer1 = getInput("Do you want to give me that kind of control?");
    while (!(answer1.isLike("yes") || answer1.isLike("no")))
    {
        answer1 = getInput("%YesOrNo%");
    }
    if (answer1.isLike("yes"))
    {
        CMessage("I\'m glad you changed your mind about that %Smile%");
        setVar("pthevCompleteControlYES", true);
        theconsequences();
        return;
    }
    else if (answer1.isLike("no"))
    {
        CMessage("Well you can\'t blame a girl for asking %Smile%");
        noteasy();
        return;
    }
    return;
    not_ready_for_CC();
}
function not_ready_for_CC()
{
    CMessage("%GetYourCockOut%");
    CMessage("%LetsGetToIt%");
    return;
    return;
}