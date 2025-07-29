const input = document.getElementById("productCodeInput");
const dropdown = document.getElementById("platformDropdown");
const fetchButton = document.getElementById("fetchButton");

let justOpenedDropdown = false;

function openDropdownIfInputValid() {
    const inputValue = input.value.trim();
    if (inputValue) {
        dropdown.style.display = "block";
        justOpenedDropdown = true;
        setTimeout(() => {
            justOpenedDropdown = false;
        }, 100);
    } else {
        dropdown.style.display = "none";
    }
}

fetchButton.addEventListener("click", openDropdownIfInputValid);

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        openDropdownIfInputValid();
    }
});

document.querySelectorAll('.platform-row').forEach((row) => {
    const countBox = row.querySelector('.count-box');
    const upArrow = row.querySelectorAll('.arrow-icon')[0];
    const downArrow = row.querySelectorAll('.arrow-icon')[1];

    const updateColor = (count) => {
        countBox.style.color = count === 0
            ? 'rgba(183, 201, 255, 1)'
            : 'rgba(2, 62, 125, 1)';
        countBox.style.fontSize = '20px';
        countBox.style.fontWeight = '700';
    };

    const getCount = () => parseInt(countBox.textContent.trim()) || 0;

    upArrow.addEventListener('click', () => {
        let count = getCount() + 1;
        countBox.textContent = count;
        updateColor(count);
    });

    downArrow.addEventListener('click', () => {
        let count = Math.max(0, getCount() - 1);
        countBox.textContent = count;
        updateColor(count);
    });

    updateColor(getCount());
});

document.addEventListener('click', function (event) {
    if (justOpenedDropdown) return;

    const isClickInsideInput = input.contains(event.target);
    const isClickInsideDropdown = dropdown.contains(event.target);
    const isClickInsideFetchButton = fetchButton.contains(event.target);

    if (!isClickInsideInput && !isClickInsideDropdown && !isClickInsideFetchButton) {
        dropdown.style.display = 'none';
        input.value = '';
    }
});


// dropdown
const dropdownItems = document.querySelectorAll('.dropdown-item');

dropdownItems.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const dropdown = item.closest('.dropdown');
        const categoryTitle = dropdown.querySelector('.category-title');
        if (categoryTitle) {
            categoryTitle.textContent = item.textContent;
        }
    });
});