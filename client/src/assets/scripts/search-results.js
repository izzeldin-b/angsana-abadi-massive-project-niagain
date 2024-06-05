const productsHeader = document.querySelector('.search-results-page-header-products');
const servicesHeader = document.querySelector('.search-results-page-header-services');

productsHeader.addEventListener('click', () => {
    productsHeader.setAttribute('id', 'header-selected');
    servicesHeader.removeAttribute('id');
});

servicesHeader.addEventListener('click', () => {
    servicesHeader.setAttribute('id', 'header-selected');
    productsHeader.removeAttribute('id');
});