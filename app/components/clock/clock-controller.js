
$(document).ready(function() 
var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]


var newDate = new Date();
newDate.setDate(newDate.getDate());  
$('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

setInterval( function() {
	var seconds = new Date().getSeconds();
	$("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
	},1000);
	
setInterval( function() {
	var minutes = new Date().getMinutes();
	$("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
    },1000);
	
setInterval( function() {
	var hours = new Date().getHours();
	$("#hours").html(( hours < 10 ? "0" : "" ) + hours);
    }, 1000);	
});

function changeGreeting() {
    var date = new Date();
    var hours = date.getHours();
    if (hours >= 8 && hours < 13) {
        $('.greeting-header').append(`
            <h1 style="font-size: 70">Good Morning</h1>
            `)
    } else if (hours >= 13 && hours < 18) {
         $('.greeting-header').append(`
            <h1 style="font-size: 70">Good Afternoon</h1>
            `)
    } else if (hours > 18 && hours <= 23) {
         $('.greeting-header').append(`
            <h1 style="font-size: 70">Good Evening</h1>
            `)
    } else {
        alert('Don\'t disturb me at this lately hour');
    }
}

changeGreeting();