function showContent(tabName) {
    // Get all content sections
    var contents = document.querySelectorAll('.content');

    // Remove the 'active' class from all content sections to hide them
    contents.forEach(function(content) {
        content.classList.remove('active');
    });

    // Get the specific content section by the tab name and add the 'active' class to show it
    var activeContent = document.getElementById(tabName);
    activeContent.classList.add('active');
}

// Show the first tab (Writing Projects) by default when the page loads
showContent('writing');