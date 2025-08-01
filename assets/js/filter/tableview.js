// active in active state

document.querySelector('.right-btn').addEventListener('click', function (e) {
    e.stopPropagation();
    this.classList.toggle('active');
});


console.log("tableview.js loaded");

//    range plus minius

const dropdownToggle = document.querySelector('.custom-dropdown3');
const filterPanel = document.getElementById('filterPanel');
const arrowIcon = document.querySelector('.dropdown-arrow');
dropdownToggle.addEventListener('click', () => {
    const isOpen = filterPanel.style.display === 'block';
    filterPanel.style.display = isOpen ? 'none' : 'block';
    arrowIcon.src = isOpen ? '../assets/images/bluedown-arrow.svg' : '../assets/images/blueuparrow.svg';
});

document.addEventListener('click', function (e) {
    if (!e.target.closest('.custom-dropdown3') && !e.target.closest('#filterPanel')) {
        filterPanel.style.display = 'none';
        arrowIcon.src = '../assets/images/bluedown-arrow.svg';
    }
});

const leftHandle = document.querySelector('.left-handle');
const rightHandle = document.querySelector('.right-handle');
const barFill = document.querySelector('.bar-fill');
const leftValueBox = document.querySelector('.plus-button:nth-child(1)');
const rightValueBox = document.querySelector('.plus-button:nth-child(2)');
const container = document.querySelector('.bar-container');

const minRange = -184;
const maxRange = 184;

let minValue = -100;
let maxValue = 100;

function updateUI() {
    const range = maxRange - minRange;
    const leftPercent = ((minValue - minRange) / range) * 100;
    const rightPercent = ((maxValue - minRange) / range) * 100;

    leftHandle.style.left = `${leftPercent}%`;
    rightHandle.style.left = `${rightPercent}%`;

    barFill.style.left = `${leftPercent}%`;
    barFill.style.width = `${rightPercent - leftPercent}%`;

    leftValueBox.textContent = minValue;
    rightValueBox.textContent = maxValue;
}

function handleDrag(handle, isLeft) {
    function onMove(e) {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        let percent = (x / rect.width) * 100;
        percent = Math.max(0, Math.min(100, percent));
        const value = Math.round(minRange + ((maxRange - minRange) * percent) / 100);

        if (isLeft) {
            if (value >= maxValue) return;
            minValue = value;
        } else {
            if (value <= minValue) return;
            maxValue = value;
        }

        updateUI();
    }

    function onUp() {
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
    }

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
}

leftHandle.addEventListener('mousedown', () => handleDrag(leftHandle, true));
rightHandle.addEventListener('mousedown', () => handleDrag(rightHandle, false));

updateUI();
