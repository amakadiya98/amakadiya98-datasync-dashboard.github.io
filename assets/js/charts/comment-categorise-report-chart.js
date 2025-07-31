$(document).ready(function () {
    const ctx = $('#commentCategoriseReportChart')[0].getContext('2d');

    const data = {
        labels: ['1. Hafta'],
        datasets: [
            {
                label: 'hb-label',
                data: [0],
                stack: 'hb',
                backgroundColor: 'transparent',
                datalabels: {
                    align: 'end',
                    anchor: 'end',
                    offset: 10,
                    backgroundColor: '#F28B02',
                    borderRadius: 4,
                    color: '#fff',
                    font: { weight: 'bold', size: 16 },
                    formatter: () => 'hb',
                    clip: false,
                    display: true
                },
                barThickness: 40
            },
            {
                label: 'ty-label',
                data: [0],
                stack: 'ty',
                backgroundColor: 'transparent',
                datalabels: {
                    align: 'end',
                    anchor: 'end',
                    offset: 10,
                    backgroundColor: '#FF6621',
                    borderRadius: 4,
                    color: '#fff',
                    font: { weight: 'bold', size: 16 },
                    formatter: () => 'ty',
                    clip: false,
                    display: true
                },
                barThickness: 40
            },
            {
                label: 'Negatif Yorum Sayısı (hb)',
                data: [12000],
                stack: 'hb',
                backgroundColor: '#023E7D',
                borderRadius: 15,
                datalabels: { display: false },
                barThickness: 40
            },
            {
                label: 'Pozitif Yorum Sayısı (hb)',
                data: [16000],
                stack: 'hb',
                backgroundColor: '#1B69C7',
                borderRadius: 15,
                datalabels: { display: false },
                barThickness: 40
            },
            {
                label: 'Negatif Yorum Sayısı (ty)',
                data: [7000],
                stack: 'ty',
                backgroundColor: '#023E7D',
                borderRadius: 15,
                datalabels: { display: false },
                barThickness: 40
            },
            {
                label: 'Pozitif Yorum Sayısı (ty)',
                data: [6000],
                stack: 'ty',
                backgroundColor: '#1B69C7',
                borderRadius: 15,
                datalabels: { display: false },
                barThickness: 40
            }
        ]
    };

    const chart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        generateLabels: function (chart) {
                            return [
                                {
                                    text: 'Toplam Pozitif Yorum Sayısı',
                                    fillStyle: '#1B69C7',
                                    strokeStyle: '#1B69C7',
                                    lineWidth: 1,
                                    hidden: !chart.isDatasetVisible(3),
                                    datasetIndex: 3,
                                    pointStyle: 'rectRounded',
                                },
                                {
                                    text: 'Toplam Negatif Yorum Sayısı',
                                    fillStyle: '#023E7D',
                                    strokeStyle: '#023E7D',
                                    lineWidth: 1,
                                    hidden: !chart.isDatasetVisible(2),
                                    datasetIndex: 2,
                                    pointStyle: 'rectRounded',
                                }
                            ];
                        },
                        usePointStyle: true,
                        pointStyle: 'rectRounded',
                        boxWidth: 20,
                        boxHeight: 10,
                        padding: 20,
                        font: {
                            size: 14,
                            weight: '500',
                            family: 'Gilroy'
                        },
                        color: '#003367'
                    },

                    onClick: function (e, legendItem, legend) {
                        const chart = legend.chart;
                        const idx = legendItem.datasetIndex;

                        const isPozitifVisible = chart.isDatasetVisible(3);
                        const isNegatifVisible = chart.isDatasetVisible(2);

                        if (idx === 3 && !isNegatifVisible) return;
                        if (idx === 2 && !isPozitifVisible) return;

                        if (idx === 3) {
                            const visible = chart.isDatasetVisible(3);
                            chart.setDatasetVisibility(3, !visible);
                            chart.setDatasetVisibility(5, !visible);
                        } else if (idx === 2) {
                            const visible = chart.isDatasetVisible(2);
                            chart.setDatasetVisibility(2, !visible);
                            chart.setDatasetVisibility(4, !visible);
                        }

                        chart.update();
                    }
                }
            },
        },
        plugins: [ChartDataLabels]
    });
});
