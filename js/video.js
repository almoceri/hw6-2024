var video = document.getElementById("player1");
var vol;
var autopl = video.autoplay;
var loops = video.loop;
var speed = video.playbackRate;


window.addEventListener("load", function() {
	console.log("Good job opening the window");
	autopl = false;
	loops = false;
	console.log(autopl);
	console.log(loops);

});




document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	vol = video.volume;
	console.log(vol);
	document.getElementById("volume").innerHTML = document.getElementById("slider").value + "%";


});




document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();

});



document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video");
	console.log(speed);

	video.playbackRate = speed*.9;
	speed = speed*.9;

	console.log(speed);


});


document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up Video");
	console.log(speed);

	video.playbackRate = speed*1.1;
	speed = speed*1.1;

	console.log(speed);


});

var time;

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Video");
	time = video.currentTime;
	console.log(time);

	if ((time + 10) > video.duration) {
		video.currentTime = 0;
		time = video.currentTime;
	}

	else {
		video.currentTime = time + 10;
		time = video.currentTime;
	}
	
	

	console.log(time);


});


var mute;
document.querySelector("#mute").addEventListener("click", function() {
	console.log("mute Video");
	mute = video.muted;
	if(mute){
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	}

	else {
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";

	}

	mute = video.muted;


	console.log(mute);


});


var slide;
document.querySelector("#slider").addEventListener("input", function() {
	slide = document.getElementById("slider").value/100; 
	video.volume = slide;
	console.log(slide);
	document.getElementById("volume").innerHTML = slide*100 + "%";



});



document.querySelector("#vintage").addEventListener("click", function() {

	video.className = "video oldSchool"



});


document.querySelector("#orig").addEventListener("click", function() {

	video.className = "video"



});



