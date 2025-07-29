// Fake data arrays
const table1Data = [
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1001", marka: "ALDOMON", adet: 6792, gelir: 1794, netKar: 3623, netKarYuzde: "10.15%", degisim: "479,42", degisimDown: "-26.84", Stok: '1914' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1002", marka: "ALDOMON", adet: 4890, gelir: 2100, netKar: 3120, netKarYuzde: "9.85%", degisim: "479,42", degisimDown: "-26.84", Stok: '600' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1003", marka: "MARKA A", adet: 7200, gelir: 2500, netKar: 4100, netKarYuzde: "12.1%", degisim: "479,42", degisimDown: "-26.84", Stok: '-59' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1004", marka: "MARKA B", adet: 6600, gelir: 1900, netKar: 2800, netKarYuzde: "8.9%", degisim: "479,42", degisimDown: "-26.84", Stok: '1914' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1001", marka: "ALDOMON", adet: 6792, gelir: 1794, netKar: 3623, netKarYuzde: "10.15%", degisim: "479,42", degisimDown: "-26.84", Stok: '600' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1002", marka: "ALDOMON", adet: 4890, gelir: 2100, netKar: 3120, netKarYuzde: "9.85%", degisim: "479,42", degisimDown: "-26.84", Stok: '-59' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1001", marka: "ALDOMON", adet: 6792, gelir: 1794, netKar: 3623, netKarYuzde: "10.15%", degisim: "479,42", degisimDown: "-26.84", Stok: '1914' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1002", marka: "ALDOMON", adet: 4890, gelir: 2100, netKar: 3120, netKarYuzde: "9.85%", degisim: "479,42", degisimDown: "-26.84", Stok: '600' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1003", marka: "MARKA A", adet: 7200, gelir: 2500, netKar: 4100, netKarYuzde: "12.1%", degisim: "479,42", degisimDown: "-26.84", Stok: '-59' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1004", marka: "MARKA B", adet: 6600, gelir: 1900, netKar: 2800, netKarYuzde: "8.9%", degisim: "479,42", degisimDown: "-26.84", Stok: '1914' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1001", marka: "ALDOMON", adet: 6792, gelir: 1794, netKar: 3623, netKarYuzde: "10.15%", degisim: "479,42", degisimDown: "-26.84", Stok: '600' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1002", marka: "ALDOMON", adet: 4890, gelir: 2100, netKar: 3120, netKarYuzde: "9.85%", degisim: "479,42", degisimDown: "-26.84", Stok: '-59' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1001", marka: "ALDOMON", adet: 6792, gelir: 1794, netKar: 3623, netKarYuzde: "10.15%", degisim: "479,42", degisimDown: "-26.84", Stok: '1914' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1002", marka: "ALDOMON", adet: 4890, gelir: 2100, netKar: 3120, netKarYuzde: "9.85%", degisim: "479,42", degisimDown: "-26.84", Stok: '600' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1003", marka: "MARKA A", adet: 7200, gelir: 2500, netKar: 4100, netKarYuzde: "12.1%", degisim: "479,42", degisimDown: "-26.84", Stok: '-59' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1004", marka: "MARKA B", adet: 6600, gelir: 1900, netKar: 2800, netKarYuzde: "8.9%", degisim: "479,42", degisimDown: "-26.84", Stok: '1914' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1001", marka: "ALDOMON", adet: 6792, gelir: 1794, netKar: 3623, netKarYuzde: "10.15%", degisim: "479,42", degisimDown: "-26.84", Stok: '600' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1002", marka: "ALDOMON", adet: 4890, gelir: 2100, netKar: 3120, netKarYuzde: "9.85%", degisim: "479,42", degisimDown: "-26.84", Stok: '-59' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1001", marka: "ALDOMON", adet: 6792, gelir: 1794, netKar: 3623, netKarYuzde: "10.15%", degisim: "479,42", degisimDown: "-26.84", Stok: '1914' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1002", marka: "ALDOMON", adet: 4890, gelir: 2100, netKar: 3120, netKarYuzde: "9.85%", degisim: "479,42", degisimDown: "-26.84", Stok: '600' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1003", marka: "MARKA A", adet: 7200, gelir: 2500, netKar: 4100, netKarYuzde: "12.1%", degisim: "479,42", degisimDown: "-26.84", Stok: '-59' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1004", marka: "MARKA B", adet: 6600, gelir: 1900, netKar: 2800, netKarYuzde: "8.9%", degisim: "479,42", degisimDown: "-26.84", Stok: '1914' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1001", marka: "ALDOMON", adet: 6792, gelir: 1794, netKar: 3623, netKarYuzde: "10.15%", degisim: "479,42", degisimDown: "-26.84", Stok: '600' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1002", marka: "ALDOMON", adet: 4890, gelir: 2100, netKar: 3120, netKarYuzde: "9.85%", degisim: "479,42", degisimDown: "-26.84", Stok: '-59' },
    // ...add 20+ rows here
];

