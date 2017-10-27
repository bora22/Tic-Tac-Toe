var temp="";
var O=0;
var X=0;
var o='<i class="fa fa-circle-o col-white"></i>';
var x='<i class="fa fa-times col-white"></i>';
var c1=0;
var c2=0;
var c3=0;
var b=null;
function ab(z)
{
    var c=z.innerHTML;
    if(c==x || c== o)
    {
        alert("You can not re-enter value here");
    }
    else
    {
        if(temp=="")
        {	z.style.background="#ecaf4f";
            z.style.color="#fff";
            z.style.padding = "5% 0 0 0";
            temp="O";
            O++;
            z.innerHTML =o;
        }
        else if(temp=="O")
        {	z.style.background="#dc685a";
            z.style.color="#fff";
            z.style.padding = "5% 0 0 0";
            temp="X";
            X++;
            z.innerHTML = x;
        }
        else if(temp=="X")
        {	z.style.background="#ecaf4f";
            z.style.color="#fff";
            z.style.padding = "5% 0 0 0";
            temp="O";
            O++;
            z.innerHTML =o;
        }
        // x.innerHTML =temp;
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
        if(temp=="")
        {
            m.style.background="#666";
            // m.style.color="#d3d3d3";
            m.style.padding = "4% 0 0 0";
            m.innerHTML = "<img src='image/value-o.png' alt='O'/>";
        }
        else if(temp=="O")
        {
            m.style.background="#666";
            // m.style.color="#d3d3d3";
            m.style.padding = "5% 0 0 0";
            m.innerHTML = "<img src='image/value-x.png' alt='X'/>";
        }
        else if(temp=="X")
        {
            m.style.background="#666";
            // m.style.color="#d3d3d3";
            m.style.padding = "4% 0 0 0";
            m.innerHTML = "<img src='image/value-o.png' alt='O'/>";
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
                Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;<span>1 Player</span><br> (O) Winner");
                document.getElementById("audio").play();},350);
            c1++;
        }
        else if(t[0][0]==x &&t[0][1]==x &&t[0][2]==x)
        { 	document.getElementById('a1').innerHTML="<i class='fa fa-times pad-aft-fn-x'><hr class='line'></hr>";
            document.getElementById('a2').innerHTML="<i class='fa fa-times pad-aft-fn-x'></hr>";
            document.getElementById('a3').innerHTML="<i class='fa fa-times pad-aft-fn-x'></hr>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-frown-o'></i>&nbsp;&nbsp;<span>2  Player</span><br> (X) Winner");
                document.getElementById("audio").play();},350);
            c2++;
        }
        else if(t[1][0]==o &&t[1][1]==o &&t[1][2]==o)
        {	document.getElementById('a4').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o'><hr class='line'></hr>";
            document.getElementById('a5').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o'></i>";
            document.getElementById('a6').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;<span>1 Player</span><br> (O) Winner");
                document.getElementById("audio").play();},350);
            c1++;
        }
        else if(t[1][0]==x &&t[1][1]==x &&t[1][2]==x)
        {	document.getElementById('a4').innerHTML="<i class='fa fa-times pad-aft-fn-x' ><hr class='line'></hr>";
            document.getElementById('a5').innerHTML="<i class='fa fa-times pad-aft-fn-x' ></i>";
            document.getElementById('a6').innerHTML="<i class='fa fa-times pad-aft-fn-x' ></i>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-frown-o'></i>&nbsp;&nbsp;<span>2  Player</span><br> (X) Winner");
                document.getElementById("audio").play();},350);
            c2++;
        }
        else if(t[2][0]==o &&t[2][1]==o &&t[2][2]==o)
        {	document.getElementById('a7').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ><hr class='line'></hr>";
            document.getElementById('a8').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i>";
            document.getElementById('a9').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;<span>1 Player</span><br> (O) Winner");
                document.getElementById("audio").play();},350);
            c1++;
        }
        else if(t[2][0]==x&&t[2][1]==x &&t[2][2]==x)
        {	document.getElementById('a7').innerHTML="<i class='fa fa-times pad-aft-fn-x'><hr class='line'></hr>";
            document.getElementById('a8').innerHTML="<i class='fa fa-times pad-aft-fn-x'>";
            document.getElementById('a9').innerHTML="<i class='fa fa-times pad-aft-fn-x'>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-frown-o'></i>&nbsp;&nbsp;<span>2  Player</span><br> (X) Winner");
                document.getElementById("audio").play();},350);
            c2++;
        }
        else if(t[0][0]==o &&t[1][0]==o &&t[2][0]==o)
        {	document.getElementById('a1').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i><hr class='linev'></hr>";
            document.getElementById('a4').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i>";
            document.getElementById('a7').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;<span>1 Player</span><br> (O) Winner");
                document.getElementById("audio").play();},350);
            c1++;
        }
        else if(t[0][0]==x &&t[1][0]==x &&t[2][0]==x)
        {	document.getElementById('a1').innerHTML="<i class='fa fa-times pad-aft-fn-x'></i><hr class='linev'></hr>";
            document.getElementById('a4').innerHTML="<i class='fa fa-times pad-aft-fn-x'></i></hr>";
            document.getElementById('a7').innerHTML="<i class='fa fa-times pad-aft-fn-x'></i></hr>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-frown-o'></i>&nbsp;&nbsp;<span>2  Player</span><br> (X) Winner");
                document.getElementById("audio").play();},350);
            c2++;
        }
        else if(t[0][1]==o &&t[1][1]==o &&t[2][1]==o)
        {	document.getElementById('a2').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i><hr class='linev'></hr>";
            document.getElementById('a5').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i>";
            document.getElementById('a8').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;<span>1 Player</span><br> (O) Winner");
                document.getElementById("audio").play();},350);
            c1++;
        }
        else if(t[0][1]==x &&t[1][1]==x &&t[2][1]==x)
        {	document.getElementById('a2').innerHTML="<i class='fa fa-times pad-aft-fn-x'></i><hr class='linev'></hr>";
            document.getElementById('a5').innerHTML="<i class='fa fa-times pad-aft-fn-x'></i>";
            document.getElementById('a8').innerHTML="<i class='fa fa-times pad-aft-fn-x'></i>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-frown-o'></i>&nbsp;&nbsp;<span>2  Player</span><br> (X) Winner");
                document.getElementById("audio").play();},350);
            c2++;
        }
        else if(t[0][2]==o &&t[1][2]==o &&t[2][2]==o)
        {	document.getElementById('a3').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i><hr class='linev'></hr>";
            document.getElementById('a6').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i></hr>";
            document.getElementById('a9').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i></hr>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;<span>1 Player</span><br> (O) Winner");
                document.getElementById("audio").play();},350);
            c1++;
        }
        else if(t[0][2]==x &&t[1][2]==x &&t[2][2]==x)
        {	document.getElementById('a3').innerHTML="<i class='fa fa-times pad-aft-fn-x'></i><hr class='linev'></hr>";
            document.getElementById('a6').innerHTML="<i class='fa fa-times pad-aft-fn-x'></i>";
            document.getElementById('a9').innerHTML="<i class='fa fa-times pad-aft-fn-x'></i>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-frown-o'></i>&nbsp;&nbsp;<span>2  Player</span><br> (X) Winner");
                document.getElementById("audio").play();},350);
            c2++;
        }
        else if(t[0][0]==o &&t[1][1]==o &&t[2][2]==o)
        {
            document.getElementById('a1').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i><hr class='linedl'></hr>";
            document.getElementById('a5').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o'></i>";
            document.getElementById('a9').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o'></i>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;<span>1 Player</span><br> (O) Winner");
                document.getElementById("audio").play();},350);
            c1++;
        }
        else if(t[0][0]==x &&t[1][1]==x &&t[2][2]==x)
        {
            document.getElementById('a1').innerHTML="<i class='fa fa-times pad-aft-fn-x' ></i><hr class='linedl'></hr>";
            document.getElementById('a5').innerHTML="<i class='fa fa-times pad-aft-fn-x' ></i>";
            document.getElementById('a9').innerHTML="<i class='fa fa-times pad-aft-fn-x' ></i>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-frown-o'></i>&nbsp;&nbsp;<span>2  Player</span><br> (X) Winner");
                document.getElementById("audio").play();},350);
            c2++;
        }
        else if(t[0][2]==o &&t[1][1]==o &&t[2][0]==o)
        {
            document.getElementById('a3').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o'></i><hr class='linedr'></hr>";
            document.getElementById('a5').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o'></i>";
            document.getElementById('a7').innerHTML="><i class='fa fa-circle-o pad-aft-fn-o'></i>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;<span>1 Player</span><br> (O) Winner");
                document.getElementById("audio").play();},350);
            c1++;
        }
        else if(t[0][2]==x &&t[1][1]==x &&t[2][0]==x)
        {	document.getElementById('a3').innerHTML="<i class='fa fa-times pad-aft-fn-x'></i><hr class='linedr'></hr>";
            document.getElementById('a5').innerHTML="<i class='fa fa-times pad-aft-fn-x'></i>";
            document.getElementById('a7').innerHTML="<i class='fa fa-times pad-aft-fn-x'></i>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-frown-o'></i>&nbsp;&nbsp;You Loss the match .");
                document.getElementById("audio").play();},350);
            c2++;
        }
        else if(O==5&&X==4)
        {
            Alert.render("<i class='fa fa-bug' style='fint-size:44px;color:red;'></i>&nbsp;&nbsp;<span>XO Match</span><br>  Draw!");
            document.getElementById("audio").play();
            c3++;
        }
        document.getElementById("cal1").innerHTML=c1;
        document.getElementById("cal2").innerHTML=c2;
        document.getElementById("cal3").innerHTML=c3;
    },200);
}
/*   function mov()
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
       var t=[[a1,a2,a3],[a4,a5,a6],[a7,a8,a9]];
       if(t[0][0]==o &&t[0][1]==o &&t[0][2]==o)
       {
           document.getElementById('a1').innerHTML="<td><hr class='line'><i class='fa fa-circle-o' style='margin-top:-55px;'></hr></td>";
           document.getElementById('a2').innerHTML="<td><hr class='line'><i class='fa fa-circle-o' style='margin-top:-55px;'></hr></td>";
           document.getElementById('a3').innerHTML="<td><hr class='line'><i class='fa fa-circle-o' style='margin-top:-55px;'></hr></td>";
           setTimeout(function addEvent(){
               Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;<span>1 Player</span><br> (O) Winner");
               document.getElementById("audio").play();},350);
           c1++;
       }
       else if(t[0][0]==x &&t[0][1]==x &&t[0][2]==x)
       { 	document.getElementById('a1').innerHTML="<td><hr class='line'><i class='fa fa-times' style='margin-top:-55px;'></hr></td>";
           document.getElementById('a2').innerHTML="<td><hr class='line'><i class='fa fa-times' style='margin-top:-55px;'></hr></td>";
           document.getElementById('a3').innerHTML="<td><hr class='line'><i class='fa fa-times' style='margin-top:-55px;'></hr></td>";
           setTimeout(function addEvent(){
               Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;<span>2  Player</span><br> (X) Winner");
               document.getElementById("audio").play();},350);
           c2++;
       }
       else if(t[1][0]==o &&t[1][1]==o &&t[1][2]==o)
       {	document.getElementById('a4').innerHTML="<td><hr class='line'><i class='fa fa-circle-o' style='margin-top:-55px;'></hr></td>";
           document.getElementById('a5').innerHTML="<td><hr class='line'><i class='fa fa-circle-o' style='margin-top:-55px;'></hr></td>";
           document.getElementById('a6').innerHTML="<td><hr class='line'><i class='fa fa-circle-o' style='margin-top:-55px;'></hr></td>";
           setTimeout(function addEvent(){
               Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;<span>1 Player</span><br> (O) Winner");
               document.getElementById("audio").play();},350);
           c1++;
       }
       else if(t[1][0]==x &&t[1][1]==x &&t[1][2]==x)
       {	document.getElementById('a4').innerHTML="<td><hr class='line'><i class='fa fa-times' style='margin-top:-55px;'></hr></td>";
           document.getElementById('a5').innerHTML="<td><hr class='line'><i class='fa fa-times' style='margin-top:-55px;'></hr></td>";
           document.getElementById('a6').innerHTML="<td><hr class='line'><i class='fa fa-times' style='margin-top:-55px;'></hr></td>";
           setTimeout(function addEvent(){
               Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;<span>2  Player</span><br> (X) Winner");
               document.getElementById("audio").play();},350);
           c2++;
       }
       else if(t[2][0]==o &&t[2][1]==o &&t[2][2]==o)
       {	document.getElementById('a7').innerHTML="<td><hr class='line'><i class='fa fa-circle-o' style='margin-top:-55px;'></hr></td>";
           document.getElementById('a8').innerHTML="<td><hr class='line'><i class='fa fa-circle-o' style='margin-top:-55px;'></hr></td>";
           document.getElementById('a9').innerHTML="<td><hr class='line'><i class='fa fa-circle-o' style='margin-top:-55px;'></hr></td>";
           setTimeout(function addEvent(){
               Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;<span>1 Player</span><br> (O) Winner");
               document.getElementById("audio").play();},350);
           c1++;
       }
       else if(t[2][0]==x&&t[2][1]==x &&t[2][2]==x)
       {	document.getElementById('a7').innerHTML="<td><hr class='line'><i class='fa fa-times' style='margin-top:-55px;'></hr></td>";
           document.getElementById('a8').innerHTML="<td><hr class='line'><i class='fa fa-times' style='margin-top:-55px;'></hr></td>";
           document.getElementById('a9').innerHTML="<td><hr class='line'><i class='fa fa-times' style='margin-top:-55px;'></hr></td>";
           setTimeout(function addEvent(){
               Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;<span>2  Player</span><br> (X) Winner");
               document.getElementById("audio").play();},350);
           c2++;
       }
       else if(t[0][0]==o &&t[1][0]==o &&t[2][0]==o)
       {	document.getElementById('a1').innerHTML="<td><hr class='linev'><i class='fa fa-circle-o' style='margin-top:-105px;' ></i></hr></td>";
           document.getElementById('a4').innerHTML="<td><hr class='linev'><i class='fa fa-circle-o'style='margin-top:-105px;'></i></hr></td>";
           document.getElementById('a7').innerHTML="<td><hr class='linev'><i class='fa fa-circle-o'style='margin-top:-105px;' ></i></hr></td>";
           setTimeout(function addEvent(){
               Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;<span>1 Player</span><br> (O) Winner");
               document.getElementById("audio").play();},350);
           c1++;
       }
       else if(t[0][0]==x &&t[1][0]==x &&t[2][0]==x)
       {	document.getElementById('a1').innerHTML="<td><hr class='linev'><i class='fa fa-times' style='margin-top:-105px;' ></i></hr></td>";
           document.getElementById('a4').innerHTML="<td><hr class='linev'><i class='fa fa-times'style='margin-top:-105px;'></i></hr></td>";
           document.getElementById('a7').innerHTML="<td><hr class='linev'><i class='fa fa-times'style='margin-top:-105px;' ></i></hr></td>";
           setTimeout(function addEvent(){
               Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;<span>2  Player</span><br> (X) Winner");
               document.getElementById("audio").play();},350);
           c2++;
       }
       else if(t[0][1]==o &&t[1][1]==o &&t[2][1]==o)
       {	document.getElementById('a2').innerHTML="<td><hr class='linev'><i class='fa fa-circle-o' style='margin-top:-105px;' ></i></hr></td>";
           document.getElementById('a5').innerHTML="<td><hr class='linev'><i class='fa fa-circle-o'style='margin-top:-105px;'></i></hr></td>";
           document.getElementById('a8').innerHTML="<td><hr class='linev'><i class='fa fa-circle-o'style='margin-top:-105px;' ></i></hr></td>";
           setTimeout(function addEvent(){
               Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;<span>1 Player</span><br> (O) Winner");
               document.getElementById("audio").play();},350);
           c1++;
       }
       else if(t[0][1]==x &&t[1][1]==x &&t[2][1]==x)
       {	document.getElementById('a2').innerHTML="<td><hr class='linev'><i class='fa fa-times' style='margin-top:-105px;' ></i></hr></td>";
           document.getElementById('a5').innerHTML="<td><hr class='linev'><i class='fa fa-times'style='margin-top:-105px;'></i></hr></td>";
           document.getElementById('a8').innerHTML="<td><hr class='linev'><i class='fa fa-times'style='margin-top:-105px;' ></i></hr></td>";
           setTimeout(function addEvent(){
               Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;<span>2  Player</span><br> (X) Winner");
               document.getElementById("audio").play();},350);
           c2++;
       }
       else if(t[0][2]==o &&t[1][2]==o &&t[2][2]==o)
       {	document.getElementById('a3').innerHTML="<td><hr class='linev'><i class='fa fa-circle-o' style='margin-top:-105px;' ></i></hr></td>";
           document.getElementById('a6').innerHTML="<td><hr class='linev'><i class='fa fa-circle-o'style='margin-top:-105px;'></i></hr></td>";
           document.getElementById('a9').innerHTML="<td><hr class='linev'><i class='fa fa-circle-o'style='margin-top:-105px;' ></i></hr></td>";
           setTimeout(function addEvent(){
               Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;<span>1 Player</span><br> (O) Winner");
               document.getElementById("audio").play();},350);
           c1++;
       }
       else if(t[0][2]==x &&t[1][2]==x &&t[2][2]==x)
       {	document.getElementById('a3').innerHTML="<td><hr class='linev'><i class='fa fa-times' style='margin-top:-105px;' ></i></hr></td>";
           document.getElementById('a6').innerHTML="<td><hr class='linev'><i class='fa fa-times'style='margin-top:-105px;'></i></hr></td>";
           document.getElementById('a9').innerHTML="<td><hr class='linev'><i class='fa fa-times'style='margin-top:-105px;' ></i></hr></td>";
           setTimeout(function addEvent(){
               Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;<span>2  Player</span><br> (X) Winner");
               document.getElementById("audio").play();},350);
           c2++;
       }
       else if(t[0][0]==o &&t[1][1]==o &&t[2][2]==o)
       {
           document.getElementById('a1').innerHTML="<td><hr class='linedl'><i class='fa fa-circle-o' style='margin-top:-145px;' ></i></hr></td>";
           document.getElementById('a5').innerHTML="<td><hr class='linedl'><i class='fa fa-circle-o' style='margin-top:-145px;'></i></hr></td>";
           document.getElementById('a9').innerHTML="<td><hr class='linedl'><i class='fa fa-circle-o' style='margin-top:-145px;' ></i></hr></td>";
           setTimeout(function addEvent(){
               Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;<span>1 Player</span><br> (O) Winner");
               document.getElementById("audio").play();},350);
           c1++;
       }
       else if(t[0][0]==x &&t[1][1]==x &&t[2][2]==x)
       {
           document.getElementById('a1').innerHTML="<td><hr class='linedl'><i class='fa fa-times' style='margin-top:-145px;' ></i></hr></td>";
           document.getElementById('a5').innerHTML="<td><hr class='linedl'><i class='fa fa-times' style='margin-top:-145px;'></i></hr></td>";
           document.getElementById('a9').innerHTML="<td><hr class='linedl'><i class='fa fa-times' style='margin-top:-145px;' ></i></hr></td>";
           setTimeout(function addEvent(){
               Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;<span>2  Player</span><br> (X) Winner");
               document.getElementById("audio").play();},350);
           c2++;
       }
       else if(t[0][2]==o &&t[1][1]==o &&t[2][0]==o)
       {
           document.getElementById('a3').innerHTML="<td><hr class='linedr'><i class='fa fa-circle-o' style='margin-top:-145px;' ></i></hr></td>";
           document.getElementById('a5').innerHTML="<td><hr class='linedr'><i class='fa fa-circle-o'style='margin-top:-145px;'></i></hr></td>";
           document.getElementById('a7').innerHTML="<td><hr class='linedr'><i class='fa fa-circle-o'style='margin-top:-145px;' ></i></hr></td>";
           setTimeout(function addEvent(){
               Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;<span>1 Player</span><br> (O) Winner");
               document.getElementById("audio").play();},350);
           c1++;
       }
       else if(t[0][2]==x &&t[1][1]==x &&t[2][0]==x)
       {	document.getElementById('a3').innerHTML="<td><hr class='linedr'><i class='fa fa-times' style='margin-top:-145px;' ></i></hr></td>";
           document.getElementById('a5').innerHTML="<td><hr class='linedr'><i class='fa fa-times'style='margin-top:-145px;'></i></hr></td>";
           document.getElementById('a7').innerHTML="<td><hr class='linedr'><i class='fa fa-times'style='margin-top:-145px;' ></i></hr></td>";
           setTimeout(function addEvent(){
               Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;<span>2  Player</span><br> (X) Winner");
               document.getElementById("audio").play();},350);
           c2++;
       }
       else if(O==5&&X==4)
       {
           Alert.render("<i class='fa fa-bug' style='fint-size:44px;color:red;'></i>&nbsp;&nbsp;<span>XO Match</span><br>  Draw!");
           document.getElementById("audio").play();
           c3++;

       }
       document.getElementById("cal1").innerHTML=c1;
       document.getElementById("cal2").innerHTML=c2;
       document.getElementById("cal3").innerHTML=c3;

   }*/
