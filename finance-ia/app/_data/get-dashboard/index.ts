import { db } from "@/app/_lib/prisma";

export const getDashboard = async (month: string) =>{
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
      
      return {
        balance,
        depositsTotal,
        investmentsTotal,
        expensesTotal
      }
}