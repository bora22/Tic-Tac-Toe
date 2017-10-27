/*if (document.all||document.getElementById){
document.write('<style>.element{')
document.write('width:25%;height:25%;')
document.write('}</style>')
}
if (document.all||document.getElementById){
document.write('<style>.column-el{')
document.write('width:20%;height:20%;')
document.write('}</style>')
}*/
var turn=0;
var O=0;
var X=0;
var o='<i class="fa fa-circle-o col-white"></i>';
var x='<i class="fa fa-times col-white" ></i>';
var b=null;
var chng="false" ;
var pss;
function ab(z)
{
    var c=z.innerHTML;
    if(c==x || c== o)
    {
        alert("You can not re-enter value here !");
    }
    else
    {
        if(turn == 0)
        {
            z.style.background="#ecaf4f";
            z.style.padding = "5% 0 0 0";
            z.style.color="#fff";
            z.innerHTML = o;
            turn =1;
            O++;
        }
        compturn();
    }
}

function chose() {
    // l = document.querySelector('input[name = "selector"]:checked').value;
    var urlParams;
    (window.onpopstate = function () {
        var match,
            pl     = /\+/g,  // Regex for replacing addition symbol with a space
            search = /([^&=]+)=?([^&]*)/g,
            decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
            query  = window.location.search.substring(1);

        urlParams = {};
        while (match = search.exec(query))
            urlParams[decode(match[1])] = decode(match[2]);
    })();
    pss=urlParams["key"];
    if (pss == 'o') {
        chng="true" ;
        o = '<i class="fa fa-circle-o col-white"></i>';
        x = '<i class="fa fa-times col-white"></i>';
    }
    else if (pss == 'x') {
        chng="true" ;
        o = '<i class="fa fa-times col-white"></i>';
        x = '<i class="fa fa-circle-o col-white"></i>';
    } else if(pss == null) {

        o = '<i class="fa fa-circle-o col-white"></i>';
        x = '<i class="fa fa-times col-white"></i>';
    }

}


