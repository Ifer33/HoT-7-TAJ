main();
//call api customTask(task = "Strokes", delay = 0, sender = -1, rounds = 3)
//see helperFunctions.js
//direct call will send only one line
function main(){
	DMessage("Strokes Task: Beginning");
	let answers = [ 
    [null,"Stroke 25 times " + random("in any way ", "however ") + "you " + random("want", "like"),null],
    [null,"Stroke 30 times " + random("in any way ", "however ") + "you " + random("want", "like"),null],
    [null,"Stroke 45 times " + random("in any way ", "however ") + "you " + random("want", "like"),null],
    [null,"Good boy, now give me 25 strokes...",null],
    [null,"Mmm good, give me 30 strokes now...",null],
    [null,"Alright %PetName% - now give me 45 strokes...",null],
    [null,"Stroke 10 times for this " + random("butt", "ass"),"showTaggedImage(4, [\"ass\"])"],
    [null,"Stroke 15 times for this " + random("butt", "ass"),"showTaggedImage(4, [\"ass\"])"],
    [null,"Stroke 20 times for this " + random("butt", "ass"),"showTaggedImage(4, [\"ass\"])"],
    [null,"Stroke 25 times for this " + random("butt", "ass"),"showTaggedImage(4, [\"ass\"])"],
    [null,"Stroke 30 times for this " + random("butt", "ass"),"showTaggedImage(4, [\"ass\"])"],
    [null,"Stroke 10 times for these " + random("boobs", "tits", "breasts"),"showTaggedImage(4, [\"boobs\"]"],
    [null,"Stroke 15 times for these " + random("boobs", "tits", "breasts"),"showTaggedImage(4, [\"boobs\"]"],
    [null,"Stroke 20 times for these " + random("boobs", "tits", "breasts"),"showTaggedImage(4, [\"boobs\"]"],
    [null,"Stroke 25 times for these " + random("boobs", "tits", "breasts"),"showTaggedImage(4, [\"boobs\"]"],
    [null,"Stroke 30 times for these " + random("boobs", "tits", "breasts"),"showTaggedImage(4, [\"boobs\"]"],
    [null,"A girl this pretty deserves a lot of strokes, give her 50 %PetName%","showTaggedImage(4, [\"onefemale\"]"],
    [null,"Give her 30 strokes...","showTaggedImage(4, [\"onefemale\"])"],
    [null,"Stroke 25 times as you stare at this girl","showTaggedImage(4, [\"onefemale\"])"],
    [null,"Go ahead and stroke that %Cock% 40 times for her","showTaggedImage(4, [\"onefemale\"])"],
    [null,"I want you to give her 35 long and firm strokes","showTaggedImage(4, [\"onefemale\"])"],
    [null,"Stroke that %Cock% 5 times, but very slowly",null],
    [null,"Give me 10 painfully slow strokes, %Name%",null],
    [null,"I want 15 long slow aching strokes",null],
    [null,"Give me 25 strokes and make them as slow as you can go",null],
    [null,"15 strokes, %PetName%",null],
    [null,"20 strokes, %PetName%",null],
    [null,"25 strokes, %PetName%",null],
    [null,"30 strokes, %PetName%",null],
    [null,"I want 20 more strokes from you",null],
    [null,"I need you to give me another 25 strokes right now",null],
    ["!getVar(\"pvCustomTaskStrA\", false)","Give me 50 strokes, %Name%","setVar(\"pvCustomTaskStrA\", true)"],
    ["!getVar(\"pvCustomTaskStrA\", false)","Give me 60 firm strokes, %Name%","setVar(\"pvCustomTaskStrA\", true)"],
    ["!getVar(\"pvCustomTaskStrA\", false)","Lube up that %Cock% properly and give me 75 strokes","setVar(\"pvCustomTaskStrA\", true)"],
    ["!getVar(\"pvCustomTaskStrA\", false)","Stroke that aching %Cock% 100 times for me","setVar(\"pvCustomTaskStrA\", true)"],
    ["!getVar(\"pvCustomTaskStrA\", false)","I want you to ache like crazy now, give me 150 long strokes","setVar(\"pvCustomTaskStrA\", true)"],
    ["!getVar(\"pvCustomTaskStrA\", false)","Give me 120 strokes, as fast as you can without hitting the edge!","setVar(\"pvCustomTaskStrA\", true)"],
    [null,"15 strokes as you imagine her lips around your %Cock%","showTaggedImage(4, [\"blowjob\"])"],
    [null,"Give me 20 strokes, just imagine it\'s her sucking you off","showTaggedImage(4, [\"blowjob\"])"],
    [null,"Stroke 25 times and ache because you can\'t have this...","showTaggedImage(4, [\"blowjob\"])"],
    [null,"If only someone would do this to you... 30 strokes %PetName%","showTaggedImage(4, [\"blowjob\"])"],
    [null,"I don\'t care how much you\'re aching, give me 50 more strokes",null],
    [null,"Give me 10 strokes",null],
    [null,"Give me 20 strokes",null],
    [null,"Give me 30 strokes",null],
    [null,"I want 10 strokes",null],
    [null,"I want 20 strokes",null],
    [null,"I want 30 strokes",null],
    [null,"Give me another 10 strokes",null],
    [null,"Give me 20 more strokes",null] ];

	execRndLine(answers);
	
	DMessage("Strokes Task: End");
	return;
}