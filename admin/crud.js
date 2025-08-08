document.addEventListener('DOMContentLoaded', () => {

    // Common Chart.js options
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

    // --- CRUD PAGE CHARTS ---

    // 1. Top Selling Products Chart
    const topSellingCtx = document.getElementById('topSellingChart').getContext('2d');
    new Chart(topSellingCtx, {
        type: 'bar',
        data: {
            labels: ['Headphones', 'T-Shirt', 'Jeans', 'Power Bank', 'Mech Keyboard'],
            datasets: [{
                label: 'Units Sold',
                data: [120, 95, 78, 65, 52],
                backgroundColor: '#3b82f6',
                borderColor: '#2563eb',
                borderWidth: 1
            }]
        },
        options: { ...chartOptions, indexAxis: 'y' } // Horizontal bar chart
    });

    // 2. Inventory Levels Chart
    const inventoryLevelsCtx = document.getElementById('inventoryLevelsChart').getContext('2d');
    new Chart(inventoryLevelsCtx, {
        type: 'bar',
        data: {
            labels: ['Headphones', 'T-Shirt', 'Jeans', 'Power Bank', 'Mech Keyboard'],
            datasets: [{
                label: 'Stock Quantity',
                data: [8, 120, 50, 15, 25],
                backgroundColor: [
                    '#ef4444', // Red (low stock)
                    '#22c55e', // Green
                    '#22c55e', // Green
                    '#f97316', // Orange (medium stock)
                    '#f97316'  // Orange
                ],
                borderWidth: 1
            }]
        },
        options: chartOptions
    });
    
    // 3. Conversion Rate by Product Chart
    const conversionRateCtx = document.getElementById('conversionRateChart').getContext('2d');
    new Chart(conversionRateCtx, {
        type: 'bar',
        data: {
            labels: ['Headphones', 'T-Shirt', 'Jeans', 'Power Bank', 'Mech Keyboard'],
            datasets: [{
                label: 'Conversion Rate (%)',
                data: [15.2, 8.5, 7.1, 12.8, 10.5],
                backgroundColor: 'rgba(139, 92, 246, 0.8)', // Violet
                borderColor: 'rgba(139, 92, 246, 1)',
                borderWidth: 1,
                borderRadius: 5
            }]
        },
        options: chartOptions
    });

    // 4. Product Ratings Chart
    const productRatingsCtx = document.getElementById('productRatingsChart').getContext('2d');
    new Chart(productRatingsCtx, {
        type: 'pie',
        data: {
            labels: ['5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Star'],
            datasets: [{
                label: 'Number of Ratings',
                data: [150, 75, 20, 5, 10],
                backgroundColor: [
                    '#22c55e', // Green
                    '#a3e635', // Lime
                    '#facc15', // Yellow
                    '#f97316', // Orange
                    '#ef4444'  // Red
                ],
                hoverOffset: 4
            }]
        },
        options: { ...chartOptions, plugins: { legend: { position: 'right' } } }
    });
});
