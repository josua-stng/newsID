'use client';
import { useEffect, useState } from 'react';
import NewsLayout from '../components/news-layout';
import { PropsNews } from '../context/props-type-news';

export default function Sport() {
  const [newsSport, setNewsSport] = useState([]);
  const typeNews =
    typeof window !== 'undefined'
      ? localStorage.getItem('newsCategory')
      : 'CNN';
  const apiUrl =
    typeNews === 'cnn'
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/cnn/olahraga/`
      : typeNews === 'cnbc'
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/sindonews/sports/`
      : typeNews === 'tribun'
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/merdeka/olahraga/`
      : typeNews === 'okezone'
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/okezone/sports/`
      : '';
  const handleDataNews = async () => {
    try {
      const res = await fetch(apiUrl);
      const newsData = res ? await res.json() : null;
      setNewsSport(newsData.data.posts);
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
      {newsSport.map((news: PropsNews, idx: number) => {
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
