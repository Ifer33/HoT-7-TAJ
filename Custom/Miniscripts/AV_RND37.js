DMessage("AV_RND37: start");
main();
DMessage("AV_RND37: end");
function main()
{
    CMessage("%StrokeSlowest%");
    //--Command:StrokeSlowest
	slowStroking(5);
    CMessage("Keep a steady pace");
    if(getVar("pvTauntSDAF1", false))
    {
        pvTauntSDAF1();
        return;
    }
    if(getVar("AV_SubKnees", false))
    {
        CMessage("You can sit down now");
        delVar("AV_SubKnees");
    }
    CMessage("You need to focus on me now, %PetName%");
    setVar("pvTauntSDAF1", true);
    CMessage("Your dedication to me is all that matters right now");
    setTempVar("AV_0RND37", true);
    CMessage("In fact, let\'s try to clear your mind of all other thoughts %Smile%");
    CMessage("Your submission to me is all you need right now");
    CMessage("Stroke up and down, slowly and steadily");
    CMessage("Breathe in and out");
    CMessage("Think of your mind as a room way up in your head");
    CMessage("An attic, or a penthouse maybe");
    CMessage("You\'d love to explore that room and see what it\'s really like");
    CMessage("But it\'s filled up to the ceiling with balloons...");
    CMessage("Each of those balloons is a thought in you mind, %Name%");
    CMessage("And with every stroke you pop one of those balloons");
    CMessage("Pop, pop, pop...");
    CMessage("Until your mind is empty and blank");
    CMessage("And as you stare at the walls of your mind");
    CMessage("You can see there is something written on them in large letters");
    CMessage("\"Obey %DomHonorific% %DomName%\"");
    CMessage("That\'s the only thing on your mind right now, %PetName%");
    CMessage("%StrokeFaster%");
    speedUpStroking(3);
    return;
    pvTauntSDAF1();
}
function pvTauntSDAF1()
{
    CMessage("Try not to think about anything else right now");
    delVar("pvTauntSDAF1");
    CMessage("Worshipping me with long slow strokes should be the only thing on your mind");
    setTempVar("AV_0RND37", true);
    CMessage("Relax and slow down your breathing");
    CMessage("I need you to last for a long time, %PetName%");
    if(getVar("pvPMEyes", false))
    {
        CMessage("And you know what happens when you get too exited...");
    }
    if(getVar("pvPMEyes", false))
    {
        CMessage("You blow your load way too soon and then I won\'t have any blue balls to play with");
    }
    CMessage("So keep those strokes coming, slow and steady");
    CMessage("Keep your mind focused on the one thing that\'s important to you...");
    CMessage("Obeying me");
    CMessage("Serving me");
    CMessage("That\'s all that matters right now");
    return;
    
    
}