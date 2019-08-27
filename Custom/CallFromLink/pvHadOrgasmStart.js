DMessage("pvHadOrgasmStart: start");
main();
DMessage("pvHadOrgasmStart: end");
function main()
{
    let answer0 = getInput("So... you had an orgasm without my permission?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage(random("Hmm", "Tsk tsk", "Ooohh", "Well", "My my"));
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Oh, I... must have misunderstood then");
        must_have_misunderstood();
        return;
    }
    had_an_orgasm();
}
function had_an_orgasm()
{
    if(getVar("pvOrgasmControl", false))
    {
        run("Custom" + java.io.File.separator + "CallReturn" + java.io.File.separator + "pvCr_OrgasmControlReset.js");
    }
    CMessage("I don\'t like it when you cum without my permission, %SubName%");
    if(getVar("pthevCompleteControlYES", false))
    {
        pthevCompleteControlYES();
        return;
    }
    CMessage("At least decided to do the right thing and told me");
    CMessage("So obviously you understand you\'ve made a mistake");
    CMessage("And I must say, that makes me very happy %Smile%");
    increaseAnger(-3)
    CMessage("It shows me that you are willing to be a better sub for me");
    CMessage("So %SubName%...");
    CMessage("What if from now on, you give me control over all your masturbation habits");
    CMessage("Not just when you come to me for a session");
    CMessage("I want to know that you #JerkOff <i>only</i> when I say you can");
    let answer0 = getInput("Are you willing to do that?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesOrNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("Hmm... that\'s a good %PetName%");
        delVar("pthevCompleteControlNO");
        setVar("pthevCompleteControlYES", true);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("Okay... but then there\'s also no point in telling me you\'ve been %JerkingOff% %SubName%");
        must_have_misunderstood();
        return;
    }
    CMessage("That\'s how deep you\'ve fallen into my control %Smile%");
    CMessage("From now on, your %Cock% fully and truly belongs to me");
    CMessage("You are not allowed to touch it unless you have my permission");
    CMessage("It may be difficult sometimes, but %SubName%...");
    CMessage("It\'s worth it %Smile%");
    CMessage("Because more and more you are becoming what you truly are");
    CMessage("A submissive who will do anything that I ask");
    must_have_misunderstood();
}
function must_have_misunderstood()
{
    //CMessage("%StartStroking%");
    Stroking();
    return;
    pthevCompleteControlYES();
}
function pthevCompleteControlYES()
{
    if(getVar("pthevLongDenialActive", false))
    {
        pthevLongDenialActive();
        return;
    }
    CMessage("You\'re a bad %PetName%");
    CMessage("And you know what happens when you are bad, don\'t you?");
    CMessage("You get punished...");
    run("Interrupt" + separator + "pvInt_Punishment.js");
    return;
    pthevLongDenialActive();
}
function pthevLongDenialActive()
{
    delVar("pthevLongDenialActive");
    setVar("pthevLongDenialEnded", true);
    //--Command:RestrictOrgasm(1 second)
	restrictOrgasm(1, "second");
    setDate("pvRenewLDA")
    if(getVar("pvLDASecondWeek", false))
    {
        pvLDASecondWeek();
        return;
    }
    CMessage("Especially since you were not supposed to cum at all this week");
    CMessage("Apparently you were not ready for it");
    CMessage("I should have known... %EmoteSad%");
    CMessage("Maybe we should try that again some other day");
    CMessage("When you've learned what it means to <i>truly</i> submit");
    CMessage("For now, a punishment will have to do");
    run("Interrupt" + separator + "pvInt_Punishment.js");
    return;
    pvLDASecondWeek();
}
function pvLDASecondWeek()
{
    CMessage("I guess two weeks of denial was just too much to ask");
    CMessage("I should have known, really");
    CMessage("So some the blame is on me, I guess");
    CMessage("<i>I</i> am the one who owns <i>you</i> after all");
    CMessage("And you can\'t deny a masturbation junkie the one thing he loves");
    CMessage("I should have known that");
    CMessage("So I\'m not mad, %SubName%");
    CMessage("Disappointed, yes, but not angry");
    CMessage("I\'m not even going to punish you");
    run("Interrupt" + separator + "pvIn_General.js");
    return;
}