function slaveVocabulary() {
    let answers = ["slave",
		"slave",
		"slave",
		"slave",
		"slave",
		"slut",
		"slut",
		"slut",
		"slut",
		"bitch",
		"bitch",
		"boytoy",
		"pet",
		"pet",
		"servant",
		"servant",
		"loserboy",
		"losertoy",
		"slavepet",
		"bitchboy",
		"loserboy",
		"losertoy",
		"slavepet",
		"bitchboy",
		"painslut",
		"painslut"];
	if(getVar("AV_Beta",false)){
		answers.push("beta");
		answers.push("beta male");
	}
    return answers[randomInteger(0, answers.length - 1)];
}