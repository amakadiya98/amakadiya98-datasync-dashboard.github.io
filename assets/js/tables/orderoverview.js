// Fake data arrays
const orderOverviewData = [
    { İşlemler: "../assets/images/table/search.svg", Tarih: '16/06/2025 11:59:46', Başlık: '04-06-2025_192358 - 49448818 TRENDYOL Marketplace Ödeme', Toplamtutar: '₺ 367K', Durum: [{ text: "Sorun Bulundu" }], Özet: ['Tutar Farklı: 120', 'Mükerrer: 7', 'Başarılı: 4386'] },
    { İşlemler: "../assets/images/table/search.svg", Tarih: '16/06/2025 11:59:46', Başlık: '04-06-2025_192358 - 49448818 TRENDYOL Marketplace Ödeme', Toplamtutar: '₺ 367K', Durum: [{ text: "Dosya Seç" }, { text: "Veriyi Getir", icon: "../assets/images/filter-arrow.svg" }], Özet: [] },
];

// Function to fill table body from array
function populateOrderOverviewTable(tableBodyId, data) {
    const tbody = document.getElementById(tableBodyId);
    data.forEach(item => {
        let startDatePart = '';
        let startTimePart = '';
        let mainTitle = '';
        let subTitle = '';
        let durumButtonsHTML = '';
        let ozetHTML = '<div class="ozet-btn-container">';
        if (item.Tarih) {
            [startDatePart, startTimePart] = item.Tarih.split(' ');
        }

        if (item.Başlık) {
            const splitIndex = item.Başlık.indexOf('TRENDYOL');
            if (splitIndex !== -1) {
                mainTitle = item.Başlık.substring(0, splitIndex).trim();
                subTitle = item.Başlık.substring(splitIndex).trim();
            } else {
                mainTitle = item.Başlık;
                subTitle = '';
            }
        }
        durumButtonsHTML = '<div class="durum-btn-container">';
        item.Durum.forEach(btn => {
            if (typeof btn === 'string') {
                durumButtonsHTML += `<button class="durum-btn">${btn}</button>`;
            } else {
                let className = '';
                if (btn.text === "Sorun Bulundu") className = 'sorun';
                else if (btn.text === "Dosya Seç") className = 'dosya-sec';
                else if (btn.text === "Veriyi Getir") className = 'veri-getir';

                durumButtonsHTML += `
            <button class="durum-btn with-icon ${className}">
                ${btn.icon ? `<img src="${btn.icon}" alt="icon" class="btn-icon" />` : ""}
                ${btn.text}
            </button>
        `;
            }
        });
        durumButtonsHTML += '</div>';

        item.Özet.forEach((ozet, index) => {
            let className = '';
            if (index === 0) className = 'ozet-yellow';
            else if (index === 1) className = 'ozet-red';
            else if (index === 2) className = 'ozet-green';

            ozetHTML += `<button class="ozet-btn ${className}">${ozet}</button>`;
        });
        ozetHTML += '</div>';
        const row = `
            <tr>
                <td>
                 <button class='search-btn'>
                        <img src="../assets/images/search-white.svg" alt="Search"/>
                 </button>
                </td>
                  <td>
                    <div class="amount-data">
                        ${startDatePart} <span class="time-part">${startTimePart}</span>
                    </div>
                </td>
                    <td>
                    <div class="amount-data">
                        ${mainTitle} <span class="time-part">${subTitle}</span>
                    </div>
                </td>
                <td><div class="amount-data">${item.Toplamtutar}</div></td>
               <td>${durumButtonsHTML}</td>
                 <td><div class="amount-data">${ozetHTML}</div></td>
       
            </tr>`;
        tbody.insertAdjacentHTML('beforeend', row);
    });
}

$(document).ready(function () {
    // Populate table
    populateOrderOverviewTable("orderoverviewBody", orderOverviewData);

    // Initialize DataTable
    var OrderOverviewTable = $('#orderoverview').DataTable({
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
            attachRefreshButton('orderoverview');
        },
        initComplete: function () {
            attachRefreshButton('orderoverview');
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
        OrderOverviewTable.search(this.value).draw();
    });

    // Custom sorting arrows
    $('#orderoverview thead th .sort-up').click(function () {
        var colIndex = $(this).closest('th').index();
        OrderOverviewTable.order([colIndex, 'asc']).draw();
    });
    $('#orderoverview thead th .sort-down').click(function () {
        var colIndex = $(this).closest('th').index();
        OrderOverviewTable.order([colIndex, 'desc']).draw();
    });

    $('.filter-btn').click(function () {
        alert('Open filter for ' + $(this).closest('th').text());
    });
});

  document.querySelectorAll('.brand-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.brand-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });