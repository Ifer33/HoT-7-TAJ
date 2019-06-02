addResponseIndicator("asldknasldkjalsjxds;lkxzjc;kljzhnkl");
//run("allutils.js");

function aV_NoGoodResponse(message) {
	DMessage("aV_NoGood: BeginResponse");
	setVar("AV_YesNoRatio", getVar("AV_YesNoRatio",0)+1);

    let thisRandom = randomInt(1, 24);
	let found = false;
	
	while(!found){
		switch (thisRandom)
		{
			case 1:
			case 2:
			case 3:
				CMessage("%Good%");
				found=true;
				break;
			case 4:
				CMessage("%Good%");
				increaseAnger(-3);
				found=true;
				break;
			case 5:
				CMessage("%Good% Boy");
				found=true;
				break;
			case 6:
				CMessage("Good Boy");
				increaseAnger(-3);
				found=true;
				break;
			case 7:
				CMessage("%Good% Boy");
				found=true;
				break;
			case 8:
				CMessage("%GoodBoy%");
				increaseAnger(-3);
				found=true;
				break;
			case 9:
				if(getVar("AV_Know_17", false)){
					CMessage(getVar("AV_Persona09") );
					found=true;
					break;
				}
			case 10:
				if(getVar("AV_Know_17", false)){
					CMessage(getVar("AV_Persona09") );
					increaseAnger(-3);
					found=true;
					break;
				}
			case 11:
			case 12:
				if(getVar("AV_Know_17", false)){
					CMessage(getVar("AV_Persona09") );
					found=true;
					break;
				}
			case 13:
				if(getVar("AV_Know_17", false)){
					CMessage(getVar("AV_Persona09") );
					increaseAnger(-3);
					found=true;
					break;
				}
			case 14:
			case 15:
				CMessage("%ImPleased%");
				found=true;
				break;
			case 16:
			case 17:
				CMessage("%Lovingly%");
				found=true;
				break;
			case 18:
				increaseAnger(-3);
				CMessage("%Lovingly%");
				found=true;
				break;
			case 19:
			case 20:
				increaseAnger(-3);
				CMessage("%OfCourse%");
				found=true;
				break;
			case 21:
				CMessage("%OfCourse%");
				found=true;
				break;
			case 22:
				increaseAnger(-3);
				CMessage("Oh, that sounds like fun");
				found=true;
				break;
			case 23:
				increaseAnger(-3);
				CMessage("Tell me more");
				found=true;
				break;
			case 24:
				CMessage("You're naughty");
				found=true;
				break;
		}
	}
	DMessage("aV_YesGood: EndResponse");
}