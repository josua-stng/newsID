'use client';
import { MagnifyingGlassCircleIcon } from '@heroicons/react/20/solid';

export default function SearchForm({
  onClick,
  onSubmit,
  query,
  onChange,
}: any) {
  return (
    <div className="flex items-center justify-center">
      <form onSubmit={onSubmit}>
        <input
          value={query}
          onChange={onChange}
          type="text"
          placeholder="search"
          className="border-2 border-black px-2 py-1.5 rounded-md"
        />
      </form>
      <div onClick={onClick}>
        <MagnifyingGlassCircleIcon className="w-6 h-6 text-slate-600 cursor-pointer absolute top-7 right-7  " />
      </div>
    </div>
  );
}
