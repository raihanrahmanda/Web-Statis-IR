const config21 = {
    type: 'bar',
    data: {
        labels: ['Attractions', 'Amenities', 'Access', 'Price', 'No Aspect'],
        datasets: [{
            label: '# of Votes',
            data: [32.3547, 39.7958, 30.0592, 28.0114, 18.9798],
            backgroundColor: ['lightskyblue', 'lightsalmon', 'lightgreen', 'lightcoral', 'mediumpurple'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Aspek'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Total Jumlah Review'
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Total Jumlah Review pada Masing-masing Aspek (Selain "None")',
            }
        }
    }
};