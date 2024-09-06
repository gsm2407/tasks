
  const ctx = document.getElementById('barChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      datasets: [{
        label: 'Earnings in $',
        data: [2050, 1600, 3440, 1800, 2550, 1200, 2760, 2365, 2770, 1800, 2560, 3985],
        backgrounColor: [
            'rgba(85,85,85,1)'
        ],
        borderColor: [
            'rgb(41,155,99)'

        ],
        borderWidth: 1

      }]
    },
    options: {
      responsive: true
    }
  });