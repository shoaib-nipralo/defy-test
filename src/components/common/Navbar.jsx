"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import "./Navbar.scss";

const navLinks = [
  {
    title: "Solutions",
    slug: "solutions",
    sublinks: [
      { title: "Smart Farming", href: "/solutions/smart-farming" },
      { title: "Smart Cargo", href: "/solutions/smart-cargo" },
    ],
  },
  {
    title: "Technology",
    slug: "technology",
    sublinks: [
      { title: "JAX Series", href: "/technology/jax-series" },
      { title: "Birdy Series", href: "/technology/birdy-series" },
    ],
  },
  {
    title: "Training",
    slug: "training",
    sublinks: [
      { title: "Drone Pilot Training", href: "/training/drone-pilot-training" },
      {
        title: "Agriculture Drone Training",
        href: "/training/agriculture-drone-training",
      },
    ],
  },
];

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  let closeTimeout;
  const pathname = usePathname();

  // Handle dropdown hover
  const handleMouseEnter = (menuItem) => {
    clearTimeout(closeTimeout);
    setActiveDropdown(menuItem);
  };

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 500);
  };

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsHidden(currentScrollPos > lastScrollPos && currentScrollPos > 100);
      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPos]);

  return (
    <nav
      className={`navbar ${
        isHidden ? "hide" : "show"
      } w-full bg-black/50 px-6 py-0 h-[76px] top-0 left-0 archivo-expanded z-10`}
    >
      <div className='flex items-center justify-between h-full mx-auto max-w-[1400px]'>
        {/* Logo */}
        <Link href='/'>
          <Image
            src='/images/defylogo.png'
            alt='Logo'
            width={172}
            height={40}
            className='object-contain'
            priority
          />
        </Link>

        <div className='flex items-center gap-8'>
          {/* Navigation Links (Mapped) */}
          <div className='hidden space-x-8 md:flex'>
            {navLinks.map(({ title, slug, sublinks }) => (
              <div
                key={slug}
                className='relative group'
                onMouseEnter={() => handleMouseEnter(slug)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Main Dropdown Trigger */}
                <div
                  className={`flex items-center gap-1 font-semibold uppercase cursor-pointer ${
                    pathname.includes(`/${slug}`) || activeDropdown === slug
                      ? "text-[#F7BE68]"
                      : "text-white hover:text-[#F7BE68]"
                  }`}
                >
                  {title}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      activeDropdown === slug
                        ? "rotate-180 text-[#F7BE68]"
                        : pathname.includes(`/${slug}`)
                        ? "text-[#F7BE68] rotate-0"
                        : "text-white rotate-0"
                    }`}
                  />
                </div>

                {/* Dropdown Menu */}
                {activeDropdown === slug && (
                  <div
                    className='absolute left-[50%] -translate-x-[50%] top-12 mt-2 bg-[#090909]/20 rounded shadow-md z-10 w-max overflow-hidden border border-white text-white'
                    onMouseEnter={() => handleMouseEnter(slug)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {sublinks.map(({ title, href }) => (
                      <Link key={href} href={href}>
                        <p className='px-[22px] pt-[15px] pb-[14px] hover:bg-white cursor-pointer border-b border-b-[#fff]/50 text-white hover:text-black archivo-expanded'>
                          {title}
                        </p>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* About Us (Standalone Link) */}
            <div>
              <Link
                href='/about-us'
                className={`uppercase cursor-pointer font-semibold ${
                  pathname === "/about-us"
                    ? "text-[#F7BE68]"
                    : "text-white hover:text-[#F7BE68]"
                }`}
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Contact Us Button */}
          <Link href='/contact'>
            <button
              className={`hidden px-4 py-2 text-white border border-[#F7BE68] rounded-full md:block font-semibold hover:bg-[#F7BE68] hover:text-white ${
                pathname === "/contact" ? "bg-[#F7BE68]" : ""
              }`}
            >
              CONTACT US
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
