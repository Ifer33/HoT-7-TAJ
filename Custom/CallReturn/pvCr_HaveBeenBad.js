DMessage("pvCR_HaveBeenBad: Beginnning");
main();
DMessage("pvCR_HaveBeenBad: end");
function main()
{
    CMessage("That sounds serious, %Name%");
    CMessage("What have you done that\'s so bad?");
    wait(15);
    CMessage("Hmm, let me know when you\'ve got something interesting to tell me, %PetName%");
    return;
}