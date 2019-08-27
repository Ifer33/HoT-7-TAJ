let separator = java.io.File.separator;
run("chatutils.js");
setUpChat2();
DMessage("main: Beginning");
run("mediautils.js");
DMessage("Setting up media");
setUpMedia();
run("personalityutils.js");
DMessage("Setting up personality");
setUpVars();
run("TAIUtils.js");
setUpTAIUtils();
run("helperFunctions.js");
run("Structure" + separator + "HoTStructure.js");
DMessage("main: End");


/*let separator = java.io.File.separator;
run("chatutils.js");
DMessage("Setting up chat");
setUpChat();
DMessage("main: Beginning");
run("mediautils.js");
DMessage("Setting up media");
setUpMedia();
run("personalityutils.js");
DMessage("Setting up personality");
setUpVars();
run("TAIUtils.js");
setUpTAIUtils();
run("helperFunctions.js");
run("Structure" + separator + "HoTStructure.js");
DMessage("main: End");*/