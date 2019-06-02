function AV_ShowOmelegPicsVocabulary()
{
	DMessage("aV_ShowOmelegPics: start");
    //--UNINTERPRETED LINE:@NotFlag(AV_GirlErina, AV_GirlKris, AV_GirlMandy, AV_GirlNelly) @ShowImage[av_imagens\Girls2\Carolinne\*.*]
	if(!getVar("AV_GirlErina",false) && !getVar("AV_GirlKris",false) && !getVar("AV_GirlMandy",false) && !getVar("AV_GirlNelly",false) ){
		showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "Girls2" + java.io.File.separator + "Carolinne" + java.io.File.separator + "*.*");
	}
    //--UNINTERPRETED LINE:@NotFlag(AV_GirlCarolinne, AV_GirlKris, AV_GirlMandy, AV_GirlNelly) @ShowImage[av_imagens\Girls2\Erina\*.*]
	else if(!getVar("AV_GirlCarolinne",false) && !getVar("AV_GirlKris",false) && !getVar("AV_GirlMandy",false) && !getVar("AV_GirlNelly",false) ){
		showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "Girls2" + java.io.File.separator + "Erina" + java.io.File.separator + "*.*");
	}
    //--UNINTERPRETED LINE:@NotFlag(AV_GirlCarolinne, AV_GirlErina, AV_GirlMandy, AV_GirlNelly) @ShowImage[av_imagens\Girls2\Kris\*.*]
	else if(!getVar("AV_GirlCarolinne",false) && !getVar("AV_GirlErina",false) && !getVar("AV_GirlMandy",false) && !getVar("AV_GirlNelly",false) ){
		showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "Girls2" + java.io.File.separator + "Kris" + java.io.File.separator + "*.*");
	}
    //--UNINTERPRETED LINE:@NotFlag(AV_GirlCarolinne, AV_GirlErina, AV_GirlKris, AV_GirlNelly) @ShowImage[av_imagens\Girls2\Mandy\*.*]
	else if(!getVar("AV_GirlCarolinne",false) && !getVar("AV_GirlErina",false) && !getVar("AV_GirlKris",false) && !getVar("AV_GirlNelly",false) ){
		showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "Girls2" + java.io.File.separator + "Mandy" + java.io.File.separator + "*.*");
	}
    //--UNINTERPRETED LINE:@NotFlag(AV_GirlCarolinne, AV_GirlErina, AV_GirlKris, AV_GirlMandy) @ShowImage[av_imagens\Girls2\Nelly\*.*]
	else if(!getVar("AV_GirlCarolinne",false) && !getVar("AV_GirlErina",false) && !getVar("AV_GirlKris",false) && !getVar("AV_GirlMandy",false) ){
		showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "Girls2" + java.io.File.separator + "Nelly" + java.io.File.separator + "*.*");
	}
	DMessage("aV_ShowOmelegPics: end");
	return " ";
	//return "<dontsend>";
}