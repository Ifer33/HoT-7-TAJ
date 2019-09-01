function generalTimeVocabulary()
{
	DMessage("GeneralTime: start");
	let hour = new Date().getHours();
    if(hour<12 && hour >=4)
    {
        message="this morning";
    }
    else if(hour<=18 && hour >=12)
    {
        message="today";
    }
	else if(hour<=22 && hour >=18)
    {
        message="this evening";
    }
    else if(hour<=4 && hour >=22)
    {
        message="%tonight%";
    }
	DMessage("GeneralTime: end");
	return message;
}