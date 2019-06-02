addResponseIndicator("men need control","men need to be controlled","men should be controlled","guys need control","guys need to be controlled","guys should be controlled");
//run("allutils.js");

function menNeedControlResponse(message) {
    DMessage("menNeedControl: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("menNeedControl: EndResponse Response is Disabled");
        return false;
    }
    else {		//not stroking
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 10);
			switch (thisRandom){
				case 1:
					CMessage("That\'s something we agree on then %Smile%");
					found = true;
					break;
				case 2:
					CMessage("Yeah and the thing is, it\'s so easy too! %EmoteHappy%");
					found = true;
					break;
				case 3:
					CMessage("Most men just don\'t know what to do with themselves without a woman to control them");
					found = true;
					break;
				case 4:
					CMessage("I think that\'s true even for those who consider themselves \'alpha males\'");
					found = true;
					break;
				case 5:
					CMessage("Funny thing is, men rarely realize when they\'re being controlled by women");
					found = true;
					break;
				case 6:
					CMessage("Men generally <i>want</i> to be controlled, but I think not enough women take advantage of this");
					found = true;
					break;
				case 7:
					CMessage("Even men who think they\'re in control are often being led around by their cocks %Laugh%");
					found = true;
					break;
				case 8:
					CMessage("The world is just better off when women control their men %Smile%");
					found = true;
					break;
				case 9:
					CMessage("If only more women did it, the world would be a better place");
					found = true;
					break;
				case 10:
					CMessage("Men are weak, so they want nothing more than to give up control");
					found = true;
					break;
			}
		}
    }
	setTempVar("AV_MEM_MenNControl", true);
    DMessage("menNeedControl: EndResponse");
    return true;
}