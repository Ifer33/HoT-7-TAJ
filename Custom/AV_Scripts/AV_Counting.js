DMessage("AV_Counting: start");
main();
DMessage("AV_Counting: end");
function main()
{
    switch(random("a01", "a02", "a03"))
    {
        case "a01":
        a01();
        return;
        break;
        case "a02":
        a02();
        return;
        break;
        case "a03":
        a03();
        return;
        break;
    }
    
    a01();
}
function a01()
{
    CMessage("%LittleGame%");
    CMessage("For " + random("each ", "every ") + "number I " + random("say", "count"));
    CMessage("You " + random("will ", "need to ") + "%Stroke% once");
    CMessage("keep timing with me");
    CMessage("Ready?");
    switch(random("pic1", "domme1"))
    {
        case "pic1":
        pic1();
        return;
        break;
        case "domme1":
        domme1();
        return;
        break;
    }
    
    pic1();
}
function pic1()
{
    CMessage("You can " + random("enjoy ", "watch ") + "some " + random("hot ", "sexy ") + random("pictures", "images"));
    //Command:Slideshow(Softcore)
    //TODO: Turn Slideshow on
	setSlideShow("SOFTCORE");
	slideShowOn();
    CMessage("%AV_CountDomme%");
    CMessage("%Stop%");
    //TODO: Turn Slideshow off
	slideShowOff();
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    
    domme1();
}
function domme1()
{
    CMessage("%AV_CountDomme%");
    CMessage("%Stop%");
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    
    a02();
}
function a02()
{
    CMessage("%domFriend3Name% want to try something with you");
    addContact(4);
    removeContact(1);
    SMessage("%LittleGame%", -1, 4);
    SMessage("For " + random("each ", "every ") + "number I " + random("say", "count"), -1, 4);
    SMessage("You " + random("will ", "need to ") + "%Stroke% once", -1, 4);
    SMessage("keep timing with me", -1, 4);
    SMessage("Ready?", -1, 4);
    SMessage("%AV_CountContact3%", -1, 4);
    sleep(20);
    SMessage("%Stop%", -1, 4);
    SMessage("%ThatsEnough%", -1, 4);
    addContact(1);
    removeContact(4);
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    
    a03();
}
function a03()
{
    CMessage("%domFriend1Name% want to try something with you");
    addContact(2);
    removeContact(1);
    SMessage("%LittleGame%", -1, 3);
    SMessage("For " + random("each ", "every ") + "number I " + random("say", "count"), -1, 3);
    SMessage("You " + random("will ", "need to ") + "%Stroke% once", -1, 3);
    SMessage("keep timing with me", -1, 3);
    SMessage("Ready?", -1, 3);
    SMessage("%AV_CountContact1%", -1, 3);
    sleep(10);
    SMessage("%Stop%", -1, 3);
    SMessage("%ThatsEnough%", -1, 3);
    addContact(1);
    removeContact(2);
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
}