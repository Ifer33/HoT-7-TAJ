DMessage("AV_ModChastity1: start");
main();
DMessage("AV_ModChastity1: end");
function main()
{
    if (isStroking())
    {
        CMessage("%stopstroking%", 0);
        stopStroking();
    }
    if(getVar("AV_ModChastity1_NotFirstTime", false))
    {
        AV_ModChastity1_NotFirstTime();
        return;
    }
    setVar("AV_ModChastity1", 0);
    setVar("AV_ModChastity1_NotFirstTime", true);
    AV_ModChastity1_NotFirstTime();
}
function AV_ModChastity1_NotFirstTime()
{
    if(!getVar("pvMadeKeyholder", false))
    {
        run("Modules" + java.io.File.separator + "*.js");
        return;
    }
    if (getVar("AV_ModChastity1", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModChastity1", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModChastity1", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModChastity1", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModChastity1", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModChastity1", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModChastity1", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModChastity1", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModChastity1", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModChastity1", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModChastity1", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModChastity1", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModChastity1", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModChastity1", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModChastity1", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModChastity1", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModChastity1", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModChastity1", getVar("AV_ModChastity1", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModChastity1", getVar("AV_ModChastity1", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModChastity1", getVar("AV_ModChastity1", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModChastity1", getVar("AV_ModChastity1", 0) + 1000);
    Modulo4();
    return;
    Part1_1();
}
function Part1_1()
{
    switch(random("Mod1", "Mod2", "Mod3", "Mod4"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_2();
}
function Part1_2()
{
    switch(random("Mod2", "Mod3", "Mod4"))
    {
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_3();
}
function Part1_3()
{
    switch(random("Mod1", "Mod3", "Mod4"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_4();
}
function Part1_4()
{
    switch(random("Mod1", "Mod2", "Mod4"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_5();
}
function Part1_5()
{
    switch(random("Mod1", "Mod2", "Mod3"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
    }
    Part1_6();
}
function Part1_6()
{
    switch(random("Mod3", "Mod4"))
    {
        case "Mod3":
        Mod3();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_7();
}
function Part1_7()
{
    switch(random("Mod2", "Mod4"))
    {
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_8();
}
function Part1_8()
{
    Mod4();
    return;
    Part1_9();
}
function Part1_9()
{
    switch(random("Mod1", "Mod4"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_10();
}
function Part1_10()
{
    switch(random("Mod2", "Mod3"))
    {
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
    }
    Part1_11();
}
function Part1_11()
{
    Mod3();
    return;
    Part1_12();
}
function Part1_12()
{
    Fim();
    return;
    Part1_13();
}
function Part1_13()
{
    switch(random("Mod1", "Mod3"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
    }
    Part1_14();
}
function Part1_14()
{
    Mod1();
    return;
    Part1_15();
}
function Part1_15()
{
    switch(random("Mod1", "Mod2"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod2":
        Mod2();
        return;
        break;
    }
    Part1_16();
}
function Part1_16()
{
    Mod2();
    return;
    Fim();
}
function Fim()
{
    setVar("AV_ModChastity1", 0);
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    
    Modulo1();
}
function Modulo1()
{
    CMessage("%PetName%");
    CMessage("%domFriend3Name% wants to do something to you");
    CMessage("She says it will makes your stroking more pleasureable?");
    CMessage("So %OfCourse% I said sure %Grin%");
    addContact(4);
    CMessage("Hi %domFriend3Name%");
    SMessage("Hi %ShortName% and %SubName%", -1, 4);
	removeContact(1);
    SMessage("I\'m not gonna waste too much of your time %ShortName% %Grin%", -1, 4);
    SMessage("This is how it starts. You expose yourself to me, make yourself as vulnerable as possible", -1, 4);
    SMessage("I\'m going to destroy you as a man", -1, 4);
    //SMessage("%StartStroking%", -1, 4);
	Stroking();
    SMessage("No, not quite like you did for %DomName%", -1, 4);
    SMessage("What she did was just a scratch", -1, 4);
    SMessage("compared to the wound that I\'m going to inflict", -1, 4);
    SMessage("As I\'m sure %DomName% explained to you", -1, 4);
    SMessage("you\'re going to jerking off over me", -1, 4);
    CMessage("%stopstroking%", 0);
	stopStroking();
    SMessage("I have no problem exposing myself to you", -1, 4);
    SMessage("as long as I know that seeing my body is making you suffer", -1, 4);
    SMessage("Go ahead. Stare at me all you want, that\'s what you wanted, isn\'t it?", -1, 4);
    SMessage("Time for you to actually earn this view", -1, 4);
    edge();
    SMessage("You feel that ache that wraps around your dick when you pull back from the edge like that?", -1, 4);
    edge();
    SMessage("I want your %Cock% to be more desperate to cum than you are to get a girl to be nice to you.", -1, 4);
    SMessage("Your dick is nothing more than my toy now", -1, 4);
    SMessage("and I\'m going to play with it", -1, 4);
    SMessage("That\'s how you should ALWAYS feel.", -1, 4);
    SMessage("Desperate and aching", -1, 4);
    SMessage("Does it hurt real bad, making that %Cock% hold all that cum on its own?", -1, 4);
    SMessage("I hope so, I\'m going to make you do it again.", -1, 4);
    SMessage("Get back to the edge", -1, 4);
    edge();
    SMessage("at the rate you\'re going, you might not even last through the rest of the night with your dick intact.", -1, 4);
    if (randomInteger(1, 100) <= 50 && getVar(hasChastity,false))
    {
        cc_einstieg1();
        return;
    }
    weiter_cc_mod21();
    return;
    cc_einstieg1();
}
function cc_einstieg1()
{
    SMessage("... but of course there is a way to protect your cock so that it would stay intact", -1, 4);
    SMessage("Get out your cockcage, I want to see it", -1, 4);
    sleep(20);
    SMessage(random("Put on your chastity device", "Put that cock in its cage", "So lock it up now, I wanna see it", "Put on your chastity device", "Put that %Cock% in its cage", "Time to lock that %Cock% up, %Name%", "get the chastity cage and put it on", "You should go ahead and lock up that %Cock%", "That %Cock% needs to be locked in its cage now, %Name%"), -1, 4);
    sleep(20);
    let answer0 = getInput("Tell me when you are done", -1, true, 4);
    while (!(answer0.isLike("done")))
    {
        answer0 = getInput("Tell us when you are done");
    }
    if (answer0.isLike("done"))
    {
        SMessage("Mmmm ...", -1, 4);
    }
    SMessage("Perfect.", -1, 4);
    SMessage("I think my job here is done, one male less running around with a woody in his pants", -1, 4);
    setVar("chastityOn",true);
    weiter_cc_mod21();
}
function weiter_cc_mod21()
{
	addContact(1);
    SMessage("Ok, bye for now.", -1, 4);
    removeContact(4);
    return;
    
    Modulo2();
}
function Modulo2()
{
    CMessage("%SubName%, I\'m even jealous a little!");
    CMessage("You\'re having so much pleasure now...");
    CMessage("So sensitive! So horny!");
    addContact(3);
    SMessage("Hi", -1, 3);
    CMessage("Hi %domFriend2Name%");
    SMessage("%SubName%, you just another horny denied boy for me.", -1, 3);
    SMessage("And you must stay denied until your mistress let you cum.", -1, 3);
    SMessage("Girls are cumming hard. And boys are not allowed to!", -1, 3);
    SMessage("You said he has a chastity device?", -1, 3);
    CMessage("Absolutly");
    SMessage("Can I see him wearing it,... I mean just for a moment, don\'t worry %SubName%", -1, 3);
    CMessage("Sure, why not, I can unlock him as soon as we get back to stroking");
    SMessage("Great %EmoteFaceTF%", -1, 3);
    SMessage("%SubName%, get out your cockcage, I want to see it", -1, 3);
    sleep(20);
    SMessage(random("Put on your chastity device", "Put that cock in its cage", "So lock it up now, I wanna see it", "Put on your chastity device", "Put that %Cock% in its cage", "Time to lock that %Cock% up, %Name%", "get the chastity cage and put it on", "You should go ahead and lock up that %Cock%", "That %Cock% needs to be locked in its cage now, %Name%"), -1, 3);
    sleep(20);
    let answer0 = getInput("Tell me when you are done", -1, true, 3);
    while (!(answer0.isLike("done")))
    {
        answer0 = getInput("Tell us when you are done");
    }
    if (answer0.isLike("done"))
    {
        CMessage("Mmmm ...");
    }
    SMessage("Lock it up now, %PetName%", -1, 3);
    sleep(10);
    SMessage("Looks nice", -1, 3);
    SMessage("Let\'s see how it works when he get\'s teased", -1, 3);
    CMessage("You have learned a bit too much I guess *lol*");
    CMessage("Ok, let\'s try");
    showTaggedImage(4, ["femdom"]);
    sleep(8);
    //--Command:ShowLezdomImage
	showTaggedImage(4, ["lezdom"]);
    sleep(8);
    CMessage("Does it grow inside that cage, %PetName%");
    showTaggedImage(4, ["femdom"]);
    sleep(8);
    showTaggedImage(4, ["femdom"]);
    sleep(8);
    showTaggedImage(4, ["lezdom"]);
    sleep(8);
    SMessage("Don\'t pretent you don\'t like it, %SubName%", -1, 3);
    showTaggedImage(4, ["femdom"]);
    sleep(8);
    SMessage("%ShortName%, I have a naughty idea", -1, 3);
    CMessage("I think that I know what comes next *grin*");
    SMessage("In my opinion %SubName% is stroking that loser cock too much anyway", -1, 3);
    SMessage("So why not just keep him locked up?", -1, 3);
    if (randomInteger(1, 100) <= 70)
    {
        keepiton2();
        return;
    }
    CMessage("Well, for what I have in mind next, that cock needs to be free");
    CMessage("You can unlock it and take it off now");
    let answer1 = getInput(random("Tell me when you are done", "Let me know when you\'re ready to continue"));
    while (!(answer1.isLike("done") || answer1.isLike("ready")))
    {
        answer1 = getInput(random("Tell me when you are done", "Let me know when you\'re ready"));
    }
    if (answer1.isLike("done", "ready"))
    {
        CMessage("Then let\'s get going %Grin% ...");
    }
    CMessage("Sorry %domFriend2Name%, maybe next time");
    SMessage("No problem, I am quite sure there will be a next time, hehe", -1, 3);
    SMessage("Bye for now", -1, 3);
    CMessage("Bye %domFriend2Name% *wink*");
    removeContact(3);
    return;
    keepiton2();
}
function keepiton2()
{
    CMessage("I think you are right %domFriend2Name% %Grin%");
    setVar("chastityOn",true);
    SMessage("%SubName%, don\'t look at me like that.", -1, 3);
    SMessage("I was just courious how it may look on you", -1, 3);
    SMessage("It's %ShortName% decision to keep you locked up for now *lol*",-1,3);
    SMessage("Bye for now, and have \'fun\' %SubName% *rofl*", -1, 3);
    CMessage("Bye %domFriend2Name% *wink*");
    removeContact(3);
    return;
    
    Modulo3();
}
function Modulo3()
{
    addContact(2);
    switch(random("start_cc2", "start_cc1"))
    {
        case "start_cc2":
        start_cc2();
        return;
        break;
        case "start_cc1":
        start_cc1();
        return;
        break;
    }
    start_cc1();
}
function start_cc1()
{
    SMessage(random("How hard it must be knowing you\'re not allowed to cum", "You know what, maybe %ShortName% shouldn\'t let you stroke anymore %GeneralTime%"), -1, 2);
    SMessage("She could make %GeneralTime% a no-stroke-day... *smile*", -1, 2);
    SMessage("What do you think %ShortName%", -1, 2);
    CMessage("Mhhh, should I or should I not...");
    SMessage("Maybe %SubName% can help you with your decission", -1, 2);
    continue_cc1();
    return;
    start_cc2();
}
function start_cc2()
{
    SMessage("Are you maybe talking about the topic chastity", -1, 2);
    CMessage("Well, kind of.");
    SMessage("Does %SubName% owns a cock cage?", -1, 2);
    CMessage("He does");
    SMessage("Mmmm, and why he is stroking then all the time *wicked grin*", -1, 2);
    SMessage("%ShortName%, would you mind if I,... uhmmm, ...", -1, 2);
    CMessage("Sure, I let you ... *grin*");
    SMessage("Alright then, %SubName%", -1, 2);
    continue_cc1();
    return;
    
    continue_cc1();
}
function continue_cc1()
{
    SMessage("Get out your cockcage, I want to see it", -1, 2);
    sleep(20);
    SMessage("Looks nice", -1, 2);
    SMessage("What kind of naughty toughts you must have had when you bought this", -1, 2);
    SMessage("You must have known that one day someone would use this little device against you", -1, 2);
    CMessage("Wait a second, let me think....");
    if (randomInteger(1, 100) <= 50)
    {
        weiterZufaellig();
        return;
    }
    CMessage("Nah, %GeneralTime% I am more in the mood to see him stroking and edging his brain out");
    SMessage("%SubName% seems lucky today, ... well then ...", -1, 2);
    SMessage("Maybe next time *evil grin*", -1, 2);
    SMessage("Bye for now *wink*", -1, 2);
    removeContact(2);
    return;
    
    weiterZufaellig();
}
function weiterZufaellig()
{
    switch(random("lockup_cc2", "lockup_cc1"))
    {
        case "lockup_cc2":
        lockup_cc2();
        return;
        break;
        case "lockup_cc1":
        lockup_cc1();
        return;
        break;
    }
    lockup_cc2();
}
function lockup_cc2()
{
    CMessage("Ok, I wanna see what you have in mind");
    SMessage(random("Put on your chastity device", "Put that cock in its cage", "So lock it up now, I wanna see it", "Put on your chastity device", "Put that %Cock% in its cage", "Time to lock that %Cock% up, %Name%", "get the chastity cage and put it on", "You should go ahead and lock up that %Cock%", "That %Cock% needs to be locked in its cage now, %Name%"), -1, 2);
    sleep(20);
    let answer0 = getInput("Tell me when you are done", -1, true, 2);
    while (!(answer0.isLike("done")))
    {
        answer0 = getInput("Tell us when you are done");
    }
    if (answer0.isLike("done"))
    {
        CMessage("Mmmm ...");
    }
    keepiton5();
    return;
    
    lockup_cc1();
}
function lockup_cc1()
{
    CMessage("%SubName%, I am still not sure");
    SMessage("so why don\'t you make him put it on just for a minute", -1, 2);
    SMessage("to show us how it looks", -1, 2);
    SMessage("go ahead %SubName% and put it on for us, but don\'t lock it up", -1, 2);
    let answer0 = getInput("Tell me when you are done", -1, true, 2);
    while (!(answer0.isLike("done")))
    {
        answer0 = getInput("Tell us when you are done");
    }
    if (answer0.isLike("done"))
    {
        CMessage("Mmmm ...");
    }
    SMessage("%ShortName%, if you\'d ask me, I would need to see the \'whole\' picture *smile*", -1, 2);
    CMessage("Lock it up now, %PetName%");
    sleep(20);
    SMessage("%SubName%, are you getting nervous?!", -1, 2);
    SMessage("%ShortName%, ... what do you think", -1, 2);
    SMessage("Keep that %PetName% locked up or not?", -1, 2);
    CMessage("Mmmm...");
    if (randomInteger(1, 100) <= 50)
    {
        keepiton5();
        return;
    }
    CMessage("Ok, for what I have in mind next, that cock needs to be free");
    CMessage("You can unlock it and take it off now");
    let answer1 = getInput(random("Tell me when you are done", "Let me know when you\'re ready to continue"));
    while (!(answer1.isLike("done") || answer1.isLike("ready")))
    {
        answer1 = getInput(random("Tell me when you are done", "Let me know when you\'re ready"));
    }
    if (answer1.isLike("done", "ready"))
    {
        CMessage("Then let\'s get going %Grin% ...");
    }
    CMessage("Sorry %domFriend1Name%, maybe next time");
    SMessage("No problem, I am quite sure there will be a next time, hehe", -1, 2);
    SMessage("Bye for now", -1, 2);
    CMessage("Bye %domFriend1Name% *wink*");
    removeContact(2);
    return;
    
    keepiton5();
}
function keepiton5()
{
    CMessage(random("I want it locked away", "I don\'t want you to play with it anymore", "Put the key away, you\'ll not need it now %GNMGrin%"));
    setVar("chastityOn",true);
    SMessage("%SubName%, don\'t look at me like that.", -1, 2);
    SMessage("I was just courious how it may look on you", -1, 2);
    SMessage("It's %ShortName% decision to keep you locked up for now *lol*",-1,2);
    SMessage("Bye for now, and have \'fun\' %SubName% *rofl*", -1, 2);
    CMessage("Bye %domFriend1Name% *wink*");
    removeContact(2);
    return;
    
    Modulo4();
}
function Modulo4()
{
    switch(random("start_ccM2", "start_ccM1"))
    {
        case "start_ccM2":
        start_ccM2();
        return;
        break;
        case "start_ccM1":
        start_ccM1();
        return;
        break;
    }
    
    start_ccM1();
}
function start_ccM1()
{
    CMessage(random("How hard it must be knowing you\'re not allowed to cum", "You know what, maybe I won\'t let you stroke anymore %GeneralTime%"));
    CMessage("I could make %GeneralTime% a no-stroke-day...");
    CMessage("Mhhh, should I or should I not...");
    CMessage("Maybe you can help me with my decission");
    continue_ccM1();
    return;
    start_ccM2();
}
function start_ccM2()
{
    CMessage(random("While we are at it ...", "Since the term chastity has came up", "Btw..."));
    CMessage("Let\'s have a little chat about chastity, %SubName%");
    CMessage("It\'s great that you trust me with the decision to lock or unlock you");
    CMessage("But as much as I\'d love to believe that it\'s entirely up to me");
    CMessage("And that I could keep you locked indefinitely if I wanted");
    CMessage("That\'s not how it works is it...");
    CMessage("You won\'t be in chastity for more than a few days");
    CMessage("Now, let\'s get one thing clear, %Name%");
    CMessage("I\'m not going to worry for even a second about the practical side of all this");
    CMessage("You are responsible for your own hygiene and safety while in chastity");
    CMessage("All I will do is decide whether you get locked up or not");
    CMessage("Speaking of which...");
    continue_ccM1();
    return;
    
    continue_ccM1();
}
function continue_ccM1()
{
    CMessage("Get out your cockcage, I want to see it");
    sleep(20);
    CMessage("Looks nice");
    CMessage("What kind of naughty toughts you must have had when you bought this");
    CMessage("You must have known that one day I would use this little device against you");
    CMessage("Well, let me think....");
    if (randomInteger(1, 100) <= 60)
    {
        weiterZufaelligM();
        return;
    }
    CMessage("Nah, %GeneralTime% I am more in the mood to see you stroking and edging your brain out");
    return;
    
    weiterZufaelligM();
}
function weiterZufaelligM()
{
    switch(random("lockup_ccM2", "lockup_ccM1"))
    {
        case "lockup_ccM2":
        lockup_ccM2();
        return;
        break;
        case "lockup_ccM1":
        lockup_ccM1();
        return;
        break;
    }
    
    lockup_ccM2();
}
function lockup_ccM2()
{
    CMessage(random("Put on your chastity device", "Put that cock in its cage", "So lock it up now, I wanna see it", "Put on your chastity device", "Put that %Cock% in its cage", "Time to lock that %Cock% up, %Name%", "get the chastity cage and put it on", "You should go ahead and lock up that %Cock%", "That %Cock% needs to be locked in its cage now, %Name%"));
    sleep(20);
    let answer0 = getInput("Tell me when you are done");
    while (!(answer0.isLike("done")))
    {
        answer0 = getInput("Tell me when you are done");
    }
    if (answer0.isLike("done"))
    {
        CMessage("Mmmm ...");
    }
    keepitonM();
    return;
    lockup_ccM1();
}
function lockup_ccM1()
{
    CMessage("%SubName%, I am still not sure");
    CMessage("so why don\'t you put it on just for a minute");
    CMessage("to let me see how it looks");
    CMessage("go ahead and put it on, but don\'t lock it up");
    let answer0 = getInput("Tell me when you are done");
    while (!(answer0.isLike("done")))
    {
        answer0 = getInput("Tell me when you are done");
    }
    if (answer0.isLike("done"))
    {
        CMessage("Mmmm ...");
    }
    CMessage("Well, I guess I need to see the \'whole\' picture");
    CMessage("Lock it up now");
    sleep(20);
    CMessage("Are you getting nervous?!");
    if (randomInteger(1, 100) <= 70)
    {
        keepitonM();
        return;
    }
    CMessage("You can unlock it and take it off now");
    let answer1 = getInput(random("Tell me when you are done", "Let me know when you\'re ready to continue"));
    while (!(answer1.isLike("done") || answer1.isLike("ready")))
    {
        answer1 = getInput(random("Tell me when you are done", "Let me know when you\'re ready"));
    }
    if (answer1.isLike("done", "ready"))
    {
        CMessage("Then let\'s get going %Grin% ...");
    }
    CMessage("This was just a " + random("little reminder ", "demonstration ") + "to show you that " + random("you can never feel save", "I can fuck with you whenever I feel like to", "I am in control here"));
    CMessage("Don\'t forget that");
    return;
    
    keepitonM();
}
function keepitonM()
{
    CMessage(random("I want it locked away", "I don\'t want you to play with it anymore", "Put the key away, you\'ll not need it now %Grin%"));
    setVar("chastityOn",true);
    return;
}