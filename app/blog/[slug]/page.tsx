"use client";
import { notFound } from "next/navigation";
import { useLang } from "../../../context/LangContext";
import { useParams } from "next/navigation";
import { post as post1 } from "../../../content/blog/esg-reporting-saudi-arabia";
import { post as post2 } from "../../../content/blog/ghg-emissions-tracking-saudi-arabia";
import { post as post3 } from "../../../content/blog/net-zero-planning-saudi-arabia";
import { post as post4 } from "../../../content/blog/ifrs-s1-s2-saudi-arabia";
import { post as post5 } from "../../../content/blog/esg-software-middle-east";
import { post as post6 } from "../../../content/blog/carbon-footprint-measurement-saudi-arabia";

const posts = [post1, post2, post3, post4, post5, post6];

export default function BlogPostPage() {
  const { lang } = useLang();
  const isAr = lang === "ar";
  const params = useParams();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) notFound();

  return (
    <main className="min-h-screen bg-[#050D0A] pt-32 pb-20" dir={isAr ? "rtl" : "ltr"}>
      <div className="container-main max-w-3xl">
        <span className="text-xs text-white/30">{post.date}</span>
        <h1 className="text-4xl font-black text-white mt-3 mb-6 leading-tight">
          {isAr ? post.title.ar : post.title.en}
        </h1>
        <p className="text-white/60 text-lg leading-relaxed border-b border-white/10 pb-8 mb-10">
          {isAr ? post.description.ar : post.description.en}
        </p>
        <div className="space-y-10">
          {post.sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-2xl font-bold text-[#00E5A0] mb-4">
                {isAr ? section.heading.ar : section.heading.en}
              </h2>
              <p className="text-white/70 leading-relaxed text-base">
                {isAr ? section.body.ar : section.body.en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}