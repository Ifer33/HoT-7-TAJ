DMessage("AV_MiniControle: Beginning");
main();
DMessage("AV_MiniControle: End");
function main()
{
    if (randomInteger(1, 100) <= 20)
    {
        Ramdomhappy();
        return;
    }
    if (randomInteger(1, 100) <= 20)
    {
        Ramdomangry();
        return;
    }
    if (randomInteger(1, 100) <= 20)
    {
        Ramdomhorny();
        return;
    }
    NoRamdom();
    return;
    Ramdomhappy();
}
function Ramdomhappy()
{
    setVar("AV_DommeBom", getVar("AV_DommeBom", 0) + 1);
    if (randomInteger(1, 100) <= 20)
    {
        Ramdomangry();
        return;
    }
    if (randomInteger(1, 100) <= 20)
    {
        Ramdomhorny();
        return;
    }
    NoRamdom();
    return;
    Ramdomangry();
}
function Ramdomangry()
{
    setVar("AV_DommeRuim", getVar("AV_DommeRuim", 0) + 1);
    if (randomInteger(1, 100) <= 20)
    {
        Ramdomhorny();
        return;
    }
    NoRamdom();
    return;
    Ramdomhorny();
}
function Ramdomhorny()
{
    setVar("AV_DommeHorny", getVar("AV_DommeHorny", 0) + 1);
    NoRamdom();
}
function NoRamdom()
{
    if (getVar("AV_DommeBom", 0) >= 10)
    {
        happy2();
        return;
    }
    if (getVar("AV_DommeBom", 0) >= 4)
    {
        happy1();
        return;
    }
    happy1();
}
function happy1()
{
    setTempVar("AV_DommeHappy1", true);
    continue1();
    return;
    happy2();
}
function happy2()
{
    setTempVar("AV_DommeHappy2", true);
    continue1();
    return;
    continue1();
}
function continue1()
{
    if (getVar("AV_DommeRuim", 0) >= 10)
    {
        angry2();
        return;
    }
    if (getVar("AV_DommeRuim", 0) >= 4)
    {
        angry1();
        return;
    }
    angry1();
}
function angry1()
{
    setTempVar("AV_DommeAngry1", true);
    continue2();
    return;
    angry2();
}
function angry2()
{
    setTempVar("AV_DommeAngry2", true);
    continue2();
    return;
    continue2();
}
function continue2()
{
    if (getVar("AV_DommeHorny", 0) >= 10)
    {
        horny2();
        return;
    }
    if (getVar("AV_DommeHorny", 0) >= 3)
    {
        horny1();
        return;
    }
    horny1();
}
function horny1()
{
    setTempVar("AV_DommeHornie1", true);
    continue3();
    return;
    horny2();
}
function horny2()
{
    setTempVar("AV_DommeHornie2", true);
    continue3();
    return;
    continue3();
}
function continue3()
{
    if(getVar("AV_SubKnees", false))
    {
        AV_SubKnees();
        return;
    }
    continue4();
    return;
    AV_SubKnees();
}
function AV_SubKnees()
{
    CMessage("Alright you can get back on your chair");
    delVar("AV_SubKnees");
    continue4();
}
function continue4()
{
    if(getVar("AV_Pins", false))
    {
        AV_Pins();
        return;
    }
    SkipPins();
    return;
    AV_Pins();
}
function AV_Pins()
{
    CMessage("You can remove all clothespins");
    delVar("AV_Pins");
    SkipPins();
}
function SkipPins()
{
    return;
}