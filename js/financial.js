const revenueChart = document.getElementById('revenueChart');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the class to trigger the animation
            entry.target.classList.add('chart-visible');
            observer.unobserve(entry.target); // Stop observing after animation is triggered
        }
    });
}, {
    threshold: 0.5 // Trigger the animation when 50% of the chart is visible
});

observer.observe(revenueChart);