function hover(m)
{
    var c=m.innerHTML;
    if(c==x || c== o)
    {

    }
    else
    {
        if(turn == 0)
        {
            if( chng=="true" && pss=="x"){
                m.style.background="#666";
                m.style.color="#d3d3d3";
                m.style.padding = "5% 0 0 0";
                m.innerHTML = "<img src='image/value-x.png' alt='X'/>";
            }else if( chng=="true" && pss=="o")
            {
                m.style.background = "#666";
                m.style.color = "#d3d3d3";
                m.style.padding = "4% 0 0 0";
                m.innerHTML = "<img src='image/value-o.png' alt='O'/>";
            }else{
                m.style.background = "#666";
                m.style.color = "#d3d3d3";
                m.style.padding = "4% 0 0 0";
                m.innerHTML = "<img src='image/value-o.png' alt='O'/>";
            }
        }
        if(turn == 1)
        {
            if( chng="true" && pss=="o"){
                m.style.background="#666";
                m.style.color="#d3d3d3";
                m.style.padding = "4% 0 0 0";
                m.innerHTML = "<img src='image/value-o.png' alt='O'/>";
            }else  if( chng=="true" && pss=="x"){
                m.style.background="#666";
                m.style.color="#d3d3d3";
                m.style.padding = "5% 0 0 0";
                m.innerHTML = "<img src='image/value-x.png' alt='X'/>";
            }else{
                m.style.background="#666";
                m.style.color="#d3d3d3";
                m.style.padding = "5% 0 0 0";
                m.innerHTML = "<img src='image/value-x.png' alt='X'/>";
            }
        }
    }
}
function hover2(m)
{
    var c=m.innerHTML;
    if(c==x || c== o)
    {

    }
    else
    {
        m.style.background="#78bec5";
        m.style.padding = "0 0 0 0";
        m.innerHTML = b;
    }
}
function compturn()
{
    var a1=document.getElementById('a1').innerHTML;
    var a2=document.getElementById('a2').innerHTML;
    var a3=document.getElementById('a3').innerHTML;
    var a4=document.getElementById('a4').innerHTML;
    var a5=document.getElementById('a5').innerHTML;
    var a6=document.getElementById('a6').innerHTML;
    var a7=document.getElementById('a7').innerHTML;
    var a8=document.getElementById('a8').innerHTML;
    var a9=document.getElementById('a9').innerHTML;
    if(a1==x &&a2==x &&a3==""&&turn ==1)
    { 	document.getElementById('a3').style.background="#dc685a";
        document.getElementById('a3').style.padding = "5% 0 0 0";
        document.getElementById('a3').innerHTML=x;
        turn=0;X++;
    }
    else if(a1==x &&a3==x &&a2==""&&turn ==1)
    {
        document.getElementById('a2').style.background="#dc685a";
        document.getElementById('a2').style.padding = "5% 0 0 0";
        document.getElementById('a2').innerHTML=x;
        turn=0;X++;
    }
    else if(a2==x &&a3==x &&a1==""&&turn ==1)
    {
        document.getElementById('a1').style.background="#dc685a";
        document.getElementById('a1').style.padding = "5% 0 0 0";
        document.getElementById('a1').innerHTML=x;
        turn=0;X++;
    }
    else if(a4==x &&a5==x &&a6==""&&turn ==1)
    {
        document.getElementById('a6').style.background="#dc685a";
        document.getElementById('a6').style.padding = "5% 0 0 0";
        document.getElementById('a6').innerHTML=x;
        turn=0;X++;
    }
    else if(a5==x &&a6==x &&a4==""&&turn ==1)
    {
        document.getElementById('a4').style.background="#dc685a";
        document.getElementById('a4').style.padding = "5% 0 0 0";
        document.getElementById('a4').innerHTML=x;
        turn=0;X++;
    }
    else if(a4==x &&a6==x &&a5==""&&turn ==1)
    {
        document.getElementById('a5').style.background="#dc685a";
        document.getElementById('a5').style.padding = "5% 0 0 0";
        document.getElementById('a5').innerHTML=x;
        turn=0;X++;
    }
    else if(a7==x &&a8==x &&a9==""&&turn ==1)
    {
        document.getElementById('a9').style.background="#dc685a";
        document.getElementById('a9').style.padding = "5% 0 0 0";
        document.getElementById('a9').innerHTML=x;
        turn=0;X++;
    }
    else if(a8==x &&a9==x &&a7==""&&turn ==1)
    {
        document.getElementById('a7').style.background="#dc685a";
        document.getElementById('a7').style.padding = "5% 0 0 0";
        document.getElementById('a7').innerHTML=x;
        turn=0;X++;
    }
    else if(a9==x &&a7==x &&a8==""&&turn ==1)
    {
        document.getElementById('a8').style.background="#dc685a";
        document.getElementById('a8').style.padding = "5% 0 0 0";
        document.getElementById('a8').innerHTML=x;
        turn=0;X++;
    }
    else if(a1==x &&a4==x &&a7==""&&turn ==1)
    {
        document.getElementById('a7').style.background="#dc685a";
        document.getElementById('a7').style.padding = "5% 0 0 0";
        document.getElementById('a7').innerHTML=x;
        turn=0;X++;
    }
    else if(a4==x &&a7==x &&a1==""&&turn ==1)
    {
        document.getElementById('a1').style.background="#dc685a";
        document.getElementById('a1').style.padding = "5% 0 0 0";
        document.getElementById('a1').innerHTML=x;
        turn=0;X++;
    }
    else if(a1==x &&a7==x &&a4==""&&turn ==1)
    {
        document.getElementById('a4').style.background="#dc685a";
        document.getElementById('a4').style.padding = "5% 0 0 0";
        document.getElementById('a4').innerHTML=x;
        turn=0;X++;
    }
    else if(a2==x&&a5==x&&a8==""&&turn ==1)
    {
        document.getElementById('a8').style.background="#dc685a";
        document.getElementById('a8').style.padding = "5% 0 0 0";
        document.getElementById('a8').innerHTML=x;
        turn=0;X++;
    }
    else if(a5==x&&a8==x&&a2==""&&turn ==1)
    {
        document.getElementById('a2').style.background="#dc685a";
        document.getElementById('a2').style.padding = "5% 0 0 0";
        document.getElementById('a2').innerHTML=x;
        turn=0;X++;
    }
    else if(a2==x&&a8==x&&a5==""&&turn ==1)
    {
        document.getElementById('a5').style.background="#dc685a";
        document.getElementById('a5').style.padding = "5% 0 0 0";
        document.getElementById('a5').innerHTML=x;
        turn=0;X++;
    }
    else if(a3==x&&a6==x&&a9==""&&turn ==1)
    {
        document.getElementById('a9').style.background="#dc685a";
        document.getElementById('a9').style.padding = "5% 0 0 0";
        document.getElementById('a9').innerHTML=x;
        turn=0;X++;
    }
    else if(a6==x&&a9==x&&a3==""&&turn ==1)
    {
        document.getElementById('a3').style.background="#dc685a";
        document.getElementById('a3').style.padding = "5% 0 0 0";
        document.getElementById('a3').innerHTML=x;
        turn=0;X++;
    }
    else if(a9==x &&a3==x &&a6==""&&turn ==1)
    {
        document.getElementById('a6').style.background="#dc685a";
        document.getElementById('a6').style.padding = "5% 0 0 0";
        document.getElementById('a6').innerHTML=x;
        turn=0;X++;
    }
    else if(a1==x &&a5==x &&a9==""&&turn ==1)
    {
        document.getElementById('a9').style.background="#dc685a";
        document.getElementById('a9').style.padding = "5% 0 0 0";
        document.getElementById('a9').innerHTML=x;
        turn=0;X++;
    }
    else if(a1==x &&a9==x &&a5==""&&turn ==1)
    {
        document.getElementById('a5').style.background="#dc685a";
        document.getElementById('a5').style.padding = "5% 0 0 0";
        document.getElementById('a5').innerHTML=x;
        turn=0;X++;
    }
    else if(a9==x &&a5==x &&a1==""&&turn ==1)
    {
        document.getElementById('a1').style.background="#dc685a";
        document.getElementById('a1').style.padding = "5% 0 0 0";
        document.getElementById('a1').innerHTML=x;
        turn=0;X++;
    }
    else if(a3==x &&a5==x &&a7==""&&turn ==1)
    {
        document.getElementById('a7').style.background="#dc685a";
        document.getElementById('a7').style.padding = "5% 0 0 0";
        document.getElementById('a7').innerHTML=x;
        turn=0;X++;
    }
    else if(a5==x &&a7==x &&a3==""&&turn ==1)
    {
        document.getElementById('a3').style.background="#dc685a";
        document.getElementById('a3').style.padding = "5% 0 0 0";
        document.getElementById('a3').innerHTML=x;
        turn=0;X++;
    }
    else if(a3==x &&a7==x &&a5==""&&turn ==1)
    {
        document.getElementById('a5').style.background="#dc685a";
        document.getElementById('a5').style.padding = "5% 0 0 0";
        document.getElementById('a5').innerHTML=x;
        turn=0;X++;
    }
    else
    {
        compavoid();
    }
}
function compavoid()
{			var a1=document.getElementById('a1').innerHTML;
    var a2=document.getElementById('a2').innerHTML;
    var a3=document.getElementById('a3').innerHTML;
    var a4=document.getElementById('a4').innerHTML;
    var a5=document.getElementById('a5').innerHTML;
    var a6=document.getElementById('a6').innerHTML;
    var a7=document.getElementById('a7').innerHTML;
    var a8=document.getElementById('a8').innerHTML;
    var a9=document.getElementById('a9').innerHTML;
    if(a1==o&&a2==o&&a3==""&&turn ==1)
    {
        document.getElementById('a3').style.background="#dc685a";
        document.getElementById('a3').style.padding = "5% 0 0 0";
        document.getElementById('a3').innerHTML=x;
        turn=0;X++;
    }
    else if(a1==o&&a3==o&&a2==""&&turn ==1)
    {
        document.getElementById('a2').style.background="#dc685a";
        document.getElementById('a2').style.padding = "5% 0 0 0";
        document.getElementById('a2').innerHTML=x;
        turn=0;X++;
    }
    else if(a2==o&&a3==o&&a1==""&&turn ==1)
    {
        document.getElementById('a1').style.background="#dc685a";
        document.getElementById('a1').style.padding = "5% 0 0 0";
        document.getElementById('a1').innerHTML=x;
        turn=0;X++;
    }
    else if(a4==o&&a5==o&&a6==""&&turn ==1)
    {
        document.getElementById('a6').style.background="#dc685a";
        document.getElementById('a6').style.padding = "5% 0 0 0";
        document.getElementById('a6').innerHTML=x;
        turn=0;X++;
    }
    else if(a5==o&&a6==o&&a4==""&&turn ==1)
    {
        document.getElementById('a4').style.background="#dc685a";
        document.getElementById('a4').style.padding = "5% 0 0 0";
        document.getElementById('a4').innerHTML=x;
        turn=0;X++;
    }
    else if(a4==o&&a6==o&&a5==""&&turn ==1)
    {
        document.getElementById('a5').style.background="#dc685a";
        document.getElementById('a5').style.padding = "5% 0 0 0";
        document.getElementById('a5').innerHTML=x;
        turn=0;X++;
    }
    else if(a7==o&&a8==o&&a9==""&&turn ==1)
    {
        document.getElementById('a9').style.background="#dc685a";
        document.getElementById('a9').style.padding = "5% 0 0 0";
        document.getElementById('a9').innerHTML=x;
        turn=0;X++;
    }
    else if(a8==o&&a9==o&&a7==""&&turn ==1)
    {
        document.getElementById('a7').style.background="#dc685a";
        document.getElementById('a7').style.padding = "5% 0 0 0";
        document.getElementById('a7').innerHTML=x;
        turn=0;X++;
    }
    else if(a9==o&&a7==o&&a8==""&&turn ==1)
    {
        document.getElementById('a8').style.background="#dc685a";
        document.getElementById('a8').style.padding = "5% 0 0 0";
        document.getElementById('a8').innerHTML=x;
        turn=0;X++;
    }
    else if(a1==o&&a4==o&&a7==""&&turn ==1)
    {
        document.getElementById('a7').style.background="#dc685a";
        document.getElementById('a7').style.padding = "5% 0 0 0";
        document.getElementById('a7').innerHTML=x;
        turn=0;X++;
    }
    else if(a4==o&&a7==o&&a1==""&&turn ==1)
    {
        document.getElementById('a1').style.background="#dc685a";
        document.getElementById('a1').style.padding = "5% 0 0 0";
        document.getElementById('a1').innerHTML=x;
        turn=0;X++;
    }
    else if(a1==o&&a7==o&&a4==""&&turn ==1)
    {
        document.getElementById('a4').style.background="#dc685a";
        document.getElementById('a4').style.padding = "5% 0 0 0";
        document.getElementById('a4').innerHTML=x;
        turn=0;X++;
    }
    else if(a2==o&&a5==o&&a8==""&&turn ==1)
    {
        document.getElementById('a8').style.background="#dc685a";
        document.getElementById('a8').style.padding = "5% 0 0 0";
        document.getElementById('a8').innerHTML=x;
        turn=0;X++;
    }
    else if(a5==o&&a8==o&&a2==""&&turn ==1)
    {
        document.getElementById('a2').style.background="#dc685a";
        document.getElementById('a2').style.padding = "5% 0 0 0";
        document.getElementById('a2').innerHTML=x;
        turn=0;X++;
    }
    else if(a2==o&&a8==o&&a5==""&&turn ==1)
    {
        document.getElementById('a5').style.background="#dc685a";
        document.getElementById('a5').style.padding = "5% 0 0 0";
        document.getElementById('a5').innerHTML=x;
        turn=0;X++;
    }
    else if(a3==o&&a6==o&&a9==""&&turn ==1)
    {
        document.getElementById('a9').style.background="#dc685a";
        document.getElementById('a9').style.padding = "5% 0 0 0";
        document.getElementById('a9').innerHTML=x;
        turn=0;X++;
    }
    else if(a6==o&&a9==o&&a3==""&&turn ==1)
    {
        document.getElementById('a3').style.background="#dc685a";
        document.getElementById('a3').style.padding = "5% 0 0 0";
        document.getElementById('a3').innerHTML=x;
        turn=0;X++;
    }
    else if(a9==o&&a3==o&&a6==""&&turn ==1)
    {
        document.getElementById('a6').style.background="#dc685a";
        document.getElementById('a6').style.padding = "5% 0 0 0";
        document.getElementById('a6').innerHTML=x;
        turn=0;X++;
    }
    else if(a1==o&&a5==o&&a9==""&&turn ==1)
    {
        document.getElementById('a9').style.background="#dc685a";
        document.getElementById('a9').style.padding = "5% 0 0 0";
        document.getElementById('a9').innerHTML=x;
        turn=0;X++;
    }
    else if(a1==o&&a9==o&&a5==""&&turn ==1)
    {
        document.getElementById('a5').style.background="#dc685a";
        document.getElementById('a5').style.padding = "5% 0 0 0";
        document.getElementById('a5').innerHTML=x;
        turn=0;X++;
    }
    else if(a9==o&&a5==o&&a1==""&&turn ==1)
    {
        document.getElementById('a1').style.background="#dc685a";
        document.getElementById('a1').style.padding = "5% 0 0 0";
        document.getElementById('a1').innerHTML=x;
        turn=0;X++;
    }
    else if(a3==o&&a5==o&&a7==""&&turn ==1)
    {
        document.getElementById('a7').style.background="#dc685a";
        document.getElementById('a7').style.padding = "5% 0 0 0";
        document.getElementById('a7').innerHTML=x;
        turn=0;X++;
    }
    else if(a5==o&&a7==o&&a3==""&&turn ==1)
    {
        document.getElementById('a3').style.background="#dc685a";
        document.getElementById('a3').style.padding = "5% 0 0 0";
        document.getElementById('a3').innerHTML=x;
        turn=0;X++;
    }
    else if(a3==o&&a7==o&&a5==""&&turn ==1)
    {
        document.getElementById('a5').style.background="#dc685a";
        document.getElementById('a5').style.padding = "5% 0 0 0";
        document.getElementById('a5').innerHTML=x;
        turn=0;X++;
    }
    else
    {
        computer();
    }
}

