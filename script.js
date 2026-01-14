// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Format prices on product pages
    formatProductPrices();
});

// Function to format product prices
function formatProductPrices() {
    const priceElements = document.querySelectorAll('.product-price');
    
    priceElements.forEach(element => {
        let priceText = element.textContent;
        // Remove any existing formatting
        priceText = priceText.replace(/[^\d]/g, '');
        
        // Add three zeros to the price
        let priceNumber = parseInt(priceText) * 1000;
        
        // Format with dots as thousands separators
        let formattedPrice = priceNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        
        // Update the element
        element.textContent = '$' + formattedPrice;
    });
}