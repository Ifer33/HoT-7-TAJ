DMessage("pvMs_PunishmentLight_Stroking: Beginn");
main();
DMessage("pvMs_PunishmentLight_Stroking: end");
function main()
{
    switch(random("a1", "a2", "a3", "a4"))
    {
        case "a1":
        a1();
        return;
        break;
        case "a2":
        a2();
        return;
        break;
        case "a3":
        a3();
        return;
        break;
        case "a4":
        a4();
        return;
        break;
    }
    a1();
}
function a1()
{
    CMessage("Slap yourself in the face with your free hand, %PetName%");
    CMessage("Don\'t forget to keep stroking");
    wait(5);
    CMessage("Do it again, slap your face");
    CMessage("Good boy %Smile%");
    return;
    a2();
}
function a2()
{
    CMessage("Punch yourself in the balls, %PetName%");
    CMessage("Make it hurt");
    CMessage("Keep stroking, I didn't say you could stop");
    return;
    a3();
}
function a3()
{
    CMessage("Get on your knees, %PetName%");
    CMessage("Don\'t forget to keep stroking");
    CMessage("Slap yourself in the face with your free hand");
    wait(5);
    CMessage("Harder, %PetName%");
    CMessage("Now say: I\'m sorry, %DomHonorific%");
    wait(5);
    CMessage("Get up off your knees");
    return;
    a4();
}
function a4()
{
    CMessage("I\'m going to bust your %Balls%");
    changeDommeLevel(2);
    CMessage("But don't you dare stop stroking, %PetName%");
    cbt("ball");
    return;
}