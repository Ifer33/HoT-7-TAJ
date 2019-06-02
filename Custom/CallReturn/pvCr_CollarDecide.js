main();
function main()
{
	DMessage("pvCr_CollarDecide CallReturn: Start");
    setAFK(true);
    setVar("AV_WantCollar", true);
	if(checkOldMood("bad","lower") ){
		bad_mood();
		return;
	}
	if(checkOldMood("good","higher") ){
		good_mood();
		return;
	}
	if(checkOldApathyLevel(1) ){
		a70chance();
		return;
	}
    if(checkOldApathyLevel(2) ){
		a60chance();
		return;
	}
    if(checkOldApathyLevel(3) ){
		a50chance();
		return;
    }
	if(checkOldApathyLevel(4) ){
		a40chance();
		return;
    }
	if(checkOldApathyLevel(5) ){
		a30chance();
		return;
	}
    return;
    bad_mood();
}
function bad_mood()
{
	if(checkOldApathyLevel(1) ){
		a40chance();
		return;
	}
    if(checkOldApathyLevel(2) ){
		a30chance();
		return;
	}
    if(checkOldApathyLevel(3) ){
		a20chance();
		return;
    }
	if(checkOldApathyLevel(4) ){
		a10chance();
		return;
    }
	if(checkOldApathyLevel(5) ){
		a01chance();
		return;
	}
    return;
    good_mood();
}
function good_mood()
{
	if(checkOldApathyLevel(1) ){
		a99chance();
		return;
	}
    if(checkOldApathyLevel(2) ){
		a90chance();
		return;
	}
    if(checkOldApathyLevel(3) ){
		a80chance();
		return;
    }
	if(checkOldApathyLevel(4) ){
		a70chance();
		return;
    }
	if(checkOldApathyLevel(5) ){
		a60chance();
		return;
	}
    return;
    a01chance();
}
function a01chance()
{
    if (randomInteger(1, 100) <= 01)
    {
        yes();
        return;
    }
    no();
    return;
    return;
    a10chance();
}
function a10chance()
{
    if (randomInteger(1, 100) <= 10)
    {
        yes();
        return;
    }
    no();
    return;
    return;
    a20chance();
}
function a20chance()
{
    if (randomInteger(1, 100) <= 20)
    {
        yes();
        return;
    }
    no();
    return;
    return;
    a30chance();
}
function a30chance()
{
    if (randomInteger(1, 100) <= 30)
    {
        yes();
        return;
    }
    no();
    return;
    return;
    a40chance();
}
function a40chance()
{
    if (randomInteger(1, 100) <= 40)
    {
        yes();
        return;
    }
    no();
    return;
    return;
    a50chance();
}
function a50chance()
{
    if (randomInteger(1, 100) <= 50)
    {
        yes();
        return;
    }
    no();
    return;
    return;
    a60chance();
}
function a60chance()
{
    if (randomInteger(1, 100) <= 60)
    {
        yes();
        return;
    }
    no();
    return;
    return;
    a70chance();
}
function a70chance()
{
    if (randomInteger(1, 100) <= 70)
    {
        yes();
        return;
    }
    no();
    return;
    return;
    a80chance();
}
function a80chance()
{
    if (randomInteger(1, 100) <= 80)
    {
        yes();
        return;
    }
    no();
    return;
    return;
    a90chance();
}
function a90chance()
{
    if (randomInteger(1, 100) <= 90)
    {
        yes();
        return;
    }
    no();
    return;
    return;
    a99chance();
}
function a99chance()
{
    if (randomInteger(1, 100) <= 99)
    {
        yes();
        return;
    }
    no();
    return;
    return;
    yes();
}
function yes()
{
    setAFK(false);
    run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_CollarOn.js");
	DMessage("pvCr_CollarDecide CallReturn: End");
    return;
    no();
}
function no()
{
    CMessage(random("Not now ", "I don\'t think so ", "Maybe later ") + "%Name%");
    setAFK(false);
	DMessage("pvCr_CollarDecide CallReturn: End");
    return;
}