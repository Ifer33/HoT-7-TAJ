addResponseIndicator("will do anything", "would do anything", "could do anything", "i'd do anything", "i'll do anything", "will do everything", "would do everything", "could do everything", "i'd do everything", "i'll do everything", "will give anything", "would give anything", "could give anything", "i'd give anything", "i'll give anything", "will give everything", "would give everything", "could give everything", "i'd give everything", "i'll give everything", "will do whatever", "would do whatever", "could do whatever", "i'd do whatever", "i'll do whatever", "will give whatever", "would give whatever", "could give whatever", "i'd give whatever", "i'll give whatever", "anything you want", "everything you want", "whatever you want", "will do all", "would do all", "could do all", "i'd do all", "i'll do all", "will give all", "would give all", "could give all", "i'd give all", "i'll give all", "anything you say", "everything you say", "whatever you say", "anything you need", "everything you need", "whatever you need", "anything you tell", "everything you tell", "whatever you tell", "anything you ask", "everything you ask", "whatever you ask", "anything to please", "everything to please", "whatever to please", "all that you want", "all that you need", "all that you ask");
//run("allutils.js");

function i_Will_Do_AnythingResponse(message) {
    DMessage("i_Will_do_Anything: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("i_Will_do_Anything: EndResponse Response is Disabled");
        return false;
    }
	if(getVar("firstRun",false)) {
		let found = false;
		while(!found){
			let thisRandom = randomInt(1,14);
			switch (thisRandom){
				case 1:
					CMessage("Anything? Hmmm...");
					found = true;
					break;
				case 2:
					CMessage("I expect nothing less from my %PetName%");
					found = true;
					break;
				case 3:
					CMessage("I\'m glad to hear that, %PetName%. I will keep that in mind %GeneralTime% %Grin%");
					found = true;
					break;
				case 4:
					CMessage("That\'s sweet of you to say, %PetName%. Are you sure you can handle what I have in mind, though? %Grin%");
					found = true;
					break;
				case 5:
					CMessage("Easier said than done, %PetName%, but I %Love% your enthusiasm %Grin%");
					found = true;
					break;
				case 6:
					CMessage("Be careful what you promise, %SubName%. You have no idea what I have planned for you %Grin%");
					found = true;
					break;
				case 7:
					CMessage("Tell me how badly you want to cum, and I will consider it");
					found = true;
					break;
				case 8:
					CMessage("See, %FYI%, when you promise me everything, I fully intend to take it %Grin%");
					found = true;
					break;
				case 9:
					CMessage("You don't understand, %PetName%. I already intend to take <i>more</i> than you ever knew you could give. %DoAsISay%");
					found = true;
					break;
				case 10:
					CMessage("So you\'re saying it\'s %Okay% if I edge you over and over again continuously, without any breaks, for the next %TwoToFour% hours, then spend the next %TwoToFour% hours ruining you over and over again? Are you sure..? %Grin%");
					found = true;
					break;
				case 11:
					CMessage("So you\'re saying it\'s %Okay% if I keep you %Writhing% %NearTheEdge% continuously, without any breaks, for the next %TwoToFour% hours? Are you sure..? %Grin%");
					found = true;
					break;
				case 12:
					CMessage("The only thing you need to do is give me absolutely everything you have to give. That\'s all I ask! %Grin%");
					found = true;
					break;
				case 13:
					CMessage("Would you still make such a bold promise if I was there in the room with you, right now? %Grin%");
					found = true;
					break;
				case 14:
					CMessage("%Grin% Let\'s put that promise to the test");
					found = true;
					break;
			}
		}
	}
	else if(getVar("chastityOn", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 15);
			switch (thisRandom){
				case 1:
					CMessage("Anything? Hmmm...");
					found = true;
					break;
				case 2:
					CMessage("I expect nothing less from my %PetName%");
					found = true;
					break;
				case 3:
					CMessage("I\'m glad to hear that, %PetName%. I will keep that in mind %GeneralTime% %Grin%");
					found = true;
					break;
				case 4:
					CMessage("That\'s sweet of you to say, %PetName%. Are you sure you can handle what I have in mind, though? %Grin%");
					found = true;
					break;
				case 5:
					CMessage("Easier said than done, %PetName%, but I %Love% your enthusiasm %Grin%");
					found = true;
					break;
				case 6:
					CMessage("Be careful what you promise, %SubName%. You have no idea what I have planned for you %Grin%");
					found = true;
					break;
				case 7:
					CMessage("Tell me how badly you want to cum, and I will consider it");
					found = true;
					break;
				case 8:
					CMessage("See, %FYI%, when you promise me everything, I fully intend to take it %Grin%");
					found = true;
					break;
				case 9:
					CMessage("You don't understand, %PetName%. I already intend to take <i>more</i> than you ever knew you could give. %DoAsISay%");
					found = true;
					break;
				case 10:
					CMessage("So you\'re saying it\'s %Okay% if I edge you over and over again continuously, without any breaks, for the next %TwoToFour% hours, then spend the next %TwoToFour% hours ruining you over and over again? Are you sure..? %Grin%");
					found = true;
					break;
				case 11:
					CMessage("So you\'re saying it\'s %Okay% if I keep you %Writhing% %NearTheEdge% continuously, without any breaks, for the next %TwoToFour% hours? Are you sure..? %Grin%");
					found = true;
					break;
				case 12:
					CMessage("The only thing you need to do is give me absolutely everything you have to give. That\'s all I ask! %Grin%");
					found = true;
					break;
				case 13:
					CMessage("Would you still make such a bold promise if I was there in the room with you, right now? %Grin%");
					found = true;
					break;
				case 14:
					CMessage("%Grin% Let\'s put that promise to the test");
					found = true;
					break;
				case 15:
					CMessage("Is that what I heard slave? When desperate enough, you\'ll do whatever is needed?");
					found = true;
					break;
			}
		}
	}
	else if(getVar("cbtActive", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 18);
			switch (thisRandom){
				case 1:
					CMessage("Anything? Hmmm...");
					found = true;
					break;
				case 2:
					if(getVar("AV_DommeMistress", false))
					{
						CMessage("Anything? Hmmm...");
						run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "Kneel.js");
						found = true;
					}
				case 3:
					CMessage("I expect nothing less from my %PetName%");
					found = true;
					break;
				case 4:
					CMessage("I\'m glad to hear that, %PetName%. I will keep that in mind %GeneralTime% %Grin%");
					found = true;
					break;
				case 5:
					CMessage("That\'s sweet of you to say, %PetName%. Are you sure you can handle what I have in mind, though? %Grin%");
					found = true;
					break;
				case 6:
					CMessage("Easier said than done, %PetName%, but I %Love% your enthusiasm %Grin%");
					found = true;
					break;
				case 7:
					CMessage("Be careful what you promise, %SubName%. You have no idea what I have planned for you %Grin%");
					found = true;
					break;
				case 8:
					CMessage("Be careful what you promise, %SubName%. You have no idea what I have planned for you %Grin%");
					run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "Kneel.js");
					found = true;
					break;
				case 9:
					CMessage("Tell me how badly you want to cum, and I will consider it");
					found = true;
					break;
				case 10:
					CMessage("See, %FYI%, when you promise me everything, I fully intend to take it %Grin%");
					found = true;
					break;
				case 11:
					CMessage("See, %FYI%, when you promise me everything, I fully intend to take it %Grin%");
					run("Interrupt" + java.io.File.separator + "AV_Anything.js");
					found = true;
					break;
				case 12:
					CMessage("You don't understand, %PetName%. I already intend to take <i>more</i> than you ever knew you could give. %DoAsISay%");
					found = true;
					break;
				case 13:
					CMessage("So you\'re saying it\'s %Okay% if I edge you over and over again continuously, without any breaks, for the next %TwoToFour% hours, then spend the next %TwoToFour% hours ruining you over and over again? Are you sure..? %Grin%");
					found = true;
					break;
				case 14:
					CMessage("So you\'re saying it\'s %Okay% if I keep you %Writhing% %NearTheEdge% continuously, without any breaks, for the next %TwoToFour% hours? Are you sure..? %Grin%");
					found = true;
					break;
				case 15:
					CMessage("The only thing you need to do is give me absolutely everything you have to give. That\'s all I ask! %Grin%");
					found = true;
					break;
				case 16:
					CMessage("Would you still make such a bold promise if I was there in the room with you, right now? %Grin%");
					found = true;
					break;
				case 17:
					CMessage("%Grin% Let\'s put that promise to the test");
					found = true;
					break;
				case 18:
					CMessage("Is that what I heard slave? When desperate enough, you\'ll do whatever is needed?");
					found = true;
					break;
			}
		}
	}
	else if(getVar("holdingedge", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 23);
			switch (thisRandom){
				case 1:
					CMessage("Anything? Hmmm...");
					found = true;
					break;
				case 3:
					CMessage("I expect nothing less from my %PetName%");
					found = true;
					break;
				case 4:
					CMessage("I\'m glad to hear that, %PetName%. I will keep that in mind %GeneralTime% %Grin%");
					found = true;
					break;
				case 5:
					CMessage("That\'s sweet of you to say, %PetName%. Are you sure you can handle what I have in mind, though? %Grin%");
					found = true;
					break;
				case 6:
					CMessage("Easier said than done, %PetName%, but I %Love% your enthusiasm %Grin%");
					found = true;
					break;
				case 7:
					CMessage("Be careful what you promise, %SubName%. You have no idea what I have planned for you %Grin%");
					found = true;
					break;
				case 9:
					CMessage("Tell me how badly you want to cum, and I will consider it");
					found = true;
					break;
				case 10:
					CMessage("See, %FYI%, when you promise me everything, I fully intend to take it %Grin%");
					found = true;
					break;
				case 11:
					if(getVar("AV_DommeMistress", false))
					{
						CMessage("See, %FYI%, when you promise me everything, I fully intend to take it %Grin%");
						setTempVar("AV_Mistress_promise",true);
						run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Mistress.js"); //, promise)
						found = true;
					}
					break;
				case 12:
					CMessage("You don't understand, %PetName%. I already intend to take <i>more</i> than you ever knew you could give. %DoAsISay%");
					found = true;
					break;
				case 13:
					CMessage("So you\'re saying it\'s %Okay% if I edge you over and over again continuously, without any breaks, for the next %TwoToFour% hours, then spend the next %TwoToFour% hours ruining you over and over again? Are you sure..? %Grin%");
					found = true;
					break;
				case 14:
					CMessage("So you\'re saying it\'s %Okay% if I keep you %Writhing% %NearTheEdge% continuously, without any breaks, for the next %TwoToFour% hours? Are you sure..? %Grin%");
					found = true;
					break;
				case 15:
					CMessage("The only thing you need to do is give me absolutely everything you have to give. That\'s all I ask! %Grin%");
					found = true;
					break;
				case 16:
					CMessage("Would you still make such a bold promise if I was there in the room with you, right now? %Grin%");
					found = true;
					break;
				case 17:
					CMessage("%Grin% Let\'s put that promise to the test");
					run("Interrupt" + java.io.File.separator + "AV_Anything.js");
					found = true;
					break;
				case 18:
					CMessage("Mmm... I like the sound of that. Be more specific");
					CMessage("%Lol%, good luck with that, while holding this edge!",1);
					found = true;
					break;
				case 19:
					if(getVar("av_standing_position", false))
					{
						CMessage("You will now get into the Standing Position until I say to stop edging");
						showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01.jpg");
						found = true;
					}
					break;
				case 20:
					if(getVar("av_submissive_position", false))
					{
						CMessage("You will now get into the Submissive Position until I say to stop edging");
						showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04.jpg");
						found = true;
					}
					break;
				case 21:
					if(getVar("av_basic_position", false))
					{
						CMessage("You will now get into the Basic Position until I say to stop edging");
						showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02.jpg");
						found = true;
					}
					break;
				case 22:
					CMessage("Is that what I heard slave? When desperate enough, you\'ll do whatever is needed?");
					found = true;
					break;
				case 23:
					CMessage("Is that what I heard slave? When desperate enough, you\'ll do whatever is needed?");
					run("Interrupt" + java.io.File.separator + "AV_Anything.js");
					found = true;
					break;
			}
		}
	}
    else if (isEdging())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1,23);
			switch (thisRandom){
				case 1:
					CMessage("Anything? Hmmm...");
					found = true;
					break;
				case 2:
					CMessage("I expect nothing less from my %PetName%");
					found = true;
					break;
				case 3:
					CMessage("I\'m glad to hear that, %PetName%. I will keep that in mind %GeneralTime% %Grin%");
					found = true;
					break;
				case 4:
					CMessage("That\'s sweet of you to say, %PetName%. Are you sure you can handle what I have in mind, though? %Grin%");
					found = true;
					break;
				case 5:
					CMessage("Easier said than done, %PetName%, but I %Love% your enthusiasm %Grin%");
					found = true;
					break;
				case 6:
					CMessage("Be careful what you promise, %SubName%. You have no idea what I have planned for you %Grin%");
					found = true;
					break;
				case 7:
					CMessage("Tell me how badly you want to cum, and I will consider it");
					found = true;
					break;
				case 8:
					CMessage("See, %FYI%, when you promise me everything, I fully intend to take it %Grin%");
					found = true;
					break;
				case 9:
					CMessage("You don't understand, %PetName%. I already intend to take <i>more</i> than you ever knew you could give. %DoAsISay%");
					found = true;
					break;
				case 10:
					CMessage("So you\'re saying it\'s %Okay% if I edge you over and over again continuously, without any breaks, for the next %TwoToFour% hours, then spend the next %TwoToFour% hours ruining you over and over again? Are you sure..? %Grin%");
					found = true;
					break;
				case 11:
					CMessage("So you\'re saying it\'s %Okay% if I keep you %Writhing% %NearTheEdge% continuously, without any breaks, for the next %TwoToFour% hours? Are you sure..? %Grin%");
					found = true;
					break;
				case 12:
					CMessage("The only thing you need to do is give me absolutely everything you have to give. That\'s all I ask! %Grin%");
					found = true;
					break;
				case 13:
					CMessage("Would you still make such a bold promise if I was there in the room with you, right now? %Grin%");
					found = true;
					break;
				case 14:
					CMessage("%Grin% Let\'s put that promise to the test");
					run("Interrupt" + java.io.File.separator + "AV_Anything.js");
					found = true;
					break;
				case 15:
					if(!getVar("AV_DommeMistress", false))
					{
						CMessage("%Grin% Let\'s put that promise to the test");
						CMessage("%stopstroking%",0);
						stopStrokingAll();
						setTempVar("AV_Mistress_promise",true);
						run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Mistress.js"); //, promise)
						found = true;
					}
					break;
				case 16:
					if(getVar("AV_DommeMistress", false))
					{
						CMessage("Anything? Hmmm...");
						run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "Kneel.js");
						found = true;
					}
					break;
				case 17:
					if (getMood() >= 70)
					{
						CMessage("See, %FYI%, when you promise me everything, I fully intend to take it %Grin%");
						run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "Kneel.js");
						found = true;
					}
					break;
				case 18:
					CMessage("%ReachTheEdge% and we\'ll see");
					found = true;
					break;
				case 19:
					CMessage("%ReachTheEdge% and %DoAsISay%");
					found = true;
					break;
				case 20:
					CMessage("%ReachTheEdge% and we\'ll see");
					found = true;
					break;
				case 21:
					CMessage("%ReachTheEdge% and %DoAsISay%");
					found = true;
					break;
				case 22:
					CMessage("Is that what I heard slave? When desperate enough, you\'ll do whatever is needed?");
					found = true;
					break;
				case 23:
					CMessage("Is that what I heard slave? When desperate enough, you\'ll do whatever is needed?");
					run("Interrupt" + java.io.File.separator + "AV_Anything.js");
					found = true;
					break;
			}
		}
    }
    else if (isStrokingAll())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 30);
			switch (thisRandom){
				case 1:
					CMessage("Is that what I heard slave? When desperate enough, you\'ll do whatever is needed?");
					found = true;
					break;
				case 1:
					CMessage("Is that what I heard slave? When desperate enough, you\'ll do whatever is needed?");
					run("Interrupt" + java.io.File.separator + "AV_Anything.js");
					found = true;
					break;
				case 2:
					CMessage("Anything? Hmmm...");
					found = true;
					break;
				case 3:
					CMessage("I expect nothing less from my %PetName%");
					found = true;
					break;
				case 4:
					CMessage("I expect nothing less from my %PetName%");
					run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_Kneel_Short.js");
					found = true;
					break;
				case 5:
					CMessage("I\'m glad to hear that, %PetName%. I will keep that in mind %GeneralTime% %Grin%");
					found = true;
					break;
				case 6:
					CMessage("That\'s sweet of you to say, %PetName%. Are you sure you can handle what I have in mind, though? %Grin%");
					found = true;
					break;
				case 7:
					CMessage("Easier said than done, %PetName%, but I %Love% your enthusiasm %Grin%");
					found = true;
					break;
				case 8:
					CMessage("Be careful what you promise, %SubName%. You have no idea what I have planned for you %Grin%");
					found = true;
					break;
				case 9:
					CMessage("Be careful what you promise, %SubName%. You have no idea what I have planned for you %Grin%");
					run("Interrupt" + java.io.File.separator + "AV_Anything.js");
					found = true;
					break;
				case 10:
					if(!getVar("AV_DommeMistress", false))
					{
						CMessage("Be careful what you promise, %SubName%. You have no idea what I have planned for you %Grin%");
						setTempVar("AV_Mistress_promise",true);
						run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Mistress.js"); //, promise)
						found = true;
					}
					break;
				case 11:
					CMessage("Tell me how badly you want to cum, and I will consider it");
					found = true;
					break;
				case 12:
					CMessage("See, %FYI%, when you promise me everything, I fully intend to take it %Grin%");
					found = true;
					break;
				
				case 13:
					CMessage("See, %FYI%, when you promise me everything, I fully intend to take it %Grin%");
					run("Interrupt" + java.io.File.separator + "AV_Anything.js");
					found = true;
					break;
				case 14:
					CMessage("You don't understand, %PetName%. I already intend to take <i>more</i> than you ever knew you could give. %DoAsISay%");
					found = true;
					break;
				case 15:
					CMessage("So you\'re saying it\'s %Okay% if I edge you over and over again continuously, without any breaks, for the next %TwoToFour% hours, then spend the next %TwoToFour% hours ruining you over and over again? Are you sure..? %Grin%");
					found = true;
					break;
				case 16:
					CMessage("So you\'re saying it\'s %Okay% if I keep you %Writhing% %NearTheEdge% continuously, without any breaks, for the next %TwoToFour% hours? Are you sure..? %Grin%");
					found = true;
					break;
				case 17:
					CMessage("The only thing you need to do is give me absolutely everything you have to give. That\'s all I ask! %Grin%");
					found = true;
					break;
				case 18:
					CMessage("Would you still make such a bold promise if I was there in the room with you, right now? %Grin%");
					found = true;
					break;
				case 19:
					CMessage("%Grin% Let\'s put that promise to the test");
					run("Interrupt" + java.io.File.separator + "AV_Anything.js");
					found = true;
					break;
				case 20:
					CMessage("You\'ll do anything, huh? What if the only thing I want is for you to keep stroking? No edges. No orgasm. No breaks. Nothing but constant stroking for the next %TwoToFour% hours? %Grin%");
					found = true;
					break;
				case 21:
					CMessage("My needs are simple. Tell me how your %Cock% feels, right now");
					found = true;
					break;
				case 22:
					CMessage("...maybe if you ask me nicely, I will let you speed up, and then we\'ll see what happens %Grin%");
					found = true;
					break;
				case 23:
					CMessage("What if I want you to slow down and suffer? Could you bring yourself to ask me for that?");
					found = true;
					break;
				case 24:
					CMessage("...maybe if you ask me nicely, I will let you speed up, and then we\'ll see what happens %Grin%");
					found = true;
					break;
				case 25:
					CMessage("What if I want you to slow down and suffer? Could you bring yourself to ask me for that?");
					run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_Kneel_Short.js");
					found = true;
					break;
				case 26:
					if(getVar("av_standing_position", false))
					{
						CMessage("You will now get into the Standing Position until I say to stop %Stroking%");
						showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01.jpg");
						found = true;
					}
					break;
				case 27:
					if(getVar("av_submissive_position", false))
					{
						CMessage("You will now get into the Submissive Position until I say to stop %Stroking%");
						showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04.jpg");
						found = true;
					}
					break;
				case 28:
					if(getVar("av_basic_position", false))
					{
						CMessage("You will now get into the Basic Position until I say to stop %Stroking%");
						showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02.jpg");
						found = true;
					}
					break;
				case 29:
					if(getVar("AV_DommeMistress", false))
					{
						CMessage("That\'s sweet of you to say, %PetName%. Are you sure you can handle what I have in mind, though? %Grin%");
						run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "Kneel.js");
						found = true;
					}
					break;
				case 30:
					if (getMood() >= 70)
					{
						CMessage("Easier said than done, %PetName%");
						run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "Kneel.js");
						found = true;
					}
					break;
			}
		}
    }
    else {		//not stroking
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 23);
			switch (thisRandom){
				case 1:
					CMessage("Is that what I heard slave? When desperate enough, you\'ll do whatever is needed?");
					found = true;
					break;
				case 2:
					CMessage("Anything? Hmmm...");
					found = true;
					break;
				case 3:
					CMessage("I expect nothing less from my %PetName%");
					found = true;
					break;
				case 4:
					CMessage("I expect nothing less from my %PetName%");
					run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_Kneel_Short.js");
					found = true;
					break;
				case 5:
					CMessage("I\'m glad to hear that, %PetName%. I will keep that in mind %GeneralTime% %Grin%");
					found = true;
					break;
				case 6:
					CMessage("That\'s sweet of you to say, %PetName%. Are you sure you can handle what I have in mind, though? %Grin%");
					found = true;
					break;
				case 7:
					CMessage("Easier said than done, %PetName%, but I %Love% your enthusiasm %Grin%");
					found = true;
					break;
				case 8:
					CMessage("Be careful what you promise, %SubName%. You have no idea what I have planned for you %Grin%");
					found = true;
					break;
				case 9:
					CMessage("Be careful what you promise, %SubName%. You have no idea what I have planned for you %Grin%");
					found = true;
					break;
				case 10:
					CMessage("Tell me how badly you want to cum, and I will consider it");
					found = true;
					break;
				case 11:
					CMessage("See, %FYI%, when you promise me everything, I fully intend to take it %Grin%");
					found = true;
					break;
				case 12:
					if(!getVar("AV_DommeMistress", false))
					{
						CMessage("See, %FYI%, when you promise me everything, I fully intend to take it %Grin%");
						CMessage("%stopstroking%",0);
						stopStrokingAll();
						setTempVar("AV_Mistress_promise",true);
						run("Custom" + java.io.File.separator + "AV_Scripts" + java.io.File.separator + "AV_Mistress.js"); //, promise)
						found = true;
					}
					break;
				case 13:
					CMessage("See, %FYI%, when you promise me everything, I fully intend to take it %Grin%");
					found = true;
					break;
				case 14:
					CMessage("You don't understand, %PetName%. I already intend to take <i>more</i> than you ever knew you could give. %DoAsISay%");
					found = true;
					break;
				case 15:
					CMessage("So you\'re saying it\'s %Okay% if I edge you over and over again continuously, without any breaks, for the next %TwoToFour% hours, then spend the next %TwoToFour% hours ruining you over and over again? Are you sure..? %Grin%");
					found = true;
					break;
				case 16:
					CMessage("So you\'re saying it\'s %Okay% if I keep you %Writhing% %NearTheEdge% continuously, without any breaks, for the next %TwoToFour% hours? Are you sure..? %Grin%");
					found = true;
					break;
				case 17:
					CMessage("The only thing you need to do is give me absolutely everything you have to give. That\'s all I ask! %Grin%");
					found = true;
					break;
				case 18:
					CMessage("Would you still make such a bold promise if I was there in the room with you, right now? %Grin%");
					found = true;
					break;
				case 19:
					CMessage("%Grin% Let\'s put that promise to the test");
					found = true;
					break;
				case 20:
					CMessage("Mmm... I like the sound of that. Be more specific. Describe <i>exactly</i> what you're willing to do for me %Grin%");
					found = true;
					break;
				case 21:
					CMessage("Well if you ask nicely, I might let you stroke again, and we can take it from there... %Grin%");
					found = true;
					break;
				case 22:
					CMessage("Well if you ask nicely, I might let you stroke again, and we can take it from there... %Grin%");
					found = true;
					break;
				case 23:
					CMessage("Well if you ask nicely, I might let you stroke again, and we can take it from there... %Grin%");
					found = true;
					break;
			}
		}
    }
    DMessage("i_Will_do_Anything: EndResponse");
    return true;
}