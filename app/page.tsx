'use client';
import { ArticleLoader, CreateArticleForm } from "@/components/Article";
import dynamic from "next/dynamic";
import DummyJson from "../dummy.json";

const Article = dynamic(
  () => import("@/components/Article/Article").then(mod => mod.Article),
  { ssr: false }
)

export default function Home() {
  return (
    <section
      className=" max-w-3xl mx-auto pb-10"
    >
      <CreateArticleForm />
      {
        DummyJson.map((article) => (
          <Article
            key={article.id}
            article={article}
          />
        ))
      }

      <ArticleLoader />

    </section>
  )
}
