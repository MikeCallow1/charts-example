import React from 'react'
import { useNavigationContext } from "../contexts/NavigationContext";

const PackageStats = () => {
  const { page } = useNavigationContext();
  const [packageStats, setPackageStats] = React.useState<any>({});
  const [isLoading, setIsLoading] = React.useState(false);
  const cache = React.useRef<any>({});

  React.useEffect(() => {
    const packageName = () => {
      switch (page) {
        case '#':
          return 'recharts';
        case '#echarts':
          return 'echarts-for-react';
        default:
          return 'chart.js';
      }
    }

    const fetchData = async () => {
      setIsLoading(true);
      if (cache.current[packageName()]) {
        setPackageStats(cache.current[packageName()]);
        setIsLoading(false);
        return;
      }

      const response = await fetch(
        `https://api.npmjs.org/downloads/point/last-week/${packageName()}`
      );
      const data = await response.json();
      cache.current[packageName()] = data;
      setPackageStats(data);
      setIsLoading(false);
    }
    fetchData();
  }, [page]);

  return (
    packageStats && (
      <div>
        <p>Weekly downloads: {isLoading ? '...' : Intl.NumberFormat().format(packageStats.downloads)}</p>
      </div>
    )
  )
}

export default PackageStats;
