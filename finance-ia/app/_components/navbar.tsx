/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <div className="items center gap10">
        {/*ESQUERDA*/}
        <Image src="/logo.png" width={173} height={39} alt={"Premium.AI"} />
        <Link href="/">Dashboard</Link>
        <Link href="/transactions">Transações</Link>
        <Link href="/subscriptions">Assinaturas</Link>
      </div>
    </nav>
  );
};
export default Navbar;
