const productsHeader = document.querySelector('.recommended-products-page-header-products');
const servicesHeader = document.querySelector('.recommended-products-page-header-services');

productsHeader.addEventListener('click', () => {
    productsHeader.setAttribute('id', 'header-selected');
    servicesHeader.removeAttribute('id');
});

servicesHeader.addEventListener('click', () => {
    servicesHeader.setAttribute('id', 'header-selected');
    productsHeader.removeAttribute('id');
});