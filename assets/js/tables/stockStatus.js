// Fake data arrays
const stockStatusData = [
    { ÜrünGörsel: "../assets/images/product.png", ÜrünKodu: 1225601, ÜrünAdı: 'Munchkin Tıklama Uçlu Alıştırma Bardağı 12ay+, MOR 296 ml Yedek Pipet', Kategori: 'AL.BARDAK', Marka: 'Munchkin', ToplamStok: 5053, Merkez: 1923, stockstatus: 1923 },
    { ÜrünGörsel: "../assets/images/product.png", ÜrünKodu: 1225601, ÜrünAdı: 'Munchkin Tıklama Uçlu Alıştırma Bardağı 12ay+, MOR 296 ml Yedek Pipet', Kategori: 'AL.BARDAK', Marka: 'Munchkin', ToplamStok: 5053, Merkez: 1923, stockstatus: 1923 },
    { ÜrünGörsel: "../assets/images/product.png", ÜrünKodu: 1225601, ÜrünAdı: 'Munchkin Tıklama Uçlu Alıştırma Bardağı 12ay+, MOR 296 ml Yedek Pipet', Kategori: 'AL.BARDAK', Marka: 'Munchkin', ToplamStok: 5053, Merkez: 1923, stockstatus: 1923 },
    { ÜrünGörsel: "../assets/images/product.png", ÜrünKodu: 1225601, ÜrünAdı: 'Munchkin Tıklama Uçlu Alıştırma Bardağı 12ay+, MOR 296 ml Yedek Pipet', Kategori: 'AL.BARDAK', Marka: 'Munchkin', ToplamStok: 5053, Merkez: 1923, stockstatus: 1923 },
    { ÜrünGörsel: "../assets/images/product.png", ÜrünKodu: 1225601, ÜrünAdı: 'Munchkin Tıklama Uçlu Alıştırma Bardağı 12ay+, MOR 296 ml Yedek Pipet', Kategori: 'AL.BARDAK', Marka: 'Munchkin', ToplamStok: 5053, Merkez: 1923, stockstatus: 1923 },
    { ÜrünGörsel: "../assets/images/product.png", ÜrünKodu: 1225601, ÜrünAdı: 'Munchkin Tıklama Uçlu Alıştırma Bardağı 12ay+, MOR 296 ml Yedek Pipet', Kategori: 'AL.BARDAK', Marka: 'Munchkin', ToplamStok: 5053, Merkez: 1923, stockstatus: 1923 },
    { ÜrünGörsel: "../assets/images/product.png", ÜrünKodu: 1225601, ÜrünAdı: 'Munchkin Tıklama Uçlu Alıştırma Bardağı 12ay+, MOR 296 ml Yedek Pipet', Kategori: 'AL.BARDAK', Marka: 'Munchkin', ToplamStok: 5053, Merkez: 1923, stockstatus: 1923 },
    { ÜrünGörsel: "../assets/images/product.png", ÜrünKodu: 1225601, ÜrünAdı: 'Munchkin Tıklama Uçlu Alıştırma Bardağı 12ay+, MOR 296 ml Yedek Pipet', Kategori: 'AL.BARDAK', Marka: 'Munchkin', ToplamStok: 5053, Merkez: 1923, stockstatus: 1923 },
    // ...add more rows
];

// Function to fill table body from array
function populateStockStatusTable(tableBodyId, data) {
    const tbody = document.getElementById(tableBodyId);
    data.forEach(item => {
        const row = `
            <tr>
                <td>
                <div class="img-link">
                <img src="${item.ÜrünGörsel}" alt="icon" class="product-image"/>
                <span class="link"><img src="../assets/images/link.svg" alt="icon" class="product-image"/>Ürün Linki Ekle</span>
                </div>
                </td>
                <td><div class="amount-data">${item.ÜrünKodu}</div></td>
                <td><div class="amount-data">${item.ÜrünAdı}</div></td>
                 <td><div class="categories-tag">${item.Kategori}</div></td>
                 <td><div class="amount-data">${item.Marka}</div></td>
                 <td><div class="amount-data">${item.ToplamStok}</div></td>
                 <td><div class="amount-data">${item.Merkez}</div></td>
                 <td><div class="amount-data">${item.stockstatus}</div></td>
                 <td><div class="amount-data">${item.stockstatus}</div></td>
                 <td><div class="amount-data">${item.stockstatus}</div></td>
                 <td><div class="amount-data">${item.stockstatus}</div></td>
                 <td><div class="amount-data">${item.stockstatus}</div></td>
                 <td><div class="amount-data">${item.stockstatus}</div></td>
                 <td><div class="amount-data">${item.stockstatus}</div></td>
                 <td><div class="amount-data">${item.stockstatus}</div></td>
                 <td><div class="btn-part"><button><img src='../assets/images/table/edit.svg'</button></div></td>
            </tr>`;
        tbody.insertAdjacentHTML('beforeend', row);
    });
}

$(document).ready(function () {
    // Populate table
    populateStockStatusTable("stockStatusBody", stockStatusData);

    // Initialize DataTable
    var StockStatusTable = $('#stockStatus').DataTable({
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
            attachRefreshButton('stockStatus');
        },
        initComplete: function () {
            attachRefreshButton('stockStatus');
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
        StockStatusTable.search(this.value).draw();
    });

    // Custom sorting arrows
    $('#stockStatus thead th .sort-up').click(function () {
        var colIndex = $(this).closest('th').index();
        StockStatusTable.order([colIndex, 'asc']).draw();
    });
    $('#stockStatus thead th .sort-down').click(function () {
        var colIndex = $(this).closest('th').index();
        StockStatusTable.order([colIndex, 'desc']).draw();
    });

    $('.filter-btn').click(function () {
        alert('Open filter for ' + $(this).closest('th').text());
    });
});
