import React from 'react';
import { Button } from 'react-bootstrap';
import { LineChart,ComposedChart, Line, XAxis, YAxis, BarChart, Bar, CartesianGrid, Tooltip, Legend, ResponsiveContainer,PieChart, Pie, Sector, Cell } from 'recharts';
import './homeRightbar.css';
import Navbar from '../Navbar';

function HomeRightbar() {
  const data = [
    {
      "name": "Page A",
      "uv": 1000,
      "fill":"#d2691e"
    },
    {
      "name": "Page B",
      "uv": 1500,
      "fill":"#6495ed"
    },
    {
      "name": "Page C",
      "uv": 4500,
      "fill":"#82ca9d"
    },
    {
      "name": "Page D",
      "uv": 980,
      "fill":"#00ffff"
    },
    {
      "name": "Page E",
      "uv": 490,
      "fill":"rgb(99,98,09)"
    },
   
  ]
  const data2 = [
    {
      "name": "Page A",
      "uv": 2000,
      "fill":"rgb(99,98,09)"
    },
    {
      "name": "Page B",
      "uv": 1100,
      "fill":"#00ffff"
    },
    {
      "name": "Page C",
      "uv": 4500,
      "fill":"#FFFF00"
    },
    {
      "name": "Page D",
      "uv": 980,
      "fill":"#6495ed"
    },
    {
      "name": "Page E",
      "uv": 490,
      "fill":"#d2691e"
    },
   
  ]
  const data3 = [
    {
      "name": "Page A",
      "uv": 1500,
      "fill":"#00ffff"
    },
    {
      "name": "Page B",
      "uv": 2400,
      "fill":"#6495ed"
    },
    {
      "name": "Page C",
      "uv": 4500,
      "fill":"#800000"
    },
    {
      "name": "Page D",
      "uv": 980,
      "fill":"#d2691e"
    },
    {
      "name": "Page E",
      "uv": 190,
      "fill":"rgb(99,98,09)"
    },
   
  ]
  const data4 = [
    {
      "name": "Week 1",
      "Task Created": 4000,
      "Task Completed": 2400,
      "amt": 2400
    },
    {
      "name": "Week 2",
      "Task Created": 3000,
      "Task Completed": 1398,
      "amt": 2210
    },
    {
      "name": "Week 3",
      "Task Created": 2000,
      "Task Completed": 9800,
      "amt": 2290
    },
    {
      "name": "Week 4",
      "Task Created": 2780,
      "Task Completed": 3908,
      "amt": 2000
    }
  ]
  const data5 = [
    {
      name: "Jan",
      uv: 290,
      pv: 800,
      amt: 1400,
      cnt: 490,
      "fill":"#808080",
    },
    {
      name: "Feb",
      uv: 568,
      pv: 967,
      amt: 1506,
      cnt: 590,
      "fill":"#808080",
    },
    {
      name: "Mar",
      uv: 497,
      pv: 1098,
      amt: 989,
      cnt: 350,
      "fill":"#808080",
    },
    {
      name: "Apr",
      uv: 1780,
      pv: 1200,
      amt: 1228,
      cnt: 480,
      "fill":"#808080",
    },
    {
      name: "May",
      uv: 520,
      pv: 1108,
      amt: 1100,
      cnt: 460,
      "fill":"#808080",
    },
    {
      name: "Jun",
      uv: 1000,
      pv: 680,
      amt: 1700,
      cnt: 380,
      "fill":"#808080",
    },
    {
      name: "Jul",
      uv: 1000,
      pv: 680,
      amt: 1700,
      cnt: 380,
      "fill":"#808080",
    },
    {
      name: "Aug",
      uv: 800,
      pv: 680,
      amt: 1700,
      cnt: 380,
      "fill":"#808080",
    },
    {
      name: "Sep",
      uv: 800,
      pv: 680,
      amt: 1700,
      cnt: 380,
      "fill":"#808080",
    },
    {
      name: "Oct",
      uv: 1500,
      pv: 680,
      amt: 1700,
      cnt: 380,
      "fill":"#808080",
    },
    {
      name: "Nov",
      uv: 2000,
      pv: 680,
      amt: 1700,
      cnt: 380,
      "fill":"#00FF00",
    },
    {
      name: "Dec",
      uv: 1900,
      pv: 680,
      amt: 1700,
      cnt: 380,
      "fill":"#808080",
    }
  ];
  const data6 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 }
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  
  return (
    <div className='mainHomeRightbar'>
      <Navbar />
      <div>
        <div className='ItemContainer'>
          <div className='ItemContainer1'>
            <div className='subItemContainer'>
              <p className='taskProgress'>Task Progress</p>
              <p className='taskCounter'>212</p>
              <p className='currentmonth1'>Current Month</p>
            </div>
            <div className='barchartContainer'>
              <BarChart width={150} height={100} data={data}>
                <Tooltip />

                <Bar dataKey="uv" fill="fill" />
              </BarChart>
            </div>
          </div>
          <div className='ItemContainer2'>
          <div className='subItemContainer'>
              <p className='taskProgress'>Task Completed</p>
              <p className='taskCounter'>5212</p>
              <p className='currentmonth1'>Current Month</p>
            </div>
            <div className='barchartContainer'>
              <BarChart width={150} height={100} data={data2}>
                <Tooltip />

                <Bar dataKey="uv" fill="fill" />
              </BarChart>
            </div>
          </div>
          <div className='ItemContainer3'>
          <div className='subItemContainer'>
              <p className='taskProgress2'>Monthly Task</p>
              <p className='taskProgress3'>Summary</p>
              <p className='taskCounter'>3212</p>
              <p className='currentmonth1'>Current Month</p>
            </div>
            <div className='barchartContainer'>
              <BarChart width={150} height={100} data={data3}>
                <Tooltip />

                <Bar dataKey="uv" fill="fill" />
              </BarChart>
            </div>
          </div>
        </div>

        <div className='itemContainer3'> 
        <p>Task Created vs Task Completed</p>
        <LineChart width={1030} height={250} data={data4}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="Task Created" stroke="#8884d8" />
  <Line type="monotone" dataKey="Task Completed" stroke="#82ca9d" />
</LineChart>
        </div>
      </div>
      <div className='itemContainer4'>
        <div className='itemno1'>
          <p>Your Team Performance This Week</p>
      <div className='pc'>
      <PieChart width={300} height={120}>
      <Pie data={data6} startAngle={180} endAngle={0} cx={160} cy={80} innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={1} dataKey="value">
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
    </div>
          <p>Your Performance is 5% Better then last Week</p>
          <Button style={{backgroundColor:"#00FF00",border:"0.5px solid gray"}}>View Details</Button>
        </div>
        <div className='itemno2'>
          <p>Monthly Earning Performance</p>
     <ComposedChart width={700} height={200} data={data5} margin={{top: 20,right: 20,bottom: 20,left: 20}} >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" scale="band" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="uv" barSize={20} fill="fill" />
      <Line type="monotone" dataKey="uv" stroke="#ff7300" />
    </ComposedChart>
        </div>
      </div>
    </div>
  )
}

export default HomeRightbar