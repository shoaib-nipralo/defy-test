"use client";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/common/Navbar"), {
  ssr: false,
});

export default function NavbarWrapper() {
  return <Navbar />;
}
