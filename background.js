console.log("background running");

// $(document).ready(function () {
// 	$("a").hover(function(){
// 	  var movie = $(this).text();
// 	  console.log(movie);
// 	});
// });

// window.movie = "coding train";

chrome.runtime.onMessage.addListener(receiver);

window.word = "coding train";
// var word = "hello";

function receiver(request, sender, sendResponse){
	word = request;
	console.log(word);
}

// function movieSelected(){
// 	$("a").hover(function(){
// 	  var movie = $(this).text();
// 	  console.log(movie);
// 	  chrome.runtime.sendMessage(movie);
// 	});
// }