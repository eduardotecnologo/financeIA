import { ArrowDownUpIcon } from "lucide-react";
import { db } from "../_lib/prisma";
import { transactionColumns } from "./_columns";
import { DataTable } from "../_components/ui/data-table";
import { Button } from "../_components/ui/button";

const TransactionsPage = async () => {
  // Acessando as transações do DB
  const transactions = await db.transaction.findMany({});
  return (
    <div className="space-y-6 p-6">
      {/* TÍTULO E BOTÃO */}
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <Button className="">
          <ArrowDownUpIcon />
          Adicionar tranzações
        </Button>
        {/* <AddTransactionButton /> */}
      </div>
      <DataTable columns={transactionColumns} data={transactions} />
    </div>
  );
};
export default TransactionsPage;
