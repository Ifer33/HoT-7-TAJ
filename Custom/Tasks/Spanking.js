main();
//call api customTask(task = "Spanking", delay = 0, sender = -1, rounds = 3)
//see helperFunctions.js
//direct call will send only one line
function main(){
	DMessage("spankingTask: Beginning");
	let answers = [ [null,"Give me 10 more",null],
		[null,"Give me 5 more on either cheek",null],
		[null,"10 more","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"spank\" + java.io.File.separator + \"Spank10.mp3\")"],
		[null,"5 " + random("slaps ", "smacks ") + "left cheek",null],
		[null,"5 " + random("slaps ", "smacks ") + "right cheek",null],
		//["!getVar(\"SpankingBalls\", false)","And give your %Balls% a smack too %Grin%","setTempVar(\"SpankingBalls\", true)"],
		["flag[\"SpankingBalls\",\"not\"]","And give your %Balls% a smack too %Grin%","setTempVar(\"SpankingBalls\", true)"],
		[null,"Give me quick 10 " + random("slaps ", "smacks ") + "on either cheek, so 20 in total",null],
		[null,"Give me 10 more, each one should be harder than the last",null],
		[null,"Give that red ass 20 " + random("gentle ", "soft ") + "taps",null],
		[null,"10 " + random("smacks ", "slaps ") + "on your right cheek","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"spank\" + java.io.File.separator + \"Spank10.mp3\")"],
		[null,"10 " + random("smacks ", "slaps ") + "on your left cheek","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"spank\" + java.io.File.separator + \"Spank10.mp3\")"],
		[null,"Is your ass burning yet? " + random("Slap ", "Smack ") + "it 10 more times, %Name%",null],
		[null,"Now 10 soft taps on either cheek",null] ];
	
	execRndLine(answers);
	
	DMessage("spankingTask: End");
	return;// "<dontsend>";
}