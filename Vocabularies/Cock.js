function cockVocabulary() {
	DMessage("Cock: VocabStart");
	let answers = ["dick",
		"dick",
		"dick",
		"cock",
		"cock",
		"cock",
		"cock",
		"desperate cock",
		"desperate cock",
		"helpless cock",
		"helpless cock",
		"%Hot% cock",
		"aching cock",
		"achey cock",
		"achey dick",
		"frustrated dick",
		"frustrated cock",
		"denied dick",
		"poor aching dick",
		"poor aching cock",
		"poor aching cock",
		"poor leaky cock",
		"horny cock"];
	if (getVar("cocksize", "NA") == "small"){
		let temp = ["denied little dick",
			"little aching dick",
			"little aching cock",
			"cute little cock",
			"cute little dick",
			"poor little dick",
			"poor little cock",
			"leaky little cock",
			"horny little cock",
			"horny little dick",
			"little fuckstick",
			"%Hot% little fuckstick",
			"drippy little dick",
			"frustrated little dick",
			"frustrated little dick",
			"desperate little dick"];
		answers.concat(temp);
	}
	if (getVar("cocksize", "NA") == "large"){
		let temp = ["big aching cock",
			"big cock",
			"impressive cock",
			"huge impressive cock",
			"big frustrated cock"];
		answers.concat(temp);
	}
	temp = ["fuckstick",
			"%Hot% fuckstick",
			"leaking cock",
			"prick",
			"pecker",
			"drippy dick",
			"pulsating cock",
			"stiffy",
			"slavecock",
			"slavecock",
			"swollen cock"];
	answers.concat(temp);
	DMessage("Cock: VocabEnd");
    return answers[randomInteger(0, answers.length - 1)];
}
/*
dick
dick
dick
cock
cock
cock
cock
desperate cock
desperate cock
helpless cock
helpless cock
%Hot% cock
aching cock
achey cock
achey dick
frustrated dick
frustrated cock
denied dick
poor aching dick
poor aching cock
poor aching cock
poor leaky cock
horny cock
@CockSmall denied little dick
@CockSmall little aching dick
@CockSmall little aching cock
@CockSmall cute little cock
@CockSmall cute little dick
@CockSmall poor little dick
@CockSmall poor little cock
@CockSmall leaky little cock
@CockSmall horny little cock
@CockSmall horny little dick
@CockSmall desperate little dick
@CockLarge big aching cock
@CockLarge big cock
@CockLarge impressive cock
@CockLarge huge impressive cock
@Crazy fuckstick
@Crazy @Cocksmall little fuckstick
@Crazy %Hot% fuckstick
@Crazy @Cocksmall %Hot% little fuckstick
@Crazy @Vulgar weiner
@Crazy @Vulgar weiner
@Crazy @Vulgar aching weiner
@Crazy @Vulgar achey weiner
@Crazy @Vulgar @CockSmall little weiner
@Crazy @Vulgar @CockSmall little weiner
@Crazy @Vulgar @CockSmall achey little weiner
@Crazy @Vulgar @CockSmall little weinee
@Crazy @Vulgar @CockSmall aching little weinee
@Vulgar leaking cock
@Vulgar prick
@Vulgar pecker
@Vulgar drippy dick
@Vulgar @CockSmall drippy little dick
@Supremacist lowly cock
@Supremacist subservient cock
@SubOld wrinkled cock
@SubOld wrinkly cock
@SubYoung virile cock
@Vulgar helpless dick
@CockSmall frustrated little dick
@CockSmall frustrated little cock
@CockLarge big frustrated cock
@Vulgar pulsating cock
@Vulgar stiffy
slavecock
slavecock
swollen cock*/