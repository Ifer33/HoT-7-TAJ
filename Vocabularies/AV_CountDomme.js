function AV_CountDommeVocabulary()
{
	switch (randomInteger(1,4) ){
		case 1:
			playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Count" + java.io.File.separator + "d30.mp3");
			sleep(30);
			break;
		case 2:
			playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Count" + java.io.File.separator + "d40.mp3");
			sleep(35);
			break;
		case 3:
			playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Count" + java.io.File.separator + "d50.mp3");
			sleep(66);
			break;
		case 4:
			playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Count" + java.io.File.separator + "d60.mp3");
			sleep(30);
			break;
	}	
	return "<dontsend>";
}