const ctx = document.getElementById('customerChart')

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Primary Consumers (B2C)', 'Enterprise & Government', 'Business Clients (B2B)'],
        datasets: [{
        label: 'Customer Segments',
        data: [45, 20, 35],
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
})