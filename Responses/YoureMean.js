addResponseIndicator("you're mean", "your mean", "that's mean", "this is mean", "you're wicked", "your wicked", "that's wicked", "this is wicked", "you're bad", "your bad", "that's bad", "this is bad", "you're harsh", "your harsh", "that's harsh", "this is harsh", "you're rough", "your rough", "that's rough", "this is rough", "you're cruel", "your cruel", "that's cruel", "this is cruel", "you're evil", "your evil", "that's evil", "this is evil");
//run("allutils.js");

function youreMeanResponse(message) {
    DMessage("youreMean: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("youreMean: EndResponse Response is Disabled");
        return false;
    }
	if(getVar("firstRun",false)) {
		switch (randomInt(1, 3)){
			case 1:
				CMessage("You think <i>this</i> is mean? I'm just getting started %EmoteRandom%");
				break;
			case 2:
				CMessage("%OResponse1%");
				break;
			case 3:
				CMessage("%0_Response_Mean%");
				break;
		}
	}
	else if(getVar("cbtActive", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 5);
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
					CMessage("I love being mean to your %Cock% %EmoteRandom%");
					found = true;
					break;
				case 4:
					CMessage("%0_Response_Mean%");
					found = true;
					break;
				case 5:
					CMessage("You know you love it %PetName% %EmoteRandom%");
					found = true;
					break;
			}
		}
	}
	else if(getVar("holdingedge", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 5);
			switch (thisRandom){
				case 1:
					CMessage("%OResponse1%");
					found = true;
					break;
				case 2:
					CMessage("%0_Response_Mean%");
					found = true;
					break;
				case 3:
					CMessage("Call me whatever you want, just don't dare leave that edge %EmoteRandom%");
					found = true;
					break;
				case 4:
					CMessage("Stay right there and I'll <i>show</i> you mean %EmoteRandom%");
					found = true;
					break;
				case 5:
					CMessage("I don't care if it's mean, stay right there on the edge for me %EmoteRandom%");
					found = true;
					break;
			}
		}
	}
    else if (isEdging())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 6);
			switch (thisRandom){
				case 1:
					CMessage("%OResponse1%");
					found = true;
					break;
				case 2:
					CMessage("%0_Response_Mean%");
					found = true;
					break;
				case 3:
					CMessage("Get closer and I'll show you just how mean I can be %EmoteRandom%");
					found = true;
					break;
				case 4:
					CMessage("You sure you want to say that while you're getting close for me? %EmoteRandom%");
					found = true;
					break;
				case 5:
					CMessage("You sure you want to say that while you're getting close for me? %EmoteRandom%");
					run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_Kneel_Short.js");
					found = true;
					break;
				case 6:
					CMessage("I love being mean to that %Cock%, so get closer for me %EmoteRandom%");
					found = true;
					break;
			}
		}
    }
    else if (isStrokingAll())
    {
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
    else {		//not stroking
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 6);
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
					CMessage("I'm not mean. I'm protecting you from all the ache you would feel if you were stroking right now %EmoteRandom%");
					found = true;
					break;
				case 5:
					CMessage("I hope I'm not too much for you to handle %EmoteRandom%");
					found = true;
					break;
				case 6:
					CMessage("Get used to it %EmoteRandom%");
					found = true;
					break;
			}
		}
    }
    DMessage("youreMean: EndResponse");
    return true;
}