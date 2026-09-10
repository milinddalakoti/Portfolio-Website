/**
 * Shared navigation slot definitions — single source of truth.
 *
 * Used by FolioRail.astro (server-side active-state + client-side hash
 * sync) and Nav.astro (client-side link highlight). Every component that
 * needs to know which section owns which deep-route prefix imports from
 * here; never hand-copy the list.
 */
export interface Slot {
  /** 1-based chapter number, e.g. 1 -> "01" */
  n: number;
  href: string;
  label: string;
  /**
   * Optional list of path prefixes that this slot "owns" in addition
   * to `href`. Useful when the visible route and the nested-route
   * prefix differ — e.g. the Education slot owns `/#education` and also
   */
  matchPrefixes?: string[];
}

export const slots: Slot[] = [
  { n: 1, href: "/#home", label: "Home" },
  { n: 2, href: "/#now", label: "Now" },
  { n: 3, href: "/#experience", label: "Experience", matchPrefixes: ["/experience/"] },
  { n: 4, href: "/#skills", label: "Skills", matchPrefixes: ["/skills/"] },
  { n: 5, href: "/#education", label: "Education", matchPrefixes: ["/education/"] },
  { n: 6, href: "/#projects", label: "Projects", matchPrefixes: ["/projects/"] },
  { n: 7, href: "/#contact", label: "Contact" },
] as const;
