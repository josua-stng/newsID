'use client';
import { useEffect, useState } from 'react';
import NewsLayout from '../components/news-layout';
import { PropsNews } from '../context/props-type-news';

export default function Tech() {
  const [newsTech, setNewsTech] = useState([]);
  const typeNews =
    typeof window !== 'undefined'
      ? localStorage.getItem('newsCategory')
      : 'CNN';
  const apiUrl =
    typeNews === 'cnn'
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/cnn/teknologi/`
      : typeNews === 'cnbc'
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/cnbc/tech/`
      : typeNews === 'tribun'
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/tribun/terbaru/`
      : typeNews === 'okezone'
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/okezone/techno/`
      : '';
  const handleDataNews = async () => {
    try {
      const res = await fetch(apiUrl);
      const newsData = res ? await res.json() : null;
      setNewsTech(newsData.data.posts);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleDataNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeNews]);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-2 max-w-8xl mx-auto">
      {newsTech.map((news: PropsNews, idx: number) => {
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
  );
}
