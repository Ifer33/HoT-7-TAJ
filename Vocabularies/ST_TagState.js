function sT_TagStateVocabulary() {
	DMessage("sT_TagState: VocabStart");
	if(firstRound() ){
		let answers = ["I've been looking forward to teasing that %Cock% %GeneralTime% %EmoteLaugh%",
			"I hope your %Cock% is prepared for all the teasing I'm going to put it through %GeneralTime%",
			"It always feels <i>so</i> good to stroke in the beginning, doesn't it? %EmoteLaugh% %EmoteLaugh%",
			"I've got so many fun ideas to tease that %Cock% %GeneralTime% %EmoteLaugh%",
			"That %Cock% has been away from me for too long %PetName%",
			"I %Long% to make you so desperate",
			"I'm going to make you so desperate",
			"I'm going to drive you crazy",
			"I %Long% to drive you completely insane",
			"I'm going to drive you completely insane",
			"I want you to be so horny that you don't even know what to do with %Yourself%",
			"You are so %Sexy%",
			"I think you are so %Sexy%",
			"I think you are so %SexyM%",
			"Show me %How% much you want to please me, %Name%"];
	}else{
		let answers = [
			"How much more can you %Take%",
			"How much more can you %Take% %GeneralTime%",
			"How much more can you %Take%, %Name%",
			"How much more can you %Take% for me",
			"How much more can you %Take% for me %GeneralTime%",
			"How much more can you %Take% for me %GeneralTime%, %Name%",
			"How much more do you think you %Take%",
			"How much more do you think you %Take% %GeneralTime%",
			"How much more do you think you %Take%, %Name%",
			"How much more do you think you %Take% for me",
			"How much more do you think you %Take% for me %GeneralTime%",
			"How much more do you think you %Take% for me %GeneralTime%, %Name%",
			"How much more of this do you think you %Take%",
			"How much more of this do you think you %Take% %GeneralTime%",
			"How much more of this do you think you %Take%, %Name%",
			"How much more of this do you think you %Take% for me",
			"How much more of this do you think you %Take% for me %GeneralTime%",
			"How much more of this do you think you %Take% for me %GeneralTime%, %Name%"
			];
	}
	DMessage("sT_TagState: VocabEnd");
    return answers[randomInteger(0, answers.length - 1)];
}


//@TagFullyDressed You probably know by know, %Name%, that there is <i>no chance</i> of you seeing me naked %GeneralTime%
//@TagFace @TagCloseUp Stroke for my %Face%, %Name%, It's the only place your eyes should be anyway %Lol%