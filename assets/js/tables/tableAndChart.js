const tableData = [
    { marka: 'Munchkin', adet: 1914, gelir: 3623, netKar: 3623, netKarYuzde: 10.15, degisim: -26.84 },
    { marka: 'Nilky', adet: 1915, gelir: 4000, netKar: 3900, netKarYuzde: 9.85, degisim: -15.12 },
    { marka: 'Playtex', adet: 1916, gelir: 5000, netKar: 4800, netKarYuzde: 10.50, degisim: -12.45 },
    { marka: 'BBOX', adet: 1917, gelir: 3200, netKar: 3000, netKarYuzde: 9.95, degisim: -8.67 },
];


$(document).ready(function () {
    const table = $('#performanceTable').DataTable({
        data: tableData,
        paging: false,
        info: false,
        searching: false,
        ordering: true,
        stripeClasses: [],
        columns: [
            { data: 'marka', render: data => `<div class="categories-tag">${data}</div>` },
            {
                data: 'adet', render: (data, type, row) => `
                <div class="bold-blue">${data}</div>
                <div class="${row.degisim < 0 ? 'red-down' : 'green-up'}">
                    ${row.degisim.toFixed(2)}%
                </div>` },
            {
                data: 'gelir', render: (data, type, row) => `
                <div class="bold-blue">₺ ${data.toLocaleString()}</div>
                <div class="${row.degisim < 0 ? 'red-down' : 'green-up'}">
                    ${row.degisim.toFixed(2)}%
                </div>` },
            {
                data: 'netKar', render: (data, type, row) => `
                <div class="bold-blue">₺ ${data.toLocaleString()}</div>
                <div class="${row.degisim < 0 ? 'red-down' : 'green-up'}">
                    ${row.degisim.toFixed(2)}%
                </div>` },
            {
                data: 'netKarYuzde', render: (data, type, row) => `
                <div class="bold-blue">%${data}</div>
                <div class="${row.degisim < 0 ? 'red-down' : 'green-up'}">
                    ${row.degisim.toFixed(2)}%
                </div>` }
        ]
    });

    // Click on ascending arrow
    $(document).on('click', '.sort-asc', function (e) {
        e.stopPropagation();
        const colIndex = $(this).data('column');
        table.order([colIndex, 'asc']).draw();
    });

    // Click on descending arrow
    $(document).on('click', '.sort-desc', function (e) {
        e.stopPropagation();
        const colIndex = $(this).data('column');
        table.order([colIndex, 'desc']).draw();
    });
});


function switchTab(tab) {
    const container = document.querySelector('.performance-table');
    const buttons = container.querySelectorAll('.tab-button');

    buttons.forEach(btn => btn.classList.remove('active'));

    if (tab === 'table') {
        container.querySelector('#tableView').style.display = 'block';
        container.querySelector('#chartView').style.display = 'none';
        buttons[0].classList.add('active');
    } else {
        container.querySelector('#tableView').style.display = 'none';
        container.querySelector('#chartView').style.display = 'block';
        buttons[1].classList.add('active');
        drawChart();
    }
}


let chartInstance;
function drawChart() {
    if (chartInstance) return;

    const ctx = document.getElementById('myChart').getContext('2d');
    chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: tableData.map(d => d.marka),
            datasets: [{
                label: 'Net Kar',
                data: tableData.map(d => d.netKar),
                backgroundColor: '#023e7d'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: context => `₺ ${context.raw}`
                    }
                }
            },
            scales: { y: { beginAtZero: true } }
        }
    });
}

function downloadExcel() {
    alert('Excel export coming soon — integrate SheetJS or DataTables export plugin.');
}


// category table data

