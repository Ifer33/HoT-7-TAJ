addResponseIndicator("asldknasldkjalsjx;lkxzjc;kljzhnkl");
//run("allutils.js");

function aV_YesBadResponse(message) {
    /*No?
No?
No?
No? @MoodDown
%No%? @MoodDown
Aww...
%IDisagree%
Bad boy
%IDisagree% @MoodDown
Well, I dont care %Lol%
I dont care %Lol%
%OhNo%
Well, I dont care %Lol%
I dont care %Lol%
%OhNo% @MoodDown
%OhNo% 
Well, I dont care %Lol%
I dont care %Lol%
%OhNo%
Just %Surrender%, %SubName%
Just %Surrender%, %PetName%
Just %Surrender%, %PetName%  @MoodDown*/

    DMessage("aV_YesBad: BeginnningResponse");
	setVar("AV_YesNoRatio", getVar("AV_YesNoRatio",0)-1);
    let thisRandom = randomInt(1, 24);
	let found = false;

	while(!found){
		switch (thisRandom)
		{
			case 1:
				CMessage("Yes?");
				found=true;
				break;
			case 2:
				if(getVar("AV_WantCumQuest", false) && getVar("av_fetish_pain", false) ){
					CMessage("Yes?");
					setTempVar("av_YesWasBad",true);
					run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_PunishRND.js");
					found=true;
					break;
				}
			case 3:
				CMessage("Yes?");
				increaseAnger(3);
				found=true;
				break;
			case 4:
				CMessage("Yes?");
				found=true;
				break;
			case 5:
				increaseAnger(3);
				CMessage("Yes?");
				found=true;
				break;
			case 6:
				CMessage("Really?");
				found=true;
				break;
			case 7:
				increaseAnger(3);
				CMessage("Really?");
				found=true;
				break;
			case 8:
				CMessage("Aww...");
				found=true;
				break;
			case 9:
				increaseAnger(3);
				CMessage("Aww...");
				found=true;
				break;
			case 10:
				CMessage("%IDisagree%");
				found=true;
				break;
			case 11:
				CMessage("Aww...");
				found=true;
				break;
			case 12:
				CMessage("%IDisagree%");
				found=true;
				break;
			case 13:
				increaseAnger(3);
				CMessage("%IDisagree%");
				found=true;
				break;
			case 14:
				CMessage("Well, I dont care %Lol%");
				found=true;
				break;
			case 15:
				CMessage("I dont care %Lol%");
				found=true;
				break;
			case 16:
				CMessage("%OhNo%");
				found=true;
				break;
			case 17:
				CMessage("Well, I dont care %Lol%");
				found=true;
				break;
			case 18:
				CMessage("I dont care %Lol%");
				found=true;
				break;
			case 19:
				CMessage("%OhNo%");
				found=true;
				break;
			case 20:
				CMessage("Just %Surrender%, %SubName%");
				found=true;
				break;
			case 21:
				CMessage("Just %Surrender%, %PetName%");
				found=true;
				break;
			case 22:
				increaseAnger(3);
				CMessage("Just %Surrender%, %PetName%");
				found=true;
				break;
			case 23:
				increaseAnger(3);
				CMessage("I'm not sure if you deserve my attention.");
				found=true;
				break;
			case 24:
				if(getVar("AV_WantCumQuest", false) && getVar("av_fetish_pain", false) ){
					CMessage("Oh %PetName%");
					setTempVar("av_YesWasBad",true);
					run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "AV_PunishRND.js");
					found=true;
					break;
				}
		}
	}
	DMessage("aV_NoBad: EndResponse");
}