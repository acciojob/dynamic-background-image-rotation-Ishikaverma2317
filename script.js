function setBackground() {
  if (window.innerWidth > window.innerHeight) {
    // Landscape Mode
    document.body.style.backgroundImage =
      "url('https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Paysage-en-orientation-paysage.jpg')";
  } else {
    // Portrait Mode
    document.body.style.backgroundImage =
      "url('https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Portrait-en-orientation-portrait.jpg')";
  }
}

// Run on page load
setBackground();

// Update on resize
window.addEventListener("resize", setBackground);
