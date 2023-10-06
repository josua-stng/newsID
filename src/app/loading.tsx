import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
export default function LoadingSkeleton({ count }: any) {
  const skeletonCount = count || 18;
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-2 max-w-8xl mx-auto z-10">
      {Array.from({ length: skeletonCount }).map((_, index) => (
        <div
          className="max-w-xs md:max-w-sm lg:max-w-md mx-auto border-2 border-gray-300 mb-5 p-5 font-sans cursor-pointer hover:mb-[-2px]"
          key={index}
        >
          <Skeleton
            width={250}
            baseColor="#989898"
            height={100}
            className="ml-5 mb-2"
          />
          <Skeleton width={300} baseColor="#989898" />
          <Skeleton width={300} baseColor="#989898" />
          <Skeleton width={100} baseColor="#989898" />
        </div>
      ))}
    </div>
  );
}
