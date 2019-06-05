function ballGagOnVocabulary()
{
	DMessage("BallGagOn: start");
	found=false;
	while(!found){
		switch(randomInteger(1,5) ){
			case 1:
				if(getVar("av_fetish_rough", false))
				{
					CMessage("Put your ball gag in your mouth. Get it nice and tight, really stuff that slut mouth of yours.");
					found=true;
				}
				break;
			case 2:
				CMessage("Place the gag in your mouth");
				found=true;
				break;
			case 3:
				CMessage("Put the gag in your mouth");
				found=true;
				break;
			case 4:
				CMessage("Put your ball gag in your mouth.");
				found=true;
				break;
			case 5:
				CMessage("Put your ball gag in your mouth. Get it nice and tight.");
				found=true;
				break;
		}
	}
	setTempVar("av_GagOn",true);
	sleep(30);
	DMessage("BallGagOn: end");
	return "<dontsend>";
}