'use client'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';

type NewsCategoryContextType = {
  newsCategory: string;
  setNewsCategory: Dispatch<SetStateAction<string>>;
};

export const newsCategoryContext = createContext<NewsCategoryContextType | undefined>(
  undefined
);

export default function CategoryContext({ children }: { children: ReactNode }) {
  const [newsCategory, setNewsCategory] = useState('CNN');

  return (
    <newsCategoryContext.Provider value={{ newsCategory, setNewsCategory }}>
      {children}
    </newsCategoryContext.Provider>
  );
}
