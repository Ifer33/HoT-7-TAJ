addResponseIndicator("I am desperate", "I am despairing", "I am hopeless", "I am anguished", "I am distressed", "I am wretched", "I am desolate", "i'm desperate", "i'm going crazy", "i am going crazy", "I'm despairing", "I'm hopeless", "I'm anguished", "I'm distressed", "I'm wretched", "I'm desolate");
//run("allutils.js");

function aV_desperateResponse(message) {
    DMessage("aV_desperate: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("aV_desperate: EndResponse Response is Disabled");
        return false;
    }
	if(getVar("firstRun",false)) {
		CMessage(random("If you're desperate already, I'm about to have some <i>real</i> fun %EmoteLaugh%", "Not as bad as you're about to be %EmoteLaugh%"));
	}
	else if(getVar("chastityOn", false)){
		
	}
	else if(getVar("cbtCockActive", false)){
		
	}
	else if(getVar("cbtBallActive", false)){
		
	}
	else if(getVar("cbtActive", false)){
		
	}
	else if(getVar("holdingedge", false)){
		
	}
    else if (isEdging())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 4);
			switch (thisRandom){
				case 1:
					CMessage("That turns me on so much %EmoteRandom%");
					found = true;
					break;
				
			}
		}
    }
    else if (isStroking())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 11);
			switch (thisRandom){
				case 1:
					
					found = true;
					break;
			}
		}
    }
    else {		//not stroking
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 20);
			switch (thisRandom){
				case 1:
					if(!getVar("AV_Short31",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short31.js");
						found = true;
					}
					break;
				case 2:
					CMessage("%OResponse1%");
					found = true;
					break;
				case 3:
					CMessage("%0_Response_Mean%");
					found = true;
					break;
				case 4:
					CMessage("I was born to be mean to boys like you %EmoteRandom%");
					found = true;
					break;
				case 5:
					CMessage("You know you love it when I'm mean %EmoteRandom%");
					found = true;
					break;
				case 6:
					CMessage("Being mean to you turns me on so much");
					found = true;
					break;
				case 7:
					CMessage("Oh I can show you mean if that's what you really want %EmoteRandom%");
					found = true;
					break;
				case 8:
					CMessage("It only gets worse from here %PetName% %EmoteRandom%");
					found = true;
					break;
				case 9:
					CMessage("It only gets worse from here %PetName% %EmoteRandom%");
					run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_Kneel_Short.js");
					found = true;
					break;
				case 10:
					CMessage("There's no such thing as being too mean when it comes to making that %Cock% ache %EmoteRandom%");
					found = true;
					break;
				case 11:
					CMessage("Maybe I <i>want</i> to be mean %EmoteRandom%");
					found = true;
					break;
				case 12:
					CMessage("You have to be a little mean when you love cock teasing as much as I do %EmoteRandom%");
					found = true;
					break;
				case 13:
					CMessage("Making you suffer is mean? I think it's fun %EmoteRandom%");
					found = true;
					break;
				case 14:
					CMessage("It's not like I'm mean to <i>you</i>, just your %Cock% %EmoteRandom%");
					found = true;
					break;
				case 15:
					CMessage("Your %Cock% belongs to me, so I get to be as mean as I want %EmoteRandom%");
					found = true;
					break;
				case 16:
					if(!getVar("AV_AskedSlow").addSecond(100).hasPassed()) {
						CMessage("Your %Cock% belongs to me, so you will stroke to the speed I want...");
						found=true;
					}
					break;
				case 17:
					if(!getVar("AV_AskedSlow").addSecond(100).hasPassed()) {
						CMessage("I love being mean to that %Cock%, keep that speed");
						found=true;
					}
					break;
				case 18:
					if(!getVar("AV_AskedSlow").addSecond(100).hasPassed()) {
						CMessage("Yes, that is why I don't allow you to slow down...");
						found=true;
					}
					break;
				case 19:
					if(!getVar("AV_AskedSlow").addSecond(100).hasPassed()) {
						CMessage("Oh I can show you mean if that's what you really want, %StrokeFaster%");
						speedUpStroking(2);
						found=true;
					}
					break;
				case 20:
					CMessage("So call the police and tell them someone's being mean to you on the internet %EmoteRandom%");
					found = true;
					break;
			}
		}
    }
    DMessage("aV_desperate: EndResponse");
    return true;
}