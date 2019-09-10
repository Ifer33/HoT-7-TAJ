addResponseIndicator("god good", "god nice", "god incredible", "god amazing", "god awesome", "feels awesome", "so awesome", "feels good", "feels nice", "feels incredible", "feels amazing", "love the way you make me feel", "love the way this feels", "me feel good", "me feel nice", "me feel incredible", "me feel amazing", "so good", "so nice", "so amazing", "so fucking good", "so fucking amazing");
//run("allutils.js");

function feelsGoodResponse(message) {
    DMessage("feelsGood: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("feelsGood: EndResponse Response is Disabled");
        return false;
    }
	if(getVar("firstRun",false)) {
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 2);
			switch (thisRandom){
				case 1:
					CMessage("I'm sure it does feel pretty good in the beginning like this %Grin%");
					found = true;
					break;
				case 2:
					CMessage("Let's see how you feel at the end of time together %GeneralTime% %Grin%");
					found = true;
					break;
			}
		}
	}
	else if(getVar("chastityOn", false)){
		CMessage("It makes me feel even better keeping that %Cock% trapped in that tight little cage %Grin%");
	}
	else if(getVar("cbtCockActive", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 3);
			switch (thisRandom){
				case 1:
					if(getVar("AV_Short33",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short33.js");
						found = true;
					}
					break;
				case 2:
					CMessage("I guess pain on the outside of your %Cock% has to be a nice change of pace from all that ache <i>inside</i> %Lol%");
					found = true;
					break;
				case 3:
					CMessage("You truly are a masochist %Lol%");
					found = true;
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
					if(getVar("AV_Short33",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short33.js");
						found = true;
					}
					break;
				case 2:
					CMessage("That's just %Gonna% encourage me to be even rougher with those %Balls%");
					found = true;
					break;
				case 3:
					CMessage("Such a masochist %Grin%");
					found = true;
					break;
				case 4:
					CMessage("If you like having your balls abused so much, I'll be happy to keep dishing it out %EmoteHappy%");
					found = true;
					break;
			}
		}
	}
	else if(getVar("holdingedge", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 3);
			switch (thisRandom){
				case 1:
					CMessage("I want your %Cock% to feel incredible all right. Incredible ache %Grin%");
					found = true;
					break;
				case 2:
					CMessage("Keep riding this edge and I bet you'll stop feeling so good very quickly %Lol%");
					found = true;
					break;
				case 3:
					CMessage("Not as good as I feel keeping you right here at the very edge of pleasure");
					found = true;
					break;
			}
		}
	}
    else if (isEdging())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 7);
			switch (thisRandom){
				case 1:
					if(getVar("AV_Short32",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short32.js");
						found = true;
					}
					break;
				case 2:
					if(getVar("AV_Short33",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short33.js");
						found = true;
					}
					break;
				case 3:
					CMessage("Keep stroking %PetName%, maybe it will feel even better");
					found = true;
					break;
				case 4:
					CMessage("Then enjoy how good you feel... While you can %Grin%");
					found = true;
					break;
				case 5:
					CMessage("Good %PetName%. I want you to take all the pleasure you can from stroking for me");
					found = true;
					break;
				case 6:
					CMessage("Let's see how long it will take me to make that %Cock% feel <i>not</i> so good %Grin%");
					found = true;
					break;
				case 7:
					CMessage("Just remember, the better it feels the more it's %Gonna% make you ache when you have to stop %Grin%");
					found = true;
					break;
			}
		}
    }
    else if (isStrokingAll())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 4);
			switch (thisRandom){
				case 1:
					if(getVar("AV_Short32",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short32.js");
						found = true;
					}
					break;
				case 2:
					CMessage("Enjoy it while you can %PetName%, because the only thing you're %Gonna% feel when you start stroking again is ache %Grin%");
					found = true;
					break;
				case 3:
					CMessage("I have to admit, our time together makes me feel pretty incredible too");
					found = true;
					break;
				case 4:
					CMessage("Not as good as my %Pussy% feels when I think about you suffering for me %Grin%");
					found = true;
					break;
			}
		}
    }
    else {		//not stroking
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 4);
			switch (thisRandom){
				case 1:
					if(getVar("AV_Short32",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short32.js");
						found = true;
					}
					break;
				case 2:
					CMessage("Enjoy it while you can %PetName%, because the only thing you're %Gonna% feel when you start stroking again is ache %Grin%");
					found = true;
					break;
				case 3:
					CMessage("I have to admit, our time together makes me feel pretty incredible too");
					found = true;
					break;
				case 4:
					CMessage("Not as good as my %Pussy% feels when I think about you suffering for me %Grin%");
					found = true;
					break;
			}
		}
    }
    DMessage("feelsGood: EndResponse");
    return true;
}