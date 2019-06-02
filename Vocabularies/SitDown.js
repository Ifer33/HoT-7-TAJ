function sitDownVocabulary() {
    let answers = ["Sit down", "Sit down %PetName%", "Sit down %SubName%", "You can sit down now", "Back to your chair", "Back to your chair %PetName%", "Back to your chair %SubName%", "You can sit down", "You can sit", "You can sit now", "You can sit %PetName%", "You can sit %SubName%", "You can go back to your chair", "You can go back to your chair now", "You can go back to your chair %SubName%"];
	delVar("AV_SubKnees");
    delVar("pvKneeling");
    return answers[randomInteger(0, answers.length - 1)];
}