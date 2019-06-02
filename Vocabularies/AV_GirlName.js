function AV_GirlNameVocabulary()
{
	DMessage("AV_GirlName: start");
    if(!getVar("AV_GirlErina", false) && !getVar("AV_GirlKris", false) && !getVar("AV_GirlMandy", false) && !getVar("AV_GirlNelly", false))
    {
        message="Carolinne";
    }
    if(!getVar("AV_GirlCarolinne", false) && !getVar("AV_GirlKris", false) && !getVar("AV_GirlMandy", false) && !getVar("AV_GirlNelly", false))
    {
        message="Erina";
    }
    if(!getVar("AV_GirlCarolinne", false) && !getVar("AV_GirlErina", false) && !getVar("AV_GirlMandy", false) && !getVar("AV_GirlNelly", false))
    {
        message="Kris";
    }
    if(!getVar("AV_GirlCarolinne", false) && !getVar("AV_GirlErina", false) && !getVar("AV_GirlKris", false) && !getVar("AV_GirlNelly", false))
    {
        message="Mandy";
    }
    if(!getVar("AV_GirlCarolinne", false) && !getVar("AV_GirlErina", false) && !getVar("AV_GirlKris", false) && !getVar("AV_GirlMandy", false))
    {
        message="Nelly";
    }
	DMessage("AV_GirlName: end");
	return message;
}