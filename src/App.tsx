import React from 'react';
import './app.css';
import Chart from './components/Chart';
import Menu from './components/Menu';
import { DataContext } from './contexts/DataContext';
import { NavigationContext } from './contexts/NavigationContext';
import { generateData } from './helpers/generateData';

function App() {

  const pages = [
    { 'title': 'recharts', 'url': '#' },
    { 'title': 'echarts', 'url': '#echarts' },
    { 'title': 'chart.js', 'url': '#chartjs' },
  ];

  const getCurrentPage = () =>
    pages.find(page => window.location.hash === page.url)?.url ?? pages[0].url;

  const [page, setPage] = React.useState(getCurrentPage());
  const [data, setData] = React.useState(generateData());

  React.useEffect(() => {
    window.addEventListener('popstate', () => setPage(getCurrentPage()));
  }, []);

  return (
    <NavigationContext.Provider value={{
      page,
      setPage,
      pages
    }}>
      <DataContext.Provider value={{
        data,
        setData,
        generate: () => setData(generateData())
      }}>
        <div className="pageWrapper">
          <header className="header">
            <h1>Charts Example</h1>
          </header>
          <Menu />
          <Chart />
        </div>
      </DataContext.Provider>
    </NavigationContext.Provider >
  );
}

export default App;
