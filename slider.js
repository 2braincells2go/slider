$(

function  () {

$(".slide").css({ 'position': 'absolute', height: '100%', width: '100%','left':'0%','top':'0%','display':'none' });
var slides = $(".slide");
for(var i=0;i<slides.length;i++)
{
	slides[i].setAttribute("id",i+1);
}
if(window.location.hash=="")
{
	window.location.hash="1";
}
slider(parseInt(window.location.hash.replace("#","")),parseInt(window.location.hash.replace("#","")));

$(window).keydown(function(e){
var key = e.keyCode||e.which;
console.log()
if((key==37)||(key==40))
{
	if(parseInt(window.location.hash.replace("#",""))>1)
	{
	slider(parseInt(window.location.hash.replace("#","")),parseInt(window.location.hash.replace("#",""))-1);
	}

}

if((key==38)||(key==39))
{
	if(parseInt(window.location.hash.replace("#",""))<$(".slide").length)
	{
	slider(parseInt(window.location.hash.replace("#","")),parseInt(window.location.hash.replace("#",""))+1);
	}

}


});



}
	);

function slider(current,next)
{
	window.location.hash=next;
//	$("#"+current).addClass("animated bounceOutLeft");
	$("#"+current).css("display",'none');
	$("#"+next).fadeIn();

	
}

