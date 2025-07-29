const CampaignData = [
    { marketplaceName: 'marketplace1.svg', Title: 'Mayıs Kampanyası_V2', date: '27/04/25  18:25 - 30/04/25  19:30' },
    { marketplaceName: 'marketplace2.svg', Title: 'Mayıs Kampanyası_V2', date: '27/04/25  18:25 - 30/04/25  19:30' },
];

// Function to fill table body from array
function populateCampaignTable(tableBodyId, data) {
    const tbody = document.getElementById(tableBodyId);
    data.forEach(item => {
        const row = `
            <tr>
                <td><div class="text-center"><img src="../assets/images/${item.marketplaceName}" alt="Marketplace" class="table-logo"/></div></td>
                <td><div class="title">${item.Title}</div></td>
                <td><div class="categories-tag">${item.date}</div></td>
                <td>
                    <button class='search-btn'>
                        <img src="../assets/images/search-white.svg" alt="Search"/>
                    </button>
                </td>
            </tr>`;
        tbody.insertAdjacentHTML('beforeend', row);
    });
}

$(document).ready(function () {
    // Populate table body
    populateCampaignTable("compaignTableBody", CampaignData);

    // Initialize DataTable
    var CampaignTable = $('#compaignTable').DataTable({
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
            attachRefreshButton('compaignTable');
        },
        initComplete: function () {
            attachRefreshButton('compaignTable');
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
        CampaignTable.search(this.value).draw();
    });

    // Custom sorting arrows
    $('#compaignTable thead th .sort-up').click(function () {
        var colIndex = $(this).closest('th').index();
        CampaignTable.order([colIndex, 'asc']).draw();
    });
    $('#compaignTable thead th .sort-down').click(function () {
        var colIndex = $(this).closest('th').index();
        CampaignTable.order([colIndex, 'desc']).draw();
    });

    $('.filter-btn').click(function () {
        alert('Open filter for ' + $(this).closest('th').text());
    });
});