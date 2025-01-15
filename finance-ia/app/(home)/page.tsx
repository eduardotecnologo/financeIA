import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "../_components/navbar";
import SummaryCards from "./_components/summary-cards";

const Home = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  return (
    <>
      <Navbar />
      <SummaryCards />
    </>
  );

  // return (
  //   <div className="flex h-full items-center justify-center">
  //     <UserButton showName />
  //   </div>
  // );
};

export default Home;
