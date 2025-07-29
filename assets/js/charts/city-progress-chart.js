$(document).ready(function () {
    const ctx = $('#cityProgressChart')[0].getContext('2d');

    const countries = [
        { name: 'İstanbul', code: 'https://flagcdn.com/w40/tr.png', value: 25744 },
        { name: 'Ankara', code: 'https://flagcdn.com/w40/tr.png', value: 24744 },
        { name: 'İzmir', code: 'https://flagcdn.com/w40/tr.png', value: 23744 },
        { name: 'Bursa', code: 'https://flagcdn.com/w40/tr.png', value: 25244 },
        { name: 'Konya', code: 'https://flagcdn.com/w40/tr.png', value: 26744 },
        { name: 'Diğer', code: 'https://flagcdn.com/w40/un.png', value: 27844 }
    ];

    const maxValue = Math.max(...countries.map(c => c.value));
    countries.forEach(c => {
        c.percent = (c.value / maxValue) * 100;
    });

    const data = countries.map(c => c.percent);
    const labels = countries.map(c => c.name);

    const flagImages = countries.map(c => {
        const img = new Image();
        img.src = c.code;
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
                        display: false, // hide default labels
                        padding: 160 // bigger gap between bar and labels
                    },
                    grid: { color: '#E2E8F0' }
                }
            },
            layout: {
                padding: { left: 200 } // reserve space for flags + names
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
                            ctx.drawImage(img, x, y - 8, 20, 14); // draw flag
                            ctx.fillText(text, x + 30, y); // draw text with gap
                        } else {
                            img.onload = function () { chart.draw(); };
                        }
                    });
                }
            }
        ]
    });
});