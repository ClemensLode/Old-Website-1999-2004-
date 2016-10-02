
function showInfo(Name)
{
	obj = document.getElementById(Name);
	obj.style.visibility="visible";
}

function hideInfo(Name)
{
	obj = document.getElementById(Name);
	obj.style.visibility="hidden";
}

function amazon(Name)
{
	parent.frames[0].document.location.href="http://rcm-de.amazon.de/e/cm?t=clawsoftwar04-21&l=st1&search="+Name+"&p=10&o=3&f=ifr&bg1=fafafa&fc1=000000&lc1=EE0000&amp;lt1=_blank";
}
