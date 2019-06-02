DMessage("AV_RNDCumChances: start");
main();
DMessage("AV_RNDCumChances: end");
function main()
{
    if(getVar("AV_DecOrg", false))
    {
        SMood2();
        return;
    }
    setVar("AV_DecOrg", true);
    if (getMood() >= 70)
    {
        increaseOrgasmChance(-8);
    }
    SMood2();
	return;
}
function SMood2()
{
    if(getVar("AV_IncRuin", false))
    {
        SMood3();
        return;
    }
    setVar("AV_IncRuin", true);
    if (getMood() >= 70)
    {
        increaseRuinChance(8);
    }
    SMood3();
	return;
}
function SMood3()
{
    if(getVar("AV_IncOrg", false))
    {
        SMood4();
        return;
    }
    setVar("AV_IncOrg", true);
    if (getMood() <= 30)
    {
        increaseOrgasmChance(8);
    }
    SMood4();
	return;
}
function SMood4()
{
    if(getVar("AV_DecRuin", false))
    {
        continue40();
        return;
    }
    setVar("AV_DecRuin", true);
    if (getMood() <= 30)
    {
        increaseRuinChance(-8);
    }
    continue40();
	return;
}
function continue40()
{
    return;
}