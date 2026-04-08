import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/footer";

// 1. Premium Metadata Configuration
export const metadata: Metadata = {
  metadataBase: new URL("https://guillaumecounseling.com"),
  title: "Guillaume Counseling | Maternal, Couples & Family Therapy",
  description: "counseling for individuals, couples & families. Specialized in parental mental health, cultural identity, and relationship care.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    locale: "en_US",
    type: "website",
    title: "Guillaume Counseling | Maternal, Couples & Family Therapy",
    description: "counseling for individuals, couples & families. Specialized in parental mental health, cultural identity, and relationship care.",
    url: "/",
    siteName: "Guillaume Counseling Services, P.C.",
    images: [
      {
        // Note: For best practice, save this image to your Next.js /public folder 
        // e.g., /public/images/seo-cover.jpg and update this path
        url: "https://guillaumecounseling.com/wp-content/uploads/2024/06/19569-min-e1719435648740.jpg", 
        width: 560,
        height: 560,
        type: "image/jpeg",
        alt: "Guillaume Marriage and Family Counseling | Expert Counseling Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
 icons: {
    // This looks for the file you just moved to /public
    icon: "/favicon.ico", 
    
    // For mobile devices (Apple/Android shortcuts)
    apple: [
      { 
        url: "https://guillaumecounseling.com/wp-content/uploads/2026/01/cropped-gullimo-favicon-300x300.png", 
        sizes: "180x180", 
        type: "image/png" 
      },
    ],
    
    // Specifically for Windows/Microsoft tiles
    other: [
      {
        rel: "msapplication-TileImage",
        url: "https://guillaumecounseling.com/wp-content/uploads/2026/01/cropped-gullimo-favicon-300x300.png",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // 2. Schema.org Structured Data (JSON-LD) 
  // This is what gets you rich snippets in Google Search results
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://guillaumecounseling.com/",
        "url": "https://guillaumecounseling.com/",
        "name": "Guillaume Counseling | Maternal, Couples & Family Therapy",
        "isPartOf": { "@id": "https://guillaumecounseling.com/#website" },
        "primaryImageOfPage": { "@id": "https://guillaumecounseling.com/#primaryimage" },
        "image": { "@id": "https://guillaumecounseling.com/#primaryimage" },
        "thumbnailUrl": "https://guillaumecounseling.com/wp-content/uploads/2024/06/19569-min-e1719435648740.jpg",
        "description": "counseling for individuals, couples & families. Specialized in parental mental health, cultural identity, and relationship care.",
        "breadcrumb": { "@id": "https://guillaumecounseling.com/#breadcrumb" },
        "inLanguage": "en",
        "potentialAction": [{ "@type": "ReadAction", "target": ["https://guillaumecounseling.com/"] }]
      },
      {
        "@type": "ImageObject",
        "inLanguage": "en",
        "@id": "https://guillaumecounseling.com/#primaryimage",
        "url": "https://guillaumecounseling.com/wp-content/uploads/2024/06/19569-min-e1719435648740.jpg",
        "contentUrl": "https://guillaumecounseling.com/wp-content/uploads/2024/06/19569-min-e1719435648740.jpg",
        "width": 560,
        "height": 560,
        "caption": "Guillaume Marriage and Family Counseling | Expert Counseling Services"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://guillaumecounseling.com/#breadcrumb",
        "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home" }]
      },
      {
        "@type": "WebSite",
        "@id": "https://guillaumecounseling.com/#website",
        "url": "https://guillaumecounseling.com/",
        "name": "Guillaume Counseling Services, P.C.",
        "description": "Hope, Healing, and Support",
        "potentialAction": [{
          "@type": "SearchAction",
          "target": { "@type": "EntryPoint", "urlTemplate": "https://guillaumecounseling.com/?s={search_term_string}" },
          "query-input": { "@type": "PropertyValueSpecification", "valueRequired": true, "valueName": "search_term_string" }
        }],
        "inLanguage": "en"
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Injecting the Schema.org data safely into the head */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-marcellus antialiased" suppressHydrationWarning>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}