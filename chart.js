const ctx = document.getElementById('myChart');

const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Gen', 'Feb', 'Mar', 'Apr'],
    datasets: [{
      label: 'Vendite',
      data: [10, 20, 15, 30],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
