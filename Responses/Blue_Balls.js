addResponseIndicator("blue balls", "my balls hurts", "my balls hurt", "balls hurting", "balls hurts", "balls hurt", "my balls hurting", "you give me blue balls");
//run("allutils.js");

function blue_BallsResponse(message) {
    DMessage("blue_Balls: BeginnningResponse");
    let separator = java.io.File.separator;
    if (getResponsesDisabled()) {
        DMessage("blue_Balls: EndResponse Response is Disabled");
        return false;
    }
	if(getVar("firstRun",false)) {
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 5);
			switch (thisRandom){
				case 1:
					CMessage("Blue is the color we want, right? %EmoteRandom%");
					found = true;
					break;
				case 2:
					CMessage("Not as bad as you\'re about to be %EmoteRandom%");
					found = true;
					break;
				case 3:
					CMessage("Blue Balls already? Oh this is going to be fun %EmoteRandom%");
					found = true;
					break;
				case 4:
					CMessage("Already? This should be pretty fun then %EmoteRandom%");
					found = true;
					break;
				case 5:
					CMessage("I\'m only getting started making your balls blue %EmoteRandom%");
					found = true;
					break;
			}
		}
	}
	else if(getVar("cbtCockActive", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 16);
			switch (thisRandom){
				case 1:
					CMessage("Good, I want that %Balls% to ache %EmoteRandom%");
					found = true;
					break;
				case 2:
					CMessage("Even if I let you stop smacking it around, you think that ache's going to get any better? %EmoteRandom%");
					found = true;
					break;
				case 3:
					CMessage("We\'ll need to get those balls nice and full before we continue");
					found = true;
					break;
				case 4:
					CMessage("Look how big and blue his balls are getting!");
					found = true;
					break;
				case 5:
					CMessage("Show me how big your balls can get %PetName%");
					found = true;
					break;
				case 6:
					CMessage("Let me take a look, I\'ll tell you if they\'re blue enough");
					found = true;
					break;
				case 7:
					CMessage("Can you feel your %Balls% filling up with cum?");
					found = true;
					break;
				case 8:
					CMessage("I hope those %Balls% are absolutely swollen with cum for me.");
					found = true;
					break;
				case 9:
					CMessage("oh, your poor %Balls% are blue and aching? good boy! that\'s the point of your lessons today.");
					found = true;
					break;
				case 10:
					CMessage("Your %Balls% are going to be purple, you know that right?");
					found = true;
					break;
				case 11:
					CMessage("The bluer they are, the happier I am");
					found = true;
					break;
				case 12:
					CMessage("Your %Balls% have to get full before the REAL fun starts.");
					found = true;
					break;
				case 13:
					CMessage("come on baby, let\'s make em\' extra blue");
					found = true;
					break;
				case 14:
					CMessage("Oh my god your %Balls%! They\'re so blue!");
					found = true;
					break;
				case 15:
					CMessage("Aren\'t they adorable when they\'re all swelled up like that?!?");
					found = true;
					break;
				case 16:
					CMessage("They\'re almost purple %PetName%");
					found = true;
					break;
			}
		}
	}
	else if(getVar("cbtBallActive", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 20);
			switch (thisRandom){
				case 1:
					CMessage("Good, I want those balls to ache");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short02.js");
					found = true;
					break;
				case 2:
					CMessage("Good, I want those balls to ache");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short04.js");
					found = true;
					break;
				case 3:
					CMessage("Do you think they are swollen and aching enough for me?");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short05.js");
					found = true;
					break;
				case 4:
					CMessage("Even if you go back to stroking, one way or another those balls are going to ache %EmoteRandom%");
					found = true;
					break;
				case 5:
					CMessage("We\'ll need to get those balls nice and full before we continue");
					found = true;
					break;
				case 6:
					CMessage("Look how big and blue his balls are getting!");
					found = true;
					break;
				case 7:
					CMessage("Show me how big your balls can get %PetName%");
					found = true;
					break;
				case 8:
					CMessage("Let me take a look, I\'ll tell you if they\'re blue enough");
					found = true;
					break;
				case 9:
					CMessage("Can you feel your %Balls% filling up with cum?");
					found = true;
					break;
				case 10:
					CMessage("I hope those %Balls% are absolutely swollen with cum for me.");
					found = true;
					break;
				case 11:
					CMessage("oh, your poor %Balls% are blue and aching? good boy! that\'s the point of your lessons today.");
					found = true;
					break;
				case 12:
					CMessage("Your %Balls% are going to be purple, you know that right?");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short05.js");
					found = true;
					break;
				case 13:
					CMessage("The bluer they are, the happier I am");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short01.js");
					found = true;
					break;
				case 14:
					CMessage("The bluer they are, the happier I am");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short02.js");
					found = true;
					break;
				case 15:
					CMessage("Your %Balls% have to get full before the REAL fun starts.");
					found = true;
					break;
				case 16:
					CMessage("come on baby, let\'s make em\' extra blue");
					found = true;
					break;
				case 17:
					CMessage("Oh my god your %Balls%! They\'re so blue!");
					found = true;
					break;
				case 18:
					CMessage("Aren\'t they adorable when they\'re all swelled up like that?!?");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short03.js");
					found = true;
					break;
				case 19:
					CMessage("Aren\'t they adorable when they\'re all swelled up like that?!?");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short04.js");
					found = true;
					break;
				case 20:
					CMessage("They\'re almost purple %PetName%");
					found = true;
					break;
			}
		}
	}
	else if(getVar("holdingedge", false)){
		let found = false;
		while(!found){
			let thisRandom = randomInt(1, 18);
			switch (thisRandom){
				case 1:
					CMessage("Mmmmm keep holding it and make it hurts even more");
					found = true;
					break;
				case 2:
					CMessage("Good stay right there and let the pains drive you crazy");
					found = true;
					break;
				case 3:
					CMessage("Why do you think I\'m keeping you on the edge %EmoteRandom%");
					found = true;
					break;
				case 4:
					CMessage("We\'ll need to get those balls nice and full before we continue");
					found = true;
					break;
				case 5:
					CMessage("Look how big and blue his balls are getting!");
					found = true;
					break;
				case 6:
					CMessage("Show me how big your balls can get %PetName%");
					found = true;
					break;
				case 7:
					CMessage("Let me take a look, I\'ll tell you if they\'re blue enough");
					found = true;
					break;
				case 8:
					CMessage("Can you feel your %Balls% filling up with cum?");
					found = true;
					break;
				case 9:
					CMessage("I hope those %Balls% are absolutely swollen with cum for me.");
					found = true;
					break;
				case 10:
					CMessage("oh, your poor %Balls% are blue and aching? good boy! that\'s the point of your lessons today.");
					found = true;
					break;
				case 11:
					CMessage("Your %Balls% are going to be purple, you know that right?");
					found = true;
					break;
				case 12:
					CMessage("The bluer they are, the happier I am");
					found = true;
					break;
				case 13:
					CMessage("Your %Balls% have to get full before the REAL fun starts.");
					found = true;
					break;
				case 14:
					CMessage("come on baby, let\'s make em\' extra blue");
					found = true;
					break;
				case 15:
					CMessage("Oh my god your %Balls%! They\'re so blue!");
					found = true;
					break;
				case 16:
					CMessage("Aren\'t they adorable when they\'re all swelled up like that?!?");
					found = true;
					break;
				case 17:
					CMessage("They\'re almost purple %PetName%");
					found = true;
					break;
				case 18:
					CMessage("%AV_Mem_BallHurt%");
					found = true;
					break;
			}
		}
	}
    else if (isEdging())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 22);
			switch (thisRandom){
				case 1:
					CMessage("Good, keep getting closer so you can ache some more %EmoteRandom%");
					found = true;
					break;
				case 2:
					CMessage("Do you think they are swollen and aching enough for me?");
					found = true;
					break;
				case 3:
					CMessage("Awww I thought your %Balls% would feel better if I let it get close");
					found = true;
					break;
				case 4:
					CMessage("Not blue enough, get closer");
					found = true;
					break;
				case 5:
					CMessage("Good, I hope every single edge makes the ache even worse %EmoteRandom%");
					found = true;
					break;
				case 6:
					CMessage("Get closer and I'll show you what blue balls <i>really</i> is %EmoteRandom%");
					found = true;
					break;
				case 7:
					CMessage("Just think how much worse it will be when you get close for me %EmoteRandom%");
					found = true;
					break;
				case 8:
					CMessage("We\'ll need to get those balls nice and full before we continue");
					found = true;
					break;
				case 9:
					CMessage("Look how big and blue his balls are getting!");
					found = true;
					break;
				case 10:
					CMessage("Show me how big your balls can get %PetName%");
					found = true;
					break;
				case 11:
					CMessage("Let me take a look, I\'ll tell you if they\'re blue enough");
					found = true;
					break;
				case 12:
					CMessage("Can you feel your %Balls% filling up with cum?");
					found = true;
					break;
				case 13:
					CMessage("I hope those %Balls% are absolutely swollen with cum for me.");
					found = true;
					break;
				case 14:
					CMessage("oh, your poor %Balls% are blue and aching? good boy! that\'s the point of your lessons today.");
					found = true;
					break;
				case 15:
					CMessage("Your %Balls% are going to be purple, you know that right?");
					found = true;
					break;
				case 16:
					CMessage("The bluer they are, the happier I am");
					found = true;
					break;
				case 17:
					CMessage("Your %Balls% have to get full before the REAL fun starts.");
					found = true;
					break;
				case 18:
					CMessage("come on baby, let\'s make em\' extra blue");
					found = true;
					break;
				case 19:
					CMessage("Oh my god your %Balls%! They\'re so blue!");
					found = true;
					break;
				case 20:
					CMessage("Aren\'t they adorable when they\'re all swelled up like that?!?");
					found = true;
					break;
				case 21:
					CMessage("They\'re almost purple %PetName%");
					found = true;
					break;
				case 22:
					CMessage("%AV_Mem_BallHurt%");
					found = true;
					break;
			}
		}
    }
    else if (isStroking())
    {
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 48);
			switch (thisRandom){
				case 1:
					if(getVar("AV_BallTied", false))
					{
						CMessage("Look at those huge, swollen balls...");
						run("Custom" + java.io.File.separator + "Miniscripts" + java.io.File.separator + "AV_RND34.js");
						found = true;
					}
					break;
				case 2:
					CMessage("I know it\'s so mean of me. But your little blue balls should be the least of your concerns.");
					found = true;
					break;
				case 3:
					CMessage("Blue is the color we want, right?");
					found = true;
					break;
				case 4:
					CMessage("Do you think they are swollen and aching enough for me?");
					found = true;
					break;
				case 5:
					CMessage("Good, I want they blue %PetName%");
					found = true;
					break;
				case 6:
					CMessage("Mmmm keep stroking and ache even more");
					found = true;
					break;
				case 7:
					CMessage("You can handle it %PetName%, keep stroking");
					found = true;
					break;
				case 8:
					CMessage("That blue balls is going to stay with you until I let it leave that %Cock% %EmoteRandom%");
					found = true;
					break;
				case 9:
					CMessage("Yeah? I bet I can make that %Balls% ache even worse %EmoteRandom%");
					found = true;
					break;
				case 10:
					CMessage("Mmmm I love knowing how much agony that %Balls% is in");
					found = true;
					break;
				case 11:
					CMessage("That\'s what I\'m here for %PetName% %EmoteRandom%");
					found = true;
					break;
				case 12:
					CMessage("I love knowing how much ache you\'re suffering for me %EmoteRandom%");
					found = true;
					break;
				case 13:
					CMessage("That %Balls% was made to ache for me");
					found = true;
					break;
				case 14:
					CMessage("I\'m going to fill every last inch of that %Balls% with ache %EmoteRandom%");
					found = true;
					break;
				case 15:
					CMessage("That Blue Balls... is just going to get worse and worse %EmoteRandom%");
					found = true;
					break;
				case 16:
					CMessage("That just makes me want to tease you even more %EmoteRandom%");
					found = true;
					break;
				case 17:
					if(getVar("av_fetish_pain", false))
					{
						CMessage("Good... smack your balls a few times, but dont stop %Stroking%");
						found = true;
					}
					break;
				case 18:
					if(getVar("av_fetish_rough", false))
					{
						CMessage("Good... smack your balls a few times, but dont stop %Stroking%");
						found = true;
					}
					break;
				case 19:
					CMessage("We\'ll need to get those balls nice and full before we continue");
					found = true;
					break;
				case 20:
					CMessage("Look how big and blue his balls are getting!");
					found = true;
					break;
				case 21:
					CMessage("Show me how big your balls can get %PetName%");
					found = true;
					break;
				case 22:
					CMessage("Let me take a look, I\'ll tell you if they\'re blue enough");
					found = true;
					break;
				case 23:
					answer2 = getInput("Can you feel your %Balls% filling up with cum?",5);
					if (answer2.isLike("yes", "yea", "yep"))
					{
						aV_FastStrokeResponse();
					}
					found = true;
					break;
				case 24:
					CMessage("Can you feel your %Balls% filling up with cum?");
					found = true;
					break;
				case 25:
					CMessage("Can you feel your %Balls% filling up with cum?");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short05.js");
					found = true;
					break;
				case 26:
					CMessage("I hope those %Balls% are absolutely swollen with cum for me.");
					found = true;
					break;
				case 27:
					CMessage("oh, your poor %Balls% are blue and aching? good boy! that\'s the point of your lessons today.");
					found = true;
					break;
				case 28:
					CMessage("Your %Balls% are going to be purple, you know that right?");
					found = true;
					break;
				case 29:
					CMessage("The bluer they are, the happier I am");
					found = true;
					break;
				case 30:
					CMessage("Your %Balls% have to get full before the REAL fun starts.");
					found = true;
					break;
				case 31:
					CMessage("come on baby, let\'s make em\' extra blue");
					found = true;
					break;
				case 32:
					CMessage("Oh my god your %Balls%! They\'re so blue!");
					found = true;
					break;
				case 33:
					CMessage("Aren\'t they adorable when they\'re all swelled up like that?!?");
					found = true;
					break;
				case 34:
					CMessage("They\'re almost purple %PetName%");
					found = true;
					break;
				case 35:
					if(getVar("AV_BallTied", false))
					{
						CMessage("I love how blue they get when they\'re tied up %EmoteHappy%");
						found = true;
					}
					break;
				case 36:
					if(getVar("AV_BallTied", false))
					{
						CMessage("Well yes, that\'s the purpose of tying them up, %Name%");
						found = true;
					}
					break;
				case 37:
					if(getVar("AV_BallTied", false))
					{
						CMessage("Then tying them up was a good decision %Laugh%");
						found = true;
					}
					break;
				case 38:
					if(getVar("AV_BallTied", false))
					{
						CMessage("I love making your %Balls% ache so much, I wish I could tug on that string myself");
						found = true;
					}
					break;
				case 39:
					if(getVar("AV_BallTied", false))
					{
						CMessage("Tug on that string a little to make them ache even more, %Name%");
						found = true;
					}
					break;
				case 40:
					if(getVar("AV_BallTied", false))
					{
						CMessage("Mmm good... I think I should tie up your %Balls% more often...");
						found = true;
					}
					break;
				case 41:
					CMessage("That %Balls% was made to ache for me");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short01.js");
					found = true;
					break;
				case 42:
					CMessage("Oh my god your %Balls%! They\'re so blue!");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short02.js");
					found = true;
					break;
				case 43:
					CMessage("I hope those %Balls% are absolutely swollen with cum for me.");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short02.js");
					found = true;
					break;
				case 44:
					CMessage("Your %Balls% have to get full before the REAL fun starts.");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short03.js");
					found = true;
					break;
				case 45:
					CMessage("That blue balls is going to stay with you until I let it leave that %Cock% %EmoteRandom%");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short04.js");
					found = true;
					break;
				case 46:
					CMessage("Your %Balls% have to get full before the REAL fun starts.");
					run("Custom" + java.io.File.separator + "Shorts" + java.io.File.separator + "Short04.js");
					found = true;
					break;
				case 47:
					CMessage("%AV_Mem_BallHurt%");
					found = true;
					break;
				case 48:
					CMessage("%AV_Mem_BallHurt%");
					found = true;
					break;
			}
		}
    }
    else {		//not stroking
        let found = false;
		while(!found){
			let thisRandom = randomInt(1, 20);
			switch (thisRandom){
				case 1:
					CMessage("Just think how much worse it will be when I make you start stroking again %EmoteRandom%");
					found = true;
					break;
				case 2:
					CMessage("And you\'re going to ache even more when I make you start stroking again %EmoteRandom%");
					found = true;
					break;
				case 3:
					if(getVar("av_fetish_pain", false))
					{
						CMessage("Good... smack your balls a few times");
						found = true;
					}
					break;
				case 4:
					if(getVar("av_fetish_rough", false))
					{
						CMessage("Good... smack your balls a few times");
						found = true;
					}
					break;
				case 5:
					CMessage("We\'ll need to get those balls nice and full before we continue");
					found = true;
					break;
				case 6:
					CMessage("Look how big and blue his balls are getting!");
					found = true;
					break;
				case 7:
					CMessage("Show me how big your balls can get %PetName%");
					found = true;
					break;
				case 8:
					CMessage("Let me take a look, I\'ll tell you if they\'re blue enough");
					found = true;
					break;
				case 9:
					CMessage("Can you feel your %Balls% filling up with cum?");
					found = true;
					break;
				case 10:
					CMessage("I hope those %Balls% are absolutely swollen with cum for me.");
					found = true;
					break;
				case 11:
					CMessage("oh, your poor %Balls% are blue and aching? good boy! that\'s the point of your lessons today.");
					found = true;
					break;
				case 12:
					CMessage("Your %Balls% are going to be purple, you know that right?");
					found = true;
					break;
				case 13:
					CMessage("The bluer they are, the happier I am");
					found = true;
					break;
				case 14:
					CMessage("Your %Balls% have to get full before the REAL fun starts.");
					found = true;
					break;
				case 15:
					CMessage("come on baby, let\'s make em\' extra blue");
					found = true;
					break;
				case 16:
					CMessage("Oh my god your %Balls%! They\'re so blue!");
					found = true;
					break;
				case 17:
					CMessage("Aren\'t they adorable when they\'re all swelled up like that?!?");
					found = true;
					break;
				case 18:
					CMessage("They\'re almost purple %PetName%");
					found = true;
					break;
				case 19:
					CMessage("%AV_Mem_BallHurt%");
					found = true;
					break;
				case 20:
					CMessage("%AV_Mem_BallHurt%");
					found = true;
					break;
			}
		}
    }
    DMessage("blue_Balls: EndResponse");
    return true;
}