const categoryData = [
    { marka: 'ALBARDAK', adet: 1914, gelir: 3623, netKar: 3623, netKarYuzde: 10.15, degisim: -26.84 },
    { marka: 'CKB_SETI', adet: 1915, gelir: 4000, netKar: 3900, netKarYuzde: 9.85, degisim: -15.12 },
    { marka: 'YEDEK PARÇA', adet: 1916, gelir: 5000, netKar: 4800, netKarYuzde: 10.50, degisim: -12.45 },
    { marka: 'MAMASET', adet: 1917, gelir: 3200, netKar: 3000, netKarYuzde: 9.95, degisim: -8.67 },
    { marka: 'G.AYNASI', adet: 1500, gelir: 4500, netKar: 4100, netKarYuzde: 9.45, degisim: -5.25 },
    { marka: 'Chicco', adet: 1400, gelir: 4200, netKar: 3900, netKarYuzde: 9.05, degisim: -7.80 },
    { marka: 'Nuby', adet: 1550, gelir: 4350, netKar: 4050, netKarYuzde: 9.15, degisim: -2.45 },
    { marka: 'Pigeon', adet: 1750, gelir: 4900, netKar: 4550, netKarYuzde: 9.75, degisim: -1.15 },
    { marka: 'Evenflo', adet: 1650, gelir: 4600, netKar: 4250, netKarYuzde: 8.85, degisim: -6.35 },
    { marka: 'Comotomo', adet: 1800, gelir: 5000, netKar: 4700, netKarYuzde: 9.95, degisim: -4.20 },
    { marka: 'Graco', adet: 1900, gelir: 5200, netKar: 4850, netKarYuzde: 10.05, degisim: -5.60 },
    { marka: 'MAM', adet: 2000, gelir: 5400, netKar: 5000, netKarYuzde: 10.25, degisim: -2.15 },
];

$(document).ready(function () {
    $('#categoryPerformanceTable').DataTable({
        data: categoryData,
        paging: false,
        info: false,
        searching: false,
        ordering: true,
        stripeClasses: [],
        columns: [
            { data: 'marka', render: data => `<div class="categories-tag">${data}</div>` },
            {
                data: 'adet', render: (data, type, row) => `
                <div class="bold-blue">${data}</div>
                <div class="${row.degisim < 0 ? 'red-down' : 'green-up'}">
                    ${row.degisim.toFixed(2)}%
                </div>`
            },
            {
                data: 'gelir', render: (data, type, row) => `
                <div class="bold-blue">₺ ${data.toLocaleString()}</div>
                <div class="${row.degisim < 0 ? 'red-down' : 'green-up'}">
                    ${row.degisim.toFixed(2)}%
                </div>`
            },
            {
                data: 'netKar', render: (data, type, row) => `
                <div class="bold-blue">₺ ${data.toLocaleString()}</div>
                <div class="${row.degisim < 0 ? 'red-down' : 'green-up'}">
                    ${row.degisim.toFixed(2)}%
                </div>`
            },
            {
                data: 'netKarYuzde', render: (data, type, row) => `
                <div class="bold-blue">%${data}</div>
                <div class="${row.degisim < 0 ? 'red-down' : 'green-up'}">
                    ${row.degisim.toFixed(2)}%
                </div>`
            }
        ]
    });
});

function switchCategoryTab(tab) {
    const container = document.querySelector('.category.performance-table');
    const buttons = container.querySelectorAll('.tab-button');

    buttons.forEach(btn => btn.classList.remove('active'));

    if (tab === 'table') {
        container.querySelector('#categoryTableView').style.display = 'block';
        container.querySelector('#categoryChartView').style.display = 'none';
        buttons[0].classList.add('active');
    } else {
        container.querySelector('#categoryTableView').style.display = 'none';
        container.querySelector('#categoryChartView').style.display = 'block';
        buttons[1].classList.add('active');
        drawCategoryChart();
    }
}


let categoryChartInstance;
function drawCategoryChart() {
    if (categoryChartInstance) return;

    const ctx = document.getElementById('categoryChart').getContext('2d');
    categoryChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: categoryData.map(d => d.marka),
            datasets: [{
                label: 'Net Kar',
                data: categoryData.map(d => d.netKar),
                backgroundColor: '#FFA64A'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: context => `₺ ${context.raw}`
                    }
                }
            },
            scales: { y: { beginAtZero: true } }
        }
    });
}