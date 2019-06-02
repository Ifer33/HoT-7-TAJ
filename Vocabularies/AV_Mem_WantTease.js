function AV_Mem_WantTeaseVocabulary() {
	DMessage("aV_Mem_WantTease: VocabStart");
	if(isStroking() ){
		let answers = ["I love teasing you, %Name%",
			"I\'m going to tease you until you break down and cry %Grin%",
			"I love how your perverted little mind works... %Laugh%",
			"I\'m going to tease you so bad... %Grin%"];
	}else{
		let answers = ["This not teasing enough? %Lol%"];
	}
	setTempVar("AV_MEM_LikeTeased", true);
    setTempVar("AV_MemoryMain", true);
	DMessage("aV_Mem_WantTease: VocabEnd");
    return answers[randomInteger(0, answers.length - 1)];
}