function showTab(tabId) {
    // Hide all tab content
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Show the selected tab content
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');
    
    // Highlight the active tab button
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));
    
    const activeButton = [...tabButtons].find(button => button.innerText.toLowerCase() === tabId);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Set the default active tab
document.addEventListener('DOMContentLoaded', () => {
    showTab('home');
});
