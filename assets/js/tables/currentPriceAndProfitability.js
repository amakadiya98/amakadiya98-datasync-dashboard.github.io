// Fake data arrays
const currentPriceData = [
    { Pazaryeri: "../assets//images/table/brand-name1.png", satışFiyatı: 490, netKar: 3.623, netKarOranı: "-26.84" },
    { Pazaryeri: "../assets/images/table/brand-name2.png", satışFiyatı: 490, netKar: 3.623, netKarOranı: "-26.84" },
    { Pazaryeri: "../assets/images/table/brand-name3.png", satışFiyatı: 490, netKar: 3.623, netKarOranı: "-26.84" },
    { Pazaryeri: "../assets/images/table/brand-name4.png", satışFiyatı: 490, netKar: 3.623, netKarOranı: "-26.84" },
    // ...add more rows
];

// Function to fill table body from array
function populateCurrentPriceTable(tableBodyId, data) {
    const tbody = document.getElementById(tableBodyId);
    data.forEach(item => {
        const row = `
            <tr>
                <td class="brand-img"><img src="${item.Pazaryeri}" alt="icon" class="product-image"/></td>
                <td class="price-data"><div class="amount-data">₺${item.satışFiyatı}</div></td>
                <td><div class="amount-data">${item.netKar}</div></td>
                <td>
                    <div class="amount-data">
                        <div class="${parseFloat(item.netKarOranı) < 0 ? 'red-down' : 'green-up'}">
                            ${parseFloat(item.netKarOranı).toFixed(2)}%
                        </div>
                    </div>
                </td>
            </tr>`;
        tbody.insertAdjacentHTML('beforeend', row);
    });
}

$(document).ready(function () {
    // Populate table
    populateCurrentPriceTable("currentPriceTableBody", currentPriceData);

    // Initialize DataTable
    var CurrentPriceTable = $('#currentPriceTable').DataTable({
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
        drawCallback: function () {
            attachRefreshButton('currentPriceTable');
        },
        initComplete: function () {
            attachRefreshButton('currentPriceTable');
        }
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

    // Common search bar
    $('#customSearch').on('keyup', function () {
        CurrentPriceTable.search(this.value).draw();
    });

    // Custom sorting arrows
    $('#currentPriceTable thead th .sort-up').click(function () {
        var colIndex = $(this).closest('th').index();
        CurrentPriceTable.order([colIndex, 'asc']).draw();
    });
    $('#currentPriceTable thead th .sort-down').click(function () {
        var colIndex = $(this).closest('th').index();
        CurrentPriceTable.order([colIndex, 'desc']).draw();
    });

    $('.filter-btn').click(function () {
        alert('Open filter for ' + $(this).closest('th').text());
    });
});
