function domHonnorificVocabulary()
{
	DMessage("DomHonnorific: start");
	let message = getVar("DomHonnorific",false);
    if(message==false)
    {
        message="Mistress";
    }
	DMessage("DomHonnorific: end");
	return message;
}