// Fake data arrays
const questionTableData = [
    { Durum: "Açık Soru", color: "red", Pazaryeri: '../assets/images/table/brand-btn2.svg', SoruTipi: 'Ürün Özellikleri', ÜrünKoduÜrünAdı: 'MUN-12-6-TURUNCU', Soru: 'Merhaba yeşili var mı', date: '16/06/2025', time: '11:59:46', Cevaplayan: 'Mağaza', },
    { Durum: "Kapatılan Soru", color: "green", Pazaryeri: '../assets/images/table/brand-btn1.svg', SoruTipi: 'Ürün Sorusu', ÜrünKoduÜrünAdı: 'MUN-12-6-TURUNCU', Soru: 'Merhaba yeşili var mı', date: '16/06/2025', time: '11:59:46', Cevaplayan: 'Mağaza', },

];

// Function to fill table body from array
function populateQuestionTable(tableBodyId, data) {
    const tbody = document.getElementById(tableBodyId);
    data.forEach(item => {
        const stockImg = item.color === "green"
            ? "../assets/images/table/green-stock.svg"
            : "../assets/images/table/red-stock.svg";
        const row = `
            <tr>
                <td>
                   <div>
                   <div class="stock-left-part small ${item.color}">
                                    <img src="${stockImg}" alt="stock img" />
                                    <span>${item.Durum}</span>
                                </div>
                   </div>
                </td>
                <td><div class="d-flex justify-content-center"><img src="${item.Pazaryeri}" width="74px" height="22px" alt="img"/></div></td>
                <td><div class="amount-data">${item.SoruTipi}</div></td>
                 <td><div class="amount-data">${item.ÜrünKoduÜrünAdı}</div></td>
                 <td><div class="amount-data">${item.Soru}</div></td>
                 <td><div class="date-time">${item.date}<br/><span>${item.time}</span></div></td>
                 <td><div class="amount-data">${item.Cevaplayan}</div></td>
                 <td><div class="btn-part"><button><img src='../assets/images/table/edit.svg'></button></div></td>
            </tr>`;
        tbody.insertAdjacentHTML('beforeend', row);
    });
}

$(document).ready(function () {
    // Populate table
    populateQuestionTable("questionTableBody", questionTableData);

    // Initialize DataTable
    var questionTable = $('#questionTable').DataTable({
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
            attachRefreshButton('questionTable');
        },
        initComplete: function () {
            attachRefreshButton('questionTable');
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
        questionTable.search(this.value).draw();
    });

    // Custom sorting arrows
    $('#questionTable thead th .sort-up').click(function () {
        var colIndex = $(this).closest('th').index();
        questionTable.order([colIndex, 'asc']).draw();
    });
    $('#questionTable thead th .sort-down').click(function () {
        var colIndex = $(this).closest('th').index();
        questionTable.order([colIndex, 'desc']).draw();
    });

    $('.filter-btn').click(function () {
        alert('Open filter for ' + $(this).closest('th').text());
    });
});
