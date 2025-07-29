const categoryPurchasedTogetherData = [
    { kategori1: 'ALBARDAK', kategori2: 'ÇKB_SETİ', number: 127249, percentages: 26.84 },
    { kategori1: 'ALBARDAK', kategori2: 'ÇKB_SETİ', number: 127249, percentages: 26.84 },
    { kategori1: 'Munchkin', kategori2: 'BIBERON', number: 1914, percentages: 5.6 },
    { kategori1: 'Nilky', kategori2: 'EMZİK', number: 1915, percentages: -3.2 },
    { kategori1: 'Playtex', kategori2: 'BARDAK', number: 1916, percentages: 2.1 },
    { kategori1: 'BBOX', kategori2: 'MAMA KAŞIĞI', number: 1917, percentages: 0.0 },
];

// Function to fill table body from array
function populateCategoryPurchasedTogetherTable(tableBodyId, data) {
    const tbody = document.getElementById(tableBodyId);
    data.forEach(item => {
        const row = `
            <tr>
                <td><div class="categories-tag">${item.kategori1}</div></td>
                <td><div class="categories-tag">${item.kategori2}</div></td>
                <td>
                    <div class="wraper-part d-flex gap-2 align-items-center">
                        <div class="bold-blue">${item.number.toLocaleString('tr-TR')}</div>
                        <div class="${item.percentages < 0 ? 'red-down' : 'green-up'}">
                            ${Math.abs(item.percentages).toFixed(2)}%
                        </div>
                    </div>
                </td>
            </tr>`;
        tbody.insertAdjacentHTML('beforeend', row);
    });
}

$(document).ready(function () {
    // Populate table body
    populateCategoryPurchasedTogetherTable("categoryPurchasedTogetherBody", categoryPurchasedTogetherData);

    // Initialize DataTable
    var CategoryPurchasedTogetherTable = $('#categoryPurchasedTogether').DataTable({
        pageLength: 20,
        lengthMenu: [10, 20, 30],
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
            attachRefreshButton('categoryPurchasedTogether');
        },
        initComplete: function () {
            attachRefreshButton('categoryPurchasedTogether');
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

    // Custom search bar
    $('#customSearch').on('keyup', function () {
        CategoryPurchasedTogetherTable.search(this.value).draw();
    });

    // Custom sorting arrows
    $('#categoryPurchasedTogether thead th .sort-up').click(function () {
        var colIndex = $(this).closest('th').index();
        CategoryPurchasedTogetherTable.order([colIndex, 'asc']).draw();
    });
    $('#categoryPurchasedTogether thead th .sort-down').click(function () {
        var colIndex = $(this).closest('th').index();
        CategoryPurchasedTogetherTable.order([colIndex, 'desc']).draw();
    });

    $('.filter-btn').click(function () {
        alert('Open filter for ' + $(this).closest('th').text());
    });
});
