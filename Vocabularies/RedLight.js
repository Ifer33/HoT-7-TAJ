function redLightVocabulary()
{
	DMessage("redLight: VocabStart");
	switch(randomInteger(1,4) ){
		case 1:
			message="<c=red b> Red light, hands off"
			break;
		case 2:
			message="<c=red b> Red light, hands off"
			break;
		case 3:
			message="<c=red b> Red light, stop"
			break;
		case 4:
			message="<c=red b> Red light, no touch"
			break;
	}
	DMessage("redLight: VocabEnd");
	return message;
}