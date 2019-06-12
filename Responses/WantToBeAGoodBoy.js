addResponseIndicator("want to be a good","want to be good");
//run("allutils.js");

function wantToBeAGoodBoyResponse(message) {
	DMessage("wantToBeAGoodBoy: BeginnningResponse");
	if (isStrokingAll())
    {
		CMessage("You can be a good boy for me by "+random("jerking","stroking")+" that "+random("dirty","nasty","hard","useless")+" %Cock%");
	}
	else
	{
		found=false;
		while(!found){
			switch(randomInteger(1,3)){
				case 1:
					CMessage("I know you do, %PetName% %Smile%");
					found=true;
					break;
				case 2:
					CMessage("You\'re probably hoping that I won\'t be so cruel if you\'re a good boy %Grin%");
					found=true;
					break;
				case 3:
					if(getMood()<=40 ){	//goodMood?
						CMessage("You\'re being so good and yet I can\'t help being so bad %Grin%");
						found=true;
						break;
					}
			}
		}
		
	}
	DMessage("wantToBeAGoodBoy: endResponse");
	return;
}