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
    populateTable("table1-body", table1Data,);
    populateTable("table2-body", table2Data);

    // Function to init DataTable with refresh button
    function initTable(selector, tableId) {
        return $(selector).DataTable({
            pageLength: 20,
            lengthMenu: [10, 20, 30, 50],
            dom: 't<"bottom-bar"<"custom-controls"lpi>>',
             ordering: false,
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

    // Filter button alert
    $('.filter-btn').click(function () {
        alert('Open filter for ' + $(this).closest('th').text());
    });


    // custom-dropdownn
// ------------------- FILTER TOGGLE -------------------
document.querySelectorAll('.filter-toggle').forEach(toggle => {
  toggle.addEventListener('click', function (e) {
    e.stopPropagation();

    // Close filter-icon dropdowns when filter-toggle opens
    document.querySelectorAll('.options-container').forEach(c => {
      c.style.display = 'none';
    });

    const th = this.closest('th');
    const dropdown = th.querySelector('.custom-dropdownn');
    const headCell = th.querySelector('.head-cell');

    const isOpen = dropdown.style.display === 'block';

    document.querySelectorAll('.custom-dropdownn').forEach(d => {
      d.style.display = 'none';
    });
    document.querySelectorAll('.head-cell').forEach(h => {
      h.classList.remove('active-dropdown');
    });

    if (!isOpen) {
      dropdown.style.display = 'block';
      headCell.classList.add('active-dropdown');
    }
  });
});

document.addEventListener('click', function () {
  document.querySelectorAll('.custom-dropdownn').forEach(dropdown => {
    dropdown.style.display = 'none';
  });
  document.querySelectorAll('.head-cell').forEach(headCell => {
    headCell.classList.remove('active-dropdown');
  });
});

document.querySelectorAll('.custom-dropdownn span').forEach(item => {
  item.addEventListener('click', function () {
    const allSpans = item.closest('.custom-dropdownn').querySelectorAll('span');
    allSpans.forEach(i => i.classList.remove('active'));
    this.classList.add('active');
  });
});

// ------------------- FILTER ICON -------------------
$(document).ready(function () {
  $(document).on("click", ".filter-icon", function (e) {
    e.stopPropagation();

    // Close filter-toggle dropdowns when filter-icon opens
    document.querySelectorAll('.custom-dropdownn').forEach(d => {
      d.style.display = 'none';
    });
    document.querySelectorAll('.head-cell').forEach(h => {
      h.classList.remove('active-dropdown');
    });

    const container = $(".types-of-fields .options-container");
    $(".options-container").not(container).hide();
    container.toggle();
  });

  $(document).on("click", ".menu-item", function () {
    const container = $(this).closest(".options-container");

    container.find(".menu-item").removeClass("active");
    $(this).addClass("active");

    container.find(".submenu-content").removeClass("active");
    container.find($(this).data("target")).addClass("active");
  });

  $(document).on("click", function () {
    $(".options-container").hide();
  });

  $(document).on("click", ".options-container, .filter-icon", function (e) {
    e.stopPropagation();
  });

  $(document).on("click", ".custom-dropdown", function () {
    $(this).siblings(".dropdown-menu").toggle();
  });

  $(document).on("click", ".dropdown-menu li", function () {
    const label = $(this).text();
    $(this).closest(".custom-dropdown-wrapper").find(".dropdown-label").text(label);
    $(".dropdown-menu").hide();
  });
});

// ------------------- FILTER PLUS -------------------
const filterBoxes = document.querySelectorAll(".filter-plus");

filterBoxes.forEach(filterBox => {
  const countBox = filterBox.querySelector(".count-box");
  const upBtn = filterBox.querySelector(".up-btn");
  const downBtn = filterBox.querySelector(".down-btn");

  function getCurrentValue() {
    return parseFloat(countBox.innerText) || 0;
  }

  upBtn.addEventListener("click", function () {
    let current = getCurrentValue();
    countBox.innerText = (current + 1).toFixed(2);
  });

  downBtn.addEventListener("click", function () {
    let current = getCurrentValue();
    if (current > 0) {
      countBox.innerText = (current - 1).toFixed(2);
    }
  });
});


});