DMessage("AV_AddCrush: start");
main();
DMessage("AV_AddCrush: end");
function main()
{
    if (isStroking())
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
}
function Sub_Stroking()
{
    CMessage("%stopstroking%", 0);
    stopStroking();
    Sub_Not_Stroking();
}
function Sub_Not_Stroking()
{
    CMessage("So, we have a new crush, %PetName%?");
    if(getVar("AV_Know_59", false))
    {
        AV_Know_59();
        return;
    }
    if(getVar("AV_Know_58", false))
    {
        AV_Know_58();
        return;
    }
    if(getVar("AV_Know_57", false))
    {
        AV_Know_57();
        return;
    }
    if(getVar("AV_Know_56", false))
    {
        AV_Know_56();
        return;
    }
    if(getVar("AV_Know_55", false))
    {
        AV_Know_55();
        return;
    }
    if(getVar("AV_Know_54", false))
    {
        AV_Know_54();
        return;
    }
    if(getVar("AV_Know_53", false))
    {
        AV_Know_53();
        return;
    }
    if(getVar("AV_Know_52", false))
    {
        AV_Know_52();
        return;
    }
    if(getVar("AV_Know_51", false))
    {
        AV_Know_51();
        return;
    }
    if(getVar("AV_Know_50", false))
    {
        AV_Know_50();
        return;
    }
    CMessage("What is her name?");
    setVar("AV_Persona50", createInput().getAnswer());
    CMessage("Hmm...make sure to put at least 10 %Pictures% of her in the folder TeaseAI\Images\av_imagens\10\ ");
	setVar("AV_Know_50", true);
    return;
    AV_Know_50();
}
function AV_Know_50()
{
    CMessage("What\'s her name?");
    setVar("AV_Persona51", createInput().getAnswer());
    CMessage("make sure to put at least 10 %Pictures% of her in the folder TeaseAI\Images\av_imagens\11\ ");
	setVar("AV_Know_51", true);
    return;
    AV_Know_51();
}
function AV_Know_51()
{
    CMessage("What is her name?");
    setVar("AV_Persona52", createInput().getAnswer());
    CMessage("make sure to have at least 10 %Pictures% of her in the folder TeaseAI\Images\av_imagens\12\ ");
	setVar("AV_Know_52", true);
    return;
    AV_Know_52();
}
function AV_Know_52()
{
    CMessage("What\'s her name?");
    setVar("AV_Persona53", createInput().getAnswer());
    CMessage("make sure to put at least 10 %Pictures% of her in the folder TeaseAI\Images\av_imagens\13\ ");
	setVar("AV_Know_53", true);
    return;
    AV_Know_53();
}
function AV_Know_53()
{
    CMessage("What is her name?");
    setVar("AV_Persona54", createInput().getAnswer());
    CMessage("make sure to have at least 10 %Pictures% of her in the folder TeaseAI\Images\av_imagens\14\ ");
	setVar("AV_Know_54", true);
    return;
    AV_Know_54();
}
function AV_Know_54()
{
    CMessage("What\'s her name?");
    setVar("AV_Persona55", createInput().getAnswer());
    CMessage("make sure to put at least 10 %Pictures% of her in the folder TeaseAI\Images\av_imagens\15\ ");
	setVar("AV_Know_55", true);
    return;
    AV_Know_55();
}
function AV_Know_55()
{
    CMessage("What is her name?");
    setVar("AV_Persona56", createInput().getAnswer());
    CMessage("make sure to have at least 10 %Pictures% of her in the folder TeaseAI\Images\av_imagens\16\ ");
	setVar("AV_Know_56", true);
    return;
    AV_Know_56();
}
function AV_Know_56()
{
    CMessage("What\'s her name?");
    setVar("AV_Persona57", createInput().getAnswer());
    CMessage("make sure to put at least 10 %Pictures% of her in the folder TeaseAI\Images\av_imagens\17\ ");
	setVar("AV_Know_57", true);
    return;
    AV_Know_57();
}
function AV_Know_57()
{
    CMessage("What is her name?");
    setVar("AV_Persona58", createInput().getAnswer());
    CMessage("make sure to have at least 10 %Pictures% of her in the folder TeaseAI\Images\av_imagens\18\ ");
	setVar("AV_Know_58", true);
    return;
    AV_Know_58();
}
function AV_Know_58()
{
    CMessage("What is her name?");
    setVar("AV_Persona59", createInput().getAnswer());
    CMessage("make sure to have at least 10 %Pictures% of her in the folder TeaseAI\Images\av_imagens\18\ ");
	setVar("AV_Know_59", true);
    CMessage("This is the last one, we cant add any more.");
    return;
    AV_Know_59();
}
function AV_Know_59()
{
    CMessage("Sorry %SubName%, no more girls to tease you.");
    CMessage("10 it\'s enough");
    return;
}