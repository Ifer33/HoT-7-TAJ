function AV_Mem_HurtMeVocabulary() {
	DMessage("aV_Mem_HurtMe: VocabStart");
	if(isStrokingAll() ){
		let answers = ["Don\'t be silly, just %JerkOff% for me now, %PetName%"];
	}else{
		let answers = ["Oh c\'mon, you\'re begging me to hurt you? That\'s just pathetic, %SubName% %Lol%",
			"You\'re such a pain slut %Laugh%",
			"I\'ll hurt you when I feel like it\'s necessary, %PetName%"];
	}
	setTempVar("AV_MEM_HurtMe", true);
    setTempVar("AV_MemoryMain", true);
	DMessage("aV_Mem_HurtMe: VocabEnd");
    return answers[randomInteger(0, answers.length - 1)];
}