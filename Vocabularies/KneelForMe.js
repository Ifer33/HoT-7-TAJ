function kneelForMeVocabulary() {
    let answers = ["On your knees", "Get on your knees", "Fall on your knees", "Kneel down to me", "Stand on your knees", "Kneel right in front of me", "Get down on your knees", "Drop to your knees", "Down on your knees, right now", "I want you to kneel for me, %Name%"];
    if(randomInteger(1, 10) == 1) {
		SMessage("%DomName% turned on the mic");
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "commands" + java.io.File.separator + "Kneel*.mp3");
	}
	setTempVar("AV_SubKnees", true);
    setTempVar("pvKneeling", true);
    return answers[randomInteger(0, answers.length - 1)];
}