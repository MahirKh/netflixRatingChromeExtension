console.log("background running");

chrome.runtime.onMessage.addListener(receiver);

window.word = "coding train";
// var word = "hello";

function receiver(request, sender, sendResponse){
	word = request;
	console.log(word);
}
