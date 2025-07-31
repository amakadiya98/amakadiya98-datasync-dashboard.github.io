//   fixed daterange 
document.addEventListener("DOMContentLoaded", function () {
  flatpickr(".global-daterange", {
    mode: "range",
    enableTime: true,
    dateFormat: "d/m/y H:i",
    time_24hr: true,
    locale: {
      rangeSeparator: " - ",
    },
    onClose: function (selectedDates, dateStr, instance) {
      if (selectedDates.length === 2) {
        const formatted = formatDate(selectedDates[0]) + " - " + formatDate(selectedDates[1]);
        instance.input.value = formatted;
      }
    }
  });
  function formatDate(date) {
    const d = String(date.getDate()).padStart(2, '0');
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const y = String(date.getFullYear()).slice(2);
    const h = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    return `${d}/${m}/${y} ${h}:${min}`;
  }
});


$(document).ready(function () {
  $('.custom-dropdown').on('click', function (e) {
    e.stopPropagation();
    const wrapper = $(this).closest('.custom-dropdown-wrapper');
    const menu = wrapper.find('.dropdown-menu');

    // Hide others
    $('.dropdown-menu').not(menu).hide();
    $('.custom-dropdown-wrapper').not(wrapper).removeClass('active');

    // Toggle current
    const isVisible = menu.is(':visible');
    menu.toggle();
    wrapper.toggleClass('active', !isVisible);
  });

  $('.dropdown-menu li').on('click', function (e) {
    e.stopPropagation();
    const key = $(this).data('key');
    const label = $(this).text();
    const wrapper = $(this).closest('.custom-dropdown-wrapper');

    wrapper.find('.dropdown-label').text(label);

    if (typeof datasetMap !== 'undefined' && key in datasetMap) {
      chart.data.datasets[1].label = label;
      chart.data.datasets[1].data = datasetMap[key];
      chart.update();
    }

    wrapper.find('.dropdown-menu').hide();
    wrapper.removeClass('active');
  });

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.custom-dropdown-wrapper').length) {
      $('.dropdown-menu').hide();
      $('.custom-dropdown-wrapper').removeClass('active');
    }
  });

  $('#exportExcel').click(function () {
    alert("Export to Notes/PDF coming soon.");
  });
});







document.querySelectorAll('.btn-filter-tab').forEach(tabGroup => {
  tabGroup.addEventListener('click', function (e) {
    const clickedBtn = e.target.closest('button');
    if (!clickedBtn) return;

    // Remove active from all buttons inside the same group
    tabGroup.querySelectorAll('button').forEach(btn => {
      btn.classList.remove('active');
    });

    // Add active to the clicked one
    clickedBtn.classList.add('active');
  });
});
