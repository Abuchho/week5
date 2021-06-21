window.onload = function(){

var calculate = setInterval(function() {
        var endDate = new Date("Nov 25, 2021 00:00:00").getTime();
        var currentDate = new Date().getTime();
        var diff = endDate - currentDate;

        var days = Math.floor(diff / (1000 * 60 * 60 * 24));
        var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // var output = diff.toDateString();

        // document.getElementById('dwnTimer').innerHTML = output;

        document.getElementById('dwnTimer').innerHTML= days + ' Days | ' + hours + ' Hours | ' + minutes + ' Minutes | ' + seconds + ' Seconds';
         
        if(diff == 0){
            clearInterval(calculate);
            window.alert('Time to Eat!')
        }
    }, 1000);

}