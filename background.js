// Facilitates the communication between the Content script and Popup script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "getToken") {
      // Forward the message to the active tab
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (tabs[0]) {
          chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: getToken,
          });
        }
      });
    }
  });
  
  function getToken() {
    const token = document.location.href.split("access_token=")[1];
    chrome.runtime.sendMessage({ token });
  }
  