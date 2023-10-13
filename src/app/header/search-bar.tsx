'use client';
import { MagnifyingGlassCircleIcon } from '@heroicons/react/20/solid';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import SearchForm from './search-form';

export default function SearchBar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isShowInput, setIsShowInput] = useState(false);
  const [query, setQuery] = useState(searchParams.get('') ?? '');
  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!query.trim()) {
      router.push('/');
    } else {
      router.push(`/search?q=${query}`);
    }
  };
  const isShowSearch = () => {
    setIsShowInput((prevValue) => !prevValue);
  };
  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  return (
    <>
      {isShowInput ? (
        <SearchForm
          onClick={isShowSearch}
          onSubmit={handleClick}
          query={query}
          onChange={onChangeValue}
        />
      ) : (
        <MagnifyingGlassCircleIcon
          className="w-6 h-6 text-slate-600 cursor-pointer hidden sm:block"
          onClick={isShowSearch}
        />
      )}
    </>
  );
}
