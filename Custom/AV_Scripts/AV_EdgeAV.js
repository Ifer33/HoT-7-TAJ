DMessage("AV_EdgeAV: start");
edged=false;
main();
DMessage("AV_EdgeAV: end");
function main()
{
	if(getVar("AV_EdgeAV_FromVideo",false) ){
		delVar("AV_EdgeAV_FromVideo");
		FromVideo();
		return;
	}
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    //Command:Slideshow(Softcore,slow)
    //TODO: Turn Slideshow on
	setSlideShow("SOFTCORE","slow");
	slideShowOn();
    //sleep(randomInt(15, 20));
	sleep(randomInt(15, 20));
    CMessage("%Edge%");
    setVar("edgingmode", "Goto");
    setVar("edginggoto", "EdgeForGoto()")
	Loop();
	return;
}
function Loop()
{
	while(!edged){
		CMessage("%GetClose%");
		sleep(1);
		Loop();
	}
    return;
    EdgeForGoto();
}
function EdgeForGoto()
{
	edged=true;
	slideShowOff();
    //TODO: Turn Slideshow off
    switch(random("V10", "V15", "V60"))
    {
        case "V10":
        V10();
        return;
        break;
        case "V15":
        V15();
        return;
        break;
        case "V60":
        V60();
        return;
        break;
    }
	return;
    V10();
}
function V10()
{
    CMessage("stay on the edge");
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "webm" + java.io.File.separator + "10" + java.io.File.separator + "*.webm");
    CMessage("%stopstroking%", 0);
    FimEdge();
    return;
    V15();
}
function V15()
{
    CMessage("stay on the edge");
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "webm" + java.io.File.separator + "15" + java.io.File.separator + "*.webm");
    CMessage("%stopstroking%", 0);
    FimEdge();
    return;
    V60();
}
function V60()
{
    CMessage("stay on the edge");
    playVideo("Videos" + java.io.File.separator + "AV_Clips" + java.io.File.separator + "webm" + java.io.File.separator + "60" + java.io.File.separator + "*.webm");
    CMessage("%stopstroking%", 0);
    FimEdge();
    return;
    FimEdge();
}
function FimEdge()
{
    setVar("edgingmode", "Normal");
    return;
    
    FromVideo();
}
function FromVideo()
{
    return;
}