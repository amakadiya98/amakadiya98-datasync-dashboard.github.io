$(document).ready(function () {
    const ctx = $('#stockScoreChart')[0].getContext('2d');

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Kritik Envanter', 'Normal Envanter', 'Stokta Yok', 'Fazla Stokta'],
            datasets: [{
                data: [15, 10, 20, 65],
                backgroundColor: ['#023E7D', '#FFC283', '#1B69C7', '#CCD8E5'],
                borderWidth: 0,
                hoverOffset: 20,
            }]
        },
        options: {
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
                        label: function (context) {
                            const label = context.label || '';
                            const value = context.raw.toLocaleString('tr-TR');
                            return `${label}: ${value}`;
                        }
                    }
                }
            },
            layout: {
                padding: 20
            },
            cutout: '50%'
        }
    });
});
