$(document).ready(function () {
  const ctx = $('#averageBasketChart')[0].getContext('2d');

  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
      datasets: [
        {
          label: 'Aylık',
          data: [780, 420, 530, 790, 710, 600, 150, 820, 500, 740, 800, 120],
          backgroundColor: '#1B69C7',
          borderRadius: 8,
          barThickness: 20
        }
      ]
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
            label: ctx => `${ctx.dataset.label}: ${ctx.raw?.toLocaleString('tr-TR')} ₺`
          }
        }
      },
      scales: {
        x: {
          grid: { color: '#E5E7EB' },
          ticks: {
            color: '#A3AED0',
            font: { size: 12, weight: 500 }
          }
        },
        y: {
          position: 'left',
          grid: { color: '#E5E7EB' },
          ticks: {
            color: '#A3AED0',
            callback: value => value.toLocaleString('tr-TR')
          }
        },
        y1: {
          position: 'right',
          grid: {
            drawOnChartArea: false
          },
          min: 0.1,
          max: 0.9,
          ticks: {
            stepSize: 0.1,
            color: '#A3AED0',
            font: { size: 12, weight: 500 },
            callback: value => value.toFixed(1).replace('.', ',')
          }
        }
      }

    }
  });
});
