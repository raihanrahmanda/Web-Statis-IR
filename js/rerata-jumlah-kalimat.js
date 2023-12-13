const config22 = {
    type: 'bar',
    data: {
        labels: ['Attractions', 'Amenities', 'Access', 'Price', 'No Aspect'],
        datasets: [{
            label: 'Rerata Jumlah Kalimat per Review',
            data: [3.5492, 4.2459, 3.2434, 3.3409, 2.9451],
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
            legend: {
                display: false,
            }
        }
    }
};