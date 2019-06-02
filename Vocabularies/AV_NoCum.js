function AV_NoCumVocabulary()
{
	DMessage("AV_NoCum Vocab: start");
	found=false;
	while(!found){
		switch(randomInteger(1,16) ){
			case 1:
				CMessage("No cumming for you today, %PetName%!");
				found=true;
				break;
			case 2:
				CMessage("Too bad, %PetName%, this is not a happy ending day for you... Put your aching cock away now.");
				found=true;
				break;
			case 3:
				CMessage("No cumming for you, %SubName%! Too bad, so sad.... %Lol%.");
				found=true;
				break;
			case 4:
				CMessage("Put it back in your pants, you don\'t get to cum today");
				found=true;
				break;
			case 5:
				if (inGroup(1))
				{
					CMessage("No cumming for you");
					playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "denial" + java.io.File.separator + "*.mp3");
					found=true;
				}
				break;
			case 6:
				CMessage("Your chances of cumming today were pretty low %SubName%");
				found=true;
				break;
			case 7:
				CMessage("You never stood much of a chance today %PetName%");
				found=true;
				break;
			case 8:
				CMessage("Sorry but denial was bound to happen, perhaps I should have told you earlier");
				found=true;
				break;
			case 9:
				CMessage("That\'ll be all for today");
				found=true;
				break;
			case 10:
				if(getVar("AV_DommeMistress", false))
				{
					CMessage("So I don\'t need you anymore for now");
					found=true;
				}
				break;
			case 11:
				if (inGroup(1))
				{
					playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "denial" + java.io.File.separator + "*.mp3");
					found=true;
				}
				break;
			case 12:
				if (inGroup(1))
				{
					playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "denial" + java.io.File.separator + "*.mp3");
					found=true;
				}
				break;
			case 13:
				if (inGroup(1))
				{
					playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "denial" + java.io.File.separator + "*.mp3");
					found=true;
				}
				break;
			case 14:
				CMessage("And you didn\'t even have to cum! %GeneralTime%, you can stay denied.");
				found=true;
				break;
			case 15:
				CMessage("Let all that cum drain deep into your balls.");
				found=true;
				break;
			case 16:
				CMessage("Blue balls are all you deserve.");
				found=true;
				break;
		}
	}
	DMessage("AV_NoCum Vocab: end");
	return "<dontsend>";
}