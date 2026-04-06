export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navLinks: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "#",
    children: [
      { label: "Mission and Vision", href: "/about/mission-and-vision" },
      { label: "Leadership", href: "/about/leadership" },
    ],
  },
  {
    label: "Providers",
    href: "#",
    children: [
      { label: "Oregon Therapists", href: "/providers/oregon-therapists" },
      { label: "California Therapists", href: "/providers/california-therapists" },
    ],
  },
  { label: "Career", href: "/career" },
  { label: "Insurances", href: "/insurances" },
  {
    label: "More",
    href: "#",
    children: [
      { label: "Types of Helping Service", href: "/more/types-of-helping-service" },
      { label: "Christian Counseling", href: "/more/christian-counseling" },
    ],
  },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact-us" },
];
