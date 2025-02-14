import * as React from "react";

import { Navbar } from "@/components/dashboard/navbar";

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  const navigation = [
    {
      label: "General",
      href: "/app/settings/general",
      segment: "general",
    },
    {
      label: "Team",
      href: "/app/settings/team",
      segment: "team",
    },
    {
      label: "Root Keys",
      href: "/app/settings/root-keys",
      segment: "root-keys",
    },
    {
      label: "Billing",
      href: "/app/stripe",
      segment: null,
    },
    {
      label: "Usage",
      href: "/app/settings/usage",
      segment: "usage",
    },
    {
      label: "Vercel Integration",
      href: "/app/settings/vercel",
      segment: "vercel",
    },
    {
      label: "User",
      href: "/app/settings/user",
      segment: "user",
    },
  ];

  return (
    <div>
      <div className="space-y-1 ">
        <h2 className="text-2xl font-semibold tracking-tight">Settings</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">Manage your workspace settings.</p>
      </div>

      <Navbar navigation={navigation} className="mt-8" />

      <main className="mt-8 mb-20">{children}</main>
    </div>
  );
}
