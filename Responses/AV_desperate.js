addResponseIndicator("I am desperate", "I am despairing", "I am hopeless", "I am anguished", "I am distressed", "I am wretched", "I am desolate", "i'm desperate", "i'm going crazy", "i am going crazy", "I'm despairing", "I'm hopeless", "I'm anguished", "I'm distressed", "I'm wretched", "I'm desolate");
//run("allutils.js");

function aV_desperateResponse(message) {
    DMessage("aV_desperate: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("aV_desperate: EndResponse Response is Disabled");
        return false;
    }
	if(!getVar("startDate").addMinute(5).hasPassed()) {
		CMessage(random("If you're desperate already, I'm about to have some <i>real</i> fun %EmoteLaugh%", "Not as bad as you're about to be %EmoteLaugh%"));
	}
	else if(getVar("chastityOn", false)){
		
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
				case 2:
					if(getMood()<=30) {
						CMessage("You think <i>this</i> is desperate? Don't make me laugh %EmoteRandom%");
						found = true;
						break;
					}
				case 3:
					if(getVar("AV_DommeMistress", false)) {
						CMessage("You think <i>this</i> is desperate? Don't make me laugh %EmoteRandom%");
						found = true;
						break;
					}
				case 4:
					CMessage("I guess we're going to have to do something about this.");
					run("Custom" + java.io.File.separator + "MiniScripts" + java.io.File.separator + "AV_DesperateProp.js");
					found = true;
					break;
			}
		}
    }
    else if (isStrokingAll())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 11);
			switch (thisRandom){
				case 1:
					if(!getVar("AV_Short29", false)){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short29.js");
						found = true;
						break;
					}
				case 2:
					if(!getVar("AV_Short35", false)){
						run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short35.js");
						found = true;
						break;
					}
				case 3:
					CMessage("That turns me on so much %EmoteRandom%");
					found = true;
					break;
				case 4:
					CMessage("I love how submissive you are, when you don't get what you want");
					found = true;
					break;
				case 5:
					CMessage("keep on begging");
					found = true;
					break;
				case 6:
					CMessage("your helplessness makes me so horny");
					found = true;
					break;
				case 7:
					if(getVar("AV_DommeMistress", false)){
						CMessage("You think <i>this</i> is desperate? Don't make me laugh %EmoteRandom%");
						found = true;
						break;
					}
				case 8:
					if(getMood()<=30){
						CMessage("You think <i>this</i> is desperate? Don't make me laugh %EmoteRandom%");
						found = true;
						break;
					}
				case 9:
					CMessage("I guess we're going to have to do something about this.");
					run("Custom" + java.io.File.separator + "MiniScripts" + java.io.File.separator + "AV_DesperateProp.js");
					found = true;
					break;
				case 10:
					CMessage("That turns me on so much %EmoteRandom%");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short03.js");
					found = true;
					break;
				case 11:
					CMessage("That turns me on so much %EmoteRandom%");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short04.js");
					found = true;
					break;
			}
		}
    }
    else {		//not stroking
			if(getVar("av_intera_001", false)){
				run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen01.js");
			}
			else if(getVar("av_intera_002", false)){
				run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen01.js");
			}
			else if(getVar("av_intera_009", false)){
				run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen01.js");
			}
			else if(getVar("av_intera_010", false)){
				run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen01.js");
			}
			else if(getVar("av_intera_008", false)){
				run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen03.js");
			}
			else if(getVar("av_intera_013", false)){
				run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen02.js");
			}
			else if(getVar("av_intera_015", false)){
				run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen01.js");
			}
			else if(getVar("av_intera_016", false)){
				run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen02.js");
			}
			else if(getVar("av_intera_017", false)){
				run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen05.js");
			}
			else if(getVar("av_intera_018", false)){
				run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen05.js");
			}
			else if(getVar("av_intera_019", false)){
				run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_EdgeInter.js");
			}
	}
    DMessage("aV_desperate: EndResponse");
    return true;
}


