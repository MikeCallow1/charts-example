import { ArcElement, BarElement, CategoryScale, Chart as ChartJS, ChartOptions, Filler, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js';
import { Doughnut, Line, Bar } from "react-chartjs-2";
import { useDataContext } from "../contexts/DataContext";

const ChartJs = () => {

  ChartJS.register(ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement, Filler, Title, BarElement);
  const { data } = useDataContext();

  const options = {
    // responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        mode: 'index',
        intersect: false,
      }
    }
  } as ChartOptions;

  const chartData = {
    labels: data.map(item => item.date),
    datasets: [
      {
        label: 'Visits',
        data: data.map(item => item.visits),
        backgroundColor: '#003f5c88',
        borderColor: '#003f5c',
        fill: true,
      },
      {
        label: 'Leads',
        data: data.map(item => item.leads),
        backgroundColor: '#ffa60088',
        borderColor: '#ffa600',
        fill: true,
      },
      {
        label: 'Conversions',
        data: data.map(item => item.conversions),
        backgroundColor: '#bc509088',
        borderColor: '#bc5090',
        fill: true,
      }
    ]
  };

  return (
    <>
      <div className="hero">
        <Line data={chartData} options={options} />
      </div>
      <div className="grid">
        <div className="grid-item">
          <Doughnut data={{
            labels: ["Organic", "Facebook", 'Instagram', 'PPC'],
            datasets: [
              {
                data: [400, 300, 300, 200],
                backgroundColor: ['#003f5c', '#ffa600', '#bc5090', '#008607'],
              },
            ],
          }} />
        </div>
        <div className="grid-item">
          <Bar data={{ ...chartData, datasets: chartData.datasets.filter((s, i) => i < 2) }} options={options} />
        </div>
        <div className="grid-item">
          <Line data={{
            ...chartData, datasets: chartData.datasets.filter((s, i) => i === 0).map(s => ({
              ...s,
              fill: false
            }))
          }} options={options} />
        </div>
      </div>
    </>
  );
}
export default ChartJs;