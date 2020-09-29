// $(document).ready(function () {
// 	$("a").hover(function(){
// 	  var text = $(this).text();
// 	  console.log(text);
// 	});
// });

// chrome.runtime.onMessage.addListener(gotMessage);

// function gotMessage(message, sender, sendResponse){
// 	console.log(message.txt);
// }

console.log("Chrome extension go?");

document.addEventListener('mouseover', wordSelected)


function wordSelected(){
	$("a").hover(function(){
	  var word = $(this).text();
	  if(word===""){
		  wordSelected();
	  }
	  console.log(word);
	  chrome.runtime.sendMessage(word);
	//   var array = [];
	//   array.push[word]
	// 	for(var i=array.length; i>0; i--){
	// 		console.log(array[i]);
	// 	}
	});
}

// 	  chrome.runtime.sendMessage(word);


// function sendMovie(){
// 	var array = [];
// 	word = wordSelected();
// 	array.push[word]
// 	for(var i=0; i<array.length; i++){
// 		if(array[i]!=array[i-1]){
// 			console.log(array[i]);
// 		}
// 	}
// }