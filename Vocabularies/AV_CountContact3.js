function AV_CountContact3Vocabulary()
{
	switch (randomInteger(1,5) ){
		case 1:
			playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Count" + java.io.File.separator + "a601.mp3");
			sleep(61);
			break;
		case 2:
			playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Count" + java.io.File.separator + "a602.mp3");
			sleep(69);
			break;
		case 3:
			playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Count" + java.io.File.separator + "a603.mp3");
			sleep(33);
			break;
		case 4:
			playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Count" + java.io.File.separator + "a604.mp3");
			sleep(45);
			break;
		case 5:
			playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Count" + java.io.File.separator + "a605.mp3");
			sleep(16);
			break;
	}	
	return "<dontsend>";
}
