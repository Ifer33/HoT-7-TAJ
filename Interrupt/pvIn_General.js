main();
function main()
{
	DMessage("pvIn_General: Start");
    if (isStroking())
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
    stopStroking();
    Sub_Not_Stroking();
}
function Sub_Not_Stroking()
{
    SMessage("I " + random("should ", "better ", "should probably ") + random("leave you to it ", "go now ", "be going now ") + random("see ya ", "bye ", "later ") + "%ShortName% %Smile%", -1, 2);
    removeContact(2);
    SMessage("I " + random("should ", "better ", "should probably ") + random("leave you to it ", "go now ", "be going now ") + random("see ya ", "bye ", "later ") + "%ShortName% %Smile%", -1, 3);
    removeContact(3);
    SMessage("I " + random("should ", "better ", "should probably ") + random("leave you to it ", "go now ", "be going now ") + random("see ya ", "bye ", "later ") + "%ShortName% %Smile%", -1, 4);
    removeContact(4);
	DMessage("pvIn_General: End");
    return;
}