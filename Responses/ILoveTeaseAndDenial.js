addResponseIndicator("i love tease and denial","i love denial","i love being teased and denied","love it when you deny me","love it when you tease and deny me","i like tease and denial","i like denial","i like being teased and denied","like it when you deny me","like it when you tease and deny me");

function iLoveTeaseAndDenialResponse(message) {
	DMessage("iLoveTeaseAndDenial: BeginnningResponse");
    found=false;
	while(!found){
		switch(randomInteger(1,18)){
			case 1:
				if(getVar("pvWantCoCo", false))
				{
					CMessage("Mmm I yeah I should take advantage of that much more often %Grin%");
					found=true;
				}
				break;
			case 2:
				if(!getVar("pvWantCoCo", false))
				{
					CMessage("I can never choose what I like more, the tease or the denial part %Lol%");
					found=true;
				}
				break;
			case 3:
				if(!getVar("pvWantCoCo", false))
				{
					CMessage("They\'re two sides of the same coin, really");
					found=true;
				}
				break;
			case 4:
				if(!getVar("pvWantCoCo", false))
				{
					CMessage("I don\'t think there\'s anything more fun than to tease and deny a poor %PetName% like you %Giggles%");
					found=true;
				}
				break;
			case 5:
				if(!getVar("pvWantCoCo", false) && !getVar("pthevCompleteControlYES", false))
				{
					answer0 = getInput("Sounds like you desperately need someone to control your orgasms, don\'t you?",5);
					if (answer0.isLike("yes", "yea", "yep"))
					{
						controlMyOrgasmsResponse();
					}
					found=true;
				}
				break;
			case 6:
				if(!getVar("pvWantCoCo", false) && !getVar("pthevCompleteControlYES", false))
				{
					answer0 = getInput("Oh... I think it\'s about time we took the denial part to the next level, don\'t you think?",5);
					if (answer0.isLike("yes", "yea", "yep"))
					{
						controlMyOrgasmsResponse();
					}
					found=true;
				}
				break;
			case 7:
				if(!getVar("pvWantCoCo", false) && !getVar("pthevCompleteControlYES", false))
				{
					answer0 = getInput("Really... what do you say we take the denial part one step further?",5);
					if (answer0.isLike("yes", "yea", "yep"))
					{
						controlMyOrgasmsResponse();
					}
					found=true;
				}
				break;
			case 8:
				if(!getVar("pvWantCoCo", false) && !getVar("pthevCompleteControlYES", false))
				{
					answer0 = getInput("You sound like someone in need of strict orgasm control, don\'t you agree?",5);
					if (answer0.isLike("yes", "yea", "yep"))
					{
						controlMyOrgasmsResponse();
					}
					found=true;
				}
				break;
			case 9:
				if(getVar("pthevCompleteControlYES", false))
				{
					CMessage("Especially the denial part of the equation... %Grin%");
					found=true;
				}
				break;
			case 10:
				if(getVar("pthevCompleteControlYES", false))
				{
					CMessage("Tease and denial is so freaking hot %EmoteHappy%");
					found=true;
				}
				break;
			case 11:
				if(getVar("pthevCompleteControlYES", false))
				{
					CMessage("It\'s the sexiest thing ever %Smile%");
					found=true;
				}
				break;
			case 12:
				if(getVar("pthevCompleteControlYES", false))
				{
					CMessage("Especially if the tease is long and the denial brutal %Laugh%");
					found=true;
				}
				break;
			case 13:
				if(getVar("pthevCompleteControlYES", false))
				{
					CMessage("I live for teasing and denying %Laugh%");
					found=true;
				}
				break;
			case 14:
				if(getVar("pthevCompleteControlYES", false))
				{
					CMessage("I\'m glad the denial is yours to suffer and not mine, though...");
					found=true;
				}
				break;
			case 15:
				if(getVar("pthevCompleteControlNO", false))
				{
					CMessage("Somehow I doubt that you really mean that... in particular the denial part of it...");
					found=true;
				}
				break;
			case 16:
				if(getVar("pthevCompleteControlNO", false))
				{
					answer0 = getInput("Yeah? Well... maybe then whether or not you ever get to cum should be completely up to me, right?",5);
					if (answer0.isLike("yes", "yea", "yep"))
					{
						controlMyOrgasmsResponse();
					}
					found=true;
				}
				break;
			case 17:
				if(getVar("pthevCompleteControlNO", false))
				{
					CMessage("Hm. Sometimes I get the feeling you don\'t really want to commit the denial part of it...");
				}
				found=true;
				break;
			case 18:
				CMessage("So you are into tease and denial?");
				answer0 = getInput("You like to be toyed and played with?",5);
				if (answer0.isLike("yes", "yea", "yep"))
				{
					aV_002Response();
				}
				found=true;
				break;
		}
	}			
	DMessage("iLoveTeaseAndDenial: endResponse");
	return;
}