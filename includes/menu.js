var CurrentStatus = 0;
home_off = new Image(120,32);
home_off.src = "../images/offhome.gif";
home_on = new Image(120,32);
home_on.src = "../images/onhome.gif";
theteam_off = new Image(120,32);
theteam_off.src = "../images/offteam.gif";
theteam_on = new Image(120,32);
theteam_on.src = "../images/onteam.gif";
project_off = new Image(120,32);
project_off.src = "../images/offproj.gif";
project_on = new Image(120,32);
project_on.src = "../images/onproj.gif";
ai_off = new Image(120,32);
ai_off.src = "../images/offai.gif";
ai_on = new Image(120,32);
ai_on.src = "../images/onai.gif";
download_off = new Image(120,32);
download_off.src = "../images/offdown.gif";
download_on = new Image(120,32);
download_on.src = "../images/ondown.gif";
think_off = new Image(120,32);
think_off.src = "../images/offthink.gif";
think_on = new Image(120,32);
think_on.src = "../images/onthink.gif";
starcraft_off = new Image(120,32);
starcraft_off.src = "../images/offstar.gif";
starcraft_on = new Image(120,32);
starcraft_on.src = "../images/onstar.gif";
links_off = new Image(120,32);
links_off.src = "../images/offlinks.gif";
links_on = new Image(120,32);
links_on.src = "../images/onlinks.gif";

function RollOver(button)
{
var donewithit = false;
if ((!donewithit)&&(CurrentStatus == 0)){
 eval("document."+button+".src = "+button+"_on.src");
 donewithit = true;
 CurrentStatus = 1};
if ((!donewithit)&&(CurrentStatus == 1)){
 eval("document."+button+".src = "+button+"_off.src");
 donewithit = true;
 CurrentStatus = 0};
};

function showInfo(Name)
{
	obj = document.getElementById(Name);
	obj.style.visibility="visible";
	parent.frames[0].document.location.href="http://rcm-de.amazon.de/e/cm?t=clawsoftwar04-21&l=st1&search="+Name+"&mode=dvd-de&p=10&o=3&f=ifr&bg1=fafafa&fc1=000000&lc1=EE0000&amp;lt1=_blank";
}

function hideInfo(Name)
{
	obj = document.getElementById(Name);
	obj.style.visibility="hidden";
}

function amazon(Name)
{
	parent.frames[0].document.location.href="http://rcm-de.amazon.de/e/cm?t=clawsoftwar04-21&l=st1&search="+Name+"&mode=dvd-de&p=10&o=3&f=ifr&bg1=fafafa&fc1=000000&lc1=EE0000&amp;lt1=_blank";
}