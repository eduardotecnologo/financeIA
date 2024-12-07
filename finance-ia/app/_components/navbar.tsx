import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
    return (  
        <nav className="flex justify-between">
            {/*ESQUERDA*/}
            <Image src="/logo2.png" width={173} height={39} alt="PremiunAI Finance"/>
            <div className="flex items-center gap-10">
                <Link href="/">Dashboard</Link>
                <Link href="/transactions">Tranzações</Link>
                <Link href="/subscription">Assinatura</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;