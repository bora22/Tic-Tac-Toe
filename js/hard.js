
var turn=0;
var O=0;
var X=0;
var d;
var flag=0;
var c1=0;
var c2=0;
var c3=0;
var o='<i class="fa fa-circle-o col-white"></i>';
var x='<i class="fa fa-times col-white"></i>';
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
        {	z.style.background="#ecaf4f";
            z.style.padding="5% 0 0 0";
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

function computer() {
    var a1 = document.getElementById('a1').innerHTML;
    var a2 = document.getElementById('a2').innerHTML;
    var a3 = document.getElementById('a3').innerHTML;
    var a4 = document.getElementById('a4').innerHTML;
    var a5 = document.getElementById('a5').innerHTML;
    var a6 = document.getElementById('a6').innerHTML;
    var a7 = document.getElementById('a7').innerHTML;
    var a8 = document.getElementById('a8').innerHTML;
    var a9 = document.getElementById('a9').innerHTML;
    if (d == "a1" && a3 == "" && turn == 1) {
        document.getElementById('a3').style.background = "#dc685a";
        document.getElementById('a3').style.padding = "5% 0 0 0";
        document.getElementById('a3').innerHTML = x;
        turn = 0;
        X++;
    }
    else if (d == "a2" && a7 == "" && turn == 1) {
        document.getElementById('a7').style.background = "#dc685a";
        document.getElementById('a7').style.padding = "5% 0 0 0";
        document.getElementById('a7').innerHTML = x;
        turn = 0;
        X++;
    }
    else if (d == "a5" && a7 == "" && turn == 1) {
        document.getElementById('a7').style.background = "#dc685a";
        document.getElementById('a7').style.padding = "5% 0 0 0";
        document.getElementById('a7').innerHTML = x;
        turn = 0;
        X++;
    }
    else if (d == "a7" && a3 == "" && turn == 1) {
        document.getElementById('a3').style.background = "#dc685a";
        document.getElementById('a3').style.padding = "5% 0 0 0";
        document.getElementById('a3').innerHTML = x;
        turn = 0;
        X++;
    }
    else if (a5 == "" && turn == 1) {
        document.getElementById('a5').style.background = "#dc685a";
        document.getElementById('a5').style.padding = "5% 0 0 0";
        document.getElementById('a5').innerHTML = x;
        turn = 0;
        X++;
    }
    else if (a1 == "" && turn == 1) {
        document.getElementById('a1').style.background = "#dc685a";
        document.getElementById('a1').style.padding = "5% 0 0 0";
        document.getElementById('a1').innerHTML = x;
        turn = 0;
        X++;
    }
    else if (a9 == "" && turn == 1) {
        document.getElementById('a9').style.background = "#dc685a";
        document.getElementById('a9').style.padding = "5% 0 0 0";
        document.getElementById('a9').innerHTML = x;
        turn = 0;
        X++;
    }
    else if (a7 == "" && turn == 1) {
        document.getElementById('a7').style.background = "#dc685a";
        document.getElementById('a7').style.padding = "5% 0 0 0";
        document.getElementById('a7').innerHTML = x;
        turn = 0;
        X++;
    }
    else if (a3 == "" && turn == 1) {
        document.getElementById('a3').style.background = "#dc685a";
        document.getElementById('a3').style.padding = "5% 0 0 0";
        document.getElementById('a3').innerHTML = x;
        turn = 0;
        X++;
    }
    else if (a8 == "" && turn == 1) {
        document.getElementById('a8').style.background = "#dc685a";
        document.getElementById('a8').style.padding = "5% 0 0 0";
        document.getElementById('a8').innerHTML = x;
        turn = 0;
        X++;
    }
    else if (a2 == "" && turn == 1) {
        document.getElementById('a2').style.background = "#dc685a";
        document.getElementById('a2').style.padding = "5% 0 0 0";
        document.getElementById('a2').innerHTML = x;
        turn = 0;
        X++;
    }
    else if (a6 == "" && turn == 1) {
        document.getElementById('a6').style.background = "#dc685a";
        document.getElementById('a6').style.padding = "5% 0 0 0";
        document.getElementById('a6').innerHTML = x;
        turn = 0;
        X++;
    }
    else if (a4 == "" && turn == 1) {
        document.getElementById('a4').style.background = "#dc685a";
        document.getElementById('a4').style.padding = "5% 0 0 0";
        document.getElementById('a4').innerHTML = x;
        turn = 0;
        X++;
    }
}
function mov()
{
    setTimeout(function addEvent(){
        var a1=document.getElementById('a1').innerHTML;
        var a2=document.getElementById('a2').innerHTML;
        var a3=document.getElementById('a3').innerHTML;
        var a4=document.getElementById('a4').innerHTML;
        var a5=document.getElementById('a5').innerHTML;
        var a6=document.getElementById('a6').innerHTML;
        var a7=document.getElementById('a7').innerHTML;
        var a8=document.getElementById('a8').innerHTML;
        var a9=document.getElementById('a9').innerHTML;
        var t=[[a1,a2,a3],[a4,a5,a6],[a7,a8,a9]];
        if(t[0][0]==o &&t[0][1]==o &&t[0][2]==o)
        {
            document.getElementById('a1').innerHTML="<i class='fa fa-circle-o  pad-aft-fn-o' ><hr class='line'></hr>";
            document.getElementById('a2').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o'></hr>";
            document.getElementById('a3').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o'></hr>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;You won the match .");
                document.getElementById("audio").play();},150);
            c1++;
        }
        else if(t[0][0]==x &&t[0][1]==x &&t[0][2]==x)
        { 	document.getElementById('a1').innerHTML="<i class='fa fa-times pad-aft-fn-x'><hr class='line'></hr>";
            document.getElementById('a2').innerHTML="<i class='fa fa-times pad-aft-fn-x'></hr>";
            document.getElementById('a3').innerHTML="<i class='fa fa-times pad-aft-fn-x'></hr>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-frown-o'></i>&nbsp;&nbsp;You Loss the match .");
                document.getElementById("audio").play();},150);
            c2++;
            flag=1;
        }
        else if(t[1][0]==o &&t[1][1]==o &&t[1][2]==o)
        {	document.getElementById('a4').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o'><hr class='line'></hr>";
            document.getElementById('a5').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o'></i>";
            document.getElementById('a6').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;You won the match .");
                document.getElementById("audio").play();},150);
            c1++;
        }
        else if(t[1][0]==x &&t[1][1]==x &&t[1][2]==x)
        {	document.getElementById('a4').innerHTML="<i class='fa fa-times pad-aft-fn-x' ><hr class='line'></hr>";
            document.getElementById('a5').innerHTML="<i class='fa fa-times pad-aft-fn-x' ></i>";
            document.getElementById('a6').innerHTML="<i class='fa fa-times pad-aft-fn-x' ></i>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-frown-o'></i>&nbsp;&nbsp;You Loss the match .");
                document.getElementById("audio").play();},150);
            c2++;
            flag=1;
        }
        else if(t[2][0]==o &&t[2][1]==o &&t[2][2]==o)
        {	document.getElementById('a7').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ><hr class='line'></hr>";
            document.getElementById('a8').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i>";
            document.getElementById('a9').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;You won the match .");
                document.getElementById("audio").play();},150);
            c1++;
        }
        else if(t[2][0]==x&&t[2][1]==x &&t[2][2]==x)
        {	document.getElementById('a7').innerHTML="<i class='fa fa-times pad-aft-fn-x'><hr class='line'></hr>";
            document.getElementById('a8').innerHTML="<i class='fa fa-times pad-aft-fn-x'>";
            document.getElementById('a9').innerHTML="<i class='fa fa-times pad-aft-fn-x'>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-frown-o'></i>&nbsp;&nbsp;You Loss the match .");
                document.getElementById("audio").play();},150);
            c2++;
            flag=1;
        }
        else if(t[0][0]==o &&t[1][0]==o &&t[2][0]==o)
        {	document.getElementById('a1').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i><hr class='linev'></hr>";
            document.getElementById('a4').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i>";
            document.getElementById('a7').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;You won the match .");
                document.getElementById("audio").play();},150);
            c1++;
        }
        else if(t[0][0]==x &&t[1][0]==x &&t[2][0]==x)
        {	document.getElementById('a1').innerHTML="<i class='fa fa-times pad-aft-fn-x'></i><hr class='linev'></hr>";
            document.getElementById('a4').innerHTML="<i class='fa fa-times pad-aft-fn-x'></i></hr>";
            document.getElementById('a7').innerHTML="<i class='fa fa-times pad-aft-fn-x'></i></hr>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-frown-o'></i>&nbsp;&nbsp;You Loss the match .");
                document.getElementById("audio").play();},150);
            c2++;
            flag=1;
        }
        else if(t[0][1]==o &&t[1][1]==o &&t[2][1]==o)
        {	document.getElementById('a2').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i><hr class='linev'></hr>";
            document.getElementById('a5').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i>";
            document.getElementById('a8').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;You won the match .");
                document.getElementById("audio").play();},150);
            c1++;
        }
        else if(t[0][1]==x &&t[1][1]==x &&t[2][1]==x)
        {	document.getElementById('a2').innerHTML="<i class='fa fa-times pad-aft-fn-x'></i><hr class='linev'></hr>";
            document.getElementById('a5').innerHTML="<i class='fa fa-times pad-aft-fn-x'></i>";
            document.getElementById('a8').innerHTML="<i class='fa fa-times pad-aft-fn-x'></i>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-frown-o'></i>&nbsp;&nbsp;You Loss the match .");
                document.getElementById("audio").play();},150);
            c2++;
            flag=1;
        }
        else if(t[0][2]==o &&t[1][2]==o &&t[2][2]==o)
        {	document.getElementById('a3').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i><hr class='linev'></hr>";
            document.getElementById('a6').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i></hr>";
            document.getElementById('a9').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i></hr>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;You won the match .");
                document.getElementById("audio").play();},150);
            c1++;
        }
        else if(t[0][2]==x &&t[1][2]==x &&t[2][2]==x)
        {	document.getElementById('a3').innerHTML="<i class='fa fa-times pad-aft-fn-x'></i><hr class='linev'></hr>";
            document.getElementById('a6').innerHTML="<i class='fa fa-times pad-aft-fn-x'></i>";
            document.getElementById('a9').innerHTML="<i class='fa fa-times pad-aft-fn-x'></i>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-frown-o'></i>&nbsp;&nbsp;You Loss the match .");
                document.getElementById("audio").play();},150);
            c2++;
            flag=1;
        }
        else if(t[0][0]==o &&t[1][1]==o &&t[2][2]==o)
        {
            document.getElementById('a1').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i><hr class='linedl'></hr>";
            document.getElementById('a5').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o'></i>";
            document.getElementById('a9').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o'></i>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;You won the match .");
                document.getElementById("audio").play();},150);
            c1++;
        }
        else if(t[0][0]==x &&t[1][1]==x &&t[2][2]==x)
        {
            document.getElementById('a1').innerHTML="<i class='fa fa-times pad-aft-fn-x' ></i><hr class='linedl'></hr>";
            document.getElementById('a5').innerHTML="<i class='fa fa-times pad-aft-fn-x' ></i>";
            document.getElementById('a9').innerHTML="<i class='fa fa-times pad-aft-fn-x' ></i>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-frown-o'></i>&nbsp;&nbsp;You Loss the match .");
                document.getElementById("audio").play();},150);
            c2++;
            flag=1;
        }
        else if(t[0][2]==o &&t[1][1]==o &&t[2][0]==o)
        {
            document.getElementById('a3').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o'></i><hr class='linedr'></hr>";
            document.getElementById('a5').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o'></i>";
            document.getElementById('a7').innerHTML="><i class='fa fa-circle-o pad-aft-fn-o'></i>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;You won the match .");
                document.getElementById("audio").play();},150)
            c1++;
        }
        else if(t[0][2]==x &&t[1][1]==x &&t[2][0]==x)
        {	document.getElementById('a3').innerHTML="<i class='fa fa-times pad-aft-fn-x'></i><hr class='linedr'></hr>";
            document.getElementById('a5').innerHTML="<i class='fa fa-times pad-aft-fn-x'></i>";
            document.getElementById('a7').innerHTML="<i class='fa fa-times pad-aft-fn-x'></i>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-frown-o'></i>&nbsp;&nbsp;You Loss the match .");
                document.getElementById("audio").play();},150);
            c2++;
            flag=1;
        }
        else if(O==5&&X==4)
        {	setTimeout(function addEvent(){
            Alert.render("<i class='fa fa-exclamation-triangle' style='fint-size:54px;color:red;'></i>&nbsp;&nbsp;Draw <br> the match ! ");
            document.getElementById("audio").play();},2000);
            flag=1;
            c3++;

        }
        else if(O==4&&X==5)
        {setTimeout(function addEvent(){
            Alert.render("<i class='fa fa-exclamation-triangle' style='fint-size:54px;color:red;'></i>&nbsp;&nbsp;Draw <br> the match ! ");
            document.getElementById("audio").play();},2000);
            flag=0;
            c3++;
        }
        document.getElementById("cal1").innerHTML=c1;
        document.getElementById("cal2").innerHTML=c2;
        document.getElementById("cal3").innerHTML=c3;
    },200);
}
var Alert = new CustomAlert();
function CustomAlert()
{
    this.render=function(dialog)
    {	var winW= window.innerWidth;
        var winH= window.innerHeight;
        var dialogoverlay= document.getElementById('dialogoverlay1');
        var dialogbox= document.getElementById('dialogbox1');
        dialogoverlay.style.display= "block";
        dialogoverlay.style.height= winH+"px";
        dialogbox.style.left=(winW/2)-(450*.5)+"px";

        dialogbox.style.top= "120px";
        dialogbox.style.display= "block";
        //document.getElementById('dialogboxhead1').innerHTML="This Massage";
        document.getElementById('dialogboxbody1').innerHTML=dialog;
        document.getElementById('dialogboxfoot1').innerHTML="<a href='game.html'><input type='button' id='rplay' value='Quit'></a><input type='button' id='rplay' onclick='Alert.Re();' value='Replay'>";
    }
    this.Re = function()
    {
        O = 0;
        X = 0;
        document.getElementById('dialogbox1').style.display="none";
        document.getElementById('dialogoverlay1').style.display="none";
        document.getElementById('a1').style.background="#78bec5";
        document.getElementById('a2').style.background="#78bec5";
        document.getElementById('a3').style.background="#78bec5";
        document.getElementById('a4').style.background="#78bec5";
        document.getElementById('a5').style.background="#78bec5";
        document.getElementById('a6').style.background="#78bec5";
        document.getElementById('a7').style.background="#78bec5";
        document.getElementById('a8').style.background="#78bec5";
        document.getElementById('a9').style.background="#78bec5";
        if(flag==1 && o == '<i class="fa fa-circle-o col-white"></i>')
        {
            document.getElementById('a5').style.background = "#dc685a";
            document.getElementById('a5').style.padding = "5% 0 0 0";
            document.getElementById('a5').innerHTML=x;
            X++;
        }
        else if(flag==1 && o=='<i class="fa fa-times col-white"></i>')
        {
            document.getElementById('a5').style.background="#ecaf4f";
            document.getElementById('a5').style.padding="5% 0 0 0";
            document.getElementById('a5').innerHTML=o;
            O++;
        }
        else
        {	document.getElementById('a5').innerHTML="";}
        document.getElementById('a2').innerHTML="";
        document.getElementById('a3').innerHTML="";
        document.getElementById('a4').innerHTML="";
        document.getElementById('a1').innerHTML="";
        document.getElementById('a6').innerHTML="";
        document.getElementById('a7').innerHTML="";
        document.getElementById('a8').innerHTML="";
        document.getElementById('a9').innerHTML="";
        turn=0;
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
/*function hover(m)
{
    var c=m.innerHTML;
    if(c==x || c== o)
    {

    }
    else
    {
        if(turn == 0)
        {
            m.style.background="#666";
            m.style.color="#d3d3d3";
            m.style.padding = "4% 0 0 0";
            m.innerHTML = "<img src='image/value-o.png' alt='O'/>";
        }
        if(turn == 1)
        {
            m.style.background="#666";
            m.style.color="#d3d3d3";
            m.style.padding = "4% 0 0 0";
            m.innerHTML = "<img src='image/value-x.png' alt='X'/>";
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
*/