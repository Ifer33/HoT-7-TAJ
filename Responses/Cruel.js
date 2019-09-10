addResponseIndicator("you're so cruel", "your so cruel", "you are cruel", "cruel", "cruelty", "cruellest", "crueller");
//run("allutils.js");

function cruelResponse(message) {
    DMessage("cruel: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("cruel: EndResponse Response is Disabled");
        return false;
    }
	if(getVar("firstRun",false)) {
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 4);
			switch (thisRandom){
				case 1:
					CMessage("Give me time and I'll show you how cruel I can be %EmoteRandom%");
					found = true;
					break;
				case 2:
					CMessage("I'll take that as a compliment %EmoteRandom%");
					found = true;
					break;
				case 3:
					CMessage("You think this is cruel? I'm just warming up %EmoteRandom%");
					found = true;
					break;
				case 4:
					CMessage("Believe me %PetName%, you haven't even tasted cruelty yet %EmoteRandom%");
					found = true;
					break;
			}
		}
	}
	else if(getVar("cbtCockActive", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 3);
			switch (thisRandom){
				case 1:
					CMessage("That %Cock% belongs to me, so it doesn't matter how cruel I am to it %EmoteRandom%");
					found = true;
					break;
				case 2:
					CMessage("I thought being cruel to your %Cock% was the entire reason I'm here %EmoteRandom%");
					found = true;
					break;
				case 3:
					if (getMood() >= 70){
						CMessage("I thought being cruel to your %Cock% was the entire reason I'm here %EmoteRandom%");
						found = true;
					}
					break;
			}
		}
	}
	else if(getVar("cbtBallActive", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 4);
			switch (thisRandom){
				case 1:
					if(getVar("AV_Short31",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short31.js");
						found = true;
					}
					break;
				case 2:
					CMessage("You know you love it when I'm cruel to your %Balls% %EmoteRandom%");
					found = true;
					break;
				case 3:
					CMessage("You should have known how cruel I wanted to be to those %Balls% already %EmoteRandom% ");
					found = true;
					break;
				case 4:
					CMessage("You should have known how cruel I wanted to be to those %Balls% already %EmoteRandom% ");
					found = true;
					break;
			}
		}
	}
	else if(getVar("holdingedge", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 7);
			switch (thisRandom){
				case 1:
					CMessage("If I <i>really</i> want to be cruel, I don't have to let you stop %EmoteRandom%");
					found = true;
					break;
				case 2:
					CMessage("It may be cruel, but I just love keeping you right there so much %EmoteRandom%");
					found = true;
					break;
				case 3:
					CMessage("I don't care if it's cruel, stay right there on the edge for me %EmoteRandom%");
					found = true;
					break;
				case 4:
					if (getMood() >= 70){
						CMessage("I don't care if it's cruel, stay right there on the edge for me");
						found = true;
					}
					break;
				case 5:
					if(getVar("av_standing_position",false) ){
						CMessage("I can show you cruel, you will now get into the Standing Position until I say to stop edging");
						showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01.jpg");
						unlockImages();
						found = true;
					}
					break;
				case 6:
					if(getVar("av_submissive_position",false) ){
						CMessage("I can show you cruel, you will now get into the Submissive Position until I say to stop edging");
						showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04.jpg");
						unlockImages();
						found = true;
					}
					break;
				case 7:
					if(getVar("av_basic_position",false) ){
						CMessage("I can show you cruel, you will now get into the Basic Position until I say to stop edging");
						showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02.jpg");
						unlockImages();
						found = true;
					}
					break;
			}
		}
	}
    else if (isEdging())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 3);
			switch (thisRandom){
				case 1:
					CMessage("Get closer and I'll show you just how cruel I can be %EmoteRandom%");
					found = true;
					break;
				case 2:
					CMessage("I'm guessing this edge you're about to hit isn't going to change your opinion %EmoteRandom%");
					found = true;
					break;
				case 3:
					CMessage("Yeah? Get closer so I can live up to your opinion of me then %EmoteRandom%");
					found = true;
					break;
			}
		}
    }
    else if (isStrokingAll())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 16);
			switch (thisRandom){
				case 1:
					if(getVar("AV_Short31",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short31.js");
						found = true;
					}
					break;
				case 2:
					if(!getVar("AV_AskedSlow").addSecond(100).hasPassed()) {
						CMessage("Oh I can show you cruel if that's what you really want, %StrokeFaster%");
						speedUpStroking(3);
						found=true;
					}
					break;
				case 3:
					if(!getVar("AV_AskedSlow").addSecond(100).hasPassed()) {
						CMessage("I love being mean to that %Cock%, keep that speed");
						found=true;
					}
					break;
				case 4:
					if(!getVar("AV_AskedSlow").addSecond(100).hasPassed()) {
						CMessage("Your %Cock% belongs to me, so you will stroke to the speed I want...");
						found=true;
					}
					break;
				case 5:
					CMessage("I was born to be cruel to boys like you %EmoteRandom%");
					found = true;
					break;
				case 6:
					CMessage("You know you %Love% it when I'm cruel %EmoteRandom%");
					found = true;
					break;
				case 7:
					CMessage("Being cruel to you turns me on so much");
					found = true;
					break;
				case 8:
					CMessage("Oh I can show you cruel if that's what you really want %EmoteRandom%");
					found = true;
					break;
				case 9:
					CMessage("It only gets worse from here %PetName% %EmoteRandom%");
					found = true;
					break;
				case 10:
					CMessage("Being cruel to you turns me on so much  ");
					found = true;
					break;
				case 11:
					CMessage("A little cruelty never hurt anyone %EmoteRandom%");
					found = true;
					break;
				case 12:
					CMessage("There's no such thing as being too cruel when it comes to making that %Cock% ache %EmoteRandom%");
					found = true;
					break;
				case 13:
					CMessage("Maybe I <i>want</i> to be cruel %EmoteRandom%");
					found = true;
					break;
				case 14:
					if(getVar("av_standing_position",false) ){
						CMessage("I can show you cruel, you will now get into the Standing Position until I say to stop edging");
						showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01.jpg");
						unlockImages();
						found = true;
					}
					break;
				case 15:
					if(getVar("av_submissive_position",false) ){
						CMessage("I can show you cruel, you will now get into the Submissive Position until I say to stop edging");
						showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04.jpg");
						unlockImages();
						found = true;
					}
					break;
				case 16:
					if(getVar("av_basic_position",false) ){
						CMessage("I can show you cruel, you will now get into the Basic Position until I say to stop edging");
						showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02.jpg");
						unlockImages();
						found = true;
					}
					break;
			}
		}
    }
    else {		//not stroking
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 3);
			switch (thisRandom){
				case 1:
					if(getVar("AV_Short31",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short31.js");
						found = true;
					}
					break;
				case 2:
					CMessage("Poor %PetName%, you want to stroke so bad and I won't let you yet %EmoteRandom%");
					found = true;
					break;
				case 3:
					CMessage("I guess it <i>is</i> a little cruel to make you want something that's %Gonna% make you hurt so bad");
					found = true;
					break;
			}
		}
    }
    DMessage("cruel: EndResponse");
    return true;
}