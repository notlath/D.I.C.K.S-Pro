"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/business-plan", label: "Business Plan" },
  {
    href: "https://drive.google.com/drive/folders/1jy-aVCuXUZxZEvgwoVWOY-eJY7Cep55G?usp=sharing",
    label: "Videos",
    external: true,
  },
  { href: "/pubmats", label: "Pubmats" },
  {
    label: "Other",
    children: [
      { href: "/bio", label: "Biology" },
      { href: "/eapp", label: "EAPP" },
    ],
  },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#011459]/95 backdrop-blur-lg shadow-lg"
          : "bg-[#011459]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/assets/logo.png"
                alt="D.I.C.K.S Pro"
                fill
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-white font-bold text-xl tracking-tight">
                D.I.C.K.S Pro
              </h1>
              <p className="text-[#4cc2f0] text-[9px] uppercase tracking-wider">
                Digital Information & Computer Knowledge Service
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                {link.children ? (
                  <button
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className="flex items-center gap-1 px-4 py-2 text-white/90 hover:text-white font-medium text-sm transition-all duration-200 rounded-lg hover:bg-white/10"
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                ) : link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-white/90 hover:text-white font-medium text-sm transition-all duration-200 rounded-lg hover:bg-white/10 block"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-white/90 hover:text-white font-medium text-sm transition-all duration-200 rounded-lg hover:bg-white/10 block"
                  >
                    {link.label}
                  </Link>
                )}

                {/* Dropdown */}
                {link.children && (
                  <div
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className={`absolute top-full left-0 mt-1 bg-[#011459] rounded-xl shadow-xl border border-white/10 overflow-hidden transition-all duration-200 min-w-[160px] ${
                      openDropdown === link.label
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    {link.children.map((child, childIndex) => (
                      <Link
                        key={childIndex}
                        href={child.href}
                        className="block px-4 py-3 text-white/90 hover:text-white hover:bg-[#2798c4] text-sm transition-colors duration-200"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="space-y-1 pt-2">
            {navLinks.map((link, index) => (
              <div key={index}>
                {link.children ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.label ? null : link.label
                        )
                      }
                      className="flex items-center justify-between w-full px-4 py-3 text-white/90 hover:text-white font-medium text-sm rounded-lg hover:bg-white/10"
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`pl-4 space-y-1 overflow-hidden transition-all duration-200 ${
                        openDropdown === link.label ? "max-h-40" : "max-h-0"
                      }`}
                    >
                      {link.children.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          href={child.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-4 py-2 text-white/80 hover:text-white text-sm rounded-lg hover:bg-white/10"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-white/90 hover:text-white font-medium text-sm rounded-lg hover:bg-white/10"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-white/90 hover:text-white font-medium text-sm rounded-lg hover:bg-white/10"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
