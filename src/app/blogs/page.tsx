import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Calendar } from "lucide-react";

interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string; alt_text: string }>;
  };
}

async function getPosts(): Promise<WPPost[]> {
  const res = await fetch("https://guillaumecounseling.com/wp-json/wp/v2/posts?_embed&per_page=12", { next: { revalidate: 3600 } });
  if (!res.ok) return [];
  return res.json();
}

const Blogs = async () => {
  const posts = await getPosts();

  return (
    <>
      <PageHero
        title="Blogs"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blogs", href: "#" },
        ]}
      />

      <main id="main-content" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => {
              const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0];
              return (
                <Link
                  key={post.id}
                  href={`/blogs/${post.slug}`}
                  className="group bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {featuredImage && (
                    <img
                      src={featuredImage.source_url}
                      alt={featuredImage.alt_text || post.title.rendered}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  )}
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <h2
                      className="font-heading font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                    <div
                      className="text-sm text-muted-foreground line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                    <span className="inline-block mt-3 text-primary font-medium text-sm">
                      Read More →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Blogs;

export const metadata = {
  title: "Blogs | Guillaume Counseling",
  description: "Read our latest blog posts on mental health, relationships, and counseling.",
};

