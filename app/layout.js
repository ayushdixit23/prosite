import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./redux/StoreProvider";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/ui/theme-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prosite",
  description: "Created By Grovyo Platforms Ltd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} select-none`}>
        <Toaster />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
