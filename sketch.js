function setup(){

	chrome.runtime.onMessage.addListener(receiver);
	window.word = "coding train";

	function receiver(request, sender, sendResponse){
		word = request;
		word = word.replace(/ /g,"+");

		let url = "http://www.omdbapi.com/?t=" + word + "&plot=full&apikey=thewdb";
		url = url.replace(/\s+/g,'');
		loadJSON(url, gotData);
		console.log(url);

		function gotData(data){
			createP(data["imdbRating"]);
		}
	}
}


