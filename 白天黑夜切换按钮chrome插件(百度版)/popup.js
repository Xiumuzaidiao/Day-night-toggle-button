// popup.js
document.getElementById('toggleButton').addEventListener('click', function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  debugger;
    fetch(chrome.runtime.getURL('button.html'))
      .then((response) => response.text())
      .then((html) => {
        chrome.scripting.executeScript({
          target: {tabId: tabs[0].id},
          function: functionToInjectHTML,
          args: [html]
        }, function(){
			chrome.scripting.executeScript({
			  files:["button.js"],
			  target: {tabId: tabs[0].id},
			  world:"MAIN"
			});
		});
      });
  });
});

function functionToInjectHTML(html) {
	document.body.insertAdjacentHTML("beforeend", html);
}
