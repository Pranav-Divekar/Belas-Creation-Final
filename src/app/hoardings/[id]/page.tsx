

import BillboardDetailPageClient from "@/app/hoardings/[id]/BillboardDetailPageClient";
import detailedInfo from "@/data/detailed_info.json";
import { notFound } from "next/navigation";

// Type for params prop
interface BillboardPageProps {
  params: {
    id: string;
  };
}

// Generate static paths for dynamic routes
export async function generateStaticParams() {
  return detailedInfo.boards.map((board) => ({
    id: board.id.toString(),
  }));
}

// Main page component
export default function Page({ params }: BillboardPageProps) {
  const board = detailedInfo.boards.find(
    (b) => b.id.toString() === params.id
  );

  if (!board) {
    notFound();
    return null; // necessary for TypeScript to be happy after notFound()
  }

  return <BillboardDetailPageClient params={params} board={board} />;
}
