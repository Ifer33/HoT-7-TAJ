function startStrokingVocabulary()
{
	DMessage("Vocab: startStroking Beginn");
	//setStrokingActive();
	stroking=true;
	let answers = ["Start stroking",
		"Start stroking %PetName%",
		"Start stroking %SubName%",
		"Stroke",
		"Stroke for me",
		"Stroke for me %PetName%",
		"Stroke for me %SubName%",
		"You need to start stroking",
		"You need to start stroking %PetName%",
		"You need to start stroking %SubName%",
		"You need to start stroking now",
		"You need to start stroking now %PetName%",
		"You need to start stroking now %SubName%",
		"Start stroking that %Cock%",
		"Grab that %Cock% and start stroking",
		"Start stroking that %Cock% for me",
		"Start jerking that %Cock%",
		"I want you to start jerking that %Cock%",
		"Start stroking that %Cock%",
		"Start stroking that %Cock% for me",
		"Start stroking that %Cock% of yours",
		"Start stroking that %Cock% %PetName%",
		"Start stroking that %Cock% for me %PetName%",
		"Start stroking that %Cock% of yours %PetName%",
		"Start stroking that %Cock% %SubName%",
		"Start stroking that %Cock% for me %SubName%",
		"Start stroking that %Cock% of yours %SubName%"];

	playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
	DMessage("Vocab: startStroking End");
	return answers[randomInteger(0, answers.length - 1)];
}
