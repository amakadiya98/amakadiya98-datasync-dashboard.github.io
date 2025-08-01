$(document).ready(function () {
    const ctx = $('#stockHealthChart')[0].getContext('2d');

    const data = {
        labels: [
            'Kritik Envanter',
            'Normal Envanter',
            'Stoklar Tükendi',
            'Stok Fazlası'
        ],
        datasets: [
            {
                label: 'Stok Adet',
                data: [70000, 60000, 65000, 75000],
                backgroundColor: '#1B69C7',
                borderRadius: 9,
                barThickness: 18,
            },
            {
                label: 'SKU Adeti',
                data: [30000, 25000, 28000, 26000],
                backgroundColor: '#FFC283',
                borderRadius: 9,
                barThickness: 18,
            },
            {
                label: 'Toplam Maliyet',
                data: [60000, 55000, 50000, 53000],
                backgroundColor: '#023E7D',
                borderRadius: 9,
                barThickness: 18,
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
                    label: (ctx) => `${ctx.dataset.label}: ${ctx.raw.toLocaleString('tr-TR')}`
                }
            }
        },
        scales: {
            x: {
                grid: {
                    color: '#e5e7eb'
                },
                ticks: {
                    color: '#6b7280',
                    backgroundColor: '#1a59d8ff',
                    borderRadius: 10,
                    callback: val => val.toLocaleString('tr-TR')
                }
            },
            y: {
                grid: {
                    color: '#f3f4f6'
                },
                ticks: {
                    color: '#6b7280',
                    backgroundColor: '#215bcfff',
                    font: {
                        size: 13,
                        weight: '500'
                    }
                }
            }
        }
    };

    new Chart(ctx, {
        type: 'bar',
        data,
        options
    });

    $('.stock-tabs-container .tab').click(function () {
        $('.stock-tabs-container .tab').removeClass('active');
        $(this).addClass('active');

        const type = $(this).data('type');
        if (type === 'graph') {
            $('#graphView').show();
            $('#tableView').hide();
        } else {
            $('#graphView').hide();
            $('#tableView').show();
        }
    });
});
