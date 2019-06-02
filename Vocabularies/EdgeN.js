function edgeNVocabulary()
{
	let answers = ["edge",
	"get close", 
    "edge",
    "edge",
    "edge",
    "edge",
    "edge",
    "edge",
    "edge",
    "edge",
    "edge",
    "get to the brink",
    "get to the bring",
    "get to the edge of orgasm",
    "get to the brink of orgasm",
    "get to the very edge of coming",
    "get to the edge of release",
    "get to the brink of release",
    "get to the verge of orgasm",
    "get to the verge of coming",
    "get close to the brink",
    "get close to the bring",
    "get close to the edge of orgasm",
    "get close to the brink of orgasm",
    "get close to the very edge of coming",
    "get close to the edge of release",
    "get close to the brink of release",
    "get close to the verge of orgasm",
    "get close to the verge of coming"];
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "cEdge.mp3");
	return answers[randomInteger(0, answers.length - 1)];
}