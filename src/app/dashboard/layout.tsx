import { ModeToggle } from "@/components/mode-toggle";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navlink from "@/components/navlink";

export const metadata: Metadata = {
    title: "Novelti Website Admin",
    description: "Novelti Muis Website Admin Page",
  };

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="sticky top-0 py-4 shadow shadow-primary">
        <div className="container flex justify-between items-center">

        <div className="flex justify-start gap-2">
          <Link
            href="/dashboard"
            className="mr-4 flex justify-center items-center w-full"
          >
            <Image
              className="dark:invert-0 invert "
              src="https://nextjs.org/icons/vercel.svg"
              alt="Novelti Muis Logo"
              width={20}
              height={20}
            />
          </Link>
          <Navlink href='/dashboard/content'>Content</Navlink>
        </div>
        <div className="flex justify-end">
          <ModeToggle />
        </div>
        </div>
      </header>
      {children}
    </>
  );
}