function computer()
{		var a1=document.getElementById('a1').innerHTML;
    var a2=document.getElementById('a2').innerHTML;
    var a3=document.getElementById('a3').innerHTML;
    var a4=document.getElementById('a4').innerHTML;
    var a5=document.getElementById('a5').innerHTML;
    var a6=document.getElementById('a6').innerHTML;
    var a7=document.getElementById('a7').innerHTML;
    var a8=document.getElementById('a8').innerHTML;
    var a9=document.getElementById('a9').innerHTML;
    if(a5 == "" && turn == 1)
    {
        document.getElementById('a5').style.background="#dc685a";
        document.getElementById('a5').style.padding = "5% 0 0 0";
        document.getElementById('a5').innerHTML=x;
        turn=0;X++;
    }
    else if(a1 == "" && turn == 1)
    {
        document.getElementById('a1').style.background="#dc685a";
        document.getElementById('a1').style.padding = "5% 0 0 0";
        document.getElementById('a1').innerHTML=x;
        turn=0;X++;
    }
    else if(a9 == "" && turn == 1)
    {
        document.getElementById('a9').style.background="#dc685a";
        document.getElementById('a9').style.padding = "5% 0 0 0";
        document.getElementById('a9').innerHTML=x;
        turn=0;X++;
    }
    else if(a7 == "" && turn == 1)
    {
        document.getElementById('a7').style.background="#dc685a";
        document.getElementById('a7').style.padding = "5% 0 0 0";
        document.getElementById('a7').innerHTML=x;
        turn=0;X++;
    }
    else if(a2 == "" && turn == 1)
    {
        document.getElementById('a2').style.background="#dc685a";
        document.getElementById('a2').style.padding = "5% 0 0 0";
        document.getElementById('a2').innerHTML=x;
        turn=0;X++;
    }
    else if(a8 == "" && turn == 1)
    {
        document.getElementById('a8').style.background="#dc685a";
        document.getElementById('a8').style.padding = "5% 0 0 0";
        document.getElementById('a8').innerHTML=x;
        turn=0;X++;
    }
    else if(a3 == "" && turn == 1)
    {
        document.getElementById('a3').style.background="#dc685a";
        document.getElementById('a3').style.padding = "5% 0 0 0";
        document.getElementById('a3').innerHTML=x;
        turn=0;X++;
    }
    else if(a6 == "" && turn == 1)
    {
        document.getElementById('a6').style.background="#dc685a";
        document.getElementById('a6').style.padding = "5% 0 0 0";
        document.getElementById('a6').innerHTML=x;
        turn=0;X++;
    }
    else if(a4 == "" && turn == 1)
    {
        document.getElementById('a4').style.background="#dc685a";
        document.getElementById('a4').style.padding = "5% 0 0 0";
        document.getElementById('a4').innerHTML=x;
        turn=0;X++;
    }
}


function show()
{
    var x=document.getElementById("dm").style.display;
    if(x=="none")
    {	document.getElementById("dm").style.display="block";
    }
}
function txt()
{
    if(turn==0)
    {	document.getElementById("dm").value="Your turn";
    }
    else if(turn==1)
    {	document.getElementById("dm").value="Computer";
    }
    else
    {
    }
}
