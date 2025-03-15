"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  let closeTimeout;

  const pathname = usePathname();
  console.log(pathname);
  
  // Open dropdown when hovering over menu item
  const handleMouseEnter = (menuItem) => {
    clearTimeout(closeTimeout);
    setActiveDropdown(menuItem);
  };

  // Close dropdown with delay
  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 400);
  };

  return (
    <nav className="absolute w-full bg-black/10 px-6 py-0 h-[76px] top-0 left-0 archivo-expanded z-10">
      <div className="flex items-center justify-between h-full mx-auto max-w-7xl">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/defylogo.png"
            alt="Logo"
            width={172}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        <div className="flex items-center gap-8">
          {/* Nav Links */}
          <div className="hidden space-x-8 md:flex">
            {["Solutions", "Technology", "Training", "About Us"].map(
              (item, index) => (
                <div
                  key={index}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className="group flex items-center gap-1 font-semibold text-white uppercase cursor-pointer hover:text-[#F7BE68]">
                    {item}
                    {item !== "About Us" && (
                      <ChevronDown
                        className="w-5 h-5 text-white transition-transform duration-300 group-hover:text-[#F7BE68] 
        group-hover:rotate-180"
                      />
                    )}
                  </span>

                  {/* Dropdown Menu */}
                  {activeDropdown === item && (
                    <div
                      className="absolute left-[50%] -translate-x-[50%] top-12 mt-2 bg-[#090909]/20 rounded shadow-md z-10 w-max overflow-hidden border border-white text-white"
                      onMouseEnter={() => handleMouseEnter(item)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item === "Solutions" && (
                        <>
                          <Link href="/solutions/smart-farming">
                            <p className="px-[22px] pt-[15px] pb-[14px] hover:bg-white cursor-pointer border-b border-b-[.5px] border-b-[#fff]/50 text-white hover:text-black">
                              SMART FARMING
                            </p>
                          </Link>
                          <Link href="/solutions/smart-cargo">
                            <p className="px-[22px] pb-[15px] pt-[14px] hover:bg-white cursor-pointer text-white hover:text-black">
                              SMART CARGO
                            </p>
                          </Link>
                        </>
                      )}
                      {item === "Technology" && (
                        <>
                          <Link href="/technology/jax-series">
                            <p className="px-[22px] pt-[15px] pb-[14px] hover:bg-white cursor-pointer border-b border-b-[.5px] border-b-[#fff]/50 text-white hover:text-black">
                              JAX SERIES
                            </p>
                          </Link>
                          <Link href="/technology/birdy-series">
                            <p className="px-[22px] pb-[15px] pt-[14px] hover:bg-white cursor-pointer text-white hover:text-black">
                              BIRDY SERIES
                            </p>
                          </Link>
                        </>
                      )}
                      {item === "Training" && (
                        <>
                          <Link href="/training/drone-pilot-training">
                            <p className="px-[22px] pt-[15px] pb-[14px] hover:bg-white cursor-pointer border-b border-b-[.5px] border-b-[#fff]/50 text-white hover:text-black">
                              DRONE PILOT TRAINING
                            </p>
                          </Link>
                          <Link href="/training/agriculture-drone-training">
                            <p className="px-[22px] pb-[15px] pt-[14px] hover:bg-white cursor-pointer text-white hover:text-black">
                              AGRICULTURE DRONE PILOT TRAINING
                            </p>
                          </Link>
                        </>
                      )}
                    </div>
                  )}
                </div>
              )
            )}
          </div>

          {/* Contact Us Button */}
          <Link href="/contact">
            <button className="hidden px-4 py-2 text-yellow-400 border border-yellow-400 rounded-full md:block hover:bg-yellow-400 hover:text-black">
              CONTACT US
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() =>
              setActiveDropdown(activeDropdown === "menu" ? null : "menu")
            }
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {activeDropdown === "menu" && (
        <div className="absolute left-0 flex flex-col items-center w-full text-white bg-black md:hidden top-full">
          {["Solutions", "Technology", "Training", "About Us"].map(
            (item, index) => (
              <div
                key={index}
                className="w-full py-2 text-center border-b border-gray-700"
              >
                <span
                  className="cursor-pointer"
                  onClick={() =>
                    setActiveDropdown(activeDropdown === item ? null : item)
                  }
                >
                  {item} ▾
                </span>
                {activeDropdown === item && (
                  <div className="flex flex-col">
                    {item === "Technology" && (
                      <>
                        <Link href="/jax-series">
                          <p className="py-2 text-sm">JAX SERIES</p>
                        </Link>
                        <Link href="/birdy-series">
                          <p className="py-2 text-sm">BIRDY SERIES</p>
                        </Link>
                      </>
                    )}
                  </div>
                )}
              </div>
            )
          )}

          <Link href="/contact">
            <button className="px-4 py-2 my-2 text-yellow-400 border border-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black">
              CONTACT US
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
