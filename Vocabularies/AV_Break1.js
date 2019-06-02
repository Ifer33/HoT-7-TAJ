function AV_Break1Vocabulary()
{
	let answers = ["I think I\'ll take a short "+ random("break", "pause"),
	"I need to take a short " + random("break", "pause"), 
    "I think I\'ll take " + random("break", "pause"),
    "I need to take " + random("break", "pause"),
    "I need to leave for a few minutes " + random("%SubName%", "%PetName%"),
    "I need to leave for some minutes %SubName%."];

	return answers[randomInteger(0, answers.length - 1)];
}
