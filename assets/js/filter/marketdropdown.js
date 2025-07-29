// filter12 js
function setupMultiDropdown(selectorId, dropdownId, selectedTextId, confirmBtnId) {
  const selector = document.getElementById(selectorId);
  const dropdown = document.getElementById(dropdownId);
  const selectedText = document.getElementById(selectedTextId);
  const confirmBtn = document.getElementById(confirmBtnId);
  const arrow = selector.querySelector("img") || selector;
  let selectedValues = [];

  selector.addEventListener("click", function (e) {
    e.stopPropagation();
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  });

  dropdown.querySelectorAll(".option").forEach(option => {
    option.addEventListener("click", function () {
      const value = this.textContent.trim();

      if (!selectedValues.includes(value)) {
        selectedValues.push(value);
      } else {
        selectedValues = selectedValues.filter(v => v !== value);
      }

      renderSelectedValues();
    });
  });

  confirmBtn.addEventListener("click", function () {
    dropdown.style.display = "none";
  });

  function renderSelectedValues() {
    selectedText.innerHTML = "";

    if (selectedValues.length > 0) {
      selectedText.classList.add("has-value");

      selectedValues.forEach(val => {
        const tag = document.createElement("span");
        tag.classList.add("tag");

        const tagText = document.createElement("span");
        tagText.textContent = val;

        const removeIcon = document.createElement("span");
        removeIcon.classList.add("remove-tag");
        removeIcon.textContent = "×";

        removeIcon.addEventListener("click", function (e) {
          e.stopPropagation();
          selectedValues = selectedValues.filter(v => v !== val);
          renderSelectedValues();
        });

        tag.appendChild(tagText);
        tag.appendChild(removeIcon);
        selectedText.appendChild(tag);
      });

      if (arrow) arrow.parentElement.classList.add("hidden");

    } else {
      selectedText.classList.remove("has-value");
      selectedText.textContent = "Seçiniz";

      if (arrow) arrow.parentElement.classList.remove("hidden");
    }
  }
}

setupMultiDropdown("Marketplace1", "dropdown1", "selectedText1", "confirmBtn1");
setupMultiDropdown("Marketplace2", "dropdown2", "selectedText2", "confirmBtn2");
setupMultiDropdown("Marketplace3", "dropdown3", "selectedText3", "confirmBtn3");


const selector = document.getElementById("contentDiv");
const dropdown = document.getElementById("dropdown");
const selectedText = document.getElementById("selectedText");
const slideContent = document.getElementById("slideContent");

selector.addEventListener("click", function (e) {
  e.stopPropagation();
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

dropdown.querySelectorAll(".option").forEach(option => {
  option.addEventListener("click", function () {
    selectedText.textContent = this.textContent;
    selectedText.classList.add("blue");
    dropdown.style.display = "none";
    slideContent.style.display = "flex";
  });
});

document.addEventListener("click", function (e) {
  dropdown.style.display = "none";
  for (let i = 1; i <= 3; i++) {
    const dd = document.getElementById("dropdown" + i);
    if (dd && !dd.contains(e.target)) {
      dd.style.display = "none";
    }
  }
});

