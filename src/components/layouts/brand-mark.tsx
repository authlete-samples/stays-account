/**
 * Brand mark for the top bar and sign-in panel. Renders the configured logo
 * image when set, otherwise a neutral built-in mark drawn in `currentColor` so
 * it adapts to whatever surface (light bar, dark panel) it sits on.
 */

import Image from "next/image";
import { cn } from "@/lib/utils";
import { activeBrand } from "@/brand/brand";

export function BrandMark({ className }: { className?: string }) {
  if (activeBrand.logoMark) {
    return (
      <Image
        src={activeBrand.logoMark}
        alt={activeBrand.productName}
        width={24}
        height={24}
        className={cn("h-6 w-6", className)}
      />
    );
  }
  // Stays' mark: a sun over the water. Drawn in currentColor so it adapts to the surface.
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className={cn("h-6 w-6", className)}>
      <circle cx="12" cy="9.5" r="4" fill="currentColor" />
      <path
        d="M3.5 16.5h17M6.5 20h11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
