DMessage("Short34: start");
main();
DMessage("Short34: end");
function main()
{
    CMessage("Maybe it\'s best you don\'t");
    setTempVar("AV_Short34", true);
    let answer0 = getInput("after all, a slave could drive himself insane thinking about things like that, couldn\'t he?",5);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_desperateResponse();
    }
    return;
}