function Frontvid()
{
    front.page("<i class='fa fa-exclamation-circle' style='fint-size:40px;color:#00FF00;'></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For Winning <br> You must need to win more than one round from opponent player. ");
    document.getElementById("audio2").play();
}
function overall()
{
    if((c1+c2+c3) == 5)
    {
        if(c1>c2)
        {
            front.page("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;1 Player <br> Won This Match ");
            document.getElementById("audio2").play();
        }
        else if(c1<c2)
        {
            front.page("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;&nbsp;&nbsp;2 Player <br> Won This Match ");
            document.getElementById("audio2").play();
        }
        else if(c3==5&&c1 == c2)
        {
            front.page("<i class='fa fa-exclamation-triangle' style='fint-size:40px;color:red;'></i>&nbsp;&nbsp;&nbsp;&nbsp;Draw <br>The Match ! ");
            document.getElementById("audio2").play();
        }

    }
};
function show()
{
    var x=document.getElementById("dm").style.display;
    if(x=="none")
    {	document.getElementById("dm").style.display="block";
    }
}
function txt()
{
    if(temp=="")
    {	document.getElementById("dm").value="1 Player";
    }
    else if(temp=="O")
    {	document.getElementById("dm").value="2 Player";
    }
    else if(temp=="X")
    {	document.getElementById("dm").value="1 Player";
    }
    else
    {	document.getElementById("dm").value="2 Player";
    }
}



