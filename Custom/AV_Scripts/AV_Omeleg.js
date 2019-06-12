DMessage("AV_Omeleg: start");
main();
DMessage("AV_Omeleg: end");
function main()
{
    if (isStrokingAll())
    {
        Sub_Stroking();
        return;
    }
    else
    {
        Sub_Not_Stroking();
        return;
    }
    Sub_Stroking();
	return;
}
function Sub_Stroking()
{
    CMessage("%stopstroking%", 0);
    stopStrokingAll();
    Sub_Not_Stroking();
	return;
}
function Sub_Not_Stroking()
{
    CMessage("%SubName%");
    if(getVar("AV_AskedHumGilrs", false))
    {
        AV_AskedHumGilrs();
        return;
    }
    CMessage("I know you are devoted to me and do as I say.");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("and like to be put in your place");
    }
    if(getVar("av_fetish_pain", false))
    {
        CMessage("and it\'s a painslut");
    }
    CMessage("That make me happy.");
    let answer0 = getInput("You want to make me happy, right?", 5);
    if (answer0.isTimeout())
    {
        AV_Timeo233();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Good%");
    }
    else if (answer0.isLike("no"))
    {
        CMessage("You don\'t?");
    }
    AV_Timeo233();
	return;
}
function AV_Timeo233()
{
    CMessage("I already exposed you to my Glitter friends");
    CMessage("What I want to know now");
    CMessage("If you would allow me to expose you to other girls...");
    CMessage("Before you answer, you need to know they are not like my friends...");
    CMessage("Some of them are real Dominatrix...");
    CMessage("Others want just to see a guy doing anything they said...");
    CMessage("So, this can be more humiliating than you\'re used to...");
    let answer0 = getInput("Do you want to try?");
    while (!(answer0.isLike("yes") || answer0.isLike("no")))
    {
        answer0 = getInput("%YesorNo%");
    }
    if (answer0.isLike("yes"))
    {
        CMessage("%Good%");
        setVar("av_fetish_humiliating", true);
    }
    else if (answer0.isLike("no"))
    {
        CMessage("It\'s OK...");
        NoHumil();
        return;
    }
    setVar("AV_AskedHumGilrs", true);
    AV_AskedHumGilrs();
	return;
}
function AV_AskedHumGilrs()
{
    CMessage("%AV_PickGirls%");
    SMessage("%AV_GirlName% has joined the chat room...");
    setVar("AV_OmelegComplete", random(8,9));
    setVar("AV_CalcOme", 0);
    AV_Omeleg();
	return;
}
function AV_Omeleg()
{
    setVar("AV_Omeleg", 0);
    setVar("AV_OmelegTarget", random(2,4));
    AV_Start();
	return;
}
function AV_Start()
{
    //--UNINTERPRETED LINE:@SystemMessage <Font color="green"> %AV_GirlName% :</Font> %AV_ShowOmelegPics% <Font color="black" size="4"> %AV_OmLegStroke% </Font> @ChangeVar[AV_Omeleg]=[AV_Omeleg]+[1]  @Chance35(AV_OM_NoEdge1)
	SMessage("<c=green b> %AV_GirlName% :%AV_ShowOmelegPics% <c=black b>%AV_OmLegStroke%");
	setVar("AV_Omeleg",getVar("AV_Omeleg",0)+1 );
	if(randomInt(1,100)<35 ){
		AV_OM_NoEdge1();
		return;
	}
    //--UNINTERPRETED LINE:@SystemMessage <Font color="green"> %AV_GirlName% :</Font> <Font color="black"> %Edge% </Font> %AV_ShowOmelegPics%  @EdgeMode(Goto, AV_OM_NoEdge1) @sleep( %Random%(10, 15))
	setEdgeMode("Goto","AV_OM_NoEdge1()");
	SMessage("<c=green b> %AV_GirlName% : %AV_ShowOmelegPics% <c=black b>%Edge%");
	sleep(randomInt(10,15) );
    //--UNINTERPRETED LINE:@SystemMessage <Font color="green"> %AV_GirlName% :</Font> <Font color="black" size="4"> @RT(C'mon %SubName%,, don't you want to get close for me?, You should be edging for me much quicker than this %SubName%, I know you can get there faster than this %Slave%) </Font> %AV_ShowOmelegPics% @sleep( %Random%(10, 15))
	SMessage("<c=green b> %AV_GirlName% : %AV_ShowOmelegPics% <c=black b>"+random("C'mon %SubName%, don't you want to get close for me?", "You should be edging for me much quicker than this %SubName%", "I know you can get there faster than this %Slave%"));
	sleep(randomInt(10,15) );
    //--UNINTERPRETED LINE:@SystemMessage <Font color="green"> %AV_GirlName% :</Font> <Font color="black" size="4"> @RT(Hurry up and get close for me, I hope you're not let letting yourself get distracted over there, Faster %SubName%,, I want you on that edge right now) </Font> %AV_ShowOmelegPics% @sleep( %Random%(10, 15))
	SMessage("<c=green b> %AV_GirlName% : %AV_ShowOmelegPics% <c=black b>"+random("Hurry up and get close for me", "I hope you're not let letting yourself get distracted over there", "Faster %SubName%, I want you on that edge right now"));
	sleep(randomInt(10,15) );
    //--UNINTERPRETED LINE:@SystemMessage <Font color="green"> %AV_GirlName% :</Font> <Font color="black" size="4"> @RT(I know you can edge quicker than this, Focus %SubName%,, I want you on that edge) </Font> %AV_ShowOmelegPics% @sleep( %Random%(10, 15))
	SMessage("<c=green b> %AV_GirlName% : %AV_ShowOmelegPics% <c=black b>"+random("I know you can edge quicker than this", "Focus %SubName%, I want you on that edge"));
	sleep(randomInt(10,15) );
    AV_OM_NoEdge1();
	return;
}
function AV_OM_NoEdge1()
{
    //--UNINTERPRETED LINE:@SystemMessage <Font color="green"> %AV_GirlName% :</Font> <Font color="black" size="4"> %Stop% </Font> %AV_ShowOmelegPics% @EdgeMode(Normal)
	setEdgeMode("Normal");
	SMessage("<c=green b> %AV_GirlName% : %AV_ShowOmelegPics% <c=black b>%Stop%");
	stopAudio();
    //--UNINTERPRETED LINE:@Flag(av_fetish_pain) @SystemMessage <Font color="green"> %AV_GirlName% :</Font> <Font color="black" size="4"> @RT(Spank, Hit) your @RT(balls, testicles) </Font>  %AV_ShowOmelegPics% @PlayAudio[tease\spank\Spank*.mp3] @sleep(15)
	if(getVar("av_fetish_pain",false) ){
		SMessage("<c=green b> %AV_GirlName% : %AV_ShowOmelegPics% <c=black b>"+random("Spank", "hit")+" your "+random("balls","testicles"));
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Spank*.mp3");
		sleep(15);
	}
    //--UNINTERPRETED LINE:@SystemMessage <Font color="green"> %AV_GirlName% :</Font> <Font color="black" size="4"> @RT(On your knees, Get on your knees, Stand up, Stand) </Font>  %AV_ShowOmelegPics% @sleep(10)
	SMessage("<c=green b> %AV_GirlName% : %AV_ShowOmelegPics% <c=black b>"+random("On your knees", "Get on your knees", "Stand up", "Stand"));
	sleep(10);
    //--UNINTERPRETED LINE:%AV_ShowOmelegPics% @SystemMessage <Font color="green"> %AV_GirlName% :</Font> <Font color="black" size="4"> %AV_OmLegStroke% </Font>  @Chance40(AV_OM_NoEdge2)
	SMessage("<c=green b> %AV_GirlName% :%AV_ShowOmelegPics% <c=black b>%AV_OmLegStroke%");
	if(randomInt(1,100)<40 ){
		AV_OM_NoEdge2();
		return;
	}
    //--UNINTERPRETED LINE:@SystemMessage <Font color="green"> %AV_GirlName% :</Font> <Font color="black" size="4"> %Edge%  </Font> %AV_ShowOmelegPics%  @EdgeMode(Goto, AV_OM_NoEdge2) @sleep( %Random%(10, 15))
	setEdgeMode("Goto","AV_OM_NoEdge2()");
	SMessage("<c=green b> %AV_GirlName% : %AV_ShowOmelegPics% <c=black b>%Edge%");
	sleep(randomInt(10,15) );
    //--UNINTERPRETED LINE:@SystemMessage <Font color="green"> %AV_GirlName% :</Font> <Font color="black" size="4"> @RT(C'mon %SubName%,, don't you want to get close for me?, You should be edging for me much quicker than this %SubName%, I know you can get there faster than this %Slave%) </Font> %AV_ShowOmelegPics% @sleep( %Random%(10, 15))
	SMessage("<c=green b> %AV_GirlName% : %AV_ShowOmelegPics% <c=black b>"+random("C'mon %SubName%, don't you want to get close for me?", "You should be edging for me much quicker than this %SubName%", "I know you can get there faster than this %Slave%"));
	sleep(randomInt(10,15) );
    //--UNINTERPRETED LINE:@SystemMessage <Font color="green"> %AV_GirlName% :</Font> <Font color="black" size="4"> @RT(Hurry up and get close for me, I hope you're not let letting yourself get distracted over there, Faster %SubName%,, I want you on that edge right now) </Font> %AV_ShowOmelegPics% @sleep( %Random%(10, 15))
	SMessage("<c=green b> %AV_GirlName% : %AV_ShowOmelegPics% <c=black b>"+random("Hurry up and get close for me", "I hope you're not let letting yourself get distracted over there", "Faster %SubName%, I want you on that edge right now"));
	sleep(randomInt(10,15) );
    //--UNINTERPRETED LINE:@SystemMessage <Font color="green"> %AV_GirlName% :</Font> <Font color="black" size="4"> @RT(I know you can edge quicker than this, Focus %SubName%,, I want you on that edge) </Font> %AV_ShowOmelegPics% @sleep( %Random%(10, 15))
	SMessage("<c=green b> %AV_GirlName% : %AV_ShowOmelegPics% <c=black b>"+random("I know you can edge quicker than this", "Focus %SubName%, I want you on that edge"));
	sleep(randomInt(10,15) );
    AV_OM_NoEdge2();
	return;
}
function AV_OM_NoEdge2()
{
    //--UNINTERPRETED LINE:@SystemMessage <Font color="green"> %AV_GirlName% :</Font> <Font color="black" size="4"> %Stop%  </Font> %AV_ShowOmelegPics% @EdgeMode(Normal)
	setEdgeMode("Normal");
	SMessage("<c=green b> %AV_GirlName% : %AV_ShowOmelegPics% <c=black b>%Stop%");
	stopAudio();
    //--UNINTERPRETED LINE:@Flag(av_fetish_pain) @SystemMessage <Font color="green"> %AV_GirlName% :</Font> <Font color="black" size="4"> @RT(Spank, Hit) your @RT(butt, ass)  </Font> %AV_ShowOmelegPics% @PlayAudio[tease\spank\Spank*.mp3] @sleep(15)
	if(getVar("av_fetish_pain",false) ){
		SMessage("<c=green b> %AV_GirlName% : %AV_ShowOmelegPics% <c=black b>"+random("Spank", "hit")+" your "+random("balls","testicles"));
		playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "spank" + java.io.File.separator + "Spank*.mp3");
		sleep(15);
	}
    //--UNINTERPRETED LINE:@SystemMessage <Font color="green"> %AV_GirlName% :</Font> <Font color="black" size="4"> %SitDown%  </Font> %AV_ShowOmelegPics% @DeleteFlag(AV_OmStrokeNumber) @DeleteFlag(AV_OmStrokeBeat) @DeleteFlag(AV_OmStrokeSimple) @DeleteFlag(AV_OmStrokeOver)
	SMessage("<c=green b> %AV_GirlName% : %AV_ShowOmelegPics% <c=black b>%SitDown%");
	delVar("AV_OmStrokeNumber");
    delVar("AV_OmStrokeBeat");
    delVar("AV_OmStrokeSimple");
    delVar("AV_OmStrokeOver");
    //--UNINTERPRETED LINE:@SystemMessage <Font color="green"> %AV_GirlName% :</Font> <Font color="black" size="4"> %AV_OmLegTaunts%  </Font> %AV_ShowOmelegPics%
	SMessage("<c=green b> %AV_GirlName% : %AV_ShowOmelegPics% <c=black b>%AV_OmLegTaunts%");
    if (getVar("AV_Omeleg", 0) == getVar("AV_OmelegTarget", 0))
    {
        Enough();
        return;
    }
    AV_Start();
    return;
    Enough();
}
function Enough()
{
    setVar("AV_CalcOme", getVar("AV_CalcOme", 0) + getVar("AV_Omeleg", 0));
    if (getVar("AV_CalcOme", 0) >= getVar("AV_OmelegComplete", 0))
    {
        EndOme();
        return;
    }
    delVar("AV_GirlErina");
    delVar("AV_GirlKris");
    delVar("AV_GirlMandy");
    delVar("AV_GirlCarolinne");
    delVar("AV_GirlNelly");
    CMessage("I think " + random("you need ", "I want more ") + "humiliating");
    CMessage("%AV_PickGirls%");
    AV_Omeleg();
    return;
    EndOme();
}
function EndOme()
{
    CMessage("%ThatsEnough%");
    return;
    NoHumil();
}
function NoHumil()
{
    CMessage("Let\'s try other things...");
    return;
}