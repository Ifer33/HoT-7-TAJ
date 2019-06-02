main();

function main(){
	DMessage("CBTCock Task: Beginning");
	let answers = [
    [null,"Smack your cock a few times",null],
    [null,"Give yourself 10 good cock smacks %Grin%",null],
    [null,"Slap that %Cock% 5 times in a row",null],
    [null,"Swat that %Cock% with your palm a few times",null],
    [null,"Give yourself one good smack on the head of your cock %Grin%",null],
    [null,"I want 15 cock slaps","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"spank\" + java.io.File.separator + \"Spank15.mp3\")"],
    [null,"Give me 5 good slaps on the head of your cock, make it sting",null],
    [null,"Give me 10 cock slaps","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"spank\" + java.io.File.separator + \"Spank10.mp3\")"],
    [null,"Smack your cock one time as hard as you can %Grin%",null],
    [null,"Smack your cock a few times and make it count",null],
    [null,"Smack your cock 25 times",null],
    [null,"Smack that cock 10 times","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"spank\" + java.io.File.separator + \"Spank10.mp3\")"],
    [null,"Give your cock a few good smacks",null],
    [null,"Smack your cock 10 times",null] ];
	
	execRndLine(answers);
	
	DMessage("CBTCock Task: End");
	return;
}