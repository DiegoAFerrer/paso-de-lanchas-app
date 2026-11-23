import { Laptop, ScrollText, ShieldCheck } from "lucide-react";

import type { NavItem } from "@/components/navigation/bottom-nav";
import { SidebarNav } from "@/components/navigation/sidebar-nav";

const icon = "size-4";

const items: NavItem[] = [
  { href: "/superadmin", label: "Cuentas", icon: <ShieldCheck className={icon} />, exact: true },
  { href: "/superadmin/computadoras", label: "Computadoras", icon: <Laptop className={icon} /> },
  { href: "/superadmin/bitacora", label: "Bitácora", icon: <ScrollText className={icon} /> },
];

export default function SuperadminLayout({ children }: LayoutProps<"/superadmin">) {
  return (
    <div className="flex flex-1 flex-col md:flex-row">
      <SidebarNav title="Superadministración" items={items} />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
