import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import { ClerkProviderWrapper } from "@/components/ClerkProviderWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Royal Wedding Hall | Premium Wedding & Event Venue",
  description:
    "Experience luxury and elegance at Royal Wedding Hall. The perfect venue for weddings, mehndi, birthdays, and all special occasions. Book your special day today!",
  keywords: [
    "wedding hall",
    "marriage venue",
    "event space",
    "wedding venue",
    "mehndi hall",
    "birthday party venue",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background transition-colors duration-300" suppressHydrationWarning>
        
          <ThemeProvider>
            <ClerkProviderWrapper>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            </ClerkProviderWrapper>
          </ThemeProvider>
        
      </body>
    </html>
  );
}