import React, { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './Dashboard.scss';
import axios from 'axios';

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
    const [transactions, setTransactions] = useState([]);

    const fetchTransactions = async () => {
        try {
            const result = await axios.get("http://localhost:5081/api/Transaction");
            console.log('Fetched Transactions:', result.data.data); // Debug API response
            setTransactions(result.data.data);  // Assuming result.data.data is an array of transactions
        } catch (error) {
            console.error("Error fetching transactions:", error);
        }
    };

    useEffect(() => {
        fetchTransactions();
    }, []);

    // Calculate total amount per month
    const getMonthlyTotals = (transactions) => {
        const monthlyTotals = Array(12).fill(0); // Initialize array for 12 months

        transactions.forEach(transaction => {
            if (transaction.registeredDate) { // Check if registeredDate exists
                const date = new Date(transaction.registeredDate);
                const month = date.getMonth(); // 0 = January, 11 = December
                console.log("Transaction Month:", month);
                if (month >= 0 && month < 12) { 
                    monthlyTotals[month] += transaction.total || 0;
                } else {
                    console.warn(`Invalid month ${month} in transaction with date ${transaction.registeredDate}`);
                }
            } else {
                console.warn("Transaction missing registeredDate:", transaction);
            }
        });

        return monthlyTotals;
    };

    const monthlyTotals = getMonthlyTotals(transactions);

    const barData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Earnings',
                backgroundColor: '#081D45',
                borderColor: '#081D45',
                borderWidth: 1,
                hoverBackgroundColor: '#081D45',
                hoverBorderColor: '#081D45',
                data: monthlyTotals, 
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

    //cac the 
    const [user,setUser] = useState([]);
    const [money,setMoney] = useState([]);
    const [post,setPost] = useState([]);

    const fetchUser = async () => {
        try {
            const result = await axios.get("http://localhost:5223/api/User");
            setUser(result.data.data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };
    const userCount = user.length;
    const fetchPost = async () => {
        try {
            const result = await axios.get("http://localhost:5117/api/Post");
            setPost(result.data.data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };
    const postCount = post.length;
    useEffect(() => {
        fetchUser();
        fetchPost();
        fetchMoney();
    }, []);
    const fetchMoney = async () => {
        try {
            const result = await axios.get("http://localhost:5081/api/Transaction");
            setMoney(result.data.data);
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };
    const totalAmount = money.reduce((acc, transaction) => acc + transaction.total, 0);
    console.log(money);
    return (
        <div className='dashboard'>
            <div className='container1'>
                <div className='card-1'>
                    <div className='tilte'>
                        <div className='er'>Earning</div>
                        <div className='icon'>$</div>
                    </div>
                    <div className='price'>
                        ${totalAmount}
                    </div>
                </div>
                <div className='card'>
                    <div className='tilte'>
                        <div className='er'>Post</div>
                        <div className='icon'><i className="bi bi-file-post-fill"></i></div>
                    </div>
                    <div className='number'>
                    {postCount}
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
                        <div className='er'>User</div>
                        <div className='icon'><i className="bi bi-person-fill"></i></div>
                    </div>
                    <div className='number'>
                        {userCount}
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
