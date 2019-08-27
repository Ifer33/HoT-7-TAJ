function AV_ImgTypeVocabulary() 
{
	DMessage("Vocab: AV_ImgType Begin");
    if(getVar("AV_Softcore", false))
    {
        showTaggedImage(4, ["softcore"]);
    }
    if(getVar("AV_FemDom", false))
    {
        showTaggedImage(4, ["femdom"]);
    }
    if(getVar("AV_Boobs", false))
    {
        showTaggedImage(4, ["boobs"]);
    }
    if(getVar("AV_Butt", false))
    {
        showTaggedImage(4, ["ass"]);
    }
    if (inGroup(2))
    {
    }
    if (inGroup(3))
    {
    }
    if (inGroup(4))
    {
    }
    if(getVar("AV_IntCrush50", false))
    {
        showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "10" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_IntCrush51", false))
    {
        showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "11" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_IntCrush52", false))
    {
        showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "12" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_IntCrush53", false))
    {
        showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "13" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_IntCrush54", false))
    {
        showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "14" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_IntCrush55", false))
    {
        showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "15" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_IntCrush56", false))
    {
        showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "16" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_IntCrush57", false))
    {
        showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "17" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_IntCrush58", false))
    {
        showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "18" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_IntCrush59", false))
    {
        showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "19" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_IntCrushSec", false))
    {
        showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "01" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_IntCrushSing", false))
    {
        showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "03" + java.io.File.separator + "*.jpg");
    }
    if(getVar("AV_IntCrushAct", false))
    {
        showImage("Images" + java.io.File.separator + "av_imagens" + java.io.File.separator + "02" + java.io.File.separator + "*.jpg");
    }
	DMessage("Vocab: AV_ImgType End");
	return "<dontsend>";
}