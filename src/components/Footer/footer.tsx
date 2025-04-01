import Link from "next/link";
import React from "react";

function footer() {
  return (
    <div>
      <div className="relative z-10 container mx-auto px-4 my-16">
        {" "}
        <footer className="pt-8 border-t">
          <div className="flex flex-wrap justify-between items-center">
            <nav className="space-x-6 text-sm">
              <Link href="/about" className="hover:text-[#ec6a2a]">
                ABOUT
              </Link>
              <Link href="/services" className="hover:text-[#ec6a2a]">
                WEBSITE SERVICES
              </Link>
              <Link href="/learn" className="hover:text-[#ec6a2a]">
                LEARN
              </Link>
              <Link href="/contact" className="hover:text-[#ec6a2a]">
                CONTACT
              </Link>
              <Link href="/privacy" className="hover:text-[#ec6a2a]">
                PRIVACY
              </Link>
            </nav>
            <div className="text-sm text-gray-500">
              Copyright © 2025 The Webmaster Company
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default footer;
