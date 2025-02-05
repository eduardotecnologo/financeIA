import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./summary-card";
import { db } from "@/app/_lib/prisma";
interface SummaryCards {
  month: string;
}

const SummaryCards = async ({ month }: SummaryCards) => {
  const where = {
    date: {  // ✅ Agora os filtros estão dentro do campo correto
      gte: new Date(`2024-${String(month).padStart(2, "0")}-01`),
      lt: new Date(`2024-${String(month).padStart(2, "0")}-31`),
    },
  };

  const depositsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "DEPOSIT" }, // ✅ Agora usa o filtro corretamente
        _sum: { amount: true },
      })
    )?._sum?.amount
  );

  const investmentsTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "INVESTMENT" },
        _sum: { amount: true },
      })
    )?._sum?.amount
  );

  const expensesTotal = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "EXPENSE" },
        _sum: { amount: true },
      })
    )?._sum?.amount
  );

  const balance = depositsTotal - investmentsTotal - expensesTotal;

  return (
    <div className="space-y-6">
      {/* Primeiro Card */}
      <SummaryCard
        icon={<WalletIcon size={16} />}
        title="Saldo"
        amount={balance}
        size="large"
      />

      {/* Outros Cards */}
      <div className="grid grid-cols-3">
        <SummaryCard
          icon={<PiggyBankIcon size={16} />}
          title="Investido"
          amount={investmentsTotal}
        />

        <SummaryCard
          icon={<TrendingUpIcon size={16} />}
          title="Depósitos"
          amount={depositsTotal}
        />

        <SummaryCard
          icon={<TrendingDownIcon size={16} />}
          title="Gastos"
          amount={expensesTotal}
        />
      </div>
    </div>
  );
};

export default SummaryCards;
