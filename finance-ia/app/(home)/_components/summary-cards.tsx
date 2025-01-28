import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./summary-card";
import { db } from "@/app/_lib/prisma";

const SummaryCards = async () => {

  const depositsTotal = Number((
    await db.transaction.aggregate({
    where: {type: "DEPOSIT"},
    _sum:{amount: true}
  }))?._sum?.amount,
);

  const investmentsTotal = Number((
    await db.transaction.aggregate({
    where: {type: "INVESTMENT"},
    _sum:{amount: true},
  }))?._sum?.amount
);
  const expensesTotal = Number((await db.transaction.aggregate({
    where: {type: "EXPENSE"},
    _sum:{amount: true}
  }))?._sum?.amount);
  
  const balance = depositsTotal - investmentsTotal - expensesTotal;

  return (
    <div className="space-y-6">
      {/*Primeiro Card*/}

      <SummaryCard 
        icon={<WalletIcon size={16}/>} 
        title="Saldo" 
        amount={balance}
        size="large"/>

      {/*Outros Cards*/}
      <div className="grid grid-cols-3">
        <SummaryCard 
        icon={< PiggyBankIcon size={16}/>}
        title="Investido"
        amount={investmentsTotal}
        />

      <SummaryCard 
        icon={< TrendingUpIcon size={16}/>}
        title="Investido"
        amount={depositsTotal}
        />

      <SummaryCard 
        icon={< TrendingDownIcon size={16}/>}
        title="Investido"
        amount={expensesTotal}
        />

      </div>
    </div>
  );
};

export default SummaryCards;
