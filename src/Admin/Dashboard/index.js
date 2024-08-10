import React, { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './Dashboard.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    const [user, setUser] = useState([]);
    const [post, setPost] = useState([]);
    const [money, setMoney] = useState([]);
    const [monthlyPostCounts, setMonthlyPostCounts] = useState([]);
    console.log(post);
    const fetchData = async () => {
        try {
            const [userRes, postRes, moneyRes] = await Promise.all([
                axios.get("http://localhost:5223/api/User"),
                axios.get("http://localhost:5117/api/Post"),
                axios.get("http://localhost:5081/api/Transaction")
            ]);
            setUser(userRes.data.data);
            setPost(postRes.data.data);
            setMoney(moneyRes.data.data);
            setTransactions(moneyRes.data.data); // Assuming you want to use the same data for the line chart
            setMonthlyPostCounts(getMonthlyPostCounts(postRes.data.data));
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const getMonthlyTotals = (transactions) => {
        const monthlyTotals = Array(12).fill(0);
        transactions.forEach(transaction => {
            if (transaction.registeredDate) {
                const date = new Date(transaction.registeredDate);
                const month = date.getMonth();
                if (month >= 0 && month < 12) {
                    monthlyTotals[month] += transaction.total || 0;
                }
            }
        });
        return monthlyTotals;
    };
   
    const getMonthlyPostCounts = (posts) => {
        const monthlyCounts = Array(12).fill(0);
        posts.forEach(post => {
            if (post.createdDate) {
                const date = new Date(post.createdDate
                );
                const month = date.getMonth();
                if (month >= 0 && month < 12) {
                    monthlyCounts[month] += 1;
                }
            }
        });
        return monthlyCounts;
    };

    const monthlyTotals = getMonthlyTotals(transactions);
    const monthlyPosts = getMonthlyPostCounts(post);
    const totalAmount = money.reduce((acc, transaction) => acc + transaction.total, 0);

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
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Posts',
                fill: false,

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
                data: monthlyPosts,
            },
        ],
    };

    const userCount = user.length;
    const ApprovalPosts = post.filter(p => p.status === 'Approved');
    const postApprovalCount = ApprovalPosts.length;
    const processingPosts = post.filter(p => p.status === 'Processing');
    const processingPostCount = processingPosts.length;
    
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
                <Link className='a' to="/admin/ListPost">
                    <div className='tilte'>
                        <div className='er'>Post</div>
                        <div className='icon'><i className="bi bi-file-post-fill"></i></div>
                    </div>
                    <div className='number'>
                        {postApprovalCount}
                    </div>
                    </Link>
                </div>

                <div className='card'>
                    <Link className='a' to="/admin/CDPost">
                        <div className='tilte'>
                            <div className='er'>Processing Post</div>
                            <div className='icon'><i className="bx bx-loader bx-spin"></i></div>
                        </div>
                        <div className='number'>
                            {processingPostCount}
                        </div>
                    </Link>
                </div>

                <div className='card'>
                    <Link className='a' to="/admin/AccountUser">

                        <div className='tilte'>
                            <div className='er'>User</div>
                            <div className='icon'><i className="bi bi-person-fill"></i></div>
                        </div>
                        <div className='number'>
                            {userCount}
                        </div>
                    </Link>
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
