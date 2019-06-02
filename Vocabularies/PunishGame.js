function punishGameVocabulary()
{
	DMessage("PunishGame Vocab: start");
	switch(randomInteger(1,6) ){
		case 1:
			CMessage(random("Spank ", "Hit ") + "your %Balls%");
			playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
			sleep(15);
			break;
		case 2:
			CMessage(random("Spank ", "Hit ") + "your %Cock%");
			playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "*.mp3");
			sleep(15);
			break;
		case 3:
			CMessage(random("Put ", "Place ") + "a clothespin on your %Balls%");
			sleep(15);
			break;
		case 4:
			cbt("ball");
			break;
		case 5:
			cbt("cock");
			break;
		case 6:
			CMessage(random("Put ", "Place ") + "a clothespin on your nipple");
			sleep(15);
			break;
	}
	DMessage("PunishGame Vocab: end");
	return "<dontsend>";
}