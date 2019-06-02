function AV_CountContact1Vocabulary()
{
	switch (randomInteger(1,4) ){
		case 1:
			playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Count" + java.io.File.separator + "b01.mp3");
			sleep(19);
			break;
		case 2:
			playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Count" + java.io.File.separator + "b02.mp3");
			sleep(5);
			break;
		case 3:
			playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Count" + java.io.File.separator + "b03.mp3");
			sleep(3);
			break;
		case 4:
			playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Count" + java.io.File.separator + "b04.mp3");
			sleep(12);
			break;
	}	
	return "<dontsend>";
}
