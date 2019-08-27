DMessage("SwissB: start");
main();
DMessage("SwissB: end");
function main()
{
    CMessage("\'m still %Touching% myself name %Name%");
    CMessage("And I'm not going to stop until you let me");
    CMessage("%EmoteMoan%");
    showTaggedImage(4, ["ONEFEMALE"]);
    //--Command:TagSoloF
    CMessage("So you can %Imagine% where my hands are");
    CMessage("While I moan in agony and pleasure");
    CMessage("I'm touching <i>myself</i> now"); 
	//@AFKOn
	setAFK(true);
    CMessage("%EmoteMoan%");
    showTaggedImage(4, ["ONEFEMALE"]);
    CMessage("My %Pussy%");
    CMessage("%Imagine% how wet it is");
    CMessage("%EmoteMoan%");
    showTaggedImage(4, ["ONEFEMALE"]);
    CMessage("%Imagine% me");
    CMessage("Feels <i>so</i> good
    CMessage("%EmoteWhimper%");
    showTaggedImage(4, ["ONEFEMALE"]);
    CMessage("Touching my %Pussy% %Name%");
    CMessage("%Imagine% how good it would feel to be inside me");
    CMessage("%Imagine% how good I feel right now");
    CMessage("I %Love% doing this for you");
    CMessage("%EmoteMoan%");
    CMessage("I %Love% letting you %Tease% me like this");
    CMessage("I %Love% how good this feels");
    CMessage("%EmoteMoan%");
    showTaggedImage(4, ["ONEFEMALE"]);
    CMessage("Oh my God %Name%");
    CMessage("It feels so good");
    CMessage("I could %TeaseDom% myself like this for <i>hours</i>");
    CMessage("%EmoteMoan%");
    showTaggedImage(4, ["ONEFEMALE"]);
    CMessage("I\'m %Aching% so bad for you right now");
    CMessage("%EmoteFace%");
    showTaggedImage(4, ["ONEFEMALE"]);
    lockImages();
    CMessage("%EmoteWhimper%");
    unlockImages();
    CMessage("I\'m getting close %Name%");
    CMessage("%Exclaim%");
    CMessage("My throbbing %Pussy%");
    CMessage("%Exclaim%");
    showTaggedImage(4, ["ONEFEMALE"]);
    CMessage("I\'m slowing down");
    CMessage("Almost on the cusp");
    CMessage("%Teasing% myself");
    CMessage("%Exclaim%");
    CMessage("Slowly circling");
    CMessage("So close to the edge");
    CMessage("Savouring it");
    CMessage("%Exclaim%");
    showTaggedImage(4, ["ONEFEMALE"]);
    CMessage("This is my favourite part %Name%");
    CMessage("The part where I edge for you");
    CMessage("I'm <i>right</i> there ");
    CMessage("I\'m so close");
    CMessage("%Exclaim%");
    showTaggedImage(4, ["ONEFEMALE"]);
    lockImages();
    CMessage("%Exclaim%");
    CMessage("%Exclaim%");
    CMessage("I'm <i>sooooo</i> close ");
    CMessage("%EmoteMoan%");
    showTaggedImage(4, ["ONEFEMALE"]);
    CMessage("I\'m %Aching% for you");
    CMessage("It\'s so wet");
    CMessage("%Exclaim%");
    CMessage("It\'s so hard");
    CMessage("To <i>not</i> go over the edge ");
    CMessage("Because I can\'t take it any more");
    setAFK(false);
    CMessage("%Exclaim%");
    let answer0 = getInput("Can I stop #Name, please can I stop?");
    if (answer0.isLike("yes"))
    {
        CMessage("%Exclaim%");
        Stop1();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%Exclaim%");
    }
    else if (answer0.isLike("stop"))
    {
        CMessage("%Exclaim%");
        Stop1();
        return;
    }
    L0();
}
function L0()
{
    let answer0 = getInput("%BeggingDom%");
    /*while (!(answer0.isLike("yes") || answer0.isLike("no") || answer0.isLike("stop")))
    {
        answer0 = getInput("%BeggingDom%");
        L1();
        return;
    }*/
    if (answer0.isLike("yes"))
    {
        CMessage("%Exclaim%");
        Stop2();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%Exclaim%");
    }
    else if (answer0.isLike("stop"))
    {
        CMessage("%Exclaim%");
        Stop2();
        return;
    }
    L1();
	return;
}
function L1()
{
    let answer0 = getInput("%BeggingDom%");
    /*while (!(answer0.isLike("yes") || answer0.isLike("no") || answer0.isLike("stop")))
    {
        answer0 = getInput("%BeggingDom%");
        L0();
        return;
    }*/
    if (answer0.isLike("yes"))
    {
        CMessage("%Exclaim%");
        Stop2();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%Exclaim%");
    }
    else if (answer0.isLike("stop"))
    {
        CMessage("%Exclaim%");
        Stop2();
        return;
    }
	L0();
    return;
    Stop1();
}
function Stop1()
{
    CMessage("%Exclaim%");
    CMessage("%EmoteMoan% %Exclaim%");
    CMessage("It\'s so hard to let it go");
    CMessage("%Exlaim%");
    CMessage("<i>Being told to stop</i>");
    CMessage("Just... %Exclaim%");
    CMessage("I\'m a mess now %Name%");
    End();
    return;
    Stop2();
}
function Stop2()
{
    CMessage("%Exclaim%");
    CMessage("%EmoteMoan% %Exclaim%");
    CMessage(" %Name%, that was torture");
    CMessage("<i>I love being tortured</i>");
    CMessage("It\'s so hard to hold it back");
    CMessage("%Exclaim%");
    CMessage("It\'s so hard to to let it go");
    CMessage("%Exclaim%");
    CMessage("<i>Being told to stop</i>");
    CMessage("Just... %Exclaim%");
    CMessage("<i>I'm a mess</i>");
    CMessage("<i>I'm so wet</i>");
    CMessage("%Name%");
    End();
}
function End()
{
    CMessage("I need a shower so bad");
    CMessage("I hope you had fun tonight %Name%");
    CMessage("I sure did");
    CMessage("Message me soon, %SubName%");
    delVar("ERWon");
    CMessage("I\'m going to need the orgasm that I give you tomorrow");
    endSession();
    return;
}