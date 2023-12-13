const config00 = {
    type: 'bar',
    data: {
        labels: ['Attractions', 'Amenities', 'Access', 'Price', 'No Aspect'],
        datasets: [{
            label: '# of Votes',
            data: [1312, 862, 152, 88, 401],
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

const config01 = {
    type: 'bar',
    data: {
        labels: ['Positif', 'Negatif', 'Netral'],
        datasets: [{
            label: '# of Votes',
            data: [980, 139, 193],
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
        },
        plugins: {
            title: {
                display: true,
                text: 'Total Jumlah Review pada Aspek Attraction',
            }
        }
    }
};

const config02 = {
    type: 'bar',
    data: {
        labels: ['Positif', 'Negatif', 'Netral'],
        datasets: [{
            label: '# of Votes',
            data: [545, 191, 126],
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

const config03 = {
    type: 'bar',
    data: {
        labels: ['Positif', 'Negatif', 'Netral'],
        datasets: [{
            label: '# of Votes',
            data: [117, 21, 14],
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

const config04 = {
    type: 'bar',
    data: {
        labels: ['Positif', 'Negatif', 'Netral'],
        datasets: [{
            label: '# of Votes',
            data: [66, 15, 7],
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

const config05 = {
    type: 'bar',
    data: {
        labels: ['Positif', 'Negatif', 'Netral'],
        datasets: [{
            label: '# of Votes',
            data: [145, 9, 247],
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