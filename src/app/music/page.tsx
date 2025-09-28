"use client";

import AppShell from "@/components/common/AppShell";
import dynamic from "next/dynamic";
const MusicWidget = dynamic(
  () => import("@/components/widgets").then((m) => m.MusicWidget),
  { ssr: false }
);

export default function MusicPage() {
  return (
    <AppShell>
      <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8 my-8">
        <div>
          <MusicWidget title="Now Playing" />
        </div>
        <div />
      </div>
    </AppShell>
  );
}
