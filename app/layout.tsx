import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CreatorTax – Tax Expense Tracker for Content Creators",
  description: "Track tax-deductible expenses for YouTubers, streamers, podcasters, and influencers. Generate tax-ready reports automatically."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5aec3096-7558-4dd6-8c39-fbb3543f3f51"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
