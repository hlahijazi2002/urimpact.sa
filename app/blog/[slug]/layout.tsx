import { post as post1 } from "../../../content/blog/esg-reporting-saudi-arabia";
import { post as post2 } from "../../../content/blog/ghg-emissions-tracking-saudi-arabia";
import { post as post3 } from "../../../content/blog/net-zero-planning-saudi-arabia";
import { post as post4 } from "../../../content/blog/ifrs-s1-s2-saudi-arabia";
import { post as post5 } from "../../../content/blog/esg-software-middle-east";
import { post as post6 } from "../../../content/blog/carbon-footprint-measurement-saudi-arabia";

const posts = [post1, post2, post3, post4, post5, post6];

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title.en} | URIMPACT`,
    description: post.description.en,
    openGraph: {
      title: post.title.en,
      description: post.description.en,
      url: `https://urimpact.sa/blog/${post.slug}`,
      type: "article",
    },
  };
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
