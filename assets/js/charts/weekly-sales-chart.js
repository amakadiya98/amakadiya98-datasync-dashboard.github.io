$(document).ready(function () {
    const ctx = $('#weeklySalesChart')[0].getContext('2d');

    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0.066, 'rgba(255, 194, 131, 0.2)');
    gradient.addColorStop(0.9967, 'rgba(255, 194, 131, 0)');

    const data = {
        labels: [
            '1.Hafta (1.06 - 8.06)',
            '2.Hafta (9.06 - 15.06)',
            '3.Hafta (16.06 - 22.06)',
            '4.Hafta (23.06 - 30.06)'
        ],
        datasets: [
            {
                type: 'bar',
                label: 'Satış Adetleri',
                data: [48000, 51000, 47000, 40000],
                backgroundColor: '#1B69C7',
                borderRadius: 8,
                barPercentage: 0.5,
                categoryPercentage: 0.4,
                yAxisID: 'y'
            },
            {
                type: 'bar',
                label: 'Toplam Görüntülenme',
                data: [88000, 70000, 89000, 39000],
                backgroundColor: '#F4F7FE',
                borderRadius: 8,
                barPercentage: 0.5,
                categoryPercentage: 0.4,
                yAxisID: 'y'
            },
            {
                type: 'line',
                label: 'Satış Adetleri',
                data: [48000, 50000, 45000, 49000],
                borderColor: '#F2B889',
                backgroundColor: gradient,
                pointStyle: 'circle',
                pointRadius: 8,
                pointBorderColor: '#FFFFFF',
                pointBackgroundColor: '#F2B889',
                pointBorderWidth: 4,
                borderWidth: 2,
                fill: true,
                yAxisID: 'y1'
            }
        ]
    };

    const options = {
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
                grid: { display: false },
                ticks: {
                    color: '#A3AED0',
                    font: {
                        weight: 600
                    }
                }
            },
            y: {
                position: 'left',
                grid: { color: '#e5e7eb' },
                ticks: {
                    color: '#A3AED0',
                    callback: val => val.toLocaleString('tr-TR')
                }
            },
            y1: {
                position: 'right',
                grid: { drawOnChartArea: false },
                ticks: {
                    color: '#A3AED0',
                    callback: val => val.toLocaleString('tr-TR')
                }
            }
        }
    };

    new Chart(ctx, {
        data,
        options
    });
});
