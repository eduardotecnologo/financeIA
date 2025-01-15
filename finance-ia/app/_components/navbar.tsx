/* eslint-disable jsx-a11y/alt-text */
"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between px-8 py-4 border-b border-solid">
      <div className="flex items-center gap-10">
        {/*ESQUERDA*/}
        <Image src="/logo.png" width={173} height={39} alt={"Premium.AI"} />
        <Link
          href="/"
          className={
            pathname === "/" ? "text-primary" : "text-muted-foreground"
          }
        >
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={
            pathname === "/transactions"
              ? "text-primary"
              : "text-muted-foreground"
          }
        >
          Transações
        </Link>
        <Link
          href="/subscriptions"
          className={
            pathname === "/subscriptions"
              ? "text-primary"
              : "text-muted-foreground"
          }
        >
          Assinaturas
        </Link>
      </div>
      {/*DIREITA*/}
      <UserButton showName />
    </nav>
  );
};
export default Navbar;
