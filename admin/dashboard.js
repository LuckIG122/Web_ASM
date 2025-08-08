document.addEventListener('DOMContentLoaded', () => {

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    font: {
                        family: "'Be Vietnam Pro', sans-serif"
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    font: { family: "'Be Vietnam Pro', sans-serif" }
                }
            },
            x: {
                ticks: {
                    font: { family: "'Be Vietnam Pro', sans-serif" }
                }
            }
        }
    };
    
    // --- DASHBOARD CHARTS ---

    // 1. Monthly Revenue Chart
    const monthlyRevenueCtx = document.getElementById('monthlyRevenueChart').getContext('2d');
    new Chart(monthlyRevenueCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Revenue ($k)',
                data: [5, 8, 12.5, 21, 9, 15],
                backgroundColor: 'rgba(79, 70, 229, 0.8)',
                borderColor: 'rgba(79, 70, 229, 1)',
                borderWidth: 1,
                borderRadius: 5
            }]
        },
        options: chartOptions
    });

    // 2. Product Category Chart
    const productCategoryCtx = document.getElementById('productCategoryChart').getContext('2d');
    new Chart(productCategoryCtx, {
        type: 'doughnut',
        data: {
            labels: ['Electronics', 'Fashion', 'Home Goods', 'Books'],
            datasets: [{
                label: 'Sales',
                data: [300, 50, 100, 80],
                backgroundColor: [
                    '#4f46e5', // Indigo
                    '#10b981', // Emerald
                    '#f59e0b', // Amber
                    '#3b82f6'  // Blue
                ],
                hoverOffset: 4
            }]
        },
        options: { ...chartOptions, plugins: { legend: { position: 'right' } } }
    });

    // 3. New Orders Chart
    const newOrdersCtx = document.getElementById('newOrdersChart').getContext('2d');
    new Chart(newOrdersCtx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
            datasets: [{
                label: 'New Orders',
                data: [65, 59, 80, 81, 56, 55, 40, 90],
                fill: true,
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                tension: 0.4
            }]
        },
        options: chartOptions
    });

    // 4. New Customers Chart
    const newCustomersCtx = document.getElementById('newCustomersChart').getContext('2d');
    new Chart(newCustomersCtx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
            datasets: [{
                label: 'New Customers',
                data: [20, 25, 30, 41, 26, 35, 22, 45],
                fill: true,
                borderColor: '#f59e0b',
                backgroundColor: 'rgba(245, 158, 11, 0.1)',
                tension: 0.4
            }]
        },
        options: chartOptions
    });
});
