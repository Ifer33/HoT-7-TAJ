function greetsubVocabulary()
{
	DMessage("greetsub: start");
	let hour = new Date().getHours();
    if(hour<12 && hour >=4)
    {
        message="%GoodMorningSub%";
    }
    else if(hour<=18 && hour >=12)
    {
        message="%GoodAfternoonSub%";
    }
	else if(hour<=22 && hour >=18)
    {
        message="%GoodEveningSub%";
    }
    else if(hour<=4 && hour >=22)
    {
        message="%GoodLateNightSub%";
    }
	DMessage("greetsub: end");
	return message;
}