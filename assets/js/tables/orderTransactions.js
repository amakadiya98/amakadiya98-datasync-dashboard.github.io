const orderTableData = [
    {
        PazaryeriKargo: [
            { name: "Hepsiburada", src: "../assets/images/table/brand-btn1.svg" },
            { name: "HepsiJET", src: "../assets/images/table/hepsi-jet.svg" }
        ],
        SiparişTürü: "Satış",
        PazaryeriSiparişNo: "4779964464",
        MüşteriAdı: "Sümeyra Akar",
        SiparişTarihi: "16/06/2025 11:59:46",
        PazaryeriSiparişDurumu: "Bilgi Yok",
        SiparişDurumu: "Başarılı",
        TransferDurumu: "Aktarıldı",
        KargoTakipNo: "62755363059849",
        KDVDahilToplamTutar: "₺495,92",
        ToplamMaliyet: "₺386,92",
        KargoMasrafı: "₺74,44",
        Komisyon: "₺112,98",
        KutuMaliyeti: "₺5,50"
    },
    {
        PazaryeriKargo: [
            { name: "Hepsiburada", src: "../assets/images/table/brand-btn1.svg" },
            { name: "HepsiJET", src: "../assets/images/table/hepsi-jet.svg" }
        ],
        SiparişTürü: "Satış",
        PazaryeriSiparişNo: "4779964464",
        MüşteriAdı: "Sümeyra Akar",
        SiparişTarihi: "16/06/2025 11:59:46",
        PazaryeriSiparişDurumu: "Bilgi Yok",
        SiparişDurumu: "Başarılı",
        TransferDurumu: "Aktarıldı",
        KargoTakipNo: "62755363059849",
        KDVDahilToplamTutar: "₺495,92",
        ToplamMaliyet: "₺386,92",
        KargoMasrafı: "₺74,44",
        Komisyon: "₺112,98",
        KutuMaliyeti: "₺5,50"
    },
    {
        PazaryeriKargo: [
            { name: "Hepsiburada", src: "../assets/images/table/brand-btn1.svg" },
            { name: "HepsiJET", src: "../assets/images/table/hepsi-jet.svg" }
        ],
        SiparişTürü: "Satış",
        PazaryeriSiparişNo: "4779964464",
        MüşteriAdı: "Sümeyra Akar",
        SiparişTarihi: "16/06/2025 11:59:46",
        PazaryeriSiparişDurumu: "Bilgi Yok",
        SiparişDurumu: "Başarılı",
        TransferDurumu: "Aktarıldı",
        KargoTakipNo: "62755363059849",
        KDVDahilToplamTutar: "₺495,92",
        ToplamMaliyet: "₺386,92",
        KargoMasrafı: "₺74,44",
        Komisyon: "₺112,98",
        KutuMaliyeti: "₺5,50"
    },
    {
        PazaryeriKargo: [
            { name: "Hepsiburada", src: "../assets/images/table/brand-btn1.svg" },
            { name: "HepsiJET", src: "../assets/images/table/hepsi-jet.svg" }
        ],
        SiparişTürü: "Satış",
        PazaryeriSiparişNo: "4779964464",
        MüşteriAdı: "Sümeyra Akar",
        SiparişTarihi: "16/06/2025 11:59:46",
        PazaryeriSiparişDurumu: "Bilgi Yok",
        SiparişDurumu: "Başarılı",
        TransferDurumu: "Aktarıldı",
        KargoTakipNo: "62755363059849",
        KDVDahilToplamTutar: "₺495,92",
        ToplamMaliyet: "₺386,92",
        KargoMasrafı: "₺74,44",
        Komisyon: "₺112,98",
        KutuMaliyeti: "₺5,50"
    },
    {
        PazaryeriKargo: [
            { name: "Hepsiburada", src: "../assets/images/table/brand-btn1.svg" },
            { name: "HepsiJET", src: "../assets/images/table/hepsi-jet.svg" }
        ],
        SiparişTürü: "Satış",
        PazaryeriSiparişNo: "4779964464",
        MüşteriAdı: "Sümeyra Akar",
        SiparişTarihi: "16/06/2025 11:59:46",
        PazaryeriSiparişDurumu: "Bilgi Yok",
        SiparişDurumu: "Başarılı",
        TransferDurumu: "Aktarıldı",
        KargoTakipNo: "62755363059849",
        KDVDahilToplamTutar: "₺495,92",
        ToplamMaliyet: "₺386,92",
        KargoMasrafı: "₺74,44",
        Komisyon: "₺112,98",
        KutuMaliyeti: "₺5,50"
    },
];


function populateOrderTransactionTable(tableBodyId, data) {
    const tbody = document.getElementById(tableBodyId);
    data.forEach(item => {
        const kargoImages = item.PazaryeriKargo.map(k =>
            `<img src="${k.src}" alt="${k.name}" class="kargo-logo"/>`
        ).join(' ');

        const row = `
            <tr>
                <td>
                  <div class="d-flex flex-column justify-content-center align-items-center gap-3">
                    ${kargoImages}
                  </div>
                </td>
                <td><div class="amount-data">${item.SiparişTürü}</div></td>
                <td><div class="chip">${item.PazaryeriSiparişNo}</div></td>
                <td><div class="amount-data">${item.MüşteriAdı}</div></td>
                <td> <div class="amount-data d-flex flex-column text-center">
                       <span class="date-text">${item.SiparişTarihi.split(" ")[0]}</span>
                       <span class='date-text time-text'>${item.SiparişTarihi.split(" ")[1]}</span>
                     </div></td>
                <td><div class="chip wide">${item.PazaryeriSiparişDurumu}</div></td>
                <td><div class="chip green">${item.SiparişDurumu}</div></td>
                <td><div class="chip green">${item.TransferDurumu}</div></td>
                <td><div class="chip">${item.KargoTakipNo}</div></td>
                <td><div class="amount-data">${item.KDVDahilToplamTutar}</div></td>
                <td><div class="amount-data">${item.ToplamMaliyet}</div></td>
                <td><div class="amount-data">${item.KargoMasrafı}</div></td>
                <td><div class="amount-data">${item.Komisyon}</div></td>
                <td><div class="amount-data">${item.KutuMaliyeti}</div></td>
            </tr>
        `;
        tbody.insertAdjacentHTML('beforeend', row);
    });
}


$(document).ready(function () {
    // Populate table
    populateOrderTransactionTable("orderTransactionsBody", orderTableData);

    // Initialize DataTable
    var orderTransactionstable = $('#orderTransactions').DataTable({
        pageLength: 20,
        lengthMenu: [10, 20, 30, 50],
        dom: 't<"bottom-bar mt-3"<"custom-controls"lpi>>',
        language: {
            lengthMenu: "_MENU_",
            info: "_START_ - _END_ of _TOTAL_ içerikten",
            paginate: {
                previous: '<img src="../assets/images/prew.svg" alt="Prev">',
                next: '<img src="../assets/images/next.svg" alt="Next">',
            }
        },
    });

});