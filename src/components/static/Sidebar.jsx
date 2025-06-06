"use client";

import {
  ChevronDownIcon,
  ChevronUpIcon,
  HomeIcon,
  NewspaperIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  LogOutIcon,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { logout } from "../../util/slices/userSlices";
import { Logout } from "../../services/authApi";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const location = useLocation();
  const [productsOpen, setProductsOpen] = useState(false);
  const [contentOpen, setContentOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async() => {
    await Logout()
    dispatch(logout());
    toast.success("Logged out successfully");
    navigate("/signin");
    setSidebarOpen(false); 
  };

  return (
    <>
      {/* Mobile sidebar backdrop */}
      <div
        className={`fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity md:hidden ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-[#0a1a3a] shadow-lg transform transition-transform md:translate-x-0 md:static md:inset-0 flex flex-col ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex-1">
          <div className="flex items-center justify-center h-16 border-b border-gray-700">
            <h1 className="text-xl font-bold">
              <span className="text-[#3a7bd5]">E-</span>
              <span className="text-white">TRIAD</span>
            </h1>
          </div>

          <nav className="px-2 mt-5">
            <Link
              to="/"
              className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                location.pathname === "/"
                  ? "bg-[#1e4d8b] text-white"
                  : "text-gray-300 hover:bg-[#0f2a5a] hover:text-white"
              }`}
            >
              <HomeIcon className="w-6 h-6 mr-3" />
              Dashboard
            </Link>

            {/* Products Dropdown */}
            <div className="mt-1">
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className={`w-full group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                  location.pathname.includes("/products")
                    ? "bg-[#1e4d8b] text-white"
                    : "text-gray-300 hover:bg-[#0f2a5a] hover:text-white"
                }`}
              >
                <ShoppingBagIcon className="w-6 h-6 mr-3" />
                Products
                {productsOpen ? (
                  <ChevronUpIcon className="w-5 h-5 ml-auto" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 ml-auto" />
                )}
              </button>
              {productsOpen && (
                <div className="pl-10 pr-2 mt-1 space-y-1">
                  <Link
                    to="/products"
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      location.pathname === "/products"
                        ? "bg-[#1e4d8b] text-white"
                        : "text-gray-300 hover:bg-[#0f2a5a] hover:text-white"
                    }`}
                  >
                    Product List
                  </Link>
                  <Link
                    to="/products/create"
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      location.pathname === "/products/create"
                        ? "bg-[#1e4d8b] text-white"
                        : "text-gray-300 hover:bg-[#0f2a5a] hover:text-white"
                    }`}
                  >
                    Create Product
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/orders"
              className={`mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                location.pathname.includes("/orders")
                  ? "bg-[#1e4d8b] text-white"
                  : "text-gray-300 hover:bg-[#0f2a5a] hover:text-white"
              }`}
            >
              <ShoppingCartIcon className="w-6 h-6 mr-3" />
              Orders
            </Link>

            {/* Content Dropdown */}
            <div className="mt-1">
              <button
                onClick={() => setContentOpen(!contentOpen)}
                className={`w-full group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                  location.pathname.includes("/content")
                    ? "bg-[#1e4d8b] text-white"
                    : "text-gray-300 hover:bg-[#0f2a5a] hover:text-white"
                }`}
              >
                <NewspaperIcon className="w-6 h-6 mr-3" />
                Content
                {contentOpen ? (
                  <ChevronUpIcon className="w-5 h-5 ml-auto" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 ml-auto" />
                )}
              </button>
              {contentOpen && (
                <div className="pl-10 pr-2 mt-1 space-y-1">
                  <Link
                    to="/content/posts"
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      location.pathname === "/content/posts"
                        ? "bg-[#1e4d8b] text-white"
                        : "text-gray-300 hover:bg-[#0f2a5a] hover:text-white"
                    }`}
                  >
                    Posts
                  </Link>
                  <Link
                    to="/content/posts/create"
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      location.pathname === "/content/posts/create"
                        ? "bg-[#1e4d8b] text-white"
                        : "text-gray-300 hover:bg-[#0f2a5a] hover:text-white"
                    }`}
                  >
                    Create Post
                  </Link>
                  <Link
                    to="/content/pages"
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      location.pathname === "/content/pages"
                        ? "bg-[#1e4d8b] text-white"
                        : "text-gray-300 hover:bg-[#0f2a5a] hover:text-white"
                    }`}
                  >
                    Pages
                  </Link>
                  <Link
                    to="/content/media"
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      location.pathname === "/content/media"
                        ? "bg-[#1e4d8b] text-white"
                        : "text-gray-300 hover:bg-[#0f2a5a] hover:text-white"
                    }`}
                  >
                    Media
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>

        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="w-full group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-300 hover:bg-[#0f2a5a] hover:text-white"
          >
            <LogOutIcon className="w-6 h-6 mr-3" />
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;