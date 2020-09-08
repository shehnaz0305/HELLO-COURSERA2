(function (window) {
	var helloSpeaker ={};
	var speakWord="HELLO";
	helloSpeaker.speak =function (name){
		console.log(speakWord +" " +name);
	}
	window.helloSpeaker =helloSpeaker;
})(window);
helloSpeaker.speak();