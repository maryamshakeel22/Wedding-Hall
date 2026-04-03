"use client";

import { useEffect, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";

/**
 * Custom hook to handle hash-based navigation in Next.js
 * Fixes the issue where hash links don't work after route changes
 */
export function useHashNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  // Handle hash navigation on route change
  useEffect(() => {
    // Get hash from URL
    const hash = window.location.hash;
    
    if (hash) {
      // Wait for content to render, then scroll to element
      const timeoutId = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [pathname]);

  // Function to navigate with hash
  const navigateWithHash = useCallback((hash: string) => {
    // If we're already on the home page, just scroll
    if (pathname === "/") {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        // Update URL without triggering navigation
        window.history.pushState(null, "", hash);
      }
    } else {
      // If we're on another page, navigate to home with hash
      router.push(`/${hash}`);
    }
  }, [pathname, router]);

  return { navigateWithHash };
}
