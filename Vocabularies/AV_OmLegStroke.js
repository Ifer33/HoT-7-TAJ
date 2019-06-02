function AV_OmLegStrokeVocabulary()
{
	DMessage("aV_OmLegStroke: start");
    if(!getVar("AV_OmStrokeNumber", false))
    {
        SMessage("<c=green b> %AV_GirlName% : <c=black b>%Stroke% " + (java.lang.Math.round(randomInt(20, 40) / 10.0) * 10) + " times");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
        setTempVar("AV_OmStrokeNumber", true);
        sleep(randomInt(10, 15));
    }
    if(!getVar("AV_OmStrokeBeat", false))
    {
        SMessage("<c=green b> %AV_GirlName% : <c=black b>%Stroke% to the beat");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "beats" + java.io.File.separator + "*.mp3");
        setTempVar("AV_OmStrokeBeat", true);
        sleep(randomInt(10, 15));
		stopAudio();
    }
    if(!getVar("AV_OmStrokeSimple", false))
    {
        SMessage("<c=green b> %AV_GirlName% : <c=black b>%Stroke% for Me");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
        setTempVar("AV_OmStrokeSimple", true);
        sleep(randomInt(10, 15));
    }
    if(!getVar("AV_OmStrokeOver", false))
    {
        SMessage("<c=green b> %AV_GirlName% : <c=black b>"+random("Give me ", "I want to see ", "Follow ") + "an Overdrive");
        playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "StrokePattern" + java.io.File.separator + "overdrive*.mp3");
        setTempVar("AV_OmStrokeOver", true);
        sleep(randomInt(10, 15));
		stopAudio();
    }
	DMessage("aV_OmLegStroke: end");
	return "<dontsend>";
}