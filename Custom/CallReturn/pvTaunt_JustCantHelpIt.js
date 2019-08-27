DMessage("pvTaunt_JustCantHelpIt: Beginning");
main();
DMessage("pvTaunt_JustCantHelpIt: End");
function main()
{
    CMessage("You can\'t help getting all horny and hard");
    CMessage("I can\'t say I blame you, %Name%");
	showTaggedImage(4,["ONEFEMALE"]);
	lockImages();
    //--Command:ImageTag(SoloF)
    CMessage("There are just so many hot girls out there");
    showTaggedImage(4,["ONEFEMALE"]);
    CMessage("Girls you want but can never have");
    showTaggedImage(4,["ONEFEMALE"]);
    CMessage("Each and every one of them makes you weak...");
    showTaggedImage(4,["ONEFEMALE"]);
    CMessage("And horny...");
    showTaggedImage(4,["ONEFEMALE"]);
    CMessage("And eager to stroke your %Cock%");
	unlockImages();
    CMessage("%StrokeFaster%");
    speedUpStroking(3);
    return;
}