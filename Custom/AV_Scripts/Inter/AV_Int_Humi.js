DMessage("AV_Int_Humi: start");
main();
DMessage("AV_Int_Humi: end");
function main()
{
    CMessage("I\'m starting to like humiliate you, %SubName%");
    CMessage("I don\'t know why, but this make me wet...");
    if(!getVar("AV_BallTied", false))
    {
        CMessage("%TieYourBalls%");
    }
    if(getVar("av_fetish_cei", false))
    {
        CMessage("How about you take that precum off your cock and lick it for me %PetName%?");
        sleep(20);
    }
    CMessage(random("we take this opportunity ", "Let\'s take advantage of this opportunity ") + "to work on some " + random("slave ", "submissive ") + "positions");
    CMessage(random("Go to ", "stay in ") + "that position until you hear a bell");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "kneel" + java.io.File.separator + "*.jpg");
    sleep(15);
    switch(random("C01", "C02", "C03"))
    {
        case "C01":
        C01();
        return;
        break;
        case "C02":
        C02();
        return;
        break;
        case "C03":
        C03();
        return;
        break;
    }
    C01();
}
function C01()
{
    addContact(2);
    SMessage("Oh...poor %SubName%...", -1, 2);
    SMessage("How long will you keep him like this?", -1, 2);
    CMessage("I don\'t know yet...");
    CMessage("He like being humiliated like that.");
    let answer0 = getInput("That\'s true %SubName%?", 10,-1,true,2);
    if (answer0.isTimeout())
    {
        AV_Time8524();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?",10,-1,true,2);
    }
    if (answer0.isLike("yes"))
    {
        SMessage("Oh...I see...", -1, 2);
        SubAsn();
        return;
    }
    else if (answer0.isLike("no"))
    {
        SMessage("See? you\'re too cruel with %SubName%", -1, 2);
        SubLie();
        return;
    }
    AV_Time8524();
}
function AV_Time8524()
{
    SMessage("Oh right, he can\'t answer this position %Lol%", -1, 2);
    SubAsn();
}
function SubAsn()
{
    SMessage("Well, in this case, have fun %SubName%...", -1, 2);
    SMessage("I need to go...cya", -1, 2);
    CMessage("Bye");
    removeContact(2);
    End();
    return;
    SubLie();
}
function SubLie()
{
    CMessage("What? Why you\'re lying, %SubName%?");
    CMessage("Are you ashamed because %Contact1% saw you like that?");
    if(getVar("AV_MEM_CBT", false))
    {
        CMessage("Can be worse, want see?");
    }
    if(getVar("AV_MEM_CBT", false))
    {
        CMessage("Get ready to spank your %Balls%...");
    }
    if(getVar("AV_MEM_CBT", false))
    {
        CMessage(random("Hit ", "Spank ") + "your balls");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Belle10*.mp3");
        sleep(20);
    }
    SMessage("Ouch...", -1, 2);
    SMessage("This is my cue to " + "...cya", -1, 2);
    CMessage("Bye");
    removeContact(2);
    End();
    return;
    
    C02();
}
function C02()
{
    addContact(3);
    SMessage("Well I see %ShortName% has already put you in your place!", -1, 3);
    SMessage("I\'m actually a little turned on right now..", -1, 3);
    if(getVar("AV_MEM_CBT", false))
    {
        SMessage("%SubName%, get ready to spank your %Balls%...", -1, 3);
    }
    if(getVar("AV_MEM_CBT", false))
    {
        SMessage(random("Hit ", "Spank ") + "your balls", -1, 3);
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G2Spank" + java.io.File.separator + "*.mp3");
        sleep(20);
    }
    SMessage("JFY...", -1, 3);
    SMessage("I am recording this....", -1, 3);
    SMessage("That\'s OK, right %DomName%?", -1, 3);
    CMessage("Sure %Lol%");
    SMessage("Thanks", -1, 3);
    removeContact(3);
    End();
    return;
    
    C03();
}
function C03()
{
    addContact(4);
    SMessage("Ohh", -1, 4);
    SMessage("You just intensified my day", -1, 4);
    if(getVar("AV_MEM_CBT", false))
    {
        SMessage("%SubName%, get ready to spank your %Balls%...", -1, 4);
    }
    if(getVar("AV_MEM_CBT", false))
    {
        SMessage(random("Hit ", "Spank ") + "your balls", -1, 4);
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
        sleep(20);
    }
    if(getVar("AV_MEM_CBT", false))
    {
        SMessage(random("Hit ", "Spank ") + "your balls", -1, 4);
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "G3Spank" + java.io.File.separator + "*.mp3");
        sleep(20);
    }
    SMessage("...Thank you %DomName%", -1, 4);
    CMessage("Sure %Lol%");
    removeContact(4);
    End();
    return;
    End();
}
function End()
{
    CMessage("%SitDown%");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Bell.mp3");
    delVar("AV_MEM_Humil");
    return;
}