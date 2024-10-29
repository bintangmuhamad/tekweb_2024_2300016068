document.addEventListener('DOMContentLoaded', () => {
    // Change Background Color
    const bgColorSelector = document.getElementById('bg-color');
    bgColorSelector.addEventListener('change', (e) => {
      document.body.style.backgroundColor = e.target.value;
    });
  
    // Change Font Size
    const fontSizeSlider = document.getElementById('font-size');
    fontSizeSlider.addEventListener('input', (e) => {
      document.body.style.fontSize = `${e.target.value}px`;
    });
  
    // Toggle Dark Mode
    const toggleDarkModeButton = document.getElementById('toggle-dark-mode');
    let isDarkMode = false;
    toggleDarkModeButton.addEventListener('click', () => {
      isDarkMode = !isDarkMode;
      if (isDarkMode) {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
      } else {
        document.body.style.backgroundColor = '#f8efef';
        document.body.style.color = '#030400';
      }
    });
  
    // Change Font Style
    const fontStyleSelector = document.getElementById('font-style');
    fontStyleSelector.addEventListener('change', (e) => {
      document.body.style.fontFamily = e.target.value;
    });
  });
  