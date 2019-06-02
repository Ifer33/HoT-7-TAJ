function goodBoyVocabulary() {
	let answers="<dontsend>";
	let found=false;
	while(!found){
		switch (randomInteger(1,13) ) {
			case 1:
				answers="Good boy";
				found=true;
				break;
			case 2:
				if(inGroup(1)){
					SMessage("%DomName% turned on the mic");
					playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "commands" + java.io.File.separator + "GoodBoy*.mp3");
					answers="<dontsend>";
					found=true;
					break;
				}
				break;
			case 3:
				if(inGroup(1)){
					SMessage("%DomName% turned on the mic");
					playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "commands" + java.io.File.separator + "GoodBoy*.mp3");
					answers="<dontsend>";
					found=true;
					break;
				}
				break;
			case 4:
				answers="Good pet";
				found=true;
				break;
			case 5:
				answers="Good boy";
				found=true;
				break;
			case 6:
				answers="Good boy";
				found=true;
				break;
			case 7:
				answers="Good %PetName%";
				found=true;
				break;
			case 8:
				answers="Good boy";
				found=true;
				break;				
			case 9:
				answers="Good boy";
				found=true;
				break;
			case 10:
				answers="Good boy";
				found=true;
				break;
			case 11:
				if(inGroup(2)){
					SMessage("%domFriend1Name% turned on the mic");
					playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Glitter1" + java.io.File.separator + "GoodBoy*.mp3");
					answers="<dontsend>";
					found=true;
					break;
				}
				break;
			case 12:
				if(inGroup(2)){
					SMessage("%domFriend1Name% turned on the mic");
					playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Glitter1" + java.io.File.separator + "GoodBoy*.mp3");
					answers="<dontsend>";
					found=true;
					break;
				}
			case 13:
				if(inGroup(2)){
					SMessage("%domFriend1Name% turned on the mic");
					playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "Glitter1" + java.io.File.separator + "GoodBoy*.mp3");
					answers="<dontsend>";
					found=true;
					break;
				}
		}
	}
    return answers;
}