const table2Data = [
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1001", marka: "ALDOMON", adet: 6792, gelir: 1794, netKar: 3623, netKarYuzde: "10.15%", degisim: "479,42", degisimDown: "-26.84", Stok: '1914' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1002", marka: "ALDOMON", adet: 4890, gelir: 2100, netKar: 3120, netKarYuzde: "9.85%", degisim: "479,42", degisimDown: "-26.84", Stok: '600' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1003", marka: "MARKA A", adet: 7200, gelir: 2500, netKar: 4100, netKarYuzde: "12.1%", degisim: "479,42", degisimDown: "-26.84", Stok: '-59' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1004", marka: "MARKA B", adet: 6600, gelir: 1900, netKar: 2800, netKarYuzde: "8.9%", degisim: "479,42", degisimDown: "-26.84", Stok: '1914' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1001", marka: "ALDOMON", adet: 6792, gelir: 1794, netKar: 3623, netKarYuzde: "10.15%", degisim: "479,42", degisimDown: "-26.84", Stok: '600' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1002", marka: "ALDOMON", adet: 4890, gelir: 2100, netKar: 3120, netKarYuzde: "9.85%", degisim: "479,42", degisimDown: "-26.84", Stok: '-59' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1001", marka: "ALDOMON", adet: 6792, gelir: 1794, netKar: 3623, netKarYuzde: "10.15%", degisim: "479,42", degisimDown: "-26.84", Stok: '1914' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1002", marka: "ALDOMON", adet: 4890, gelir: 2100, netKar: 3120, netKarYuzde: "9.85%", degisim: "479,42", degisimDown: "-26.84", Stok: '600' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1003", marka: "MARKA A", adet: 7200, gelir: 2500, netKar: 4100, netKarYuzde: "12.1%", degisim: "479,42", degisimDown: "-26.84", Stok: '-59' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1004", marka: "MARKA B", adet: 6600, gelir: 1900, netKar: 2800, netKarYuzde: "8.9%", degisim: "479,42", degisimDown: "-26.84", Stok: '1914' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1001", marka: "ALDOMON", adet: 6792, gelir: 1794, netKar: 3623, netKarYuzde: "10.15%", degisim: "479,42", degisimDown: "-26.84", Stok: '600' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1002", marka: "ALDOMON", adet: 4890, gelir: 2100, netKar: 3120, netKarYuzde: "9.85%", degisim: "479,42", degisimDown: "-26.84", Stok: '-59' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1001", marka: "ALDOMON", adet: 6792, gelir: 1794, netKar: 3623, netKarYuzde: "10.15%", degisim: "479,42", degisimDown: "-26.84", Stok: '1914' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1002", marka: "ALDOMON", adet: 4890, gelir: 2100, netKar: 3120, netKarYuzde: "9.85%", degisim: "479,42", degisimDown: "-26.84", Stok: '600' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1003", marka: "MARKA A", adet: 7200, gelir: 2500, netKar: 4100, netKarYuzde: "12.1%", degisim: "479,42", degisimDown: "-26.84", Stok: '-59' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1004", marka: "MARKA B", adet: 6600, gelir: 1900, netKar: 2800, netKarYuzde: "8.9%", degisim: "479,42", degisimDown: "-26.84", Stok: '1914' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1001", marka: "ALDOMON", adet: 6792, gelir: 1794, netKar: 3623, netKarYuzde: "10.15%", degisim: "479,42", degisimDown: "-26.84", Stok: '600' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1002", marka: "ALDOMON", adet: 4890, gelir: 2100, netKar: 3120, netKarYuzde: "9.85%", degisim: "479,42", degisimDown: "-26.84", Stok: '-59' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1001", marka: "ALDOMON", adet: 6792, gelir: 1794, netKar: 3623, netKarYuzde: "10.15%", degisim: "479,42", degisimDown: "-26.84", Stok: '1914' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1002", marka: "ALDOMON", adet: 4890, gelir: 2100, netKar: 3120, netKarYuzde: "9.85%", degisim: "479,42", degisimDown: "-26.84", Stok: '600' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1003", marka: "MARKA A", adet: 7200, gelir: 2500, netKar: 4100, netKarYuzde: "12.1%", degisim: "479,42", degisimDown: "-26.84", Stok: '-59' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1004", marka: "MARKA B", adet: 6600, gelir: 1900, netKar: 2800, netKarYuzde: "8.9%", degisim: "479,42", degisimDown: "-26.84", Stok: '1914' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1001", marka: "ALDOMON", adet: 6792, gelir: 1794, netKar: 3623, netKarYuzde: "10.15%", degisim: "479,42", degisimDown: "-26.84", Stok: '600' },
    { productImg: '../assets/images/product.png', tag1: '../assets/images/product-tag.png', tag2: '../assets/images/product-tag2.png', tag3: '../assets/images/product-tag3.png', tag4: '../assets/images/product-tag4.png', urun: "ÜR1002", marka: "ALDOMON", adet: 4890, gelir: 2100, netKar: 3120, netKarYuzde: "9.85%", degisim: "479,42", degisimDown: "-26.84", Stok: '-59' },
];

