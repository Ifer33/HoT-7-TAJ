function secondTimeVocabulary()
{
	DMessage("secondtime Vocab: start");
	switch(randomInteger(1,5) ){
		case 1:
			CMessage("I just hope you know how much I love making you %Ache%");
			run("Interrupt" + java.io.File.separator + "AV_SecondTime.js");
			break;
		case 2:
			CMessage("Do you think I\'ll %MakeSure% you put it up like that %GeneralTime%, %Name%");
			run("Interrupt" + java.io.File.separator + "AV_SecondTime.js");
			break;
		case 3:
			CMessage("Knowing that I\'m %Probably% going to %MakeSure% you put it up like that");
			run("Interrupt" + java.io.File.separator + "AV_SecondTime.js");
			break;
		case 4:
			CMessage("How are those %Balls% feeling now %PetName%? %EmoteRandom%");
			run("Interrupt" + java.io.File.separator + "AV_SecondTime.js");
			break;
		case 5:
			CMessage("How are those %Balls% doing now? %EmoteRandom%");
			run("Interrupt" + java.io.File.separator + "AV_SecondTime.js");
			break;
	}
	DMessage("secondTime Vocab: end");
	return "<dontsend>";
}