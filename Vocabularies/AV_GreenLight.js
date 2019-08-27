function AV_GreenLightVocabulary()
{
	DMessage("aV_GreenLight: start");
	found=false;
	while(!found){
		switch(randomInteger(1,8) ){
			case 1:
				if(getVar("AV_Know_00", false))
				{
					CMessage("<c=green b> GREEN LIGHT");
					showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
					//--UNINTERPRETED LINE:@Flag(AV_Know_00) <Font color="green">GREEN LIGHT</Font> @ShowImage[av_imagens\02\*.jpg] 
					found=true;
				}
				break;
			case 2:
				if(getVar("AV_Know_01", false))
				{
					CMessage("<c=green b> GREEN LIGHT");
					showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
					found=true;
				}
				break;
			case 3:
				if(getVar("AV_Know_12", false))
				{
					CMessage("<c=green b> GREEN LIGHT");
					showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
					found=true;
				}
				break;
			case 4:
				if(getVar("AV_Know_03", false))
				{
					CMessage("<c=green b> GREEN LIGHT");
					showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "04" + java.io.File.separator + "*.jpg");
					found=true;
				}
				break;
			case 5:
				CMessage("<c=green b> GREEN LIGHT");
				showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "gifs" + java.io.File.separator + "*.gif");
				found=true;
				break;
			case 6:
				CMessage("<c=green b> GREEN LIGHT");
				showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "Girls" + java.io.File.separator + "*.jpg");
				found=true;
				break;
			case 7:
				CMessage("<c=green b> GREEN LIGHT");
				showTaggedImage(4, ["femdom"]);
				found=true;
				break;
			case 8:
				CMessage("<c=green b> GREEN LIGHT");
				showTaggedImage(4, ["softcore"]);
				found=true;
				break;
		}
	}
	DMessage("aV_GreenLight: end");
	return "<dontsend>";
}