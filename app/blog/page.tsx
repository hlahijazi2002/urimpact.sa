"use client";
import Link from "next/link";
import { post as post1 } from "../../content/blog/esg-reporting-saudi-arabia";
import { post as post2 } from "../../content/blog/ghg-emissions-tracking-saudi-arabia";
import { post as post3 } from "../../content/blog/net-zero-planning-saudi-arabia";
import { post as post4 } from "../../content/blog/ifrs-s1-s2-saudi-arabia";
import { post as post5 } from "../../content/blog/esg-software-middle-east";
import { post as post6 } from "../../content/blog/carbon-footprint-measurement-saudi-arabia";
import { useLang } from "../../context/LangContext";

const posts = [post1, post2, post3, post4, post5, post6];

export default function BlogPage() {
  const { lang } = useLang();
  const isAr = lang === "ar";

  return (
    <main className="min-h-screen bg-[#050D0A] pt-32 pb-20" dir={isAr ? "rtl" : "ltr"}>
      <div className="container-main">
        <h1 className="text-4xl font-black text-white mb-4">
          {isAr ? "رؤى الاستدامة" : "Sustainability Insights"}
        </h1>
        <p className="text-white/50 mb-12">
          {isAr
            ? "موارد ESG والاستدامة للمؤسسات في المملكة العربية السعودية"
            : "ESG and sustainability resources for enterprises in Saudi Arabia"}
        </p>
        <div className="grid gap-6">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <div className="p-6 rounded-2xl border border-white/10 bg-white/3 hover:border-[#00E5A0]/30 transition-all">
                <span className="text-xs text-white/30">{post.date}</span>
                <h2 className="text-xl font-bold text-white mt-2 mb-3">
                  {isAr ? post.title.ar : post.title.en}
                </h2>
                <p className="text-white/50 text-sm">
                  {isAr ? post.description.ar : post.description.en}
                </p>
                <span className="text-[#00E5A0] text-sm mt-4 block">
                  {isAr ? "اقرأ المزيد ←" : "Read more →"}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}