DMessage("AV_RND12: start");
main();
DMessage("AV_RND12: end");
function main()
{
    CMessage("You need training.");
    setTempVar("AV_0RND12", true);
    if(getVar("av_fetish_rough", false))
    {
        CMessage("Severe, strict training.");
    }
    CMessage("I am going to continue this regime");
    CMessage("until your orgasms are completely and utterly under my control.");
    CMessage("I am going to tell you precisely how I want you to");
    if(getVar("av_fetish_rough", false))
    {
        CMessage("torture and tease your cock and balls");
    }
    if(!getVar("av_fetish_rough", false))
    {
        CMessage("tease your cock and balls");
    }
    CMessage("and then keep you tetering on the edge of cumming for as long as possible");
    if (getOrgasmChance() == 0)
    {
        CMessage("before finally denial you to cum for me.");
    }
    if (getOrgasmChance() <= 25 || (getOrgasmChance() >= 25 && getOrgasmChance() <= 75))
    {
        CMessage("before maybe allowing you to cum for me.");
    }
    if (getOrgasmChance() >= 75 || )
    {
        CMessage("before finally allowing you to cum for me.");
    }
    return;
}