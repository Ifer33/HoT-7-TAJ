DMessage("Short08: start");
main();
DMessage("Short08: end");
function main()
{
    if (isStrokingAll())
    {
        CMessage("%StrokeSlower%");
        slowStroke();
    }
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
    CMessage("You have one purpose in your life.");
    CMessage("Do you know what it is?");
    CMessage("It\'s simple, your purpose is to serve me.");
    if (randomInteger(1, 100) <= 50)
    {
        Part2();
        return;
    }
    return;
    a02();
}
function a02()
{
    CMessage("You are a slave acting in my interest.");
    CMessage("Your free will is an illusion.");
    CMessage("Everything you do, you do " + random("it for me ", "it because I allow you to ") + "Because it all fits into my plan.");
    if (randomInteger(1, 100) <= 45)
    {
        Part2();
        return;
    }
    return;
    a03();
}
function a03()
{
    CMessage("You\'re such a good boy.");
    CMessage("I do love it so much when I get to use you like this.");
    if (randomInteger(1, 100) <= 55)
    {
        Part2();
        return;
    }
    return;
    Part2();
}
function Part2()
{
    let answer0 = getInput("And you know what\'s happening next don\'t you?", 5);
    if (answer0.isTimeout())
    {
        gfw4id();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("A perfect servant are you %EmoteRandom%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Shhhhh. It\'s too late to back out now.");
    }
    gfw4id();
}
function gfw4id()
{
    edge();
    if(!getVar("AV_PinDone", false))
    {
        CMessage("Go fetch me a spoon and some clothespins. At least 10 of them.");
        sleep(20);
        setVar("AV_PinDone", true);
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Put " + random("2 ", "4 ") + "clothespins in your %Balls%");
        setVar("AV_Pins", true);
        sleep(15);
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("Keep there till I say so...");
    }
    CMessage("And the best part is soon I know you\'re going to start begging me.");
    CMessage("That is so fucking hot for me, when you beg me...");
    CMessage("even though you *know* there\'s no way I\'ll let you cum.");
    edge();
    CMessage("You do know that by now, I\'m sure...");
    CMessage("I guess I can be pretty merciless...");
    CMessage("But I love your begging, your desperation...");
    if (randomInteger(1, 100) <= 50)
    {
        NoEdge();
        return;
    }
    edge();
    NoEdge();
}
function NoEdge()
{
    CMessage("it\'s hot actually, to let you *imagine* I *might* choose to take you over the edge and let you orgasm...");
    CMessage("But probably I\'ll just tease you until I\'ve had enough of your precum...");
    if(getVar("av_fetish_cei", false))
    {
        CMessage("Lick all that precum %SubName%");
        sleep(20);
    }
    if(getVar("av_fetish_cei", false))
    {
        CMessage("%GoodBoy%");
    }
    sleep(20);
    return;
}