'use client';
import 'animate.css';
import { Bars4Icon, XMarkIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import SearchBar from './search-bar';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => {
    setIsOpen((prevValue) => !prevValue);
  };
  return (
    <div className=" flex justify-between md:justify-between items-center px-5 py-5 font-sans bg-slate-50 sticky top-0">
      <div className="flex items-center justify-around">
        <div className="">
          <h1 className="ml-3 mr-7">News ID</h1>
        </div>
        <ul
          className={`${
            isOpen
              ? 'flex flex-col fixed left-0 right-0 bottom-0 top-14 leading-10 h-60 pl-5 mb-10 bg-zinc-800 pt-5 cursor-pointer z-10 animate__animated text-white animate__fadeInLeft'
              : 'hidden sm:flex [&>*]:cursor-pointer'
          }`}
        >
          <li className="ml-3 mr-3 navbar-menu navbar-menu-list cursor-pointer">
            News
          </li>
          <li className="ml-3 mr-3 navbar-menu navbar-menu-list cursor-pointer">
            Sports
          </li>
          <li className="ml-3 mr-3 navbar-menu navbar-menu-list cursor-pointer">
            Politics
          </li>
          <li className="ml-3 mr-3 navbar-menu navbar-menu-list cursor-pointer">
            Entertaiment
          </li>
          <li className="ml-3 mr-3 navbar-menu navbar-menu-list cursor-pointer ">
            Lifestyle
          </li>
        </ul>
      </div>
      <SearchBar />
      <div className="sm:hidden">
        <button className="mr-5  mt-1" onClick={handleIsOpen}>
          {isOpen ? (
            <XMarkIcon className="w-5 h-5 text-gray-500 mt-1" />
          ) : (
            <Bars4Icon className="w-5 h-5 text-gray-500 mt-1" />
          )}
        </button>
      </div>
    </div>
  );
}