'use client';
import { useEffect, useState, Suspense } from 'react';
import LoadingSkeleton from '../loading';
import { PropsNews } from '../context/props-type-news';
import NewsLayout from '../components/news-layout';
import { useSearchParams } from 'next/navigation';

export default function Search() {
  const isClient = typeof window !== 'undefined';
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  console.log(query);
  const [newsCategory, _] = useState(() => {
    return isClient ? localStorage.getItem('newsCategory') || 'CNN' : 'CNN';
  });
  const [news, setNews] = useState<PropsNews[]>([]);
  const categoryMapping: { [key: string]: string } = {
    cnn: `${process.env.NEXT_PUBLIC_BASE_URL}/cnn/terbaru/`,
    cnbc: `${process.env.NEXT_PUBLIC_BASE_URL}/cnbc/terbaru/`,
    tribun: `${process.env.NEXT_PUBLIC_BASE_URL}/tribun/terbaru/`,
    okezone: `${process.env.NEXT_PUBLIC_BASE_URL}/okezone/terbaru/`,
  };
  const handlerNewsData = async () => {
    try {
      const url = categoryMapping[newsCategory] || categoryMapping[''];
      const res = await fetch(url);
      const newsData = await res.json();
      setNews(newsData.data.posts);
    } catch (error) {
      console.log(error);
    }
  };
  const filterNewsData = news.filter((news) => {
    return query && news.description.toLowerCase().includes(query);
  });
  useEffect(() => {
    handlerNewsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newsCategory]);
  return (
    <div>
      <Suspense fallback={<LoadingSkeleton />}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-2 max-w-8xl mx-auto">
          {filterNewsData.map((news: PropsNews, idx: number) => {
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
  );
}
