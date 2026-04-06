import { ReactNode } from "react";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  breadcrumbs?: { label: string; href: string }[];
  metaTitle?: string;
  metaDescription?: string;
  children?: ReactNode;
}

export const PageHero = ({ title, breadcrumbs, metaTitle, metaDescription, children }: PageHeroProps) => {
  return (
    <>
      <section className="bg-gradient-to-r from-primary to-secondary pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4">
            {title}
          </h1>
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-sm text-primary-foreground/80">
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-2">
                  {i > 0 && <ChevronRight className="h-4 w-4" />}
                  {crumb.href !== "#" ? (
                    <Link href={crumb.href} className="hover:text-primary-foreground transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span>{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          )}
          {children}
        </div>
      </section>
    </>
  );
};
