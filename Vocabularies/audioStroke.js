function audioStrokeVocabulary()
{
	switch(randomInteger(1,9) ){
		case 1:
			playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "circle1.mp3");
			sleep(40);
			break;
		case 2:
			playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "circle2.mp3");
			sleep(44);
			break;
		case 3:
			playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "circle3.mp3");
			sleep(40);
			break;
		case 4:
			playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "circle4.mp3");
			sleep(60);
			break;
		case 5:
			playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "circle5.mp3");
			sleep(28);
			break;
		case 6:
			playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "no200300.mp3");
			sleep(24);
			break;
		case 7:
			playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "overdrive1.mp3");
			sleep(60);
			break;
		case 8:
			playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "overdrive2.mp3");
			sleep(47);
			break;
		case 9:
			playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "overdrive3.mp3");
			sleep(45);
			break;
	}
	return "<dontsend>";
}