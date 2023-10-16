import Image from 'next/image';
import Link from 'next/link';

type PropsNewsLayout={
  newsLink:string,
  image:string,
  description:string,
  date:string
}
export default function NewsLayout({
  newsLink,
  image,
  description,
  date,
}: PropsNewsLayout) {
  return (
    <Link href={newsLink} target='_blank'>
      <div className="max-w-xs md:max-w-sm lg:max-w-md mx-auto border-2 border-gray-300 mb-5 p-5 font-sans cursor-pointer hover:mb-[-2px]">
        <Image
        unoptimized
          alt="news-image"
          width={280}
          height={150}
          src={image}
          style={{ objectFit: 'cover' }}
          className="mx-auto pb-5 w-max h-44 rounded-sm"
        />
        <p className="line-clamp-2 text-">{description}</p>
        <p className="mt-2 bg-green-200 max-w-max px-2 py-1 rounded-sm font-semibold">
          {new Date(date).toISOString().split('T')[0]}
        </p>
      </div>
    </Link>
  );
}
