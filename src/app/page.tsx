'use client'
import React from 'react'
import { useState } from 'react'
import BarChart from "./components/BarChart";
import { UserData } from './Data';


export default function Home() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: "Users Gained",
      data: UserData.map((data) => data.userGain),

    }]
  });
  return (
    <div>
      <BarChart chartData={userData}/>
    </div>
  )
}
