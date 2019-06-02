addResponseIndicator("enjoying this", "having fun", "this is fun", "so much fun", "loving this", "i like this", "i love this", "i enjoy this");
//run("allutils.js");

function ark_Having_FunResponse(message) {
    DMessage("ark_Having_Fun: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("ark_Having_Fun: EndResponse Response is Disabled");
        return false;
    }
	if(getVar("firstRun",false)) {
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 10);
			switch (thisRandom){
				case 1:
					if (getMood() <= 30)
					{
						CMessage("Enjoy it while you can, %Name%");
						addStrokeTime(45);
						found = true;
					}
					break;
				case 2:
					if (getMood() <= 30)
					{
						CMessage("I guess I can let you stroke a little longer");
						addStrokeTime(45);
						found = true;
					}
					break;
				case 3:
					if (getMood() > 30 && getMood() < 70)
					{
						CMessage("Too bad all good things have to end...");
						found = true;
					}
					break;
				case 4:
					if (getMood() > 30 && getMood() < 70)
					{
						CMessage("I'm glad you're having fun, %Name% %Smile%");
						found = true;
					}
					break;
				case 5:
					if (getMood() >= 70)
					{
						CMessage("We can't have that, %PetName%, stop stroking");
						stopStroking();
						found = true;
					}
					break;
				case 6:
					if (getMood() >= 70)
					{
						CMessage("I don't want you to enjoy yourself too much, %PetName%, stop stroking");
						stopStroking();
						found = true;
					}
					break;
				case 7:
					CMessage("Mmmm, if you're enjoying this now %Petname% it's only going to get better... or worse %Grin%");
					found = true;
					break;
				case 8:
					CMessage("Am I getting you all %SubHorny% %PetName%? %EmoteRandom%");
					found = true;
					break;
				case 9:
					CMessage("Awww, I enjoy teasing and frustrating you too %PetName% %EmoteRandom%");
					found = true;
					break;
				case 10:
					CMessage("We'll see if you still like this so much later on.... %EmoteRandom%");
					found = true;
					break;
			}
		}
	}
	else if(getVar("chastityOn", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 2);
			switch (thisRandom){
				case 1:
					CMessage("If you're honest, isn't <i>not</i> stroking always more fun than stroking...");
					found = true;
					break;
				case 2:
					if (getVar("hasChastity"))
					{
						CMessage("Oh good, maybe I'll never let you out of your cage again %EmoteWink%");
						found = true;
					}
					break;
			}
		}
	}
	else if(getVar("cbtCockActive", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 9);
			switch (thisRandom){
				case 1:
					if(!getVar("AV_Short32",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short32.js");
						found = true;
					}
					break;
				case 2:
					CMessage("Me too! %Smile%");
					found = true;
					break;
				case 3:
					CMessage("I'm glad you like hurting your %Cock% as much as I do, %Name%");
					found = true;
					break;
				case 4:
					CMessage("You're weird %Laugh%");
					found = true;
					break;
				case 5:
					CMessage("You enjoy hurting your %Cock%? Wow, you really are a masochist aren't you %PetName% %EmoteRandom%");
					found = true;
					break;
				case 6:
					CMessage("Haha, you're such a naughty %PetName% %EmoteRandom%");
					found = true;
					break;
				case 7:
					CMessage("So kinky %PetName%. I'll have to really %Hurt% you then %EmoteRandom%");
					found = true;
					break;
				case 8:
					if (getMood() >= 70)
					{
						CMessage("I'm sure I can find some other way to make you suffer %Grin%");
						found = true;
					}
					break;
				case 9:
					setTempVar("AV_Mistress_promise",true);
					run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Mistress.js");//, promise)
					found = true;
					break
			}
		}
	}
	else if(getVar("cbtBallActive", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 10);
			switch (thisRandom){
				case 1:
					if(!getVar("AV_Short32",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short32.js");
						found = true;
					}
					break;
				case 2:
					CMessage("Me too! %Smile%");
					found = true;
					break;
				case 3:
					CMessage("I'm glad you like hurting your %Balls% as much as I do, %Name%");
					found = true;
					break;
				case 4:
					CMessage("That's pretty odd %EmoteRandom%");
					found = true;
					break;
				case 5:
					CMessage("You enjoy hurting your %Balls%? Wow, you really are a masochist aren't you %PetName% %EmoteRandom%");
					found = true;
					break;
				case 6:
					CMessage("You <i>like</i> this %PetName%?");
					found = true;
					break;
				case 7:
					CMessage("You're not meant to enjoy this bit %PetName%! %EmoteFlustered%");
					found = true;
					break;
				case 8:
					CMessage("So you're a little bit kinky are you %PetName%? %EmoteRandom%");
					found = true;
					break;
				case 9:
					CMessage("Mmmm, I do so love hurting you as well %PetName% %EmoteRandom%");
					found = true;
					break
				case 10:
					CMessage("So kinky %PetName%. I'll have to beat that pleasure out of you %EmoteRandom%");
					found = true;
					break;
			}
		}
	}
	else if(getVar("cbtActive", false)){
		
	}
	else if(getVar("holdingedge", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 6);
			switch (thisRandom){
				case 1:
					if (getMood() <= 30)
					{
						CMessage("Good, then you can hold it a while longer");
						addEdgeHoldTime();
						found = true;
					}
					break;
				case 2:
					if (getMood() <= 30)
					{
						CMessage("Stay right there on the edge, %Name%");
						addEdgeHoldTime();
						found = true;
					}
					break;
				case 3:
					CMessage("And it's good for you too %Smile%");
					found = true;
					break;
				case 4:
					CMessage("I want to make you hold that edge so much you're in absolute agony %EmoteRandom%");
					found = true;
					break;
				case 5:
					CMessage("Mmmm, keep holding that edge %PetName%. Make that %Cock% ache");
					found = true;
					break;
				case 6:
					CMessage("Holding the edge is kinda fun, huh %PetName%? Until the ache to release becomes unbearable %EmoteRandom%");
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
					CMessage("It's going to be even more fun when you hit the edge, %Name% %Laugh%");
					found = true;
					break;
				case 2:
					CMessage("Then clearly I haven't edged you enough %PetName%. Edge for me!");
					found = true;
					break;
				case 3:
					CMessage("We'll see if you still like it if I make you hold or even ruin it later... %EmoteRandom%");
					found = true;
					break;
				case 4:
					CMessage("I love watching you edge %PetName%, it gets me so %DomHorny%");
					found = true;
					break;
				case 5:
					CMessage("Edge for me, mmmm....");
					found = true;
					break;
				case 6:
					CMessage("Then edge for me %PetName% %EmoteRandom%");
					found = true;
					break;
			}
		}
    }
    else if (isStroking())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 19);
			switch (thisRandom){
				case 1:
					if(!getVar("AV_Short32",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short32.js");
						found = true;
					}
					break;
				case 2:
					if(!getVar("AV_Short33",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short33.js");
						found = true;
					}
					break;
				case 3:
					if (getMood() <= 30)
					{
						CMessage("Enjoy it while you can, %Name%");
						addStrokeTime(45);
						found = true;
					}
					break;
				case 4:
					if (getMood() <= 30)
					{
						CMessage("I guess I can let you stroke a little longer");
						addStrokeTime(45);
						found = true;
					}
					break;
				case 5:
					if (getMood() > 30 && getMood() < 70)
					{
						CMessage("Too bad all good things have to end...");
						found = true;
					}
					break;
				case 6:
					if (getMood() > 30 && getMood() < 70)
					{
						CMessage("I'm glad you're having fun, %Name% %Smile%");
						found = true;
					}
					break;
				case 7:
					if (getMood() >= 70)
					{
						CMessage("We can't have that, %PetName%, stop stroking");
						stopStroking();
						found = true;
					}
					break;
				case 8:
					if (getMood() >= 70)
					{
						CMessage("I don't want you to enjoy yourself too much, %PetName%, stop stroking");
						stopStroking();
						found = true;
					}
					break;
				case 9:
					CMessage("Mmmm, I do so love watching you stroke %PetName%");
					found = true;
					break;
				case 10:
					CMessage("If you're still enjoying this clearly I need to make you stroke more... <i>much</i> more %EmoteRandom%");
					found = true;
					break;
				case 11:
					CMessage("But I want you to <i>suffer</i> %PetName%. And don't worry, you will... %EmoteRandom%");
					found = true;
					break;
				case 12:
					CMessage("This is nice isn't it? My little %PetName%, doing <i>whatever</i> I want.... %Grin%");
					found = true;
					break;
				case 13:
					CMessage("Keep going, we're going to make that %Cock% <i>ache</i> %PetName% %EmoteRandom%");
					found = true;
					break;
				case 14:
					CMessage("I enjoy making you stroke that %Cock% so much too %EmoteRandom%");
					found = true;
					break;
				case 15:
					CMessage("You're just a little stroker slut aren't you %PetName%? %EmoteRandom%");
					found = true;
					break;
				case 16:
					CMessage("Stroke that %Cock% %PetName% %EmoteRandom%");
					found = true;
					break;
				case 17:
					CMessage("Keep going... I love getting you all %SubHorny% %EmoteRandomKeep% going... I love getting you all %SubHorny% %EmoteRandom%");
					found = true;
					break;
				case 18:
					if (getMood() >= 70)
					{
						CMessage("I know you like it now, but it's going to get so, <i>so</i> frustrating %PetName%. ");
						found = true;
					}
					break;
				case 19:
					setTempVar("AV_Mistress_promise",true);
					run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Mistress.js");//, promise)
					found=true;
					break;
			}
		}
    }
    else {		//not stroking
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 9);
			switch (thisRandom){
				case 1:
					if(!getVar("AV_Short32",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short32.js");
						found = true;
					}
					break;
				case 2:
					if(!getVar("AV_Short33",false) ){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short33.js");
						found = true;
					}
					break;
				case 3:
					if (getMood() <= 30)
					{
						CMessage("I'm glad to hear that, %Name% %Smile%");
						addStrokeTime(45);
						found = true;
					}
					break;
				case 4:
					if (getMood() > 30 && getMood() < 70)
					{
						CMessage("Okay, good %EmoteRandom%");
						found = true;
					}
					break;
				case 5:
					if (getMood() >= 70)
					{
						CMessage("Whatever, %PetName%");
						stopStroking();
						found = true;
					}
					break;
				case 6:
					CMessage("You like it even when I don't let you stroke? I'll have to tease you more %PetName% %EmoteRandom%");
					found = true;
					break;
				case 7:
					CMessage("I'm having fun too %PetName%, and that's what really matters %EmoteRandom%");
					found = true;
					break;
				case 8:
					CMessage("We'll see if you still like this when I've made you edge <i>over</i> and <i>over</i>.. %EmoteRandom%");
					found = true;
					break;
				case 9:
					CMessage("I'm sure this can be fun for both of us, as long as you stay on my good side %Grin%");
					found = true;
					break;
			}
		}
    }
    DMessage("ark_Having_Fun: EndResponse");
    return true;
}