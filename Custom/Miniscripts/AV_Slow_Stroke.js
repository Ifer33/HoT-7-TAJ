DMessage("AV_Slow_Stroke: start");
main();
DMessage("AV_Slow_Stroke: end");
function main()
{
    CMessage("In this case...");
    CMessage("Let\'s make you " + random("more frustrated", "more desperate", "ache more"));
    CMessage("%StrokeSlower%");
    //--Command:StrokeSlower
	slowStroking();
    return;
}