function strokeNVocabulary()
{
	let answers = ["10",
	"15", 
    "20",
    "25",
    "30",
    "35",
    "40",
    "45",
    "50"];
	
	return answers[randomInteger(0, answers.length - 1)];
}
