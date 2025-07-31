const productTableData = [
    {
        urunGorsel: "../assets/images/product.png",
        urunKodu: "1225601",
        urunAdi: "Munchkin Tıklama Kilitli Uçlu Alıştırma Bardağı, 6ay+, 207ml Yeşil",
        fiyatHesaplamaBtn: true,
        urunPerformansBtn: true,
        barkod: "",
        kategori: "ALBARDAK",
        marka: "Munchkin",
        yasAraligi: "36",
        desi: "",
        stok: "0",
        kur: "TL",
        alis: "₺1,00",
        alisKur: "₺1,00",
        ortStokBitisSuresiAy: "0,00",
        islemler: {
            edit: true,
            delete: true
        }
    },

];


function populateProductTable(tableBodyId, data) {
    const tbody = document.getElementById(tableBodyId);
    data.forEach(item => {
        const row = `
            <tr>
               <td>
                <div class="img-link">
                <img src="${item.urunGorsel}" alt="icon" class="product-image"/>
                <span class="link"><img src="../assets/images/link.svg" alt="icon" class="product-image"/>Ürün Linki Ekle</span>
                </div>
                </td>
                <td>
                    <div class="product-code">${item.urunKodu}</div>
                    <div class="product-name">${item.urunAdi}</div>
                    <div class="mt-2">
                        ${item.fiyatHesaplamaBtn ? '<button class="calc-btn">Fiyat Hesaplama</button>' : ''}
                        ${item.urunPerformansBtn ? '<button class="performance-btn mt-2">Ürün Performans</button>' : ''}
                    </div>
                </td>
                <td><div>${item.barkod}</div></td>
                <td><div class="tag">${item.kategori}</div></td>
                <td><div class="amount-data">${item.marka} </div></td>
                <td><div class="amount-data">${item.yasAraligi} </div></td>
                <td><div class="amount-data">${item.desi} </div></td>
                <td><div class="amount-data">${item.stok} </div></td>
                <td><div class="amount-data">${item.kur} </div></td>
                <td><div class="amount-data">${item.alis} </div></td>
                <td><div class="amount-data">${item.alisKur} </div></td>
                <td><div class="amount-data">${item.ortStokBitisSuresiAy}</div></td>
                <td>
                    <div class="d-flex d-flex justify-content-center align-items-center gap-3 flex-column">
                        <button class="edit-btn d-flex justify-content-center align-items-center">
                            <img src="../assets/images/sidebar/edit.svg" alt="Edit" />
                        </button>
                        <button class="delete-btn d-flex justify-content-center align-items-center">
                            <img src="../assets/images/delete.svg" alt="Delete" />
                        </button>
                    </div>
                </td>
            </tr>
        `;
        tbody.insertAdjacentHTML('beforeend', row);
    });
}



$(document).ready(function () {
    // Populate table
    populateProductTable("productDetailsTableBody", productTableData);

    // Initialize DataTable
    var productDetailsTable = $('#productDetailsTable').DataTable({
        pageLength: 20,
        lengthMenu: [10, 20, 30, 50],
        dom: 't<"bottom-bar"<"custom-controls"lpi>>',
        language: {
            lengthMenu: "_MENU_",
            info: "_START_ - _END_ of _TOTAL_ içerikten",
            paginate: {
                previous: '<img src="../assets/images/prew.svg" alt="Prev">',
                next: '<img src="../assets/images/next.svg" alt="Next">',
            }
        },
        drawCallback: function () {
            attachRefreshButton('productDetailsTable');
        },
        initComplete: function () {
            attachRefreshButton('productDetailsTable');
        }
    });

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
});