DMessage("Second: start");
main();
DMessage("Second: end");
function main()
{
    switch(random("a01", "a02", "a03"))
    {
        case "a01":
        a01();
        return;
        break;
        case "a02":
        a02();
        return;
        break;
        case "a03":
        a03();
        return;
        break;
    }
    a01();
}
function a01()
{
    CMessage("That\'s not the first time %GeneralTime% you got to the edge without permission, %SubName%");
    setAFK(true);
    CMessage("That could mean 2 things");
    CMessage("Either you need a little break...");
    CMessage("Or you need some more edge-training");
    let answer0 = getInput("What do you think?");
    setAFK(false);
    while (!(answer0.isLike("break") || answer0.isLike("pause") || answer0.isLike("stop") || answer0.isLike("training") || answer0.isLike("edging")))
    {
        answer0 = getInput("Do you think you need a break or some training?");
    }
    if (answer0.isLike("break", "pause", "stop"))
    {
        CMessage("I think so too, but it\'s not a lot of fun is it...");
    }
    else if (answer0.isLike("training", "edging"))
    {
        CMessage("hmm maybe, but I don\'t want to to wear you out too quickly...");
    }
    holdEdge();
    CMessage("Now you must be thinking");
    CMessage("That this is just going to make it harder to stay away from the edge");
    CMessage("But that\'s the whole point %SubName%");
    CMessage("I want it to be very hard");
    CMessage("Not just your %Cock%");
    CMessage("I want to make it hard for you to follow instructions");
    CMessage("Because I want you very frustrated and very horny");
    CMessage("And when you fail...");
    CMessage("You just give me an excuse to be <i>really</i> mean to you %Grin%");
    holdEdge();
    CMessage("You\'re going to do one more");
    CMessage("And this time I want you to hold it for me");
    holdEdge();
    return;
    a02();
}
function a02()
{
    CMessage("You edged without permission again, %PetName%");
	if(ballTorture() ){
		CMessage("Your %Balls% are going to wish you didn\'t %Laugh%");
		//run("CBT" + java.io.File.separator + "CBTBalls_First.js");
		cbt("ball");
	}
    CMessage("Try not to edge unless I tell you to");
    if(getVar("av_fetish_cei", false) )
    {
        might_make_you_eat_it()
        return;
    }
    return;
    might_make_you_eat_it();
}
function might_make_you_eat_it()
{
    CMessage("Or I might make you cum and eat it next time %EmoteWink%");
    return;
    a03();
}
function a03()
{
    CMessage("You know, %PetName%");
    CMessage("One would think that you\'d be able to control yourself a little better by now");
    CMessage("But apparently you still need some guidance");
    CMessage("Bend over your chair or table, you\'re going to get a spanking");
    CMessage("And since I\'m not there to do it, you\'re going to do it yourself");
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    CMessage("So get in position and get ready...");
    //run("Custom" + java.io.File.separator + "Tasks" + java.io.File.separator + "Spanking.js");
	customTask("Spanking");
    CMessage("If you have to edge, ask for permission next time");
    CMessage("Of course, I might not <i>give</i> permission...");
    CMessage("But I do enjoy hearing you beg for it %Grin%");
    return;
}