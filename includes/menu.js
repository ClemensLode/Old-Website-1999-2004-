
function showInfo(Name,Type)
{
	obj = document.getElementById(Name);
	obj.style.visibility="visible";

	if(Type>0)
	{
		switch(Type)
		{
			case 1:Modus="books-de";break;
			case 2:Modus="books-de-intl-us";break;
			case 3:Modus="music";break;
			case 4:Modus="classical-music";break;
			case 5:Modus="music-tracks";break;
			case 6:Modus="video-dvd-de";break;
			case 7:Modus="dvd-de";break;
			case 8:Modus="video-games-de";break;
			case 9:Modus="software-de";break;
			case 10:Modus="ce-de";break;
			default:break;
		} 
		parent.frames[1].document.location.href="http://rcm-de.amazon.de/e/cm?t=clawsoftwar04-21&l=st1&search="+Name+"&mode="+Modus+"&p=10&o=3&f=ifr&bg1=fafafa&fc1=000000&lc1=EE0000&amp;lt1=_blank";
	}
}

function hideInfo(Name)
{
	obj = document.getElementById(Name);
	obj.style.visibility="hidden";
}








