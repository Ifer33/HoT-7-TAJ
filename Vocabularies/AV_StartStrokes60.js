function AV_StartStrokes60Vocabulary() {
    CMessage(random("Stroke", "Wank", "Masturbate") + random(" to the", " following the") + " beats");
    switch (randomInt(1, 2)) {
        case 1:
            playAudio("Audio" + separator + "tease" + separator + "circle4.mp3");
            break;
        case 2:
            playAudio("Audio" + separator + "tease" + separator + "overdrive1.mp3");
            break;
    }
    return "<dontsend>";
}