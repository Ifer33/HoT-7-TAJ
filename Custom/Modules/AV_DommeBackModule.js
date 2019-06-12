DMessage("AV_DommeBackModule: start");
main();
DMessage("AV_DommeBackModule: end");
function main()
{
    if (isStrokingAll())
    {
        Sub_Stroking();
        return;
    }
    else
    {
        Sub_Not_Stroking();
        return;
    }
    Sub_Stroking();
}
function Sub_Stroking()
{
    CMessage("%stopstroking%", 0);
    stopStrokingAll();
    Sub_Not_Stroking();
}
function Sub_Not_Stroking()
{
	addTeaseTime(-20*60);
    if (getVar("AV_GlitterControl", 0) == 1)
    {
        G01();
        return;
    }
    if (getVar("AV_GlitterControl", 0) == 2)
    {
        G02();
        return;
    }
    if (getVar("AV_GlitterControl", 0) == 3)
    {
        G03();
        return;
    }
    G01();
}
function G01()
{
    SMessage("Look who is back", -1, 2);
    addContact(1);
    CMessage("Hi %PetName%, miss me?");
    SMessage("He is fine %EmoteHappy%", -1, 2);
    CMessage("Thanks %domFriend1Name%, I will take control now");
    SMessage("You are welcome...cya", -1, 2);
    removeContact(2);
    return;
    G02();
}
function G02()
{
    SMessage("Look who is back", -1, 3);
    addContact(1);
    CMessage("Hi %PetName%, miss me?");
    SMessage("He is fine %EmoteHappy%", -1, 3);
    CMessage("Thanks %domFriend2Name%, I will take control now");
    SMessage("You are welcome...cya", -1, 3);
    removeContact(3);
    return;
    G03();
}
function G03()
{
    SMessage("Look who is back", -1, 4);
    addContact(1);
    CMessage("Hi %PetName%, miss me?");
    SMessage("He is fine %EmoteHappy%", -1, 4);
    CMessage("Thanks %domFriend3Name%, I will take control now");
    SMessage("You are welcome...cya", -1, 4);
    removeContact(4);
    return;
}