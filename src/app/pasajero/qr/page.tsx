import type { Metadata } from "next";

import { requireRole } from "@/lib/auth/require-role";

import { QrScreen } from "./qr-screen";

export const metadata: Metadata = { title: "Mi QR" };

export default async function QrPage() {
  const user = await requireRole("PASSENGER");
  return <QrScreen userId={user.id} />;
}

import Link from "next/link";

<Link
  href="/pasajero/qr"
  className="bg-brand mx-auto my-4 flex min-h-14 w-full max-w-md items-center justify-center rounded-xl px-4 text-lg font-semibold text-white"
>
  Mostrar mi QR
</Link>;
