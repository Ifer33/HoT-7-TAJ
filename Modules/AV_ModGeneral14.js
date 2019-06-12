DMessage("AV_ModGeneral14: start");
main();
DMessage("AV_ModGeneral14: end");
function main()
{
    if(getVar("AV_ModGeneral14_NotFirstTime", false))
    {
        AV_ModGeneral14_NotFirstTime();
        return;
    }
    setVar("AV_ModGeneral14", 0);
    setVar("AV_ModGeneral14_NotFirstTime", true);
    AV_ModGeneral14_NotFirstTime();
}
function AV_ModGeneral14_NotFirstTime()
{
    if (getVar("AV_ModGeneral14", 0) == 0)
    {
        Part1_1();
        return;
    }
    if (getVar("AV_ModGeneral14", 0) == 1)
    {
        Part1_2();
        return;
    }
    if (getVar("AV_ModGeneral14", 0) == 10)
    {
        Part1_3();
        return;
    }
    if (getVar("AV_ModGeneral14", 0) == 100)
    {
        Part1_4();
        return;
    }
    if (getVar("AV_ModGeneral14", 0) == 1000)
    {
        Part1_5();
        return;
    }
    if (getVar("AV_ModGeneral14", 0) == 11)
    {
        Part1_6();
        return;
    }
    if (getVar("AV_ModGeneral14", 0) == 101)
    {
        Part1_7();
        return;
    }
    if (getVar("AV_ModGeneral14", 0) == 111)
    {
        Part1_8();
        return;
    }
    if (getVar("AV_ModGeneral14", 0) == 110)
    {
        Part1_9();
        return;
    }
    if (getVar("AV_ModGeneral14", 0) == 1001)
    {
        Part1_10();
        return;
    }
    if (getVar("AV_ModGeneral14", 0) == 1011)
    {
        Part1_11();
        return;
    }
    if (getVar("AV_ModGeneral14", 0) == 1111)
    {
        Part1_12();
        return;
    }
    if (getVar("AV_ModGeneral14", 0) == 1010)
    {
        Part1_13();
        return;
    }
    if (getVar("AV_ModGeneral14", 0) == 1110)
    {
        Part1_14();
        return;
    }
    if (getVar("AV_ModGeneral14", 0) == 1100)
    {
        Part1_15();
        return;
    }
    if (getVar("AV_ModGeneral14", 0) == 1101)
    {
        Part1_16();
        return;
    }
    setVar("AV_ModGeneral14", 0);
    Part1_1();
    return;
    Mod1();
}
function Mod1()
{
    setVar("AV_ModGeneral14", getVar("AV_ModGeneral14", 0) + 1);
    Modulo1();
    return;
    Mod2();
}
function Mod2()
{
    setVar("AV_ModGeneral14", getVar("AV_ModGeneral14", 0) + 10);
    Modulo2();
    return;
    Mod3();
}
function Mod3()
{
    setVar("AV_ModGeneral14", getVar("AV_ModGeneral14", 0) + 100);
    Modulo3();
    return;
    Mod4();
}
function Mod4()
{
    setVar("AV_ModGeneral14", getVar("AV_ModGeneral14", 0) + 1000);
    Modulo4();
    return;
    Part1_1();
}
function Part1_1()
{
    switch(random("Mod1", "Mod2", "Mod3", "Mod4"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_2();
}
function Part1_2()
{
    switch(random("Mod2", "Mod3", "Mod4"))
    {
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_3();
}
function Part1_3()
{
    switch(random("Mod1", "Mod3", "Mod4"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_4();
}
function Part1_4()
{
    switch(random("Mod1", "Mod2", "Mod4"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_5();
}
function Part1_5()
{
    switch(random("Mod1", "Mod2", "Mod3"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
    }
    Part1_6();
}
function Part1_6()
{
    switch(random("Mod3", "Mod4"))
    {
        case "Mod3":
        Mod3();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_7();
}
function Part1_7()
{
    switch(random("Mod2", "Mod4"))
    {
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_8();
}
function Part1_8()
{
    Mod4();
    return;
    Part1_9();
}
function Part1_9()
{
    switch(random("Mod1", "Mod4"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod4":
        Mod4();
        return;
        break;
    }
    Part1_10();
}
function Part1_10()
{
    switch(random("Mod2", "Mod3"))
    {
        case "Mod2":
        Mod2();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
    }
    Part1_11();
}
function Part1_11()
{
    Mod3();
    return;
    Part1_12();
}
function Part1_12()
{
    Fim();
    return;
    Part1_13();
}
function Part1_13()
{
    switch(random("Mod1", "Mod3"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod3":
        Mod3();
        return;
        break;
    }
    Part1_14();
}
function Part1_14()
{
    Mod1();
    return;
    Part1_15();
}
function Part1_15()
{
    switch(random("Mod1", "Mod2"))
    {
        case "Mod1":
        Mod1();
        return;
        break;
        case "Mod2":
        Mod2();
        return;
        break;
    }
    Part1_16();
}
function Part1_16()
{
    Mod2();
    return;
    Fim();
}
function Fim()
{
    setVar("AV_ModGeneral14", 0);
    run("Modules" + java.io.File.separator + "*.js");
    return;
    return;
    Modulo1();
}
function Modulo1()
{
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    CMessage("Oh my good boy.");
    CMessage("I know how much you want to give yourself to me totally.");
    CMessage("And that makes me so happy.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Now, since you are so obedient, you are going to edge for me");
    CMessage("and hold it on edge for as long as I want to keep you there.");
    CMessage(random("You will beg", "You will suffer"));
    CMessage(random("You are mine", "You pledged yourself to me", "Being my good boy is a privilege"));
    CMessage("You want to please me, don\'t you?");
    CMessage("I love to hear you beg and beg to cum, and to hear you suffer.");
    CMessage("And then to moan as you stroke.");
    CMessage("Then when your arousal is so intense,");
    CMessage("and I have been satisfied listening to you beg,");
    CMessage("you will let go of your cock.");
    CMessage("At that last moment, right as " + random("your cock starts to twitch and spasm", "the point you want to cum so so so much"));
    CMessage("we will take away all contact with your %Cock%");
    CMessage("and we will watch you dribble.");
    holdEdge();
    CMessage("Let me look at it... " + random("Hard", "Straining"));
    CMessage("Tense your muscles to make it harder.");
    CMessage("Begging to be touched isn\'t it?");
    CMessage("Now, good boy, take your cock in your hand.");
    CMessage("Grip it.");
    CMessage("That\'s my hand " + random("on your cock", "holding your cock and owning it"));
    CMessage("I rub my naked breasts on your back, and reach around to grasp your cock.");
    CMessage("As I whisper to you, lick your earlobe, and tell you to");
    CMessage("Fuck...my...hand.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage(random("Rock your hips", "Fuck your hand with your cock"));
    CMessage("Oh that\'s starting to feel good, isn\'t it.");
    CMessage("Now hands off.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    CMessage("You can\'t resist, you want to touch me, you want to touch your cock, don\'t you?");
    CMessage("Beg.");
    CMessage("Beg me to let you touch your cock.");
    CMessage("Wrap your fingers around it.");
    CMessage(random("Lightly", "Barely touching it"));
    CMessage("Stroke it.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("Lightly.");
    CMessage("Oh so gently.");
    CMessage("Beg me. Beg me to let you stroke your cock harder. Faster.");
    CMessage("No. Take your hand off of my cock.");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    CMessage("We\'re going to edge your cock.");
    CMessage("And I am going to pleasure myself.");
    CMessage("If I cum, that\'s for me, not for you.");
    CMessage("I get to cum. You don\'t.");
    CMessage("You get to edge.");
    CMessage("I enjoy your suffering for me.");
    CMessage("Such a good boy.");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("%GoodBoy%");
    CMessage("Now I\'m going to take advantage of watching you.");
    CMessage("You are so delicious, so obedient.");
    CMessage("I\'m going to touch my nipples.");
    CMessage("Imagine you get to lick them.");
    CMessage("And now my fingers wander to my clit.");
    CMessage("You will keep stroking, while I watch you.");
    CMessage("Let yourself into my pleasure.");
    CMessage("Feel my orgasm with me.");
    CMessage("Because it\'s the only one you\'ll get.");
    CMessage(random("Tell me how much you love ruining your orgasm - it makes me so hot", "Beg me to let you stroke faster...I love hearing you plead"));
    CMessage("I know " + random("It\'s so frustrating", "you want to orgasm"));
    CMessage("But you want to please me more than you want an orgasm, right?");
    CMessage(random("Beg me to let you ruin your orgasm. Yes I know. But not yet", "Oh I\'m so close. Only Mistress cums. Not you. You get the pleasure of pleasing me"));
    CMessage(random("Oh god yes. Feel it... Feel your cock throbbing", "Think about shooting that cum", "Think about what you\'re giving up for me"));
    CMessage("Oh I\'m getting so so so close.");
    holdEdge();
    CMessage("You\'ve been such a good boy, wouldn\'t it be a good reward to let you cum?");
    return;
    Modulo2();
}
function Modulo2()
{
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    CMessage("Now, stand up for me.");
    CMessage("We will be doing something different.");
    CMessage("When I said you need to follow instructions, this is what I meant.");
    CMessage("Now, I want you to hold this position until I say otherwise.");
    getLocalTeasePicture("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "positions" + java.io.File.separator + "stand" + java.io.File.separator + "*.jpg");
    sleep(15);
    CMessage("Do not move.");
    let answer0 = getInput("Does it make you uncomfortable, standing naked?",10);
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesBadResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoGoodResponse();
    }
    CMessage("I know it excites you.");
    CMessage("I know I said not to move a muscle, but... you can move your dominant hand and...");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Ahh, you\'re letting your posture slip a bit.");
    CMessage("Come now, your dick can stand at attention just fine, why not the rest of you?");
    CMessage("Hmm. You\'ve done quite well for me today.");
    CMessage("Stroke it for me.");
    CMessage(random("Run your hand up and down the length of it", "Feel your dick pulsing and throbbing", "Slowly stroke it from the tip on down to the base."));
    CMessage("There\'s something so thrilling about watching you like this.");
    CMessage("Keep stroking. You can go a bit faster now.");
    CMessage("Does that feel good? Doesn\'t it feel incredible to pleasure yourself?");
    let answer1 = getInput("Does it turn you on to know that I enjoy watching you, just like you\'re looking at me?",10);
    if (answer1.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer1.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("Oh, I\'m so close already. Are you close?");
	edge();
    CMessage("Now that\'s what I like to see.");
    CMessage("I Just want you to sit back and relax a moment as I explain our next exercise.");
    CMessage("We are going to be focusing on bringing your cock to being totaly sensitive.");
    CMessage("For now I want you to only touch the very tip with a single finger.");
    CMessage("Just keep touching the tip a little longer.");
    CMessage("What I want you to do now is turn your hand the other way around and grip the back side of your cock.");
    CMessage("Only I do not want your finger to wrap around the sensitive underside.");
    CMessage("Just grab along the spine of your cock and stroke slowly.");
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
	setStrokingNoTaunt();
    CMessage("Thats it! Not to fast, not too slow, just keep stroking the spine of your cock.");
    CMessage("I do not want your finger to wrap around the sensitive underside.");
    CMessage("Just grab along the spine of your cock and stroke slowly.");
    CMessage("And no cheeting now! Just the spine of your cock and not the underside.");
    CMessage("Stroke it nice and firmly up and down.");
    CMessage("Go as fast or as slow as it feels best but keep a good hard firm grip as you stroke.");
    CMessage("Oh I know you want your fingers wrapped all the way around your cock to stroke every inch of it.");
    CMessage("That is the whole point of this exercise.");
    CMessage("In fact I bet this is working better than you expected it to!");
    CMessage("That sweet spot that you are not touching now, is it getting more and more needy?");
    CMessage("I know it is!");
    CMessage("You just keep stroking the back side and no touching that sweet underside.");
    let answer2 = getInput("Is your cock twitching and wishing you would just wrap your fingers around the underside?",10);
    if (answer2.isLike("yes", "yea", "yep"))
    {
        aV_YesGoodResponse();
    }
    else if (answer2.isLike("no", "nope", "nah", "not"))
    {
        aV_NoBadResponse();
    }
    CMessage("Keep going, and no cheeting!");
    CMessage("Now stroke all the way down, stretch the skin of your cock as far as it will go and hold it there.");
    CMessage("Again, just stroke your cock all the way up and down the back side with a good firm hard grip.");
    CMessage("I bet this feels better than you thought it would.");
    CMessage("Yes your cock wants more now doesnt it?");
    CMessage("I know your cock is begging for that sweet spot to be petted and stroked but you just keep stroking the spine.");
    CMessage("Now wrap your hand all the way around your cock and stroke it one time all the way to the top and back down as slowly as you can");
    CMessage("%stopstroking%", 0);
	stopStrokingAll();
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    CMessage("I think your cock is ready to move on now.");
    return;
    Modulo3();
}
function Modulo3()
{
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    CMessage(random("%PetName%", "%SubName%"));
    CMessage("show me that cock of yours!");
    CMessage("Start stroking it!");
	setStrokingNoTaunt();
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
    CMessage("Only thing you have to do is stroke that cock");
    CMessage("As you can see we are all alone and no one will bother us.");
    CMessage("Just you and me and making your cock feel wonderful!");
    CMessage("I need to make your cock as hard as possible!");
    CMessage("So good so far, you just keep stroking that cock then.");
    CMessage("Just try not to get too excited!");
    CMessage("Oh! And I get to play too! You just stroke your cock and I get to play with my clit!");
    CMessage("So how is your cock holding up over there?");
    let answer0 = getInput("You are not edging yet are you?");
    if (answer0.isLike("yes", "yea", "yep"))
    {
        aV_YesBadResponse();
    }
    else if (answer0.isLike("no", "nope", "nah", "not"))
    {
        aV_NoGoodResponse();
    }
    CMessage("You might want to slow down more.");
    CMessage("I have lots of time yet to tease you and you are going to be here with me for a while.");
    CMessage("Slower!");
	slowStroking();
    CMessage("You do not want to be throbbing yet!");
    CMessage("I am going to make your cock so fucking hard you will not know what to do!");
    CMessage("I know you want to stroke your cock faster and faster!");
    CMessage("Do not do it! Nice and slow so you can keep going!");
    CMessage("Oh I know how badly you want to do more but for now just stroke that cock!");
    CMessage("We are going to have so much fun as you stroke your cock!");
    CMessage("Oh we have not even begun to have fun yet!");
    CMessage("You just stroke that cock nice and slow!");
    CMessage("Oh yes I can see how much your cock is enjoying you stroking it for me!");
    CMessage("It is quite obvious!");
    CMessage("Slower now! Nice and slow on that cock!");
    CMessage("You do not want to start throbbing now!");
    CMessage(random("Can you resist not stroking that cock hard and fast", "Can you resist trying to find the edge of orgasm"));
    CMessage("So far so good! Are you enjoying this as much as I am enjoying teasing your cock?");
    CMessage("Oh yes that makes my clit tingle! Just keep going nice and slow!");
    CMessage("I told you we were both going to have fun stroking!");
    CMessage("You stroking your cock, me stroking my clit!");
    CMessage("Oh I do hope you are not going too fast now! Is your cock enjoying this?");
    CMessage("You are doing pretty good so far. Just remember to go nice and slow and do not rush!");
    CMessage("You do know this is just going to get more and more difficult.");
    CMessage("I mean you just keep stroking your cock slower and slower trying not to edge.");
    CMessage("%stopstroking%", 0);
	stopStrokingAll();
    CMessage("I want you to just relax, spread your legs over the table");
    CMessage("And touch your nipples for me");
    CMessage("Yeah, keep your dick nice and hard as you touch your nipples");
    CMessage("Just taking our time as we go, no rushing, just enjoy this.");
    CMessage("I know I like it when my nipples are hard!");
    CMessage("Makes me really hot!");
    CMessage("Stop");
    //CMessage("%StartStroking%");
	setStrokingNoTaunt();
    CMessage("Now I get to see how long you can go on stroking that cock before you have to give up and rest again!");
    CMessage("Oh yes just stroke that cock good now for me!");
    CMessage("Yes just aim that nice thick cock right here as you stroke it for me!");
    CMessage(random("Can you hold back from the edge", "Can you resist the need to stroke faster"));
    CMessage("Oh yes! Watching your cock makes my pussy so needy too!");
    CMessage("Oh baby! Can you keep stroking without hitting the edge?");
    CMessage(random("Just keep stroking that hard fucking cock for me", "Stroke that cock good", "Make it throb for me"));
    CMessage(random("Remember to go slowly now! I just want you cock to be nice and hard", "Yes stroke that cock and keep it nice and hard for me"));
    CMessage("Dosnt that feel so good! Just stroking your cock as long as you can stand it!");
    CMessage("And stroke some more for me now! Make it feel so wonderful!");
    CMessage("Is you cock good and hard now after all this?");
    CMessage("I hope so! Yes keep stroking!");
    CMessage("almost done! Think you can hang in there a little longer?");
    CMessage("Yes just keep stroking it slower and slower!");
    CMessage("How fast can you stroke without edging?");
    CMessage("Come on we are almost done! Faster now!");
    CMessage("Oh fuck yes! Just a little longer!");
    CMessage("%stopstroking%", 0);
	stopStrokingAll();
    CMessage("Your cock is good and hard so I am done for now!");
    return;
    Modulo4();
}
function Modulo4()
{
    if (isStrokingAll())
    {
        CMessage("%stopstroking%", 0);
        stopStrokingAll();
    }
    CMessage(random("%PetName%", "%SubName%"));
    CMessage("Let your fingers drift down and cup over your cock.");
    CMessage("Keep it nice and warm");
    CMessage("And with your other hand cup your balls.");
    CMessage("Breath all the way in and out nice and slow.");
    CMessage("Take your time, just relax and breath as you touch yourself");
    CMessage("%Okay%, stop touching");
    CMessage(random("So what I want you to do is stroke your cock just how you like it and follow my instructions", "All I want right now is for you to stroke your dick nice and smoothly"));
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStroke.mp3");
	setStrokingNoTaunt();
    CMessage("While you can stroke your cock however you like, I want you to go " + random("Not to fast now", "just nice and slow", "slow enough not to bring yourself to the edge"));
    CMessage("If you do get to the edge then you let me know.");
    CMessage("We have such a long, long ways to go before we are done with your dick today.");
    CMessage("And trust me, we will be taking very good care of your dick today!");
    CMessage("So lets not rush through this, " + random("just nice and easy ", "Just nice and smooth up and down your cock ") + "enjoy this with me.");
    CMessage(random("No rushing", "just slowly enjoying the soft pleasures", "You just got to go slow for now and try not to come to the edge"));
    CMessage(random("Thats it! Just like that! Nice and easy", "Does that feel oh so good? Just go fast enough to make it feel wonderful"));
    CMessage(random("No need to rush anything just nice and slow", "All the way up to the tip and nice and smooth back down again"));
    CMessage(random("See how happy this makes your cock feel? I know it feels really good", "I want your dick to feel so good just enjoying all this attention I am giving it"));
    CMessage(random("Your cock is going to feel better and better", "That looks so good starting to make me want more too"));
    CMessage(random("I can see just how good this feels to your cock", "I dont want you getting too worked up"));
    CMessage("And you can stop.");
	stopStrokingAll();
    //playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cStop.mp3");
    CMessage("That should do well for now.");
    return;
}