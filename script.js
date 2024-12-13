document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been received. We'll get back to you soon.`);
    
    // Reset the form
    this.reset();
});
document.getElementByod('merchandiseform').addEventListener('order', function(event) {
    event.preventDefault();
    const id = document.getElementByod('id').value;
    const address = document.getElementByod('address').value;
    

    alert(`Thank you, ${id}! Your order has been received. We'll share your shipping details on your registered email.`);
    
    // Reset the form
    this.reset();
});

