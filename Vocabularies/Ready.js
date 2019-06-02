function readyVocabulary() {
	DMessage("Ready Vocab: start");
	let answers="<dontsend>";
	let found=false;
	while(!found){
		switch (randomInteger(1,7) ) {
			case 1:
				answers="ready? ";
				found=true;
				break;
			case 2:
				answers="are you ready?";
				found=true;
				break;
			case 3:
				if(getVar(AV_DommeMistress)){
					answers="are you ready bitch?";
					found=true;
				}
				break;
			case 4:
				if(getVar(av_fetish_rough)){
					answers="are you ready bitch?";
					found=true;
				}
				break;
			case 5:
				answers="are you ready %PetName%?";
				found=true;
				break;
			case 6:
				if(getVar(av_fetish_rough) || getVar(AV_DommeMistress)){
					answers="Are you ready %Slave%?";
					found=true;
				}
				break;
			case 7:
				answers="Are you ready slave?";
				found=true;
				break;
			case 7:
				answers="are you ready %PetName%?";
				found=true;
				break;
		}
	}
	DMessage("Ready Vocab: end");
    return answers;
}