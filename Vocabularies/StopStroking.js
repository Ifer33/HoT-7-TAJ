function stopStrokingVocabulary()
{
	DMessage("Vocab: stopStroking Beginn");
	stopAudio();
	//endStroking();
	//setStrokingActive(false);
	if(isStrokingAll()){	// || stroking){
		stroking=false;
		let answers = ["Hands off",
		"You can stop", 
		"That's enough, hands off",
		"Let go and stop",
		"That's enough, let go of your %Cock%",
		"And stop",
		"Stop and let go of your %Cock%",
		"You can stop now",
		"You can let go of your %Cock%",
		"I want you to stop",
		"Take your hands off your %Cock%",
		"Let go of your %Cock%",
		"Stop and take your hands off your %Cock%",
		"%Okay%, stop"];
		//if(!isStroking()){
		if(!strokingCycle){
			playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
		}
		DMessage("Vocab: stopStroking End");
		return answers[randomInteger(0, answers.length - 1)];
	}else{
		DMessage("Vocab: stopStroking End");
		return "<dontsend>";
	}
}