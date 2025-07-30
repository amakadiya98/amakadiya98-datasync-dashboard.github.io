const ctx = document.getElementById('returnCargoChart').getContext('2d');
new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Trendyol Express Marketplace', 'Aras Kargo', 'HepsiJET', 'Aras Kargo Marketplace'],
        datasets: [{
            data: [22, 25, 20, 21], // Total = 88
            backgroundColor: ["rgba(242, 139, 2, 1)", "rgba(237, 28, 46, 1)", "rgba(64, 64, 153, 1)", "rgba(0, 58, 128, 1)"],
            borderWidth: 0,
        }]
    },
    options: {
        cutout: '40%',
        hoverOffset: 45,
        layout: {
            padding: 25
        },
        plugins: {
            legend: { display: false },
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
            },
            datalabels: {
                color: '#1A3E78',
                font: {
                    weight: 'bold',
                    size: 16,
                },
                formatter: function (value, ctx) {
                    if (ctx.dataIndex === 0) {
                        return ['Son 30 Gün', '88'];
                    }
                    return '';
                },
                align: 'center',
                anchor: 'center',
                offset: 4
            }
        }
    },
});