const stock1Data = [
    { ÜrünKodu: 51821, ÜrünAdı: 'Munchkin Bebek Salıncağı', SatışAdedi: 0, StokAdedi: 1, AylıkStok: 0 },
    { ÜrünKodu: 51822, ÜrünAdı: 'Baby Feeding Set', SatışAdedi: 5, StokAdedi: 10, AylıkStok: 3 },
    { ÜrünKodu: 51823, ÜrünAdı: 'Toddler Bottle', SatışAdedi: 7, StokAdedi: 4, AylıkStok: 2 },
    { ÜrünKodu: 51824, ÜrünAdı: 'Stroller', SatışAdedi: 1, StokAdedi: 2, AylıkStok: 1 },
    { ÜrünKodu: 51825, ÜrünAdı: 'Diaper Bag', SatışAdedi: 3, StokAdedi: 5, AylıkStok: 2 },
];

const stock2Data = [
    { ÜrünKodu: 51821, ÜrünAdı: 'Munchkin Bebek Salıncağı', SatışAdedi: 0, StokAdedi: 1, AylıkStok: 0 },
    { ÜrünKodu: 51822, ÜrünAdı: 'Baby Feeding Set', SatışAdedi: 5, StokAdedi: 10, AylıkStok: 3 },
    { ÜrünKodu: 51823, ÜrünAdı: 'Toddler Bottle', SatışAdedi: 7, StokAdedi: 4, AylıkStok: 2 },
    { ÜrünKodu: 51824, ÜrünAdı: 'Stroller', SatışAdedi: 1, StokAdedi: 2, AylıkStok: 1 },
    { ÜrünKodu: 51825, ÜrünAdı: 'Diaper Bag', SatışAdedi: 3, StokAdedi: 5, AylıkStok: 2 },
];

// Function to fill table body from array
function populateStocksTable(tableBodyId, data) {
    const tbody = document.getElementById(tableBodyId);
    tbody.innerHTML = ''; // clear existing rows
    data.forEach(item => {
        const row = `
            <tr>
                 <td><div class="amount-data">${item.ÜrünKodu}</div></td>
                 <td><div class="amount-data">${item.ÜrünAdı}</div></td>
                 <td><div class="amount-data">${item.SatışAdedi}</div></td>
                 <td><div class="amount-data">${item.StokAdedi}</div></td>
                 <td><div class="amount-data">${item.AylıkStok}</div></td>
            </tr>`;
        tbody.insertAdjacentHTML('beforeend', row);
    });
}

$(document).ready(function () {
    // Populate both tables
    populateStocksTable("stockCriticismsBody", stock1Data);
    populateStocksTable("stockExcessBodys", stock2Data);

    // Function to attach refresh button
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

    // Initialize DataTables
    var stock1Table = $('#stockCriticisms').DataTable({
        pageLength: 20,
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
        drawCallback: function () { attachRefreshButton('stockCriticisms'); },
        initComplete: function () { attachRefreshButton('stockCriticisms'); }
    });

    var stock2Table = $('#stockExcess').DataTable({
        pageLength: 20,
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
        drawCallback: function () { attachRefreshButton('stockExcess'); },
        initComplete: function () { attachRefreshButton('stockExcess'); }
    });

    // Search bars
    $('#customSearch').on('keyup', function () {
        stock1Table.search(this.value).draw();
    });
    $('#customSearch2').on('keyup', function () {
        stock2Table.search(this.value).draw();
    });

    // Sorting arrows for table 1
    $('#stockCriticisms thead th .sort-asc').click(function () {
        var colIndex = $(this).closest('th').index();
        stock1Table.order([colIndex, 'asc']).draw();
    });
    $('#stockCriticisms thead th .sort-desc').click(function () {
        var colIndex = $(this).closest('th').index();
        stock1Table.order([colIndex, 'desc']).draw();
    });

    // Sorting arrows for table 2
    $('#stockExcess thead th .sort-asc').click(function () {
        var colIndex = $(this).closest('th').index();
        stock2Table.order([colIndex, 'asc']).draw();
    });
    $('#stockExcess thead th .sort-desc').click(function () {
        var colIndex = $(this).closest('th').index();
        stock2Table.order([colIndex, 'desc']).draw();
    });
});

