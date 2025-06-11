

// import BillboardDetailPageClient from "@/app/hoardings/[id]/BillboardDetailPageClient";
// import detailedInfo from "@/data/detailed_info.json";
// import { notFound } from "next/navigation";

// // Type for params prop
// interface BillboardPageProps {
//   params: {
//     id: string;
//   };
// }

// // Generate static paths for dynamic routes
// export async function generateStaticParams() {
//   return detailedInfo.boards.map((board) => ({
//     id: board.id.toString(),
//   }));
// }

// // Main page component
// export default function Page({ params }: BillboardPageProps) {
//   const board = detailedInfo.boards.find(
//     (b) => b.id.toString() === params.id
//   );

//   if (!board) {
//     notFound();
//     return null; // necessary for TypeScript to be happy after notFound()
//   }

//   return <BillboardDetailPageClient params={params} board={board} />;
// }

import BillboardDetailPageClient from "./BillboardDetailPageClient"
import detailedInfo from "@/data/detailed_info.json"
import { notFound } from "next/navigation"

// Use the correct Next.js page props type - params should be a Promise
interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default async function Page({ params }: PageProps) {
  // Await params before accessing its properties
  const { id } = await params

  const board = detailedInfo.boards.find((b) => b.id.toString() === id)

  if (!board) {
    notFound()
    return null
  }

  return <BillboardDetailPageClient params={{ id }} board={board} />
}

// Static generation for all available IDs
export async function generateStaticParams() {
  return detailedInfo.boards.map((board) => ({
    id: board.id.toString(),
  }))
}

