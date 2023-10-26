var ctx = document.getElementById('immersion-chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', 
        '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00'],
        datasets: [{
            label: 'Immersion Score',
            data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 20, 10, 30],
            fill: false,
            borderColor: function(context) {
                var index = context.dataIndex;
                var value = context.dataset.data[index];
                return index < 3 ? 'red' : 
                       index < 6 ? 'blue' : 
                       index < 9 ? 'green' : 
                       'purple';
            },
            tension: 0.1
        }]
    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Immersion Score'
                },
                beginAtZero: true
            }
        },
        plugins: {
            tooltip: {
                mode: 'index',
                intersect: false
            },
            annotation: {
                annotations: {
                    box1: {
                        type: 'box',
                        xMin: '00:00',
                        xMax: '02:59',
                        backgroundColor: 'rgba(255, 99, 132, 0.25)'
                    },
                    box2: {
                        type: 'box',
                        xMin: '03:00',
                        xMax: '05:59',
                        backgroundColor: 'rgba(75, 192, 192, 0.25)'
                    },
                    box3: {
                        type: 'box',
                        xMin: '06:00',
                        xMax: '08:59',
                        backgroundColor: 'rgba(255, 206, 86, 0.25)'
                    },
                    box4: {
                        type: 'box',
                        xMin: '09:00',
                        xMax: '14:00',
                        backgroundColor: 'rgba(153, 102, 255, 0.25)'
                    }
                }
            }
        },
        hover: {
            mode: 'nearest',
            intersect: true
        }
    }
});


