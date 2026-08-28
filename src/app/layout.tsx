import type { Metadata } from "next";
import { Providers } from "@/src/app/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "NovaShop",
  description: "A modern e-commerce storefront built with Next.js.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-background text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
