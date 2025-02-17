import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Navbar from "../_components/navbar";
import SummaryCards from "./_components/summary-cards";
import TimeSelect from "./_components/time-select";
import isMatch from "date-fns/isMatch";
import TransactionsPieCharts from "./_components/transactions-pie-charts";
import { getDashboard } from "../_data/get-dashboard";

interface HomeProps {
  searchParams: {
    month: string;
  }
}
const Home = async ({searchParams: {month}}: HomeProps) => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  // Verificando se a rota(Mês) existe
  const monthIsInvalid = !month || !isMatch(month, 'MM');
  if(monthIsInvalid){
    redirect('?month=01')
  }

  const dashboard = await getDashboard(month);

  return (
    <>
      <Navbar />
     <div className="space-y-6 p-6">
      <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <TimeSelect/>
        </div>
        <SummaryCards month={month}{...dashboard}/>
          <div className="grid grid-cols-3 grid-rows-1 gap-6">
            <TransactionsPieCharts {...dashboard} />
          </div>
        </div>
    </>
  );
};

export default Home;
