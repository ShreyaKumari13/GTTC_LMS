var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [{
            label: 'Revenue',
            data: [20, 30, 45, 60, 40, 25, 80],
            borderColor: '#00A0E3',
            backgroundColor: 'rgba(0, 123, 255, 0.1)',
            pointBackgroundColor: '##0E2947',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            pointRadius: 5,
            lineTension: 0.4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: '#000000',
                    font: {
                        size: 16
                    }
                }
            },
            tooltip: {
                enabled: true,
                backgroundColor: 'rgba(0, 123, 255, 0.8)',
                titleFont: {
                    size: 14,
                    weight: 'bold'
                },
                bodyFont: {
                    size: 12
                },
                callbacks: {
                    label: function (context) {
                        return context.dataset.label + ': $' + context.parsed.y;
                    }
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#000000',
                    font: {
                        size: 11
                    }
                },
                grid: {
                    display: false
                }
            },
            y: {
                ticks: {
                    color: '#000000',
                    font: {
                        size: 11
                    },
                    beginAtZero: true,
                    stepSize: 20
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            }
        }
    }
});

// Example of button functionality (week, month, year)
document.getElementById('week').addEventListener('click', function () {
    myChart.data.labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    myChart.data.datasets[0].data = [20, 30, 45, 60, 40, 25, 80];
    myChart.update();
});

document.getElementById('month').addEventListener('click', function () {
    myChart.data.labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
    myChart.data.datasets[0].data = [200, 250, 300, 280];
    myChart.update();
});

document.getElementById('year').addEventListener('click', function () {
    myChart.data.labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    myChart.data.datasets[0].data = [1000, 1200, 1100, 900, 1500, 1300, 1400, 1600, 1800, 1700, 1900, 2000];
    myChart.update();
});