/*
old Version:
 else {		//not stroking
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 11);
			switch (thisRandom){
				case 1:
					if(getVar("av_intera_001", false)){
						run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen01.js");
						found = true;
						break;
					}
				case 2:
					if(getVar("av_intera_002", false)){
						run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen01.js");
						found = true;
						break;
					}
				case 3:
					if(getVar("av_intera_009", false)){
						run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen01.js");
						found = true;
						break;
					}
				case 4:
					if(getVar("av_intera_010", false)){
						run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen01.js");
						found = true;
						break;
					}
				case 5:
					if(getVar("av_intera_008", false)){
						run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen03.js");
						found = true;
						break;
					}
				case 6:
					if(getVar("av_intera_013", false)){
						run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen02.js");
						found = true;
						break;
					}
				case 7:
					if(getVar("av_intera_015", false)){
						run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen01.js");
						found = true;
						break;
					}
				case 8:
					if(getVar("av_intera_016", false)){
						run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen02.js");
						found = true;
						break;
					}
				case 9:
					if(getVar("av_intera_017", false)){
						run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen05.js");
						found = true;
						break;
					}
				case 10:
					if(getVar("av_intera_018", false)){
						run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen05.js");
						found = true;
						break;
					}
				case 11:
					if(getVar("av_intera_019", false)){
						run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_EdgeInter.js");
						found = true;
						break;
					}
			}
		}







main();
function main()
{
    if (answer-1.isLike("desperate", "despairing", "hopeless", "anguished", "distressed", "wretched", "desolate", "desperate", "crazy", "crazy", "despairing", "hopeless", "anguished", "distressed", "wretched", "desolate"))
    {
    }
    else if (answer-1.isLike("Tease"))
    {
    }
    let answer0 = getInput("But we haven\'t even started yet %EmoteLaugh%");
    if (answer0.isLike("End"))
    {
    }
    else if (answer0.isLike("Round"))
    {
        --UNINTERPRETED LINE:If you're desperate already, I'm about to have some <i>real</i> fun %EmoteLaugh%
    }
    let answer1 = getInput("Not as bad as you\'re about to be %EmoteLaugh%");
    if (answer1.isLike("End"))
    {
    }
    else if (answer1.isLike("Stroking"))
    {
    }
    if(!getVar("AV_Short29", false))
    {
        run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short29.js");
    }
    if(!getVar("AV_Short35", false))
    {
        run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short35.js");
    }
    CMessage("That turns me on so much %EmoteRandom%");
    CMessage("I love how submissive you are, when you don\'t get what you want");
    CMessage("keep on begging");
    CMessage("your helplessness makes me so horny");
    --UNINTERPRETED LINE:@Flag(AV_DommeMistress) You think <i>this</i> is desperate? Don't make me laugh %EmoteRandom%
    --UNINTERPRETED LINE:@BadMood You think <i>this</i> is desperate? Don't make me laugh %EmoteRandom%
    CMessage("I guess we\'re going to have to do something about this.");
    run("Custom/Miniscripts/AV_DesperateProp");
    CMessage("That turns me on so much %EmoteRandom%");
    run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short03.js");
    let answer2 = getInput("That turns me on so much %EmoteRandom%");
    run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short04.js");
    if (answer2.isLike("End"))
    {
    }
    else if (answer2.isLike("Stroking"))
    {
    }
    if(getVar("av_intera_001", false))
    {
        run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen01.js");
    }
    if(getVar("av_intera_002", false))
    {
        run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen01.js");
    }
    if(getVar("av_intera_009", false))
    {
        run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen01.js");
    }
    if(getVar("av_intera_010", false))
    {
        run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen01.js");
    }
    if(getVar("av_intera_008", false))
    {
        run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen03.js");
    }
    if(getVar("av_intera_013", false))
    {
        run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen02.js");
    }
    if(getVar("av_intera_015", false))
    {
        run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen01.js");
    }
    if(getVar("av_intera_016", false))
    {
        run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen02.js");
    }
    if(getVar("av_intera_017", false))
    {
        run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen05.js");
    }
    if(getVar("av_intera_018", false))
    {
        run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_Gen05.js");
    }
    if(getVar("av_intera_019", false))
    {
        run("Custom" + java.io.File.separator + "Interact" + java.io.File.separator + "AV_EdgeInter.js");
    }
    if(!getVar("av_intera_001", false) && !getVar("av_intera_002", false) && !getVar("av_intera_003", false) && !getVar("av_intera_004", false) && !getVar("av_intera_005", false) && !getVar("av_intera_006", false) && !getVar("av_intera_007", false) && !getVar("av_intera_008", false) && !getVar("av_intera_009", false) && !getVar("av_intera_010", false) && !getVar("av_intera_011", false) && !getVar("av_intera_012", false) && !getVar("av_intera_013", false) && !getVar("av_intera_014", false) && !getVar("av_intera_015", false) && !getVar("av_intera_016", false) && !getVar("av_intera_017", false) && !getVar("av_intera_018", false) && !getVar("av_intera_019", false))
    {
    }
    if (answer2.isLike("End"))
    {
    }
    else if (answer2.isLike("Edging"))
    {
    }
    CMessage("That turns me on so much %EmoteRandom%");
    --UNINTERPRETED LINE:@Flag(AV_DommeMistress) You think <i>this</i> is desperate? Don't make me laugh %EmoteRandom%
    --UNINTERPRETED LINE:@BadMood You think <i>this</i> is desperate? Don't make me laugh %EmoteRandom%
    let answer3 = getInput("I guess we\'re going to have to do something about this.");
    run("Custom/Miniscripts/AV_DesperateProp");
    if (answer3.isLike("End"))
    {
    }
    else if (answer3.isLike("Edge"))
    {
    }
    else if (answer3.isLike("End"))
    {
    }
    else if (answer3.isLike("Cock"))
    {
    }
    else if (answer3.isLike("End"))
    {
    }
    else if (answer3.isLike("Balls"))
    {
    }
    else if (answer3.isLike("End"))
    {
    }
    else if (answer3.isLike("Chastity"))
    {
    }
    else if (answer3.isLike("End"))
    {
    }
    else if (answer3.isLike("Tease"))
    {
    }
    else if (answer3.isLike("End"))
    {
    }
}*/