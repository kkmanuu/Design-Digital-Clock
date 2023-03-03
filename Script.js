function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var seasons = document.getElementById('seasons');

    if(hrs >=12){
     seasons.innerHTML ='PM';
    }else{
     seasons.innerHTML ='AM';
    }
    if(hrs>12){
        hrs = hrs -12;
    }
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime,10);