function domHonorificVocabulary()
{
	DMessage("DomHonorific: start");
	let message = getVar("DomHonorific",false);
    if(message==false)
    {
        message="Mistress";
    }
	DMessage("DomHonorific: end");
	return message;
}