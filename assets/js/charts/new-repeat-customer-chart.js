$(document).ready(function () {
  const ctx = $('#customerPieChart')[0].getContext('2d');

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Yeni Müşteri', 'Tekr. Müşteri'],
      datasets: [{
        data: [11.86, 6],
        backgroundColor: ['rgba(27, 105, 199, 1)', 'rgba(255, 194, 131, 1)'],
      }]
    },
    options: {
      responsive: false,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
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
        },
        datalabels: {
          display: true,
          color: '#fff',
          backgroundColor: '#fff',
          borderRadius: 6,
          borderWidth: 1,
          borderColor: '#ccc',
          padding: {
            top: 6,
            bottom: 6,
            left: 10,
            right: 10
          },
          font: {
            weight: 'bold',
            size: 14
          },
          color: 'rgba(27, 105, 199, 1)',
          anchor: 'end',
          align: 'center',
          formatter: (value, context) => {
            return context.dataIndex === 0 ? `Yeni Müşteri\n${value.toFixed(2).replace('.', ',')}` : '';
          }
        }
      }
    },
  });
});