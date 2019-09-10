main();
function main()
{
    if(getVar("AV_TrainDone", false))
    {
        AV_TrainDone();
        return;
    }
    CMessage(random("%PetName%", "%SubName%"));
    CMessage("Don\'t " + random("move ", "touch your %Cock% ") + "now...");
    if(getVar("AV_TrainWhip", false))
    {
        AV_TrainWhip();
        return;
    }
    if(getVar("AV_TraincEdge", false))
    {
        AV_TraincEdge();
        return;
    }
    if(getVar("AV_TraincStroke", false))
    {
        AV_TraincStroke();
        return;
    }
    CMessage("Just %TellMe%");
    let answer0 = getInput("Did that sound make your %Cock% " + random("squirm", "struggle", "twist"));
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage(random("I told you we\'d have trained that %Cock%", "Your training it\'s working"));
        StrokeDone();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Hmm...Your " + random("reprogramming ", "training ") + "it\'s going slower than I thought");
        --Command:AddTeaseTime(10 Minutes)
    }
    AV_TrainDone();
    return;
    
    AV_TraincStroke();
}
function AV_TraincStroke()
{
    CMessage("Just %TellMe%");
    let answer0 = getInput(random("Now ", "And ") + "that sound make your %Cock% " + random("squirm", "struggle", "twist"));
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage(random("I told you we\'d have trained that %Cock%", "Your training it\'s working"));
        EdgeDone();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Hmm...Your " + random("reprogramming ", "training ") + "it\'s going slower than I thought");
        --Command:AddTeaseTime(10 Minutes)
    }
    AV_TrainDone();
    return;
    
    AV_TraincEdge();
}
function AV_TraincEdge()
{
    CMessage("Just %TellMe%");
    let answer0 = getInput(random("Now ", "And ") + "that sound make you " + random("jump", "scared", "almost feel pain"));
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "whip.mp3");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo% %SubName%?");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Your training it\'s working");
        PainDone();
        return;
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Hmm...Your " + random("reprogramming ", "training ") + "it\'s going slower than I thought");
    }
    AV_TrainDone();
    return;
    
    
    StrokeDone();
}
function StrokeDone()
{
    setVar("AV_TraincStroke", true);
    AV_TrainDone();
    return;
    
    EdgeDone();
}
function EdgeDone()
{
    setVar("AV_TraincEdge", true);
    if(!getVar("av_fetish_pain", false))
    {
        setVar("AV_TrainWhip", true);
    }
    AV_TrainDone();
    return;
    
    PainDone();
}
function PainDone()
{
    setVar("AV_TrainWhip", true);
    AV_TrainDone();
    return;
    
    AV_TrainWhip();
}
function AV_TrainWhip()
{
    CMessage("Now, I want to include a new variable in your training...");
    CMessage("using your sense of smell...");
    if(getVar("av_fetish_cei", false))
    {
        CMessage("I could use the smell of your cum %Lol% " + "but I have another idea in mind");
    }
    CMessage("I want you to pick a perfume, cologne or moisturizer with a nice perfume...");
    CMessage("Would be better with a female one, right?");
    CMessage("Or better yet, try to find what perfume does " + getVar("AV_Persona13", "") + "use?");
    CMessage("Anyway...");
    CMessage("I want you to start using that perfume in our session from now on...");
    CMessage("Just enough to feel the aroma");
    CMessage("until it gets impregnated in your brain");
    setVar("AV_TrainDone", true);
    CMessage("Would be interesting when you meet " + getVar("AV_Persona13", "") + "next time, right?");
    AV_TrainDone();
    return;
    
    
    AV_TrainDone();
}
function AV_TrainDone()
{
    if(!getVar("av_doanalnight", false) && !getVar("AV_MEM_Humil", false) && !getVar("AV_MEM_CEI", false) && !getVar("AV_MEM_MenNControl", false))
    {
        NoMemory();
        return;
    }
    if(getVar("AV_MEM_Humil", false))
    {
        AV_MEM_Humil();
        return;
    }
    if(getVar("AV_MEM_CEI", false))
    {
        AV_MEM_CEI();
        return;
    }
    if(getVar("AV_MEM_MenNControl", false))
    {
        AV_MEM_MenNControl();
        return;
    }
    if (getVar("AV_YesNoRatio", 0) >= 4)
    {
        VeryGood();
        return;
    }
    if (getVar("AV_YesNoRatio", 0) <= -4)
    {
        VeryBad();
        return;
    }
    if(getVar("av_doanalnight", false))
    {
        av_doanalnight();
        return;
    }
    NoMemory();
    return;
    
    
    av_doanalnight();
}
function av_doanalnight()
{
    if(getVar("MemoryJustOneAnal", false))
    {
        NoMemory();
        return;
    }
    switch(random("Anal01", "Anal02", "Anal03"))
    {
        case "Anal01":
        Anal01();
        return;
        break;
        case "Anal02":
        Anal02();
        return;
        break;
        case "Anal03":
        Anal03();
        return;
        break;
    }
    Anal01();
}
function Anal01()
{
    CMessage("You love the feeling of " + random("cock ", "a dildo ") + random("sliding right ", "deep ") + "into your " + random("asshole ", "ass ") + "don\'t you?");
    CMessage("I can\'t wait to totally " + random("fuck ", "violate ", "humiliate and dominate ") + "you like the slut you are!");
    CMessage("You\'re " + random("nothing but ", "just ") + "my forced " + random("bi bitch", "slut", "anal slut", "anal bitch"));
    AnalEnd();
    return;
    
    Anal02();
}
function Anal02()
{
    CMessage("%GeneralTime% I\'m going to make you take " + random("that dildo ", "my strap-on ") + "%PetName%");
    CMessage("I love " + random("fucking ", "violating ") + "your mouth and " + random("ass ", "asshole ") + "with " + random("that dildo", "my strap-on"));
    CMessage("and I " + random("laugh ", "smile ") + "in twisted amusement as I do it.");
    CMessage("I " + random("violate ", "fuck ") + "you for my own pleasure and don\'t care about yours!");
    AnalEnd();
    return;
    
    Anal03();
}
function Anal03()
{
    CMessage("I know you " + random("want ", "can\'t wait ") + "to take that plug in your ass.");
    CMessage("I\'m going to make you wait.");
    CMessage("And then... I\'m going to " + random("bend you over and pound ", "fuck ", "violate ") + "you until I\'m satisfied.");
    CMessage("I don\'t care " + random("if hurts ", "how it feels ") + "you\'re going to " + random("do as I say ", "take it ") + "%PetName%!");
    AnalEnd();
    return;
    
    AnalEnd();
}
function AnalEnd()
{
    setTempVar("MemoryJustOneAnal", true);
    return;
    
    AV_MEM_Humil();
}
function AV_MEM_Humil()
{
    switch(random("Hum01", "Hum02", "Hum03"))
    {
        case "Hum01":
        Hum01();
        return;
        break;
        case "Hum02":
        Hum02();
        return;
        break;
        case "Hum03":
        Hum03();
        return;
        break;
    }
    Hum01();
}
function Hum01()
{
    CMessage("I want you to get down on your knees and crawl over to me right now.");
    setTempVar("AV_SubKnees", true);
    if(!getVar("av_fetish_humiliating", false))
    {
        CMessage("I love humiliating your. It\'s so fun.");
    }
    if(getVar("av_fetish_humiliating", false))
    {
        CMessage("I love humiliating a loser like yourself. You\'re so pathetic.");
    }
    CMessage("Stay there...");
    HumilEnd();
    return;
    
    Hum02();
}
function Hum02()
{
    CMessage("Look at you, ready for me to tell you " + random("exactly what I think of your worthless existence ", "how useless you is ", "how worthless you are ") + "...");
    CMessage(random("Let me see ", "Show me ") + "that %Cock%");
    CMessage("lets see if you can try to " + random("keep ", "get ") + "an " + random("hard-on ", "erection ") + "with all my " + random("teasing", "bashing"));
    CMessage("even if you did, the " + random("end ", "finish ") + "would be " + random("useless", "unsatisfying"));
    HumilEnd();
    return;
    
    Hum03();
}
function Hum03()
{
    CMessage("I\'m a " + random("Domme ", "Mistress ") + "who knows the power of " + random("a fetish", "control", "humiliation"));
    CMessage("When I know what pushes your buttons");
    CMessage("I can have you on your knees " + random("worshiping ", "obeying ") + "me in seconds.");
    CMessage("%KneelForMe%");
    CMessage("See? so easy");
    HumilEnd();
    return;
    
    HumilEnd();
}
function HumilEnd()
{
    delVar("AV_MEM_Humil");
    return;
    
    AV_MEM_CEI();
}
function AV_MEM_CEI()
{
    switch(random("CEI01", "CEI02", "CEI03"))
    {
        case "CEI01":
        CEI01();
        return;
        break;
        case "CEI02":
        CEI02();
        return;
        break;
        case "CEI03":
        CEI03();
        return;
        break;
    }
    CEI01();
}
function CEI01()
{
    CMessage("You are going to LOVE " + random("licking ", "eating ") + "your " + random("semen ", "own cum ") + "for me");
    CMessage("so go ahead and " + random("lick up ", "eat ") + "that pre cum for now...");
    CMessage("You\'ve been toying with the idea of tasting yourself for quite some time, haven\'t you?");
    CMessage("So, do it");
    CEIEnd();
    return;
    
    CEI02();
}
function CEI02()
{
    CMessage("I want you to " + random("devour your cum ", "relish in being told to taste yourself ") + "for My amusement.");
    CMessage(random("In no time ", "Before long ") + random("I\'ll turn you into a ", "you will be my ") + "cum  little slut");
    CMessage("that\'s " + random("loves ", "begging ") + "to be told to " + random("eat ", "lick up ") + "their own " + random("mess", "cum", "semen"));
    CMessage("but for now, we\'ll take it slow.");
    CMessage("I enjoy breaking cum sluts in slowly.");
    CEIEnd();
    return;
    
    CEI03();
}
function CEI03()
{
    CMessage("//");
    
    CEIEnd();
}
function CEIEnd()
{
    delVar("AV_MEM_CEI");
    return;
    
    AV_MEM_MenNControl();
}
function AV_MEM_MenNControl()
{
    switch(random("Con01", "Con02", "Con03"))
    {
        case "Con01":
        Con01();
        return;
        break;
        case "Con02":
        Con02();
        return;
        break;
        case "Con03":
        Con03();
        return;
        break;
    }
    Con01();
}
function Con01()
{
    CMessage("As a man, everything in your life is decided by a female " + random("guardian", "owner"));
    CMessage("Men can be " + random("sold ", "given away ") + "or used " + random("in work camps", "as sex slaves"));
    CMessage(random("women ", "Girls ", "Pussy ") + "rules everything.");
    ControlEnd();
    return;
    
    Con02();
}
function Con02()
{
    CMessage("All the " + random("pain and punishment ", "tease ") + "I will put you through");
    CMessage("to brainwash you into becoming my " + random("complete ", "total ") + "slave.");
    CMessage("I plan to keep you in my control forever.");
    ControlEnd();
    return;
    
    Con03();
}
function Con03()
{
    CMessage("You want a " + random("girl ", "woman ") + "to take control of " + random("you", "your life for you"));
    CMessage("Specifically you want me.");
    CMessage("Show me your self-control because if you can\'t ... you\'re getting " + random("punished", "locked up"));
    ControlEnd();
    return;
    
    ControlEnd();
}
function ControlEnd()
{
    delVar("AV_MEM_MenNControl");
    return;
    
    NoMemory();
}
function NoMemory()
{
    run("Custom" + java.io.File.separator + "RamdomLinks" + java.io.File.separator + "*.*");
    return;
    return;
}