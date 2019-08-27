function sT_SpeedVocabulary() {
	DMessage("sT_Speed: VocabStart");
	separator = java.io.File.separator;
	let answers = [
		[null, "%StrokeSlowest%" ,"slowStroking(5)"],
		[null, "%StrokeSlowest%" ,"slowStroking(5)"],
		[null, "%StrokeFastest%" ,"speedUpStroking(5)"],
		[null, "%StrokeFastest%" ,"speedUpStroking(5)"],
		["null"," %StrokeFaster%" ,"speedUpStroking(3)"],
		["null"," %StrokeFaster%" ,"speedUpStroking(3)"],
		["null"," %StrokeFaster%" ,"speedUpStroking(3)"],
		["null"," %StrokeFaster%" ,"speedUpStroking(3)"],
		["null"," %StrokeFaster%" ,"speedUpStroking(3)"],
		["null"," %StrokeFaster%" ,"speedUpStroking(3)"],
		["null"," %StrokeFaster%" ,"speedUpStroking(3)"],
		["null"," %StrokeFaster%" ,"speedUpStroking(3)"],
		["null"," %StrokeSlower%","slowStroking(3)"],
		["null"," %StrokeSlower%","slowStroking(3)"],
		["null"," %StrokeSlower%","slowStroking(3)"],
		["null"," %StrokeSlower%","slowStroking(3)"],
		["null"," %StrokeSlower%","slowStroking(3)"],
		["null"," %StrokeSlower%","slowStroking(3)"],
		["null"," %StrokeSlower%","slowStroking(3)"],
		["null"," %StrokeSlower%","slowStroking(3)"],
		["null"," %StrokeFaster%" ,"speedUpStroking(3)"],
		[null, "%StrokeFastest%" ,"speedUpStroking(5)"],
		["null"," %StrokeSlower%","slowStroking(3)"],
		[null, "%StrokeSlowest%" ,"slowStroking(5)"]
		];
	
	execRndLine(answers);
	
	DMessage("sT_Speed: VocabEnd");
	return "<dontsend>";
}

