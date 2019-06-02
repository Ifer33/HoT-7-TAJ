function pthevCaningTauntsVocabulary()
{
	let answers = ["Harder, %Name%",
	"I want red stripes all across your %Ass%", 
    "Make it hurt, %Name%",
    "Don't hold back, this should hurt",
    "Count out loud %Name%, I can't hear you",
    "<dontsend>",
    "<dontsend>",
    "<dontsend>",
    "<dontsend>",
    "<dontsend>",
    "<dontsend>",
    "<dontsend>"];

	return answers[randomInteger(0, answers.length - 1)];
}