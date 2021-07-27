import React from "react";
import ShoppingCart from "./ShoppingCart";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({children}: LayoutProps) {
  return (
    <div>
      <header className="text-gray-100 bg-gray-900">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center lg:items-center lg:justify-start mb-4 md:mb-0">
            <span className="ml-3 text-xl">Mock Shop</span>
          </a>
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          </nav>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <ShoppingCart/>
          </div>
        </div>
      </header>
      <div className="pt-0.5">
        {children}
      </div>
    </div>
  )
}
