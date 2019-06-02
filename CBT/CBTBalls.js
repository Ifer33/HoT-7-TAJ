main();
//call api cbt(cockOrBalls = "both"("ball","cock"), delay = 0, sender = -1, rounds = 3)
//see helperFunctions.js
//direct call will send only one line
function main(){
	DMessage("CBTBalls Task: Beginning");
	let answers = [ 
    [null,"Smack your balls a few more times",null],
    [null,"Smack them a few more times for me",null],
    [null,"Not enough, do it a few more times",null],
    [null,"I want you to add 5 more ball smacks to each ball",null],
    [null,"Let\'s give those balls another 5 smacks %EmoteHappy%",null],
    ["cbtBallLevel(1)","Now lightly tap those balls 5 times for me, just enough to be uncomfortable",null],
    ["cbtBallLevel(2)","Now tap those balls 5 times for me, just enough to be painful",null],
    ["cbtBallLevel(3)","Now smack those balls 5 more times for me",null],
    ["cbtBallLevel(4)","Now smack those balls 10 more times for me. Make those smacks count","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"spank\" + java.io.File.separator + \"Spank10.mp3\")"],
    ["cbtBallLevel(5)","Now smack those balls 10 times as hard as you can",null],
    ["cbtBallLevel(1)","Let\'s give those balls another 3 smacks %EmoteHappy%",null],
    ["cbtBallLevel(2)","Let\'s give those balls another 5 smacks %EmoteHappy%",null],
    ["cbtBallLevel(3)","Let\'s give those balls another 5 smacks %EmoteHappy%","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"spank\" + java.io.File.separator + \"Spank5.mp3\")"],
    ["cbtBallLevel(4)","Let\'s give those balls another 10 smacks %EmoteHappy%","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"spank\" + java.io.File.separator + \"Spank10.mp3\")"],
    ["cbtBallLevel(5)","Let\'s give those balls another 10 smacks %EmoteHappy%","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"spank\" + java.io.File.separator + \"Spank10.mp3\")"],
    ["cbtBallLevel(1)", "Now 1 more smack on each ball",null],
    ["cbtBallLevel(2)", "Now 3 more smacks on each ball",null],
    ["cbtBallLevel(3)", "Now 3 more smacks on each ball",null],
    ["cbtBallLevel(4)", "Now 5 more smacks on each ball",null],
    ["cbtBallLevel(5)", "Now 10 more smacks on each ball",null],
    ["cbtBallLevel(1)", "1 more",null],
    ["cbtBallLevel(2)", "3 more",null],
    ["cbtBallLevel(3)", "5 more","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"spank\" + java.io.File.separator + \"Spank5.mp3\")"],
    ["cbtBallLevel(4)", "5 more","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"spank\" + java.io.File.separator + \"Spank5.mp3\")"],
    ["cbtBallLevel(5)", "10 more","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"spank\" + java.io.File.separator + \"Spank10.mp3\")"],
    ["cbtBallLevel(1)", "Give me 3 more",null],
    ["cbtBallLevel(2)", "Give me 5 more","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"spank\" + java.io.File.separator + \"Spank5.mp3\")"],
    ["cbtBallLevel(3)", "Give me 5 more",null],
    ["cbtBallLevel(4)", "Give me 10 more","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"spank\" + java.io.File.separator + \"Spank10.mp3\")"],
    ["cbtBallLevel(5)", "Give me 10 more","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"spank\" + java.io.File.separator + \"Spank10.mp3\")"],
    ["cbtBallLevel(1)", "I want 5 more","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"spank\" + java.io.File.separator + \"Spank5.mp3\")"],
    ["cbtBallLevel(2)", "I want 5 more","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"spank\" + java.io.File.separator + \"Spank5.mp3\")"],
    ["cbtBallLevel(3)", "I want 5 more","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"spank\" + java.io.File.separator + \"Spank5.mp3\")"],
    ["cbtBallLevel(4)", "I want 10 more","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"spank\" + java.io.File.separator + \"Spank10.mp3\")"],
    ["cbtBallLevel(5)", "I want 10 more","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"spank\" + java.io.File.separator + \"Spank10.mp3\")"],
    ["cbtBallLevel(1)", "Not enough, 1 more",null],
    ["cbtBallLevel(2)", "Not enough, 3 more",null],
    ["cbtBallLevel(3)", "Not enough, 5 more",null],
    ["cbtBallLevel(4)", "Not enough, 10 more",null],
    ["cbtBallLevel(5)", "Not enough, 15 more",null],
    ["cbtBallLevel(1)", "Now smack them 3 more times",null],
    ["cbtBallLevel(2)", "Now smack them 3 more times",null],
    ["cbtBallLevel(3)", "Now smack them 5 more times",null],
    ["cbtBallLevel(4)", "Now smack them 5 more times",null],
    ["cbtBallLevel(5)", "Now smack them 10 more times",null],
    //--Command:ACup
    [null,"10 more smacks. I bet your balls are bigger than my %Boobs% right now %Lol%",null],
    //--Command:BCup
    [null,"10 more smacks. I bet your balls are as big as my %Boobs% right now %Lol%",null],
    //--Command:CCup
    [null,"10 more smacks. I bet your balls are almost as big as my %Boobs% right now %Lol%",null],
    //--Command:DCup
    [null,"10 more smacks to your balls, I want them to be as big and swollen as my %Boobs% %Lol%",null],
    //--Command:DDCup
    [null,"10 more smacks to your balls, I want them to be as huge and swollen as my %Boobs% %Lol%",null],
    //--UNINTERPRETED LINE:@DDD+Cup 
	[null,"10 more smacks to your balls, I want them to be as massive and swollen as my %Boobs% %Lol%",null] ];

	execRndLine(answers);
	
	DMessage("CBTBalls Task: End");
	return;
}