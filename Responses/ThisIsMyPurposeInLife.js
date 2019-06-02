addResponseIndicator("is my purpose in life","purpose is to serve you","you give my life purpose");
//run("allutils.js");

function thisIsMyPurposeInLifeResponse(message) {
    DMessage("thisIsMyPurposeInLife: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("thisIsMyPurposeInLife: EndResponse Response is Disabled");
        return false;
    }
    else {		//not stroking
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 14);
			switch (thisRandom){
				case 1:
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short08.js");
					found = true;
					break;
				case 2:
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short09.js");
					found = true;
					break;
				case 3:
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short11.js");
					found = true;
					break;
				case 4:
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short12.js");
					found = true;
					break;
				case 5:
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short14.js");
					found = true;
					break;
				case 6:
					CMessage("%Yes%");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short26.js");//, av002)
					found = true;
					break;
				case 7:
					CMessage("Maybe you just say that because it\'s a bit difficult to think right now %Grin%");
					found = true;
					break;
				case 8:
					CMessage("At least you\'ve found a way to make yourself useful, %PetName% %Smile%");
					found = true;
					break;
				case 9:
					CMessage("Your purpose is to ache and suffer for me, %Name%");
					found = true;
					break;
				case 10:
					if (getMood() <= 30)
					{
						CMessage("You\'re doing a fine job fulfilling your purpose, %PetName% %Smile%");
						found = true;
					}
					break;
				case 11:
					if (getMood() >= 70)
					{
						CMessage("You\'re going to have to try harder to fulfil your purpose, %PetName%");
						found = true;
					}
					break;
				case 12:
					CMessage("You should be grateful, not everyone finds their purpose in life %Smile%");
					found = true;
					break;
				case 13:
					CMessage("I\'m sure you can think of some other purposes as well %Smile%");
					found = true;
					break;
				case 14:
					CMessage("I wouldn\'t say my only purpose is to make you suffer, %PetName%");
					CMessage("But I'm having a great time doing it anyway",1);
					found = true;
					break;
			}
		}
    }
    DMessage("thisIsMyPurposeInLife: EndResponse");
    return true;
}