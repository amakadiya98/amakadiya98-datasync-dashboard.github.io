function toggleCard(el) {
  const card = el.closest(".cardtype2-card");
  const isActive = card.getAttribute("data-active") === "true";
  card.setAttribute("data-active", !isActive);
}

document.addEventListener("DOMContentLoaded", function () {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl, {
      delay: { show: 0, hide: 100 },  
      animation: false,               
      trigger: 'hover focus'    
    });
  });
});


