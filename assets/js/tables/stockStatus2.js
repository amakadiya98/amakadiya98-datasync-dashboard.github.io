// Fake data arrays
const stockStatus2Data = [
    { ÜrünGörsel: "NKYSKRSZHDN12X1", ÜrünKodu: 'Ürün Linki Ekle', ÜrünAdı: 'Nilky Şekersiz Hindistan Cevizi Sütü Glütensiz Bitkisel Bazlı Laktosuz Vegan 12X1 lt', Kategori: 'HindistanCevizi', Marka: 'Nilky', ToplamStok: -4, stockstatus: -3 },
    // ...add more rows
];

// Function to fill table body from array
function populateStockStatus2Table(tableBodyId, data) {
    const tbody = document.getElementById(tableBodyId);
    data.forEach(item => {
        const row = `
            <tr>
                <td>
                <div class="text-link">
                ${item.ÜrünGörsel}
                </div>
                </td>
                <td><div class="img-link"><span class="link"><img src="../assets/images/link.svg" alt="icon" class="product-image"/>${item.ÜrünKodu}</span></div></td>
                <td><div class="link-text-data">${item.ÜrünAdı}</div></td>
                 <td><div class="amount-data">${item.Kategori}</div></td>
                 <td><div class="d-flex justify-content-center"><div class="categories-tag">${item.Marka}</div></div></td>
                 <td><div class="amount-data">${item.ToplamStok}</div></td>
                 <td><div class="amount-selecter">
                                                <div class="amount-input">
                                                <input type="text" placeholder="0"/>
                                                    <span class="arrows">
                                                        <img src="../assets/images/up.svg" class="sort-up"
                                                            data-column="0" />
                                                        <img src="../assets/images/down.svg" class="sort-down"
                                                            data-column="0" />
                                                    </span>
                                                </div>
                                            <div class="red-text-box">${item.stockstatus}</div></div></td>
                                            <td><div class="amount-selecter">
                                                <div class="amount-input">
                                                <input type="text" placeholder="0"/>
                                                    <span class="arrows">
                                                        <img src="../assets/images/up.svg" class="sort-up"
                                                            data-column="0" />
                                                        <img src="../assets/images/down.svg" class="sort-down"
                                                            data-column="0" />
                                                    </span>
                                                </div>
                                            <div class="red-text-box">${item.stockstatus}</div></div></td>
                                            <td><div class="amount-selecter">
                                                <div class="amount-input">
                                                <input type="text" placeholder="0"/>
                                                    <span class="arrows">
                                                        <img src="../assets/images/up.svg" class="sort-up"
                                                            data-column="0" />
                                                        <img src="../assets/images/down.svg" class="sort-down"
                                                            data-column="0" />
                                                    </span>
                                                </div>
                                            <div class="red-text-box">${item.stockstatus}</div></div></td>
                                            <td><div class="amount-selecter">
                                                <div class="amount-input">
                                                <input type="text" placeholder="0"/>
                                                    <span class="arrows">
                                                        <img src="../assets/images/up.svg" class="sort-up"
                                                            data-column="0" />
                                                        <img src="../assets/images/down.svg" class="sort-down"
                                                            data-column="0" />
                                                    </span>
                                                </div>
                                            <div class="red-text-box">${item.stockstatus}</div></div></td>
                                            <td><div class="amount-selecter">
                                                <div class="amount-input">
                                                <input type="text" placeholder="0"/>
                                                    <span class="arrows">
                                                        <img src="../assets/images/up.svg" class="sort-up"
                                                            data-column="0" />
                                                        <img src="../assets/images/down.svg" class="sort-down"
                                                            data-column="0" />
                                                    </span>
                                                </div>
                                            <div class="red-text-box">${item.stockstatus}</div></div></td>
                                            <td><div class="amount-selecter">
                                                <div class="amount-input">
                                                <input type="text" placeholder="0"/>
                                                    <span class="arrows">
                                                        <img src="../assets/images/up.svg" class="sort-up"
                                                            data-column="0" />
                                                        <img src="../assets/images/down.svg" class="sort-down"
                                                            data-column="0" />
                                                    </span>
                                                </div>
                                            <div class="red-text-box">${item.stockstatus}</div></div></td>
                                            <td><div class="amount-selecter">
                                                <div class="amount-input">
                                                <input type="text" placeholder="0"/>
                                                    <span class="arrows">
                                                        <img src="../assets/images/up.svg" class="sort-up"
                                                            data-column="0" />
                                                        <img src="../assets/images/down.svg" class="sort-down"
                                                            data-column="0" />
                                                    </span>
                                                </div>
                                            <div class="red-text-box">${item.stockstatus}</div></div></td>
                                            <td><div class="amount-selecter">
                                                <div class="amount-input">
                                                <input type="text" placeholder="0"/>
                                                    <span class="arrows">
                                                        <img src="../assets/images/up.svg" class="sort-up"
                                                            data-column="0" />
                                                        <img src="../assets/images/down.svg" class="sort-down"
                                                            data-column="0" />
                                                    </span>
                                                </div>
                                            <div class="red-text-box">${item.stockstatus}</div></div></td>
                 <td><div class="btn-part"><button><img src='../assets/images/table/edit.svg'</button></div></td>
            </tr>`;
        tbody.insertAdjacentHTML('beforeend', row);
    });
}

$(document).ready(function () {
    // Populate table
    populateStockStatus2Table("stockStatus2Body", stockStatus2Data);

    // Initialize DataTable
    var StockStatus2Table = $('#stockStatus2').DataTable({
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
    // $('#customSearch').on('keyup', function () {
    //     table1.search(this.value).draw();
    // });

    // Custom sorting arrows
    // $('#stockStatus thead th .sort-up').click(function () {
    //     var colIndex = $(this).closest('th').index();
    //     table1.order([colIndex, 'asc']).draw();
    // });
    // $('#stockStatus thead th .sort-down').click(function () {
    //     var colIndex = $(this).closest('th').index();
    //     table1.order([colIndex, 'desc']).draw();
    // });

    $('.filter-btn').click(function () {
        alert('Open filter for ' + $(this).closest('th').text());
    });
});
