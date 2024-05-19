const buttons = document.querySelectorAll('.product-variants-choice-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('product-variants-choice-button-selected'));

        button.classList.add('product-variants-choice-button-selected');
    });
});