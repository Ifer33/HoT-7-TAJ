DMessage("Contact2: start");
main();
DMessage("Contact2: end");
function main()
{
    if(getVar("AV_MEM_Contact3", false) || getVar("AV_MEM_Contact1", false))
    {
        CMessage("You are thinking " + random("too much ", "a lot ") + "about my friends...let\'s focus here");
        NoDeal();
        return;
    }
    let answer0 = getInput("Do you want to call %domFriend2Name% to the chat?", 5);
    if (answer0.isTimeout())
    {
        AV_Nevermind();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage(random("Mmm...", "Interesting"));
        CheckM();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Well, I hope you are not " + random("dreaming ", "thinking ") + "about her while you %Stroke% for me...");
    }
    AV_Nevermind();
}
function AV_Nevermind()
{
    CMessage("Nevermind then");
    return;
    CheckM();
}
function CheckM()
{
    CMessage(random("Maybe if ", "If ") + "you " + random("behave ", "are a good boy ") + "I call her later...");
    setTempVar("AV_MEM_Contact2", true);
    NoDeal();
}
function NoDeal()
{
    return;
    
}