const productOverviewData = [
  {ÜrünAdı: "Munchkin Tıklama Kilitli Uçlu Alıştırma Bardağı, 6ay+207ml Yeşil",Marka: "Munchkin",Kategori: "ALBARDAK",SatışFiyatı: "18,00",Maliyet: "18,00",KomisyonOranı: "18,00",KomisyonTutarı: "18,00",PazarlamaGideri: "18,00",KutuMaliyeti: "18,00",KargoTutarı: "18,00",BrütKar: "25,00",NetKar: "25,00",NetKarYüzdesi: "%25,00"},
];

function populateProductOverviewTable(tableBodyId, data) {
  const tbody = document.getElementById(tableBodyId);
  tbody.innerHTML = ""; 
  data.forEach(item => {
    const row = `
      <tr>
        <td><div class="amount-title">${item.ÜrünAdı}</div></td>
        <td><div class="amount-data">${item.Marka}</div></td>
        <td><div class="amount-data">${item.Kategori}</div></td>
        <td><div class="amount-btn">${item.SatışFiyatı}</div></td>
        <td><div class="amount-btn">${item.Maliyet}</div></td>
        <td><div class="amount-btn">${item.KomisyonOranı}</div></td>
        <td><div class="amount-btn">${item.KomisyonTutarı}</div></td>
        <td><div class="amount-btn">${item.PazarlamaGideri}</div></td>
        <td><div class="amount-btn">${item.KutuMaliyeti}</div></td>
        <td><div class="amount-btn">${item.KargoTutarı}</div></td>
        <td><div class="amount-data">${item.BrütKar}</div></td>
        <td><div class="amount-data">${item.NetKar}</div></td>
        <td><div class="amount-data">${item.NetKarYüzdesi}</div></td>
      </tr>`;
    tbody.insertAdjacentHTML("beforeend", row);
  });
}

$(document).ready(function () {
    populateProductOverviewTable("productoverviewBody", productOverviewData);

    var ProductOverviewTable = $('#productoverview').DataTable({
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
            attachRefreshButton('productoverview');
        },
        initComplete: function () {
            attachRefreshButton('productoverview');
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

  $("#customSearch2").on("keyup", function () {
    ProductOverviewTable.search(this.value).draw();
  });

  $("#productoverview thead").on("click", ".sort-asc", function () {
    const colIndex = $(this).closest("th").index();
    ProductOverviewTable.order([colIndex, "asc"]).draw();
  });

  $("#productoverview thead").on("click", ".sort-desc", function () {
    const colIndex = $(this).closest("th").index();
    ProductOverviewTable.order([colIndex, "desc"]).draw();
  });
  
});
function downloadExcel() {
  alert('Excel export coming soon — integrate SheetJS or DataTables export plugin.');
}

  document.querySelectorAll('.brand-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.brand-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });