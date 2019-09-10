DMessage("HoTStructure: Beginning");
preferredSessionLength = getVar("prefSessionLength");
DMessage("Starting session");
run("Structure" + separator + "Start" + separator + "*.js");
DMessage("Starting module");
setVar("firstRun",true);
while (continueSession() || getVar("firstRun",false))
{
	DMessage("HoTStructure: chooseModule");
    if(getVar("moduletorun", false)!=false ){
		run(getVar("moduletorun", false) );
		if(!getVar("dontDelMod",false)){
			delVar("moduletorun");
		}
	}else {
		if (getVar("chastityOn", false)){
			run("ModulesChastity" + separator + "*.js");
		}else{
			run("Modules" + separator + "*.js");
		}
	}
	//run("Modules" + separator + "*.js");
	DMessage("HoTStructure: chooseLink");
	if(getVar("linktorun", false)!=false ){
		run(getVar("linktorun", false) );
		delVar("linktorun");
	}else {
		run("Structure" + separator + "Link" + separator + "AV_Link.js");
		//AV_Link_CHASTITY gets called from AV_Link
	}
    //run("Structure" + separator + "Link" + separator + "*.js");
    setVar("firstRun",false);
}
if (getVar("chastityOn", false)){
	run("Structure" + separator + "End" + separator + "End_CHASTITY.js");
}
if(orgasmRestricted()){
	run("Structure" + separator + "End" + separator + "End_1_RESTRICTED.js");
}else {
	run("Structure" + separator + "End" + separator + "Extended_End.js");
}
DMessage("HoTStructure: End");