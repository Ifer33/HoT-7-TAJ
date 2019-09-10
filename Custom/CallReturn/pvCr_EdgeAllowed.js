DMessage("pvCR_EdgeAllowed: Beginn");
main();
DMessage("pvCR_EdgeAllowed: end");
function main()
{
    edge("%pvEdgeAllowed%");
    if (randomInteger(1, 100) <= 50)
    {
        lines();
        return;
    }
    return;
    lines();
}
function lines()
{
    switch(random("one", "two", "three", "four", "five"))
    {
        case "one":
        one();
        return;
        break;
        case "two":
        two();
        return;
        break;
        case "three":
        three();
        return;
        break;
        case "four":
        four();
        return;
        break;
        case "five":
        five();
        return;
        break;
    }
    one();
}
function one()
{
    CMessage("What if I don\'t let you cum at all anymore for a very long time");
    CMessage("But still make you edge every day over and over again");
    CMessage("I wonder if your body would simply forget how to climax");
    CMessage("And then you\'d be unable to cum even if I told you to cum...");
    CMessage("That would be my ultimate goal, %PetName%");
    CMessage("Permanent Orgasm Denial");
    CMessage("I suppose that will always remain a dream %Smile%");
    return;
    two();
}
function two()
{
    CMessage("In a way, and edge is always a disappointment, isn\'t it?");
    CMessage("Even if you know it\'s only an edge and you\'re not going to get to cum");
    CMessage("I bet there\'s always a little glimmer of hope in your mind");
    CMessage("Like a tiny little voice telling you: Maybe this time she\'ll let me cum");
    CMessage("And then I tell you to stop again and get away from the edge...");
    CMessage("That the way I am, always crushing your hopes in so many little ways... %Grin%");
    return;
    three();
}
function three()
{
    CMessage("I shouldn\'t be so kind as to let you edge when you want to... being way too lenient");
    CMessage("The problem with edging, %SubName%...");
    CMessage("Is that although it does make you ache like crazy...");
    CMessage("It also always leads to you taking you hand off your %Cock%");
    CMessage("Sometimes I think I shouldn\'t even let you edge at all anymore");
    CMessage("Just endless stroking: no edges, no orgasm");
    CMessage("But... that would be too cruel, even for me %EmoteWink%");
    return;
    four();
}
function four()
{
    CMessage("You\'re so desperate for release now, aren\'t you?");
    CMessage("Maybe I should just let you cum, like right now...");
    let answer0 = getInput("Would you like to cum right now?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Mmmm yes I thought you might say that...");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("I suppose we can draw this out a little longer");
        not_another_edge();
        return;
    }
    CMessage("But remember, you can only cum if you have my permission");
    CMessage("And I\'m going to let you cum now, but you\'ll have to do a few edges first...");
    DoEdges(3, 7, 100);
    CMessage("%LetTheEdgeFade%");
    CMessage("%SubName%...");
    CMessage("I lied, I\'m not going to let you cum right now %Smile%");
    CMessage("But you didn\'t actually think I would, right?");
    return;
    not_another_edge();
}
function not_another_edge()
{
    CMessage("I hope you\'re not going to regret your decision, %PetName% %Grin%");
    return;
    five();
}
function five()
{
    CMessage("So close to cumming now... I bet I could push you over the edge in seconds now");
    CMessage("But I\'m not done with you yet, %PetName%");
    return;
}