// Function to fill table body from array
function populateTable(tableBodyId, data) {
    const tbody = document.getElementById(tableBodyId);
    data.forEach(item => {
        const row = `
            <tr>
                <td class="extra-cell"><img src="${item.productImg}" alt="icon" class="product-image"></td>
                <td class="product-cell">
                    <div class="product-info">
                        <h4 class="product-id">${item.urun}</h4>
                        <div class="platform-logos">
                            <img src="${item.tag1}" alt="icon">
                            <img src="${item.tag2}" alt="icon">
                            <img src="${item.tag3}" alt="icon">
                            <img src="${item.tag4}" alt="icon">
                        </div>
                    </div>
                    <p class="product-desc">
                        Munchkin Tıklama Kilitli Uçlu Alıştırma Bardağı, 6ay+207ml Yeşil
                    </p>
                    <div class="product-actions">
                        <button class="price-btn">Fiyat Hesaplama</button>
                        <button class="performance-btn">Ürün Performans</button>
                    </div>
                </td>
                <td class="marka"><h3>${item.marka}</h3></td>
                <td class="price-data">
                    <div class="amount-data">
                        ₺${item.adet}
                        <div class="${parseFloat(item.degisim) < 0 ? 'red-down' : 'green-up'}">
                            ${parseFloat(item.degisim).toFixed(2)}%
                        </div>
                    </div>
                </td>
                <td>
                    <div class="amount-data">
                        ${item.gelir}
                        <div class="${parseFloat(item.degisimDown) < 0 ? 'red-down' : 'green-up'}">${parseFloat(item.degisimDown).toFixed(2)}%</div>
                    </div>
                </td>
                <td>
                    <div class="amount-data">
                        ${item.netKar}
                        <div class="${parseFloat(item.degisimDown) < 0 ? 'red-down' : 'green-up'}">${parseFloat(item.degisimDown).toFixed(2)}%</div>
                    </div>
                </td>
                <td><div class="amount-data">${item.netKarYuzde}</div></td>
                <td>
                    <div class="amount-data">
                        ${item.netKar}
                        <div class="${parseFloat(item.degisimDown) < 0 ? 'red-down' : 'green-up'}">${parseFloat(item.degisimDown).toFixed(2)}%</div>
                    </div>
                </td>
                <td>
                    <div class="amount-data">
                        ${item.netKar}
                        <div class="${parseFloat(item.degisimDown) < 0 ? 'red-down' : 'green-up'}">${parseFloat(item.degisimDown).toFixed(2)}%</div>
                    </div>
                </td>
                <td>
                    <div class="${parseFloat(item.Stok) < 0 ? 'red-text' : parseFloat(item.Stok) < 1000 ? 'yellow-text' : 'green-text'}">
                        ${item.Stok}
                    </div>
                </td>
            </tr>`;
        tbody.insertAdjacentHTML('beforeend', row);
    });
}

$(document).ready(function () {
    // Populate tables
    populateTable("table1-body", table1Data);
    populateTable("table2-body", table2Data);

    // Function to init DataTable with refresh button
    function initTable(selector, tableId) {
        return $(selector).DataTable({
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
                attachRefreshButton(tableId);
            },
            initComplete: function () {
                attachRefreshButton(tableId);
            }
        });
    }

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

    var table1 = initTable('#table1', 'table1');
    var table2 = initTable('#table2', 'table2');

    // Common search bar
    $('#customSearch').on('keyup', function () {
        var value = this.value;
        if ($('#table1-container').is(':visible')) {
            table1.search(value).draw();
        } else if ($('#table2-container').is(':visible')) {
            table2.search(value).draw();
        }
    });

    // Tab switching
    $('.productSalestab-button').click(function () {
        $('.productSalestab-button').removeClass('active');
        $(this).addClass('active');
        $('#table1-container, #table2-container').hide();
        var target = $('#' + $(this).data('table') + '-container');
        target.show();
        $('#' + $(this).data('table')).DataTable().columns.adjust().draw();
    });

    // Custom sorting arrows
    $('#table1 thead th .sort-up').click(function () {
        var colIndex = $(this).closest('th').index();
        table1.order([colIndex, 'asc']).draw();
    });
    $('#table2 thead th .sort-up').click(function () {
        var colIndex = $(this).closest('th').index();
        table2.order([colIndex, 'asc']).draw();
    });
    $('#table1 thead th .sort-down').click(function () {
        var colIndex = $(this).closest('th').index();
        table1.order([colIndex, 'desc']).draw();
    });
    $('#table2 thead th .sort-down').click(function () {
        var colIndex = $(this).closest('th').index();
        table2.order([colIndex, 'desc']).draw();
    });

    // Filter button alert
    $('.filter-btn').click(function () {
        alert('Open filter for ' + $(this).closest('th').text());
    });
});