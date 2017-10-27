
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
                document.getElementById("audio").play();},350);

        }
        else if(t[0][0]==x &&t[0][1]==x &&t[0][2]==x)
        { 	document.getElementById('a1').innerHTML="<i class='fa fa-times pad-aft-fn-x'><hr class='line'></hr>";
            document.getElementById('a2').innerHTML="<i class='fa fa-times pad-aft-fn-x'></hr>";
            document.getElementById('a3').innerHTML="<i class='fa fa-times pad-aft-fn-x'></hr>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-frown-o'></i>&nbsp;&nbsp;You Loss the match .");
                document.getElementById("audio").play();},350);
        }
        else if(t[1][0]==o &&t[1][1]==o &&t[1][2]==o)
        {	document.getElementById('a4').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o'><hr class='line'></hr>";
            document.getElementById('a5').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o'></i>";
            document.getElementById('a6').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;You won the match .");
                document.getElementById("audio").play();},350);
        }
        else if(t[1][0]==x &&t[1][1]==x &&t[1][2]==x)
        {	document.getElementById('a4').innerHTML="<i class='fa fa-times pad-aft-fn-x' ><hr class='line'></hr>";
            document.getElementById('a5').innerHTML="<i class='fa fa-times pad-aft-fn-x' ></i>";
            document.getElementById('a6').innerHTML="<i class='fa fa-times pad-aft-fn-x' ></i>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-frown-o'></i>&nbsp;&nbsp;You Loss the match .");
                document.getElementById("audio").play();},350);
        }
        else if(t[2][0]==o &&t[2][1]==o &&t[2][2]==o)
        {	document.getElementById('a7').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ><hr class='line'></hr>";
            document.getElementById('a8').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i>";
            document.getElementById('a9').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;You won the match .");
                document.getElementById("audio").play();},350);
        }
        else if(t[2][0]==x&&t[2][1]==x &&t[2][2]==x)
        {	document.getElementById('a7').innerHTML="<i class='fa fa-times pad-aft-fn-x'><hr class='line'></hr>";
            document.getElementById('a8').innerHTML="<i class='fa fa-times pad-aft-fn-x'>";
            document.getElementById('a9').innerHTML="<i class='fa fa-times pad-aft-fn-x'>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-frown-o'></i>&nbsp;&nbsp;You Loss the match .");
                document.getElementById("audio").play();},350);
        }
        else if(t[0][0]==o &&t[1][0]==o &&t[2][0]==o)
        {	document.getElementById('a1').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i><hr class='linev'></hr>";
            document.getElementById('a4').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i>";
            document.getElementById('a7').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;You won the match .");
                document.getElementById("audio").play();},350);
        }
        else if(t[0][0]==x &&t[1][0]==x &&t[2][0]==x)
        {	document.getElementById('a1').innerHTML="<i class='fa fa-times pad-aft-fn-x'></i><hr class='linev'></hr>";
            document.getElementById('a4').innerHTML="<i class='fa fa-times pad-aft-fn-x'></i></hr>";
            document.getElementById('a7').innerHTML="<i class='fa fa-times pad-aft-fn-x'></i></hr>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-frown-o'></i>&nbsp;&nbsp;You Loss the match .");
                document.getElementById("audio").play();},350);
        }
        else if(t[0][1]==o &&t[1][1]==o &&t[2][1]==o)
        {	document.getElementById('a2').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i><hr class='linev'></hr>";
            document.getElementById('a5').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i>";
            document.getElementById('a8').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;You won the match .");
                document.getElementById("audio").play();},350);
        }
        else if(t[0][1]==x &&t[1][1]==x &&t[2][1]==x)
        {	document.getElementById('a2').innerHTML="<i class='fa fa-times pad-aft-fn-x'></i><hr class='linev'></hr>";
            document.getElementById('a5').innerHTML="<i class='fa fa-times pad-aft-fn-x'></i>";
            document.getElementById('a8').innerHTML="<i class='fa fa-times pad-aft-fn-x'></i>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-frown-o'></i>&nbsp;&nbsp;You Loss the match .");
                document.getElementById("audio").play();},350);
        }
        else if(t[0][2]==o &&t[1][2]==o &&t[2][2]==o)
        {	document.getElementById('a3').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i><hr class='linev'></hr>";
            document.getElementById('a6').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i></hr>";
            document.getElementById('a9').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i></hr>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;You won the match .");
                document.getElementById("audio").play();},350);
        }
        else if(t[0][2]==x &&t[1][2]==x &&t[2][2]==x)
        {	document.getElementById('a3').innerHTML="<i class='fa fa-times pad-aft-fn-x'></i><hr class='linev'></hr>";
            document.getElementById('a6').innerHTML="<i class='fa fa-times pad-aft-fn-x'></i>";
            document.getElementById('a9').innerHTML="<i class='fa fa-times pad-aft-fn-x'></i>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-frown-o'></i>&nbsp;&nbsp;You Loss the match .");
                document.getElementById("audio").play();},350);
        }
        else if(t[0][0]==o &&t[1][1]==o &&t[2][2]==o)
        {
            document.getElementById('a1').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o' ></i><hr class='linedl'></hr>";
            document.getElementById('a5').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o'></i>";
            document.getElementById('a9').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o'></i>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;You won the match .");
                document.getElementById("audio").play();},350);
        }
        else if(t[0][0]==x &&t[1][1]==x &&t[2][2]==x)
        {
            document.getElementById('a1').innerHTML="<i class='fa fa-times pad-aft-fn-x' ></i><hr class='linedl'></hr>";
            document.getElementById('a5').innerHTML="<i class='fa fa-times pad-aft-fn-x' ></i>";
            document.getElementById('a9').innerHTML="<i class='fa fa-times pad-aft-fn-x' ></i>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-frown-o'></i>&nbsp;&nbsp;You Loss the match .");
                document.getElementById("audio").play();},350);
        }
        else if(t[0][2]==o &&t[1][1]==o &&t[2][0]==o)
        {
            document.getElementById('a3').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o'></i><hr class='linedr'></hr>";
            document.getElementById('a5').innerHTML="<i class='fa fa-circle-o pad-aft-fn-o'></i>";
            document.getElementById('a7').innerHTML="><i class='fa fa-circle-o pad-aft-fn-o'></i>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-smile-o'></i>&nbsp;&nbsp;You won the match .");
                document.getElementById("audio").play();},350);
        }
        else if(t[0][2]==x &&t[1][1]==x &&t[2][0]==x)
        {	document.getElementById('a3').innerHTML="<i class='fa fa-times pad-aft-fn-x'></i><hr class='linedr'></hr>";
            document.getElementById('a5').innerHTML="<i class='fa fa-times pad-aft-fn-x'></i>";
            document.getElementById('a7').innerHTML="<i class='fa fa-times pad-aft-fn-x'></i>";
            setTimeout(function addEvent(){
                Alert.render("<i class='fa fa-frown-o'></i>&nbsp;&nbsp;You Loss the match .");
                document.getElementById("audio").play();},350);
        }
        else if(O==5&&X==4)
        {
            Alert.render("<i class='fa fa-exclamation-triangle' style='fint-size:54px;color:red;'></i>&nbsp;&nbsp;Draw <br> the match ! ");
            document.getElementById("audio").play();

        }
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
        document.getElementById('dialogboxfoot1').innerHTML="<a href='index.html'><input type='button' id='rplay' value='Quit'></a><input type='button' id='rplay' onclick='Alert.Re();' value='Replay'>";
    }
    this.Re = function()
    {
        location.reload();
    }
}
