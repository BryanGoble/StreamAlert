// Settings Page Menu Function
function openPage(pageName, color) {
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    // Reset the background color of all tab links
    tablinks = document.getElementsByClassName('tablink');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = '';
    }

    // Set the background color of the clicked tab
    var clickedTab = document.querySelector('[data-page="' + pageName + '"]');
    clickedTab.style.backgroundColor = color;

    // Display the selected tab content
    document.getElementById(pageName).style.display = 'block';
}

// Get the buttons by class name and attach event listeners to them
var buttons = document.getElementsByClassName('tablink');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        openPage(this.getAttribute('data-page'), this.getAttribute('data-color'));
    });
}

// Get the element with id='defaultOpen' and click on it
document.getElementById('defaultOpen').click();

// When the Authorize Button is clicked, opens a new tab with the Twitch/YouTube authorization URL
document.getElementById("authorizeTwitchButton").addEventListener("click", function() {
    // Open the new tab
    chrome.tabs.create({ url: "https://id.twitch.tv/oauth2/authorize?client_id=2pt7rb6wnp6d61x6zu6qd0mszew85v&redirect_uri=http://localhost:3000&response_type=token&scope=user%3Aread%3Afollows" });
});

// Handles the token received from the Content script
chrome.runtime.onMessage.addListener(function (message) {
    if (message.token) {
      // Handle the token here
      console.alert("Access Token:", message.token);

      chrome.storage.sync.set({ twitch_token: message.token }).then(() => {
        console.log("Value is set!");
      });

      chrome.storage.sync.get(["twitch_token"]).then((result) => {
        console.log("Value currently is: " + result.key);
      });
    }
    else {
        console.log("Error!!!!!!");
    }
});  