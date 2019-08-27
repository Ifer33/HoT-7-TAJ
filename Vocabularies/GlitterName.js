function GlitterNameVocabulary() {
	DMessage("GlitterName: VocabStart");
	if(inGroup([1,2])){ answers="%domFriend1Name%";}
	if(inGroup([1,3])){ answers="%domFriend2Name%";}
	if(inGroup([1,4])){ answers="%domFriend3Name%";}
	DMessage("GlitterName: VocabEnd");
    return answers;
}