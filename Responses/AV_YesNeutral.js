addResponseIndicator("asldknasldkjalsjx;lkxzjc;kljzhnkl");
//run("allutils.js");

function aV_YesNeutralResponse(message) {
	DMessage("aV_YesNeutral: BeginnningResponse");
	if(getVar("AV_Know_17", false)){
		if(randomInt(1,18)==5){
			CMessage(getVar("AV_Persona09"));
			return;
		}
	}
    CMessage(random("%Good%", "Good Boy", "%GoodBoy%", "%ImPleased%", "%IKnow%", "%Lovingly%", "%OfCourse%", "This is awesome!", "I love it!", "%EmoteSmile%", "%EmoteHappy%", "Yeah", "%Yes%"));
	DMessage("aV_YesNeutral: EndResponse");
	//return;	//not needed?
}