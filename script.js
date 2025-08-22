const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleBtn');

// Function to update button position
function updateButtonPosition() {
  const sidebarWidth = sidebar.offsetWidth;

  if (sidebar.classList.contains('closed')) {
    toggleBtn.style.left = "10px"; // stays near screen edge
  } else {
    toggleBtn.style.left = `${sidebarWidth + 10}px`; // follows sidebar width
  }
}

// Toggle button click
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('closed');
  updateButtonPosition(); // reuse instead of repeating logic
});

// Call once at start (in case sidebar is open by default)
updateButtonPosition();
