DMessage("AV_Gen01: start");
main();
DMessage("AV_Gen01: end");
function main()
{
    if(!getVar("av_intera_010", false) && !getVar("av_intera_009", false))
    {
        CMessage("You don\'t think you can %Take% anymore?");
    }
    if(getVar("av_intera_009", false))
    {
        CMessage("You take ir for %Contact2%, but cant %Take% for me?");
    }
    if(getVar("av_intera_010", false))
    {
        CMessage("You don\'t think you can make till the end of the ladder?");
    }
    CMessage(random("But darling, that\'s what makes it so fun, to MAKE you take it", "You must be in agony", "I love how you take it, %PetName%", "I love how you beg, %SubName%"));
	if(checkOldAphatyLevel(1)){
		//--Command:ApathyLevel1
		CMessage("I was just being %Naughtily% " + random("%PetName%", "%SubName%"));
		Para();
		return;
	} else if(checkOldAphatyLevel(2)){
		//--Command:ApathyLevel2
		CMessage("I was just being %Naughtily% " + random("%PetName%", "%SubName%"));
		Para();
		return;
	} else if(checkOldAphatyLevel(3)){
		//--Command:ApathyLevel3
		CMessage("I was just being %Naughtily% " + random("%PetName%", "%SubName%"));
		if (randomInteger(1, 100) <= 75)
		{
			Para();
			return;
		}
	} else if(checkOldAphatyLevel(4)){
		//--Command:ApathyLevel4
		CMessage("You didn\'t think you were getting out of this easily, did you?");
	} else if(checkOldAphatyLevel(5)){
		//--Command:ApathyLevel5
		CMessage("You didn\'t think you were getting out of this easily, did you?");
	}
    if (randomInteger(1, 100) <= 25)
    {
        End();
        return;
    }
    CMessage("That must have been exhausting.");
    CMessage("So let\'s rest a " + random("second", "minute"));
    sleep(randomInt(15, 20));
    CMessage(random("Breathe with me", "calm down", "Let me caress you with my words"));
    CMessage(random("I\'m glad I can provide you with that comfort", "Pay attention to your %Cock%"));
    CMessage(random("Notice all the parts of the orgasm that are missing", "Oh no, sweetie, you won\'t come. Not yet.."));
    sleep(randomInt(15, 20));
    CMessage("%EmoteRandom%");
    CMessage("%ThatsEnough%");
    if(!getVar("av_intera_010", false))
    {
        CMessage("Let\'s finish that " + random("task", "tease"));
    }
    if(getVar("av_intera_010", false))
    {
        CMessage("There is a ladder waiting for you...");
    }
    return;
    Para();
}
function Para()
{
    run("Interrupt"+seperator+"AV_Cancela.js");
    return;
    End();
}
function End()
{
    CMessage(random("You get nothing but frustration", "You haven\'t done anything to earn it, have you?"));
    return;
}