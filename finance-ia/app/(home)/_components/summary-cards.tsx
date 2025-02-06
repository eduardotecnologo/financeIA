import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import SummaryCard from "./summary-card";
interface SummaryCards {
  month: string;
  balance: number;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;

}

const SummaryCards = async ({ 
  balance,
  depositsTotal,
  investmentsTotal,
  expensesTotal }: SummaryCards) => {
 
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
