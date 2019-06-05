DMessage("AV_RuinHMain: start");
main();
DMessage("AV_RuinHMain: end");
function main()
{
    if (getVar("AV_RuinHorny", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_RuinHorny", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_RuinHorny", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_RuinHorny", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_RuinHorny", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_RuinHorny", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_RuinHorny", 0) == 111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_RuinHorny", 0) == 110)
    {
        Part1_9();
        return;
    }
    Part1_1();
}
function Part1_1()
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
    Part1_2();
}
function Part1_2()
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
    Part1_3();
}
function Part1_3()
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
    Part1_4();
}
function Part1_4()
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
    Part1_6();
}
function Part1_6()
{
    Mod3();
    return;
    Part1_7();
}
function Part1_7()
{
    Mod2();
    return;
    Part1_9();
}
function Part1_9()
{
    Mod1();
    return;
    Part1_12();
}
function Part1_12()
{
	setVar("AV_RuinHorny",0);
    return;
    Mod1();
}
function Mod1()
{
    //setVar("moduletorun", "AV_RuinHorny1")
	setVar("moduletorun", "Custom" + java.io.File.separator + "Modules" + java.io.File.separator + "AV_RuinHorny1.js");
    return;
    Mod2();
}
function Mod2()
{
    setVar("moduletorun", "Custom" + java.io.File.separator + "Modules" + java.io.File.separator + "AV_RuinHorny2.js");
    return;
    Mod3();
}
function Mod3()
{
    setVar("moduletorun", "Custom" + java.io.File.separator + "Modules" + java.io.File.separator + "AV_RuinHorny3.js");
    return;
}