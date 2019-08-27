addResponseIndicator("glad I met you","happy I met you","glad to have met you","happy to have met you","glad we met,happy we met");
//run("allutils.js");

function gladIMetYouResponse(message) {
    DMessage("gladIMetYou: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("gladIMetYou: EndResponse Response is Disabled");
        return false;
    }
    else if(firstRound()){		//not stroking
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 5);
			switch (thisRandom){
				case 1:
					found=true;
					answer0=getInput("It\'s like you\'ve finally found your purpose in life, isn\'t it? %Smile%",5);
					if (answer0.isLike("yes", "yea", "yep"))
					{
						thisIsMyPurposeInLifeResponse();
					}
					break;
				case 2:
					CMessage("I bet you can barely remember what you\'re life was like before you met me %EmoteWink%");
					found = true;
					break;
				case 3:
					CMessage("What would you without me... oh I know, you\'d still be " + random("watching porn ", "masturbating ") + "all day %Lol%");
					found = true;
					break;
				case 4:
					CMessage("Serving me makes your life better in so many different ways, doesn\'t it? %Smile%");
					found = true;
					break;
				case 5:
					CMessage("Having me in your life really has been a great thing for you, hasn\'t it? %Smile%");
					found = true;
					break;
			}
		}
    } else {
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 2);
			switch (thisRandom){
				case 1:
					CMessage("Let\'s see if you still feel that way when I\'m done with you %GeneralTime% %Grin%");
					found = true;
					break;
				case 2:
					CMessage("I\'m going to make you wish you\'d never met me %GeneralTime% %Grin%");
					found = true;
					break;
			}
		}
	}
    DMessage("gladIMetYou: EndResponse");
    return true;
}