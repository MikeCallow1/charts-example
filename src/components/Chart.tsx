import React from 'react'
import ChartJs from "./Chartjs";
import Echarts from "./Echarts";
import Recharts from "./Recharts";
import { useNavigationContext } from "../contexts/NavigationContext";
import PackageStats from './PackageStats';
import '../css/chartLayout.css';
import Overview from './Overview';

const Chart = () => {
  const { page } = useNavigationContext();

  const ChartType = () => {
    switch (page) {
      case "#":
        return <Recharts />;
      case "#chartjs":
        return <ChartJs />;
      case "#echarts":
        return <Echarts />;
      default:
        return <div>No chart</div>;
    }
  }

  return (
    <>
      <PackageStats />
      <Overview />
      <ChartType />
    </>
  )
}



export default Chart;