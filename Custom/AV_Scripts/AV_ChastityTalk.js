main();
function main()
{
	DMessage("AV_ChastityTalk: start");
    talk_chastity();
	DMessage("AV_ChastityTalk: start");
	return;
}
function talk_chastity()
{
	if(getVar("AV_ChastityTalk_AV_HaveChast",false) ){
		delVar("AV_ChastityTalk_AV_HaveChast");
		AV_HaveChast();
		return;
	}
    delVar("pvAskedForChastity");
    if(getVar("pvMadeKeyholder", false) )
    {
        Already_Keyholder();
        return;
    }
    if(getVar("pvNoKeyHolder", false))
    {
        Already_Keyholder();
        return;
    }
    CMessage("So %SubName%");
    //--Command:HasChastity
	if(getVar("hasChastity") ){
		CMessage("About that chastity cage you have");
		AV_HaveChast();
		return;
	}
    CMessage("Since you don\'t have a chastity cage...");
    let answer0 = getInput("can you use something else to keep your cock \"locked\", like a shoelace or rubber bands?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Good%, you will use this like a cage");
        AV_HaveChast();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Well, in this case your cage will be psychological");
        NoChastEqup();
        return;
    }
    NoChastEqup();
}
function NoChastEqup()
{
    CMessage("Everytime I talked about your cage, this mean you will not touch your cock");
    CMessage("now...");
    AV_HaveChast();
}
function AV_HaveChast()
{
    CMessage("I was wondering...");
    someone_should_hold_it();
}
function someone_should_hold_it()
{
    let answer0 = getInput("Would you give me control over the key of your cage?");
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
    setVar("pvNoKeyHolder", true);
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
    Already_Keyholder();
}
function Already_Keyholder()
{
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_ChastityOn.js");
    //--Command:StartTaunts
    return;
}