function AV_Mem_UsedVocabulary() {
	DMessage("aV_Mem_Used: VocabStart");
	let answers = ["Maybe you just say that because it\'s a bit difficult to think right now %Grin%",
		"At least you\'ve found a way to make yourself useful, %PetName% %Smile%",
		"So, you understand now, %PetName%? How you\'re all mine, to use and abuse as I please?",
		"So, you wanted to be used, huh? Your words, not mine. It is your lucky day, then."];
	setTempVar("AV_MEM_Used", true);
    setTempVar("AV_MemoryMain", true);
	DMessage("aV_Mem_Used: VocabEnd");
    return answers[randomInteger(0, answers.length - 1)];
}