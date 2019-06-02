main();
//call api customTask(task = "Spanking", delay = 0, sender = -1, rounds = 3)
//see helperFunctions.js
//direct call will send only one line
function main(){
	DMessage("spanking_FirstTask: Beginning");
	let answers = [ [null,"Let's start with 5 smacks on either cheek",null],
		[null,"Let's start with 10 smacks on either cheek",null],
		[null,"For starters, give me 10 hard smacks",null],
		[null,"Let's get started, spank your ass 10 times",null],
		[null,"Give me 5 smacks on either cheek",null],
		[null,"Give me 15 smacks, %PetName%", "playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"spank\" + java.io.File.separator + \"Spank15.mp3\")" ], 
		[null,"Start with 10 quick smacks on either cheek, %Name%",null],
		[null,"Let's begin with 10 smacks across your ass",null] ];
	
	execRndLine(answers);
	
	DMessage("spanking_FirstTask: End");
	return; //"<dontsend>";
}