import { Article, CreateArticleForm } from "@/components/Article";
import DummyJson from "../dummy.json";

export default function Home() {
  return (
    <section
      className=" max-w-3xl mx-auto"
    >
      <CreateArticleForm />

      {
        DummyJson.map((article) => (
          <Article
            key={article.id}
            {...article}
          />
        ))
      }

    </section>
  )
}
