function AV_Mem_HumiliateVocabulary() {
	DMessage("aV_Mem_Humiliate: VocabStart");
	let answers = ["You\'re such a slut! %Lol%",
		"Mmm I should figure out some way to use that against you...",
		"Maybe I should pimp you out for money... %Smile%",
		"That would make an interesting coming-out party... %Laugh%",
		"Maybe I should take you to the park and walk you like a dog"];
	setTempVar("AV_MEM_Humil", true);
    setTempVar("AV_MemoryMain", true);
	DMessage("aV_Mem_Humiliate: VocabEnd");
    return answers[randomInteger(0, answers.length - 1)];
}