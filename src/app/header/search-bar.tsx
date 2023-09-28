'use client';
import { MagnifyingGlassCircleIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

export default function SearchBar() {
  const [isShowInput, setIsShowInput] = useState(false);
  const isShowSearch = () => {
    setIsShowInput((prevValue) => !prevValue);
  };
  return (
    <>
      {isShowInput ? (
        <div className="flex items-center justify-center">
          <form>
            <input
              type="text"
              placeholder="search"
              className="border-2 border-black px-2 py-1.5 rounded-md"
            />
          </form>
          <div onClick={isShowSearch}>
            <MagnifyingGlassCircleIcon className="w-6 h-6 text-slate-600 cursor-pointer absolute top-7 right-7  " />
          </div>
        </div>
      ) : (
        <MagnifyingGlassCircleIcon
          className="w-6 h-6 text-slate-600 cursor-pointer hidden sm:block"
          onClick={isShowSearch}
        />
      )}
    </>
  );
}
