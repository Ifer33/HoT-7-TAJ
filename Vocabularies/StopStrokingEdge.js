function stopStrokingEdgeVocabulary()
{
	DMessage("Vocab: stopStrokingEdge Beginn");
	//if(isStrokingAll()||isEdging()){	// || stroking){
		stroking=false;
		stopAudio();
		//endStroking();
		//setStrokingActive(false);
		let answers = ["Stop stroking",
			"Hands off",
			"Hands off, I don't want you to cum yet"];

		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
		DMessage("Vocab: stopStrokingEdge End");
		return answers[randomInteger(0, answers.length - 1)];
	/*}else{
		DMessage("Vocab: stopStrokingEdge End");
		return "<dontsend>";
	}*/
}
