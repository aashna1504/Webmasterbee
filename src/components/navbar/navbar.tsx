import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

function Navbar() {
  return (
    <div>
      {" "}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/75">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              {/* <img
                src="/placeholder.svg"
                alt="Webmaster Team"
                width={40}
                height={40}
                className="w-10 h-10"
              /> */}
              <span className="text-white font-semibold">WEBMASTER TEAM</span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/services"
                className="text-gray-300 hover:text-white transition-colors"
              >
                SERVICES
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                ABOUT
              </Link>
              <Link
                href="/learn"
                className="text-gray-300 hover:text-white transition-colors"
              >
                LEARN
              </Link>
              <Link
                href="/pricing"
                className="text-gray-300 hover:text-white transition-colors"
              >
                PRICING
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-white transition-colors"
              >
                CONTACT
              </Link>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <Link
                href="/account"
                className="text-gray-300 hover:text-white transition-colors"
              >
                MY ACCOUNT
              </Link>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
                GET A QUOTE
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
