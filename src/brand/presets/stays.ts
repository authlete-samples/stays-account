import type { Brand } from "../brand";

// Matches the Stays store (poppy-company): teal on warm cream, sans body + serif
// display, the sun-over-water mark. Keep in sync with that store's brand.
const SANS =
  'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
const SERIF = '"Iowan Old Style", Georgia, "Times New Roman", serif';

/** Stays — boutique coastal stays. */
export const stays: Brand = {
  productName: "Stays",
  fontFamily: SANS,
  fontDisplay: SERIF,
  accent: "#e9dcc3",
  light: {
    primary: "#0f766e",
    primaryForeground: "#ffffff",
    ring: "#0f766e",
  },
  dark: {
    primary: "#2dd4bf",
    primaryForeground: "#04312e",
    ring: "#2dd4bf",
  },
  panel: {
    background: "linear-gradient(150deg, #0c3b37 0%, #0f766e 100%)",
    headline: "Rooms by the water.",
    subhead: "Sign in to book and manage your stay.",
    bullets: ["See and manage your bookings", "Approve exactly what your agent can do"],
    footer: "Stays · boutique coastal stays",
  },
};