var Alert = new CustomAlert();
function CustomAlert()
{
    this.render=function(dialog)
    {	var winW= window.innerWidth;
        var winH= window.innerHeight;
        var dialogoverlay= document.getElementById('dialogoverlay');
        var dialogbox= document.getElementById('dialogbox');
        dialogoverlay.style.display= "block";
        dialogoverlay.style.height= winH+"px";
        dialogbox.style.left=(winW/2)-(450*.5)+"px";

        dialogbox.style.top= "100px";
        dialogbox.style.display= "block";
        //document.getElementById('dialogboxhead').innerHTML="This Massage";
        document.getElementById('dialogboxbody').innerHTML=dialog;
        document.getElementById('dialogboxfoot').innerHTML="<a href='index.html'><input type='button' id='rplay' value='Quit'> </a><input type='button' id='rplay' onclick='Alert.Re();' value='Replay'>";
    }
    this.Re = function()
    { 	O = 0;
        X = 0;
        temp = "";
        document.getElementById('dialogbox').style.display="none";
        document.getElementById('dialogoverlay').style.display="none";
        document.getElementById('a1').style.background="#78bec5";
        document.getElementById('a2').style.background="#78bec5";
        document.getElementById('a3').style.background="#78bec5";
        document.getElementById('a4').style.background="#78bec5";
        document.getElementById('a5').style.background="#78bec5";
        document.getElementById('a6').style.background="#78bec5";
        document.getElementById('a7').style.background="#78bec5";
        document.getElementById('a8').style.background="#78bec5";
        document.getElementById('a9').style.background="#78bec5";
        document.getElementById('a1').innerHTML="";
        document.getElementById('a2').innerHTML="";
        document.getElementById('a3').innerHTML="";
        document.getElementById('a4').innerHTML="";
        document.getElementById('a5').innerHTML="";
        document.getElementById('a6').innerHTML="";
        document.getElementById('a7').innerHTML="";
        document.getElementById('a8').innerHTML="";
        document.getElementById('a9').innerHTML="";

    }
}
var front = new Customfront();
function Customfront()
{
    this.page = function(dialog){
        var winW= window.innerWidth;
        var winH= window.innerHeight;
        var dialogoverlay= document.getElementById('dialogoverlay2');
        var dialogbox= document.getElementById('dialogbox2');
        dialogoverlay.style.display= "block";
        dialogoverlay.style.height= winH+"px";
        //dialogbox.style.left=(winW/2)-(450*.5)+"px";

        dialogbox.style.top= "30%";
        dialogbox.style.display= "block";
        //document.getElementById('dialogboxhead').innerHTML="This Massage";
        document.getElementById('dialogboxbody2').innerHTML=dialog;
        document.getElementById('dialogboxfoot2').innerHTML="<a href='index.html'><input type='button' id='rplay' value='Quit'> </a><input type='button' id='rplay' onclick='front.open();' value='Play'>";
    }
    this.open = function()
    {
        document.getElementById('dialogbox').style.display="none";
        document.getElementById('dialogoverlay').style.display="none";
        document.getElementById('a1').style.background="#78bec5";
        document.getElementById('a2').style.background="#78bec5";
        document.getElementById('a3').style.background="#78bec5";
        document.getElementById('a4').style.background="#78bec5";
        document.getElementById('a5').style.background="#78bec5";
        document.getElementById('a6').style.background="#78bec5";
        document.getElementById('a7').style.background="#78bec5";
        document.getElementById('a8').style.background="#78bec5";
        document.getElementById('a9').style.background="#78bec5";
        document.getElementById('a1').innerHTML="";
        document.getElementById('a2').innerHTML="";
        document.getElementById('a3').innerHTML="";
        document.getElementById('a4').innerHTML="";
        document.getElementById('a5').innerHTML="";
        document.getElementById('a6').innerHTML="";
        document.getElementById('a7').innerHTML="";
        document.getElementById('a8').innerHTML="";
        document.getElementById('a9').innerHTML="";
        document.getElementById('dialogbox2').style.display="none";
        document.getElementById('dialogoverlay2').style.display="none";
        c1=0;c2=0;c3=0;
        O = 0;
        X = 0;
        temp = "";
    }
}
