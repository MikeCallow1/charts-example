import { createContext, useContext } from 'react';

interface NavItem {
  title: string;
  url: string;
}

export interface INavigation {
  page: NavItem['url'];
  setPage: (page: NavItem['url']) => void;
  pages: NavItem[];
}

export const NavigationContext = createContext({} as INavigation);

export const useNavigationContext = () => useContext(NavigationContext);