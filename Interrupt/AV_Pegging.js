DMessage("AV_Pegging: start");
main();
DMessage("AV_Pegging: end");
function main()
{
    CMessage("%stopstroking%", 0);
    stopStrokingAll();
    switch(random("part1", "part2", "part3", "part4"))
    {
        case "part1":
        part1();
        return;
        break;
        case "part2":
        part2();
        return;
        break;
        case "part3":
        part3();
        return;
        break;
        case "part4":
        part4();
        return;
        break;
    }
    part1();
}
function part1()
{
    CMessage("%KneelForMe%");
    CMessage("That's the proper place for men; naked and on their knees sucking my strapon.");
	showTaggedImage("DILDO");// @TagStrapon
    CMessage("%Stroke% for me");
    CMessage("%DoAsISay% %Slave%!");
    CMessage("First the plug to prepare things");
    CMessage("then a sound spanking to let him know who\'s the boss");
    CMessage("then the cleaning ritual using your mouth");
    CMessage("before I take your little cherry asshole.");
    CMessage("Come on %Slave%, take that monster cock deeper, deeper you slut boy.");
    CMessage("%stopstroking%", 0);
	stopStrokingAll();
    return;
    part2();
}
function part2()
{
    CMessage("%StartStroking%");
    changeApathyLevel(2);
    SMessage("%DomName% turned on the mic");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "SeSp" + java.io.File.separator + "pegging01.mp3");
    sleep(15);
    sleep(15);
    sleep(15);
    sleep(15);
    sleep(12);
	sleep(10);
	stopAudio();
    SMessage("%DomName% turned off the mic");
    CMessage("%stopstroking%", 0);
    stopStrokingAll();
    return;
    part3();
}
function part3()
{
    CMessage("%PetName%");
    CMessage("%StartStroking%");
    SMessage("%DomName% turned on the mic");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "SeSp" + java.io.File.separator + "pegging02.mp3");
    sleep(15);
    sleep(15);
    sleep(11);
    sleep(15);
    sleep(14);
    sleep(10);
	sleep(10);
	stopAudio();
    SMessage("%DomName% turned off the mic");
    CMessage("%stopstroking%", 0);
    stopStrokingAll();
    return;
    part4();
}
function part4()
{
    CMessage("%StartStroking%");
    SMessage("%DomName% turned on the mic");
    playAudio("Audio" + java.io.File.separator + "tease" + java.io.File.separator + "SeSp" + java.io.File.separator + "pegging03.mp3");
    sleep(15);
    sleep(15);
    sleep(15);
    sleep(10);
    sleep(15);
    sleep(15);
    sleep(13);
    sleep(15);
    sleep(15);
    sleep(15);
    sleep(10);
	sleep(13);
	stopAudio();
    SMessage("%DomName% turned off the mic");
    CMessage("%stopstroking%", 0);
    stopStrokingAll();
    return;
}