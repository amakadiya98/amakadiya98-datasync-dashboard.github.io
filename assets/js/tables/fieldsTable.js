$(document).ready(function () {
  $(document).on("click", ".dropdown-container", function (e) {
    if ($(e.target).closest(".close-btn").length > 0) {
      return;
    }

    e.stopPropagation();

    const container = $(this).closest(".options-container");
    const menu = container.find(".fields-show");

    $(".fields-show").not(menu).hide();
    menu.show();
  });

  $(document).on("click", ".close-btn", function (e) {
    e.stopPropagation();
    const container = $(this).closest(".options-container");
    container.find(".fields-show").hide();
  });

  $(document).on("click", ".fields-show", function (e) {
    e.stopPropagation();
  });

  $(document).on("click", ".menu-item", function () {
    const container = $(this).closest(".options-container");

    container.find(".menu-item").removeClass("active");
    $(this).addClass("active");

    container.find(".submenu-content").removeClass("active");
    container.find($(this).data("target")).addClass("active");
  });

  $(document).on("click", function () {
    $(".fields-show").hide();
  });
    $(document).on("click", ".filter-icon", function (e) {
    e.stopPropagation();
    const container = $(".types-of-fields .options-container");
    const menu = container.find(".fields-show");

    $(".fields-show").not(menu).hide();
    menu.show();
  });
});

// table js

// Fake data arrays
const table1Data = [
  { Pazaryeri: "96K", satışFiyatı: 1795, netKar: '96K', netKarOranı: "1795" },
  { Pazaryeri: "96K", satışFiyatı: 1795, netKar: '96K', netKarOranı: "1795" },
  { Pazaryeri: "96K", satışFiyatı: 1795, netKar: '96K', netKarOranı: "1795" },
  // ...add more rows
];

// Function to fill table body from array
function populateTable(tableBodyId, data) {
  const tbody = document.getElementById(tableBodyId);
  data.forEach(item => {
    const row = `
            <tr>
                <td><div class="amount-data">${item.Pazaryeri}</div></td>
                <td class="price-data"><div class="amount-data">${item.satışFiyatı}</div></td>
                <td><div class="amount-data">${item.netKar}</div></td>
                <td>
                    <div class="amount-data">
                            ${item.netKarOranı}
                        </div>
                    </div>
                </td>
            </tr>`;
    tbody.insertAdjacentHTML('beforeend', row);
  });
}

$(document).ready(function () {
  // Populate table
  populateTable("currentPriceTableBody", table1Data);

  // Initialize DataTable
  var table1 = $('#currentPriceTable').DataTable({
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
      attachRefreshButton('currentPriceTable');
    },
    initComplete: function () {
      attachRefreshButton('currentPriceTable');
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
    table1.search(this.value).draw();
  });

  // Custom sorting arrows
  $('#currentPriceTable thead th .sort-up').click(function () {
    var colIndex = $(this).closest('th').index();
    table1.order([colIndex, 'asc']).draw();
  });
  $('#currentPriceTable thead th .sort-down').click(function () {
    var colIndex = $(this).closest('th').index();
    table1.order([colIndex, 'desc']).draw();
  });

  $('.filter-btn').click(function () {
    alert('Open filter for ' + $(this).closest('th').text());
  });
});
