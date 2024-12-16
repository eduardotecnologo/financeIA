import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "../_components/navbar";

const SubscriptionPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/loginj");
  }
  return <Navbar />;
};

export default SubscriptionPage;
