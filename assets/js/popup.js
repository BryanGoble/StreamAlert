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