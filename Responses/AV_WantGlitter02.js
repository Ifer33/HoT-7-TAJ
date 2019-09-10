addResponseIndicator(getVar("domFriend2Name","dfgfd"));
//run("allutils.js");

function AV_WantGlitter02Response(message) {
    DMessage("aV_WantGlitter02: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("aV_WantGlitter02: EndResponse Response is Disabled");
        return false;
    }
	let found = false;
	while(!found){
		let thisRandom = randomInt(1, 5);
		switch (thisRandom){
			case 1:
				if(!getVar("AV_MEM_Contact2",false) ){
					run("Custom" + java.io.File.separator + "Memory" + java.io.File.separator + "Contact2.js");
					found = true;
				}
				break;
			case 2:
				if(getVar("AV_MEM_Contact2",false) ){
					CMessage(random("I know","We will see that later"));
					found = true;
				}
				break;
			case 3:
				if(getVar("AV_MEM_Contact1",false) || getVar("AV_MEM_Contact3",false)){
					CMessage("You are "+random("thinking", "dreaming") +" "+random("a lot", "too much")+" about my friends");
					found = true;
				}
				break;
			case 4:
				if(getVar("AV_MEM_Contact1",false) || getVar("AV_MEM_Contact3",false)){
					CMessage("You are "+random("thinking", "dreaming") +" "+random("a lot", "too much")+" about my friends");
					found = true;
				}
				break;
			case 5:
				if(getVar("AV_MEM_Contact1",false) || getVar("AV_MEM_Contact3",false)){
					CMessage("You are "+random("thinking", "dreaming") +" "+random("a lot", "too much")+" about my friends");
					found = true;
				}
				break;
		}
	}
	DMessage("aV_WantGlitter02: EndResponse");
    return true;
}