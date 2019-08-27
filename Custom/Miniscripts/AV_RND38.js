DMessage("AV_RND38: start");
main();
DMessage("AV_RND38: end");
function main()
{
    addContact(3);
    SMessage("Hey %DomName%", -1, 3);
    setTempVar("AV_0RND38", true);
    SMessage("Do you have my copy of 50 Shade Of Grey?", -1, 3);
    CMessage("No I don\'t think so");
    SMessage("Damn I can\'t seem to find it", -1, 3);
    SMessage("I think I loaned it to someone, but I can\'t remember who %EmoteSad%", -1, 3);
    CMessage("%SubName%, slow down those strokes");
    slowStroking(3);
    SMessage("Anyway, I already ready 3 times so maybe I should find something else to read", -1, 3);
    SMessage("Got any tips, %ShortName%?", -1, 3);
    CMessage("It\'s not really my thing TBH, though maybe I\'d  be interested if the roles were reversed");
    CMessage("Then again, I\'ve got the real thing right here %Laugh%");
    CMessage("Speed up a little bit again, %SubName%");
    SMessage("Maybe you should write a book about your experiences with %SubName%", -1, 3);
    SMessage("You could call it 50 Shades Of Blue Balls, or something like that", -1, 3);
    CMessage("%Lol%");
    CMessage("Actually, that\'s not a bad idea...");
    CMessage("If I could torment %SubName% and also make money off of it, that would be perfect!");
    SMessage("Now, if only you had some writing talent... %EmoteWink%", -1, 3);
    CMessage("Ouch %Laugh%");
    CMessage("I do think I\'ve got a talent for tormenting boys, so there\'s that");
    SMessage("You should probably focus on that, maybe shelve the writing plans for now", -1, 3);
    CMessage("You\'re probably right about that %Smile%");
    removeContact(3);
    CMessage("Stroke faster, %PetName%");
    speedUpStroking(3);
    return;
}