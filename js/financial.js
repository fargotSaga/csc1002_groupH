document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("revenuePieChart").getContext("2d");

    new Chart(ctx, {
        type: "pie",
        data: {
            labels: ["Subscription Revenue", "Affiliate Revenue", "AI features"],
            datasets: [{
                data: [62, 21, 17],
                backgroundColor: ["#88d8d4", "#1f2d36", "#ecc76d"],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        color: "#fff",
                        font: {
                            size: 14
                        }
                    }
                },
                datalabels: {
                    color: '#fff',
                    font: {
                        weight: 'bold',
                        size: 16
                    },
                    formatter: (value) => `${value}%`
                },
                title: {
                    display: false
                }
            }
        },
        plugins: [ChartDataLabels]
    });
});