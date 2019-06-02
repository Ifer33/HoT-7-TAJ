function BallGagOffVocabulary()
{
	DMessage("BallGagOffVocabulary: start")
	let answers = ["Take your ball gag off", 
					"Remove your ball gag",
					"You can remove your ball gag",
					"Take off your ball gag"];
	
	delVar("av_GagOn");
	DMessage("BallGagOffVocabulary: end")
	return answers[randomInteger(0, answers.length - 1)];
}
