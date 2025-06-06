"use client";

import { BellIcon, MenuIcon, UserCircleIcon } from "lucide-react";
import { useSelector } from "react-redux";

function Header({ setSidebarOpen }) {
  const user = useSelector((state) => state.user.user);
  const userFirstLetter = user?.username?.charAt(0).toUpperCase();
  return (
    <header className="sticky top-0 z-10 flex h-16 bg-[#0a1a3a] shadow">
      <button
        type="button"
        className="px-4 border-r border-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#1e4d8b] md:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <MenuIcon className="w-6 h-6" aria-hidden="true" />
      </button>
      <div className="flex justify-between flex-1 px-4">
        <div className="flex items-center flex-1">
          <h1 className="hidden text-xl font-semibold text-white md:block">
            <span className="text-[#3a7bd5] font-bold">E-</span>
            <span className="text-white font-bold">TRIAD</span>
          </h1>
        </div>
        <div className="flex items-center ml-4 md:ml-6">
          <button
            type="button"
            className="p-1 rounded-full text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1e4d8b]"
          >
            <span className="sr-only">View notifications</span>
            <BellIcon className="w-6 h-6" aria-hidden="true" />
          </button>

          {/* Profile dropdown */}
          <div className="relative ml-3">
            <div>
              {userFirstLetter ? (
                <h1 className="cursor-pointer font-bold text-xl bg-[#1e4d8b] text-white rounded-full h-[30px] w-[30px] flex justify-center items-center ring-4 ring-[#0f2a5a]">
                  {userFirstLetter}
                </h1>
              ) : (
                <div
                  type="button"
                  className="max-w-xs bg-[#0a1a3a] flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1e4d8b]"
                  id="user-menu-button"
                >
                  <span className="sr-only">Open user menu</span>
                  <UserCircleIcon
                    className="w-8 h-8 text-gray-300"
                    aria-hidden="true"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;