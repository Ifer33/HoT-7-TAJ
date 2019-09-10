DMessage("OpiatePTE1: Beginn");
main();
DMessage("OpiatePTE1: end");
function main()
{
    let answer0 = getInput("Hmm, you want to edge %Name%? %Smile%");
    if (answer0.isLike("yes"))
    {
        CMessage("%EmoteRandom%");
        if (randomInteger(1, 100) <= 20)
        {
            Session();
            return;
        }
    }
    else if (answer0.isLike("no"))
    {
        CMessage("%EmoteThought%");
        Cancel();
        return;
    }
    CMessage("I\'ll give you a choice then");
    if (checkOldDommeLevel(1))
    {
        dommeLevel1();
        return;
    }
    else if (checkOldDommeLevel(2))
    {
        dommeLevel2();
        return;
    }
    else if (checkOldDommeLevel(3))
    {
        dommeLevel3();
        return;
    }
    else if (checkOldDommeLevel(4))
    {
        dommeLevel3();
        return;
    }
    else if (checkOldDommeLevel(5))
    {
        dommeLevel3();
        return;
    }
	return;
}

function dommeLevel1(){
    CMessage("Mmm nevermind, no choices for you %Name%");
    edge("%Edge%");
    return;
}
function dommeLevel2(){
    CMessage("Mmm nevermind, no choices for you %Name%");
    edge("%Edge%");
    return;
}
function dommeLevel3(){
    CMessage("You can edge for me twice %Smile%");
    CMessage("Or you can hold one for me %EmoteRandom%");
    let answer1 = getInput("What\'s it going to be %Name%");
	while(!(answer1.isLike("twice", "two", "former", "first") || answer1.isLike("once", "hold", "latter", "second") || answer1.isLike("you", "choose", "know", "care", "please", "miss", "mistress", "princess"))){
		CMessage("It wasn\'t a yes or no question");
		answer1 = getInput("Well, would you rather edge <i>twice</i> or <i>hold</i> one for me?");
	}
    if (answer1.isLike("twice", "two", "former", "first"))
    {
        CMessage("%Smile%");
        EdgeA();
        return;
    }
    else if (answer1.isLike("once", "hold", "latter", "second"))
    {
        CMessage("%Smile%");
        HoldA();
        return;
    }
    CMessage("I can decide for you %Smile%");
    CMessage("You might regret it though");
    if (randomInteger(1, 100) <= 50)
    {
        HoldA();
        return;
    }
    EdgeA();
}
function EdgeA()
{
    edge("%Edge%");
    edge("%Edge%");
    return;
    HoldA();
}
function HoldA()
{
    holdEdge();
    return;
}

function Cancel()
{
    CMessage("%Smile%");
	if (checkOldApathyLevel(1))
    {
        ApathyLevel1();
        return;
    }
    else if (checkOldApathyLevel(2))
    {
        ApathyLevel2();
        return;
    }
    else if (checkOldApathyLevel(3))
    {
        ApathyLevel3();
        return;
    }
    else if (checkOldApathyLevel(4))
    {
        ApathyLevel4();
        return;
    }
    else if (checkOldApathyLevel(5))
    {
        ApathyLevel5();
        return;
    }
	return;
}

function ApathyLevel1(){
    if (randomInteger(1, 100) <= 80)
    {
        a1();
        return;
    }
    CMessage("You\'ve already put the idea in my head though");
    CMessage("I think I have to make you edge now %EmoteRandom%");
    edge("Edge for me %Name%");
    return;
    a1();
}
function a1()
{
    CMessage("I guess I will let you off the hook");
    CMessage("This time %EmoteRandom%");
    return;
}

function ApathyLevel2(){
    if (randomInteger(1, 100) <= 60)
    {
        a2();
        return;
    }
    CMessage("You\'ve already put the idea in my head though");
    CMessage("I think I have to make you edge now %EmoteRandom%");
    edge("Edge for me %Name%");
    return;
    a2();
}
function a2()
{
    CMessage("I guess I can let you off the hook");
    CMessage("This time %EmoteRandom%");
    return;
}

function ApathyLevel3(){
    if (randomInteger(1, 100) <= 40)
    {
        a3();
        return;
    }
    CMessage("Now that you\'ve put the idea in my head though");
    CMessage("I think I have to make you edge %EmoteRandom%");
    edge("Edge for me %Name%");
    return;
    a3();
}
function a3()
{
    CMessage("I guess I\'ll let you off the hook this time");
    CMessage("Be careful though");
    CMessage("I might not be so gracious next time %EmoteRandom%");
    return;
}

function ApathyLevel4(){
    if (randomInteger(1, 100) <= 20)
    {
        a4();
        return;
    }
    CMessage("That\' too bad %Name%");
    CMessage("Now that you\'ve mentioned edging");
    CMessage("I think I %Want% for you to give me one %EmoteRandom%");
    edge("%Edge%");
    return;
    a4();
}
function a4()
{
    CMessage("I guess I\'ll let you off the hook this time");
    CMessage("Be careful though");
    CMessage("I probably won\'t be so gracious next time %EmoteRandom%");
    return;
}

function ApathyLevel5(){
    CMessage("That\'s too bad");
    CMessage("Now that you\'ve mentioned edging");
    CMessage("I don\'t think I\'m going to give you a choice %EmoteRandom%");
    edge("%Edge%");
    return;
    Session();
}
function Session()
{
    CMessage("Mmm");
    return;
}