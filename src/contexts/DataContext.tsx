import { createContext, useContext } from 'react';

export interface ChartData {
  data: {
    date: string;
    visits: number;
    leads: number;
    conversions: number;
  }[],
  setData: (data: {
    date: string;
    visits: number;
    leads: number;
    conversions: number;
  }[]) => void;
  generate: () => void;
}

export const DataContext = createContext({} as ChartData);

export const useDataContext = () => useContext(DataContext);