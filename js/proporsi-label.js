const config06 = {
    type: 'pie',
    data: {
        labels: ['Attractions', 'Amenities', 'Access', 'Price', 'No Aspect'],
        datasets: [{
            label: '# of Votes',
            data: [10, 20, 30, 10, 30],
            backgroundColor: ['lightskyblue', 'lightsalmon', 'lightgreen', 'lightcoral', 'mediumpurple'],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Proporsi Masing-masing Aspek (Selain "None")',
            }
        }
    }
};

