function slavesVocabulary() {
    let answers = ["slave",
		"slaves",
		"slaves",
		"sluts",
		"sluts",
		"bitches",
		"bitches",
		"boytoys",
		"pets",
		"pets",
		"servants",
		"servants",
		"loserboys",
		"losertoys",
		"slavepet",
		"bitchboy",
		"painsluts"];
	if(getVar("AV_Beta",false)){
		answers.push("betas");
		answers.push("beta males");
		answers.push("betas");
		answers.push("beta males");
		answers.push("betas");
		answers.push("beta males");
		answers.push("betas");
		answers.push("beta males");
	}
    return answers[randomInteger(0, answers.length - 1)];
}