import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const LineChart = () => {
    const data = {
        labels: ['Februari', 'Maret', 'April', 'Mei', 'Juni'],
        datasets: [{
            label: 'Penjualan Per Bulan',
            data: [12, 19, 7, 9, 6],
            borderColor: '#5F2EEB',
            tension: 0,
            backgroundColor: 'rgba(95, 46, 235, 0.1)',
            fill: true
        }]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 3
                }
            }
        },
        plugins: {
            legend: {
                labels: {
                    font: {
                        family: "'Figtree', sans-serif"
                    }
                }
            }
        }
    };

    return (
        <div>
            <Line data={data} options={options} />
        </div>
    );
}

export default LineChart;