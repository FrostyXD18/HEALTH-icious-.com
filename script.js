

function Calo()
{
    var h=document.getElementById('hi').value;
    var w=document.getElementById('we').value;
    var age=document.getElementById('age').value;

    var calo = (10* w/1+ 6.25 * h/1 - 5 * age/1 + 5);
    var calom = calo * 1.4;

    document.getElementById('resultcal').innerHTML="Your Daily Calories Intake: "+calom;
    


}



function Clear()
{
    document.getElementById('resultcal').innerHTML="";
}