function toggleCard(el) {
  const card = el.closest(".cardtype2-card");
  const isActive = card.getAttribute("data-active") === "true";
  card.setAttribute("data-active", !isActive);
}

// Initialize all Bootstrap tooltips
document.addEventListener("DOMContentLoaded", function () {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })
});
