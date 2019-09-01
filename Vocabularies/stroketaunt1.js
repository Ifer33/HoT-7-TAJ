function stroketaunt1Vocabulary() {
	DMessage("stroketaunt1: VocabStart");
	separator = java.io.File.separator;
	let answers = [ [null, "Make it feel good %SubName%",null],
		[null, "Make your %Cock% feel "+random("amazing","good"),null],
		[null, "Make your %Cock% hard as a rock for me",null],
		[null, "Make your %Cock% harder than it's ever been",null],
		[null, "Stroke stroke stroke",null],
		[null, "Just stroke stroke stroke %Smile%",null],
		[null, "Just stroke for me",null],
		[null, "Just stroke for me %Name%",null],
		[null, "Keep stroking",null],
		[null, "Keep stroking %PetName%",null],
		[null, "Keep stroking %Name%",null],
		[null, "Keep going",null],
		[null, "Don't stop stroking" ,null],
		[null, "Don't stop %Name%, I want you even "+random("more aroused","harder"),null],
		[null, "You have no choice but to keep stroking for me",null],
		[null, null, "question(\"Doesn't if feel %Great% to %JerkOff% for me?\",\"feelsGoodResponse()\")"], //@ResponseYes(ItFeelsGood)
		[null, null, "question(\"Can you take more for me, %PetName%?\",\"can_Handle_zResponse()\",\"can_Handle_notResponse()\")"],//, @ResponseYes(Can Handle_z) @ResponseNo(Can Handle_not)
		[null, "Slow down a little bit","slowStroking(3)"],
		[null, "Slow down %Name%" ,"slowStroking(3)"],
		[null, "Slow down your strokes for me" ,"slowStroking(3)"],
		[null, "Stroke a little slower now" ,"slowStroking(3)"],
		[null, "Stroke as slow as you can" ,"slowStroking(5)"],
		[null, "Stroke really slow now, until you can't go any slower" ,"slowStroking(5)"],
		[null, "Speed up now %Name%" ,"speedUpStroking(3)"],
		[null, "Speed up your strokes a little bit" ,"speedUpStroking(3)"],
		[null, "Stroke a little faster" ,"speedUpStroking(3)"],
		[null, "Stroke faster" ,"speedUpStroking(3)"],
		[null, "As fast as you can now!" ,"speedUpStroking(5)"],
		[null, "Stroke as fast as you can, but try not to edge!" ,"speedUpStroking(5)"],
		[null, "Tighten your grip a little bit",null],
		[null, "Loosen your grip a little bit, I don't want you to edge yet",null],
		[null, "When I see a pair of %Boobs% like that, I just want to grab them %EmoteHappy%","showCategoryImage(\"BOOBS\")"],// @ShowBoobsImage
		[null, "I love that you're doing this for me",null],
		[null, "I love how much you're willing to make yourself ache for me",null],
		[null, "It turns me on so much that you do this for me",null],
		[null, "I love making you do this for me" ,null],
		[null, "You turn me on so much when you suffer for me",null],
		[null, "I love making you "+random("do this","stroke","jerk off")+" for me",null],
		[null, "Your suffering turns me on so much",null],
		[null, "You have no idea how much I "+random("enjoy","love")+" seeing you suffer for me",null],
		[null, "Nothing gets me hotter than making you %JerkOff% for me",null],
		[null, "It makes me "+random("wet","hot")+" to know you'd do anything for me, %Name%",null],
		[null, "I wish I could see you right now",null], 
		//@NeverAllowsOrgasm 
		["(getVar(\"orgasmChance\")==0)","I want you to stroke like I'd actually let you cum for once %EmoteRandom%" ,"speedUpStroking(5)"],
		//@RarelyAllowsOrgasm
		["(getVar(\"orgasmChance\")<=25)","I want you to stroke like I'm actually %Gonna% let you cum %GeneralTime% %EmoteRandom%" ,"speedUpStroking(5)"],
		[null, "I want you more turned on than you've ever been in your entire life",null],
		[null, "I want you aching",null],
		[null, "I want you suffering",null],
		[null, "I want you to ache like never before",null],
		[null, "Suffer for me",null],
		[null, "I hope that %Cock% is"+ random("pulsing","throbbing")+" like crazy",null],
		[null, "Making you ache makes me feel so good",null],
		[null, "I'm %Gonna% take all your pleasure for myself",null],
		[null, "I'm %Gonna% take every last bit of your pleasure for myself",null],
		[null, "Mmmm stroke that %Cock% for me %PetName%",null],
		[null, "Show me how much you want to please me",null],
		[null, "Make yourself ache for my "+random("enjoyment","pleasure"),null],
		[null, "Ache for me",null],
		[null, "Keep aching for me",null],
		[null, "Let every stroke make you "+random("ache for me even more","even more desperate"),null],
		//@ApathyLevel3 
		["checkOldApathyLevel(3)","I'm going to make this so much worse on you",null],
		["checkOldApathyLevel(4)","I'm going to make this so much worse on you",null],
		["checkOldApathyLevel(5)","I'm going to make this so much worse on you",null],
		["checkOldApathyLevel(3)","That ache isn't going to get any easier",null],
		["checkOldApathyLevel(4)","That ache isn't going to get any easier",null],
		["checkOldApathyLevel(5)","That ache isn't going to get any easier",null],
		[null, "Mmmm","showTeaseImage()"], //@NewBlogImage
		[null, "Sexy","showTeaseImage()"],
		[null, "That's sexy","showTeaseImage()"],
		[null, "That's hot","showTeaseImage()"],
		[null, "So hot","showTeaseImage()"],
		[null, "Don't mind me %EmoteRandom%","showTeaseImage()"],
		[null, "I want you to remember this ache for a long time %PetName%",null],
		[null, "You are so fucking sexy to me right now",null],
		["checkOldApathyLevel(4)","I want this to be torture for you %PetName%",null],
		["checkOldApathyLevel(5)","I want this to be torture for you %PetName%",null],
		["checkOldApathyLevel(3)","There is nothing else I'd rather be doing than making you suffer %EmoteRandom%",null],
		["checkOldApathyLevel(4)","There is nothing else I'd rather be doing than making you suffer %EmoteRandom%",null],
		["checkOldApathyLevel(5)","There is nothing else I'd rather be doing than making you suffer %EmoteRandom%",null],
		[null, "Make that %Cock% feel as good as you possibly can",null],
		[null, "I'm going to "+ random("fuck you up so bad","drive you crazy")+" %Laugh%",null],
		[null, "I'm going to drive you completely insane %EmoteRandom%",null],
		[null, "I want you so fucking desperate %PetName%",null],
		["checkOldApathyLevel(3)","I'm going to take you on the most frustrating ride of your life %GeneralTime%",null],
		["checkOldApathyLevel(4)","I'm going to take you on the most frustrating ride of your life %GeneralTime%",null],
		["checkOldApathyLevel(5)","I'm going to take you on the most frustrating ride of your life %GeneralTime%",null],
		[null, "Just imagine what <i>my</i> fingers would be doing to you right now %Grin%",null],
		[null, "I'm loving every second of this %EmoteRandom%",null],
		[null, "You were made to suffer for me %PetName%",null],
		["checkOldApathyLevel(3)","I haven't even begun to fuck with you yet %PetName% %EmoteRandom%",null],
		["checkOldApathyLevel(4)","I haven't even begun to fuck with you yet %PetName% %EmoteRandom%",null],
		["checkOldApathyLevel(5)","I haven't even begun to fuck with you yet %PetName% %EmoteRandom%",null],
		[null, "I'm %Gonna% make sure that %Cock% remembers every single stroke you give to me %Grin%",null],
		[null, "%StrokeSlowest%" ,"slowStroking(5)"],
		[null, "%StrokeSlowest%" ,"slowStroking(5)"],
		[null, "%StrokeFastest%" ,"speedUpStroking(5)"],
		[null, "%StrokeFastest%" ,"speedUpStroking(5)"],
		["!checkMinutesPassed(15)"," %StrokeFaster%" ,"speedUpStroking(3)"],
		["!checkMinutesPassed(15)"," %StrokeFaster%" ,"speedUpStroking(3)"],
		["!checkMinutesPassed(15)"," %StrokeFaster%" ,"speedUpStroking(3)"],
		["!checkMinutesPassed(15)"," %StrokeFaster%" ,"speedUpStroking(3)"],
		["!checkMinutesPassed(15)"," %StrokeFaster%" ,"speedUpStroking(3)"],
		["!checkMinutesPassed(15)"," %StrokeFaster%" ,"speedUpStroking(3)"],
		["!checkMinutesPassed(15)"," %StrokeFaster%" ,"speedUpStroking(3)"],
		["!checkMinutesPassed(15)"," %StrokeFaster%" ,"speedUpStroking(3)"],
		["checkMinutesPassed(60)"," %StrokeSlower%","slowStroking(3)"],
		["checkMinutesPassed(60)"," %StrokeSlower%","slowStroking(3)"],
		["checkMinutesPassed(60)"," %StrokeSlower%","slowStroking(3)"],
		["checkMinutesPassed(60)"," %StrokeSlower%","slowStroking(3)"],
		["checkMinutesPassed(60)"," %StrokeSlower%","slowStroking(3)"],
		["checkMinutesPassed(60)"," %StrokeSlower%","slowStroking(3)"],
		["checkMinutesPassed(60)"," %StrokeSlower%","slowStroking(3)"],
		["checkMinutesPassed(60)"," %StrokeSlower%","slowStroking(3)"],
		//@FirstRound 
		["firstRound()","I've been looking forward to teasing that %Cock% %GeneralTime% %Grin%",null],
		["firstRound()","I hope your %Cock% is prepared for all the teasing I'm %Gonna% put it through %GeneralTime%",null],
		["firstRound()","It always feels <i>so</i> good to stroke in the beginning, doesn't it? %Grin% %EmoteRandom%",null],
		["firstRound()","I've got so many fun ideas to tease that %Cock% %GeneralTime% %Grin%",null],
		["firstRound()","That %Cock% has been away from me for too long %PetName%",null],
		/*@DommeTag(Ass, FullyDressed) Keep stroking and maybe I'll let you see my %Ass%
		@DommeTag(Ass, FullyDressed) You want to see my %Ass%, don't you?
		@DommeTag(Ass, FullyDressed) Stroke and imagine what my %Ass% looks like naked
		@DommeTag(Ass, FullyDressed) If you want to see my %Ass%, you have to suffer for me
		@DommeTag(Ass, FullyDressed) I know you want to see more, but my %Ass% is just going to tease you for now %EmoteRandom%
		@DommeTag(Ass, HalfDressed) Keep stroking and wishing I'd let you see more of my %Ass%
		@DommeTag(Ass, HalfDressed) You want to see more of my %Ass%? You'll have to suffer for it %EmoteRandom%
		@DommeTag(Ass, HalfDressed) Would you worship my %Ass% for the chance to see the rest of it? %Grin%
		@DommeTag(Ass, HalfDressed) Once your %Cock% has suffered enough, maybe I'll let you see even more of my %Ass% %EmoteRandom%
		@DommeTag(Ass, HalfDressed) I know you wanted to see my %Ass%, now you have to suffer for it %EmoteRandom%
		Show me how much you're willing to suffer for me %PetName% %EmoteRandom%
		@DommeTag(Boobs, HalfDressed) Don't think I don't know you're staring at my %Boobs%
		@DommeTag(Boobs, HalfDressed)I can practically feel your eyes on my %Boobs% right now %EmoteRandom%
		@DommeTag(Boobs, HalfDressed)I know you want to see my %Boobs%, but you're %Gonna% have to suffer first*/
		[null, "I wonder how much you're willing to suffer for me",null],
		[null, "Keep that %Cock% suffering for me if you want to see more %EmoteRandom%",null],
		//@DommeTag(Boobs, Naked)I wonder if that %Cock% is as hard as my nipples right now %EmoteRandom%
		[null, "I bet you wish you could feel the heat coming from my %Pussy% right now %Grin%",null],
		[null, "What do you think %PetName%, should I show you everything? %EmoteRandom%",null],
		[null, "Think about how little there is between you and my %Pussy% right now %PetName% %EmoteRandom%",null],
		[null, "I know you want to see more %PetName%. I just wonder if your %Cock% can handle it %EmoteRandom%",null],
		[null, "Show me how much you want to see all of me %PetName% %EmoteRandom%",null],
		[null, "Stroke and suffer for me %PetName%, show me how much you worship me",null],
		[null, "Can you see how wet I get when you stroke for me %PetName%?",null],
		[null, "If you could feel what I'm feeling in my hands right now, you'd die a happy man %Grin%",null],
		[null, "Fuck... My pussy feels so hot against my hand right now",null],
		[null, "If you could feel the warmth coming from my %Pussy% right now, you'd know how turned on I am",null],
		[null, "I love how many pictures there are online to tease you with %Lol%","showTeaseImage()"],
		[null, "I love how many pictures there are in your hard drive to tease you with %Lol%","showLocalPicture()"],// @ShowLocalImage
		[null, "I wonder if this makes the ache worse for you","showTeaseImage()"],
		[null, "I don't think I could ever get tired of looking at pictures like this %Grin%","showLocalPicture()"],
		[null, "This probably won't help your ache, but I'm %Gonna% show it to you anyway %Lol%","showTeaseImage()"],
		[null, "This should make you a little more desperate","showTeaseImage()"],
		[null, "Don't look at this picture I just found if you don't want to ache","showTeaseImage()"],
		[null, "So much sexiness in these blogs, too bad you can't enjoy it %Grin%","showTeaseImage()"],
		[null, "This is pretty sexy","showLocalPicture()"],
		[null, "This is a pretty sexy girl","showTaggedImage(4,[\"ONEFEMALE\"])"], //@ShowTaggedImage @TagArtwork
		[null, "I wonder how much bluer your balls will get looking at this? %Grin%","showTeaseImage()"],
		[null, "That kinda looks like fun %Grin%","showCategoryImage(\"LESBIAN\")"], //@ShowLesbianImage
		[null, "I'd so be down for this","showCategoryImage(\"LESBIAN\")"],
		[null, "I kinda wish I was part of this action too %Grin%","showCategoryImage(\"LESBIAN\")"],
		[null, "I'm not %Gonna% lie, this one <i>really</i> turns me on","showCategoryImage(\"LESBIAN\")"],
		[null, "Fuck... I don't know who aches more looking at this, me or you %Lol%","showCategoryImage(\"LESBIAN\")"],
		[null, "I think they should put those tongues to better use in <i>my</i> %Pussy% instead %Grin%","showCategoryImage(\"LESBIAN\")"],
		[null, "If I was there I'd be making those girls <i>beg</i> for that kind of pleasure","showCategoryImage(\"LESBIAN\")"],
		//@DommeLevel1 @FirstRound 
		["checkOldDommeLevel(1)&&firstRound()","I'm %Gonna% tease that %Cock% with so much pleasure today",null],
		["checkOldDommeLevel(2)&&firstRound()","I'm %Gonna% tease that %Cock% with so much pleasure today",null],
		["checkOldDommeLevel(3)&&firstRound()","I'm %Gonna% tease that %Cock% like crazy today",null],
		["checkOldDommeLevel(4)&&firstRound()","I'm %Gonna% put that %Cock% through hell today",null],
		["checkOldDommeLevel(5)&&firstRound()","I'm %Gonna% destroy that %Cock% with ache today",null],
		[null, "I'm %Gonna% make you regret every single picture you have on that hard drive %Grin%","showLocalPicture()"],
		[null, "Oooh, I can see why you saved this one %Lol%","showLocalPicture()"],
		[null, "I may have to save a copy of this one for myself %Grin%","showLocalPicture()"],
		[null, "You have good taste in porn, I'll give you that much %Grin%","showLocalPicture()"],
		[null, "I wonder what was going through your head when you saved <i>this</i> one %Grin%","showLocalPicture()"],
		[null, "%EmoteMoan% I fucking <i>love</i> this picture","showLocalPicture()"],
		[null, "It's so much fun going through your hard drive and finding pictures like <i>this</i> %Grin%","showLocalPicture()"],
		[null, "This is almost as sexy as some of the stuff <i>I</i> say %Grin%","showCategoryImage(\"CAPTIONS\")"], //@ShowCaptionsImage
		[null, "I'll have to remember some of these lines to use against you later %Grin%","showCategoryImage(\"CAPTIONS\")"],
		[null, "Well, at least now I know how you liked to be talked to %Grin%","showCategoryImage(\"CAPTIONS\")"],
		[null, "So this is the kind of stuff that turns you on huh? I'll remember that %Grin%","showCategoryImage(\"CAPTIONS\")"],
		[null, "So this is the kind of girl you <i>really</i> want me to be huh? %Grin%","showCategoryImage(\"CAPTIONS\")"],
		[null, "Nothing turns me on more than you making yourself horny for me like this %PetName%",null],
		[null, "Nothing turns me on more than you making yourself horny for me like this %PetName% ",null],
		[null, "I wonder if I could make you pray to me like a true Goddess...",null],
		[null, "When I think about your face between my thighs right now... %EmoteMoan%",null],
		[null, "Come on %Name%, show me how much of a pervert you really are ",null],
		[null, "I love how much you love being my bitch",null],
		[null, "I'm so horny just thinking of what I will do to you",null],
		[null, "We'll need to get those balls nice and full before we continue...",null],
		[null, null,"question(\"Can you feel your %Balls% filling up with cum?\",\"blue_BallsResponse()\")"],// @ResponseYes(Blue Balls) 
		[null, "I hope those %Balls% are absolutely swollen with cum for me",null],
		[null, null,"question(\"Are you saving up lots of cum for me?\",\"wantToBeAGoodBoyResponse()\")"],// @ResponseYes(WantToBeAGoodBoy) 
		[null, "I love that you save your cum for me, you're such a good %PetName% %Smile%",null],
		[null, "Your %Cock% must be throbbing so much right now",null],
		//@Variable[%DateDifference%(AV_SessionTime,minutes)]>[15] 
		["checkMinutesPassed(15)","You look like you're just about to burst... %Grin%",null],
		[null, "You'd better not be thinking of cumming now, %PetName%",null], 
		[null, "You'd better not drip precum on the floor, or I might have to make you lick it up %Grin%",null],
		[null, null, "question(\"Isn't that the most delicious ache in your %Cock%?\",\"imAchingResponse()\")"],//  @ResponseYes(Im Aching) 
		[null, "I can watch you stroke all day... never letting you cum ",null],
		[null, "You just can't help it can you...", "run(\"Custom\"+separator+\"CallReturn\"+separator+\"pvTaunt_JustCantHelpIt.js\")"], //@CallReturn(Custom/CallReturn/pvTaunt_JustCantHelpIt.txt)
		[null, "It's so much fun watching you slowly "+random("lose your mind","go completely crazy")+"  %Laugh%",null],
		[null, "You're so easy to control, %Name%",null],
		[null, "It's amazing how the sight of a beautiful woman just makes you weak in the knees...",null],
		[null, "I love how %JerkingOff% reduces you to a helpless puppet %EmoteHappy%",null],
		[null, "You'd do this all day if you could, wouldn't you?",null],
		[null, "Don't forget to give the head some pleasure, %Name% %Smile%",null],
		[null, "With every stroke you become more and more addicted to me, don't fight it",null],
		[null, "Show me that you can last a long time for me",null],
		[null, "I wonder what it will take to <i>really</i> break you %Grin%",null],
		[null, "Come on, prove to me that you are worth my time",null],
		[null, "I'm going to make you so desperate you will do anything",null],
		[null, "I want your %Cock% to cry tears of precum",null],
		[null, "I'm going to tease and edge you until you are a drooling mess",null],
		[null, null, "question(\"Do you regret becoming my little stroke slut yet? %Grin%\",\"regretMeetingYouResponse()\",\"gladIMetYouResponse()\")"],// @ResponseYes(RegretMeetingYou) @ResponseNo(GladIMetYou)
		[null, "I wonder how many orgasm you would give up just to touch me once...",null],
		[null, "Just keep stroking, I'll tell you when you're allowed to edge",null],
		[null, "Each stroke will only take you deeper into submission",null],
		[null, "You couldn't stop %JerkingOff% for me even if you wanted to",null],
		[null, "You love doing this, just give in to the feeling",null],
		[null, "%EmoteMoan% I need someone to come over and lick my pussy right now",null],
		[null, "Show me what a good toy you can be for me",null],
		[null, "You're only going to grow more an more desperate",null],
		[null, "That ache in your %Balls% is going to deepen with every precious stroke",null],
		[null, "When were done %GeneralTime% I want you to have a big puddle of precum in front of you",null],
		[null, "Being obedient just makes you even more aroused with every passing second",null],
		[null, "Arousal is obedience, %PetName%",null],
		[null, "You may think you know what you want, but I know what you need",null],
		["checkMinutesPassed(15)"," That %Cock% must be getting so sensitive now...",null],
		[null, "I know you can take more... I'm going to test your limits, %PetName%",null],
		[null, "Don't stop until I tell you to stop, %Name%",null],
		[null, "I want your %Balls% swollen and your %Cock% "+random("pulsing","throbbing"),null],
		[null, "I want you to feel so good it hurts %Grin%",null],
		[null, "You're going to learn what true submission feels like",null],
		[null, "I wish I could feel how hard your %Cock% is right now",null],
		[null, "I wish you could feel how wet my pussy is right now",null],
		[null, "This picture is so hot","showCategoryImage(\"LESBIAN\")"],
		[null, "There's something so sensual about girl on girl action...","showCategoryImage(\"LESBIAN\")"],
		[null, "These captioned pics are great for inspiration %EmoteHappy%","showCategoryImage(\"CAPTIONS\")"],
		[null, "Something tells me you have a thing for dominant women %Laugh%","showCategoryImage(\"CAPTIONS\")"],
		[null, "Now this is something I can agree on %Smile%","showCategoryImage(\"CAPTIONS\")"],
		[null, "I would love to be fucked like this","showCategoryImage(\"HARDCORE\")"], //@ShowHardcoreImage
		[null, "Little by little you're turning into my horny little minion",null],
		[null, "With every stroke you fall deeper into my control",null],
		[null, "Be careful not drip precum on the floor, that will leave a stain %Laugh%",null],
		[null, "Make that %Cock% even harder, you can do it %Name%",null],
		[null, "You're always so eager to follow my commands",null],
		[null, "You have no choice but to simply do whatever I tell you to do",null],
		[null, "No need to think right now, just stroke",null],
		["checkMinutesPassed(15)"," Your %Cock% must be getting so sensitive now...",null],
		[null, "This just never gets old, does it...",null],
		[null, "Show me how much you want to serve me",null],
		[null, "Your hard drive is just a landfill of smut, isn't it %Laugh%","showLocalPicture()"],
		[null, "It's a miracle your hard drive hasn't buckled under the weight of all this porn...","showLocalPicture()"],
		[null, "As long as you keep pics like this, I might as well use them against you %Grin%","showLocalPicture()"],
		[null, "I have to admit, this is pretty damn hot","showLocalPicture()"],
		[null, "There should be a law against this level of hotness %EmoteMoan%","showCategoryImage(\"LESBIAN\")"],
		[null, null, "question(\"Tell me, %SubName% are you my bitch?\",\"call_MeResponse()\",\"iAmNotYourBitchResponse()\")"],// @ResponseYes(Call Me) @ResponseNo(IAmNotYourBitch)
		[null, "I can hardly wait to make you edge again, I love seeing your struggle with that %EmoteHappy%",null],
		[null, "Your %Balls% must be tightening with frustration",null],
		[null, "You know you could never say no to me, %PetName% %Smile%",null],
		[null, "What else are you going to do with your life but stroke for me... nothing %Smile%",null],
		[null, "You have no choice but to simply obey my every command",null],
		[null, "It would probably be best if you stay needy and don't cum %GeneralTime%",null],
		[null, "I might be becoming just as addicted to this as you are",null],
		[null, "You're gonna have to get al lot more horny and frustrated to satisfy me %GeneralTime%",null],
		[null, "I don't think I could ever put up with someone telling me how to masturbate %Lol%",null],
		[null, "You'd do anything to kiss a butt like that, wouldn't you?","showCategoryImage(\"BUTTS\")"],
		[null, "The more frustrating this is for you, the more I will enjoy it",null],
		[null, "I love it when that %Cock% is so hard and desperate",null],
		[null, "Just think about how good it will feel when I finally let you pump all that cum out",null],
		[null, "OMG I want to squeeze those so badly %EmoteHappy%","showCategoryImage(\"BOOBS\")"],
		[null, "Now that's a butt that looks like it could use a spanking %EmoteHappy%","showCategoryImage(\"BUTTS\")"],
		[null, "Mmm yes... arousal makes you so obedient, %PetName%",null],
		[null, "You can thank me for letting you stroke if you want, %PetName%",null],
		[null, "If "+random("it feels like","you think")+" I'm being "+random("cruel","mean")+" to you now... I can do "+random("much","a lot")+" worse, %PetName% %Grin%",null],
		[null, null, "question(\"Isn't your life so much easier when you're simply following my orders? %Smile%\",\"iLoveBeingControlledResponse()\")"],//  @ResponseYes(ILoveBeingControlled) 
		[null, "So hot %EmoteMoan%","showCategoryImage(\"LESBIAN\")"],
		[null, "No comment... just putting this up there for your enjoyment %Smile%","showTeaseImage()"],
		[null, "Fascinating how the more I tease you, the more devoted you become %Smile%",null],
		[null, "Making you squirm turns me on so much",null],
		[null, "C'mon %Name%, throb and leak for me",null],
		[null, "Your suffering is such a turn on for me",null],
		[null, "In my book, there's no such thing as too desperate or too frustrated",null],
		[null, "Those poor %Balls% are going to turn purple before I'm done with you %GeneralTime%",null],
		[null, "Keep stroking, you can play with your %Balls% too if you want",null],
		[null, "You seem to be enjoying yourself, %Name% %Smile%\",\"feels_GoodResponse()\")"], //@ResponseYes(Feels Good)
		[null, "I hope you realize how lucky you are that I let you %JerkOff% for me",null],
		[null, "The longer I tease you, the more devoted you become to me",null],
		[null, "I'm going to make your %Cock% drip like a leaky faucet %Laugh%",null],
		[null, "You're here to serve and amuse me, never forget that, %Name%",null],
		[null, "Such an amazing ass this %EmoteMoan%","showCategoryImage(\"BUTTS\")"], //@ShowButtImage
		[null, "Do I still need to say this? Boobs. Are. Awesome. Period.","showCategoryImage(\"BOOBS\")"],
		[null, "Is that your phone in your pocket or are you just a total pervert %Lol% ",null],
		[null, "A girl's gotta have a hobby - mine just happens to be making you edge your %Cock% over and over",null],
		[null, "Just stare at my hot body, %Name%", "run(\"Custom\"+separator+\"CallReturn\"+separator+\"pvTaunt_DoYouHateIt.js\")"], //@CallReturn(Custom/CallReturn/pvTaunt_DoYouHateIt.txt)
		[null, null, "question(\"Mmm...yes... you're just so fucking horny right now, aren't you?\",\"gNMHornyResponse()\")"], //@ResponseYes(Ark_Horny)
		[null, null, "question(\"I'm not cruel to tease you the way I do, am I? %Giggles%\",\"cruelResponse()\")"], //@ResponseYes(Cruel)
		[null, null, "question(\"When I tell you to %JerkOff% your submissive little heart just melts, doesn't it?\",\"wantToServeResponse()\")"], //@ResponseYes(WantToServe) 
		[null, null, "question(\"Men need to be controlled, don't you agree, %PetName%?\",\"menNeedControlResponse()\")"], //@ResponseYes(MenNeedControl)
		[null, "You could be having this right now... instead you're here %JerkingOff% for me like a good %PetName%","showCategoryImage(\"HARDCORE\")"],
		[null, "Stroke, stroke, stroke... this is what you do best, isn't it? You sure practice a lot %Laugh%",null],
		[null, "I don't think there's anything I like as much as I like making a boy squirm",null],
		[null, "This isn't ever going to end, you know that right? I own you now and I'm never letting you go",null],
		[null, "I love doing this, %PetName%... you do realize that's bad news for you, right? %Grin%",null],
		[null, "Don't forget %PetName% - I make the rules, you are here to serve me and follow instructions",null],
		[null, "I don't think you could ever go back to 'normal' masturbation... you'll always need to be told what to do",null],
		[null, "Your %Cock% and %Balls% belong to me, you have no control over them anymore, %PetName%",null],
		[null, "Poor %SubName%... you probably can't even remember what it was like to have control over that %Cock%",null],
		[null, "Good %PetName%... just keep %JerkingOff%",null],
		[null, "I'm going to drive you crazy and there's nothing you can do about it %Grin%",null],
		[null, "Don't forget the head - I want full strokes and not just the shaft, %PetName%",null],
		[null, "Stroke, but don't cum - that's all you have to do right now",null],
		//@GoodMood 
		["goodMood()","You're such a good %PetName% for me right now %Smile%",null],
		["goodMood()", null, "question(\"Are you enjoying yourself, %PetName%? %Smile%\",\"ark_Having_FunResponse()\")"], //@ResponseYes(Ark_Having Fun)
		["goodMood()", null, "question(\"I hope you're having a good time jerking that %Cock% right now %Smile%\",\"ark_Having_FunResponse()\")"],
		["goodMood()", null, "question(\"Does it feel good to %JerkOff% right now? %Smile%\",\"feels_GoodResponse()\")"],
		//@NeutralMood 
		["neutralMood()", null, "question(\"Does it feel good to %JerkOff% right now? %Smile%\",\"feels_GoodResponse()\")"],// @ResponseYes(Feels Good)
		["goodMood()", null, "question(\"Does it make you feel good to %JerkOff% %Name%?\",\"feels_GoodResponse()\")"],
		["neutralMood()", null, "question(\"Does it make you feel good to %JerkOff% %Name%?\",\"feels_GoodResponse()\")"],
		//@BadMood 
		["badMood()","You deserve to fucking suffer for me now, %PetName%",null],
		["checkOldDommeLevel(1)&&firstRound()","I'm %Gonna% tease that %Cock% with so much pleasure today",null],
		["checkOldDommeLevel(2)&&firstRound()","I'm %Gonna% tease that %Cock% with so much pleasure today",null],
		["checkOldDommeLevel(3)&&firstRound()","I'm %Gonna% tease that %Cock% like crazy today",null],
		["checkOldDommeLevel(4)&&firstRound()","I'm %Gonna% put that %Cock% through hell today",null],
		["checkOldDommeLevel(5)&&firstRound()","I'm %Gonna% destroy that %Cock% with ache today",null],
		["checkOldApathyLevel(1)","I love knowing you've given me your %Cock% to tease like this",null],
		["checkOldApathyLevel(2)","I love knowing you've given me your %Cock% to tease like this",null],
		["checkOldApathyLevel(3)","I love the way teasing your %Cock% makes me feel",null],
		["checkOldApathyLevel(4)","Teasing your %Cock% is so much fun I just don't know if I can stop myself %Grin%",null],
		["checkOldApathyLevel(5)","%EmoteMoan% I love making that fucking %Cock% <i>suffer</i>",null],
		[null, "Nothing turns me on more than you making yourself horny for me like this %PetName%",null],
		["firstRound()","We're just getting started %PetName%",null],
		//@NotFirstRound 
		["!firstRound()","It's only %Gonna% keep getting worse from here %PetName%",null],
		[null, "I will teach you to learn control",null],
		[null, "I love to see a slave %Aching% like this for your Mistress",null],
		//@Flag(AV_DommeMistress) 
		["getVar(\"AV_DommeMistress\",false)","I want to %Hurt% you so bad %PetName%", "run(\"Interrupt\"+separator+\"AV_Pins.js\")"],  //@CallReturn(Interrupt\AV_Pins.txt)
		["getVar(\"AV_DommeMistress\",false)","I want to hurt those you so much that you start to crave the pain %SubName%", "run(\"Interrupt\"+separator+\"AV_Pins.js\")"],
		["getVar(\"AV_DommeMistress\",false)","Being cruel to you turns me on so much ", "run(\"Interrupt\"+separator+\"AV_Pins.js\")"],
		["getVar(\"AV_DommeMistress\",false)","I know you want you to %Ache% for me ", "run(\"Interrupt\"+separator+\"AV_Pins.js\")"],
		[null, "%ST_Speed%",null],
		[null, "%ST_Ache%",null],
		[null, "%ST_Beg%",null],
		[null, "%ST_Blog%","showLocalPicture()"],
		[null, "%ST_Demean%",null],
		[null, "%ST_Images%","showLocalPicture()"],
		[null, "%ST_Squirm%",null],
		[null, "%ST_Stroke%",null],
		[null, "%ST_Sub%",null],
		[null, "%ST_TagState%",null],
		[null, "%ST_Tease%",null],
		[null, "%ST_Top%",null],
		//@Flag(av_fetish_rough) 
		["getVar(\"av_fetish_rough\",false)","Come on. Show me how much of a pervert you really are.",null],
		["getVar(\"av_fetish_rough\",false)", null, "question(\"Maybe it's me mocking you that gets you off. Do you like dominant women, pervert?\",\"submissiveResponse()\")"], //@ResponseYes(Submissive)
		["getVar(\"av_fetish_rough\",false)","I bet you like the way I'm treating you. You like being called a pervert and disgusting and shameful and gross.",null],
		["getVar(\"av_fetish_pegging\",false)","You really think I was going to take no for an answer? I want that fucking ass, and I'm going to take it!",null],
		//@Flag(av_fetish_pegging) 
		["getVar(\"av_fetish_pegging\",false)","So, I went to a porn shop and I bought a strap on. And one day... Hmmm.",null],
		["getVar(\"av_fetish_pegging\",false)","Imagine how good it'll feel to have my big strapon plugging up your ass.",null],
		["getVar(\"av_fetish_pegging\",false)","One of my favourites fantasies is to fuck you in the %Ass% with my strap-on.",null],
		//@Flag(av_fetish_foot) 
		["getVar(\"av_fetish_foot\",false)","I'm not sure you deserve to look at my body any more slave. For now my %Feet% is all you can stare at.",null],
		["getVar(\"av_fetish_foot\",false)","Do you like my %Feet% slave? Do you like how %Sexy% my foot looks in these stockings. ",null],
		["getVar(\"av_fetish_foot\",false)","Wouldn't you love to cum before my %Feet%?",null],
		["getVar(\"av_fetish_pegging\",false)","I know how much you love being my bitch.",null],
		["getVar(\"av_fetish_rough\",false)","I know how much you love being my bitch.",null],
		["getVar(\"av_fetish_rough\",false)","It's absolutely an amazing experience to have me hold your %Cock% in one hand and a beat your ass with the other!",null],
		//@Flag(av_fetish_pain) 
		["getVar(\"av_fetish_pain\",false)","It's absolutely an amazing experience to have me hold your %Cock% in one hand and a beat your ass with the other!",null],
		["getVar(\"av_fetish_pegging\",false)","I'm going to ruin normal sex for you. From now on you'll always want to be the one getting fucked.",null],
		["getVar(\"av_fetish_pegging\",false)","That's right bitch, spread your legs for me. I own you now.",null],
		["getVar(\"av_fetish_pegging\",false)","I'm gonna make you my bitch tonight.",null],
		["getVar(\"av_fetish_pegging\",false)","Get my crop and strapon. Today I'm going to make you scream.",null],
		["getVar(\"av_fetish_rough\",false)","That's right bitch, spread your legs for me. I own you now.",null],
		["getVar(\"av_fetish_rough\",false)","I'm gonna make you my bitch tonight.",null],
		[null, "I'm so horny just thinking of what I will do to you.",null],
		[null, "Let me fuck your mind until you cum to your senses.",null],
		[null, "Cumming is difficult to resist when your Domme knows how to push your limits.",null],
		[null, "It's so curious the way your behavior improves almost immediately when I forbid your orgasms. ",null],
		//@Flag(av_fetish_cei) 
		["getVar(\"av_fetish_cei\",false)","I know you're nervous, %Slave%, but I WANT you to be my %Submissive% cum-eater. So don't keep me waiting. ",null],
		["getVar(\"av_fetish_rough\",false)","I know you're nervous, %Slave%, but I WANT you to be my %Submissive% bitch. So don't keep me waiting. ",null],
		["getVar(\"av_fetish_pegging\",false)","I know you're nervous, %Slave%, but I WANT you to be my %Submissive% slut. So don't keep me waiting. ",null],
		[null, "We'll need to get those balls nice and full before we continue…",null],
		[null, "Make it hurt for me baby, come onnnnnnnn",null],
		[null, "My precious %Slave%. Always stroking….never cumming, such a good boy.",null],
		["getVar(\"av_fetish_rough\",false)","You look so ridiculous right now",null],
		[null, null, "question(\"Can you feel your %Balls% filling up with cum?\",\"blue_BallsResponse()\")"], //@ResponseYes(Blue Balls)
		[null, "I hope those %Balls% are absolutely swollen with cum for me.",null],
		[null, null, "question(\"Are you saving up lots of cum for me?\",\"drippingResponse()\")"], //@ResponseYes(Dripping)
		[null, "I love that you save your cum for me. You're such a good %Slave%",null],
		[null, "Wow, your penis is throbbing so much! You're such a good %Slave%",null],
		[null, "I'm so excited that you're holding your cum in for me! You're such a good %Slave%",null],
		[null, "I hope those %Balls% are absolutely swollen with cum for me.",null],
		[null, "You look like you're just about to burst. I hope you're not thinking about cumming yet!",null],
		[null, "I can tell you've been a good boy, you're leaking so much pre-cum for me today!",null],
		[null, "You'd better clean up those drips on your chair… they're going to stain…",null],
		[null, null, "question(\"Your %Balls% are going to be purple, you know that right?\",\"blue_BallsResponse()\")"],
		["getVar(\"av_fetish_pegging\",false)","Let me see here, ah yes. Here are some tools that we could use to get those balls extra full without making any accidents.","showTaggedImage(4,[\"DILDO\"])"], //@ShowTaggedImage @TagStrapon 
		[null, "Your %Balls% have to get full before the REAL fun starts.",null],
		[null, "Milking is the only way a %Slave% can cum! ...but YOU are not to cum!!",null],
		[null, null, "question(\"Isn't that the most delicious ache in your %Cock%?\",\"imAchingResponse()\")"], //@ResponseYes(I'm Aching)
		//@SystemMessage 
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"01.mp3\",true)"], //@PlayAudio[tease\SeSp\01.mp3]
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"02.mp3\",true)"],
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"03.mp3\",true)"],
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"04.mp3\",true)"], 
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"05.mp3\",true)"],  
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"06.mp3\",true)"],  
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"07.mp3\",true)"],  
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"08.mp3\",true)"],  
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"09.mp3\",true)"],  
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"10.mp3\",true)"],  
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"11.mp3\",true)"],  
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"12.mp3\",true)"],  
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"13.mp3\",true)"],  
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"14.mp3\",true)"],  
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"15.mp3\",true)"],  
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"16.mp3\",true)"],  
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"17.mp3\",true)"],  
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"18.mp3\",true)"],  
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"19.mp3\",true)"],  
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"20.mp3\",true)"],  
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"21.mp3\",true)"],  
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"22.mp3\",true)"],  
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"23.mp3\",true)"],  
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"24.mp3\",true)"],  
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"25.mp3\",true)"],  
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"26.mp3\",true)"],  
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"27.mp3\",true)"],  
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"28.mp3\",true)"],  
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"29.mp3\",true)"],  
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"30.mp3\",true)"],  
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"31.mp3\",true)"],  
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"32.mp3\",true)"],  
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"33.mp3\",true)"],  
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"34.mp3\",true)"],  
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"35.mp3\",true)"],  
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"36.mp3\",true)"],  
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"37.mp3\",true)"],  
		["setSenderDelay()","%DomName% turned on the mic","playAudio(\"Audio\" + java.io.File.separator + \"tease\" + java.io.File.separator + \"SeSp\" + java.io.File.separator + \"38.mp3\",true)"],  
		[null, "I love %AV_Ilove%",null],
		[null, "Do you like %AV_DoYouLike%",null],
		[null, "I like watching you stroke at my command.",null],
		[null, "I can watch you stroke all day... Never letting you cum.",null],
		[null, "Your %Torture% makes me wet, %Slave%",null],
		[null, "%Torturing% you is the best thing ever!",null],
		[null, "%Torturing% you is so fun, %PetName%.",null],
		[null, "%Torturing% you is the best entertainment a women can wish for...",null],
		[null, "%Torturing% you makes me so wet... But I'm getting off each day, unlike you.",null],
		[null, null, "question(\"You love your Mistress teasing you?\",\"im_in_Love_with_YouResponse()\")"], //@ResponseYes(I'm in Love with You)
		[null, null, "question(\"Oh, is that a tear of frustration your %Cock% has shed?\",\"drippingYouResponse()\")"], //@ResponseYes(Dripping)
		["getVar(\"av_fetish_pegging\",false)","What? It's not that big. Don't worry, I'll make it fit.","showTaggedImage(4,[\"DILDO\"])"], //@ShowTaggedImage @TagStrapon
		["getVar(\"AV_DommeMistress\",false)","Bad slaves don't get to cum, all they get is denial. ",null],
		[null, "Focus on how good it would feel to just let the ache settle and fade away... ",null],
		["getVar(\"AV_TaskON\",false)","We should push yours limites a little...", "run(\"Interrupt\"+separator+\"AV_Tasks.js\")"], //@Interrupt(AV_Tasks)
		["getVar(\"AV_TaskON\",false)","I'm so horny just thinking of what I will do to you.", "run(\"Interrupt\"+separator+\"AV_Tasks.js\")"], 
		["getVar(\"AV_Know_00\",false)","%Stroke% for "+getVar("AV_Persona01"),"showImage(\"Images\"+separator+\"av_imagens\"+separator+\"02\"+separator+\"*.jpg\")"],
		["getVar(\"AV_Know_00\",false)","%Stroke% for "+getVar("AV_Persona01"),"showImage(\"Images\"+separator+\"av_imagens\"+separator+\"02\"+separator+\"*.jpg\")"], 
		["getVar(\"AV_Know_00\",false)","%Stroke% for "+getVar("AV_Persona01"),"showImage(\"Images\"+separator+\"av_imagens\"+separator+\"02\"+separator+\"*.jpg\")"],
		["getVar(\"AV_Know_00\",false)","%Stroke% for "+getVar("AV_Persona01"),"showImage(\"Images\"+separator+\"av_imagens\"+separator+\"02\"+separator+\"*.jpg\") ,speedUpStroking()"], 
		["getVar(\"AV_Know_01\",false)","%Stroke% for "+getVar("AV_Persona02"),"showImage(\"Images\"+separator+\"av_imagens\"+separator+\"03\"+separator+\"*.jpg\")"], 
		["getVar(\"AV_Know_01\",false)","%Stroke% for "+getVar("AV_Persona02"),"showImage(\"Images\"+separator+\"av_imagens\"+separator+\"03\"+separator+\"*.jpg\")"], 
		["getVar(\"AV_Know_01\",false)","%Stroke% for "+getVar("AV_Persona02"),"showImage(\"Images\"+separator+\"av_imagens\"+separator+\"03\"+separator+\"*.jpg\")"],
		["getVar(\"AV_Know_01\",false)","%Stroke% for "+getVar("AV_Persona02"), "showImage(\"Images\"+separator+\"av_imagens\"+separator+\"03\"+separator+\"*.jpg\") ,speedUpStroking()"], 
		["getVar(\"AV_Know_03\",false)","%Stroke% for "+getVar("AV_Persona04"),"showImage(\"Images\"+separator+\"av_imagens\"+separator+\"04\"+separator+\"*.jpg\")"], 
		["getVar(\"AV_Know_03\",false)","%Stroke% for "+getVar("AV_Persona04"),"showImage(\"Images\"+separator+\"av_imagens\"+separator+\"04\"+separator+\"*.jpg\")"],
		["getVar(\"AV_Know_03\",false)","%Stroke% for "+getVar("AV_Persona04"),"showImage(\"Images\"+separator+\"av_imagens\"+separator+\"04\"+separator+\"*.jpg\")"], 
		["getVar(\"AV_Know_03\",false)","%Stroke% for "+getVar("AV_Persona04"),"showImage(\"Images\"+separator+\"av_imagens\"+separator+\"04\"+separator+\"*.jpg\") ,speedUpStroking()"], 
		["getVar(\"AV_Know_12\",false)","%Stroke% for "+getVar("AV_Persona13"),"showImage(\"Images\"+separator+\"av_imagens\"+separator+\"01\"+separator+\"*.jpg\")"],
		["getVar(\"AV_Know_12\",false)","%Stroke% for "+getVar("AV_Persona13"),"showImage(\"Images\"+separator+\"av_imagens\"+separator+\"01\"+separator+\"*.jpg\")"], 
		["getVar(\"AV_Know_12\",false)","%Stroke% for "+getVar("AV_Persona13"),"showImage(\"Images\"+separator+\"av_imagens\"+separator+\"01\"+separator+\"*.jpg\")"],
		//@ShowImage[av_imagens\01\*.jpg] 
		//@Flag(AV_Know_12) 
		["getVar(\"AV_Know_12\",false)","%Stroke% for "+getVar("AV_Persona13"), "showImage(\"Images\"+separator+\"av_imagens\"+separator+\"01\"+separator+\"*.jpg\") ,speedUpStroking()"], //@ShowImage[av_imagens\01\*.jpg]
		["getVar(\"AV_DommeMistress\",false)","Hm, I feel a bit %Evil% today.",null],
		["getVar(\"AV_DommeMistress\",false)","Have you ever heard the phrase \"no pleasure without pain\"?",null],
		[null, "I hope those %Balls% are absolutely swollen with cum for me. " ,"speedUpStroking(5)"],
		[null, "You look like you're just about to burst. I hope you're not thinking about cumming yet! " ,"speedUpStroking(5)"],
		[null, "I can tell you've been a good boy, you're leaking so much pre-cum for me today! " ,"speedUpStroking(5)"],
		[null, "I'm %Gonna% make sure that %Cock% remembers every single stroke you give to me %Grin% " ,"speedUpStroking(5)"],
		[null, "I'm loving every second of this %EmoteRandom% " ,"speedUpStroking(5)"],
		[null, "You were made to suffer for me %PetName% " ,"speedUpStroking(5)"],
		["(getVar(\"orgasmChance\")==0)","Feels good doesn’t it pet? You know you’re not cumming today...edging yes but no cumming, no way",null],
		["(getVar(\"orgasmChance\")<=25)","Feels good doesn’t it pet? You know you’re probably not cumming today...edging yes but no cumming",null],
		[null, "Your %Cock% is desperately trying to get harder, awwwwwww poor thing",null],
		["firstRound()","This is going to a fun %GeneralTime%, I can already tell.",null],
		["firstRound()","Your Mistress is hungry. Let me see how well my new toy works.",null],
		[null, "I will tease you as much as I please %PetName%.",null],
		[null, "You want to cum. Not until I say so.",null],
		[null, "Perhaps I'll stop and put a %ChastityCage% around you, and %Laugh% at your displeasure.",null],
		[null, "Don't cum until I command you to %Slave%!",null],
		[null, "How does it feel knowing that I control your very will to orgasm?",null],
		[null, "If only you could see your face. So helpless.",null],
		["getVar(\"AV_DommeMistress\",false)","Obey your Mistress and you shall be rewarded.",null],
		["getVar(\"AV_DommeMistress\",false)","Such a pitiful excuse for a slave. I will enjoy breaking you.",null],
		[null, "You better not cum without my permission %Slave%!",null],
		["getVar(\"AV_DommeMistress\",false)", null, "question(\"Do you like how your mistress treats you? I can give you so much more.\",\"call_MeResponse()\")"], //@ResponseYes(Call Me)
		[null, "Now prove to me that you are worthy to be my %PetName%",null],
		["badMood()","Don't you dare think that the I will be benevolent.",null],
		["badMood()","Don't think that I will be merciful when this is over.",null],
		[null, "Just remember, you don't have permission to cum yet.",null],
		[null, "Enjoy yourself, %PetName%, but not too much.",null],
		[null, "Shouldn't you be thanking your new Mistress?",null],
		[null, "I want to see your eyes roll back.",null],
		[null, "Such a good %PetName% you are, always so hard and ready.",null],
		[null, null, "question(\"Do you like how I am is using you?\",\"call_MeResponse()\")"],
		["getVar(\"av_fetish_cei\",false)","If you have precum leaking, lick it for me %PetName%",null],
		["getVar(\"av_fetish_cei\",false)","Maybe I'll let you cum just to see you eat it %lol%",null],
		["getVar(\"av_fetish_cei\",false)","Still remember the last time I made it lick your cum? Because I sure do... %EmoteMoan%",null],
		["getVar(\"AV_SubKnees\",false)","I hope you are still kneeling for me %PetName% %Grin%",null],
		["getVar(\"AV_SubKnees\",false)","How does it feel to kneel before me like that?",null],
		["getVar(\"AV_SubKnees\",false)","@SelfYoung How does it feel to kneel before a young girl like me?",null],
		["getVar(\"AV_SubKnees\",false)","I wonder if I could make you pray to me like a true Godess... %lol%",null],
		["getVar(\"AV_SubKnees\",false)", null, "question(\"Are your knees starting to hurt? I hope this add to your frustration %lol%\",\"ark_It_HurtsResponse()\")"], //@ResponseYes(Ark_It Hurts)
		["badMood()","I want you to repeat \"%DomHonorific% %DomName% is my only Godess\" until I tell you to stop stroking %Grin%",null],
		[null, "When I think about how you could be under my desk pleasuring me right now... %EmoteMoan%",null],
		["getVar(\"AV_DommeMistress\",false)","Sometimes i feel like just locking you up and throw away the key",null],
		["getVar(\"AV_DommeMistress\",false)","I dont believe men should ever orgasm, rather they should be drooling begging messes",null],
		["getVar(\"AV_SubKnees\",false)","Alright you can get back on your chair","delVar(\"AV_SubKnees\")"], //@DeleteFlag(AV_SubKnees)
		["getVar(\"AV_Pins\",false)","Alright you can take the clothespins off","delVar(\"AV_Pins\")"], //@DeleteFlag(AV_Pins)
		["getVar(\"AV_DommeMistress\",false)","I've got so many fun ideas to tease that %Cock% %GeneralTime% %Grin%", "run(\"Custom\"+separator+\"AV_Scripts\"+separator+\"Kneel.js\")"], //@CallReturn(Custom\AV_Scripts\Kneel.txt)
		["badMood()","I'm %Gonna% put that %Cock% through hell today", "run(\"Custom\"+separator+\"AV_Scripts\"+separator+\"Kneel.js\")"],
		//[null, null, "question(\"Do you want to spend more time with me %GeneralTime%, %SubName%?\",\"aV_Add_TimeResponse()\")"], //@ResponseYes(AV_Add_Time)
		["getVar(\"AV_Know_50\",false)","%Stroke% for "+getVar("AV_Persona50"),"showImage(\"Images\"+separator+\"av_imagens\"+separator+\"10\"+separator+\"*.jpg\")"],
		//@Flag(AV_Know_50) %Stroke% for %Var%[AV_Persona50] @ShowImage[av_imagens\10\*.jpg]
		["getVar(\"AV_Know_51\",false)","%Stroke% for "+getVar("AV_Persona51"),"showImage(\"Images\"+separator+\"av_imagens\"+separator+\"11\"+separator+\"*.jpg\")"],		
		["getVar(\"AV_Know_52\",false)","%Stroke% for "+getVar("AV_Persona52"),"showImage(\"Images\"+separator+\"av_imagens\"+separator+\"12\"+separator+\"*.jpg\")"],
		["getVar(\"AV_Know_53\",false)","%Stroke% for "+getVar("AV_Persona53"),"showImage(\"Images\"+separator+\"av_imagens\"+separator+\"13\"+separator+\"*.jpg\")"],
		["getVar(\"AV_Know_54\",false)","%Stroke% for "+getVar("AV_Persona54"),"showImage(\"Images\"+separator+\"av_imagens\"+separator+\"14\"+separator+\"*.jpg\")"],
		["getVar(\"AV_Know_55\",false)","%Stroke% for "+getVar("AV_Persona55"),"showImage(\"Images\"+separator+\"av_imagens\"+separator+\"15\"+separator+\"*.jpg\")"],
		["getVar(\"AV_Know_56\",false)","%Stroke% for "+getVar("AV_Persona56"),"showImage(\"Images\"+separator+\"av_imagens\"+separator+\"16\"+separator+\"*.jpg\")"], 
		["getVar(\"AV_Know_57\",false)","%Stroke% for "+getVar("AV_Persona57"),"showImage(\"Images\"+separator+\"av_imagens\"+separator+\"17\"+separator+\"*.jpg\")"],
		["getVar(\"AV_Know_58\",false)","%Stroke% for "+getVar("AV_Persona58"),"showImage(\"Images\"+separator+\"av_imagens\"+separator+\"18\"+separator+\"*.jpg\")"], 
		["getVar(\"AV_Know_59\",false)","%Stroke% for "+getVar("AV_Persona59"),"showImage(\"Images\"+separator+\"av_imagens\"+separator+\"19\"+separator+\"*.jpg\")"], 
		[null, "I love to see a slave %Aching% like this for your Mistress", "run(\"Interrupt\"+separator+\"AV_MiniControle.js\")"],//  @CallReturn(Interrupt\AV_MiniControle.txt)
		[null, "I love that you save your cum for me. You're such a good %Slave%", "run(\"Interrupt\"+separator+\"AV_MiniControle.js\")"],
		[null, "%Torturing% you is the best thing ever!", "run(\"Interrupt\"+separator+\"AV_MiniControle.js\")"],
		[null, "You're going to obey me. You're going to do whatever I want",null],
		[null, "Poor full balls, how much more can they take?",null],
		[null, "Massage your balls while you're stroking!",null],
		[null, "You can %Stroke% it harder than that, can't you? For me?",null],
		[null, "Go on, make yourself feel good!",null],
		[null, "Enjoy pumping that hard cock",null],
		[null, "Show me how you'd fuck me if I gave you the chance!",null],
		[null, "I want to see firm, full strokes from base to tip!",null],
		[null, "I bet you'd love to blow your load on me huh?",null],
		[null, null, "question(\"Could you handle me tuggin on your balls while you stroke that cock?\",\"wantYouToHurtMeResponse()\",\"aV_NoNeutralResponse()\")"],
		//		@ResponseYes(WantYouToHurtMe) @ResponseNo(AV_NoNeutral) 
		[null, "Watching you %Stroking% is getting me wet!",null],
		[null, "That's nice, build up a huge load!",null],
		[null, "Put on a nice show for me here!",null],
		[null, "This is making me wet baby, keep going!",null],
		[null, "I would love to milk some of that energy from you!",null],
		[null, "I love when you %Stroke% that hard shaft, and start building up a big load for me!",null],
		[null, "Keep %Stroking%, baby, I don't want you to stop.",null],
		[null, "Keep it up, no stopping yet...",null],
		[null, "Just keep %Stroking% like that for me, baby.",null],
		[null, "All you have to do is follow the beat.",null],
		[null, "Listen to the beat, baby. Nice full strokes.",null],
		[null, "%Stroke% to the beat!",null],
		[null, "Keep going... I bet it's so sensitive...",null],
		[null, "Come on, make me proud...",null],
		[null, "Make me happy "+random("%PetName%", "%SubName%")+"",null],
		["getVar(\"AV_DommeMistress\",false)","Make me happy %Slave%",null],
		[null, "You can do it, "+random("%PetName%", "%SubName%")+"",null],
		["getVar(\"AV_DommeMistress\",false)","You can do it, %Slave%",null],
		[null, "Come on, you can do it...",null],
		[null, "There's no giving up, "+random("%PetName%", "%SubName%")+"",null],
		["getVar(\"AV_DommeMistress\",false)","There's no giving up, %Slave%",null],
		[null, "I know you can take more.",null],
		[null, "Show me your resolve, "+random("%PetName%", "%SubName%")+"",null],
		["getVar(\"AV_DommeMistress\",false)","Show me your resolve, %Slave%",null],
		[null, "Take it all for me...",null],
		[null, "Don't give up... You can do it!",null],
		[null, "Such a good boy you are!",null],
		[null, "Don't be a pussy and try to keep up",null],
		[null, "That's right, good job, "+random("%PetName%", "%SubName%")+"",null],
		["getVar(\"AV_DommeMistress\",false)","That's right, good job, %Slave%",null],
		[null, "That's right, that's how I like you to be...",null],
		[null, "That's right, good slave...",null],
		[null, "That's right, good boy!",null],
		[null, "I'm here for you, "+random("%PetName%", "%SubName%")+"",null],
		["getVar(\"AV_DommeMistress\",false)","I'm here for you, %Slave%",null],
		[null, "I'm going to train you good, "+random("%PetName%", "%SubName%")+"",null],
		["getVar(\"AV_DommeMistress\",false)","I'm going to train you good, %Slave%",null],
		[null, "I'm here to help you become better, "+random("%PetName%", "%SubName%")+"",null],
		["getVar(\"AV_DommeMistress\",false)","I'm here to help you become better, %Slave%",null],
		[null, "Mistress will take a good care of you.",null],
		//@Flag(AV_DommeMistress, av_fetish_rough) 
		["(getVar(\"av_fetish_rough\",false) && getVar(\"AV_DommeMistress\",false))","I could be your girlfriend. Instead, I'm your mistress.",null],
		["getVar(\"AV_DommeMistress\",false)","I could be your girl, your fuck toy. Instead, YOU are my denied little toy!",null],
		["(getVar(\"av_fetish_rough\",false) && getVar(\"AV_DommeMistress\",false))","If I was your girlfriend, I'd give you heaven in bed. But I'm your Mistress, so no chance for that!",null],
		["getVar(\"AV_DommeMistress\",false)", null, "question(\"Do you like following my orders?\",null,\"punishResponse()\")"],// @ResponseNo(AV_Punishment)
		["getVar(\"AV_DommeMistress\",false)", null, "question(\"Do you like obeying me?\",null,\"punishResponse()\")"],
		["(getVar(\"av_fetish_rough\",false) && getVar(\"AV_DommeMistress\",false))", null, "question(\"You love women ordering you around, don't you?\",\"iLoveBeingControlledResponse()\",\"aV_NoNeutralResponse()\")"], //@ResponseYes(ILoveBeingControlled) @ResponseNo(AV_NoNeutral) 
		["getVar(\"AV_DommeMistress\",false)", null, "question(\"You love your Mistress teasing you?\",\"iLoveTeaseAndDenialResponse()\",\"aV_NoNeutralResponse()\")"], //@ResponseYes(ILoveTeaseAndDenial) @ResponseNo(AV_NoNeutral) 
		[null, "I know what's good for you.",null],
		[null, "You don't need to think. I know what you need.",null],
		[null, "I know what you want, "+random("%PetName%", "%SubName%")+"",null],
		["getVar(\"AV_DommeMistress\",false)","I know what you want, %Slave%",null],
		[null, "I know what's better for you.",null],
		[null, "I know what you need.",null],
		["getVar(\"AV_DommeMistress\",false)","Mistress knows what you need.",null],
		["getVar(\"AV_DommeMistress\",false)","Remember, Mistress knows your needs better than you!",null],
		[null, "Obey, "+random("%PetName%", "%SubName%")+". No thoughts needed.",null],
		[null, "All you can do is obey me.",null],
		[null, "Obey. You are mine, "+random("%PetName%", "%SubName%")+".",null],
		["getVar(\"AV_DommeMistress\",false)","Obey. You are mine, %Slave%",null],
		[null, "You will follow my every word, won't you, "+random("%PetName%", "%SubName%")+"?",null],
		["getVar(\"AV_DommeMistress\",false)", null, "question(\"You will follow my every word, won't you, "+random("%PetName%", "%SubName%")+"?\",null,\"punishResponse()\")"],
		["getVar(\"AV_DommeMistress\",false)","Will you make me proud? I'm your mistress, after all.",null],
		[null, "Follow my words... Loose yourself in my orders.",null],
		[null, "No choice, but to obey my every word...",null],
		[null, null, "question(\"Does obeying me make you hot?\",\"wantToServeResponse()\")"],  //@ResponseYes(WantToServe)
		[null, "Mmmm... Obey me, "+random("%PetName%", "%SubName%")+"...",null],
		[null, "Your obedience makes me hot...",null],
		[null, "Your obedience makes me so wet, "+random("%PetName%", "%SubName%")+"",null],
		[null, "This arrangement keeps me wet all day... Thinking about teasing you, and denying you.",null],
		[null, "This makes me so wet!",null],
		[null, "Your torment makes me wet, "+random("%PetName%", "%SubName%")+"",null],
		["getVar(\"AV_DommeMistress\",false)","Your torment makes me wet, %Slave%",null],
		[null, "Torturing you is the best thing ever!",null],
		[null, "Torturing you is so fun, "+random("%PetName%", "%SubName%")+"",null],
		[null, "Mmmm... Keep suffering for me, "+random("%PetName%", "%SubName%")+"",null],
		["getVar(\"AV_DommeMistress\",false)","Mmmm... Keep suffering for me, %Slave%",null],
		[null, "You like it when I do it?",null],
		[null, "I'm doing it for you, "+random("%PetName%", "%SubName%")+"",null],
		["(getVar(\"av_fetish_rough\",false) && getVar(\"AV_DommeMistress\",false))","This is the only sexual pleasure you deserve getting from a woman.",null],
		["(getVar(\"av_fetish_rough\",false) && getVar(\"AV_DommeMistress\",false))","Women are superior. Accept it.",null],
		["(getVar(\"av_fetish_rough\",false) && getVar(\"AV_DommeMistress\",false))","That's the only way you are getting any pleasure from me.",null],
		["(getVar(\"av_fetish_rough\",false) && getVar(\"AV_DommeMistress\",false))","Being teased by women is the best thing you deserve.",null],
		["(getVar(\"av_fetish_rough\",false) && getVar(\"AV_DommeMistress\",false))","Being toyed by women is all you are good for.",null],
		["(getVar(\"av_fetish_rough\",false) && getVar(\"AV_DommeMistress\",false))","Serving women is your only purpose.",null],
		["(getVar(\"av_fetish_rough\",false) && getVar(\"AV_DommeMistress\",false))","Obeying women is the only thing you are good for, slave.",null],
		[null, "Stroking for me, but holding your orgasms back... Mmm...",null],
		["getVar(\"AV_DommeMistress\",false)","<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_MistressTease.js\")"], //@MiniScript(AV_MistressTease) 
		["getVar(\"AV_DommeMistress\",false)","<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RNDMiss.js\")"], //@MiniScript(AV_RNDMiss) 
		//@NotFlag(AV_1RND01) <dontsend> @MiniScript(AV_RND01)
		["!getVar(\"AV_1RND01\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND01.js\")"],
		["!getVar(\"AV_2RND02\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND02.js\")"],
		["!getVar(\"AV_3RND03\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND03.js\")"],
		["!getVar(\"AV_4RND04\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND04.js\")"],
		["!getVar(\"AV_5RND05\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND05.js\")"],
		["!getVar(\"AV_6RND06\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND06.js\")"],
		["!getVar(\"AV_7RND07\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND07.js\")"],
		["!getVar(\"AV_8RND08\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND08.js\")"],
		["!getVar(\"AV_9RND09\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND09.js\")"],
		["!getVar(\"AV_0RND10\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND10.js\")"],
		["!getVar(\"AV_0RND11\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND11.js\")"],
		["!getVar(\"AV_0RND12\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND12.js\")"],
		["!getVar(\"AV_0RND13\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND13.js\")"],
		["!getVar(\"AV_0RND14\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND14.js\")"],
		["!getVar(\"AV_0RND15\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND15.js\")"],
		["!getVar(\"AV_0RND16\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND16.js\")"],
		["!getVar(\"AV_0RND17\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND17.js\")"],
		["!getVar(\"AV_0RND18\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND18.js\")"],
		["!getVar(\"AV_0RND19\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND19.js\")"],
		["!getVar(\"AV_0RND20\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND20.js\")"],
		["!getVar(\"AV_0RND21\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND21.js\")"],
		["!getVar(\"AV_0RND22\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND22.js\")"],
		["!getVar(\"AV_0RND23\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND23.js\")"],
		["!getVar(\"AV_0RND24\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND24.js\")"],
		["!getVar(\"AV_0RND25\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND25.js\")"],
		["!getVar(\"AV_0RND26\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND26.js\")"],
		["!getVar(\"AV_0RND27\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND27.js\")"],
		["!getVar(\"AV_0RND28\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND28.js\")"],
		["!getVar(\"AV_0RND29\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND29.js\")"],
		["!getVar(\"AV_0RND30\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND30.js\")"],
		["!getVar(\"AV_0RND31\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND31.js\")"],
		["!getVar(\"AV_0RND32\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND32.js\")"],
		["!getVar(\"AV_0RND33\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND33.js\")"],
		["!getVar(\"AV_0RND38\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND38.js\")"],
		["!getVar(\"AV_0RND39\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND39.js\")"],
		["!getVar(\"AV_0RND40\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND40.js\")"],
		["!getVar(\"AV_0RND41\",false)", "<dontsend>", "run(\"Custom\"+separator+\"Miniscripts\"+separator+\"AV_RND41.js\")"],
		["!getVar(\"AV_IntBase01\",false)", "<dontsend>", "run(\"Custom\"+separator+\"AV_Scripts\"+separator+\"Inter\"+separator+\"AV_Int_Base01.js\")"],
		["!getVar(\"AV_IntBase02\",false)", "<dontsend>", "run(\"Custom\"+separator+\"AV_Scripts\"+separator+\"Inter\"+separator+\"AV_Int_Base02.js\")"],
		["!getVar(\"AV_IntBase03\",false)", "<dontsend>", "run(\"Custom\"+separator+\"AV_Scripts\"+separator+\"Inter\"+separator+\"AV_Int_Base03.js\")"],
		["!getVar(\"AV_IntBase04\",false)", "<dontsend>", "run(\"Custom\"+separator+\"AV_Scripts\"+separator+\"Inter\"+separator+\"AV_Int_Base04.js\")"],
		/*@NotFlag(AV_2RND02) <dontsend> @MiniScript(AV_RND02) 
		@NotFlag(AV_3RND03) <dontsend> @MiniScript(AV_RND03) 
		@NotFlag(AV_4RND04) <dontsend> @MiniScript(AV_RND04) 
		@NotFlag(AV_5RND05) %StrokeSlower% @StrokeSlower @MiniScript(AV_RND05) 
		@NotFlag(AV_6RND06) <dontsend> @MiniScript(AV_RND06) 
		@NotFlag(AV_7RND07) <dontsend> @MiniScript(AV_RND07) 
		@NotFlag(AV_8RND08) <dontsend> @MiniScript(AV_RND08) 
		@NotFlag(AV_9RND09) <dontsend> @MiniScript(AV_RND09) 
		@NotFlag(AV_0RND10) <dontsend> @MiniScript(AV_RND10) 
		@NotFlag(AV_0RND11) <dontsend> @MiniScript(AV_RND11) 
		@NotFlag(AV_0RND12) <dontsend> @MiniScript(AV_RND12)
		@NotFlag(AV_0RND13) <dontsend> @MiniScript(AV_RND13) 
		@NotFlag(AV_0RND14) <dontsend> @MiniScript(AV_RND14)
		@NotFlag(AV_0RND15) <dontsend> @MiniScript(AV_RND15)
		@NotFlag(AV_0RND16) %StrokeSlower% @StrokeSlower @MiniScript(AV_RND16)
		@NotFlag(AV_0RND17) <dontsend> @MiniScript(AV_RND17)
		@NotFlag(AV_0RND18) <dontsend> @MiniScript(AV_RND18)
		@NotFlag(AV_0RND19) <dontsend> @MiniScript(AV_RND19)
		@NotFlag(AV_0RND20) <dontsend> @MiniScript(AV_RND20)
		@NotFlag(AV_0RND21) <dontsend> @MiniScript(AV_RND21)
		@NotFlag(AV_0RND22) <dontsend> @MiniScript(AV_RND22)
		@NotFlag(AV_0RND23) <dontsend> @MiniScript(AV_RND23)
		@NotFlag(AV_0RND24) <dontsend> @MiniScript(AV_RND24)
		@NotFlag(AV_0RND25) <dontsend> @MiniScript(AV_RND25)
		@NotFlag(AV_0RND26) <dontsend> @MiniScript(AV_RND26)
		@NotFlag(AV_0RND27) <dontsend> @MiniScript(AV_RND27)
		@NotFlag(AV_0RND28) <dontsend> @MiniScript(AV_RND28)
		@NotFlag(AV_0RND29) <dontsend> @MiniScript(AV_RND29)
		@NotFlag(AV_0RND30) <dontsend> @MiniScript(AV_RND30)
		@NotFlag(AV_0RND31) <dontsend> @MiniScript(AV_RND31)
		@NotFlag(AV_0RND32) <dontsend> @MiniScript(AV_RND32)
		@NotFlag(AV_0RND33) <dontsend> @MiniScript(AV_RND33)
		@NotFlag(AV_IntBase01) <dontsend> @CallReturn(Custom\AV_Scripts\Inter\AV_Int_Base01.txt) 
		@NotFlag(AV_IntBase02) <dontsend> @CallReturn(Custom\AV_Scripts\Inter\AV_Int_Base02.txt) 
		@NotFlag(AV_IntBase03) <dontsend> @CallReturn(Custom\AV_Scripts\Inter\AV_Int_Base03.txt) 
		@NotFlag(AV_IntBase04) <dontsend> @CallReturn(Custom\AV_Scripts\Inter\AV_Int_Base04.txt) 
		@NotFlag(AV_IntBase05) <dontsend> @CallReturn(Custom\AV_Scripts\Inter\AV_Int_Base05.txt) 
		@NotFlag(AV_0RND38) <dontsend> @MiniScript(AV_RND38)
		@NotFlag(AV_0RND39) <dontsend> @MiniScript(AV_RND39)
		@NotFlag(AV_0RND40) <dontsend> @MiniScript(AV_RND40)
		@NotFlag(AV_0RND41) <dontsend> @MiniScript(AV_RND41)*/
		[null, "You've lost control of your own %Cock%",null],
		[null, "Up and down that shaft... give your tip some extra love",null],
		[null, "I don't think you have any willpower left anymore.. ",null],
		[null, "You better hold that cum back.. ",null],
		[null, "Your desperation will force you to submit and do anything to earn that release",null],
		[null, "I like controlling you... it's just so easy",null],
		["!getVar(\"AV_PositionSecDone\",false)", "<dontsend>", "run(\"Custom\"+separator+\"CallReturn\"+separator+\"AV_Positions.js\")"],
		["!getVar(\"AV_PositionSecDone\",false)", "<dontsend>", "run(\"Custom\"+separator+\"CallReturn\"+separator+\"AV_Positions.js\")"],
		["!getVar(\"AV_PositionSecDone\",false)", "<dontsend>", "run(\"Custom\"+separator+\"CallReturn\"+separator+\"AV_Positions.js\")"],
		//@NotFlag(AV_PositionSecDone) <dontsend> @CallReturn(Custom\CallReturn\AV_Positions.txt)
		["!getVar(\"AV_DisconectOnce\",false)", "<dontsend>", "run(\"Custom\"+separator+\"CallReturn\"+separator+\"AV_Disconnect.js\")"],
		["!getVar(\"AV_DisconectOnce\",false)", "<dontsend>", "run(\"Custom\"+separator+\"CallReturn\"+separator+\"AV_Disconnect.js\")"],
		//@NotFlag(AV_DisconectOnce) <dontsend> @CallReturn(Custom\CallReturn\AV_Disconnect.txt)
		[null, "Your %Cock% remains under my control",null],
		[null, "Surrender to me",null],
		[null, "Say it out and clear: %AV_RepeatAL% ",null],
		["getVar(\"AV_DommeMistress\",false)", null, "question(\"Can you control yourself %PetName%?\",null,\"punishResponse()\")"],
		[null, null, "question(\"Can you control yourself %PetName%?\",\"youControlMeResponse()\",\"iCantHelpMyselfResponse()\")"], //@ResponseYes(YouControlMe) @ResponseNo(ICantHelpMyself) 
		[null, null, "question(\"Would you like to edge for me?\",\"opiate_Begging-EdgeResponse()\")"], //@ResponseYes(AV_Want_Edge)
		["getVar(\"av_fetish_cei\",false)","I can't wait to let you taste your "+random("sperm", "cum")+". You always eats your own cum",null],
		[null, "You are "+random("enjoying", "liking")+" this more than I expected.",null],
		[null, "Its so fun to watch a man completely lose his mind just stroking for hours and hours",null],
		[null, "So, your precum is still leaking. That's good! ",null],
		[null, "You are leaking a lot this session, don't you? I am so proud of you.",null],
		["getVar(\"av_fetish_foot\",false)","You have a great tongue. This tongue is perfect for worshiping my divine feet.",null],
		[null, "It feels like you were born to serve me.",null],
		["getVar(\"AV_DommeMistress\",false)","Keep this attitude and I won't need to punish you frequently.",null],
		["getVar(\"av_fetish_foot\",false)","Kissing my feet and begging to stay is a very smart move.",null],
		[null, "Well you look really frustrated now",null],
		[null, "Have you worship me like a goddess, while I denied you all pleasure?",null],
		["getVar(\"av_fetish_rough\",false)","You were born to be a slave, to give pleasure to superior women.",null],
		//@Flag(AV_Triv_MusicPlaying) I'm listening to %Var%[AV_Triv_MusicPlaying] right now because of you, %SubName%",null],
		//@Flag(AV_Triv_MusicStyle) Imagine me dancing for you, while playing %Var%[AV_Triv_MusicStyle] in the background",null],
		[null, "I need you worked into a frenzy",null],
		[null, "I need you so worked up that all you can think about is me",null],
		[null, "I need you ready to say yes to anything.",null],
		//@Flag(av_fetish_gag) 
		["getVar(\"av_fetish_gag\",false)","%BallGagOn%","sleep(15)"],// @Wait(15)
		//@Flag(AV_WantCumQuest)
		["getVar(\"AV_WantCumQuest\",false)", null, "question(\"Do you want to cum?\",\"aV_YesBadResponse()\",\"aV_NoGoodResponse()\")"], //@ResponseYes(AV_YesBad) @ResponseNo(AV_NoGood)
		["getVar(\"AV_WantCumQuest\",false)", null, "question(\"Do you want to cum for me?\",\"aV_YesBadResponse()\",\"aV_NoGoodResponse()\")"]
		//@Flag(AV_MasuDone) 
		["getVar(\"AV_MasuDone\",false)","<dontsend>", "setVar(\"AV_MasuDone\",true),run(\"Modules\"+separator+\"AV_ModGeneral23.js\")"], //@CallReturn(Modules\AV_ModGeneral23.txt, AV_MasuDone)
		[null, "%AV_OnlineInteract%",null],
		[null, "%AV_OnlineInteract%",null],
		//@Flag(pvBeta) 
		["getVar(\"pvBeta\",false)","You'll never be good enough for someone like me and you know it, %Name%",null],
		["getVar(\"pvBeta\",false)","Keep stroking, that's the only use I have for you, %PetName%",null],
		["getVar(\"pvBeta\",false)","Knowing that a girl like me is way out of your league makes you hard, doesn't it?\",\"youTurnMeOnResponse()\")"], //@ResponseYes(YouTurnMeOn)
		["getVar(\"pvBeta\",false)","If you had me, you probably wouldn't even know what to do with me",null],
		["getVar(\"pvBeta\",false)","You've lost control of your manhood, so are you even still a man? That's the question, %PetName%",null],
		//@Flag(AV_Know_12) 
		["getVar(\"AV_Know_12\",false)","What if "+getVar("AV_Persona13")+" would see you like this %Grin%",null],
		["(getVar(\"av_fetish_pegging\",false)||getVar(\"AV_LikeAnal\",false))","I bet you make the most adorable sounds when fucked with a strapon",null],
		//@Flag(pthevPlugged) 
		["getVar(\"pthevPlugged\",false)","How's that butt plug feeling? %Grin%",null],
		["getVar(\"pthevPlugged\",false)","Make sure that plug stays in there, %Name%",null],
		["getVar(\"pthevPlugged\",false)","Maybe you should get a bigger butt plug... this one seems a bit small %EmoteWink%",null],
		//@Flag(AV_BallTied) 
		["getVar(\"AV_BallTied\",false)","How are those %Balls% feeling, all tied up... they look pretty swollen",null],
		["getVar(\"AV_BallTied\",false)","Is it harder to hold the cum back when your %Balls% are tied up?",null],
		["getVar(\"AV_BallTied\",false)","Rub those tied up %Balls% for me, %Name%",null],
		["getVar(\"AV_BallTied\",false)","Rub those tied up %Balls% while you think of sucking on my nipples",null],
		["getVar(\"AV_BallTied\",false)","Squeeze your tied up %Balls%",null],
		["getVar(\"AV_BallTied\",false)","I bet your %Balls% look like a pair of purple golf balls right now %Lol%",null],
		["getVar(\"AV_BallTied\",false)","Tug on that string that's wrapped around your %Balls%",null],
		["getVar(\"av_fetish_rough\",false)","Someday I'm going to throw a party and make you do this in front of all my friends %EmoteHappy%",null],
		["getVar(\"av_fetish_rough\",false)","@ImageTag(SoloF) I bet you jizz your pants every time you see a hot girl like that in the street ",null],
		["getVar(\"av_fetish_rough\",false)","All my friends already know you're a pervert, %SubName%",null],
		["getVar(\"av_fetish_rough\",false)","%EmoteMoan% I would <i>love</i> to humiliate you in a public place",null],
		["getVar(\"AV_DommeMistress\",false)","Your %Balls% have so much potential to feel pain, ache and need.",null],
		/*[null, "<dontsend>", "run(\"Custom\"+separator+\"CallReturn\"+separator+\"Control.js\")"], //@CallReturn(Custom\CallReturn\Control.txt)
		[null, "<dontsend>", "run(\"Custom\"+separator+\"CallReturn\"+separator+\"Control.js\")"], 
		[null, "<dontsend>", "run(\"Custom\"+separator+\"CallReturn\"+separator+\"Control.js\")"],  
		[null, "<dontsend>", "run(\"Custom\"+separator+\"CallReturn\"+separator+\"Control.js\")"],  
		[null, "<dontsend>", "run(\"Custom\"+separator+\"CallReturn\"+separator+\"Control.js\")"],  
		[null, "<dontsend>", "run(\"Custom\"+separator+\"CallReturn\"+separator+\"Control.js\")"],  
		[null, "<dontsend>", "run(\"Custom\"+separator+\"CallReturn\"+separator+\"Control.js\")"],  
		[null, "<dontsend>", "run(\"Custom\"+separator+\"CallReturn\"+separator+\"Control.js\")"],  
		[null, "<dontsend>", "run(\"Custom\"+separator+\"CallReturn\"+separator+\"Control.js\")"],  
		[null, "<dontsend>", "run(\"Custom\"+separator+\"CallReturn\"+separator+\"Control.js\")"], */ 
		//@NotFlag(AV_Short27) 
		["!getVar(\"AV_Short27\",false)","<dontsend>", "run(\"Custom\"+separator+\"Shorts\"+separator+\"Short19.js\")"],
		[null, "Your place is being kept horny, frustrated and ready to do anything you are told.",null],
		[null, null, "question(\"Am I being too mean torwards you %PetName%?\",\"youreMeanResponse()\")"],
		//@ResponseYes(Youre Mean)
		[null, null, "question(\"Do I already see some drops of desperation over there?\",\"drippingResponse()\")"], //@ResponseYes(Dripping)
		//@Variable[%DateDifference%(AV_SessionTime,minutes)]>[40] 
		["checkMinutesPassed(40)","You are shaking..what's the matter %PetName%?", "run(\"Custom\"+separator+\"Shorts\"+separator+\"Short19.js\")"], //@CallReturn(Custom\Shorts\Short19.txt)
		[null, "I'll give you so much pleasure when you are helpless and all mine.",null],
		["getVar(\"AV_DommeMistress\",false)","I expect you to know the rules by now and obey them",null],
		[null, "That isn't a sexual organ you have in your hand there, it's a frustration machine.",null],
		[null, "Horny boys are so good with their tongues!",null],
		[null, "I won't give you permission, but you still can beg.",null],
		[null, "Let's make your balls extra blue today!",null],
		//@FlagOr(AV_Beta, pvBeta) 
		["(getVar(\"AV_Beta\",false)||getVar(\"pvBeta\",false))","You will become the beta male you know you are deep inside.",null],
		[null, "Your orgasms are all in the past",null],
		[null, "Oh %PetName%, you're so good at this...keep going",null],
		[null, "You have so much cum in these balls...quite extraordinary, isn't it %PetName%?",null],
		[null, "Oh darling if I gave a fuck about your orgasms I'd have let you have one by now",null],
		[null, "my my...these balls most certainly do not deserve any relief",null],
		[null, "The cum stays in your balls, where it should be",null],
		[null, "The number of ways you can dominate and tease a %Cock% are endless",null],
		[null, "Men are so weak, so easily manipulated",null],
		[null, "No sexual release, no any kind of release, keep everything in",null],
		["getVar(\"AV_TotalControl\",false)","You have no say in your future, because I control everything",null],
		[null, "Males shouldn't enjoy orgasms, they only deserve ruined ones",null],
		[null, "This is not a game, you are a slave now",null],
		[null, "Now your erections belong to me",null],
		["getVar(\"AV_Beta\",false)","The only kind of orgasm beta males get is a ruined orgasm",null],
		//@FlagOr(av_fetish_rough, AV_DommeMistress) 
		["(getVar(\"av_fetish_rough\",false)||getVar(\"AV_DommeMistress\",false))","No way you can please a woman with that useless thing",null],
		[null, "Be happy, slave, you are finally being useful ",null],
		//@FlagOr(av_fetish_pegging, AV_LikeAnal) 
		["(getVar(\"av_fetish_pegging\",false)||getVar(\"AV_LikeAnal\",false))","Pegging a slave outside in order to humiliate him and expose him, that's something I have to do someday",null],
		/*@ShowImage @RT(God I love,There is nothing better than,I adore) @RT(you sitting there,just to watch you,oogling at you) @RT(stroking,touching that %Cock%,beating that small piece of meat)",null],
		@Flag(pvMadeKeyholder) @RT(Sometimes,Often,Once in a while) @RT(I think about,I dream about,I'm considering) @RT(just tossing the chastity key away,selling you to a man,autioning you off)",null],
		@ShowImage @RT(It happens that I dream of,Sometimes I can't stop myself from,I often feel like) @RT(making out with,fucking,spanking) @RT(%domFriend1Name%,%domFriend2Name%,%domFriend3Name%)",null],
		@ShowImage @RT(I bet you love,I just love,Nobody can resist) @RT(%domFriend1Name%'s,%domFriend2Name%'s,%domFriend3Name%'s) @RT(tits,ass,body,face,smile)",null],
		@ShowImage @RT(I need a good fuck!,I wouldn't mind an orgasm right now!,I'm desperate for an orgasm), @RT(Its sad that,Too bad that,I guess its bad luck that) @RT(you're useless,that your cock is too small,that you're a hopeless lover)",null],
		@ShowImage @RT(Keep stroking,Keep pleasuring,Keep touching) that @RT(%Cock%,desperate tiny worm,unstabile cock) @RT(I suppose its all your good for,I guess you're worthless in any other regard,I bet its all you know)
		@ShowImage @RT(There should be an island,I wish there was some land,I would love nothing else but an island) where @RT(women ruled,men are slaves,women were gods) - @RT(just imagine that,sounds perfect!,I would be so happy!) 
		@ShowImage @RT(Imagine,Just think of,Try to imagine) never having an @RT(sweet explosive,delicious,strong) orgasm @RT(again,ever again,and just be locked up)
		@ShowImage @RT(Maybe,I don't think,I'm not sure) you should be @RT(stroking,touching yourself,beating your worm) right now, @RT(maybe a caning,perhaps a whipping,maybe a beating) would do you better?
		@ShowImage @RT(Enjoy stroking,Savor the feeling of touching yourself,enjoy this) @RT(who knows,because maybe,just in case) @RT(it never happens again,you won't get to do it again,its the last time) 
		@ShowImage @RT(I love it,It's hot,Its soo sexy) @RT(When you beat that %Cock%,stroke your dick,move your hand up and down) @RT(hard and fast,swift and merciless,fast,hard) 
		@ShowImage @RT(I love,I can't get enough of,I really enjoy) @RT(the agony,the desperation,the wild lust) in your eyes, @RT(soo hot,soo sexy,it makes me hot!)
		@ShowImage @RT(Keep that cock steady,Calm yourself,Relax) @RT(we're far from done!,we still got some way to go,you probably won't come today anyway)
		@ShowImage @RT(Blessed be cock torture,blessed be the edge,blessed be cockcages) for it @RT(dominates the mind,destroyes the will,terrorizes the soul) of men - @RT(binds them!,Enslaves them!,Weakens them!)
		@ShowImage @RT(Gosh I just love,Its so hot,There is better than) to look at @RT(sexy images,images of sensuality,dirty pictures), I could do it @RT(all day long!,every waking moment,always!)
		@ShowSoftcoreImage  @RT(Look at these girls!,Have a look at those women,feast your eyes on these wonderful creatures) @RT(girls are definetly the better sex!,nothing is more erotic than 2 women!,it doesn't get any better than 2 women) 
		@ShowFemdomImage  @RT(Blessed be femdom images!,Worship this image!,Enjoy the view!) @RT(Pictures of submission are sooo hot!,Images of domination are the best,I just can't enough of erotic photos!)
		@ShowImage @RT(I could look at pictures all day,I could stare at these images all day,I can never get enough erotic photos) it @RT(frustrates,tortures,excites) you but (soothes,relaxes,calms) me 
		@ShowFemdomImage  @RT(Imagine being part of these images,I bet you wish you was part of the action,This looks hot), I just want to @RT(jump right in!,be part of it as well,make you frustrated) 
		@ShowImage @RT(Maybe you should,It might be a better idea,Perhaps you should) @RT(just be looking at pictures,just watch these images) @RT(instead,in favor, as a replacement) of stroking 
		@ShowImage Buying @RT(a chastity cage,a cane,slaves) was @RT(the best thing I ever did,my wisest decision,a really good idea) @RT(I haven't been happier since,I've never been this pleased,and it makes me happy!) 
		@ShowImage @RT(My fingers itches,I got a feeling,I had a funny idea), @RT(imagine if I sent this picture to,I want to share this picture with,maybe I should show it to) %Var%[AV_Persona13]
		@ShowFemdomImage  @RT(Its a lot of fun,I love,%domFriend2Name% loves me for) making you @RT(stroke,touch,pleasure) yourself @RT(to this "Sexy" you,to these humiliating pictures,to your own perversions)
		@ShowImage Use a @RT(firm grip,loose grip,tight grip), @RT(up and down,keep the pace,stay on beat) and @RT(focus on your pleasure,enjoy the stroking)
		@ShowImage @RT(Make sure,Be certain,Remember) to @RT(enjoy,savor,love) every @RT(stroke,touch,sensation) you get..
		@ShowImage @RT(Gosh,OMG,LOL), you look @RT("hot","Sexy","lame") @RT(slut,slave,worm).. @FollowUp15(Pray I don't share these images) 
		@ShowImage @RT(%domFriend1Name%,%domFriend2Name%,%domFriend3Name%) @RT(keeps telling,constantly tells,often point out to) me @RT(that your legs should be shaven,that your lock should be sealed) 
		@ShowImage %domFriend1Name% @RT(thinks,believes,said) that you @RT(edge,stroke,exercise) too little, @RT(I don't know..,maybe you do?)
		@ShowImage %domFriend2Name% @RT(can't wait to,really want to,begged me to) let her @RT(dress you up,make you sexy) @RT(in some lingerie,with a pair of stockings,with some high heels)
		@ShowImage I had a dream about your @RT(ass,cock,balls) and my @RT(cane,high heels,spatula), @RT(do I need to tell more?,need I say more?)
		@ShowImage @RT(No mercy,No rest,No stopping), prove to me that you @RT(have stamina,isn't worthless,isn't a premature ejaculator), but remember to tell me if you edge.. 
		@ShowImage @RT(Gosh I love,Its so hot with,Mhmm) @RT(all these frustration strokes,slow stroking,barely stroking) @RT(It makes me wet,It gets me going,I can't get enough)
		@ShowImage There is more @RT(action,sex,love) in this @RT(image,photo,picture) than a @RT(slave,slut,caged cuck) ever deserves
		@ShowImage @RT(Lets imagine,Just picture,Just dream for a moment) that you werent a @RT(slave,slut,pig), no wait.. @RT(thats impossible,its not possible,its just a fantasy)
		@ShowImage @RT(Keep this  pace,stay on pace,keep the beat) and @RT(worship,honor,pay tribute) to your @RT(%DommeHonorific%,Divinity,Goddess)
		@ShowImage @RT(Small,Tiny,Microscopic) @RT(dicks,cucks,worms) @RT(don't deserve,shouldn't,don't get to) stroke faster..
		@ShowImage @RT(Your stroking,your pumping,Your selfpleasuring) is just like @RT(fast and the furious,a teenage boy's,a desperate slut's), but @RT(keep the pace!,follow the pace..,remain on pace!)
		@ShowImage You @RT(touch,stroke,pleasure) yourself like a @RT(hungry slut!,depraved boy!,uncontrolled slave!) - And I @RT(love,adore,enjoys) it 
		@ShowImage Maybe you would @RT(prefer the cage,rather be locked,stay in steel) rather than this @RT(fury stroking,crazy pleasure,insane touching) - But no.. @RT(Keep it up!,Stay on beat,Stroke properly) 
		@ShowImage Stroke and @RT(enjoy,behold,watch) yourself @RT(in all your glory,perverted,slutty) @RT(what a sight for a desperate boy,such sluttyness,so sad to watch)
		@ShowImage I @RT(bet,hope,think) your @RT(small cock,tiny dick,useless cock) is @RT(in agony,about to burst,trembling)
		@ShowImage @RT(Keep calm,Focus,Relax) we don't want any @RT(accidents,spillage,unauthorized ejaculations) @RT(slave,bitch,slut)
		@ShowImage @RT(Stroke,Pump,Please) it and watch! So @RT(sexy,dirty,filthy), you just wanna jump right in the @RT(picture,photo,image)
		@ShowImage don't @RT(cum,ejaculate,orgasm), I @RT(swear,tell you,promise you) that you'll be back in that @RT(cage,prison,steel)
		@ShowImage @RT(Uhhh,Hehe,Oh my).. I just want to @RT(squash,crush,paddle) your @RT(balls,nuts,grapes)
		@ShowImage @RT(I feel like,I would love,Maybe I should) @RT(kick,slap,paddle) your @RT(ass,balls,cock)
		@ShowImage @RT(Looking through,looking at,browsing) you @RT(pictures,porn collection,"gay" pictures), its.. @RT(disturbing?,hot?,juicy?)
		@ShowImage @RT(Faster,quicker,swifter) @RT(stronger,migthier) better harder
		@ShowImage @RT(To chastity or not to chastity,to spank or not to spank,to deny or not to deny) that is the question @FollowUp15(*Grin*) 
		@ShowImage @RT(Have a look,watch,look) and see @RT(whats beyond your reach,what you'll never have,what a slave never gets).. @RT(Loser..,Wanker..,Cuck..)
		@ShowImage @RT(I would never have sex with you,I will never touch you,I'll never give you what you want) @RT(nor would anyone else,probably for the best,Gosh.. Just the thought!) 
		@ShowImage @RT(If I was you,Careful..,Calm down..) @RT(I would play it safe and not edge!,You never know the dangers of edging,Edging can be dangerous) Then again I would love @RT(spanking,hurting,torturing) you! 
		@ShowImage @RT(There is something amazing about,I just can't get enough of,I could watch you) @RT(edging all day!,stroking all day,frustration all day) - @RT(glad,happy,thrilled) that I'm not you! */
		//@FlagOr(av_fetish_rough, AV_DommeMistress)  
		["(getVar(\"av_fetish_rough\",false) || getVar(\"AV_DommeMistress\",false))","I'm gonna ruin you and I'll have you crying.",null],
		["(getVar(\"av_fetish_rough\",false) || getVar(\"AV_DommeMistress\",false))","I am going to be cruel to you until you cry and never want to come back again. ",null],
		//@Flag(av_fetish_humiliating) 
		["getVar(\"av_fetish_humiliating\",false)", null, "question(\"You're such a mindless little stroker, aren't you?\",\"youOwnMeResponse()\",\"iAmNotYourBitchResponse()\")"],// @ResponseYes(YouOwnMe) @ResponseNo(IAmNotYourBitch)
		//@Flag(av_fetish_humiliating) 
		["getVar(\"av_fetish_humiliating\",false)","Just a douche who'll do anything I tell him to do.",null],
		//@Flag(AV_Denied) 
		["getVar(\"AV_Denied\",false)","Long orgasm denial is all about constantly building frustration, %PetName%",null],
		["getVar(\"AV_Denied\",false)","All of this is probably all the more frustrating given that you didn't came for so long",null],
		["getVar(\"AV_Denied\",false)","That's what orgasm denial does to you, it will only get worse, %PetName%",null],
		["getVar(\"AV_Denied\",false)","You can leak as much as you like, as long as you don't cum %Smile%",null],
		["getVar(\"AV_Denied\",false)","It's been "+random("so long", "a while")+" since you came... you must be ready to burst",null],
		["getVar(\"AV_Denied\",false)","I wonder how long I could keep you denied...",null],
		["getVar(\"AV_Denied\",false)","Teasing you is so much more fun when I know you don't came for so long",null]
		];
	
	execRndLine(answers);
	
	DMessage("stroketaunt1: VocabEnd");
	return "<dontsend>";
}