"use client";

import { ClerkProvider } from "@clerk/nextjs";
// import { useTheme } from "@/contexts/ThemeProvider";

interface ClerkProviderWrapperProps {
  children: React.ReactNode;
}

export function ClerkProviderWrapper({ children }: ClerkProviderWrapperProps) {
  // const { theme } = useTheme();

  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#d4af37",
          // colorBackground: theme === "dark" ? "#0f172a" : "#ffffff",
          // colorText: theme === "dark" ? "#f1f5f9" : "#171717",
          // colorTextSecondary: theme === "dark" ? "#94a3b8" : "#6b7280",
          // colorInputBackground: theme === "dark" ? "#1e293b" : "#f9fafb",
          // colorInputText: theme === "dark" ? "#f1f5f9" : "#171717",
          // colorInputBorder: theme === "dark" ? "#475569" : "#e5e7eb",
          colorButtonPrimary: "#d4af37",
          colorButtonPrimaryText: "#ffffff",
          borderRadius: "0.75rem",
        },
        elements: {
          card: "bg-white dark:bg-slate-900",
          headerTitle: "text-gray-900 dark:text-white",
          headerSubtitle: "text-gray-600 dark:text-gray-400",
          socialButtonsBlockButton: "bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300",
          formFieldLabel: "text-gray-700 dark:text-gray-300",
          formFieldInput: "bg-gray-50 dark:bg-slate-800 border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white",
          formButtonPrimary: "bg-gradient-to-r from-[#d4af37] to-[#f4e5b2] hover:from-[#b89628] hover:to-[#d4af37]",
          footerActionLink: "text-[#d4af37] hover:text-[#b89628]",
          dividerLine: "bg-gray-200 dark:bg-slate-700",
          dividerText: "text-gray-500 dark:text-gray-400",
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
}
