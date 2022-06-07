function makeLineGraphBRScore(data) {

    let dataSet = data.reverse();

    new Chart('dataChart', {
    type: "line",
    data: {
        labels: Array.from(Array(dataSet.length).keys()), // This generates the x-axis (0-data.length)
        datasets: [{
            label: 'BR Score',
            fill: false,
            backgroundColor: "rgba(199, 0, 57, 0.7)",
            borderColor: "rgba(199, 0, 57, 0.7)",
            borderWidth: 1.5,
            data: dataSet
        }]
    },

    // Plot Settings

    options: {

        title: {
            display: false,
            text: 'playerName'
        },
        legend: {
            display: true,
        },

        responsive: true,
        maintainAspectRatio: true,
        
        animation: {
            easing: 'easeInOutQuad',
            duration: 1020
        },
        
        point: {
            backgroundColor: 'white'
        },
        
        scales: {
            xAxes: [{
                gridLines: {
                    color: '#BEAFC2',
                    lineWidth: 1,
                },
                ticks: {
                    fontColor: '#7954A1',
                    fontSize: 14
                }
            }],
            yAxes: [{
                gridLines: {
                    color: '#BEAFC2',
                    lineWidth: 1,
                },
                ticks: {
                    fontColor: "#7954A1",
                    fontSize: 14
                }
            }]
        },

        elements: {
            line: {
                tension: 0.4
            }
        },
        
    }
    });
}
