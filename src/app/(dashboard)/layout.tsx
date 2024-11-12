import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <div className="w-full h-screen flex">
     {/* Left */}
    <div className="w-[16%] md:w-[8%] lg:w-[20%]  h-screen">
        <Link href={"/"} className="flex items-center justify-center lg:justify-start pt-4 gap-2">
          <Image src={"/logo.png"} alt="Logo"  width={32} height={32} />
          <p className="hidden lg:block font-bold text-black ">Superior Erp</p>
        </Link>
        <Menu/>
    </div>
    {/*Right*/}

    <div className="w-[84%] md:w-[92%] lg:w-[80%] h-screen flex flex-col px-4 bg-[#F7F8FA] overflow-y-scroll">
          <Navbar/>
          {children}
    </div>
  </div>
  );
}
