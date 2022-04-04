import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import { LineChart, Line, XAxis, YAxis, BarChart, Bar } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect( ()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    return (
        <div>
            <h1>Business chart for KTM duke 1290 super adventure</h1>
            <div className='dashboard-container'>    
                <div className="chart-1">
                    <h3>Sells per month</h3>
                    <LineChart width={500} height={350} data={data}>
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                        <XAxis dataKey="month"></XAxis>
                        <YAxis></YAxis>
                    </LineChart>
                </div>

                <div className="chart-2">
                    <h3>Investment Per month</h3>
                    <BarChart width={500} height={350} data={data}>
                        <Bar dataKey="investment" fill="#982322"></Bar>
                        <XAxis dataKey="month"></XAxis>
                        <YAxis></YAxis>
                    </BarChart>
                </div>
            </div>
       </div>
    );
};

export default Dashboard;