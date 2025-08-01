$(document).ready(function () {
    const ctx = $('#countryProgressChart')[0].getContext('2d');

    const countries = [
        { name: 'Türkiye', code: 'tr', value: 25744 },
        { name: 'ABD', code: 'us', value: 24744 },
        { name: 'Almanya', code: 'de', value: 23744 },
        { name: 'Irak', code: 'iq', value: 25244 },
        { name: 'Çin', code: 'cn', value: 26744 },
        { name: 'Diğer', code: 'white', value: 27844 }
    ];

    const maxValue = Math.max(...countries.map(c => c.value));
    countries.forEach(c => {
        c.percent = (c.value / maxValue) * 100;
    });

    const data = countries.map(c => c.percent);
    const labels = countries.map(c => c.name);

    const flagUrls = {
        tr: 'https://flagcdn.com/w40/tr.png',
        us: 'https://flagcdn.com/w40/us.png',
        de: 'https://flagcdn.com/w40/de.png',
        iq: 'https://flagcdn.com/w40/iq.png',
        cn: 'https://flagcdn.com/w40/cn.png',
        white: 'https://flagcdn.com/w40/un.png'
    };

    const flagImages = countries.map(c => {
        const img = new Image();
        img.src = flagUrls[c.code];
        return img;
    });

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: '#023E7D',
                borderRadius: 6,
                barThickness: 30
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    mode: 'nearest',
                    intersect: true,
                    backgroundColor: '#FFFFFF',
                    borderColor: 'rgba(50, 50, 71, 0.06)',
                    borderWidth: 1,
                    cornerRadius: 12,
                    padding: 8,
                    displayColors: true,

                    titleColor: '#A3AED0',
                    titleFont: {
                        family: 'Gilroy',
                        weight: '600',
                        size: 12
                    },
                    bodyColor: '#023E7D',
                    bodyFont: {
                        family: 'Gilroy',
                        weight: '700',
                        size: 20
                    },
                    callbacks: {
                        label: function (context) {
                            const value = countries[context.dataIndex].value;
                            const percent = countries[context.dataIndex].percent;
                            return `${value} - %${percent.toFixed(2)}`;
                        }
                    }
                },
                datalabels: {
                    color: '#fff',
                    anchor: 'end',
                    align: 'start',
                    clamp: true,
                    clip: false,
                    padding: { left: 6 },
                    font: { weight: 'bold', size: 12 },
                    formatter: function (value, context) {
                        const country = countries[context.dataIndex];
                        return `${country.value} - %${country.percent.toFixed(2)}`;
                    }
                }
            },
            scales: {
                x: { display: false },
                y: {
                    ticks: {
                        display: false,
                        padding: 160 // bigger gap between bar and labels
                    },
                    grid: { color: '#E2E8F0' }
                }
            },
            layout: {
                padding: { left: 200 } // reserve enough space for flag + text
            }
        },
        plugins: [
            ChartDataLabels,
            {
                id: 'flagPlugin',
                afterDraw: function (chart) {
                    const yAxis = chart.scales.y;
                    const ctx = chart.ctx;

                    yAxis.ticks.forEach((tick, i) => {
                        const y = yAxis.getPixelForTick(i);
                        const img = flagImages[i];
                        const text = chart.data.labels[i];

                        ctx.font = '14px sans-serif';
                        ctx.textBaseline = 'middle';
                        ctx.fillStyle = '#000';

                        if (img.complete) {
                            const x = yAxis.left - 140; // push flags + text further left
                            ctx.drawImage(img, x, y - 8, 20, 14);
                            ctx.fillText(text, x + 30, y); // add more spacing between flag and text
                        } else {
                            img.onload = function () { chart.draw(); };
                        }
                    });
                }
            }
        ]
    });
});