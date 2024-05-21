document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('.green-checkbox');
    const selectAllCheckbox = checkboxes[0];
    const selectSellerCheckbox = checkboxes[1];
    const hapusText = document.querySelector('.bold-purple'); 

    selectAllCheckbox.addEventListener('change', () => {
        checkboxes.forEach(checkbox => {
            if (checkbox !== selectAllCheckbox) {
                checkbox.checked = selectAllCheckbox.checked;
            }
        });
        hapusText.style.display = selectAllCheckbox.checked ? 'block' : 'none'; 
    });

    selectSellerCheckbox.addEventListener('change', () => {
        checkboxes.forEach(checkbox => {
            if (checkbox !== selectAllCheckbox && checkbox !== selectSellerCheckbox) {
                checkbox.checked = selectSellerCheckbox.checked;
            }
        });
    });

    // Additional logic to update "Select All" when other checkboxes change
    checkboxes.forEach(checkbox => {
        if (checkbox !== selectAllCheckbox) {
            checkbox.addEventListener('change', () => {
                const allChecked = Array.from(checkboxes).every(cb => cb.checked);
                selectAllCheckbox.checked = allChecked;
                hapusText.style.display = allChecked ? 'block' : 'none'; 
            });
        }
    });

    // Initial state
    hapusText.style.display = selectAllCheckbox.checked ? 'block' : 'none'; 
});
