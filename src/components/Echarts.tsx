import React from 'react';
import ReactECharts from 'echarts-for-react';
import { useDataContext } from "../contexts/DataContext";

const Echarts = () => {

  const { data } = useDataContext();

  const CHART_COLOURS = ['#003f5c', '#ffa600', '#bc5090', '#008607'];

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['Visits', 'Leads', 'Conversions']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: data.map(item => item.date)
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Visits',
        type: 'line',
        // stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: data.map(item => item.visits)
      },
      {
        name: 'Leads',
        type: 'line',
        // stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: data.map(item => item.leads)
      },
      {
        name: 'Conversions',
        type: 'line',
        // stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: data.map(item => item.conversions)
      },

    ]
  };

  const option2 = {
    ...option,
    series: [
      {
        ...option.series[0],
        type: 'bar'
      },
      {
        ...option.series[1],
        type: 'bar'
      },
    ]
  };

  const option3 = {
    ...option,
    series: [
      {
        ...option.series[0],
        type: 'line',
        areaStyle: {
          normal: {
            color: 'transparent'
          }
        },
      },
    ]
  }

  return (
    <>
      <div className="hero">
        <ReactECharts
          style={{ width: '100%', height: '100%' }}
          option={option}
          notMerge={true}
          lazyUpdate={true}
        />
      </div>
      <div className="grid">
        <div className="grid-item">
          <ReactECharts
            option={{
              tooltip: {
                trigger: 'item',
              },
              legend: {
                orient: 'vertical',
                bottom: 'bottom',
              },
              series: [{
                name: 'Source',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                  borderRadius: 5,
                  borderColor: '#fff',
                  borderWidth: 2
                },
                data: [
                  { name: 'Organic', value: 400 },
                  { name: 'Facebook', value: 300 },
                  { name: 'Instagram', value: 300 },
                  { name: 'PPC', value: 200 },
                ]
              }],
            }}
            notMerge={true}
            lazyUpdate={true}
          />
        </div>
        <div className="grid-item">
          <ReactECharts
            option={option2}
            notMerge={true}
            lazyUpdate={true}
          />
        </div>
        <div className="grid-item">
          <ReactECharts
            option={option3}
            notMerge={true}
            lazyUpdate={true}
          />
        </div>
      </div>
    </>
  );
}
export default Echarts;