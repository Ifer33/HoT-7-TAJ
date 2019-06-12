function AV_Mem_ServeVocabulary() {
	DMessage("aV_Mem_Serve: VocabStart");
	if(isStrokingAll() ){
		let answers = ["You can do that by stroking that %Cock% right now, %Name%"];
	}else{
		let answers = ["Good, because that\'s all I ask of you %Name%",
			"Good %Grin%",
			"So, you wanted to be serve me, huh? Your words, not mine. It is your lucky day, then."];
	}
	setTempVar("AV_MEM_Serve", true);
    setTempVar("AV_MemoryMain", true);
	DMessage("aV_Mem_Serve: VocabEnd");
    return answers[randomInteger(0, answers.length - 1)];
}