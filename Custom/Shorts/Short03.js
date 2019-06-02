DMessage("Short03: start");
main();
DMessage("Short03: end");
function main()
{
    switch(random("a01", "a02"))
    {
        case "a01":
        a01();
        return;
        break;
        case "a02":
        a02();
        return;
        break;
    }
    a01();
}
function a01()
{
    CMessage("Now, your body and all of your instincts are probably screaming at you just to cum.");
    CMessage("It\'d be a feat of discipline...");
    if(getVar("av_fetish_rough", false) || getVar("AV_Beta", false))
    {
        CMessage("if it weren\'t so pathetic.");
    }
    return;
    a02();
}
function a02()
{
    let answer0 = getInput("You\'re rock hard from this, aren\'t you?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        gNMHornyResponse();
    }
    if(getVar("av_fetish_rough", false) || getVar("AV_Beta", false))
    {
        CMessage("Well consider where a real man would cum. Willing mouths, faces, pussies.");
    }
    if(getVar("av_fetish_rough", false) || getVar("AV_Beta", false))
    {
        CMessage("You, however, won\'t get to do that.");
    }
    return;
}