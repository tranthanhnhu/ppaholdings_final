"use client";

import { useEffect } from "react";
import Link from "next/link";

/**
 * Static export: middleware + server `redirect()` do not produce a reliable `/`.
 * Client replace works on any static host; Hostinger Apache also gets `.htaccess`
 * (copied in deploy script if needed).
 */
export default function RootPage() {
  useEffect(() => {
    window.location.replace("/vi/");
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        background: "#f7f6f2",
        color: "#091725",
        fontFamily:
          "var(--font-plus-jakarta), system-ui, -apple-system, sans-serif",
      }}
    >
      <p>
        Đang chuyển hướng…{" "}
        <Link href="/vi/" style={{ color: "#c2995b" }}>
          /vi/
        </Link>
      </p>
    </main>
  );
}
