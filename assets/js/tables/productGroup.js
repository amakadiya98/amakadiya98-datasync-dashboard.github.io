const productGroupData = [
    { marka: 'Munchkin', adet: 1914, adetPct: 1914, tutar: 3623, netKar: 3623, netKarPct: 10.15, percentages: -26.84 },
    { marka: 'Nilky', adet: 1915, adetPct: 1914, tutar: 4000, netKar: 3900, netKarPct: 9.85, percentages: -26.84 },
    { marka: 'Playtex', adet: 1916, adetPct: 1914, tutar: 5000, netKar: 4800, netKarPct: 10.50, percentages: -26.84 },
    { marka: 'BBOX', adet: 1917, adetPct: 1914, tutar: 3200, netKar: 3000, netKarPct: 9.95, percentages: -26.84 },
];

$(document).ready(function () {
    // Tab switching
    $('.custom-tab-button').on('click', function () {
        $('.custom-tab-button').removeClass('custom-active'); // remove from all buttons
        $(this).addClass('custom-active'); // add to the one you clicked

        $('.custom-tab-panel').hide(); // hide all panels
        const panelId = $(this).data('tab') + '-panel';
        $('#' + panelId).show(); // show the matching panel
    });
    const productGroupTable = $('#productGroupTable').DataTable({
        data: productGroupData,
        pageLength: 10,
        lengthMenu: [10, 20, 30, 50],
        dom: 't<"bottom-bar"<"custom-controls"lpi>>',
        language: {
            lengthMenu: "_MENU_",
            info: "_START_ - _END_ of _TOTAL_ entries",
            paginate: {
                previous: '<img src="../assets/images/prew.svg" alt="Prev">',
                next: '<img src="../assets/images/next.svg" alt="Next">'
            }
        },
        stripeClasses: [],
        ordering: true,
        drawCallback: function () {
            attachRefreshButton('productGroupTable');
        },
        initComplete: function () {
            attachRefreshButton('productGroupTable');
        },
        language: {
            lengthMenu: "_MENU_",
            info: "_START_ - _END_ of _TOTAL_ entries",
            paginate: {
                previous: '<img src="../assets/images/prew.svg" alt="Prev">',
                next: '<img src="../assets/images/next.svg" alt="Next">'
            }
        },
        stripeClasses: [],
        columns: [
            {
                data: 'marka',
                render: data => `<div class="categories-tag">${data}</div>`
            },
            {
                data: 'adet',
                render: (data, type, row) => `
            <div class="wraper-part">
                <div class="bold-blue">${data}</div>
                <div class="${row.percentages < 0 ? 'red-down' : 'green-up'}">
                    ${row.percentages.toFixed(2)}%
                </div>
            </div>`
            },
            {
                data: 'adetPct',
                render: (data, type, row) => `
            <div class="wraper-part">
                <div class="bold-blue">${data.toFixed(2)}%</div>
                <div class="${row.percentages < 0 ? 'red-down' : 'green-up'}">
                    ${row.percentages.toFixed(2)}%
                </div>
            </div>`
            },
            {
                data: 'tutar',
                render: (data, type, row) => `
            <div class="wraper-part">
                <div class="bold-blue">₺ ${data.toLocaleString()}</div>
                <div class="${row.percentages < 0 ? 'red-down' : 'green-up'}">
                    ${row.percentages.toFixed(2)}%
                </div>
            </div>`
            },
            {
                data: 'netKar',
                render: (data, type, row) => `
            <div class="wraper-part">
                <div class="bold-blue">₺ ${data.toLocaleString()}</div>
                <div class="${row.percentages < 0 ? 'red-down' : 'green-up'}">
                    ${row.percentages.toFixed(2)}%
                </div>
            </div>`
            },
            {
                data: 'netKarPct',
                render: (data, type, row) => `
            <div class="wraper-part">
                <div class="bold-blue">%${data.toFixed(2)}</div>
                <div class="${row.percentages < 0 ? 'red-down' : 'green-up'}">
                    ${row.percentages.toFixed(2)}%
                </div>
            </div>`
            }
        ]

    });

    // Attach refresh button next to info
    function attachRefreshButton(tableId) {
        const infoId = `#${tableId}_info`;
        if (!$(infoId).next('.refresh-btn').length) {
            $(infoId).after(`
                <button class="refresh-btn footer-btn ms-2" onclick="location.reload()">
                    <img src="../assets/images/refresh.svg" alt="icon">
                </button>
            `);
        }
    }

    // Click on ascending arrow
    $(document).on('click', '.sort-asc', function (e) {
        e.stopPropagation();
        const colIndex = $(this).data('column');
        productGroupTable.order([colIndex, 'asc']).draw();
    });

    // Click on descending arrow
    $(document).on('click', '.sort-desc', function (e) {
        e.stopPropagation();
        const colIndex = $(this).data('column');
        productGroupTable.order([colIndex, 'desc']).draw();
    });
    $('#customSearch').on('keyup', function () {
        productGroupTable.search(this.value).draw();
    });
    // Chart.js example
    // Chart.js example with gradient fill
    const ctx = $('#productGroupChart')[0].getContext('2d');

    // Create gradients
    const gradientOrange = ctx.createLinearGradient(0, 0, 0, 400);
    gradientOrange.addColorStop(0.066, 'rgba(255, 194, 131, 0.2)');
    gradientOrange.addColorStop(0.9967, 'rgba(255, 194, 131, 0)');

    const gradientBlue = ctx.createLinearGradient(0, 0, 0, 400);
    gradientBlue.addColorStop(0.0065, 'rgba(27, 105, 199, 0.2)');
    gradientBlue.addColorStop(1, 'rgba(27, 105, 199, 0)');

    // Use your tableData for chart values
    const labels = productGroupData.map(item => item.marka);
    const previousData = productGroupData.map(item => item.tutar * 1.1);
    const currentData = productGroupData.map(item => item.tutar);

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Önceki',
                    data: previousData,
                    borderColor: '#1B69C7',
                    backgroundColor: gradientBlue,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0
                },
                {
                    label: 'Güncel',
                    data: currentData,
                    borderColor: '#F2B889',
                    backgroundColor: gradientOrange,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'rectRounded',
                        color: '#003367',
                        font: { size: 14, weight: '500' }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: ctx => `${ctx.dataset.label}: ${Math.round(ctx.raw / 1000)}K`
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: value => `${value / 1000}K`
                    },
                    grid: { color: '#E2E8F0' }
                },
                x: { grid: { display: false } }
            }
        }
    });

    $('#exportExcel').click(function () {
        alert("Export to Notes/PDF coming soon.");
    });









    const ctx2 = document.getElementById('myStackedChart').getContext('2d');

    const data = {
        labels: [
            '1226501', '1226501', '1226501', '1226501',
            '1226501', '1226501', '1226501', '1226501'
        ],
        datasets: [
            { label: 'Hepsiburada', data: [500, 800, 600, 700, 600, 900, 400, 700], backgroundColor: '#FF9800' },
            { label: 'Trendyol', data: [300, 500, 400, 600, 500, 300, 500, 600], backgroundColor: '#7E57C2' },
            { label: 'N11', data: [400, 0, 300, 0, 0, 600, 400, 0], backgroundColor: '#3F51B5' },
            { label: 'Pazarama', data: [200, 0, 0, 0, 0, 0, 0, 0], backgroundColor: '#FFA726' },
            { label: 'Amazon', data: [100, 0, 0, 0, 0, 0, 0, 0], backgroundColor: '#000000' },
            { label: 'B2B', data: [100, 0, 0, 0, 0, 0, 0, 0], backgroundColor: '#757575' },
            { label: 'Boyner', data: [200, 0, 0, 0, 0, 0, 0, 0], backgroundColor: '#E91E63' },
            { label: 'Ideasoft', data: [800, 1000, 700, 1000, 1200, 900, 1000, 1100], backgroundColor: '#8BC34A' },
            { label: 'Woo Commerce', data: [500, 700, 600, 500, 600, 700, 500, 600], backgroundColor: '#B39DDB' },
            { label: 'Boyner 2', data: [200, 0, 0, 0, 0, 0, 0, 0], backgroundColor: '#FF4081' }
        ]
    };

    const options = {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    usePointStyle: true,
                    boxWidth: 10,
                    boxHeight: 10,
                    padding: 20
                }
            }
        },
        scales: {
            x: {
                stacked: true,
                grid: {
                    color: '#E0E0E0'
                }
            },
            y: {
                stacked: true,
                ticks: {
                    callback: function (value, index) {
                        return data.labels[index] + '   Munchkin İkili Çatal Kaşık';
                    },
                    color: '#333',
                    font: {
                        size: 12
                    }
                },
                grid: {
                    drawBorder: false,
                    color: '#F5F5F5'
                }
            }
        }
    };

    new Chart(ctx2, {
        type: 'bar',
        data: data,
        options: options
    });

});