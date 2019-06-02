DMessage("H2Stroke2: start");
main();
DMessage("H2Stroke2: end");
function main()
{
    CMessage("Be happy that %domFriend2Name% is already here.");
    addContact(3);
    if(getVar("Contact2_unit", false))
    {
        Contact2_unit();
        return;
    }
    CMessage("Hey %domFriend2Name%");
    SMessage("Hi %ShortName%!", -1, 3);
    SMessage("Hi %SubName%", -1, 3);
    CMessage("When i see right, he is also very happy to see you %domFriend2Name%");
    SMessage("how do you know that %ShortName%", -1, 3);
    CMessage("Just look at the bulge in his pants %Grin%");
    SMessage("%Grin%", -1, 3);
    SMessage("In this case i think we will have loads of fun together %SubName% %Grin%", -1, 3);
    CMessage("I think you are right %domFriend2Name%");
    SMessage("Loads of cum maybe too %Grin%", -1, 3);
    CMessage("%Lol%");
    SMessage("Hope you dont mind %ShortName%, if i dry him out a little bit %Grin%", -1, 3);
    CMessage("Sure not, its up to you %domFriend2Name%, but i would prefer, if you make him edge many, many times without letting him cum %Grin%");
    SMessage("Awww this is so cruel %ShortName%, but it also makes me very horny just to imagine %Grin%", -1, 3);
    SMessage("So what do you think %ShortName%, can we start right away?", -1, 3);
    SMessage("Or should i give him a chance to warm up?", -1, 3);
    CMessage("Warm up is so important %domFriend2Name%, otherwise i guess he will spray all his cum immediately %Grin%");
    SMessage("Hmm you are right %ShortName%, lets warm %SubName% up a bit.", -1, 3);
    CMessage("Hope you dont mind, when i stay here and watch for a second %Grin%");
    SMessage("Sure not, you can stay as long as you like", -1, 3);
    SMessage("Ok then lets get things going", -1, 3);
    removeContact(1);
    let answer0 = getInput("By the way, are you naked?",null, -1, true, 3);
    if (answer0.isLike("yes"))
    {
        SMessage("Great!", -1, 3);
        Sub_Stroking();
        return;
    }
    else if (answer0.isLike("no"))
    {
        SMessage("Then hurry up, what are you waiting for?", -1, 3);
    }
    else
    {
    }
    Sub_undress();
}
function Sub_undress()
{
    SMessage("Get rid of this useless clothes.", -1, 3);
    SMessage("I want you bare naked and ready to serve.", -1, 3);
    SMessage("I hope, i dont need to tell you, that you just have 1 minute to be ready", -1, 3);
    SMessage("Time is running already!!!", -1, 3);
    sleep(55);
    setVar("Contact2_unit", true);
    Sub_Stroking();
    return;
    Contact2_unit();
}
function Contact2_unit()
{
    addContact(3);
    SMessage("Nice to see you again %SubName%", -1, 3);
    SMessage("and of course thanks %ShortName% that you invited me another time %Grin%", -1, 3);
    CMessage("No problem %domFriend2Name%, %PetName% was in great hands last time i heard %LOL%");
    SMessage("I really hope so %Grin%", -1, 3);
    removeContact(1);
    SMessage("so what are we going to do today %SubName%?", -1, 3);
    SMessage("I think today we will just let it flow ...", -1, 3);
    SMessage("I will make you edge many times i guess.", -1, 3);
    SMessage("You have 2 minutes from now to get naked and hard %PetName%", -1, 3);
    SMessage("Today i am not gonna give you some options, so you just have to do what you are told to.", -1, 3);
    let answer0 = getInput("Is that clear?",null, -1, true, 3);
    while (!(answer0.isLike("clear") || answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("......try again",null, -1, true, 3);
    }
    if (answer0.isLike("clear", "yes"))
    {
        SMessage("Ok then no more useless words", -1, 3);
        Sub_Stroking();
        return;
    }
    else if (answer0.isLike("no"))
    {
        SMessage("So in that case .....", -1, 3);
        //run("CBT" + java.io.File.separator + "CBTBalls_First.js");
		cbt("ball");
    }
    Sub_Stroking();
}
function Sub_Stroking()
{
    SMessage("Get in wanking position!", -1, 3);
    SMessage("We will get right into business.", -1, 3);
    SMessage("This is where you will stay on the edge and your brain starts to get out of control.", -1,3);
    setTempVar("av_intera_018", true);
    holdEdge(-1,3);
    SMessage("From now on you should be edging frequently.", -1,3);
    holdEdge(-1,3);
    SMessage("This means you should be keeping your hand permanently on your %Cock%.", -1,3);
    holdEdge(-1,3);
    SMessage("Stroke at all times. Just vary the speed.", -1,3);
    holdEdge(-1,3);
    SMessage("Stay on the brink %SubName%", -1,3);
    holdEdge(-1,3);
    SMessage("Be strong and dont go over", -1,3);
    holdEdge(-1,3);
    SMessage("WOW thats so damn hot", -1,3);
    sleep(randomInt(10, 20));
    holdEdge(-1,3);
    SMessage("Look me in the eyes", -1,3);
    holdEdge(-1,3);
    SMessage("I am with you", -1,3);
    holdEdge(-1,3);
    SMessage("This is where I am not going to speak much to you.", -1,3);
    SholdEdge(-1,3);
    SMessage("Just melt together with your %Cock%.", -1,3);
    holdEdge(-1,3);
    holdEdge(-1,3);
    holdEdge(-1,3);
    SMessage("Dont loose it", -1,3);
    sleep(randomInt(10, 20));
    holdEdge(-1,3);
    SMessage("%CheerEdgeATon%", -1,3);
    holdEdge(-1,3);
    SMessage("This was pretty intense, wasnt it?", -1, 3);
    delVar("av_intera_018");
    SMessage("To be honest, i dont think so.", -1, 3);
    SMessage("In my opinion i think you can do a lot more stroking than that.", -1, 3);
    addContact(1);
    SMessage("Therefor I think %DomName% will push your limits a little bit further than that.", -1, 3);
    CMessage("Yes, for this purpose i have a special training for you called Living on the edge.");
    CMessage("But we will see this another time.");
    removeContact(3);
    return;
}