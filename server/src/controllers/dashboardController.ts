import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getDashboardMetrics = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Fetch the top 15 popular products sorted by stock quantity in descending order
    const popularProducts = await prisma.products.findMany({
      take: 15,
      orderBy: {
        stockQuantity: "desc",
      },
    });

    // Fetch the most recent 5 sales summaries
    const salesSummary = await prisma.salesSummary.findMany({
      take: 5,
      orderBy: {
        date: "desc",
      },
    });

    // Fetch the most recent 5 purchase summaries
    const purchaseSummary = await prisma.purchaseSummary.findMany({
      take: 5,
      orderBy: {
        date: "desc",
      },
    });

    // Fetch the most recent 5 expense summaries
    const expenseSummary = await prisma.expenseSummary.findMany({
      take: 5,
      orderBy: {
        date: "desc",
      },
    });

    // Fetch the most recent 5 expense-by-category summaries and convert `BigInt` amounts to strings
    const expenseByCategorySummaryRaw = await prisma.expenseByCategory.findMany(
      {
        take: 5,
        orderBy: {
          date: "desc",
        },
      }
    );

    // Convert `BigInt` amounts to strings for JSON serialization
    const expenseByCategorySummary = expenseByCategorySummaryRaw.map(
      (item: { amount: { toString: () => any } }) => ({
        ...item,
        amount: item.amount.toString(),
      })
    );

    // Send the data as JSON response
    res.json({
      popularProducts,
      salesSummary,
      purchaseSummary,
      expenseSummary,
      expenseByCategorySummary,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error retrieving dashboard metrics" });
  }
};
