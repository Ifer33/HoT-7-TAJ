addResponseIndicator("i am horny", "i'm horny", "i'm turned on", "i am turned on", "i'm desperate", "i am desperate", "im horny", "im so horny", "im getting horny", "getting so horny", "making me horny", "make me so horny", "im turned on", "im so turned on", "im worked up", "im so worked up", "im all worked up", "im aroused", "im so aroused", "i feel horny", "i feel so horny", "i feel so worked up", "you make me horny", "you make me so horny", "groan", "moan", "mmm", "oh god");
//run("allutils.js");

function GNMHornyResponse(message) {
    DMessage("gNMHorny: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("gNMHorny: EndResponse Response is Disabled");
        return false;
    }
	if(getVar("firstRun",false)) {
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 15);
			switch (thisRandom){
				case 1:
					if(getVar("pthevPlugged",false) ){
						CMessage("Hehe... is it also a little embarrassing to have your ass plugged up?");
						//@ResponseYes(ItsEmbarrassing)	Couldn't find the file
						found = true;
					}
					break;
				case 2:
					if(getVar("AV_SubKnees",false) ){
						CMessage("I'm getting pretty turned on myself, knowing you're on your knees for me...");
						found = true;
					}
					break;
				case 3:
					if(getVar("AV_Pins",false) ){
						CMessage("I love how the pain from the clothespins makes doesn't make you less horny, but actually more %EmoteHappy%");
						found = true;
					}
					break;
				case 4:
					if(getVar("AV_BallTied",false) ){
						CMessage("Good... I want those tied up balls to fill up like never before");
						found = true;
					}
					break;
				case 5:
					CMessage("You should be horny...");
					setTempVar("AV_MEM_Horny", true);
					found = true;
					break;
				case 6:
					CMessage("Maybe this will make it worse %Grin%");
					getTeasePicture(4);
					setTempVar("AV_MEM_Horny", true);
					found = true;
					break;
				case 7:
					CMessage("%Good% !");
					setTempVar("AV_MEM_Horny", true);
					found = true;
					break;
				case 8:
					CMessage("I love it when you're horny, now lets see what we can do to make it worse!");
					setTempVar("AV_MEM_Horny", true);
					found = true;
					break;
				case 9:
					CMessage("Pray i'm not turn you from horny to crying!");
					setTempVar("AV_MEM_Horny", true);
					found = true;
					break;
				case 10:
					CMessage("Are you all %SubHorny% <i>already</i>? Then this is going to be so, so good. For me %EmoteRandom%");
					found = true;
					break;
				case 11:
					CMessage("We're only just getting started, it'll get so, so much worse %EmoteRandom%");
					found = true;
					break;
				case 12:
					CMessage("I want to make you feel so frustrated %PetName% %EmoteRandom%");
					found = true;
					break;
				case 13:
					CMessage("Getting you all %SubHorny% is going to bring me so much pleasure %EmoteHappy%");
					found = true;
					break;
				case 14:
					CMessage("If you're all wound up already, do you think I will help you with that? Maybe I just want to make it worse.... %EmoteRandom%");
					found = true;
					break;
				case 15:
					CMessage("Are you all %SubHorny% <i>already</i>? Then this is going to be so, so good. For me %EmoteRandom%");
					found = true;
					break;
			}
		}
	}
	else if(getVar("chastityOn", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 14);
			switch (thisRandom){
				case 1:
					if(getVar("pthevPlugged",false) ){
						CMessage("Hehe... is it also a little embarrassing to have your ass plugged up?");
						//@ResponseYes(ItsEmbarrassing)	Couldn't find the file
						found = true;
					}
					break;
				case 2:
					if(getVar("AV_SubKnees",false) ){
						CMessage("I'm getting pretty turned on myself, knowing you're on your knees for me...");
						found = true;
					}
					break;
				case 3:
					if(getVar("AV_Pins",false) ){
						CMessage("I love how the pain from the clothespins makes doesn't make you less horny, but actually more %EmoteHappy%");
						found = true;
					}
					break;
				case 4:
					if(getVar("AV_BallTied",false) ){
						CMessage("Good... I want those tied up balls to fill up like never before");
						found = true;
					}
					break;
				case 5:
					CMessage("Must suck to be horny and locked up!");
					found = true;
					break;
				case 6:
					CMessage("Maybe this will make it worse %Grin%");
					getTeasePicture(4);
					found = true;
					break;
				case 7:
					CMessage("%Good% !");
					found = true;
					break;
				case 8:
					if(getVar("AV_DommeHornie1",false) ){
						CMessage("Locked and horny, a good combination");
						setTempVar("AV_MEM_Horny", true);
						found = true;
					}
					break;
				case 9:
					if(getVar("AV_DommeMistress",false) ){
						CMessage("Pray i'm not locking you in that cage forever!");
						setTempVar("AV_MEM_Horny", true);
						found = true;
					}
					break;
				case 10:
					CMessage("I bet you'd like me to let your %Cock% out of that cage huh %PetName%? %Lol%");
					found = true;
					break;
				case 11:
					CMessage("I love seeing you all %SubHorny% and stuck in that tight, horrible little cage %EmoteRandom%");
					found = true;
					break;
				case 12:
					CMessage("Is that cage getting a little... tight, %SubName%? %EmoteRandom%");
					setTempVar("AV_MEM_Horny", true);
					found = true;
					break;
				case 13:
					CMessage("I wonder what it would feel like, if I were all %DomHorny% and could't play with myself? I don't think I could bear it...");
					setTempVar("AV_MEM_Horny", true);
					found = true;
					break;
				case 14:
					CMessage("I bet you'd like me to let your %Cock% out of that cage huh %PetName%? %Lol%");
					found = true;
					break;
			}
		}
	}
	else if(getVar("cbtActive", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 11);
			switch (thisRandom){
				case 1:
					if(getVar("pthevPlugged",false) ){
						CMessage("Hehe... is it also a little embarrassing to have your ass plugged up?");
						//@ResponseYes(ItsEmbarrassing)	Couldn't find the file
						found = true;
					}
					break;
				case 2:
					if(getVar("AV_SubKnees",false) ){
						CMessage("I'm getting pretty turned on myself, knowing you're on your knees for me...");
						found = true;
					}
					break;
				case 3:
					if(getVar("AV_Pins",false) ){
						CMessage("I love how the pain from the clothespins makes doesn't make you less horny, but actually more %EmoteHappy%");
						found = true;
					}
					break;
				case 4:
					if(getVar("AV_BallTied",false) ){
						CMessage("Good... I want those tied up balls to fill up like never before");
						found = true;
					}
					break;
				case 5:
					CMessage("If you're horny, you're not hitting hard enough!");
					setTempVar("AV_MEM_Horny", true);
					found = true;
					break;
				case 6:
					CMessage("You get turned on by pain, intresting..");
					setTempVar("AV_MEM_Horny", true);
					found = true;
					break;
				case 7:
					CMessage("Horny? When you're punishing your %Cock%?");
					setTempVar("AV_MEM_Horny", true);
					found = true;
					break;
				case 8:
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short17.js");
					found = true;
					break;
				case 9:
					if(getVar("AV_DommeHornie1",false) ){
						CMessage("You naugthy boy!");
						setTempVar("AV_MEM_Horny", true);
						found = true;
					}
					break;
				case 10:
					if(getVar("AV_DommeMistress",false) ){
						CMessage("If this is turning you on, then something is very wrong! ");
						setTempVar("AV_MEM_Horny", true);
						found = true;
					}
					break;
				case 11:
					run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_Punishment.js");
					found = true;
					break;
			}
		}
	}
	else if(getVar("holdingedge", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 13);
			switch (thisRandom){
				case 1:
					if(getVar("pthevPlugged",false) ){
						CMessage("Hehe... is it also a little embarrassing to have your ass plugged up?");
						//@ResponseYes(ItsEmbarrassing)	Couldn't find the file
						found = true;
					}
					break;
				case 2:
					if(getVar("AV_SubKnees",false) ){
						CMessage("I'm getting pretty turned on myself, knowing you're on your knees for me...");
						found = true;
					}
					break;
				case 3:
					if(getVar("AV_Pins",false) ){
						CMessage("I love how the pain from the clothespins makes doesn't make you less horny, but actually more %EmoteHappy%");
						found = true;
					}
					break;
				case 4:
					if(getVar("AV_BallTied",false) ){
						CMessage("Good... I want those tied up balls to fill up like never before");
						found = true;
					}
					break;
				case 5:
					CMessage("You're edging, you should be!");
					setTempVar("AV_MEM_Horny", true);
					found = true;
					break;
				case 6:
					CMessage("Maybe this will make it worse %Grin%");
					getTeasePicture(4);
					found = true;
					break;
				case 7:
					CMessage("%Good% !");
					setTempVar("AV_MEM_Horny", true);
					found = true;
					break;
				case 8:
					if(getVar("AV_DommeHornie1",false) ){
						CMessage("Maybe I should make you edge a thousand times!");
						setTempVar("AV_MEM_Horny", true);
						found = true;
					}
					break;
				case 9:
					if(getVar("AV_DommeMistress",false) ){
						CMessage("Just be happy i'm not holding the cane right now!");
						found = true;
					}
					break;
				case 10:
					CMessage("Holding that edge is intense, huh %PetName%? %EmoteRandom%");
					found = true;
					break;
				case 11:
					CMessage("Do you feel like you can't take any more %PetName%? %EmoteRandom%");
					found = true;
					break;
				case 12:
					CMessage("Staying rightttt on that edge should make you nice and %SubHorny% %EmoteRandom%");
					found = true;
					break;
				case 13:
					CMessage("Watching you ride that edge is making me %DomHorny% %PetName%. Mmmm...");
					setTempVar("AV_MEM_Horny", true);
					found = true;
					break;
			}
		}
	}
    else if (isEdging())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 13);
			switch (thisRandom){
				case 1:
					if(getVar("pthevPlugged",false) ){
						CMessage("Hehe... is it also a little embarrassing to have your ass plugged up?");
						//@ResponseYes(ItsEmbarrassing)	Couldn't find the file
						found = true;
					}
					break;
				case 2:
					if(getVar("AV_SubKnees",false) ){
						CMessage("I'm getting pretty turned on myself, knowing you're on your knees for me...");
						found = true;
					}
					break;
				case 3:
					if(getVar("AV_Pins",false) ){
						CMessage("I love how the pain from the clothespins makes doesn't make you less horny, but actually more %EmoteHappy%");
						found = true;
					}
					break;
				case 4:
					if(getVar("AV_BallTied",false) ){
						CMessage("Good... I want those tied up balls to fill up like never before");
						found = true;
					}
					break;
				case 5:
					CMessage("You should be horny...");
					setTempVar("AV_MEM_Horny", true);
					found = true;
					break;
				case 6:
					CMessage("Maybe this will make it worse %Grin%");
					getTeasePicture(4);
					found = true;
					break;
				case 7:
					CMessage("%Good% !");
					setTempVar("AV_MEM_Horny", true);
					found = true;
					break;
				case 8:
					if(getVar("AV_DommeHornie1",false) ){
						CMessage("I love it when you're horny, now lets see what we can do to make it worse!");
						setTempVar("AV_MEM_Horny", true);
						found = true;
					}
					break;
				case 9:
					if(getVar("AV_DommeMistress",false) ){
						CMessage("Pray i'm not turn you from horny to crying!");
						found = true;
					}
					break;
				case 10:
					CMessage("Oh yes, edge for me, I'm so %DomHorny% %PetName%");
					found = true;
					break;
				case 11:
					CMessage("I think I could still get you more %SubHorny%.... edge for me %EmoteRandom%");
					found = true;
					break;
				case 12:
					CMessage("I like the effect this is having on you %PetName% %EmoteRandom% ");
					setTempVar("AV_MEM_Horny", true);
					found = true;
					break;
				case 13:
					CMessage("Do you like the way this makes you feel, or are you suffering? %EmoteRandom%");
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
					if(getVar("pthevPlugged",false) ){
						CMessage("Hehe... is it also a little embarrassing to have your ass plugged up?");
						//@ResponseYes(ItsEmbarrassing)	Couldn't find the file
						found = true;
					}
					break;
				case 2:
					if(getVar("AV_SubKnees",false) ){
						CMessage("I'm getting pretty turned on myself, knowing you're on your knees for me...");
						found = true;
					}
					break;
				case 3:
					if(getVar("AV_Pins",false) ){
						CMessage("I love how the pain from the clothespins makes doesn't make you less horny, but actually more %EmoteHappy%");
						found = true;
					}
					break;
				case 4:
					if(getVar("AV_BallTied",false) ){
						CMessage("Good... I want those tied up balls to fill up like never before");
						found = true;
					}
					break;
				case 5:
					answer0= getInput("%Grin% Are you aching for me, %Name%?",5);
					if (answer0.isLike("yes", "yea", "yep"))
					{
						imAchingResponse();
					}
					found = true;
					break;
				case 6:
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short17.js");
					found = true;
					break;
				case 7:
					CMessage("You should be horny...");
					setTempVar("AV_MEM_Horny", true);
					found = true;
					break;
				case 8:
					answer0= getInput("You must be dripping with precum... ",5);
					if (answer0.isLike("yes", "yea", "yep"))
					{
						drippingResponse();
					}
					found = true;
					break;
				case 9:
					CMessage("Thats why you're stroking silly, to make you horny!");
					setTempVar("AV_MEM_Horny", true);
					found = true;
					break;
				case 10:
					CMessage("Give me more, %Name%");
					//@AddStrokeTime
					found = true;
					break;
				case 11:
					CMessage("Don't even think about cumming yet %PetName%, I'm nowhere near done with you.");
					found = true;
					break;
				case 12:
					CMessage("%Good%!");
					setTempVar("AV_MEM_Horny", true);
					found = true;
					break;
				case 13:
					if(getVar("AV_DommeHornie1",false) ){
						CMessage("Good, but its not enough!");
						setTempVar("AV_MEM_Horny", true);
						found = true;
					}
					break;
				case 14:
					if(getVar("AV_DommeMistress",false) ){
						CMessage("Be glad i'm not whipping you right now!");
						setTempVar("AV_MEM_Horny", true);
						found = true;
					}
					break;
				case 15:
					CMessage("Who wouldn't be if they were in your shoes");
					setTempVar("AV_MEM_Horny", true);
					found = true;
					break;
				case 16:
					CMessage("Maybe this will make it worse %Grin%");
					getTeasePicture(4);
					found = true;
					break;
				case 17:
					if(getVar("AV_DommeHornie1",false) ){
						CMessage("Your pleading makes me horny too %Laugh%");
						setTempVar("AV_MEM_Horny", true);
						found = true;
					}
					break;
				case 18:
					if(getVar("AV_DommeMistress",false) ){
						CMessage("Maybe.. but not enough.. ");
						setTempVar("AV_MEM_Horny", true);
						found = true;
					}
					break;
				case 19:
					CMessage("You seem a little %SubHorny%, %PetName% %Grin%");
					setTempVar("AV_MEM_Horny", true);
					found = true;
					break;
				case 20:
					answer0= getInput("You seem a bit distracted %PetName%, do you think more stroking will help?",5);
					if (answer0.isLike("yes", "yea", "yep"))
					{
						aV_FastStrokeResponse();
					}
					found = true;
					break;
				case 21:
					answer0= getInput("Is that stroking getting to you %PetName%? Good %EmoteRandom%",5);
					if (answer0.isLike("yes", "yea", "yep"))
					{
						aV_FastStrokeResponse();
					}
					found = true;
					break;
				case 22:
					CMessage("Is that stroking getting to you %PetName%? Good %EmoteRandom%");
					setTempVar("AV_MEM_Horny", true);
					found = true;
					break;
				case 23:
					CMessage("I want you so %SubHorny% that it feels unbearable %EmoteRandom%");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short03.js");
					found = true;
					break;
				case 24:
					CMessage("I want you so %SubHorny% that it feels unbearable %EmoteRandom%");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short04.js");
					found = true;
					break;
				case 25:
					CMessage("Do you like this stroking %PetName%? I hope so %EmoteRandom%");
					setTempVar("AV_MEM_Horny", true);
					found = true;
					break;
				case 26:
					CMessage("I'm glad I'm having the right effect on you %PetName% %Grin%");
					found = true;
					break;
				case 27:
					CMessage("Try to think about something other than getting yourself off");
					setTempVar("AV_MEM_Horny", true);
					found = true;
					break;
				case 28:
					CMessage("Does being so %SubHorny% feel like suffering?");
					setTempVar("AV_MEM_Horny", true);
					found = true;
					break;
				case 29:
					CMessage("Does being so %SubHorny% feel like suffering?");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short01.js");
					found = true;
					break;
				case 30:
					CMessage("Does being so %SubHorny% feel like suffering?");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short02.js");
					found = true;
					break;
			}
		}
    }
    else {		//not stroking
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 14);
			switch (thisRandom){
				case 1:
					if(getVar("pthevPlugged",false) ){
						CMessage("Hehe... is it also a little embarrassing to have your ass plugged up?");
						//@ResponseYes(ItsEmbarrassing)	Couldn't find the file
						found = true;
					}
					break;
				case 2:
					if(getVar("AV_SubKnees",false) ){
						CMessage("I'm getting pretty turned on myself, knowing you're on your knees for me...");
						found = true;
					}
					break;
				case 3:
					if(getVar("AV_Pins",false) ){
						CMessage("I love how the pain from the clothespins makes doesn't make you less horny, but actually more %EmoteHappy%");
						found = true;
					}
					break;
				case 4:
					if(getVar("AV_BallTied",false) ){
						CMessage("Good... I want those tied up balls to fill up like never before");
						found = true;
					}
					break;
				case 5:
					CMessage("You should be horny...");
					setTempVar("AV_MEM_Horny", true);
					found = true;
					break;
				case 6:
					CMessage("Maybe this will make it worse %Grin%");
					getTeasePicture(4);
					found = true;
					break;
				case 7:
					CMessage("%Good%!");
					setTempVar("AV_MEM_Horny", true);
					found = true;
					break;
				case 8:
					if(getVar("AV_DommeHornie1",false) ){
						CMessage("I love it when you're horny, now lets see what we can do to make it worse!");
						setTempVar("AV_MEM_Horny", true);
						found = true;
					}
					break;
				case 9:
					if(getVar("AV_DommeMistress",false) ){
						CMessage("Pray i'm not turn you from horny to crying!");
						setTempVar("AV_MEM_Horny", true);
						found = true;
					}
					break;
				case 10:
					CMessage("This is going to feel so much more unbearable when I make you stroke again %EmoteRandom%");
					found = true;
					break;
				case 11:
					CMessage("I would enjoy resting that %Cock%, I'll make it even worse for you soon %EmoteRandom%");
					found = true;
					break;
				case 12:
					CMessage("Wait til you start stroking again %EmoteRandom%");
					found = true;
					break;
				case 13:
					CMessage("I'm glad I'm having the right effect on you %PetName% %Grin%");
					found = true;
					break;
				case 14:
					CMessage("I love teasing you, making you all %SubHorny% %EmoteRandom%");
					found = true;
					break;
			}
		}
    }
    DMessage("gNMHorny: EndResponse");
    return true;
}