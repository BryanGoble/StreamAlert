// Captures the redirect URL when the user approves the authorization on Twitch
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "getToken") {
      const token = extractTokenFromURL(window.location.href);
      sendResponse({ token });
    }
  });
  
  // Captures the Access Token from the url then returns it
  function extractTokenFromURL(url) {
    const regex = /access_token=([^&]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }  