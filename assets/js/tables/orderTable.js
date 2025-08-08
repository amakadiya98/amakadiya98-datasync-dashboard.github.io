const orderTableData = [
    { SiparişNo: 3366299 },
    { SiparişNo: 3366299 },
    { SiparişNo: 3366299 },
    { SiparişNo: 3366299 },
    { SiparişNo: 3366299 },
    { SiparişNo: 3366299 },
    { SiparişNo: 3366299 },
    { SiparişNo: 3366299 },
    { SiparişNo: 3366299 },
    { SiparişNo: 3366299 },
    { SiparişNo: 3366299 },
    { SiparişNo: 3366299 },
    { SiparişNo: 3366299 },
    { SiparişNo: 3366299 },
    { SiparişNo: 3366299 },
    { SiparişNo: 3366299 },
    { SiparişNo: 3366299 },
    { SiparişNo: 3366299 },
    { SiparişNo: 3366299 },
    { SiparişNo: 3366299 },
    { SiparişNo: 3366299 },
    { SiparişNo: 3366299 },
    { SiparişNo: 3366299 },
    { SiparişNo: 3366299 },
];



function orderDetailsTable(tableBodyId, data) {
    const tbody = document.getElementById(tableBodyId);
    data.forEach(item => {
        const row = `
            <tr>
                <td ><div class="amount-data">${item.SiparişNo} </div></td>
            </tr>
        `;
        tbody.insertAdjacentHTML('beforeend', row);
    });
}



$(document).ready(function () {
    // Populate table
    orderDetailsTable("orderTableBody", orderTableData);

    // Initialize DataTable
    var orderTable = $('#orderTable').DataTable({
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
            attachRefreshButton('orderTable');
        },
        initComplete: function () {
            attachRefreshButton('orderTable');
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
        orderTable.search(this.value).draw();
    });
    $('#filterSearch').on('keyup', function () {
        orderTable.search(this.value).draw();
    });


    // Custom sorting arrows
    $('#orderTable thead th .sort-up').click(function () {
        var colIndex = $(this).closest('th').index();
        orderTable.order([colIndex, 'asc']).draw();
    });
    $('#orderTable thead th .sort-down').click(function () {
        var colIndex = $(this).closest('th').index();
        orderTable.order([colIndex, 'desc']).draw();
    });

     new Sortable(availableFields, {
        group: 'chips',
        animation: 150
    });

    new Sortable(selectedFields, {
        group: 'chips',
        animation: 150
    });

});