import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './Dashboard.scss';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Dashboard = () => {
    const barData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Earnings',
                backgroundColor: '#081D45',
                borderColor: '#081D45',
                borderWidth: 1,
                hoverBackgroundColor: '#081D45',
                hoverBorderColor: '#081D45',
                data: [65, 59, 80, 81, 56, 55, 40],
            },
        ],
    };

    const lineData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Shares',
                fill: false,
                lineTension: 0.1,
                backgroundColor: '#081D45',
                borderColor: '#081D45',
                pointBorderColor: '#081D45',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#081D45',
                pointHoverBorderColor: '#081D45',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [65, 59, 80, 81, 56, 55, 40],
            },
        ],
    };

    return (
        <div className='dashboard'>
            <div className='container1'>
                <div className='card-1'>
                    <div className='tilte'>
                        <div className='er'>Earning</div>
                        <div className='icon'>$</div>
                    </div>
                    <div className='price'>
                        $628
                    </div>
                </div>
                <div className='card'>
                    <div className='tilte'>
                        <div className='er'>Share</div>
                        <div className='icon'><i className="bi bi-share-fill"></i></div>
                    </div>
                    <div className='number'>
                        1111
                    </div>
                </div>
                <div className='card'>
                    <div className='tilte'>
                        <div className='er'>Share</div>
                        <div className='icon'><i className="bi bi-share-fill"></i></div>
                    </div>
                    <div className='number'>
                        1111
                    </div>
                </div>
                <div className='card'>
                    <div className='tilte'>
                        <div className='er'>Share</div>
                        <div className='icon'><i className="bi bi-share-fill"></i></div>
                    </div>
                    <div className='number'>
                        1111
                    </div>
                </div>
            </div>
            <div className='container-fluid p-0 m-0'>
                <div className='row'>
                    <div className='col-lg-6 col-12'>
                        <div className='box-chart'>
                            <Bar data={barData} options={{ responsive: true, maintainAspectRatio: true }} />
                        </div>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <div className='box-chart'>
                            <Line data={lineData} options={{ responsive: true, maintainAspectRatio: true }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
