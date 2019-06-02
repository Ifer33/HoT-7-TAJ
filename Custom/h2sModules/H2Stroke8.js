DMessage("H2Stroke8: Start");
main();
DMessage("H2Stroke8: end");
function main()
{
    CMessage(random("Time to edge a lot ", "Edge time ", "Let\'s try some more edges ") + random("%PetName%", "%SubName%"));
    CMessage("You will repeat the process until you\'ve deemed it\'s OK to jump over the edge and have an orgasm.");
    CMessage("However our goal is reach a state of edging...");
    CMessage("where " + random("any touch or caress leads to an explosive sensation of elation", "you continue edging, you continue feeling extreme pleasure as your mind and body will become one"));
    CMessage(random("You will experiencing such concentrated pleasure can become very expressive", "Your body and face will react to every touch to the %Cock%,", "resulting in the term \"goon\""));
    CMessage("Relax and spread your legs a bit, so that you have enough space to work on your %Cock%");
    DoEdges(2, 3, 100);
    switch(random("Loop_hold", "Loop_hold1", "Loop_hold2", "Loop_hold3"))
    {
        case "Loop_hold":
        Loop_hold();
        return;
        break;
        case "Loop_hold1":
        Loop_hold1();
        return;
        break;
        case "Loop_hold2":
        Loop_hold2();
        return;
        break;
        case "Loop_hold3":
        Loop_hold3();
        return;
        break;
    }
    Loop_hold();
}
function Loop_hold()
{
    setRapidText(false);
    holdEdge();
    let answer0 = getInput("Think you can do some more for me?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Thats fine");
    }
    if (answer0.isLike("yes"))
    {
        CMessage(random("%Great%", "%Good%", "%ICanKeepThisUp%"));
        setRapidText(true);
        switch(random("Loop_hold", "Loop_hold1", "Loop_hold2", "Loop_hold3"))
        {
            case "Loop_hold":
            Loop_hold();
            return;
            break;
            case "Loop_hold1":
            Loop_hold1();
            return;
            break;
            case "Loop_hold2":
            Loop_hold2();
            return;
            break;
            case "Loop_hold3":
            Loop_hold3();
            return;
            break;
        }
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Ok take a short break honey");
        setRapidText(true);
        Break3();
        return;
    }
    Loop_hold1();
}
function Loop_hold1()
{
    //CMessage("%Edge%");
    //setRapidText(false);
    //startEdging();
    holdEdge();
    let answer0 = getInput("Can we try another one?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Thats fine");
    }
    if (answer0.isLike("yes"))
    {
        CMessage(random("%Great%", "%Good%", "%ICanKeepThisUp%"));
        setRapidText(true);
        switch(random("Loop_hold", "Loop_hold1", "Loop_hold2", "Loop_hold3"))
        {
            case "Loop_hold":
            Loop_hold();
            return;
            break;
            case "Loop_hold1":
            Loop_hold1();
            return;
            break;
            case "Loop_hold2":
            Loop_hold2();
            return;
            break;
            case "Loop_hold3":
            Loop_hold3();
            return;
            break;
        }
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Ok take a short break honey");
        setRapidText(true);
        Break3();
        return;
    }
    Loop_hold2();
}
function Loop_hold2()
{
    //CMessage("%Edge%");
    //setRapidText(false);
    //startEdging();
    holdEdge();
    let answer0 = getInput("There should be another edge left for me, isnt it?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Thats fine");
    }
    if (answer0.isLike("yes"))
    {
        CMessage(random("%Great%", "%Good%", "%ICanKeepThisUp%"));
        setRapidText(true);
        switch(random("Loop_hold", "Loop_hold1", "Loop_hold2", "Loop_hold3"))
        {
            case "Loop_hold":
            Loop_hold();
            return;
            break;
            case "Loop_hold1":
            Loop_hold1();
            return;
            break;
            case "Loop_hold2":
            Loop_hold2();
            return;
            break;
            case "Loop_hold3":
            Loop_hold3();
            return;
            break;
        }
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Ok take a short break honey");
        setRapidText(true);
        Break3();
        return;
    }
    Loop_hold3();
}
function Loop_hold3()
{
    //CMessage("%Edge%");
    //setRapidText(false);
    //startEdging();
    holdEdge();
    let answer0 = getInput("Wanna give me another one sweetness please?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("Thats fine");
    }
    if (answer0.isLike("yes"))
    {
        CMessage(random("%Great%", "%Good%", "%ICanKeepThisUp%"));
        setRapidText(true);
        switch(random("Loop_hold", "Loop_hold1", "Loop_hold2", "Loop_hold3"))
        {
            case "Loop_hold":
            Loop_hold();
            return;
            break;
            case "Loop_hold1":
            Loop_hold1();
            return;
            break;
            case "Loop_hold2":
            Loop_hold2();
            return;
            break;
            case "Loop_hold3":
            Loop_hold3();
            return;
            break;
        }
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Ok take a short break honey");
        setRapidText(true);
        Break3();
        return;
    }
    Break3();
}
function Break3()
{
    CMessage("Here you go.");
    setRapidText(false);
    sleep(randomInt(10, 20));
    return;
}