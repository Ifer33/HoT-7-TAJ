function AV_Mem_LikeControlVocabulary()
{
	DMessage("AV_Mem_LikeControl: VocabStart");
	switch(randomInteger(1,3) ){
		case 1:
			message="I know you love it, that's why you keep coming back to me %Smile%"
			break;
		case 2:
			message="So I have to be honest...I've really been enjoying our arrangement so far."
			break;
		case 3:
			message="And I love controlling you."
			break;
	}
	setTempVar("AV_MEM_LikeControl",true);
	setTempVar("AV_MemoryMain",true);
	DMessage("aV_Mem_LikeControl: VocabEnd");
	return message;
}