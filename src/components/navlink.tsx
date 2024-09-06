"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navlink({
  children,
  href,
}: Readonly<{
  children: React.ReactNode;
  href: string;
}>) {
  const pathname = usePathname();
  const isActive = pathname?.startsWith(href);

  return (
    <Button
      variant="link"
      className={cn(
        isActive ? "text-primary/80" : "text-primary/60 hover:text-primary/80"
      )}
      asChild
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}
