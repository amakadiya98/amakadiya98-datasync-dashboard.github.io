const productProfitAnalysisTableData = [
    {
        fieldName: "Fiyat",
    },
    {
        fieldName: "Maliyet",
    },
    {
        fieldName: "Komisyon Oranı",
    },
    {
        fieldName: "Komisyon",
    },
    {
        fieldName: "Pazarlama Giderleri",
    },
    {
        fieldName: "Kutu Maliyeti",
    },
    {
        fieldName: "Kargo",
    },
    {
        fieldName: "Fon",
    },
    {
        fieldName: "Brüt Kar TL",
    },
    {
        fieldName: "Net Kar (TL)",
    },
    {
        fieldName: "Net Kar (%)",
    },

];


function populateProductProfitAnalysisTable(tableBodyId, data) {
    const tbody = document.getElementById(tableBodyId);
    data.forEach(item => {
        const row = `
            <tr>
               <td>
                <div class="field-name">
                   ${item.fieldName}
                </div>
                </td>
                <td><div class="number-input"><input type="number" placeholder="0"/><span class="arrows"> <img src="../assets/images/up.svg" class="up" /> <img src="../assets/images/down.svg" class="down"/></span></div></td>
                <td><div class="number-input"><input type="number" placeholder="0"/><span class="arrows"> <img src="../assets/images/up.svg" class="up" /> <img src="../assets/images/down.svg" class="down"/></span></div></td>
                <td><div class="number-input"><input type="number" placeholder="0"/><span class="arrows"> <img src="../assets/images/up.svg" class="up" /> <img src="../assets/images/down.svg" class="down"/></span></div></td>
                <td><div class="number-input"><input type="number" placeholder="0"/><span class="arrows"> <img src="../assets/images/up.svg" class="up" /> <img src="../assets/images/down.svg" class="down"/></span></div></td>
                <td><div class="number-input"><input type="number" placeholder="0"/><span class="arrows"> <img src="../assets/images/up.svg" class="up" /> <img src="../assets/images/down.svg" class="down"/></span></div></td>
                <td><div class="number-input"><input type="number" placeholder="0"/><span class="arrows"> <img src="../assets/images/up.svg" class="up" /> <img src="../assets/images/down.svg" class="down"/></span></div></td>
                <td><div class="number-input"><input type="number" placeholder="0"/><span class="arrows"> <img src="../assets/images/up.svg" class="up" /> <img src="../assets/images/down.svg" class="down"/></span></div></td>
                <td><div class="number-input"><input type="number" placeholder="0"/><span class="arrows"> <img src="../assets/images/up.svg" class="up" /> <img src="../assets/images/down.svg" class="down"/></span></div></td>
                <td><div class="number-input"><input type="number" placeholder="0"/><span class="arrows"> <img src="../assets/images/up.svg" class="up" /> <img src="../assets/images/down.svg" class="down"/></span></div></td>
                <td><div class="number-input"><input type="number" placeholder="0"/><span class="arrows"> <img src="../assets/images/up.svg" class="up" /> <img src="../assets/images/down.svg" class="down"/></span></div></td>
               
            </tr>
        `;
        tbody.insertAdjacentHTML('beforeend', row);
    });
}



$(document).ready(function () {
    // Populate table
    populateProductProfitAnalysisTable("productProfitAnalysisBody", productProfitAnalysisTableData);

     $(document).on('click', '.number-input .up', function () {
        const input = $(this).closest('.number-input').find('input');
        let value = parseFloat(input.val()) || 0;
        input.val(value + 1);
    });

    $(document).on('click', '.number-input .down', function () {
        const input = $(this).closest('.number-input').find('input');
        let value = parseFloat(input.val()) || 0;
        input.val(value - 1);
    });
});