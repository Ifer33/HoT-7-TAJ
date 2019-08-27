DMessage("AV_Gen02: start");
main();
DMessage("AV_Gen02: end");
function main()
{
    CMessage(random("Oh", "now you want to hesitate?", "I want to hear you beg."));
    if (randomInteger(1, 100) <= 50)
    {
        Alternative();
        return;
    }
    CMessage("You\'ve lost ownership of your own " + random("body", "cock", "balls"));
    CMessage("It doesn't belong to you anymore. It’s mine.");
	Retorna();
	return;
    Alternative();
}
function Alternative()
{
    CMessage("Look at all this sweat...");
    CMessage("the way you " + random("shudder", "growl", "struggle"));
    Retorna();
}
function Retorna()
{
    if (getApathyMoodIndex() <= 25)
    {
        CMessage(random("I won\'t go too hard on you ", "I\'ll go easy on you ") + random("%PetName%", "%SubName%"));
        Para();
        return;
    }
	if(checkOldAphatyLevel(1)){
		//--Command:ApathyLevel1
		CMessage(random("I won\'t go too hard on you ", "I\'ll go easy on you ") + random("%PetName%", "%SubName%"));
		Para();
		return;
	} else if(checkOldAphatyLevel(2)){
		//--Command:ApathyLevel2
		CMessage(random("I won\'t go too hard on you ", "I\'ll go easy on you ") + random("%PetName%", "%SubName%"));
		Para();
		return;
	} else if(checkOldAphatyLevel(3)){
		//--Command:ApathyLevel3
		if (randomInteger(1, 100) <= 75)
		{
			Mercy();
			return;
		}
		//--Command:ApathyLevel3
		CMessage(random("Oh", "I love the way you moan so much", "Obedience and Mistress pleasure is so much more satisfying than your needs, isn\'t it?"));
	} else if(checkOldAphatyLevel(4)){
		//--Command:ApathyLevel4
		CMessage(random("Oh", "I love the way you moan so much", "Obedience and Mistress pleasure is so much more satisfying than your needs, isn\'t it?"));
	} else if(checkOldAphatyLevel(5)){
		//--Command:ApathyLevel5
		CMessage(random("Oh", "I love the way you moan so much", "Obedience and Mistress pleasure is so much more satisfying than your needs, isn\'t it?"));
    if (randomInteger(1, 100) <= 50)
    {
        Break();
        return;
    }
    CMessage("Oh no, %PetName%, you won't stop. Not yet.");
    CMessage("Because this is just the start of your punishment.");
    return;
    Break();
}
function Break()
{
    CMessage("But " + random("I\'ll try to keep your limits in mind a little better ", "I think ") + "I can let you rest for a while");
    CMessage("enjoy");
    sleep(randomInt(100, 120));
    CMessage("%ThatsEnough%");
    return;
    Mercy();
}
function Mercy()
{
    CMessage(random("I won\'t go too hard on you ", "I\'ll go easy on you ") + random("%PetName%", "%SubName%"));
    Para();
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