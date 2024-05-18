const buttons = document.querySelectorAll('.product-variants-choice-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'selected' class from all buttons
        buttons.forEach(btn => btn.classList.remove('product-variants-choice-button-selected'));

        // Add 'selected' class to the clicked button
        button.classList.add('product-variants-choice-button-selected');
    });
});