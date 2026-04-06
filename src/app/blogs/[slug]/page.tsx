import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string; alt_text: string }>;
  };
}

async function getPost(slug: string): Promise<WPPost | null> {
  const res = await fetch(`https://guillaumecounseling.com/wp-json/wp/v2/posts?slug=${slug}&_embed`, { next: { revalidate: 3600 } });
  if (!res.ok) return null;
  const data = await res.json();
  return data[0] || null;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) {
    return { title: 'Post Not Found | Guillaume Counseling' };
  }
  
  const plainTitle = post.title.rendered.replace(/<[^>]*>/g, "");
  const plainDescription = post.excerpt.rendered.replace(/<[^>]*>/g, "").slice(0, 160);
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return {
    title: `${plainTitle} | Guillaume Counseling`,
    description: plainDescription,
    alternates: {
      canonical: `https://guillaumecounseling.com/blogs/${params.slug}`
    },
    openGraph: {
      images: featuredImage ? [featuredImage] : undefined,
    }
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0];
  const plainTitle = post.title.rendered.replace(/<[^>]*>/g, "");

  return (
    <main id="main-content" className="pt-24 pb-16 md:pb-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link href="/blogs" className="inline-flex items-center gap-2 text-primary hover:underline mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to Blogs
        </Link>

        {featuredImage && (
          <img
            src={featuredImage.source_url}
            alt={featuredImage.alt_text || plainTitle}
            className="w-full rounded-lg mb-8 max-h-96 object-cover"
            loading="eager"
          />
        )}

        <p className="text-sm text-muted-foreground mb-4">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <h1
          className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        <div
          className="prose prose-lg max-w-none text-foreground prose-headings:font-heading prose-headings:text-foreground prose-a:text-primary"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </div>
    </main>
  );
}
