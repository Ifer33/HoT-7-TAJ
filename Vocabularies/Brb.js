function brbVocabulary()
{
	DMessage("Vocab: brb Beginn");
	let answers = ["brb",
		"Don't move",
		"I will be right back",
		"I will be back soon",
		"Just a second",
		"I'll be right back",
		"I'll be back soon",
		"Don't move, random(%PetName%, %SubName%)",
		"I will be right back, random(%PetName%, %SubName%)",
		"I will be back soon, random(%PetName%, %SubName%)",
		"Just a second, random(%PetName%, %SubName%)",
		"I'll be right back, random(%PetName%, %SubName%)",
		"I'll be back soon, random(%PetName%, %SubName%)"];
	DMessage("Vocab: brb End");
	return answers[randomInteger(0, answers.length - 1)];
}