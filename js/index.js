
var l;
var p=0;
var o,x;
var flag=0;
function chose()
{	
    l= document.querySelector('input[name = "selector"]:checked').value;

    /*sessionStorage.setItem(key, l);
    alert( sessionStorage.getItem(key));
    alert(l);*/
}
function slideTg(){
    x=document.getElementById("menu").offsetHeight;
    if(x=="0")
    {	document.getElementById("menu").style.height="130px";}
    else
    {	document.getElementById("menu").style.height="0";}
}
function es(){
    window.location.href="auto.html?"+'?key='+l;
    return false;
}

function paus()
{
    if(p==0)
    {
        document.getElementById("audio").pause();
        document.getElementById("icon").innerHTML='<li><img src="image/music.png" alt="music"/></li>';
        p=1;
    }
    else if(p==1)
    {
        document.getElementById("audio").play();
        document.getElementById("icon").innerHTML='<li><img src="image/music 1.png" alt="music"/></li>';
        p=0;
    }

}
function hide()
{
    x=document.getElementById("drop2").style.display;
    if(x=="block")
    {	document.getElementById("drop2").style.display="none";}
    else
    {	document.getElementById("drop2").style.display="block";}

}



function showld(){

    if(flag==0){
        document.getElementById("bdy").classList.add("back-S");
        document.getElementById("htl").classList.add("back-S");
        document.getElementById("audio").pause();
    }setTimeout(function(){
        flag=1;
        document.getElementById("bdy").classList.remove("back-S");
        document.getElementById("htl").classList.remove("back-S");
        document.getElementById("bar").style.display="none";
        document.getElementById("content").style.display="block";
        document.getElementById("audio").play();
    }, 8000);
}
