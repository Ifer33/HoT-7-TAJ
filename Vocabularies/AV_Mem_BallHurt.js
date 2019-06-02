function AV_Mem_BallHurtVocabulary() {
	DMessage("aV_Mem_BallHurt: VocabStart");
	if(isStroking() ){
		let answers = ["I know it\'s so mean of me. But your little blue balls should be the least of your concerns.",
			"Blue is the color we want, right?",
			"Do you think they are swollen and aching enough for me?",
			"Good, I want they blue %PetName%",
			"Mmmm keep stroking and ache even more",
			"You can handle it %PetName%, keep stroking",
			"That blue balls is going to stay with you until I let it leave that %Cock% %EmoteRandom%",
			"Yeah? I bet I can make that %Balls% ache even worse %EmoteRandom%",
			"Mmmm I love knowing how much agony that %Balls% is in",
			"That\'s what I\'m here for %PetName% %EmoteRandom%",
			"I love knowing how much ache you\'re suffering for me %EmoteRandom%",
			"That %Balls% was made to ache for me",
			"I\'m going to fill every last inch of that %Balls% with ache %EmoteRandom%",
			"That Blue Balls... is just going to get worse and worse %EmoteRandom%",
			"That just makes me want to tease you even more %EmoteRandom%"];
	}else{
		let answers = [
			"We\'ll need to get those balls nice and full before we continue",
			"Look how big and blue his balls are getting!",
			"Show me how big your balls can get %PetName%",
			"Let me take a look, I\'ll tell you if they\'re blue enough",
			"Can you feel your %Balls% filling up with cum?",
			"I hope those %Balls% are absolutely swollen with cum for me."
			];
	}
	setTempVar("AV_MEM_BallHurt", true);
    setTempVar("AV_MemoryMain", true);
	DMessage("aV_Mem_BallHurt: VocabEnd");
    return answers[randomInteger(0, answers.length - 1)];
}