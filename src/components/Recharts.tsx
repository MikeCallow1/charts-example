import { AreaChart, Legend, Area, ResponsiveContainer, Tooltip, LineChart, Line, PieChart, BarChart, Bar, Pie, Cell, CartesianGrid, XAxis, YAxis } from 'recharts';
import { useDataContext } from '../contexts/DataContext';

const Recharts = () => {

  const { data } = useDataContext();

  const CHART_COLOURS = ['#003f5c', '#ffa600', '#bc5090', '#008607'];

  return (
    <>
      <div className="hero">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Area type="linear" dataKey="visits" fill="#003f5c" stroke="#003f5c" />
            <Area type="linear" dataKey="leads" fill="#ffa600" stroke="#ffa600" />
            <Area type="linear" dataKey="conversions" fill="#bc5090" stroke="#bc5090" />
            <Tooltip />
            <Legend />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="grid">
        <div className="grid-item">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={[
                  { name: 'Organic', value: 400 },
                  { name: 'Facebook', value: 300 },
                  { name: 'Instagram', value: 300 },
                  { name: 'PPC', value: 200 },
                ]}
                innerRadius={40}
                outerRadius={70}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={CHART_COLOURS[index % CHART_COLOURS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="grid-item">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar type="monotone" dataKey="visits" fill="#003f5c" />
              <Bar type="monotone" dataKey="leads" fill="#ffa600" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="grid-item">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Line type="linear" dataKey="visits" stroke="#003f5c" />
              <Tooltip />
              <Legend />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
export default Recharts;