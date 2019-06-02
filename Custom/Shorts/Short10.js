DMessage("Short10: start");
main();
DMessage("Short10: end");
function main()
{
    if(getVar("AV_Call01", false))
    {
        CMessage("You like be called like that, huh?");
        delVar("AV_Call01");
    }
    let answer0 = getInput("So you like being humiliated and abused?", 5);
    if (answer0.isTimeout())
    {
        AV_001djr();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%IKnow%");
        AV_001djr();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Oh...");
        End();
        return;
    }
    AV_001djr();
}
function AV_001djr()
{
    CMessage("Well... the girls and I thought it was a bit pathetic but....");
    CMessage("Oh don\'t give me that look.");
    CMessage("I share everything with the girls.");
    CMessage("And yes, " + random("%domFriend3Name% ", "%domFriend2Name% ") + "know, before you ask.");
    CMessage("She knows all about you...");
    switch(random("Order01", "Order02", "Order03"))
    {
        case "Order01":
        Order01();
        return;
        break;
        case "Order02":
        Order02();
        return;
        break;
        case "Order03":
        Order03();
        return;
        break;
    }
    Order01();
}
function Order01()
{
    if(getVar("av_fetish_foot", false))
    {
        CMessage("your foot fetish");
    }
    if(getVar("av_fetish_rough", false))
    {
        CMessage("How you\'re my bitch");
        KeepGo();
        return;
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("How you are a painslut");
    }
    if(getVar("av_fetish_pegging", false) || getVar("AV_LikeAnal", false))
    {
        CMessage("How you like to be fucked in the ass");
        KeepGo();
        return;
    }
    if(getVar("av_fetish_cei", false))
    {
        CMessage("your sissy dreams about eating your cum");
    }
    if(getVar("av_fetish_cfnm", false))
    {
        CMessage("How you like to be naked in front of girls...");
        KeepGo();
        return;
    }
    KeepGo();
    return;
    Order02();
}
function Order02()
{
    if(getVar("av_fetish_cei", false))
    {
        CMessage("your sissy dreams about eating your cum");
    }
    if(getVar("av_fetish_cfnm", false))
    {
        CMessage("How you like to be naked in front of girls...");
        KeepGo();
        return;
    }
    if(getVar("av_fetish_foot", false))
    {
        CMessage("your foot fetish");
    }
    if(getVar("av_fetish_rough", false))
    {
        CMessage("How you\'re my bitch");
        KeepGo();
        return;
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("How you are a painslut");
    }
    if(getVar("av_fetish_pegging", false) || getVar("AV_LikeAnal", false))
    {
        CMessage("How you like to be fucked in the ass");
        KeepGo();
        return;
    }
    KeepGo();
    return;
    Order03();
}
function Order03()
{
    if(getVar("av_fetish_pain", false))
    {
        CMessage("How you are a painslut");
    }
    if(getVar("av_fetish_pegging", false) || getVar("AV_LikeAnal", false))
    {
        CMessage("How you like to be fucked in the ass");
        KeepGo();
        return;
    }
    if(getVar("av_fetish_cei", false))
    {
        CMessage("your sissy dreams about eating your cum");
    }
    if(getVar("av_fetish_cfnm", false))
    {
        CMessage("How you like to be naked in front of girls...");
        KeepGo();
        return;
    }
    if(getVar("av_fetish_foot", false))
    {
        CMessage("your foot fetish");
    }
    if(getVar("av_fetish_rough", false))
    {
        CMessage("How you\'re my bitch");
        KeepGo();
        return;
    }
    KeepGo();
    return;
    KeepGo();
}
function KeepGo()
{
    CMessage("You should see your face right now.");
    let answer0 = getInput("Awww am I too mean to you?", 5);
    if (answer0.isTimeout())
    {
        AV_002thr();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Lol%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Oh... That\'s because you\'re a " + random("bitch", "slut"));
    }
    AV_002thr();
}
function AV_002thr()
{
    if(getVar("AV_Beta", false))
    {
        CMessage("That\'s is the way beta males are...");
    }
    CMessage("You don\'t have to pretend to be alpha or strong.");
    if(getVar("av_fetish_rough", false) || getVar("AV_Beta", false))
    {
        CMessage("You\'ll leave that to the real men won\'t you %Slave%?");
    }
    CMessage("It\'s okay to be submissive.");
    End();
}
function End()
{
    return;
}