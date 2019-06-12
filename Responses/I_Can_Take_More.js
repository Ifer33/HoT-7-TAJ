addResponseIndicator("make me ache", "want to ache", "want you to make me ache", "hurt me more", "make me suffer more", "be mean to be me", "be cruel to me", "be even more mean to me", "be even meaner to me", "be even more cruel to me", "want to suffer", "need to suffer", "can I suffer", "make me suffer");
//run("allutils.js");

function i_Can_Take_MoreResponse(message) {
    DMessage("i_Can_Take_More: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("i_Can_Take_More: EndResponse Response is Disabled");
        return false;
    }
	if(getVar("firstRun",false)) {
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 15);
			switch (thisRandom){
				case 1:
					CMessage("You will, %Name%, you will %Smile%");
					found = true;
					break;
				case 2:
					CMessage("That\'s what I like about you, always willing to suffer for me %EmoteHappy%");
					found = true;
					break;
				case 3:
					CMessage("I don\'t know, we still have a ways to go yet %Lol%");
					found = true;
					break;
				case 4:
					CMessage("Oh trust me %PetName%, I am just getting warmed up");
					found = true;
					break;
				case 5:
					CMessage("If that\'s what you really want %Grin%");
					changeDommeLevel(2);
					found = true;
					break;
				case 6:
					CMessage("If that\'s what you really want %Grin%");
					setTempVar("av_fetish_rough", true);
					found = true;
					break;
				case 7:
					CMessage("Oh you have no idea what you just got yourself into %GeneralTime% %Grin%");
					changeDommeLevel(2);
					found = true;
					break;
				case 8:
					CMessage("You\'ll be sorry you said that %PetName%");
					changeDommeLevel(2);
					found = true;
					break;
				case 9:
					CMessage("Let me guess, you want me to be more like this %Grin%");
					showTaggedImage(4, ["captions"]);
					found = true;
					break;
				case 10:
					CMessage("Careful what you wish for %PetName%");
					changeDommeLevel(2);
					found = true;
					break;
				case 11:
					CMessage("Then maybe you should start stroking faster");
					speedUpStroking();
					found = true;
					break;
				case 12:
					CMessage("Then maybe we should start you off with faster strokes %Grin%");
					speedUpStroking();
					found = true;
					break;
				case 13:
					CMessage("That can be arranged %PetName%. Start stroking faster");
					speedUpStroking();
					found = true;
					break;
				case 14:
					CMessage("Challenge accepted %PetName%. Start stroking faster");
					speedUpStroking();
					found = true;
					break;
				case 15:
					CMessage("You asked for, start stroking faster.");
					speedUpStroking();
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
					CMessage("We\'ll see %PetName%. Who knows when I\'ll actually let you out of that cage %Lol%");
					found = true;
					break;
				case 2:
					CMessage("I want you to suffer too, %Name% %Laugh%");
					found = true;
					break;
			}
		}
	}
	else if(getVar("cbtCockActive", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 4);
			switch (thisRandom){
				case 1:
					CMessage("Good %Smile%");
					found = true;
					break;
				case 2:
					CMessage("Oh trust me %PetName%, that %Cock% hasn't even <i>begun</i> to suffer %Grin%");
					found = true;
					break;
				case 3:
					CMessage("If you\'re not more careful with that %Cock%, some wicked girl is %Gonna% break that thing %Grin%");
					found = true;
					break;
				case 4:
					CMessage("You really think that %Cock% is tough enough to take me at my worst? %Grin%");
					found = true;
					break;
			}
		}
	}
	else if(getVar("cbtBallActive", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 5);
			switch (thisRandom){
				case 1:
					CMessage("Good %Smile%");
					found = true;
					break;
				case 2:
					CMessage("Then I won\'t have to feel bad about bruising those %Balls% up, will I? %Grin%");
					found = true;
					break;
				case 3:
					CMessage("Very brave words when you\'re %Balls% are on the line %PetName% %Grin%");
					found = true;
					break;
				case 4:
					CMessage("What did those %Balls% ever do to you to put them in the line of fire like that? %Grin%");
					found = true;
					break;
				case 5:
					CMessage("If that\'s what you really want %Grin%");
					setTempVar("av_fetish_rough", true);
					found = true;
					break;
			}
		}
	}
	else if(getVar("holdingedge", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 12);
			switch (thisRandom){
				case 1:
					CMessage("If you're not careful %PetName%, I'm %Gonna% make you <i>live</i> on the edge %Lol%");
					found = true;
					break;
				case 2:
					CMessage("I might just give you every bit of suffering you\'re asking for one this very edge %Grin%");
					found = true;
					break;
				case 3:
					CMessage("Then stroke a little faster, but you stay right there on the fucking edge");
					found = true;
					break;
				case 4:
					CMessage("Squeeze that %Cock% tighter, make this edge fucking impossible to endure %Grin%");
					found = true;
					break;
				case 5:
					CMessage("Then you just stay as close as you possibly fucking can for as long as I want");
					found = true;
					break;
				case 6:
					CMessage("Like showing you something like this when you're <i>so</i> close? %Grin%");
					getTeasePicture();
					found = true;
					break;
				case 7:
					if(getVar("av_standing_position", false))
					{
						CMessage("You will now get into the Standing Position until I say to stop edging");
						getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01.jpg");
						found = true;
					}
					break;
				case 8:
					if(getVar("av_submissive_position", false))
					{
						CMessage("You will now get into the Submissive Position until I say to stop edging");
						getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04.jpg");
						found = true;
					}
					break;
				case 9:
					if(getVar("av_basic_position", false))
					{
						CMessage("You will now get into the Basic Position until I say to stop edging");
						getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02.jpg");
						found = true;
					}
					break;
				case 10:
					CMessage("If that\'s what you really want %Grin%");
					setTempVar("av_fetish_rough", true);
					found = true;
					break;
				case 11:
					CMessage("That can be arranged %Grin%");
					addEdgeHoldTime();
					found = true;
					break;
				case 12:
					CMessage("I suppose I can make you suffer this edge a little longer %Smile%");
					addEdgeHoldTime();
					found = true;
					break;
			}
		}
	}
    else if (isEdging())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 12);
			switch (thisRandom){
				case 1:
					CMessage("Shouldn\'t you be more worried about getting close for me? %EmoteFlustered%");
					found = true;
					break;
				case 2:
					CMessage("Big words for a guy stroking to an edge he doesn\'t get to cross %Grin%");
					found = true;
					break;
				case 3:
					CMessage("Let\'s see if you feel that way when you\'re close");
					found = true;
					break;
				case 4:
					CMessage("Oh you better pray I don\'t make you hold it now %Lol%");
					changeDommeLevel(2);
					found = true;
					break;
				case 5:
					CMessage("Big words %PetName%. I'm looking forward to making you <i>beg</i> me to let you take them back %Grin%");
					changeApathyLevel(2);
					found = true;
					break;
				case 6:
					CMessage("Oh you better pray I don\'t make you hold it now %Lol%");
					changeApathyLevel(2);
					found = true;
					break;
				case 7:
					CMessage("Big words %PetName%. I'm looking forward to making you <i>beg</i> me to let you take them back %Grin%");
					changeDommeLevel(2);
					found = true;
					break;
				case 8:
					CMessage("We\'ll see about that %EmoteHappy%");
					changeDommeLevel(2);
					found = true;
					break;
				case 9:
					CMessage("We\'ll see about that %EmoteHappy%");
					run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_Kneel_Short.js");
					found = true;
					break;
				case 10:
					CMessage("If that\'s what you really want %Grin%");
					setTempVar("av_fetish_rough", true);
					found = true;
					break;
				case 11:
					CMessage("Then suffer this edge for me %Name%");
					found = true;
					break;
				case 12:
					CMessage("Maybe I\'ll make you hold this edge then...");
					found = true;
					break;
			}
		}
    }
    else if (isStrokingAll())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 29);
			switch (thisRandom){
				case 1:
					if(getVar("av_fetish_pegging", false))
					{
						CMessage("%Yes% and I will make good use of you now.");
						run("Interrupt" + java.io.File.separator + "AV_Pegging.js");
						found = true;
					}
					break;
				case 2:
					if(getVar("av_fetish_pain", false))
					{
						CMessage("%Yes% and I will make good use of you now.");
						run("Interrupt" + java.io.File.separator + "AV_Pain.js");
						found = true;
					}
					break;
				case 3:
					if(getVar("av_fetish_foot", false))
					{
						CMessage("%Yes% and I will make good use of you now.");
						run("Interrupt" + java.io.File.separator + "AV_Feet.js");
						found = true;
					}
					break;
				case 4:
					if(getVar("av_fetish_rough", false))
					{
						CMessage("%Yes% and I will make good use of you now.");
						run("Interrupt" + java.io.File.separator + "AV_Rough.js");
						found = true;
					}
					break;
				case 5:
					if(getVar("av_fetish_hothax", false))
					{
						CMessage("%Yes% and I will make good use of you now.");
						run("Interrupt" + java.io.File.separator + "AV_Wax.js");
						found = true;
					}
					break;
				case 6:
					if(getVar("av_fetish_titjob", false))
					{
						CMessage("%Yes% and I will make good use of you now.");
						run("Interrupt" + java.io.File.separator + "AV_Titjob.js");
						found = true;
					}
					break;
				case 7:
					if(getVar("av_fetish_cei", false))
					{
						CMessage("%Yes% and I will make good use of you now.");
						run("Interrupt" + java.io.File.separator + "AV_CEI.js");
						found = true;
					}
					break;
				case 8:
					if (getMood() >= 70)
					{
						CMessage("Is that what I heard slave?");
						setTempVar("AV_Mistress_promise",true);
						run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Mistress.js"); //, promise)
						found = true;
					}
					break;
				case 9:
					CMessage("That can be arranged %PetName%.");
					setTempVar("av_fetish_rough", true);
					found = true;
					break;
				case 10:
					CMessage("That can be arranged %PetName%. Start stroking faster");
					speedUpStroking();
					found = true;
					break;
				case 11:
					CMessage("Challenge accepted %PetName%. Start stroking faster");
					speedUpStroking();
					found = true;
					break;
				case 12:
					CMessage("You asked for, start stroking faster.");
					speedUpStroking();
					found = true;
					break;
				case 13:
					CMessage("If that\'s what you really want %Grin%");
					changeDommeLevel(2);
					found = true;
					break;
				case 14:
					CMessage("If that\'s what you really want");
					run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_Kneel_Short.js");
					found = true;
					break;
				case 15:
					CMessage("You\'ll be sorry you said that %PetName%");
					changeDommeLevel(2);
					found = true;
					break;
				case 16:
					CMessage("If that\'s what you really want %Grin%");
					changeApathyLevel(2);
					found = true;
					break;
				case 17:
					CMessage("You\'ll be sorry you said that %PetName%");
					changeApathyLevel(2);
					found = true;
					break;
				case 18:
					CMessage("If that\'s what you want, I don\'t mind being a little meaner for now %Grin%");
					changeApathyLevel(2);
					found = true;
					break;
				case 19:
					CMessage("If that\'s what you want, I don\'t mind being a little meaner for now %Grin%");
					changeDommeLevel(2);
					found = true;
					break;
				case 20:
					CMessage("Can you take having to stroke to pictures like this? %Grin%");
					getTeasePicture();
					found = true;
					break;
				case 21:
					CMessage("I bet stroking to this will probably weaken your desire to suffer a little %Grin%");
					getTeasePicture();
					found = true;
					break;
				case 22:
					CMessage("Careful with that kind of talk, you cold end up like this poor guy %Lol%");
					showTaggedImage(4, ["femdom"]);
					found = true;
					break;
				case 23:
					CMessage("In that case, keep stroking while you imagine feeling your %Cock% in her mouth");
					showTaggedImage(4, ["blowjob"]);
					found = true;
					break;
				case 24:
					CMessage("You mean like me making you stroke while looking at an ass like this? %Grin%");
					showTaggedImage(4, ["ass"]);
					found = true;
					break;
				case 25:
					CMessage("I bet these %Boobs% are nice enough to make it harder on you %Lol%");
					showTaggedImage(4, ["boobs"]);
					found = true;
					break;
				case 26:
					if(getVar("av_standing_position", false))
					{
						CMessage("You will now get into the Standing Position until I say to stop %Stroking%");
						getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01.jpg");
						found = true;
					}
					break;
				case 27:
					if(getVar("av_submissive_position", false))
					{
						CMessage("You will now get into the Submissive Position until I say to stop %Stroking%");
						getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04.jpg");
						found = true;
					}
					break;
				case 28:
					if(getVar("av_basic_position", false))
					{
						CMessage("You will now get into the Basic Position until I say to stop %Stroking%");
						getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02.jpg");
						found = true;
					}
					break;
				case 29:
					CMessage("You can do that by stroking as slow as you can right now");
					slowStroking(5);
					found = true;
					break;
			}
		}
    }
    else {		//not stroking
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 7);
			switch (thisRandom){
				case 1:
					CMessage("You might just be sorry you said that when you start stroking again %Grin%");
					changeDommeLevel(2);
					found = true;
					break;
				case 2:
					CMessage("If you can take it, I\'ll start dishing it out %PetName% %Grin%");
					changeDommeLevel(2);
					found = true;
					break;
				case 3:
					CMessage("Challenge accepted %EmoteHappy%");
					changeDommeLevel(2);
					found = true;
					break;
				case 4:
					CMessage("You\'ll be sorry %Lol%");
					changeDommeLevel(2);
					found = true;
					break;
				case 5:
					CMessage("You\'ll be sorry %Lol%");
					setTempVar("av_fetish_rough", true);
					found = true;
					break;
				case 6:
					CMessage("You\'ll be sorry %Lol%");
					run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_Kneel_Short.js");
					found = true;
					break;
				case 7:
					CMessage("That\'s what I like about you, always willing to suffer for me %EmoteHappy%");
					found = true;
					break;
			}
		}
    }
    DMessage("i_Can_Take_More: EndResponse");
    return true;
}