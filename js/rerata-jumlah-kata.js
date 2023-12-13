const config11 = {
    type: 'bar',
    data: {
        labels: ['Positif', 'Negatif', 'Netral', 'None'],
        datasets: [{
            label: '# of Votes',
            data: [31.1602, 32.5324, 38.1295, 1],
            backgroundColor: ['lightskyblue', 'lightsalmon', 'lightgreen'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Sentimen'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Total Jumlah Review'
                }
            }
        }
    }
};