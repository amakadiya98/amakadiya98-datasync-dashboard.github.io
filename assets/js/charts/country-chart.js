const countrydata = {
    country: [
        { flag: "../assets/images/Flags.svg", name: "Türkiye", count: 15774 },
        { flag: "../assets/images/flags1.svg", name: "ABD", count: 15774 },
        { flag: "../assets/images/Flags2.svg", name: "Almanya", count: 15774 },
        { flag: "../assets/images/flags3.svg", name: "Irak", count: 15774 },
        { flag: "../assets/images/Flags4.svg", name: "Çin", count: 15774 },
        { flag: "../assets/images/Flags4.svg", name: "Diğer", count: 15774 },
    ],
    cityname: [
        { flag: "../assets/images/flags1.svg", name: "İstanbul", count: 10000 },
        { flag: "../assets/images/Flags2.svg", name: "Ankara", count: 9000 },
        { flag: "../assets/images/flags3.svg", name: "İzmir", count: 8500 },
        { flag: "../assets/images/Flags4.svg", name: "Berlin", count: 7700 },
        { flag: "../assets/images/Flags4.svg", name: "New York", count: 7400 },
        { flag: "../assets/images/Flags4.svg", name: "New York", count: 7400 },

    ]
};

function renderList(type = "country") {
    const listContainer = document.getElementById("location-list");
    listContainer.innerHTML = "";

    countrydata[type].forEach(item => {
        const div = document.createElement("div");
        div.className = "location-row";

        div.innerHTML = `
         <div class="country-info-box">
  ${item.flag
                ? `<div class="country-flag-wrapper"><img src="${item.flag}" alt="${item.name}" class="country-flag"></div>`
                : `<div style="width:40px;height:40px;display:flex;align-items:center;justify-content:center;background:#e5e7eb;border-radius:3px;"></div>`
            }
  <span class="country-name">${item.name}</span>
</div>

          <div class="followers-count">${item.count.toLocaleString("tr-TR")}</div>
        `;
        listContainer.appendChild(div);
    });
}

function filterBy(type) {
    document.querySelectorAll('.btn-toggle').forEach(btn => btn.classList.remove('active'));
    if (type === 'country') {
        document.querySelectorAll('.btn-toggle')[0].classList.add('active');
    } else {
        document.querySelectorAll('.btn-toggle')[1].classList.add('active');
    }
    renderList(type);
}

renderList(); 