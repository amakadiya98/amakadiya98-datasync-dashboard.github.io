// Fake data arrays
const agingProductData = [
    { Pazaryeri: "../assets/images/product.png", description: 'Munchkin Tıklama Kilitli Uçlu Alıştırma Bardağı, 6ay+207ml Yeşil', Kategori: 'ALBARDAK', Marka: 'Munchkin', satışFiyatı: 623, netKar: 3.623, netKarOranı: "-26.84" },
    { Pazaryeri: "../assets/images/product.png", description: 'Munchkin Tıklama Kilitli Uçlu Alıştırma Bardağı, 6ay+207ml Yeşil', Kategori: 'ALBARDAK', Marka: 'Munchkin', satışFiyatı: 623, netKar: 3.623, netKarOranı: "-26.84" },
    { Pazaryeri: "../assets/images/product.png", description: 'Munchkin Tıklama Kilitli Uçlu Alıştırma Bardağı, 6ay+207ml Yeşil', Kategori: 'ALBARDAK', Marka: 'Munchkin', satışFiyatı: 623, netKar: 3.623, netKarOranı: "-26.84" },
    { Pazaryeri: "../assets/images/product.png", description: 'Munchkin Tıklama Kilitli Uçlu Alıştırma Bardağı, 6ay+207ml Yeşil', Kategori: 'ALBARDAK', Marka: 'Munchkin', satışFiyatı: 623, netKar: 3.623, netKarOranı: "-26.84" },
    // ...add more rows
];

// Function to fill table body from array
function populateAgingTable(tableBodyId, data) {
    const tbody = document.getElementById(tableBodyId);
    data.forEach(item => {
        const row = `
            <tr>
                <td class="aging-product-img"><img src="${item.Pazaryeri}" alt="icon" class="product-image"/></td>
                <td><div class="description">${item.description}</div></td>
                <td><div class="categories-tag">${item.Kategori}</div></td>
                <td>
                    <div class="Marka-data">
                        ${item.Marka}
                    </div>
                </td>
                 <td><div class="amount-data">${item.satışFiyatı}</div></td>
                 <td><div class="amount-data">${item.satışFiyatı}</div></td>
                 <td><div class="amount-data">${item.satışFiyatı}</div></td>
                 <td><div class="amount-data">${item.satışFiyatı}</div></td>
                 <td><div class="amount-data">${item.satışFiyatı}</div></td>
            </tr>`;
        tbody.insertAdjacentHTML('beforeend', row);
    });
}

$(document).ready(function () {
    // Populate table
    populateAgingTable("agingProductsBody", agingProductData);

    // Initialize DataTable
    var agingTable = $('#agingProducts').DataTable({
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
            attachRefreshButton('agingProducts');
        },
        initComplete: function () {
            attachRefreshButton('agingProducts');
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
        agingTable.search(this.value).draw();
    });

    // Custom sorting arrows
    $('#agingProducts thead th .sort-up').click(function () {
        var colIndex = $(this).closest('th').index();
        agingTable.order([colIndex, 'asc']).draw();
    });
    $('#agingProducts thead th .sort-down').click(function () {
        var colIndex = $(this).closest('th').index();
        agingTable.order([colIndex, 'desc']).draw();
    });

    $('.filter-btn').click(function () {
        alert('Open filter for ' + $(this).closest('th').text());
    });
});
