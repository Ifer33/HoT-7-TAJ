DMessage("Short14: start");
main();
DMessage("Short14: end");
function main()
{
    CMessage("Yes, you have one purpose in your life.");
    let answer0 = getInput("Do you know what it is?", 8);
    if (answer0.isTimeout())
    {
        a28hd83jc();
        return;
    }
    while (!(answer0.isLike("yes") || answer0.isLike("no") || answer0.isLike(" I dont know") || answer0.isLike("dont") || answer0.isLike("serve") || answer0.isLike("obey") || answer0.isLike("you")))
    {
		if (answer0.isLike("yes"))
		{
			answer0 = getInput("And, what is?");
		}else{
			answer0 = getInput("What is your purpose in life, %SubName%?");
		}
    }
	if (answer0.isLike("no", " I dont know", "dont"))
    {
    }
    else if (answer0.isLike("serve", "obey", "you"))
    {
        CMessage("%GoodBoy%");
        a11jjee();
        return;
    }
    a28hd83jc();
}
function a28hd83jc()
{
    CMessage("It\'s simple, your purpose is to serve me.");
    a11jjee();
}
function a11jjee()
{
    CMessage("You are a slave acting in my interest.");
    if(getVar("AV_TotalControl", false))
    {
        CMessage("Your free will is an illusion. Everything you do, you do it for me. You do it because I allow you to.");
    }
    return;
}