DMessage("AV_BetaSaid: start");
main();
DMessage("AV_BetaSaid: end");
function main()
{
    switch(random("a01", "a02", "a03", "a04", "a05"))
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
        case "a04":
        a04();
        return;
        break;
        case "a05":
        a05();
        return;
        break;
    }
    
    a01();
}
function a01()
{
    CMessage("Why you feel like a beta, not like an real Man, hm?");
    CMessage("someone, who is disposable for all the Women on this Planet.");
    CMessage("someone, who likes " + random("to get humiliated ", "to getting embarrassed ") + "in front of women");
    return;
    
    a02();
}
function a02()
{
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStroking();
    }
    let answer0 = getInput("You would do a lot for my Attention, wouldn\'t you?");
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("To proof that you are a Beta.");
    CMessage("What should you do, when you see me? You should kneel!");
    CMessage("%KneelForMe%");
    CMessage("Good Boy. That is how it should be. I knew it from the beginning, you can\'t resist me.");
    CMessage("Open your legs wide, like the good Slut you are.");
    return;
    
    a03();
}
function a03()
{
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStroking();
    }
    let answer0 = getInput("So, %PetName%. Are you willing to submit to me?");
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("%KneelForMe%, immediately!");
    CMessage("and now you will show me");
    CMessage("if you are ready to lose your " + random("honor ", "pride ", "dignity ") + "and if you are really ready to obey.");
    return;
    
    a04();
}
function a04()
{
    CMessage("You know, Beta, i will only teach you the place you deserve.");
    CMessage("It is nothing personal.");
    CMessage("You want to serve me and so you will do, what i tell you to do.");
    return;
    
    a05();
}
function a05()
{
    CMessage("You know you want this.");
    CMessage("You are a Beta and you are doing this for your whole life.");
    return;
}