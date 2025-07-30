
$(document).ready(function () {
    const ctx = $('#stockCostChart')[0].getContext('2d');

    const data = {
        labels: ['Stok Adet', 'Toplam Maliyet'],
        datasets: [
            {
                label: 'Stok Adet',
                data: [100, 0],  // only show bar for 'Stok Adet'
                backgroundColor: '#2962FF',
                borderRadius: 20,
                barThickness: 20,
            },
            {
                label: 'Toplam Maliyet',
                data: [0, 250],  // only show bar for 'Toplam Maliyet'
                backgroundColor: '#FDBA74',
                borderRadius: 20,
                barThickness: 20,
            }
        ]
    };

    const options = {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'rectRounded',
                    color: '#003367',
                    font: {
                        size: 14,
                        weight: '500'
                    }
                }
            },
            tooltip: {
                mode: 'index',
                intersect: false,
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
                    label: ctx => `${ctx.dataset.label}: ${ctx.raw.toLocaleString('tr-TR')}`
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                grid: { color: '#E2E8F0' },
                ticks: {
                    color: '#A3AED0',
                    callback: (val) => val + ' Gün',
                    font: { size: 12, weight: 500 }
                }
            },
            y: {
                grid: { color: '#E2E8F0' },
                ticks: {
                    color: '#A3AED0',
                    font: { size: 14, weight: 600 }
                }
            }
        }
    };

    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
});
