'use client';
import { useEffect, useState, Suspense } from 'react';
import NewsLayout from './news-layout';
import { PropsNews } from '../context/props-type-news';
import LoadingSkeleton from '../loading';
import { categoryMapping } from '../context/category-mapping-news';
export default function News() {
  const isClient = typeof window !== 'undefined';
  const [newsCategory, setNewsCategory] = useState(() => {
    return isClient ? localStorage.getItem('newsCategory') || 'cnn' : 'cnn';
  });

  const [news, setNews] = useState([]);
  const getNewsData = async () => {
    try {
      const url = categoryMapping[newsCategory] || categoryMapping[''];
      const res = await fetch(url);
      const newsData = await res.json();
      setNews(newsData.data.posts);
      if (!res.ok) {
        throw new Error('Failed fetch data');
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getNewsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newsCategory]);
  useEffect(() => {
    localStorage.setItem('newsCategory', newsCategory);
  }, [newsCategory]);
  return (
    <div>
      <div>
        <select
          className="border-2 border-black  font-mono ml-5 mb-5"
          onChange={(event) => setNewsCategory(event.target.value)}
          value={newsCategory}
        >
          <option value="cnn">CNN</option>
          <option value="cnbc">CNBC</option>
          <option value="tribun">TRIBUN</option>
          <option value="okezone">OKEZONE</option>
        </select>
        <Suspense fallback={<LoadingSkeleton />}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-2 max-w-8xl mx-auto">
            {news.map((news: PropsNews, idx: number) => {
              return (
                <div key={idx}>
                  <NewsLayout
                    newsLink={news.link}
                    image={news.thumbnail}
                    description={news.description}
                    date={news.pubDate}
                  />
                </div>
              );
            })}
          </div>
        </Suspense>
      </div>
    </div>
  );
}
