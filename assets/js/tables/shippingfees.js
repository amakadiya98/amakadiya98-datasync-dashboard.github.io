// Fake data arrays
const shippingFeesData = [
    { ÜrünGörsel: "../assets/images/table/shipping-brand.svg", ÜrünKodu: 'Yurtiçi Kargo Marketplace', ÜrünGörselleri: '../assets/images/table/ecommerce-brand.svg', başlangıçtarihi: '16/06/2025 11:59:46',bitiştarihi: '16/06/2025 11:59:46', desi: 0, barem:'Desi', başlangıçdeğeri:'0,00' ,bitişdeğeri:'0,99', fiyat :'₺74,44',  Durum: ['../assets/images/edit.svg', '../assets/images/delete.svg']},
    { ÜrünGörsel:"../assets/images/table/shipping-brand.svg", ÜrünKodu: 'Yurtiçi Kargo Marketplace', ÜrünGörselleri: '../assets/images/table/ecommerce-brand.svg', başlangıçtarihi: '16/06/2025 11:59:46',bitiştarihi: '16/06/2025 11:59:46' , desi: 0, barem:'Desi', başlangıçdeğeri:'0,00' ,bitişdeğeri:'0,99', fiyat :'₺74,44',  Durum: ['../assets/images/edit.svg', '../assets/images/delete.svg'] },
    { ÜrünGörsel:"../assets/images/table/shipping-brand.svg", ÜrünKodu: 'Yurtiçi Kargo Marketplace', ÜrünGörselleri: '../assets/images/table/ecommerce-brand.svg', başlangıçtarihi: '16/06/2025 11:59:46',bitiştarihi: '16/06/2025 11:59:46' , desi: 0, barem:'Desi', başlangıçdeğeri:'0,00' ,bitişdeğeri:'0,99', fiyat :'₺74,44',  Durum: ['../assets/images/edit.svg', '../assets/images/delete.svg'] },
    { ÜrünGörsel:"../assets/images/table/shipping-brand.svg", ÜrünKodu: 'Yurtiçi Kargo Marketplace', ÜrünGörselleri: '../assets/images/table/ecommerce-brand.svg', başlangıçtarihi: '16/06/2025 11:59:46',bitiştarihi: '16/06/2025 11:59:46' , desi: 0, barem:'Desi', başlangıçdeğeri:'0,00' ,bitişdeğeri:'0,99', fiyat :'₺74,44',  Durum: ['../assets/images/edit.svg', '../assets/images/delete.svg'] },
];
// Function to fill table body from array
function populateShippingfeesTable(tableBodyId, data) {
    const tbody = document.getElementById(tableBodyId);
    data.forEach(item => {
      let startDatePart = '';
        let startTimePart = '';
        let endDatePart = '';
        let endTimePart = '';
        if (item.başlangıçtarihi) {
            [startDatePart, startTimePart] = item.başlangıçtarihi.split(' ');
        }
        if (item.bitiştarihi) {
            [endDatePart, endTimePart] = item.bitiştarihi.split(' ');
        }
        const row = `
            <tr>
                <td>
                <img src="${item.ÜrünGörsel}" alt="icon" class="shipping-brand-image"/>
                </td>
                <td><div class="amount-data">${item.ÜrünKodu}</div></td>
                <td><img src="${item.ÜrünGörselleri}" alt="icon" class="shipping-brand-image"/></td>
                    <td>
                    <div class="amount-data">
                        ${startDatePart} <span class="time-part">${startTimePart}</span>
                    </div>
                </td>
                      <td>
                    <div class="amount-data">
                        ${endDatePart} <span class="time-part">${endTimePart}</span>
                    </div>
                </td>
                 <td><div class="amount-data">${item.desi}</div></td>
                 <td><div class="amount-data">${item.barem}</div></td>
                 <td><div class="amount-data">${item.başlangıçdeğeri}</div></td>
                 <td><div class="amount-data">${item.bitişdeğeri}</div></td>
                 <td><div class="amount-data">${item.fiyat}</div></td>
                 <td><div class="shipping-btn-part">
                 <button><img src='../assets/images/table/edit.svg'</button>
                 <button><img src='../assets/images/table/Delete.svg'</button>
                 </div>
                 </td>
            </tr>`;
        tbody.insertAdjacentHTML('beforeend', row);
    });
}
$(document).ready(function () {
    // Populate table
    populateShippingfeesTable("shippingfeesBody", shippingFeesData);
    // Initialize DataTable
    var ShippingfeesTable = $('#shippingfees').DataTable({
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
            attachRefreshButton('shippingfees');
        },
        initComplete: function () {
            attachRefreshButton('shippingfees');
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
        ShippingfeesTable.search(this.value).draw();
    });
    // Custom sorting arrows
    $('#shippingfees thead th .sort-up').click(function () {
        var colIndex = $(this).closest('th').index();
        ShippingfeesTable.order([colIndex, 'asc']).draw();
    });
    $('#shippingfees thead th .sort-down').click(function () {
        var colIndex = $(this).closest('th').index();
        ShippingfeesTable.order([colIndex, 'desc']).draw();
    });
    $('.filter-btn').click(function () {
        alert('Open filter for ' + $(this).closest('th').text());
    });
});
