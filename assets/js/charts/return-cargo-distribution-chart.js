const ctx = document.getElementById('returnCargoChart').getContext('2d');
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Trendyol Express Marketplace', 'Aras Kargo','HepsiJET', 'Aras Kargo Marketplace'],
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