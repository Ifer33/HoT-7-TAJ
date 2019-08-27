DMessage("Contact3: start");
main();
DMessage("Contact3: end");
function main()
{
    if(getVar("AV_MEM_Contact1", false) || getVar("AV_MEM_Contact2", false))
    {
        CMessage("You are thinking " + random("too much ", "a lot ") + "about my friends...let\'s focus here");
        NoDeal();
        return;
    }
    let answer0 = getInput("Do you want to call %domFriend3Name% to the chat?", 5);
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
    if (getApathyMoodIndex() >= 75)
    {
        CMessage("Maybe I will call her to " + random("punish you ", "put you in your place ") + "...");
        setTempVar("AV_MEM_Contact3", true);
    }
    if (getApathyMoodIndex() > 25 && getApathyMoodIndex() < 75)
    {
        CMessage(random("Maybe if ", "If ") + "you " + random("behave ", "are a good boy ") + "I call her later...");
        setTempVar("AV_MEM_Contact3", true);
    }
    if (getApathyMoodIndex() <= 25)
    {
        CMessage(random("Maybe if ", "If ") + "you " + random("keep that behave ", "keep being a good boy ") + "I call her later...");
        setTempVar("AV_MEM_Contact3", true);
    }
    NoDeal();
}
function NoDeal()
{
    return;
    
}