const detailsTableData = [
    {
        Tip: "",
        Açıklama: "Eksik Ürün Faturası",
        Tutar: "₺0,00",
        PazaryeriTutarı: "₺100,00",
        Fark: "-₺100,00"
    },
    {
        Tip: "Gider",
        Açıklama: "Eksik Ürün Faturası",
        Tutar: "",
        PazaryeriTutarı: "",
        Fark: ""
    },
];



function populateDetailsTable(tableBodyId, data) {
    const tbody = document.getElementById(tableBodyId);
    data.forEach(item => {
        const row = `
            <tr>
                <td>
                    <button class='search-btn'>
                        <img src="../assets/images/search-white.svg" alt="Search"/>
                    </button>
                </td>
                <td class="light-red-bg"><div class="tip-text">${item.Tip}</div></td>
                <td class="d-flex align-items-center justify-content-center">
                    <span class="red-chip tip-text">${item.Açıklama}</span>
                </td>
                <td ><div class="amount-data">${item.Tutar}</div></td>
                <td ><div class="amount-data">${item.PazaryeriTutarı} </div></td>
                <td ><div class="amount-data">${item.Fark} </div></td>
            </tr>
        `;
        tbody.insertAdjacentHTML('beforeend', row);
    });
}



$(document).ready(function () {
    // Populate table
    populateDetailsTable("detailsTableBody", detailsTableData);

    // Initialize DataTable
    var detailsTable = $('#detailsTable').DataTable({
        pageLength: 20,
        lengthMenu: [10, 20, 30, 50],
        dom: 't<"bottom-bar mt-3"<"custom-controls"lpi>>',
        language: {
            lengthMenu: "_MENU_",
            info: "_START_ - _END_ of _TOTAL_ entries",
            paginate: {
                previous: '<img src="../assets/images/prew.svg" alt="Prev">',
                next: '<img src="../assets/images/next.svg" alt="Next">'
            }
        },
        drawCallback: function () {
            attachRefreshButton('detailsTable');
        },
        initComplete: function () {
            attachRefreshButton('detailsTable');
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

    $('#customSearch').on('keyup', function () {
        detailsTable.search(this.value).draw();
    });

    // Custom sorting arrows
    $('#detailsTable thead th .sort-up').click(function () {
        var colIndex = $(this).closest('th').index();
        detailsTable.order([colIndex, 'asc']).draw();
    });
    $('#detailsTable thead th .sort-down').click(function () {
        var colIndex = $(this).closest('th').index();
        detailsTable.order([colIndex, 'desc']).draw();
    });

});